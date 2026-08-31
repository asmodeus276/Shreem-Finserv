import { NextRequest, NextResponse } from "next/server";
import { saveCareerToFirestore } from "@/lib/firestore-rest";
import { sendCareerNotificationEmail } from "@/lib/email";

function generateJobAppId(): string {
  const random6Digits = Math.floor(100000 + Math.random() * 900000);
  return `JOB-${random6Digits}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").replace(/\D/g, "");
    const role = (body.role || "Financial Advisor").trim();
    const experience = (body.experience || "").trim();
    const linkedin = (body.linkedin || "").trim();
    const notes = (body.notes || "").trim();

    if (!name || !email || phone.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Please enter your valid name, email, and 10-digit mobile number." },
        { status: 400 }
      );
    }

    const applicationId = generateJobAppId();
    const nowIso = new Date().toISOString();

    const careerRecord = {
      applicationId,
      name,
      email,
      phone,
      role,
      experience,
      linkedin,
      notes,
      status: "Under Review",
      submittedAt: nowIso,
    };

    // Await both Firestore REST save and Gmail email dispatch
    const [firestoreRes, emailRes] = await Promise.allSettled([
      saveCareerToFirestore(careerRecord),
      sendCareerNotificationEmail(careerRecord),
    ]);

    const firestoreSaved = firestoreRes.status === "fulfilled" && firestoreRes.value;
    const emailSent = emailRes.status === "fulfilled" && emailRes.value;

    console.info(`[Career Submission Pipeline] ID: ${applicationId}, Firestore: ${firestoreSaved}, Email: ${emailSent}`);

    return NextResponse.json(
      {
        success: true,
        applicationId,
        firestoreSaved,
        emailSent,
        message: "Candidate profile submitted successfully. Our HR team will reach out shortly.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[apply-job API Error]:", err);
    return NextResponse.json(
      { success: false, error: "Server error submitting application." },
      { status: 500 }
    );
  }
}
