import { Metadata } from "next";
import { BRAND_CONFIG } from "@/config/brand";

export const metadata: Metadata = {
  title: "Privacy Policy - DPDP 2026 Compliance",
  description: "Privacy Policy and Data Protection practices of Shreem Finserv under Digital Personal Data Protection Act 2026.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-16 max-w-4xl mx-auto px-4 md:px-8">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <span className="material-symbols-outlined text-[16px]">verified_user</span>
          DPDP 2026 Compliant
        </div>
        <h1 className="text-3xl font-black text-slate-900">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>

        <div className="prose prose-slate max-w-none text-sm text-slate-700 space-y-4 leading-relaxed">
          <p>
            {BRAND_CONFIG.legalName} ({BRAND_CONFIG.name}) respects your privacy and is fully committed to safeguarding your personal and financial information under the <strong>Digital Personal Data Protection (DPDP) Act 2026</strong>.
          </p>
          <h3 className="text-base font-bold text-slate-900 pt-2">1. Information We Collect</h3>
          <p>
            When you submit a loan inquiry or application, we collect your name, mobile number, residential city, required loan amount, employment details, and necessary KYC credentials solely for evaluating loan eligibility.
          </p>
          <h3 className="text-base font-bold text-slate-900 pt-2">2. Purpose of Processing</h3>
          <p>
            Your information is processed exclusively for underwriting verification, loan product matching, credit assessment, and regulatory compliance. We do not sell, rent, or trade your data to third-party telemarketers.
          </p>
          <h3 className="text-base font-bold text-slate-900 pt-2">3. Data Security</h3>
          <p>
            We implement 256-bit SSL encryption and strict server-side Firestore security rules to prevent unauthorized access.
          </p>
          <h3 className="text-base font-bold text-slate-900 pt-2">4. Contact Grievance Officer</h3>
          <p>
            For privacy inquiries or data consent revocation, write to <a href={`mailto:${BRAND_CONFIG.email}`} className="text-[#0B2E8D] font-bold">{BRAND_CONFIG.email}</a> or visit {BRAND_CONFIG.address}.
          </p>
        </div>
      </div>
    </div>
  );
}
