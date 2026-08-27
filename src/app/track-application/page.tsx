import { Metadata } from "next";
import { ApplicationTracker } from "@/components/ApplicationTracker";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export const metadata: Metadata = {
  title: "Track Loan Application - Real-Time Status Portal",
  description:
    "Check the live status of your loan application with your reference ID. Real-time updates from Shreem Finserv underwriting desk.",
};

export default function TrackApplicationPage() {
  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16">
      <ApplicationTracker />

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Understanding Loan Processing Stages</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-[#0B2E8D] block text-sm mb-1">1. Under Review</span>
              Initial eligibility check and digital KYC verification in progress.
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-amber-700 block text-sm mb-1">2. Underwriting & Appraisal</span>
              Bank credit committee assessing banking turnover and sanction limits.
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-emerald-700 block text-sm mb-1">3. In-Principle Sanction</span>
              Sanction letter issued with interest rate, loan amount, and tenure.
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-purple-700 block text-sm mb-1">4. Disbursal Credit</span>
              Loan agreement executed and funds transferred to your bank account.
            </div>
          </div>
        </div>
      </div>

      <PartnerMarquee />
    </div>
  );
}
