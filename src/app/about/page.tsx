import { Metadata } from "next";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { AwardsShowcase } from "@/components/AwardsShowcase";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us - Shreem Finserv | India's Premier Loan Advisory",
  description:
    "Learn about Shreem Finserv, our mission, executive leadership, and partnerships with 50+ leading banks and NBFCs across India.",
};

const CORE_PILLARS = [
  {
    icon: "verified_user",
    title: "100% Ethical Advisory",
    desc: "Strict zero-brokerage, zero upfront fee policy. We only win when you get sanctioned and disbursed on optimal terms.",
    color: "from-blue-600 to-indigo-800",
  },
  {
    icon: "hub",
    title: "50+ Institutional Network",
    desc: "Direct corporate DSA agreements with HDFC, ICICI, SBI, Axis, Kotak, Tata Capital, and premier NBFC syndicates.",
    color: "from-emerald-600 to-teal-800",
  },
  {
    icon: "lock",
    title: "DPDP 2026 Sovereignty",
    desc: "256-bit encrypted data pipelines ensuring your PAN, ITR, and banking statements are never traded or leaked.",
    color: "from-amber-600 to-orange-800",
  },
  {
    icon: "speed",
    title: "Algorithmic Speed SLA",
    desc: "Turnaround benchmarks from 2-hour emergency credit to 48-hour high-ticket MSME credit lines.",
    color: "from-red-600 to-rose-800",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* 1. Dark Luxury Hero Section */}
      <section className="relative bg-gradient-to-b from-[#000d33] via-[#001A62] to-[#0B2E8D] text-white py-16 sm:py-24 overflow-hidden border-b border-blue-900/40">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-200 text-xs font-bold border border-white/20 backdrop-blur-md">
              <span className="material-symbols-outlined text-[16px] text-amber-300">corporate_fare</span>
              Empowering India&apos;s Financial Ambitions
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Democratizing Access to Capital with{" "}
              <span className="bg-gradient-to-r from-blue-200 via-white to-amber-200 bg-clip-text text-transparent block mt-1">
                Zero Friction & Total Speed.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal">
              {BRAND_CONFIG.legalName} ({BRAND_CONFIG.name}) is an authorized credit advisory institution headquartered in Delhi-NCR. We bridge ambitious individuals, medical doctors, MSME manufacturers, and property owners with India&apos;s leading scheduled banks.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-blue-200">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                <span className="material-symbols-outlined text-emerald-400 text-[16px]">verified</span>
                <span>Authorized Multi-Bank DSA</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                <span className="material-symbols-outlined text-blue-300 text-[16px]">shield</span>
                <span>DPDP Act 2026 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Bar */}
      <section className="bg-white border-b border-slate-200 py-10 shadow-sm">
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

      {/* 3. Core Pillars Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">Foundational Values</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
                The Shreem Operational Pillars
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Engineered to deliver institutional safety with fintech velocity.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PILLARS.map((p, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 100}>
                <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0B2E8D]/40 transition-all duration-300 group h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                      <span className="material-symbols-outlined text-[24px]">{p.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0B2E8D] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-5 h-1 w-8 rounded-full bg-slate-100 group-hover:w-full group-hover:bg-[#0B2E8D] transition-all duration-300"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal variant="fade-right">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 h-full">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0B2E8D] flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">flag</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To empower Indian entrepreneurs, healthcare practitioners, and families with instant, transparent, and fair credit by eliminating bureaucratic friction, hidden fees, and complex loan paperwork.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 h-full">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be India’s most trusted direct lending partner, celebrated for ethical financial advisory, full DPDP 2026 data privacy compliance, and technological underwriting innovation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Institutional Proof & Bank Marquee */}
      <AwardsShowcase />
      <PartnerMarquee />

      {/* 6. Action Call */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal variant="zoom-in">
          <div className="bg-gradient-to-r from-[#001A62] via-[#0B2E8D] to-[#001A62] text-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 text-center md:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black">Experience The Shreem Advantage Today</h3>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">Get custom-matched loan quotes with zero upfront fees.</p>
            </div>
            <Link
              href="/#lead-application-form"
              className="bg-white text-[#001A62] hover:bg-slate-100 font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg hover:scale-105"
            >
              Apply Online Now →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
