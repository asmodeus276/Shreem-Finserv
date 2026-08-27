import { NextRequest, NextResponse } from "next/server";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "@/lib/firebase";
import { sendLeadNotificationEmail } from "@/lib/email";

const db = getFirestore(app);

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

function generateTrackingId(): string {
  const random8Digits = Math.floor(10000000 + Math.random() * 90000000);
  return `CC-${random8Digits}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const fullName = (body.fullName || "").trim();
    const cleanMobile = (body.mobile || "").replace(/\D/g, "");
    const city = (body.city || "").trim();
    const loanCategory = (body.loanCategory || "Personal Loan").trim();
    const amount = Number(body.amount) || 0;
    const consent = Boolean(body.consent);
    const marketingConsent = Boolean(body.marketingConsent);
    const sourcePage = (body.sourcePage || "/").trim();

    // 1. Mandatory DPDP Compliance Check
    if (!consent) {
      return NextResponse.json(
        {
          success: false,
          error: "Mandatory DPDP consent for sharing details with lenders is required.",
        },
        { status: 400 }
      );
    }

    // 2. Data Validation
    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full legal name as per PAN card." },
        { status: 400 }
      );
    }

    if (cleanMobile.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!city) {
      return NextResponse.json(
        { success: false, error: "Please enter your current residential city." },
        { status: 400 }
      );
    }

    // 3. Generate Tracking ID & Record
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
    };

    // 4. Save to Firestore
    try {
      await setDoc(doc(db, "leads", applicationId), leadRecord);
    } catch (dbError) {
      console.error("[Firestore Error]: Failed to save lead record:", dbError);
      // Even if Firestore fails, continue to dispatch email alert
    }

    // 5. Send Nodemailer Email Notification (Gmail SMTP)
    sendLeadNotificationEmail(leadRecord).catch((err) =>
      console.error("[Email Alert Async Error]:", err)
    );

    return NextResponse.json(
      {
        success: true,
        applicationId,
        message: "Application submitted successfully. Our credit team will contact you within 30 minutes.",
        timestamp: nowIso,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[submit-lead API Error]:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error processing application. Please try again or call our helpline.",
      },
      { status: 500 }
    );
  }
}
