import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { AwardsShowcase } from "@/components/AwardsShowcase";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";

export const metadata: Metadata = {
  title: "About Us - Founder & Vision | Shreem Finserv",
  description:
    "Learn about Shreem Finserv, founded by Shikha Gahlout. Bringing software & financial expertise together to provide a one-stop lending platform across Pan India with transparency, speed, and zero upfront fees.",
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

const COMMITMENT_POINTS = [
  {
    icon: "verified",
    title: "Absolute Transparency",
    desc: "Every client deserves clear terms, zero upfront charges, and complete disclosure with no hidden surprises.",
    tag: "Ethical Advisory",
  },
  {
    icon: "person_celebrate",
    title: "Personalised Attention",
    desc: "We understand that every requirement is unique, crafting tailored loan structures suited precisely to your cash flow.",
    tag: "1-on-1 Guidance",
  },
  {
    icon: "account_balance",
    title: "Professional Guidance",
    desc: "Institutional underwriting insights backed by senior banking expertise to secure the lowest feasible interest rates.",
    tag: "Expert Underwriting",
  },
  {
    icon: "travel_explore",
    title: "Pan-India Seamless Service",
    desc: "Delivering a frictionless digital experience for individuals, professionals, and MSMEs across all 28 states & UTs.",
    tag: "Pan-India Reach",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-20 bg-white">
      
      {/* 1. Executive Leadership Hero Banner featuring Founder Shikha Gahlout */}
      <section className="relative bg-gradient-to-b from-[#f4f8fc] via-[#fbfdff] to-white py-10 sm:py-14 md:py-20 overflow-hidden border-b border-slate-200/80">
        
        {/* Ambient background curves & glow */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-50 180 C250 80, 550 320, 950 140 C1150 50, 1350 220, 1500 120" stroke="#0B309A" strokeWidth="1.2" strokeOpacity="0.15" fill="none"/>
            <path d="M-50 230 C250 130, 550 370, 950 190 C1150 100, 1350 270, 1500 170" stroke="#0B309A" strokeWidth="1.2" strokeOpacity="0.10" fill="none"/>
            <path d="M-50 280 C250 180, 550 420, 950 240 C1150 150, 1350 320, 1500 220" stroke="#0B309A" strokeWidth="1.2" strokeOpacity="0.06" fill="none"/>
          </svg>
        </div>
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Authentic Executive Portrait of Founder Shikha Gahlout */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              <div className="relative w-full max-w-[420px] lg:max-w-[440px]">
                
                {/* Decorative Frame with Subtle Glow & Shadow */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group ring-2 ring-blue-100/80">
                  <div className="relative aspect-[1000/1116] w-full bg-slate-100">
                    <Image
                      src="/images/founder.jpg"
                      alt="Shikha Gahlout — Founder & Director, Shreem Finserv"
                      fill
                      priority
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 440px"
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  {/* Floating Corner Badge */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center gap-1.5 text-[11px] font-black text-[#0B309A]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Leadership Desk</span>
                  </div>
                </div>

                {/* Founder Identity Card with Verified Credentials */}
                <div className="mt-4 w-full p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B309A] to-[#082475] text-white flex items-center justify-center font-bold shadow-xs flex-shrink-0">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-black text-slate-900 leading-tight">Shikha Gahlout</div>
                      <div className="text-[11px] font-bold text-[#0B309A]">Founder &amp; Director, Shreem Finserv</div>
                    </div>
                  </div>
                  <div className="text-[11px] font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/80 flex-shrink-0 whitespace-nowrap">
                    Software &amp; Finance
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Hero Headline, Vision & Action CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0B309A] text-xs font-bold border border-blue-200 shadow-2xs">
                <span className="material-symbols-outlined text-[16px] text-[#E30613]">stars</span>
                <span>ABOUT SHREEM FINSERV • LEADERSHIP &amp; VISION</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B309A] tracking-tight leading-[1.12]">
                Empowering India&apos;s <br />
                <span className="text-slate-900">Financial Growth</span>
              </h1>

              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-white border-l-4 border-[#0B309A] shadow-xs text-left">
                <p className="text-sm sm:text-base md:text-lg font-black text-slate-900 italic leading-snug">
                  &ldquo;One Roof. Multiple Financial Solutions. One Trusted Partner.&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
                  — <strong className="text-slate-900">Shikha Gahlout</strong>, Founder &amp; Director
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Founded by <strong>Shikha Gahlout</strong>, Shreem Finserv unites advanced software engineering with institutional banking expertise to deliver fast, transparent, zero-upfront-fee lending across <strong>50+ Scheduled Banks &amp; Premier NBFCs</strong> nationwide.
              </p>

              {/* Quick Trust Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-left">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Network</span>
                  <span className="text-xs font-extrabold text-slate-900">50+ Banks &amp; NBFCs</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Fees</span>
                  <span className="text-xs font-extrabold text-emerald-700">₹0 Upfront Charge</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Speed</span>
                  <span className="text-xs font-extrabold text-[#0B309A]">24-48 Hr Sanction</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Coverage</span>
                  <span className="text-xs font-extrabold text-slate-900">Pan-India Reach</span>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-[#E30613] hover:bg-[#FF1A27] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  <span>Apply For Loan</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>

                <a
                  href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0B309A] hover:bg-[#082475] text-white font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px] text-amber-400">call</span>
                  <span>{BRAND_CONFIG.phoneDisplay}</span>
                </a>

                <a
                  href={BRAND_CONFIG.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Desk</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Full-Width Dark Breadcrumb Bar */}
        <div className="w-full bg-[#1e293b] text-slate-200 py-3 mt-10 sm:mt-14 border-t border-slate-700/60 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-xs sm:text-sm font-semibold flex items-center gap-2">
            <Link href="/" className="text-blue-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-500">&gt;</span>
            <Link href="/about-us" className="text-blue-300 hover:text-white transition-colors">
              About Us
            </Link>
            <span className="text-slate-500">&gt;</span>
            <span className="text-white font-bold">Leadership &amp; Vision</span>
          </div>
        </div>

      </section>

      {/* 2. Strategic Foundation: The Software & Finance Advantage */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal variant="fade-up">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0B309A] text-xs font-bold border border-blue-200">
                <span className="material-symbols-outlined text-[16px] text-emerald-600">psychology</span>
                <span>THE SHREEM LEADERSHIP ADVANTAGE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Bridging Technology Innovation &amp; Banking Expertise
              </h2>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                With a strong professional background spanning <strong className="text-slate-900 font-bold">Software and Finance</strong>, Shikha Gahlout brings a unique blend of digital precision and deep institutional lending knowledge to the advisory ecosystem.
              </p>
            </div>

            {/* Dual Superpower Cards: Technology & Banking */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
              
              {/* Technology & Software Pillar */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/90 via-indigo-50/40 to-white border-2 border-blue-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B309A] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">terminal</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#0B309A]">Engineering Mindset</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">Technology &amp; Software</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Overcoming the traditional friction of borrowing through algorithmic loan matching, digital KYC automation, end-to-end status tracking, and secure 256-bit DPDP data processing.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-blue-100 flex items-center gap-2 text-[#0B309A] text-xs font-bold">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Algorithmic Multi-Bank Rate Matching</span>
                </div>
              </div>

              {/* Institutional Banking & Lending Pillar */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-white border-2 border-emerald-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">account_balance</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">Domain Authority</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">Banking &amp; Lending Depth</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Valuable on-ground experience working with several reputed banks and financial institutions, mastering underwriting policies, cash-flow structuring, and evolving client needs.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-emerald-100 flex items-center gap-2 text-emerald-700 text-xs font-bold">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Institutional Credit Underwriting Insights</span>
                </div>
              </div>

            </div>

            {/* Comprehensive Portfolio Scope Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-slate-700 leading-relaxed space-y-3 max-w-5xl mx-auto shadow-2xs">
              <div className="flex items-center gap-2 text-[#0B309A] text-xs font-black uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">hub</span>
                <span>Pan-India Lending Portfolio</span>
              </div>
              <p className="text-sm sm:text-base text-slate-800 font-medium">
                Headquartered in Delhi-NCR ({BRAND_CONFIG.address}) and serving clients across all 28 Indian States &amp; UTs, <strong className="text-[#0B309A] font-black">{BRAND_CONFIG.name}</strong> provides end-to-end assistance across <strong className="text-slate-900">Professional Loans (Doctors &amp; CAs)</strong>, <strong className="text-slate-900">Business Loans (BL)</strong>, <strong className="text-slate-900">Loan Against Property (LAP)</strong>, <strong className="text-slate-900">Home Loans</strong>, <strong className="text-slate-900">Working Capital &amp; OD</strong>, <strong className="text-slate-900">Machinery Loans</strong>, <strong className="text-slate-900">Car Loans</strong>, <strong className="text-slate-900">Education Loans</strong>, and <strong className="text-slate-900">Women Entrepreneur Loans</strong>.
              </p>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* 4. The Vision Behind Shreem Finserv Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal variant="fade-up">
            
            <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0B309A] text-xs font-bold border border-blue-200">
                <span className="material-symbols-outlined text-[16px] text-amber-500">visibility</span>
                <span>STRATEGIC DIRECTION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                The Vision Behind Shreem Finserv
              </h2>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Founded with a simple yet powerful vision — to make financial solutions easier, more accessible, and more customer-focused.
              </p>
            </div>

            {/* Vision Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0B309A]/40 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[24px]">hub</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900">One-Stop Platform</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The idea behind Shreem Finserv is to create a one-stop financial platform where clients can access a wide range of financial products and solutions under one roof, without having to navigate multiple channels or institutions.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[#0B309A] text-xs font-bold">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Unified Access Across 50+ Lenders</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0B309A]/40 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[24px]">psychology_alt</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900">Right Solution, Right Time</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our aim is not just to arrange finance, but to understand each client&apos;s unique financial requirement and provide the right solution, with the right guidance, at the right time.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-emerald-700 text-xs font-bold">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Tailored Underwriting &amp; Structuring</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0B309A]/40 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E30613] to-rose-800 text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[24px]">sentiment_satisfied</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900">Customer-Centric Focus</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Eliminating tedious bureaucratic friction, hidden commissions, and endless bank visits by putting client benefit, speed, and peace of mind at the forefront.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[#E30613] text-xs font-bold">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>100% Zero Upfront Fee Guarantee</span>
                </div>
              </div>

            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* 5. Our Commitment Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal variant="fade-up">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0B309A] text-xs font-bold border border-blue-200 mb-3">
                <span className="material-symbols-outlined text-[16px] text-emerald-600">handshake</span>
                <span>CLIENT PROMISE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Our Commitment
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
                At Shreem Finserv, we believe that every client deserves transparency, personalised attention, professional guidance, and world-class service.
              </p>
            </div>

            {/* Commitment 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {COMMITMENT_POINTS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/90 rounded-2xl p-6 border border-slate-200/90 hover:bg-white hover:border-[#0B309A]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#0B309A] flex items-center justify-center font-bold shadow-xs">
                        <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Long-Term Partnership Vision Statement Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0B309A] via-[#0B2E8D] to-[#0A2472] text-white shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-blue-200 text-xs font-bold border border-white/20">
                  <span className="material-symbols-outlined text-[15px] text-amber-300">verified</span>
                  <span>Long-Term Client Partnerships</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                  A Seamless Financial Experience Across Pan India
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed">
                  With a strong focus on relationship building and long-term client partnerships, our goal is to deliver a seamless financial experience across Pan India, supported by professional expertise, technology, and a service-first approach.
                </p>
                <p className="text-blue-200 text-xs sm:text-sm font-medium leading-relaxed pt-1">
                  Our vision is to build Shreem Finserv as a trusted financial partner for individuals, professionals, entrepreneurs, and businesses — helping them access the right financial opportunities with confidence.
                </p>
              </div>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* 6. Performance Metrics Bar */}
      <section className="bg-slate-50 border-y border-slate-200 py-10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="text-3xl sm:text-4xl font-black text-[#0B309A]">
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
            <div className="text-3xl sm:text-4xl font-black text-[#E30613]">
              <AnimatedCounter end={2} suffix=" Hours" />
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Avg. Fast Sanction</p>
          </div>
        </div>
      </section>

      {/* 7. Core Operational Pillars */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B309A]">Foundational Principles</span>
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
                <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-[#0B309A]/40 transition-all duration-300 h-full flex flex-col justify-between">
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

      {/* 8. Institutional Partner Network Marquee */}
      <PartnerMarquee />

      {/* 9. Awards & Industry Recognition Showcase */}
      <ScrollReveal variant="fade-up">
        <AwardsShowcase />
      </ScrollReveal>

      {/* 10. Customer Feedback & Testimonials Section */}
      <ScrollReveal variant="fade-up">
        <TestimonialsSlider />
      </ScrollReveal>

      {/* 11. Ready To Apply CTA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <ScrollReveal variant="zoom-in">
          <div className="bg-gradient-to-r from-[#0B309A] via-[#0B2E8D] to-[#0B309A] text-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-black">
                Have a Loan Requirement in Mind?
              </h3>
              <p className="text-blue-100 text-sm max-w-lg">
                Speak directly with Shikha Gahlout &amp; our senior underwriting team for immediate eligibility evaluation.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="bg-white hover:bg-slate-100 text-[#0B309A] font-bold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-all text-xs sm:text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/apply"
                className="bg-[#E30613] hover:bg-[#B8040E] text-white font-bold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-all text-xs sm:text-sm uppercase tracking-wider"
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
