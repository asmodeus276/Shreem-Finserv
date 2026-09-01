"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { EmiCalculator } from "@/components/EmiCalculator";
import { BANK_PARTNERS_DATA } from "@/components/BankLogos";
import { BRAND_CONFIG } from "@/config/brand";

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
  badge,
  headline,
  highlightText,
  description,
  bannerImage = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1400&q=75",
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-24 sm:pt-28 md:pt-32">
      
      {/* 1. Top Premium Hero Banner with Embedded Lead Form */}
      <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        {/* Background Image with Deep Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bannerImage}
            alt={categoryName}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00103A]/98 via-[#001A62]/90 to-[#0B2E8D]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs font-semibold text-blue-200/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <Link href="/#products" className="hover:text-white transition-colors">Loans</Link>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-white font-bold">{categoryName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Product Value Highlights & Stats */}
            <div className="lg:col-span-7 space-y-5 md:space-y-6">
              
              {/* Badge Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold border border-white/15 shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-amber-400">verified</span>
                {badge}
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                {headline} <span className="text-[#7dd3fc] block mt-1">{highlightText}</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl">
                {description}
              </p>

              {/* 4 Quick Metrics Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-1">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 block">Max Limit</span>
                  <span className="text-base sm:text-lg font-black text-white">{maxAmount}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 block">Interest Rate</span>
                  <span className="text-base sm:text-lg font-black text-emerald-300">{interestRate}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 block">Tenure</span>
                  <span className="text-base sm:text-lg font-black text-white">{tenure}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 block">Disbursal</span>
                  <span className="text-base sm:text-lg font-black text-[#ff8080]">{disbursalSpeed}</span>
                </div>
              </div>

              {/* Top Co-Lending Partners */}
              <div className="pt-3 border-t border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200/80 block mb-2">
                  Authorized Sanctioning Co-Lenders:
                </span>
                <div className="flex flex-wrap gap-2 items-center">
                  {BANK_PARTNERS_DATA.slice(0, 6).map((bank) => (
                    <div
                      key={bank.id}
                      className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-2.5 py-1 text-[11px] font-bold text-white shadow-xs"
                    >
                      <div className="w-6 h-4 bg-white rounded p-0.5 flex items-center justify-center">
                        {bank.svgIcon}
                      </div>
                      <span>{bank.shortName}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-100 pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-emerald-400">verified_user</span>
                  <span>{BRAND_CONFIG.compliance.dpdp}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-amber-300">money_off</span>
                  <span>Zero Upfront Fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-blue-300">lock</span>
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
                subtitle="Compare instant quotes across 50+ banks with zero upfront charges."
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Co-Lending Bank Partners Marquee */}
      <PartnerMarquee />

      {/* 3. Core Loan Features & Benefits (Clean 4-6 Cards) */}
      {features.length > 0 && (
        <section className="py-14 md:py-18 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200 mb-2">
                <span className="material-symbols-outlined text-[15px]">auto_awesome</span>
                Key Highlights
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                {categoryName} <span className="text-[#0B2E8D]">Features &amp; Benefits</span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
                Key product features and underwriting advantages tailored for you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-[#0B2E8D]/40 rounded-2xl p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-100/70 text-[#0B2E8D] group-hover:bg-[#0B2E8D] group-hover:text-white flex items-center justify-center transition-colors">
                        <span className="material-symbols-outlined text-[22px]">{f.icon}</span>
                      </div>
                      <span className="text-[11px] font-black text-slate-400">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#001A62] transition-colors">
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

      {/* 4. Eligibility Criteria & Documents Required (Clean 2-Column Side-by-Side) */}
      <section className="py-14 md:py-18 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-2">
              <span className="material-symbols-outlined text-[15px]">fact_check</span>
              Fast-Track Check
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
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">how_to_reg</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Eligibility Criteria</h3>
                  <p className="text-xs text-slate-400">Basic qualifications to apply</p>
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
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-blue-100 text-[#0B2E8D] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">description</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Documents Required</h3>
                  <p className="text-xs text-slate-400">Simple digital paperless upload</p>
                </div>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                {documents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#0B2E8D] text-[18px] flex-shrink-0 mt-0.5">
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

      {/* 5. Product Specific EMI Calculator */}
      <section className="py-14 md:py-18 max-w-7xl mx-auto px-4 md:px-8">
        <EmiCalculator
          initialAmount={defaultSliderAmount}
          initialRate={defaultEmiRate}
          initialTenureYears={defaultEmiTenureYears}
          title={`EMI Calculator for ${categoryName}`}
          subtitle={`Simulate your monthly installment and total interest for ${categoryName}.`}
        />
      </section>

      {/* 6. Frequently Asked Questions */}
      {faqs && faqs.length > 0 && (
        <section className="py-14 md:py-18 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200 mb-2">
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
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`material-symbols-outlined text-[20px] transition-transform duration-200 flex-shrink-0 ml-3 ${
                          isOpen ? "rotate-180 text-[#0B2E8D]" : "text-slate-400"
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

      {/* 7. Final Action Callout */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-[#00103A] via-[#001A62] to-[#0B2E8D] text-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Apply for {categoryName}?
            </h3>
            <p className="text-blue-200 text-xs sm:text-sm max-w-xl">
              Get matched across 50+ premier banks &amp; NBFCs with zero upfront fees and minimal paperwork.
            </p>
          </div>
          <a
            href="#lead-application-form"
            className="bg-[#BB0119] hover:bg-[#9c0115] text-white font-black px-7 py-3.5 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 flex-shrink-0"
          >
            <span>Apply Now</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default ProductPageTemplate;
