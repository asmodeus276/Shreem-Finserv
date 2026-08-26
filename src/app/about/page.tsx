import { Metadata } from "next";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { AwardsShowcase } from "@/components/AwardsShowcase";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export const metadata: Metadata = {
  title: "About Us - Your Financial Growth Partner",
  description:
    "Learn about Shreem Finserv, our mission, executive leadership, and partnerships with 50+ leading banks and NBFCs across India.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200">
            <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
            About Shreem Finserv
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Democratizing Access to Capital with <span className="text-[#0B2E8D] block mt-1">Total Transparency & Speed.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {BRAND_CONFIG.legalName} ({BRAND_CONFIG.name}) is a premier authorized loan advisory and DSA powerhouse headquartered in Delhi-NCR. We bridge the gap between ambitious borrowers (Doctors, MSMEs, Property Owners, Women Founders) and India’s top 50+ financial institutions.
          </p>
        </div>
      </section>

      {/* Core Numbers */}
      <section className="bg-gradient-to-r from-[#001A62] to-[#0B2E8D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-5xl font-black">₹500Cr+</div>
            <p className="text-xs text-blue-200 uppercase font-semibold mt-1">Loan Volume Disbursed</p>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-black">15,000+</div>
            <p className="text-xs text-blue-200 uppercase font-semibold mt-1">Satisfied Clients</p>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-black">50+</div>
            <p className="text-xs text-blue-200 uppercase font-semibold mt-1">Co-Lending Partners</p>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-black">2 Hours</div>
            <p className="text-xs text-blue-200 uppercase font-semibold mt-1">Average Sanction Speed</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0B2E8D] flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">flag</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To empower Indian entrepreneurs and individuals with instant, transparent, and fair credit by eliminating bureaucratic friction, hidden fees, and complex loan paperwork.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">visibility</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be India’s most trusted direct lending partner, celebrated for ethical financial advisory, full DPDP 2026 data privacy compliance, and technological innovation.
            </p>
          </div>
        </div>
      </section>

      <AwardsShowcase />
      <PartnerMarquee />
    </div>
  );
}
