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
import {
  HeroTypewriterSection,
  HeroStats,
  WhyChooseUsSection,
  AnimatedProcessTimeline,
} from "@/components/HomeSections";
import { ScrollReveal } from "@/components/ScrollReveal";

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
                Instant Disbursal for{" "}
                <HeroTypewriterSection />
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

              {/* Key Proof Metrics — Animated */}
              <HeroStats />
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
        <ScrollReveal variant="fade-up">
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
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_CONFIG.products.map((prod, idx) => (
            <ScrollReveal key={prod.id} variant="fade-up" delay={idx * 100}>
              <ProductCard
                id={prod.id}
                title={prod.title}
                slug={prod.slug}
                icon={prod.icon}
                shortDesc={prod.shortDesc}
                maxAmount={prod.maxAmount}
                interestRate={prod.interestRate}
                tenure={prod.tenure}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us — NEW */}
      <WhyChooseUsSection />

      {/* 6. Interactive Smart EMI Calculator */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal variant="fade-up">
          <EmiCalculator />
        </ScrollReveal>
      </section>

      {/* 7. Instant Loan Eligibility Estimator */}
      <ScrollReveal variant="fade-up">
        <CreditScoreWidget />
      </ScrollReveal>

      {/* 8. Institutional Awards & Bank Partner Proof */}
      <ScrollReveal variant="fade-up">
        <AwardsShowcase />
      </ScrollReveal>

      {/* 9. 5-Step Animated Process Timeline — ENHANCED */}
      <AnimatedProcessTimeline />

      {/* 10. Channel Partner / DSA Section */}
      <ScrollReveal variant="fade-up">
        <PartnerSection />
      </ScrollReveal>

      {/* 11. Customer Testimonials */}
      <ScrollReveal variant="fade-up">
        <Testimonials />
      </ScrollReveal>

      {/* 12. Final Call-To-Action Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal variant="zoom-in">
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
        </ScrollReveal>
      </section>

    </div>
  );
}
