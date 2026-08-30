"use client";

import React from "react";
import { HeroTypewriter } from "@/components/HeroTypewriter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const TYPEWRITER_WORDS = [
  "Personal Loans",
  "Business Loans",
  "Loan Against Property",
  "Machinery Loans",
  "Urgent Cash Advance",
  "Loans for Doctors",
];

const WHY_CHOOSE_US = [
  {
    icon: "account_balance",
    number: "50+",
    title: "Bank Partners",
    desc: "Direct partnerships with India's top scheduled banks and premier NBFCs.",
    color: "from-[#0B2E8D] to-[#001A62]",
  },
  {
    icon: "money_off",
    number: "₹0",
    title: "Upfront Fees",
    desc: "Zero processing charges until your loan is sanctioned and disbursed.",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    icon: "bolt",
    number: "2 Hrs",
    title: "Fastest Disbursal",
    desc: "Industry-leading SLA with digital KYC and instant bank matching.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: "verified_user",
    number: "100%",
    title: "Secure & Private",
    desc: "DPDP 2026 compliant with 256-bit encryption. Zero data sharing.",
    color: "from-[#BB0119] to-[#8B0010]",
  },
  {
    icon: "support_agent",
    number: "1:1",
    title: "Dedicated Manager",
    desc: "Personal relationship manager assigned from application to disbursal.",
    color: "from-violet-600 to-purple-800",
  },
  {
    icon: "trending_up",
    number: "98%",
    title: "Approval Rate",
    desc: "Multi-bank algorithmic matching ensures maximum approval probability.",
    color: "from-cyan-600 to-blue-700",
  },
];

const PROCESS_STEPS = [
  {
    num: 1,
    icon: "edit_note",
    title: "Apply Online",
    desc: "Submit basic loan requirements with instant digital pre-evaluation.",
  },
  {
    num: 2,
    icon: "upload_file",
    title: "Upload KYC",
    desc: "Secure digital document submission via encrypted DPDP-compliant channel.",
  },
  {
    num: 3,
    icon: "compare_arrows",
    title: "Bank Match",
    desc: "Our algorithmic engine matches you with the lowest-rate bank partners.",
  },
  {
    num: 4,
    icon: "task_alt",
    title: "Quick Sanction",
    desc: "Receive in-principle formal loan sanction letter in under 24 hours.",
  },
  {
    num: 5,
    icon: "account_balance_wallet",
    title: "Direct Disbursal",
    desc: "Funds credited directly to your registered account with zero hidden fees.",
  },
];

export function HeroTypewriterSection() {
  return (
    <span className="text-[#0B2E8D] block mt-1.5 sm:mt-2">
      <HeroTypewriter
        words={TYPEWRITER_WORDS}
        typingSpeed={70}
        deletingSpeed={40}
        pauseDelay={2200}
      />
    </span>
  );
}

export function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-slate-200 max-w-lg">
      <ScrollReveal variant="fade-up" delay={0}>
        <div className="min-w-0">
          <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            <AnimatedCounter end={500} prefix="₹" suffix="Cr+" />
          </div>
          <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">Disbursed</div>
        </div>
      </ScrollReveal>
      <ScrollReveal variant="fade-up" delay={150}>
        <div className="min-w-0">
          <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            <AnimatedCounter end={15000} suffix="+" />
          </div>
          <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">Borrowers</div>
        </div>
      </ScrollReveal>
      <ScrollReveal variant="fade-up" delay={300}>
        <div className="min-w-0">
          <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#BB0119] tracking-tight leading-tight">
            <AnimatedCounter end={2} suffix=" Hrs" />
          </div>
          <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">Fast KYC</div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-b border-slate-200 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0B2E8D]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200 mb-3">
              <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
              The Shreem Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why <span className="text-[#0B2E8D]">15,000+</span> Borrowers Trust Us
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Built on transparency, speed, and zero hidden charges — here&apos;s what sets us apart.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <ScrollReveal key={idx} variant="fade-up" delay={idx * 100}>
              <div className="group bg-white border border-slate-200/80 rounded-2xl p-6 md:p-7 hover:border-[#0B2E8D]/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B2E8D]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>

                <div className="relative z-10 flex items-start gap-4">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="material-symbols-outlined text-[24px] md:text-[26px]">{item.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#0B2E8D] transition-colors">
                      {item.number}
                    </div>
                    <h3 className="text-sm font-bold text-slate-700 mt-0.5">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AnimatedProcessTimeline() {
  return (
    <section className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Ambient Background Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-red-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200 mb-2">
              <span className="material-symbols-outlined text-[16px]">route</span>
              Seamless 5-Step Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              How Your Loan Gets Sanctioned
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
              From online evaluation to account credit with complete digital transparency and dedicated relationship management.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#0B2E8D] via-[#0B2E8D] to-[#BB0119] rounded-full z-0 opacity-20"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isLast = idx === PROCESS_STEPS.length - 1;
              return (
                <ScrollReveal key={idx} variant="scale-up" delay={idx * 150}>
                  <div className={`bg-slate-50/80 p-6 rounded-2xl border border-slate-200 text-center hover:bg-white ${isLast ? "hover:border-[#BB0119]/30" : "hover:border-[#0B2E8D]/30"} interactive-shadow transition-all group relative`}>
                    {/* Step Number */}
                    <div className={`w-14 h-14 rounded-2xl ${isLast ? "bg-[#BB0119]" : "bg-[#0B2E8D]"} text-white flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative`}>
                      <span className="material-symbols-outlined text-[26px]">{step.icon}</span>
                      {/* Step number badge */}
                      <span className={`absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full ${isLast ? "bg-[#8B0010]" : "bg-[#001A62]"} text-white text-[10px] font-black flex items-center justify-center border-2 border-white shadow-sm`}>
                        {step.num}
                      </span>
                    </div>
                    <h4 className={`font-bold text-slate-900 text-base mb-1.5 ${isLast ? "group-hover:text-[#BB0119]" : "group-hover:text-[#0B2E8D]"} transition-colors`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
