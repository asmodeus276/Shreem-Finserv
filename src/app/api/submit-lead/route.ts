import { NextRequest, NextResponse } from "next/server";
import { saveLeadToFirestore, FirestoreLeadRecord } from "@/lib/firestore-rest";
import { sendLeadNotificationEmail } from "@/lib/email";

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
    const cleanMobile = (body.mobile || body.phone || "").replace(/\D/g, "");
    const email = (body.email || "").trim();
    const pan = (body.pan || "").trim().toUpperCase();
    const city = (body.city || "").trim();
    const loanCategory = (body.loanCategory || body.loanType || "Personal Loan").trim();
    const amount = Number(body.amount) || 0;
    const tenure = (body.tenure || "").trim();
    const employmentType = (body.employmentType || "").trim();
    const monthlyIncome = Number(body.monthlyIncome) || 0;
    const companyName = (body.companyName || "").trim();
    const dob = (body.dob || "").trim();
    const estimatedScore = Number(body.estimatedScore) || undefined;
    const consent = body.consent !== undefined ? Boolean(body.consent) : true;
    const marketingConsent = Boolean(body.marketingConsent);
    const sourcePage = (body.sourcePage || "/apply").trim();

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
    const applicationId = body.refId || generateTrackingId();
    const nowIso = new Date().toISOString();
    const maskedName = maskName(fullName);

    const leadRecord: FirestoreLeadRecord = {
      applicationId,
      fullName,
      applicantNameMasked: maskedName,
      mobile: cleanMobile,
      email: email || undefined,
      pan: pan || undefined,
      city,
      loanCategory,
      amount,
      tenure: tenure || undefined,
      employmentType: employmentType || undefined,
      monthlyIncome: monthlyIncome > 0 ? monthlyIncome : undefined,
      companyName: companyName || undefined,
      dob: dob || undefined,
      estimatedScore,
      consent,
      marketingConsent,
      sourcePage,
      status: "Under Review",
      remarks: "Application received. Initial credit appraisal in progress by underwriting desk.",
      submittedAt: nowIso,
      updatedAt: nowIso,
    };

    // 4. Save to Firestore and Send Email Alert
    const [firestoreRes, emailRes] = await Promise.allSettled([
      saveLeadToFirestore(leadRecord),
      sendLeadNotificationEmail({
        applicationId,
        fullName,
        mobile: cleanMobile,
        email: email || undefined,
        pan: pan || undefined,
        city,
        loanCategory,
        amount,
        tenure: tenure || undefined,
        employmentType: employmentType || undefined,
        monthlyIncome: monthlyIncome > 0 ? monthlyIncome : undefined,
        companyName: companyName || undefined,
        dob: dob || undefined,
        estimatedScore,
        consent,
        marketingConsent,
        sourcePage,
        submittedAt: nowIso,
      }),
    ]);

    const firestoreSaved = firestoreRes.status === "fulfilled" && firestoreRes.value;
    const emailSent = emailRes.status === "fulfilled" && emailRes.value;

    console.info(`[Lead Submission Pipeline] ID: ${applicationId}, Firestore: ${firestoreSaved}, Email: ${emailSent}`);

    return NextResponse.json(
      {
        success: true,
        applicationId,
        firestoreSaved,
        emailSent,
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
