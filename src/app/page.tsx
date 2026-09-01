import React from "react";
import { BRAND_CONFIG } from "@/config/brand";
import { Hero } from "@/components/Hero";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { ProductCard } from "@/components/ProductCard";
import { EmiCalculator } from "@/components/EmiCalculator";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import {
  WhyChooseUsSection,
  AnimatedProcessTimeline,
} from "@/components/HomeSections";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32">
      {/* 1. Dynamic Hero Banner Slider with Quick Loan Selector */}
      <Hero />

      {/* 2. Co-Lending Bank Partners Marquee (50+ Lenders) */}
      <PartnerMarquee />

      {/* 3. Core Loan Solutions Grid (Strict Priority Ordering) */}
      <section id="products" className="py-16 md:py-20 max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200 mb-3">
              <span className="material-symbols-outlined text-[16px]">account_balance</span>
              Comprehensive Lending Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Specialized Financial Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              Transparent terms, lowest market interest rates, and tailored repayment schedules backed by 50+ scheduled banks &amp; NBFCs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_CONFIG.products.map((prod, idx) => (
            <ScrollReveal key={prod.id} variant="fade-up" delay={idx * 50}>
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

      {/* 4. Why Choose Shreem Finserv (Key Value Pillars) */}
      <WhyChooseUsSection />

      {/* 5. Interactive Smart EMI Calculator */}
      <section id="emi-calculator" className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal variant="fade-up">
          <EmiCalculator />
        </ScrollReveal>
      </section>

      {/* 6. Simple 3-Step Process Timeline */}
      <AnimatedProcessTimeline />

      {/* 7. Customer Reviews & Testimonials Slider */}
      <ScrollReveal variant="fade-up">
        <TestimonialsSlider />
      </ScrollReveal>

      {/* 8. Final Call-To-Action Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal variant="zoom-in">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#8B0010] via-[#BB0119] to-[#001A62] text-white rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
            <div className="space-y-3 text-center md:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold border border-white/20 backdrop-blur-sm">
                <span className="material-symbols-outlined text-[16px] text-amber-300">bolt</span>
                Fast-Track Advisory Desk
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Ready to Accelerate Your Financial Growth?
              </h3>
              <p className="text-white/90 text-sm sm:text-base max-w-xl leading-relaxed">
                Connect with our senior credit underwriting desk or call our priority hotline directly at <strong className="text-white">{BRAND_CONFIG.phoneDisplay}</strong>.
              </p>
            </div>
            <a
              href="/apply"
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
