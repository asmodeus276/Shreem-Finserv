"use client";

import React, { useState } from "react";

export const Testimonials: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const reviews = [
    {
      name: "Dr. Arvind Mukherjee",
      role: "Senior Orthopedic Surgeon & Clinic Director",
      city: "New Delhi",
      loanType: "Doctor Special Unsecured Loan",
      amount: "₹45 Lakhs Disbursed",
      turnaround: "Disbursed in 18 Hours",
      interestSaved: "Saved 2.2% Interest p.a.",
      content:
        "Setting up my private surgical daycare center required quick, unsecured capital. Shreem Finserv managed the sanction in under 24 hours with preferential interest rates from HDFC. Remarkable speed and professionalism!",
      rating: 5,
      avatarInitials: "AM",
      gradient: "from-blue-600 to-indigo-800",
      videoCaption: "Clinic Expansion & Equipment Setup Journey",
    },
    {
      name: "Meenakshi Sundaram",
      role: "Managing Director, Precision Tech Components",
      city: "Noida / Greater Noida",
      loanType: "Machinery & Equipment Invoice Loan",
      amount: "₹1.8 Crore Disbursed",
      turnaround: "90% Invoice Funded",
      interestSaved: "7-Year Flexible Repayment",
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
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-2">
            <span className="material-symbols-outlined text-[16px]">reviews</span>
            Real Stories, Verified Disbursals
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by 15,000+ Borrowers &amp; MSMEs
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Read verified case studies of how bespoke financing from Shreem Finserv transformed businesses, clinics, and personal liquidity.
          </p>
        </div>

        {/* 3 Video-Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl overflow-hidden hover:bg-white hover:border-[#0B2E8D]/30 interactive-shadow transition-all flex flex-col justify-between"
            >
              {/* Top Video Preview Banner */}
              <div
                onClick={() => setActiveModal(idx)}
                className={`relative h-44 bg-gradient-to-br ${rev.gradient} p-5 text-white flex flex-col justify-between cursor-pointer group`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                    {rev.city}
                  </span>
                  <span className="text-[11px] font-black text-emerald-300 bg-emerald-950/70 border border-emerald-600/40 px-2.5 py-0.5 rounded-full">
                    {rev.amount}
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all shadow-lg">
                    <span className="material-symbols-outlined text-white text-2xl ml-0.5">
                      play_arrow
                    </span>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="text-xs font-bold text-white/90 leading-tight">
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
                  <div className="bg-white p-2 rounded-xl border border-slate-200 text-center">
                    <span className="text-slate-400 block text-[9px] uppercase font-bold">Speed</span>
                    <span className="font-bold text-slate-800">{rev.turnaround}</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-slate-200 text-center">
                    <span className="text-slate-400 block text-[9px] uppercase font-bold">Advantage</span>
                    <span className="font-bold text-emerald-700">{rev.interestSaved}</span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex text-amber-400 text-sm">
                  {"★".repeat(rev.rating)}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              {/* Author Strip */}
              <div className="p-6 pt-0 border-t border-slate-200/80 flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-[#001A62] text-white flex items-center justify-center font-bold text-xs pt-3">
                  {rev.avatarInitials}
                </div>
                <div className="pt-3">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight flex items-center gap-1">
                    <span>{rev.name}</span>
                    <span className="material-symbols-outlined text-emerald-600 text-[15px]">verified</span>
                  </h4>
                  <p className="text-[11px] text-slate-500">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Video Story Popup */}
        {activeModal !== null && (
          <div
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 relative"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-[#0B2E8D] uppercase">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Verified Case Study
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {reviews[activeModal].name} - {reviews[activeModal].loanType}
              </h3>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs text-slate-600">
                <div className="font-bold text-slate-800 text-sm">Key Sanction Metrics:</div>
                <p>• Total Approved Amount: <strong className="text-slate-900">{reviews[activeModal].amount}</strong></p>
                <p>• Underwriting SLA: <strong className="text-slate-900">{reviews[activeModal].turnaround}</strong></p>
                <p>• Interest Cost Benefit: <strong className="text-emerald-700">{reviews[activeModal].interestSaved}</strong></p>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                &ldquo;{reviews[activeModal].content}&rdquo;
              </p>

              <div className="pt-2">
                <a
                  href="#lead-application-form"
                  onClick={() => setActiveModal(null)}
                  className="block text-center w-full bg-[#001A62] hover:bg-[#BB0119] text-white font-bold py-3 rounded-xl text-xs transition-colors shadow"
                >
                  Check If You Qualify for Similar Terms
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
