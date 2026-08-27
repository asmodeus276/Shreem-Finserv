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

    // 1. Save to `careers` collection in Firestore
    saveCareerToFirestore(careerRecord).catch((err) =>
      console.warn("[Career Async Save Warning]:", err)
    );

    // 2. Send email alert to client (Contact@shreemfinserv.com)
    sendCareerNotificationEmail(careerRecord).catch((err) =>
      console.error("[Career Email Async Error]:", err)
    );

    return NextResponse.json(
      {
        success: true,
        applicationId,
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
