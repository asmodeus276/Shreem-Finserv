import { NextRequest, NextResponse } from "next/server";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "@/lib/firebase";

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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const applicationId = (body.applicationId || "").trim().toUpperCase();

    if (!applicationId) {
      return NextResponse.json(
        { success: false, error: "Please enter an Application Reference ID." },
        { status: 400 }
      );
    }

    try {
      const docRef = doc(db, "leads", applicationId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        return NextResponse.json(
          {
            success: true,
            applicationId: data.applicationId || applicationId,
            applicantName: data.applicantNameMasked || maskName(data.fullName || ""),
            status: data.status || "Under Review",
            category: data.loanCategory || "Personal / MSME Loan",
            amount: data.amount || 0,
            submittedAt: data.submittedAt || new Date().toISOString(),
            updatedAt: data.updatedAt || data.submittedAt || new Date().toISOString(),
            remarks:
              data.remarks ||
              "Documents received. Credit appraisal in progress by underwriting team.",
          },
          { status: 200 }
        );
      }
    } catch (dbError) {
      console.error("[Firestore Tracking Error]:", dbError);
    }

    // In dev mode only: fallback
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json(
        {
          success: true,
          applicationId,
          applicantName: "R**** S*****",
          status: "Under Review",
          category: "Personal / MSME Loan",
          amount: 2500000,
          submittedAt: "2026-08-20T10:30:00Z",
          updatedAt: new Date().toISOString(),
          remarks: "Documents received. Underwriting appraisal in progress. (Dev Mode)",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Application with this Reference ID was not found. Please verify your reference number.",
      },
      { status: 404 }
    );
  } catch (err: unknown) {
    console.error("[track-application API Error]:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Server error querying application status. Please try again later.",
      },
      { status: 500 }
    );
  }
}
