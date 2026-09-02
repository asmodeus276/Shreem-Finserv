"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { EmiCalculator } from "@/components/EmiCalculator";
import { BANK_PARTNERS_DATA } from "@/components/BankLogos";

export interface FeatureItem {
  title: string;
  desc: string;
  icon: string;
}

export interface ProductPageProps {
  categoryName: string;
  badge: string;
  headline: string;
  highlightText: string;
  description: string;
  bannerImage?: string;
  maxAmount: string;
  interestRate: string;
  tenure: string;
  disbursalSpeed: string;
  defaultSliderAmount?: number;
  minSliderAmount?: number;
  maxSliderAmount?: number;
  defaultEmiRate?: number;
  defaultEmiTenureYears?: number;
  features?: FeatureItem[];
  benefits?: Array<{ title: string; desc: string; icon: string }>;
  eligibility: string[];
  documents: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const ProductPageTemplate: React.FC<ProductPageProps> = ({
  categoryName,
  headline,
  highlightText,
  description,
  bannerImage,
  maxAmount,
  interestRate,
  tenure,
  disbursalSpeed,
  defaultSliderAmount = 2500000,
  minSliderAmount = 50000,
  maxSliderAmount = 20000000,
  defaultEmiRate = 10.5,
  defaultEmiTenureYears = 5,
  features = [],
  eligibility = [],
  documents = [],
  faqs = [],
}) => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Determine fallback panoramic background image if not provided
  const resolvedBannerImage =
    bannerImage ||
    (categoryName.toLowerCase().includes("business")
      ? "/images/business-loan-inner-banner.jpg"
      : categoryName.toLowerCase().includes("doctor") || categoryName.toLowerCase().includes("profession")
      ? "/images/professional-loan-inner-banner.jpg"
      : categoryName.toLowerCase().includes("home")
      ? "/images/home-loan-inner-banner.jpg"
      : categoryName.toLowerCase().includes("machinery")
      ? "/images/machinery-loan-inner-banner.jpg"
      : categoryName.toLowerCase().includes("property")
      ? "/images/lap-inner-banner.jpg"
      : "/images/personal-loan-inner-banner.jpg");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 bg-white">
      
      {/* 1. Full-Bleed Panoramic Hero Banner Matching Capital Need Reference Screenshots */}
      <section className="relative w-full overflow-hidden bg-slate-50 border-b border-slate-200">
        
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={resolvedBannerImage}
            alt={categoryName}
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-center"
          />
          {/* Smooth left gradient overlay to guarantee 100% text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent md:via-white/80" />
        </div>

        {/* Foreground Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 min-h-[320px] sm:min-h-[360px] md:min-h-[400px] flex items-center">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            
            {/* Main Headline (Dark Royal Blue #1c4e9e matching screenshots) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c4e9e] tracking-tight leading-[1.1]">
              {headline}
              <br />
              <span className="font-medium text-[#1c4e9e]">{highlightText}</span>
            </h1>

            {/* Subtitle matching screenshots */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium tracking-normal pt-1">
              Loan amount | Quick Disbursal | Flexible EMI
            </p>

          </div>
        </div>

        {/* Full-Width Dark Grey Breadcrumb Bar (Matching Screenshots #4b5563) */}
        <div className="w-full bg-[#4b5563] text-slate-200 py-2 sm:py-2.5 border-t border-slate-600/50 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-xs sm:text-sm font-semibold flex items-center gap-2">
            <Link href="/" className="text-slate-200 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-400">&gt;</span>
            <Link href="/personal-loan" className="text-slate-200 hover:text-white transition-colors">
              {categoryName}
            </Link>
            <span className="text-slate-400">&gt;</span>
            <span className="text-white font-bold">Overview</span>
          </div>
        </div>

      </section>

      {/* 2. Interactive Navigation Tabs Strip (Matching capitalneed.com tab-fixed style) */}
      <div className="sticky top-18 md:top-20 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center space-x-1 sm:space-x-3 text-xs sm:text-sm font-bold whitespace-nowrap">
            <button
              onClick={() => scrollToSection("overview-section")}
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === "overview" || activeTab === "overview-section"
                  ? "bg-blue-50 text-[#1c4e9e]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Overview
            </button>

            <button
              onClick={() => scrollToSection("features-section")}
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === "features-section"
                  ? "bg-blue-50 text-[#1c4e9e]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Features &amp; Benefits
            </button>

            <button
              onClick={() => scrollToSection("eligibility-section")}
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === "eligibility-section"
                  ? "bg-blue-50 text-[#1c4e9e]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Eligibility &amp; Documents
            </button>

            <button
              onClick={() => scrollToSection("rates-section")}
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === "rates-section"
                  ? "bg-blue-50 text-[#1c4e9e]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Interest Rate &amp; Charges
            </button>

            <button
              onClick={() => scrollToSection("calculator-section")}
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === "calculator-section"
                  ? "bg-blue-50 text-[#1c4e9e]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              EMI Calculator
            </button>
          </div>

          <button
            onClick={() => scrollToSection("lead-application-form")}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#1c4e9e] hover:bg-[#163f80] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex-shrink-0 ml-4"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* 3. Overview Section & Quick Metrics Table */}
      <section id="overview-section" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Product Information & Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {categoryName} Overview
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Interest Rates & Charges Table (Matching capitalneed.com table format) */}
            <div id="rates-section" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="bg-[#1c4e9e] text-white px-5 py-3 font-bold text-sm">
                {categoryName} Interest Rates &amp; Key Details
              </div>
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-5 py-3.5 font-bold text-slate-700">Interest Rates</td>
                    <td className="px-5 py-3.5 font-extrabold text-[#1c4e9e]">{interestRate}</td>
                  </tr>
                  <tr className="hover:bg-white transition-colors bg-white">
                    <td className="px-5 py-3.5 font-bold text-slate-700">Loan Amount</td>
                    <td className="px-5 py-3.5 font-extrabold text-slate-900">Up to {maxAmount}</td>
                  </tr>
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-5 py-3.5 font-bold text-slate-700">Maximum Tenure</td>
                    <td className="px-5 py-3.5 font-extrabold text-slate-900">{tenure}</td>
                  </tr>
                  <tr className="hover:bg-white transition-colors bg-white">
                    <td className="px-5 py-3.5 font-bold text-slate-700">Disbursal Turnaround</td>
                    <td className="px-5 py-3.5 font-extrabold text-emerald-700">{disbursalSpeed}</td>
                  </tr>
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-5 py-3.5 font-bold text-slate-700">Upfront Charges</td>
                    <td className="px-5 py-3.5 font-extrabold text-emerald-700">Zero Advance Cash Fees</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Co-Lenders */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Authorized Lending Bank Partners:
              </span>
              <div className="flex flex-wrap gap-2 items-center">
                {BANK_PARTNERS_DATA.slice(0, 6).map((bank) => (
                  <div
                    key={bank.id}
                    className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-[11px] font-bold text-slate-800"
                  >
                    <div className="w-5 h-3.5 bg-white rounded p-0.5 flex items-center justify-center">
                      {bank.svgIcon}
                    </div>
                    <span>{bank.shortName}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div id="lead-application-form" className="lg:col-span-5">
            <LeadForm
              defaultCategory={categoryName}
              defaultAmount={defaultSliderAmount}
              minAmount={minSliderAmount}
              maxAmount={maxSliderAmount}
              title={`Apply for ${categoryName}`}
              subtitle="Compare instant quotes across 50+ banks with zero upfront charges."
            />
          </div>

        </div>
      </section>

      {/* 4. Co-Lending Bank Partners Marquee */}
      <PartnerMarquee />

      {/* 5. Core Loan Features & Benefits */}
      {features.length > 0 && (
        <section id="features-section" className="py-14 md:py-18 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1c4e9e] text-xs font-bold border border-blue-200 mb-2">
                <span className="material-symbols-outlined text-[15px]">auto_awesome</span>
                Key Advantages
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                {categoryName} <span className="text-[#1c4e9e]">Features &amp; Benefits</span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
                Key product features and underwriting advantages tailored for you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 hover:border-[#1c4e9e]/40 rounded-2xl p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1c4e9e] group-hover:bg-[#1c4e9e] group-hover:text-white flex items-center justify-center transition-colors">
                        <span className="material-symbols-outlined text-[22px]">{f.icon}</span>
                      </div>
                      <span className="text-[11px] font-black text-slate-400">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#1c4e9e] transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Eligibility Criteria & Documents Required */}
      <section id="eligibility-section" className="py-14 md:py-18 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-2">
              <span className="material-symbols-outlined text-[15px]">fact_check</span>
              Fast-Track Verification
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Eligibility &amp; Documents Required
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
              Minimal documentation with 100% digital verification.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Eligibility Column */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">how_to_reg</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Eligibility Criteria</h3>
                  <p className="text-xs text-slate-500">Basic qualifications to apply</p>
                </div>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                {eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px] flex-shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents Required Column */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-11 h-11 rounded-2xl bg-blue-100 text-[#1c4e9e] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">description</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Documents Required</h3>
                  <p className="text-xs text-slate-500">Simple digital paperless upload</p>
                </div>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                {documents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1c4e9e] text-[18px] flex-shrink-0 mt-0.5">
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

      {/* 7. Product Specific EMI Calculator */}
      <section id="calculator-section" className="py-14 md:py-18 max-w-7xl mx-auto px-4 md:px-8">
        <EmiCalculator
          initialAmount={defaultSliderAmount}
          initialRate={defaultEmiRate}
          initialTenureYears={defaultEmiTenureYears}
          title={`EMI Calculator for ${categoryName}`}
          subtitle={`Simulate your monthly installment and total interest for ${categoryName}.`}
        />
      </section>

      {/* 8. Frequently Asked Questions */}
      {faqs && faqs.length > 0 && (
        <section className="py-14 md:py-18 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1c4e9e] text-xs font-bold border border-blue-200 mb-2">
                <span className="material-symbols-outlined text-[15px]">quiz</span>
                FAQs
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`material-symbols-outlined text-[20px] transition-transform duration-200 flex-shrink-0 ml-3 ${
                          isOpen ? "rotate-180 text-[#1c4e9e]" : "text-slate-400"
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 9. Final Action Callout */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-[#00103A] via-[#1c4e9e] to-[#0B2E8D] text-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Apply for {categoryName}?
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm max-w-xl">
              Get matched across 50+ premier banks &amp; NBFCs with zero upfront fees and minimal paperwork.
            </p>
          </div>
          <button
            onClick={() => scrollToSection("lead-application-form")}
            className="bg-[#e50914] hover:bg-[#c40812] text-white font-black px-8 py-3.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 flex-shrink-0"
          >
            <span>Apply Now</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default ProductPageTemplate;
