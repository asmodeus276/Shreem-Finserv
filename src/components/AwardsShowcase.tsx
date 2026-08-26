import React from "react";

export const AwardsShowcase: React.FC = () => {
  const awards = [
    {
      title: "Top Performing DSA Partner",
      lender: "Tata Capital Financial Services",
      year: "2025 - 2026",
      desc: "Recognized for exceeding ₹100+ Crore in MSME & Business loan disbursements.",
      icon: "emoji_events",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    },
    {
      title: "Excellence in Client Underwriting",
      lender: "L&T Finance Holdings",
      year: "2025",
      desc: "Awarded for industry-leading portfolio quality, low rejection rates & speed.",
      icon: "military_tech",
      badgeColor: "bg-blue-100 text-[#0B2E8D] border-blue-200",
    },
    {
      title: "Fastest Growing Financial Partner",
      lender: "Piramal Capital & Housing",
      year: "2024 - 2025",
      desc: "Top DSA in Delhi-NCR region for Loan Against Property (LAP) facilitation.",
      icon: "workspace_premium",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    },
    {
      title: "Doctor Lending Strategic Channel",
      lender: "Leading Private Banks Consortium",
      year: "2024",
      desc: "Exclusive customized credit lines engineered for medical professionals & clinics.",
      icon: "local_hospital",
      badgeColor: "bg-red-100 text-[#BB0119] border-red-200",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 opacity-40 pointer-events-none [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header & Main Stat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
              <span className="material-symbols-outlined text-[16px] text-amber-600">verified</span>
              Institutional Recognition
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trust That’s Earned. Proof That Speaks.
            </h2>
            <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
              Proudly recognized by India’s tier-1 banks and financial institutions for operational compliance, transparency, and client-first loan advisory.
            </p>
          </div>

          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 border border-amber-100">
              <span className="material-symbols-outlined text-4xl">military_tech</span>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">4.9 / 5.0</div>
              <div className="flex text-amber-500 text-sm">
                {"★".repeat(5)}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Based on 2,500+ verified customer reviews</p>
            </div>
          </div>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-[#0B2E8D]/40 interactive-shadow transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0B2E8D]">
                    <span className="material-symbols-outlined text-[26px]">{award.icon}</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${award.badgeColor}`}>
                    {award.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                  {award.title}
                </h3>
                <p className="text-xs font-semibold text-[#0B2E8D] mb-3">
                  Presented by {award.lender}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {award.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                <span>Verified Compliance Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AwardsShowcase;
