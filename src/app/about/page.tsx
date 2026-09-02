import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { AwardsShowcase } from "@/components/AwardsShowcase";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us - Let's Grow Business With Us | Shreem Finserv",
  description:
    "Shreem Finserv is India's leading loan marketplace providing tailored financial solutions for salaried individuals, doctors, self-employed professionals, and MSME enterprises across India.",
};

const CORE_PILLARS = [
  {
    icon: "verified_user",
    title: "100% Ethical & Zero Upfront Fee",
    desc: "Strict zero-brokerage, zero upfront fee policy. We only win when your loan is sanctioned and disbursed under optimal bank terms.",
    color: "from-blue-600 to-indigo-800",
  },
  {
    icon: "hub",
    title: "50+ Premier Bank Network",
    desc: "Direct corporate DSA partnerships with SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak, Tata Capital, and top scheduled NBFCs.",
    color: "from-emerald-600 to-teal-800",
  },
  {
    icon: "lock",
    title: "DPDP Act 2026 Compliant",
    desc: "256-bit encrypted secure data pipelines ensuring your PAN, ITR, and banking statements remain strictly confidential.",
    color: "from-amber-600 to-orange-800",
  },
  {
    icon: "speed",
    title: "Rapid Disbursal SLA",
    desc: "Industry-leading turnarounds: from 2-hour emergency credit to 24-hour doctor loans and 48-hour MSME capital.",
    color: "from-red-600 to-rose-800",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-20 bg-white">
      
      {/* 1. Hero Section: Exact Reference Match to capitalneed.com/about-us.php */}
      <section className="relative bg-gradient-to-b from-[#f4f8fc] via-[#fbfdff] to-white py-8 sm:py-12 md:py-16 overflow-hidden border-b border-slate-100">
        
        {/* Subtle curved background contour lines matching reference */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1440 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-50 180 C250 80, 550 320, 950 140 C1150 50, 1350 220, 1500 120" stroke="#001A62" strokeWidth="1.2" strokeOpacity="0.12" fill="none"/>
            <path d="M-50 230 C250 130, 550 370, 950 190 C1150 100, 1350 270, 1500 170" stroke="#001A62" strokeWidth="1.2" strokeOpacity="0.08" fill="none"/>
            <path d="M-50 280 C250 180, 550 420, 950 240 C1150 150, 1350 320, 1500 220" stroke="#001A62" strokeWidth="1.2" strokeOpacity="0.05" fill="none"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Organic Smooth-Curved Oval Image Frame (Handshake over documents) */}
            <div className="md:col-span-6 lg:col-span-5 flex justify-center md:justify-start">
              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[380px] lg:w-[440px] lg:h-[400px]">
                {/* Organic curved frame with soft blue shadow */}
                <div className="w-full h-full rounded-[45%_55%_65%_35%/55%_45%_55%_45%] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 relative group transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=85"
                    alt="Let's grow business with Shreem Finserv"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 440px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle tint overlay */}
                  <div className="absolute inset-0 bg-[#001A62]/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              </div>
            </div>

            {/* Right Column: Giant Bold Headline */}
            <div className="md:col-span-6 lg:col-span-7 space-y-3 sm:space-y-4 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#001A62] tracking-tight leading-[1.08]">
                Let&apos;s grow <br />
                <span className="text-[#0B2E8D]">business</span> <br />
                with us
              </h1>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl font-medium leading-relaxed">
                Partner with India&apos;s leading loan marketplace to unlock premier credit lines, rapid disbursals, and transparent zero-upfront financing.
              </p>
            </div>

          </div>
        </div>

        {/* Breadcrumb Navigation Bar: Exact Match to Reference */}
        <div className="w-full bg-[#1e293b] text-slate-200 py-3 mt-8 sm:mt-12 border-t border-slate-700/60 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-xs sm:text-sm font-semibold flex items-center gap-2">
            <Link href="/" className="text-blue-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-500">&gt;</span>
            <Link href="/about-us" className="text-blue-300 hover:text-white transition-colors">
              About Us
            </Link>
            <span className="text-slate-500">&gt;</span>
            <span className="text-white font-bold">Who we are</span>
          </div>
        </div>

      </section>

      {/* 2. Introductory Trust Content Text (Matching Reference Body Intro) */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
            <p className="text-slate-800 font-medium leading-relaxed">
              <strong className="text-[#001A62] font-black text-lg sm:text-xl">{BRAND_CONFIG.name}</strong> is leading loan market place. Our head office is located in Delhi-NCR ({BRAND_CONFIG.address}). We are available in multiple locations across India. We serve multiple loan services like <strong className="text-slate-900">Personal Loan</strong>, <strong className="text-slate-900">Business Loan</strong>, <strong className="text-slate-900">Professional Loan</strong>, <strong className="text-slate-900">Home Loan</strong>, <strong className="text-slate-900">Loan Against Property</strong>, <strong className="text-slate-900">Auto Loan (New &amp; Used Cars)</strong>, <strong className="text-slate-900">Gold Loan</strong> &amp; <strong className="text-slate-900">Working Capital</strong>.
            </p>
            <p className="text-slate-600">
              We are associated and tie-ups with India&apos;s leading &amp; Major Banks and NBFCs, which benefits &amp; helps loan seekers to get their expected services and fulfill their loan requirements on time with optimal interest rates, minimal paperwork, and 100% transparency.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Executive & Customer Trust Section ("Thousands Of Customers Trust Our Company") */}
      <section className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Leadership & Trust Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=85"
                  alt="Thousands of customers trust Shreem Finserv"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Experience Badge Overlay */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#001A62] text-white flex items-center justify-center font-black text-xl shadow-md">
                      10+
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Years Experience</div>
                      <div className="text-sm font-black text-slate-900">Delivering Financial Trust</div>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <div className="text-xs font-bold text-emerald-600 flex items-center justify-end gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      50+ Banks
                    </div>
                    <div className="text-[10px] text-slate-500">Zero Upfront Fee</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Commitments and Action Dialers */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#001A62] text-xs font-bold border border-blue-200">
                <span className="material-symbols-outlined text-[16px] text-[#BB0119]">verified</span>
                <span>AUTHORIZED CREDIT PARTNER</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Thousands Of Customers <br />
                <span className="text-[#001A62]">Trust Our Company</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our major concern is on offering fast online loan facilities to fulfill emergency &amp; planned capital requirements with 100% transparency, zero upfront charges, and dedicated 1:1 senior relationship managers across all tier-1 and tier-2 Indian cities.
              </p>

              {/* Quick Feature Checklist */}
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs sm:text-sm font-bold text-slate-800">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                  <span>Instant Sanction in 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                  <span>Zero Upfront Brokerage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                  <span>50+ Bank Partnerships</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                  <span>100% DPDP Data Privacy</span>
                </div>
              </div>

              {/* Direct Action Buttons: Phone Dialer, WhatsApp, Apply Now */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-slate-200">
                <a
                  href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#001A62] hover:bg-[#0B2E8D] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px] text-amber-400">call</span>
                  <span>Call: {BRAND_CONFIG.phoneDisplay}</span>
                </a>

                <a
                  href={BRAND_CONFIG.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Chat</span>
                </a>

                <Link
                  href="/apply"
                  className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-[#BB0119] hover:bg-[#9c0115] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <span>Apply Online</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 4. Performance Metrics Bar */}
      <section className="bg-slate-50 border-y border-slate-200 py-10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="text-3xl sm:text-4xl font-black text-[#001A62]">
              <AnimatedCounter end={500} prefix="₹" suffix="Cr+" />
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Loan Volume Disbursed</p>
          </div>
          <div className="p-3 border-l border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-slate-900">
              <AnimatedCounter end={15000} suffix="+" />
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Satisfied Borrowers</p>
          </div>
          <div className="p-3 border-l border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Banking Partners</p>
          </div>
          <div className="p-3 border-l border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-[#BB0119]">
              <AnimatedCounter end={2} suffix=" Hours" />
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Avg. Fast Sanction</p>
          </div>
        </div>
      </section>

      {/* 5. Core Operational Pillars */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#001A62]">Foundational Principles</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-1">
                The Shreem Operational Pillars
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-2">
                Built on unwavering compliance, absolute customer confidentiality, and institutional speed.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PILLARS.map((pillar, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 80}>
                <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-[#001A62]/40 transition-all duration-300 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} text-white flex items-center justify-center shadow-md`}>
                      <span className="material-symbols-outlined text-[24px]">{pillar.icon}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Institutional Partner Network Marquee */}
      <PartnerMarquee />

      {/* 7. Awards & Industry Recognition Showcase */}
      <ScrollReveal variant="fade-up">
        <AwardsShowcase />
      </ScrollReveal>

      {/* 8. Ready To Apply CTA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <ScrollReveal variant="zoom-in">
          <div className="bg-gradient-to-r from-[#001A62] via-[#0B2E8D] to-[#001A62] text-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-black">
                Have a Loan Requirement in Mind?
              </h3>
              <p className="text-blue-100 text-sm max-w-lg">
                Speak directly with our senior underwriting advisors for immediate eligibility evaluation.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="bg-white hover:bg-slate-100 text-[#001A62] font-bold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-all text-xs sm:text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/apply"
                className="bg-[#BB0119] hover:bg-[#9c0115] text-white font-bold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-all text-xs sm:text-sm uppercase tracking-wider"
              >
                Apply Online
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
