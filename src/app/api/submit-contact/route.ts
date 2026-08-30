import { NextRequest, NextResponse } from "next/server";
import { saveContactToFirestore } from "@/lib/firestore-rest";
import { sendContactNotificationEmail } from "@/lib/email";

function generateTicketId(): string {
  const random6Digits = Math.floor(100000 + Math.random() * 900000);
  return `CQ-${random6Digits}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const fullName = (body.fullName || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").replace(/\D/g, "");
    const subject = (body.subject || "General Inquiry").trim();
    const message = (body.message || "").trim();

    // Validation
    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (phone.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // Generate ticket ID & timestamp
    const ticketId = generateTicketId();
    const nowIso = new Date().toISOString();

    const contactRecord = {
      ticketId,
      fullName,
      email,
      phone,
      subject,
      message: message.substring(0, 1000), // cap message length
      status: "New",
      submittedAt: nowIso,
    };

    // Save to Firestore asynchronously
    saveContactToFirestore(contactRecord).catch((err) =>
      console.warn("[Firestore Async Contact Save Warning]:", err)
    );

    // Send email notification asynchronously
    sendContactNotificationEmail(contactRecord).catch((err) =>
      console.error("[Email Contact Alert Async Error]:", err)
    );

    return NextResponse.json(
      {
        success: true,
        ticketId,
        message: "Your message has been received. We will get back to you within 24 hours.",
        timestamp: nowIso,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[submit-contact API Error]:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again or call our helpline.",
      },
      { status: 500 }
    );
  }
}
