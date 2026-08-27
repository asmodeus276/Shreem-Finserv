import { getApps, initializeApp, getApp, App } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let adminApp: App;
if (!getApps().length) {
  adminApp = initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "shreem-finserv",
  });
} else {
  adminApp = getApp();
}

export const adminDb: Firestore = getFirestore(adminApp);
