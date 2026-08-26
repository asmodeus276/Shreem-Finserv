import { Metadata } from "next";
import { BRAND_CONFIG } from "@/config/brand";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and Conditions governing the use of Shreem Finserv loan advisory services.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-16 max-w-4xl mx-auto px-4 md:px-8">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-6">
        <h1 className="text-3xl font-black text-slate-900">Terms of Service</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>

        <div className="prose prose-slate max-w-none text-sm text-slate-700 space-y-4 leading-relaxed">
          <p>
            Welcome to {BRAND_CONFIG.name}. By accessing our platform or submitting an eligibility application, you agree to these terms.
          </p>
          <h3 className="text-base font-bold text-slate-900 pt-2">1. Credit Appraisal & Sanction</h3>
          <p>
            {BRAND_CONFIG.compliance.rbiDisclaimer} Submission of an inquiry does not guarantee loan disbursal. Final loan sanction, interest rates, and loan limits are determined solely by our partner financial institutions and RBI guidelines.
          </p>
          <h3 className="text-base font-bold text-slate-900 pt-2">2. Zero Upfront Fees</h3>
          <p>
            {BRAND_CONFIG.name} does not charge any upfront or advance cash payments for checking loan eligibility or arranging loans.
          </p>
          <h3 className="text-base font-bold text-slate-900 pt-2">3. Accurate Representation</h3>
          <p>
            Applicants agree to provide accurate and truthful identity and financial details.
          </p>
        </div>
      </div>
    </div>
  );
}
