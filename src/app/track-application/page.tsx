import { Metadata } from "next";
import { ApplicationTracker } from "@/components/ApplicationTracker";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { InnerBanner } from "@/components/InnerBanner";

export const metadata: Metadata = {
  title: "Track Loan Application - Real-Time Status Portal | Shreem Finserv",
  description:
    "Check the live status of your loan application with your reference ID. Real-time updates from Shreem Finserv underwriting desk.",
};

export default function TrackApplicationPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16">
      
      {/* Capital Need Style Banner */}
      <InnerBanner
        badge="REAL-TIME CREDIT PORTAL"
        badgeIcon="manage_search"
        title="Track Your Loan"
        highlightText="Application Status"
        subtitle="Enter your 10-digit mobile number or Application Reference ID to check live credit appraisal, underwriting status, and sanction updates."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Track Application" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
        imageAlt="Track your loan application in real time"
        ctaText="Track Status Below"
        ctaLink="#tracker-section"
        quickStats={[
          { label: "Live Updates", value: "24/7 Real-Time" },
          { label: "Data Security", value: "DPDP 2026 Compliant" },
          { label: "Direct Support", value: "1:1 RM Desk" },
          { label: "Avg. Decision", value: "< 24 Hours" },
        ]}
      />

      <div id="tracker-section" className="pt-8">
        <ApplicationTracker />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-[#001A62]">Understanding Loan Processing Stages</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-[#001A62] block text-sm mb-1">1. Under Review</span>
              Initial eligibility check and digital KYC verification in progress.
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-amber-700 block text-sm mb-1">2. Underwriting &amp; Appraisal</span>
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
