/**
 * Lightweight serverless Firestore REST helper
 * Requires zero service-account credentials / ADC — works out of the box with standard Web API Key.
 */

const FIREBASE_API_KEY =
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBSyCiuZVAowBZiORewIVe0ISiyYFftoi4";
const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "shreem-finserv";

export interface FirestoreLeadRecord {
  applicationId: string;
  fullName: string;
  applicantNameMasked: string;
  mobile: string;
  city: string;
  loanCategory: string;
  amount: number;
  consent: boolean;
  marketingConsent?: boolean;
  sourcePage?: string;
  status: string;
  remarks: string;
  submittedAt: string;
  updatedAt: string;
}

export async function saveLeadToFirestore(lead: FirestoreLeadRecord): Promise<boolean> {
  try {
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/leads/${lead.applicationId}?key=${FIREBASE_API_KEY}`;

    const fields: Record<string, { stringValue?: string; doubleValue?: number; booleanValue?: boolean }> = {};

    for (const [key, val] of Object.entries(lead)) {
      if (typeof val === "string") {
        fields[key] = { stringValue: val };
      } else if (typeof val === "number") {
        fields[key] = { doubleValue: val };
      } else if (typeof val === "boolean") {
        fields[key] = { booleanValue: val };
      }
    }

    const res = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.warn("[Firestore REST Save Warning]:", errText);
      return false;
    }

    return true;
  } catch (err) {
    console.warn("[Firestore REST Exception]:", err);
    return false;
  }
}

export async function getLeadFromFirestore(applicationId: string): Promise<FirestoreLeadRecord | null> {
  try {
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/leads/${applicationId}?key=${FIREBASE_API_KEY}`;

    const res = await fetch(url);
    if (!res.ok) return null;

    const data = await res.json();
    if (!data.fields) return null;

    const parsed: Record<string, any> = {};
    for (const [key, val] of Object.entries(data.fields as Record<string, any>)) {
      parsed[key] =
        val.stringValue !== undefined
          ? val.stringValue
          : val.doubleValue !== undefined
          ? Number(val.doubleValue)
          : val.integerValue !== undefined
          ? Number(val.integerValue)
          : val.booleanValue !== undefined
          ? Boolean(val.booleanValue)
          : null;
    }

    return parsed as FirestoreLeadRecord;
  } catch (err) {
    console.warn("[Firestore REST Query Exception]:", err);
    return null;
  }
}
