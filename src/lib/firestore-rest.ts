/**
 * Lightweight serverless Firestore REST helper
 * Handles leads, partners, and careers collections directly via Firestore REST.
 */

const FIREBASE_API_KEY =
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBSyCiuZVAowBZiORewIVe0ISiyYFftoi4";
const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "shreem-finserv";

export interface FirestoreLeadRecord {
  applicationId: string;
  fullName: string;
  applicantNameMasked: string;
  mobile: string;
  email?: string;
  pan?: string;
  city: string;
  loanCategory: string;
  amount: number;
  tenure?: string;
  employmentType?: string;
  monthlyIncome?: number;
  companyName?: string;
  dob?: string;
  estimatedScore?: number;
  consent: boolean;
  marketingConsent?: boolean;
  sourcePage?: string;
  status: string;
  remarks: string;
  submittedAt: string;
  updatedAt: string;
}

export interface FirestorePartnerRecord {
  partnerId: string;
  name: string;
  mobile: string;
  city: string;
  profession: string;
  status: string;
  submittedAt: string;
  updatedAt: string;
}

export interface FirestoreCareerRecord {
  applicationId: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  experience?: string;
  linkedin?: string;
  notes?: string;
  status: string;
  submittedAt: string;
}

function objectToFirestoreFields(obj: Record<string, any>) {
  const fields: Record<string, { stringValue?: string; doubleValue?: number; booleanValue?: boolean }> = {};
  for (const [key, val] of Object.entries(obj)) {
    if (val === undefined || val === null) continue;
    if (typeof val === "string") {
      fields[key] = { stringValue: val };
    } else if (typeof val === "number") {
      fields[key] = { doubleValue: val };
    } else if (typeof val === "boolean") {
      fields[key] = { booleanValue: val };
    }
  }
  return fields;
}

/**
 * 1. Save Lead into `leads` collection
 */
export async function saveLeadToFirestore(lead: FirestoreLeadRecord): Promise<boolean> {
  try {
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/leads/${lead.applicationId}?key=${FIREBASE_API_KEY}`;
    const fields = objectToFirestoreFields(lead);

    const res = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields }),
    });

    return res.ok;
  } catch (err) {
    console.warn("[Firestore REST Lead Save Warning]:", err);
    return false;
  }
}

/**
 * 2. Get Lead from `leads` collection for tracking
 */
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

/**
 * 3. Save Partner into `partners` collection
 */
export async function savePartnerToFirestore(partner: FirestorePartnerRecord): Promise<boolean> {
  try {
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/partners/${partner.partnerId}?key=${FIREBASE_API_KEY}`;
    const fields = objectToFirestoreFields(partner);

    const res = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields }),
    });

    return res.ok;
  } catch (err) {
    console.warn("[Firestore REST Partner Save Warning]:", err);
    return false;
  }
}

/**
 * 4. Save Career Application into `careers` collection
 */
export async function saveCareerToFirestore(career: FirestoreCareerRecord): Promise<boolean> {
  try {
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/careers/${career.applicationId}?key=${FIREBASE_API_KEY}`;
    const fields = objectToFirestoreFields(career);

    const res = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields }),
    });

    return res.ok;
  } catch (err) {
    console.warn("[Firestore REST Career Save Warning]:", err);
    return false;
  }
}

export interface FirestoreContactRecord {
  ticketId: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
  submittedAt: string;
}

/**
 * 5. Save Contact Inquiry into `contacts` collection
 */
export async function saveContactToFirestore(contact: FirestoreContactRecord): Promise<boolean> {
  try {
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/contacts/${contact.ticketId}?key=${FIREBASE_API_KEY}`;
    const fields = objectToFirestoreFields(contact);

    const res = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields }),
    });

    return res.ok;
  } catch (err) {
    console.warn("[Firestore REST Contact Save Warning]:", err);
    return false;
  }
}
