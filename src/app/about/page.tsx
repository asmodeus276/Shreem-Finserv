import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { AwardsShowcase } from "@/components/AwardsShowcase";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us - Thousands Of Customers Trust Our Company | Shreem Finserv",
  description:
    "Shreem Finserv is India's leading loan marketplace providing tailored financial solutions for salaried individuals, doctors, self-employed professionals, and MSME enterprises.",
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
    desc: "Direct corporate DSA tie-ups with SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak, Tata Capital, and top scheduled NBFCs.",
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
    <div className="pt-24 pb-20 bg-[#F7F9FB]">
      {/* 1. Header Banner / Breadcrumb (Reference: "Let's Grow Business With Us") */}
      <section className="relative bg-gradient-to-r from-[#00103A] via-[#001A62] to-[#0B2E8D] text-white py-14 md:py-20 overflow-hidden border-b border-blue-900/40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold border border-white/15">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">About Us</span>
                <span>/</span>
                <span className="text-blue-300">Who We Are</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Let&apos;s Grow Business <br className="hidden sm:inline" />
                <span className="text-[#7dd3fc]">With Us</span>
              </h1>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 max-w-sm text-xs space-y-2 text-slate-200 shadow-xl">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <span className="material-symbols-outlined text-amber-400">verified</span>
                <span>Authorized Financial Marketplace</span>
              </div>
              <p>
                Headquartered in Delhi-NCR with nationwide coverage across 50+ banking partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main 2-Column Executive & Company Story Section (Mirrors Reference Photo) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Large High-Quality Founder / Office Photo Container */}
            <div className="relative group">
              {/* Soft decorative blur glow behind image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0B2E8D]/20 to-[#BB0119]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

              <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=85"
                  alt="Shreem Finserv Founder & Leadership"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient vignette overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Floating Experience Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#001A62] text-white flex items-center justify-center font-black text-xl shadow-md">
                      10+
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Industry Experience</div>
                      <div className="text-sm font-black text-slate-900">Delivering Financial Trust</div>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <div className="text-xs font-bold text-emerald-600 flex items-center justify-end gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Active Advisor
                    </div>
                    <div className="text-[11px] text-slate-500">50+ Banking Tie-ups</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Company Story, Services Overview, and Contact Actions */}
            <div className="space-y-6">
              
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200 shadow-xs">
                <span className="material-symbols-outlined text-[16px] text-[#BB0119]">corporate_fare</span>
                <span>ABOUT COMPANY</span>
              </div>

              {/* Large Bold Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Thousands Of Customers <br />
                <span className="text-[#0B2E8D]">Trust Our Company</span>
              </h2>

              {/* Descriptive Content for Salaried & Self-Employed Clients */}
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-slate-900">{BRAND_CONFIG.name}</strong> is a leading premier loan marketplace and authorized credit distribution partner. We are committed to serving multiple loan services tailored for salaried individuals, doctors, self-employed professionals, and enterprise owners across Delhi-NCR and India.
                </p>
                <p>
                  Whether you are seeking <strong className="text-slate-800">Professional Loans</strong> for clinical setup, <strong className="text-slate-800">Business Loans &amp; MSME Working Capital</strong> to scale operations, a low-cost <strong className="text-slate-800">Home Loan</strong> for your dream residence, or high-value <strong className="text-slate-800">Loan Against Property (LAP)</strong>, we connect you with India&apos;s leading scheduled commercial banks and premier NBFCs.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 bg-slate-100/80 p-3.5 rounded-xl border border-slate-200">
                  ⚡ <em>Our major concern is on offering online loan facilities to fulfill emergency &amp; planned capital requirements with 100% transparency, zero upfront charges, and dedicated 1:1 relationship managers.</em>
                </p>
              </div>

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

              {/* Quick-Action Inline Buttons for Phone Call & WhatsApp */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-slate-200">
                {/* Phone Call CTA */}
                <a
                  href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#001A62] hover:bg-[#0B2E8D] text-white font-bold text-sm shadow-lg hover:shadow-blue-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                >
                  <span className="material-symbols-outlined text-[20px] text-amber-400 group-hover:animate-bounce">
                    call
                  </span>
                  <span>Call: {BRAND_CONFIG.phoneDisplay}</span>
                </a>

                {/* WhatsApp Chat CTA */}
                <a
                  href={`${BRAND_CONFIG.social.whatsapp}?text=Hi%20Shreem%20Finserv,%20I%20would%20like%20to%20know%20more%20about%20your%20loan%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg hover:shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chat
                  </span>
                  <span>WhatsApp Chat</span>
                </a>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 3. Key Metrics Bar */}
      <section className="bg-white border-y border-slate-200 py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-black text-[#0B2E8D]">
              <AnimatedCounter end={500} prefix="₹" suffix="Cr+" />
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Loan Volume Disbursed</p>
          </div>
          <div className="p-4 border-l border-slate-100">
            <div className="text-3xl sm:text-4xl font-black text-slate-900">
              <AnimatedCounter end={15000} suffix="+" />
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Satisfied Borrowers</p>
          </div>
          <div className="p-4 border-l border-slate-100">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Lending Partners</p>
          </div>
          <div className="p-4 border-l border-slate-100">
            <div className="text-3xl sm:text-4xl font-black text-[#BB0119]">
              <AnimatedCounter end={2} suffix=" Hours" />
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Avg. Fast Sanction</p>
          </div>
        </div>
      </section>

      {/* 4. Core Pillars Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">Foundational Values</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
                The Shreem Operational Pillars
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Built on unwavering compliance, absolute customer confidentiality, and institutional speed.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PILLARS.map((pillar, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 100}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-[#0B2E8D]/40 transition-all duration-300 h-full flex flex-col justify-between">
                  <div className="space-y-4">
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

      {/* 5. Institutional Partner Network Marquee */}
      <PartnerMarquee />

      {/* 6. Awards Showcase */}
      <ScrollReveal variant="fade-up">
        <AwardsShowcase />
      </ScrollReveal>

      {/* 7. Ready To Apply CTA */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
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
                className="bg-white hover:bg-slate-100 text-[#001A62] font-bold px-7 py-3.5 rounded-xl shadow-md hover:scale-105 transition-all text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/apply"
                className="bg-[#BB0119] hover:bg-[#E0292E] text-white font-bold px-7 py-3.5 rounded-xl shadow-md hover:scale-105 transition-all text-sm"
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
