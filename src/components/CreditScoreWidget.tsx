"use client";

import React, { useState } from "react";
import { submitLead } from "@/lib/firebase";
import { BRAND_CONFIG } from "@/config/brand";

export const CreditScoreWidget: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");
  const [loading, setLoading] = useState(false);
  const [scoreResult, setScoreResult] = useState<{
    score: number;
    rating: string;
    preApprovedLimit: string;
    interestRate: string;
  } | null>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || mobile.length !== 10) return;

    setLoading(true);

    try {
      // Ingest lead
      await submitLead({
        fullName: fullName.trim(),
        mobile,
        city: "Credit Score Inquiry",
        loanCategory: "Free Credit Score Check",
        amount: 2500000,
        consent: true,
        sourcePage: typeof window !== "undefined" ? window.location.pathname : "/credit-score",
      });

      // Generate soft check simulated score
      const randomScore = Math.floor(750 + Math.random() * 85);
      setScoreResult({
        score: randomScore,
        rating: randomScore > 780 ? "Excellent" : "Good",
        preApprovedLimit: "₹ 35,00,000",
        interestRate: "Starting 9.99% p.a.",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="credit-score-section" className="py-16 bg-gradient-to-r from-[#001A62] via-[#0B2E8D] to-[#142450] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold border border-white/20">
              <span className="material-symbols-outlined text-[16px]">speed</span>
              Free Instant Credit Assessment
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Know Where You Stand <span className="text-emerald-400 block mt-1">Before You Apply.</span>
            </h2>

            <p className="text-blue-100 text-base leading-relaxed max-w-xl">
              Checking your credit score with {BRAND_CONFIG.name} is 100% free and counts as a soft inquiry with <strong>zero impact on your CIBIL or Experian score</strong>. Unlock exclusive pre-approved bank rates instantly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-2xl text-emerald-400 mb-1">price_check</span>
                <h4 className="font-bold text-sm">₹0 / $0 Free</h4>
                <p className="text-xs text-blue-200 mt-0.5">No hidden charges ever</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-2xl text-emerald-400 mb-1">shield</span>
                <h4 className="font-bold text-sm">No Score Dip</h4>
                <p className="text-xs text-blue-200 mt-0.5">Safe soft inquiry</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-2xl text-emerald-400 mb-1">bolt</span>
                <h4 className="font-bold text-sm">Instant Insights</h4>
                <p className="text-xs text-blue-200 mt-0.5">Pre-approved offers</p>
              </div>
            </div>
          </div>

          {/* Right Card / Score Result */}
          <div className="lg:col-span-5">
            {scoreResult ? (
              <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl border border-white/20 text-center space-y-6 animate-in zoom-in-95">
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                  Credit Evaluation Complete
                </div>

                {/* Score Dial Display */}
                <div className="w-36 h-36 rounded-full border-8 border-emerald-500 mx-auto flex flex-col items-center justify-center shadow-inner bg-emerald-50">
                  <span className="text-4xl font-black text-emerald-700 leading-none">{scoreResult.score}</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 mt-1">{scoreResult.rating}</span>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-semibold">Pre-Approved Loan Limit</span>
                    <span className="font-bold text-slate-900 text-sm">{scoreResult.preApprovedLimit}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-semibold">Matched Interest Rate</span>
                    <span className="font-bold text-emerald-700 text-sm">{scoreResult.interestRate}</span>
                  </div>
                </div>

                <a
                  href="#lead-application-form"
                  onClick={() => {
                    const form = document.getElementById("lead-application-form");
                    if (form) form.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#BB0119] hover:bg-[#E0292E] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md text-sm"
                >
                  <span>Claim Pre-Approved Offers</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            ) : (
              <div className="bg-white text-slate-900 rounded-3xl p-7 md:p-8 shadow-2xl border border-white/20">
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">
                    Zero Impact on CIBIL
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    Check Your Credit Score For Free
                  </h3>
                </div>

                <form onSubmit={handleCheck} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Full Name (As per PAN)
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm font-semibold">+91</span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="98765 43210"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-3 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      PAN Card Number (Optional)
                    </label>
                    <input
                      type="text"
                      maxLength={10}
                      value={pan}
                      onChange={(e) => setPan(e.target.value.toUpperCase())}
                      placeholder="ABCDE1234F"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] uppercase transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#001A62] hover:bg-[#0B2E8D] disabled:bg-slate-400 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm mt-4"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span>Get Free Credit Score & Report</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreditScoreWidget;
