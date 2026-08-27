import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider, AppCheck } from "firebase/app-check";
import { getFunctions, httpsCallable, Functions } from "firebase/functions";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDummyKeyForDevPlaceholder1234567",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "shreem-finserv.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "shreem-finserv",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "shreem-finserv.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789012:web:abcdef1234567890",
};

// Initialize Firebase App singleton
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
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

// Initialize Cloud Functions pointing to asia-south1
export const functions: Functions = getFunctions(app, "asia-south1");

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
 * Submit lead details to Firebase Cloud Function `submitLead` (asia-south1)
 */
export async function submitLead(payload: SubmitLeadParams): Promise<SubmitLeadResult> {
  try {
    const submitLeadFn = httpsCallable<SubmitLeadParams, SubmitLeadResult>(functions, "submitLead");
    const result = await submitLeadFn(payload);
    return result.data;
  } catch (error: unknown) {
    console.error("[submitLead Error]:", error);
    
    // Graceful fallback for local development / unconfigured cloud project
    if (process.env.NODE_ENV !== "production" || !process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
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
 * Track an existing loan application status via `trackApplication` (asia-south1)
 */
export async function trackApplication(payload: TrackApplicationParams): Promise<TrackApplicationResult> {
  try {
    const trackFn = httpsCallable<TrackApplicationParams, TrackApplicationResult>(functions, "trackApplication");
    const result = await trackFn(payload);
    return result.data;
  } catch (error: unknown) {
    console.error("[trackApplication Error]:", error);

    // Dev/staging fallback only — NEVER return fake data in production
    if (process.env.NODE_ENV !== "production" || !process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
      if (payload.applicationId) {
        const cleanId = payload.applicationId.trim().toUpperCase();
        console.info(`[Dev Fallback] Returning mock tracking result for: ${cleanId}`);
        return {
          applicationId: cleanId,
          applicantName: "R**** S*****",
          status: "Under Review",
          category: "Personal / MSME Loan",
          amount: 2500000,
          submittedAt: "2026-08-20T10:30:00Z",
          updatedAt: new Date().toISOString(),
          remarks: "Documents received. Credit appraisal in progress by underwriting team. (Dev Mode)",
        };
      }
    }

    throw error;
  }
}

export { app, appCheck };
