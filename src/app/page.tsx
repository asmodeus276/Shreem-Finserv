import React from "react";
import { BRAND_CONFIG } from "@/config/brand";
import { LeadForm } from "@/components/LeadForm";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { ApplicationTracker } from "@/components/ApplicationTracker";
import { ProductCard } from "@/components/ProductCard";
import { EmiCalculator } from "@/components/EmiCalculator";
import { CreditScoreWidget } from "@/components/CreditScoreWidget";
import { AwardsShowcase } from "@/components/AwardsShowcase";
import { PartnerSection } from "@/components/PartnerSection";
import { Testimonials } from "@/components/Testimonials";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function HomePage() {
  return (
    <div className="pt-28 sm:pt-32 md:pt-36">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-[#F7F9FB] py-8 sm:py-12 md:py-16">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-gradient-to-br from-[#B7C4FF]/30 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Value Proposition */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2E8D]/10 text-[#0B2E8D] text-xs font-bold border border-[#0B2E8D]/20">
                <span className="material-symbols-outlined text-[16px] text-[#BB0119]">flash_on</span>
                Fast-Track Disbursals Across 50+ Banks & NBFCs
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Instant Loan Disbursal with{" "}
                <span className="text-[#0B2E8D] block mt-1.5 sm:mt-2">Minimal Paperwork</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
                {BRAND_CONFIG.tagline}. We deliver tailored lending solutions designed to fuel
                your personal aspirations, clinic upgrades, and enterprise scaling with total transparency.
              </p>

              {/* Trust Badges Bar */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/90 border border-slate-200 rounded-xl px-3 py-2 shadow-xs text-xs font-bold text-slate-800">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified_user</span>
                  <span>{BRAND_CONFIG.compliance.dpdp}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/90 border border-slate-200 rounded-xl px-3 py-2 shadow-xs text-xs font-bold text-slate-800">
                  <span className="material-symbols-outlined text-[#0B2E8D] text-[18px]">shield</span>
                  <span>{BRAND_CONFIG.compliance.security}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/90 border border-slate-200 rounded-xl px-3 py-2 shadow-xs text-xs font-bold text-slate-800">
                  <span className="material-symbols-outlined text-slate-700 text-[18px]">money_off</span>
                  <span>{BRAND_CONFIG.compliance.upfrontFee}</span>
                </div>
              </div>

              {/* Key Proof Metrics */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-slate-200 max-w-lg">
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    <AnimatedCounter end={500} prefix="₹" suffix="Cr+" />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">Disbursed</div>
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    <AnimatedCounter end={15000} suffix="+" />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">Borrowers</div>
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#BB0119] tracking-tight leading-tight">
                    <AnimatedCounter end={2} suffix=" Hrs" />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">Fast KYC</div>
                </div>
              </div>
            </div>

            {/* Right Lead Form */}
            <div className="lg:col-span-5">
              <LeadForm
                title="Check Loan Eligibility & Rates"
                subtitle="Instant evaluation with zero impact on credit score."
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Co-Lending Bank Partners Marquee */}
      <PartnerMarquee />

      {/* 3. Live Application Tracker */}
      <ApplicationTracker />

      {/* 4. Specialized Financial Solutions 6-Card Grid */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200 mb-3">
            <span className="material-symbols-outlined text-[16px]">account_balance</span>
            Comprehensive Lending Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Specialized Financial Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Tailored lending products designed to meet the unique demands of your profession and enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_CONFIG.products.map((prod) => (
            <ProductCard
              key={prod.id}
              id={prod.id}
              title={prod.title}
              slug={prod.slug}
              icon={prod.icon}
              shortDesc={prod.shortDesc}
              maxAmount={prod.maxAmount}
              interestRate={prod.interestRate}
              tenure={prod.tenure}
            />
          ))}
        </div>
      </section>

      {/* 5. Interactive Smart EMI Calculator */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <EmiCalculator />
      </section>

      {/* 6. Instant Loan Eligibility Estimator */}
      <CreditScoreWidget />

      {/* 7. Institutional Awards & Bank Partner Proof */}
      <AwardsShowcase />

      {/* 8. 5-Step Process Timeline */}
      <section className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
        {/* Subtle Ambient Orbs */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-red-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 text-center hover:bg-white hover:border-[#0B2E8D]/30 interactive-shadow transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#0B2E8D] text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                1
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#0B2E8D] transition-colors">Apply Online</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Submit basic loan requirements with instant digital pre-evaluation.</p>
            </div>

            <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 text-center hover:bg-white hover:border-[#0B2E8D]/30 interactive-shadow transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#0B2E8D] text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                2
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#0B2E8D] transition-colors">Upload KYC</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Secure digital document submission via encrypted DPDP-compliant channel.</p>
            </div>

            <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 text-center hover:bg-white hover:border-[#0B2E8D]/30 interactive-shadow transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#0B2E8D] text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                3
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#0B2E8D] transition-colors">Bank Match</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Our algorithmic engine matches you with the lowest-rate bank partners.</p>
            </div>

            <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 text-center hover:bg-white hover:border-[#0B2E8D]/30 interactive-shadow transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#0B2E8D] text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                4
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#0B2E8D] transition-colors">Quick Sanction</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Receive in-principle formal loan sanction letter in under 24 hours.</p>
            </div>

            <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 text-center hover:bg-white hover:border-[#BB0119]/30 interactive-shadow transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#BB0119] text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                5
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#BB0119] transition-colors">Direct Disbursal</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Funds credited directly to your registered account with zero hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Channel Partner / DSA Section */}
      <PartnerSection />

      {/* 10. Customer Testimonials */}
      <Testimonials />

      {/* 11. Final Call-To-Action Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#8B0010] via-[#BB0119] to-[#001A62] text-white rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          {/* Shimmer Overlay */}
          <div className="absolute inset-0 shimmer-bg opacity-20 pointer-events-none"></div>

          <div className="space-y-3 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold border border-white/20 backdrop-blur-sm">
              <span className="material-symbols-outlined text-[16px] text-amber-300">bolt</span>
              Fast-Track Financial Advisory
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Ready to Accelerate Your Financial Growth?
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-xl leading-relaxed">
              Connect with our senior credit underwriting desk or call our priority hotline directly at <strong className="text-white">{BRAND_CONFIG.phoneDisplay}</strong>.
            </p>
          </div>
          <a
            href="#lead-application-form"
            className="relative z-10 bg-white hover:bg-slate-50 text-[#001A62] font-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-sm flex items-center gap-2 flex-shrink-0"
          >
            <span>Apply Online Now</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </section>

    </div>
  );
}
