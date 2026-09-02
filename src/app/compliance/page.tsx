import { Metadata } from "next";
import { BRAND_CONFIG } from "@/config/brand";
import { InnerBanner } from "@/components/InnerBanner";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export const metadata: Metadata = {
  title: "Compliance & Regulatory Disclosures | Shreem Finserv",
  description: "Regulatory compliance, DPDP 2026 adherence, and fair practice code of Shreem Finserv.",
};

export default function CompliancePage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-[#F7F9FB]">
      
      {/* Capital Need Style Banner */}
      <InnerBanner
        badge="REGULATORY GOVERNANCE"
        badgeIcon="gavel"
        title="Compliance &amp;"
        highlightText="Regulatory Disclosures"
        subtitle="Full transparency, ethical lending practices, RBI Fair Practice guidelines, and DPDP Act 2026 data compliance."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Legal" },
          { label: "Compliance & Disclosures" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
        imageAlt="Regulatory compliance and corporate governance"
        ctaText="Contact Grievance Cell"
        ctaLink={`mailto:${BRAND_CONFIG.email}`}
        quickStats={[
          { label: "RBI Standards", value: "Strict Fair Practice" },
          { label: "Data Security", value: "DPDP 2026 Compliant" },
          { label: "Lending Ties", value: "Regulated Institutions" },
          { label: "Grievance Desk", value: "24h Escalation" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-6">
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="font-bold text-[#001A62] text-base mb-1.5 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#001A62] text-xl">account_balance</span>
                <span>RBI Fair Practice Code</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Shreem Finserv partners exclusively with Scheduled Commercial Banks, RBI-registered NBFCs, and regulated Housing Finance Companies (HFCs). All loan processing follows transparent interest computation, standardized documentation, and ethical recovery guidelines.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <h3 className="font-bold text-emerald-800 text-base mb-1.5 flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-700 text-xl">verified_user</span>
                <span>DPDP 2026 Data Protection Standard</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                In accordance with the Digital Personal Data Protection Act 2026, applicant personal identifiers (Aadhaar, PAN, Bank records) are encrypted in transit and at rest. Data is stored exclusively in secure cloud regions within Indian geographical jurisdiction.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#001A62] text-xl">support_agent</span>
                <span>Grievance Redressal Cell</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>Principal Office:</strong> {BRAND_CONFIG.address}<br />
                <strong>Email:</strong> <a href={`mailto:${BRAND_CONFIG.email}`} className="text-[#001A62] underline font-semibold">{BRAND_CONFIG.email}</a><br />
                <strong>Helpline:</strong> <a href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`} className="text-[#001A62] underline font-semibold">{BRAND_CONFIG.phoneDisplay}</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <PartnerMarquee />
    </div>
  );
}
