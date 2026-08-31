import { NextRequest, NextResponse } from "next/server";
import { savePartnerToFirestore } from "@/lib/firestore-rest";
import { sendLeadNotificationEmail } from "@/lib/email";

function generatePartnerId(): string {
  const random6Digits = Math.floor(100000 + Math.random() * 900000);
  return `PTR-${random6Digits}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = (body.name || "").trim();
    const cleanMobile = (body.mobile || "").replace(/\D/g, "");
    const city = (body.city || "").trim();
    const profession = (body.profession || "Direct Selling Agent (DSA)").trim();

    if (!name || cleanMobile.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name and valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const partnerId = generatePartnerId();
    const nowIso = new Date().toISOString();

    const partnerRecord = {
      partnerId,
      name,
      mobile: cleanMobile,
      city: city || "India",
      profession,
      status: "Pending Verification",
      submittedAt: nowIso,
      updatedAt: nowIso,
    };

    // Await both Firestore REST save and Gmail email dispatch
    const [firestoreRes, emailRes] = await Promise.allSettled([
      savePartnerToFirestore(partnerRecord),
      sendLeadNotificationEmail({
        applicationId: partnerId,
        fullName: name,
        mobile: cleanMobile,
        city: city || "India",
        loanCategory: `Partner Onboarding (${profession})`,
        amount: 0,
        consent: true,
        marketingConsent: false,
        sourcePage: "/partner",
        submittedAt: nowIso,
      }),
    ]);

    const firestoreSaved = firestoreRes.status === "fulfilled" && firestoreRes.value;
    const emailSent = emailRes.status === "fulfilled" && emailRes.value;

    console.info(`[Partner Submission Pipeline] ID: ${partnerId}, Firestore: ${firestoreSaved}, Email: ${emailSent}`);

    return NextResponse.json(
      {
        success: true,
        partnerId,
        firestoreSaved,
        emailSent,
        message: "Partner registration received. Our channel manager will contact you within 2 hours.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[submit-partner API Error]:", err);
    return NextResponse.json(
      { success: false, error: "Server error registering partner." },
      { status: 500 }
    );
  }
}
