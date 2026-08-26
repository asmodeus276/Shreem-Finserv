import { Metadata } from "next";
import { BRAND_CONFIG } from "@/config/brand";

export const metadata: Metadata = {
  title: "Compliance & Regulatory Disclosures",
  description: "Regulatory compliance, DPDP 2026 adherence, and fair practice code of Shreem Finserv.",
};

export default function CompliancePage() {
  return (
    <div className="pt-28 pb-16 max-w-4xl mx-auto px-4 md:px-8">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-6">
        <h1 className="text-3xl font-black text-slate-900">Regulatory Compliance & Disclosures</h1>
        <p className="text-xs text-slate-400">Published under RBI Fair Practices & DPDP Act 2026</p>

        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-[#0B2E8D] text-base mb-1">RBI Fair Practice Code</h3>
            <p className="text-slate-600">
              Shreem Finserv partners exclusively with Scheduled Commercial Banks, RBI-registered NBFCs, and regulated Housing Finance Companies (HFCs). All loan processing follows transparent interest computation, standardized documentation, and ethical recovery guidelines.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h3 className="font-bold text-emerald-800 text-base mb-1">DPDP 2026 Data Protection Standard</h3>
            <p className="text-slate-600">
              In accordance with the Digital Personal Data Protection Act 2026, applicant personal identifiers (Aadhaar, PAN, Bank records) are encrypted in transit and at rest. Data is stored exclusively in secure cloud regions ({`asia-south1`}) within Indian geographical jurisdiction.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-slate-900 text-base mb-1">Grievance Redressal Cell</h3>
            <p className="text-slate-600">
              Principal Office: {BRAND_CONFIG.address}<br />
              Email: {BRAND_CONFIG.email}<br />
              Helpline: {BRAND_CONFIG.phoneDisplay}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
