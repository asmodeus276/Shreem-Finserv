"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { ApplicationTracker } from "@/components/ApplicationTracker";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { EmiCalculator } from "@/components/EmiCalculator";
import { BankComparisonTable } from "@/components/BankComparisonTable";
import { BANK_PARTNERS_DATA } from "@/components/BankLogos";
import { BRAND_CONFIG } from "@/config/brand";

export interface LoanVariant {
  title: string;
  tag: string;
  desc: string;
  amount: string;
  icon: string;
}

export interface FeeScheduleItem {
  chargeType: string;
  standardBankRate: string;
  shreemAdvantage: string;
}

export interface ProductPageProps {
  categoryName: string;
  badge: string;
  headline: string;
  highlightText: string;
  description: string;
  longOverview?: string;
  maxAmount: string;
  interestRate: string;
  tenure: string;
  disbursalSpeed: string;
  defaultSliderAmount?: number;
  minSliderAmount?: number;
  maxSliderAmount?: number;
  defaultEmiRate?: number;
  defaultEmiTenureYears?: number;
  variants?: LoanVariant[];
  benefits: Array<{ title: string; desc: string; icon: string }>;
  feesSchedule?: FeeScheduleItem[];
  eligibility: string[];
  documents: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const ProductPageTemplate: React.FC<ProductPageProps> = ({
  categoryName,
  badge,
  headline,
  highlightText,
  description,
  longOverview,
  maxAmount,
  interestRate,
  tenure,
  disbursalSpeed,
  defaultSliderAmount = 2500000,
  minSliderAmount = 50000,
  maxSliderAmount = 20000000,
  defaultEmiRate = 10.5,
  defaultEmiTenureYears = 5,
  variants = [],
  benefits,
  feesSchedule = [
    {
      chargeType: "Processing Fee",
      standardBankRate: "1.00% to 2.50% of loan amount + GST",
      shreemAdvantage: "Special 0.50% to 1.00% discounted corporate partner rates",
    },
    {
      chargeType: "Prepayment / Foreclosure Charges",
      standardBankRate: "Up to 4.00% within 12-24 months",
      shreemAdvantage: "NIL foreclosure charges on floating rate facilities after 12 EMIs",
    },
    {
      chargeType: "Part-Payment Allowance",
      standardBankRate: "Subject to annual caps of 25%",
      shreemAdvantage: "Unlimited part-payments with instant principal reduction",
    },
    {
      chargeType: "Legal & Valuation Fees",
      standardBankRate: "₹5,000 to ₹25,000 per asset",
      shreemAdvantage: "Subsidized panel rates with zero hidden documentation markup",
    },
  ],
  eligibility,
  documents,
  faqs,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-24 md:pt-28 pb-16">
      
      {/* Breadcrumbs Navigation */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3 overflow-x-auto whitespace-nowrap">
        <nav className="flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-[#0B2E8D] transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[12px] md:text-[14px]">chevron_right</span>
          <span className="text-slate-400">All Products</span>
          <span className="material-symbols-outlined text-[12px] md:text-[14px]">chevron_right</span>
          <span className="text-[#0B2E8D] font-bold">{categoryName}</span>
        </nav>
      </div>

      {/* 1. Hero Section with Lead Form */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Product Information */}
          <div className="lg:col-span-7 space-y-5 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-3.5 md:py-1.5 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200">
              <span className="material-symbols-outlined text-[16px] text-[#BB0119]">verified</span>
              {badge}
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {headline} <span className="text-[#0B2E8D] block mt-1">{highlightText}</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-1">
              <div className="bg-white p-3.5 md:p-4 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Sanction Ceiling</span>
                <span className="text-base md:text-lg font-black text-slate-900">{maxAmount}</span>
              </div>
              <div className="bg-white p-3.5 md:p-4 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Interest Rate</span>
                <span className="text-base md:text-lg font-black text-emerald-600">{interestRate}</span>
              </div>
              <div className="bg-white p-3.5 md:p-4 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Repayment Tenure</span>
                <span className="text-base md:text-lg font-black text-slate-900">{tenure}</span>
              </div>
              <div className="bg-white p-3.5 md:p-4 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-400 block">SLA Turnaround</span>
                <span className="text-base md:text-lg font-black text-[#BB0119]">{disbursalSpeed}</span>
              </div>
            </div>

            {/* Top Co-Lending Bank Badges Showcase */}
            <div className="pt-3 border-t border-slate-200/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Authorized Sanctioning Co-Lenders:
              </span>
              <div className="flex flex-wrap gap-2.5 items-center">
                {BANK_PARTNERS_DATA.slice(0, 7).map((bank) => (
                  <div
                    key={bank.id}
                    className="inline-flex items-center gap-2 bg-white border border-slate-200/90 rounded-xl px-3 py-2 shadow-sm text-xs font-bold text-slate-800"
                  >
                    <div className="w-7 h-7 flex-shrink-0 rounded-md overflow-hidden">{bank.svgIcon}</div>
                    <span className="text-[11px] md:text-xs whitespace-nowrap">{bank.shortName}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs font-semibold text-slate-700 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-emerald-600">verified_user</span>
                <span>{BRAND_CONFIG.compliance.dpdp}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#0B2E8D]">shield</span>
                <span>Zero Upfront Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-slate-700">lock</span>
                <span>256-Bit Encrypted</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-5">
            <LeadForm
              defaultCategory={categoryName}
              defaultAmount={defaultSliderAmount}
              minAmount={minSliderAmount}
              maxAmount={maxSliderAmount}
              title={`Apply for ${categoryName}`}
              subtitle="Get matched across 50+ co-lending banks in under 60 seconds."
            />
          </div>

        </div>
      </section>

      {/* 2. Co-Lending Partner Marquee */}
      <PartnerMarquee />

      {/* 3. Comprehensive Overview Section */}
      {longOverview && (
        <section className="py-12 md:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl space-y-3 md:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200">
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
                In-Depth Product Guide
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
                Complete Guide to {categoryName} in India
              </h2>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed space-y-3 pt-2">
                {longOverview.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Sub-Variants & Specialized Schemes */}
      {variants.length > 0 && (
        <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">Specialized Product Matrix</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                Customized Schemes Under {categoryName}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Select the exact credit structure tailored to your professional vintage and asset profile.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {variants.map((v, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0B2E8D]/40 interactive-shadow transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B2E8D] flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">{v.icon}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                        {v.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1.5">{v.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{v.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Max Limit:</span>
                    <span className="font-bold text-[#0B2E8D]">{v.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Product Specific EMI Calculator */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <EmiCalculator
          initialAmount={defaultSliderAmount}
          initialRate={defaultEmiRate}
          initialTenureYears={defaultEmiTenureYears}
          title={`Interactive EMI & Amortisation Calculator for ${categoryName}`}
          subtitle={`Simulate your monthly installment, total interest outflow, and tenure adjustments for ${categoryName}.`}
        />
      </section>

      {/* 6. Bank Rate Comparison Table with Tabs */}
      <BankComparisonTable categoryTitle={categoryName} />

      {/* 7. Key Benefits & Value Features */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">
              Why Choose Shreem Finserv
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Key Advantages & Custom Underwriting Terms
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Engineered with transparent terms, low processing overheads, and tailored repayment schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 md:p-6 hover:bg-white hover:border-[#0B2E8D]/30 interactive-shadow transition-all"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-blue-100/70 text-[#0B2E8D] flex items-center justify-center mb-3.5">
                  <span className="material-symbols-outlined text-[22px] md:text-[24px]">{b.icon}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1.5">{b.title}</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Fee & Charges Transparency Schedule (Mobile Cards + Desktop Table) */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">
              100% Fee Transparency
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
              Standard Fees & Shreem Exclusive Savings
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Never worry about undisclosed penalties or inflated administrative charges.
            </p>
          </div>

          {/* Mobile Card View (< md) */}
          <div className="md:hidden space-y-3">
            {feesSchedule.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div className="font-bold text-slate-900 text-sm">{item.chargeType}</div>
                <div className="text-xs">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Standard Bank Rate:</span>
                  <span className="text-slate-500">{item.standardBankRate}</span>
                </div>
                <div className="text-xs pt-1.5 border-t border-slate-100">
                  <span className="text-emerald-700 block text-[10px] uppercase font-bold">Shreem Advantage:</span>
                  <span className="font-semibold text-emerald-800">{item.shreemAdvantage}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View (>= md) */}
          <div className="hidden md:block bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-3.5 px-6">Fee / Charge Head</th>
                    <th className="py-3.5 px-6">Standard Retail Bank Rate</th>
                    <th className="py-3.5 px-6">Shreem Finserv Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {feesSchedule.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60">
                      <td className="py-4 px-6 font-bold text-slate-900">{item.chargeType}</td>
                      <td className="py-4 px-6 text-slate-500">{item.standardBankRate}</td>
                      <td className="py-4 px-6 font-semibold text-emerald-700">{item.shreemAdvantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Eligibility & Documents Checklist */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            
            {/* Eligibility */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">how_to_reg</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">Eligibility Criteria</h3>
                  <p className="text-xs text-slate-400">Basic qualifications to apply</p>
                </div>
              </div>
              <ul className="space-y-3 text-xs md:text-sm text-slate-700">
                {eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px] md:text-[20px] flex-shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents Required */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-100 text-[#0B2E8D] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">description</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">Minimal Documents Required</h3>
                  <p className="text-xs text-slate-400">100% digital upload supported</p>
                </div>
              </div>
              <ul className="space-y-3 text-xs md:text-sm text-slate-700">
                {documents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#0B2E8D] text-[18px] md:text-[20px] flex-shrink-0 mt-0.5">
                      task_alt
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Interactive Accordion FAQs */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">
              Clear & Transparent
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions About {categoryName}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full p-4 md:p-5 text-left flex justify-between items-center gap-3 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="text-[#0B2E8D] font-mono font-black">Q.</span>
                      <span>{faq.q}</span>
                    </span>
                    <span className="material-symbols-outlined text-slate-500 text-lg md:text-xl transition-transform duration-200 flex-shrink-0">
                      {isOpen ? "remove_circle" : "add_circle"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 md:px-5 md:pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Application Tracking Section */}
      <ApplicationTracker />
    </div>
  );
};

export default ProductPageTemplate;
