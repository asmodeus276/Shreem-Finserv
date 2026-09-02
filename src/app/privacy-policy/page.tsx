import { Metadata } from "next";
import { BRAND_CONFIG } from "@/config/brand";
import { InnerBanner } from "@/components/InnerBanner";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export const metadata: Metadata = {
  title: "Privacy Policy - DPDP 2026 Compliance | Shreem Finserv",
  description: "Privacy Policy and Data Protection practices of Shreem Finserv under Digital Personal Data Protection Act 2026.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-[#F7F9FB]">
      
      {/* Capital Need Style Banner */}
      <InnerBanner
        badge="DPDP ACT 2026 COMPLIANCE"
        badgeIcon="security"
        title="Privacy"
        highlightText="Policy"
        subtitle="Learn how Shreem Finserv protects your identity, financial documentation, and personal data with enterprise-grade encryption."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Legal" },
          { label: "Privacy Policy" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
        imageAlt="Privacy Policy and DPDP Data Encryption"
        ctaText="Review Privacy Practices"
        ctaLink="#privacy-content"
      />

      <div id="privacy-content" className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            DPDP 2026 Compliant
          </div>
          
          <div className="prose prose-slate max-w-none text-sm text-slate-700 space-y-5 leading-relaxed">
            <p>
              {BRAND_CONFIG.legalName} ({BRAND_CONFIG.name}) respects your privacy and is fully committed to safeguarding your personal and financial information under the <strong>Digital Personal Data Protection (DPDP) Act 2026</strong>.
            </p>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-[#001A62] mb-1">1. Information We Collect</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                When you submit a loan inquiry or application, we collect your name, mobile number, residential city, required loan amount, employment details, and necessary KYC credentials solely for evaluating loan eligibility.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-[#001A62] mb-1">2. Purpose of Processing</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Your information is processed exclusively for underwriting verification, loan product matching, credit assessment, and regulatory compliance. We do not sell, rent, or trade your data to third-party telemarketers.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-[#001A62] mb-1">3. Data Security &amp; Encryption</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                We implement 256-bit SSL encryption and strict server-side Firestore security rules to prevent unauthorized access.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-[#001A62] mb-1">4. Contact Grievance Officer</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                For privacy inquiries or data consent revocation, write to <a href={`mailto:${BRAND_CONFIG.email}`} className="text-[#001A62] font-bold">{BRAND_CONFIG.email}</a> or visit {BRAND_CONFIG.address}.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PartnerMarquee />
    </div>
  );
}
