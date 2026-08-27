import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

/**
 * Mask applicant full name for public tracking display
 * Example: "Ramesh Sharma" -> "R**** S*****"
 */
function maskName(name: string): string {
  if (!name) return "A********";
  const parts = name.trim().split(/\s+/);
  return parts
    .map((part) => {
      if (part.length <= 1) return part;
      return part[0] + "*".repeat(Math.max(4, part.length - 1));
    })
    .join(" ");
}

/**
 * Generate a unique 8-digit tracking reference ID
 * Example: "CC-78945612"
 */
function generateTrackingId(): string {
  const random8Digits = Math.floor(10000000 + Math.random() * 90000000);
  return `CC-${random8Digits}`;
}

export interface SubmitLeadRequest {
  fullName: string;
  mobile: string;
  city: string;
  loanCategory: string;
  amount: number;
  consent: boolean;
  marketingConsent?: boolean;
  sourcePage?: string;
  email?: string;
  employmentType?: string;
  monthlyIncome?: number;
}

/**
 * 1. submitLead Cloud Function (asia-south1)
 * Ingests loan applications with DPDP consent verification, deduplication, and Firestore storage.
 */
export const submitLead = onCall(
  {
    region: "asia-south1",
    cors: true,
    maxInstances: 10,
  },
  async (request) => {
    const data = request.data as SubmitLeadRequest;

    if (!data) {
      throw new HttpsError("invalid-argument", "Missing application payload.");
    }

    const fullName = (data.fullName || "").trim();
    const cleanMobile = (data.mobile || "").replace(/\D/g, "");
    const city = (data.city || "").trim();
    const loanCategory = (data.loanCategory || "Personal Loan").trim();
    const amount = Number(data.amount) || 0;
    const consent = Boolean(data.consent);
    const marketingConsent = Boolean(data.marketingConsent);
    const sourcePage = (data.sourcePage || "/").trim();

    // 1. Mandatory DPDP Compliance Gate
    if (!consent) {
      throw new HttpsError(
        "failed-precondition",
        "Mandatory DPDP consent for data sharing with lending partners is required to submit an application."
      );
    }

    // 2. Input Validation
    if (!fullName || fullName.length < 2) {
      throw new HttpsError("invalid-argument", "Please enter your full name as per PAN card.");
    }

    if (cleanMobile.length !== 10) {
      throw new HttpsError("invalid-argument", "Please enter a valid 10-digit Indian mobile number.");
    }

    if (!city) {
      throw new HttpsError("invalid-argument", "Please provide your current city.");
    }

    // 3. Deduplication Check (Prevent duplicate submissions within 5 minutes)
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const recentLeadsSnapshot = await db
      .collection("leads")
      .where("mobile", "==", cleanMobile)
      .where("submittedAt", ">=", fiveMinutesAgo)
      .limit(1)
      .get();

    if (!recentLeadsSnapshot.empty) {
      const existingDoc = recentLeadsSnapshot.docs[0];
      const existingData = existingDoc.data();
      return {
        success: true,
        applicationId: existingData.applicationId || existingDoc.id,
        message: "Your application was already received. Our credit manager is reviewing it.",
        timestamp: existingData.submittedAt || new Date().toISOString(),
      };
    }

    // 4. Generate Reference ID and Store Record
    const applicationId = generateTrackingId();
    const nowIso = new Date().toISOString();
    const maskedName = maskName(fullName);

    const leadRecord = {
      applicationId,
      fullName,
      applicantNameMasked: maskedName,
      mobile: cleanMobile,
      city,
      loanCategory,
      amount,
      consent,
      marketingConsent,
      sourcePage,
      status: "Under Review",
      remarks: "Application received. Initial credit appraisal in progress by underwriting desk.",
      submittedAt: nowIso,
      updatedAt: nowIso,
      ip: request.rawRequest?.ip || "Unknown",
    };

    await db.collection("leads").doc(applicationId).set(leadRecord);

    return {
      success: true,
      applicationId,
      message: "Application submitted successfully. A senior credit manager will contact you shortly.",
      timestamp: nowIso,
    };
  }
);

export interface TrackApplicationRequest {
  applicationId: string;
}

/**
 * 2. trackApplication Cloud Function (asia-south1)
 * Public status lookup by Reference ID. Returns masked applicant info & real-time status.
 */
export const trackApplication = onCall(
  {
    region: "asia-south1",
    cors: true,
    maxInstances: 10,
  },
  async (request) => {
    const data = request.data as TrackApplicationRequest;
    const appId = (data?.applicationId || "").trim().toUpperCase();

    if (!appId) {
      throw new HttpsError("invalid-argument", "Please provide an Application Reference ID.");
    }

    const docRef = db.collection("leads").doc(appId);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      throw new HttpsError(
        "not-found",
        "Application ID not found. Please verify your reference number or contact support."
      );
    }

    const lead = docSnap.data()!;

    return {
      applicationId: lead.applicationId || appId,
      applicantName: lead.applicantNameMasked || maskName(lead.fullName || ""),
      status: lead.status || "Under Review",
      category: lead.loanCategory || "Personal / MSME Loan",
      amount: lead.amount || 0,
      submittedAt: lead.submittedAt || new Date().toISOString(),
      updatedAt: lead.updatedAt || lead.submittedAt || new Date().toISOString(),
      remarks: lead.remarks || "Underwriting review in progress.",
    };
  }
);
