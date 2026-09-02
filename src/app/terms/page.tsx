import { Metadata } from "next";
import { BRAND_CONFIG } from "@/config/brand";
import { InnerBanner } from "@/components/InnerBanner";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export const metadata: Metadata = {
  title: "Terms of Service | Shreem Finserv",
  description: "Terms and Conditions governing the use of Shreem Finserv loan advisory services.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-[#F7F9FB]">
      
      {/* Capital Need Style Banner */}
      <InnerBanner
        badge="LEGAL AGREEMENT"
        badgeIcon="description"
        title="Terms of"
        highlightText="Service"
        subtitle="Please review the operational terms and conditions governing Shreem Finserv advisory, co-lending matchmaker facilities, and user disclosures."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Legal" },
          { label: "Terms of Service" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
        imageAlt="Terms of Service and legal disclosures"
        ctaText="Read Legal Disclosures"
        ctaLink="#terms-content"
      />

      <div id="terms-content" className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-6">
          <div className="prose prose-slate max-w-none text-sm text-slate-700 space-y-5 leading-relaxed">
            <p>
              Welcome to {BRAND_CONFIG.name}. By accessing our platform or submitting an eligibility application, you agree to these terms.
            </p>
            
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-[#001A62] mb-1">1. Credit Appraisal &amp; Sanction</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {BRAND_CONFIG.compliance.rbiDisclaimer} Submission of an inquiry does not guarantee loan disbursal. Final loan sanction, interest rates, and loan limits are determined solely by our partner financial institutions and RBI guidelines.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-[#001A62] mb-1">2. Zero Upfront Fees Policy</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {BRAND_CONFIG.name} does not charge any upfront or advance cash payments for checking loan eligibility or arranging loans. Beware of fraudulent individuals demanding cash or processing payments before official bank sanction.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-[#001A62] mb-1">3. Accurate Representation</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Applicants agree to provide accurate and truthful identity and financial details. Any falsified documentation is subject to rejection and reporting under applicable regulatory frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PartnerMarquee />
    </div>
  );
}
