import { Metadata } from "next";
import { EmiCalculator } from "@/components/EmiCalculator";
import { LeadForm } from "@/components/LeadForm";
import { InnerBanner } from "@/components/InnerBanner";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export const metadata: Metadata = {
  title: "Loan EMI Calculator - Instant Monthly Payment & Interest Breakdown | Shreem Finserv",
  description:
    "Calculate your monthly EMI, total interest, and amortisation schedule for Personal, Business, and LAP loans with Shreem Finserv.",
};

export default function CalculatorPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32">
      
      {/* Capital Need Style Banner */}
      <InnerBanner
        badge="SMART FINANCIAL TOOL"
        badgeIcon="calculate"
        title="Smart Loan"
        highlightText="EMI Calculator"
        subtitle="Simulate your monthly installment, principal amortisation, and total interest across 50+ banking partners in seconds."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tools" },
          { label: "EMI Calculator" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
        imageAlt="Smart EMI Calculator and financial planning"
        ctaText="Calculate & Apply"
        ctaLink="#calculator-section"
        quickStats={[
          { label: "Interest Starting", value: "8.5% p.a." },
          { label: "Max Tenure", value: "Up to 30 Yrs" },
          { label: "Bank Network", value: "50+ Lenders" },
          { label: "Calculations", value: "100% Free" },
        ]}
      />

      <div id="calculator-section" className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-12">
        <EmiCalculator />

        {/* Comparison & Lead Ingestion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-slate-200">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001A62]">
              Understanding Your Loan Amortisation &amp; Savings
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Equated Monthly Installments (EMI) comprise both the principal repayment and the interest payable on your reducing balance. Choosing a longer tenure reduces your monthly outflow, while opting for a shorter tenure minimizes your total interest burden.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="material-symbols-outlined text-[#001A62] text-2xl mb-1">trending_down</span>
                <h4 className="font-bold text-sm text-slate-800">Balance Transfer Advantage</h4>
                <p className="text-xs text-slate-500 mt-0.5">Switch high-cost loans to Shreem partner banks starting from 8.5% p.a.</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="material-symbols-outlined text-[#BB0119] text-2xl mb-1">tune</span>
                <h4 className="font-bold text-sm text-slate-800">Part-Payment Flexibility</h4>
                <p className="text-xs text-slate-500 mt-0.5">Prepay surplus cash to reduce your tenure and save lakhs on interest.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <LeadForm
              title="Apply With Calculated Terms"
              subtitle="Lock in lowest rates across 50+ banking partners."
            />
          </div>
        </div>
      </div>

      <PartnerMarquee />
    </div>
  );
}
