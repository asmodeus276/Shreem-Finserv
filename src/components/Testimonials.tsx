"use client";

import React, { useState } from "react";

interface Review {
  name: string;
  role: string;
  city: string;
  category: "all" | "doctors" | "business" | "property" | "machinery";
  loanType: string;
  amount: string;
  turnaround: string;
  interestSaved: string;
  content: string;
  rating: number;
  avatarInitials: string;
  gradient: string;
  videoCaption: string;
}

const REVIEWS: Review[] = [
  {
    name: "Dr. Arvind Mukherjee",
    role: "Senior Orthopedic Surgeon & Clinic Director",
    city: "New Delhi",
    category: "doctors",
    loanType: "Doctor Special Unsecured Loan",
    amount: "₹45 Lakhs Disbursed",
    turnaround: "18 Hours SLA",
    interestSaved: "Saved 2.2% p.a.",
    content:
      "Setting up my private surgical daycare center required quick, unsecured capital. Shreem Finserv managed the sanction in under 24 hours with preferential 9.99% interest from HDFC. Remarkable speed and professionalism!",
    rating: 5,
    avatarInitials: "AM",
    gradient: "from-blue-600 to-indigo-800",
    videoCaption: "Clinic Expansion & Daycare Setup Story",
  },
  {
    name: "Meenakshi Sundaram",
    role: "Managing Director, Precision Tech Components",
    city: "Noida / Greater Noida",
    category: "machinery",
    loanType: "Machinery & Equipment Invoice Loan",
    amount: "₹1.8 Crore Disbursed",
    turnaround: "90% Invoice Funded",
    interestSaved: "7-Year Flexible Tenure",
    content:
      "We needed to import advanced 5-axis CNC machines. The team at Shreem Finserv arranged 90% financing on the proforma invoice with an extended 7-year tenure that kept our operating cash flow completely intact.",
    rating: 5,
    avatarInitials: "MS",
    gradient: "from-emerald-600 to-teal-800",
    videoCaption: "CNC Machinery Financing Case Study",
  },
  {
    name: "Rajesh K. Aggarwal",
    role: "Proprietor, Aggarwal Logistics & Trading",
    city: "Ghaziabad, UP",
    category: "property",
    loanType: "Loan Against Property (LAP)",
    amount: "₹3.5 Crore Disbursed",
    turnaround: "Debt Consolidation",
    interestSaved: "Reduced EMI by 35%",
    content:
      "I transferred my high-interest overdraft to a low-cost Loan Against Property. Reduced my monthly interest outflow by 35% and received an additional ₹75 Lakh top-up for warehouse expansion with zero upfront brokerage.",
    rating: 5,
    avatarInitials: "RA",
    gradient: "from-amber-600 to-red-800",
    videoCaption: "Overdraft to LAP Balance Transfer Story",
  },
  {
    name: "Pooja Sharma",
    role: "Founder & Creative Director, Aura Apparel",
    city: "Gurugram, Haryana",
    category: "business",
    loanType: "Women Entrepreneur MSME Line",
    amount: "₹65 Lakhs Disbursed",
    turnaround: "CGTMSE Collateral-Free",
    interestSaved: "0.5% Special Rebate",
    content:
      "As a female founder scaling exports, Shreem Finserv unlocked a collateral-free CGTMSE line with a 0.5% interest concession. Their dedicated female relationship manager handled everything seamlessly.",
    rating: 5,
    avatarInitials: "PS",
    gradient: "from-purple-600 to-pink-800",
    videoCaption: "Women Entrepreneur Export Credit Line",
  },
  {
    name: "Dr. Sunita Deshmukh",
    role: "Chief Radiologist, Diagnostic Imaging Hub",
    city: "Mumbai, MH",
    category: "doctors",
    loanType: "High-Tech MRI Equipment Loan",
    amount: "₹2.2 Crore Disbursed",
    turnaround: "Direct OEM Settlement",
    interestSaved: "6-Month Moratorium",
    content:
      "Procuring our 1.5 Tesla MRI scanner required customized equipment structuring with an installation moratorium. Shreem Finserv coordinated directly with the OEM and finalized bank disbursal smoothly.",
    rating: 5,
    avatarInitials: "SD",
    gradient: "from-cyan-600 to-blue-800",
    videoCaption: "Diagnostic MRI Infrastructure Expansion",
  },
  {
    name: "Vikramjit Singh",
    role: "Partner, Singh Auto Ancillaries",
    city: "Faridabad, HR",
    category: "business",
    loanType: "GST Surrogate Working Capital",
    amount: "₹1.1 Crore Disbursed",
    turnaround: "48-Hour Fast Credit",
    interestSaved: "Clean Floating Rate",
    content:
      "Our automotive tier-2 supply business experienced a 90-day receivables gap. Shreem evaluated our 12-month GSTR-3B records and sanctioned a revolving cash credit line in less than 48 hours.",
    rating: 5,
    avatarInitials: "VS",
    gradient: "from-teal-600 to-emerald-900",
    videoCaption: "Auto Component Manufacturer Working Capital",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Stories" },
  { id: "doctors", label: "Doctors & Clinics" },
  { id: "business", label: "MSME & Business" },
  { id: "property", label: "Loan Against Property" },
  { id: "machinery", label: "Machinery & Equipment" },
];

export const Testimonials: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const filteredReviews =
    selectedCategory === "all"
      ? REVIEWS
      : REVIEWS.filter((r) => r.category === selectedCategory);

  return (
    <section className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header with Trust Badges */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200 mb-3">
            <span className="material-symbols-outlined text-[16px] text-amber-500">star</span>
            Verified Client Case Studies & Reviews
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Real Stories, Real Disbursals,{" "}
            <span className="text-[#0B2E8D]">Real Growth</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            See how doctors, enterprise founders, and property owners across India optimized their credit costs with Shreem Finserv.
          </p>

          {/* Google Review Trust Bar */}
          <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2 mt-4 shadow-2xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-black text-slate-800">4.9 / 5.0</span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-slate-600 font-medium">850+ Verified Client Reviews</span>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#0B2E8D] text-white shadow-md shadow-[#0B2E8D]/20 scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 border border-slate-200/90 rounded-3xl overflow-hidden hover:bg-white hover:border-[#0B2E8D]/40 interactive-shadow transition-all flex flex-col justify-between group"
            >
              {/* Top Card Preview Banner */}
              <div
                onClick={() => setActiveModal(idx)}
                className={`relative h-44 bg-gradient-to-br ${rev.gradient} p-5 text-white flex flex-col justify-between cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                    {rev.city}
                  </span>
                  <span className="text-[11px] font-black text-emerald-300 bg-emerald-950/70 border border-emerald-600/40 px-2.5 py-0.5 rounded-full">
                    {rev.amount}
                  </span>
                </div>

                {/* Center Action Indicator */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all shadow-lg">
                    <span className="material-symbols-outlined text-white text-2xl ml-0.5">
                      visibility
                    </span>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="text-xs font-bold text-white/95 leading-tight">
                    {rev.videoCaption}
                  </div>
                  <div className="text-[10px] text-white/70 font-medium mt-0.5">
                    {rev.loanType}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                {/* Metric Badges */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 text-center shadow-2xs">
                    <span className="text-slate-400 block text-[9px] uppercase font-bold">Speed</span>
                    <span className="font-bold text-slate-800">{rev.turnaround}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 text-center shadow-2xs">
                    <span className="text-slate-400 block text-[9px] uppercase font-bold">Advantage</span>
                    <span className="font-bold text-emerald-700">{rev.interestSaved}</span>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, starIdx) => (
                    <svg
                      key={starIdx}
                      className="w-4 h-4 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[11px] font-bold text-slate-500 ml-1.5">5.0 Verified</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              {/* Author Strip */}
              <div className="p-6 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-[#001A62] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-2xs">
                    {rev.avatarInitials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">{rev.role}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0">
                  <span className="material-symbols-outlined text-[13px]">check_circle</span>
                  Disbursed
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {activeModal !== null && filteredReviews[activeModal] && (
          <div
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 relative animate-fade-in-up"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-[#0B2E8D] uppercase">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Verified Disbursal Case Study
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {filteredReviews[activeModal].name} — {filteredReviews[activeModal].loanType}
              </h3>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs text-slate-600">
                <div className="font-bold text-slate-800 text-sm">Key Sanction Metrics:</div>
                <p>• Total Approved Amount: <strong className="text-slate-900">{filteredReviews[activeModal].amount}</strong></p>
                <p>• Underwriting SLA: <strong className="text-slate-900">{filteredReviews[activeModal].turnaround}</strong></p>
                <p>• Interest Cost Benefit: <strong className="text-emerald-700">{filteredReviews[activeModal].interestSaved}</strong></p>
                <p>• Location: <strong className="text-slate-800">{filteredReviews[activeModal].city}</strong></p>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                &ldquo;{filteredReviews[activeModal].content}&rdquo;
              </p>

              <div className="pt-2">
                <a
                  href="#lead-application-form"
                  onClick={() => setActiveModal(null)}
                  className="block text-center w-full bg-[#001A62] hover:bg-[#BB0119] text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-md"
                >
                  Check If You Qualify for Similar Terms →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
