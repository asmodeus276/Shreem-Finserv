import { Metadata } from "next";
import { CreditScoreWidget } from "@/components/CreditScoreWidget";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export const metadata: Metadata = {
  title: "Check Free Credit Score & Report - Zero Impact on CIBIL",
  description:
    "Check your official credit score online for free. $0 fee, instant credit evaluation, and matched pre-approved loan offers.",
};

export default function CreditScorePage() {
  return (
    <div className="pt-24 pb-16">
      <CreditScoreWidget />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why Checking Your Credit Score Matters
          </h3>
          <p className="text-sm text-slate-600 mt-2">
            Your credit score is a 3-digit score between 300 and 900 reflecting your credit health and repayment vintage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              300-599
            </div>
            <h4 className="font-bold text-sm text-slate-900">Needs Improvement</h4>
            <p className="text-xs text-slate-500 mt-1">High rejection risk; start rebuilding with credit-builder facilities.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              600-699
            </div>
            <h4 className="font-bold text-sm text-slate-900">Fair Score</h4>
            <p className="text-xs text-slate-500 mt-1">Eligible for select NBFC unsecured loans with standard rates.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 text-[#0B2E8D] rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              700-774
            </div>
            <h4 className="font-bold text-sm text-slate-900">Good Score</h4>
            <p className="text-xs text-slate-500 mt-1">Wide bank eligibility with fast processing and competitive interest rates.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              775-900
            </div>
            <h4 className="font-bold text-sm text-slate-900">Excellent Score</h4>
            <p className="text-xs text-slate-500 mt-1">Prime borrower status. Guaranteed lowest rate quotes and zero fee waivers.</p>
          </div>
        </div>
      </div>

      <PartnerMarquee />
    </div>
  );
}
