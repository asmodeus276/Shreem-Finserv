import { Metadata } from "next";
import { EmiCalculator } from "@/components/EmiCalculator";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Loan EMI Calculator - Instant Monthly Payment & Interest Breakdown",
  description:
    "Calculate your monthly EMI, total interest, and amortisation schedule for Personal, Business, and LAP loans with Shreem Finserv.",
};

export default function CalculatorPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
        <EmiCalculator />

        {/* Comparison & Lead Ingestion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-slate-200">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Understanding Your Loan Amortisation & Savings
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Equated Monthly Installments (EMI) comprise both the principal repayment and the interest payable on your reducing balance. Choosing a longer tenure reduces your monthly outflow, while opting for a shorter tenure minimizes your total interest burden.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="material-symbols-outlined text-[#0B2E8D] text-2xl mb-1">trending_down</span>
                <h4 className="font-bold text-sm text-slate-800">Balance Transfer Advantage</h4>
                <p className="text-xs text-slate-500 mt-0.5">Switch high-cost loans to Shreem partner banks starting from 8.75% p.a.</p>
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
    </div>
  );
}
