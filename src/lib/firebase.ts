import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider, AppCheck } from "firebase/app-check";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBSyCiuZVAowBZiORewIVe0ISiyYFftoi4",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "shreem-finserv.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "shreem-finserv",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "shreem-finserv.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "238167175765",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:238167175765:web:154eb13dfa176d8f819adc",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-9K15RL2GKQ",
};

// Initialize Firebase App singleton
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Analytics on client side (if supported in current browser environment)
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      try {
        analytics = getAnalytics(app);
      } catch (err) {
        console.warn("[Firebase Analytics] Init warning:", err);
      }
    }
  });
}

// Initialize App Check (reCAPTCHA Enterprise) on client side
let appCheck: AppCheck | undefined;
if (typeof window !== "undefined") {
  const recaptchaEnterpriseKey = process.env.NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_KEY;
  if (recaptchaEnterpriseKey) {
    try {
      appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaEnterpriseProvider(recaptchaEnterpriseKey),
        isTokenAutoRefreshEnabled: true,
      });
    } catch (err) {
      console.warn("[Firebase App Check] Initialization warning:", err);
    }
  }
}

export interface SubmitLeadParams {
  fullName: string;
  mobile: string;
  city: string;
  loanCategory: string;
  amount: number;
  consent: boolean;
  marketingConsent: boolean;
  sourcePage: string;
  email?: string;
  employmentType?: string;
  monthlyIncome?: number;
}

export interface SubmitLeadResult {
  success: boolean;
  applicationId: string;
  message?: string;
  timestamp?: string;
}

export interface TrackApplicationParams {
  applicationId: string;
}

export interface TrackApplicationResult {
  applicationId: string;
  applicantName: string;
  status: "Under Review" | "Documents Pending" | "Approved" | "Disbursed" | "Rejected";
  category: string;
  amount: number;
  submittedAt: string;
  updatedAt: string;
  remarks?: string;
}

/**
 * Submit lead details to Next.js API endpoint /api/submit-lead
 * (Saves to Firestore & sends Nodemailer email notification)
 */
export async function submitLead(payload: SubmitLeadParams): Promise<SubmitLeadResult> {
  try {
    const res = await fetch("/api/submit-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.error || "Failed to submit application.");
    }

    return data as SubmitLeadResult;
  } catch (error: unknown) {
    console.error("[submitLead Error]:", error);

    // Graceful fallback for local development if server API is unreachable
    if (process.env.NODE_ENV !== "production") {
      const mockId = `CC-${Math.floor(10000000 + Math.random() * 90000000)}`;
      console.info(`[Dev Fallback] Generated Application ID: ${mockId} for page: ${payload.sourcePage}`);
      return {
        success: true,
        applicationId: mockId,
        message: "Application submitted successfully (Dev Mode)",
        timestamp: new Date().toISOString(),
      };
    }

    throw error;
  }
}

/**
 * Track an existing loan application status via /api/track-application
 */
export async function trackApplication(payload: TrackApplicationParams): Promise<TrackApplicationResult> {
  try {
    const res = await fetch("/api/track-application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.error || "Application not found.");
    }

    return data as TrackApplicationResult;
  } catch (error: unknown) {
    console.error("[trackApplication Error]:", error);

    // Dev fallback only
    if (process.env.NODE_ENV !== "production") {
      if (payload.applicationId) {
        const cleanId = payload.applicationId.trim().toUpperCase();
        return {
          applicationId: cleanId,
          applicantName: "R**** S*****",
          status: "Under Review",
          category: "Personal / MSME Loan",
          amount: 2500000,
          submittedAt: "2026-08-20T10:30:00Z",
          updatedAt: new Date().toISOString(),
          remarks: "Documents received. Underwriting appraisal in progress. (Dev Mode)",
        };
      }
    }

    throw error;
  }
}

export { app, appCheck, analytics };
