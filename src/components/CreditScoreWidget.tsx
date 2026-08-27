"use client";

import React, { useState } from "react";
import { BRAND_CONFIG } from "@/config/brand";

export const CreditScoreWidget: React.FC = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(100000);
  const [existingEmi, setExistingEmi] = useState(10000);
  const [tenureYears, setTenureYears] = useState(5);
  const [interestRate, setInterestRate] = useState(10.5);

  // FOIR-based eligibility: max 50% of income towards total EMIs
  const maxAffordableEmi = Math.max(0, Math.round(monthlyIncome * 0.5 - existingEmi));

  // Invert EMI formula to get max loan principal:
  // EMI = P * r * (1+r)^n / ((1+r)^n - 1)
  // => P = EMI * ((1+r)^n - 1) / (r * (1+r)^n)
  const calculateMaxLoan = () => {
    if (maxAffordableEmi <= 0) return 0;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;
    if (r === 0) return maxAffordableEmi * n;
    const factor = Math.pow(1 + r, n);
    return Math.round((maxAffordableEmi * (factor - 1)) / (r * factor));
  };

  const maxLoanAmount = calculateMaxLoan();
  const totalMonths = tenureYears * 12;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  const formatLakhs = (val: number) => {
    if (val >= 10000000) return `${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `${(val / 100000).toFixed(1)} Lakhs`;
    return formatCurrency(val);
  };

  const handleApply = () => {
    const form = document.getElementById("lead-application-form");
    if (form) form.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="eligibility-estimator" className="py-16 bg-gradient-to-r from-[#001A62] via-[#0B2E8D] to-[#142450] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold border border-white/20">
              <span className="material-symbols-outlined text-[16px]">calculate</span>
              Free Loan Eligibility Estimator
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Find Out How Much <span className="text-emerald-400 block mt-1">You Can Borrow.</span>
            </h2>

            <p className="text-blue-100 text-base leading-relaxed max-w-xl">
              Get an instant, indicative estimate of your maximum loan eligibility based on standard FOIR (Fixed Obligations to Income Ratio) norms used by leading banks and NBFCs partnered with {BRAND_CONFIG.name}.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-2xl text-emerald-400 mb-1">price_check</span>
                <h4 className="font-bold text-sm">100% Free</h4>
                <p className="text-xs text-blue-200 mt-0.5">No registration required</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-2xl text-emerald-400 mb-1">shield</span>
                <h4 className="font-bold text-sm">No Data Collected</h4>
                <p className="text-xs text-blue-200 mt-0.5">Runs entirely in your browser</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-2xl text-emerald-400 mb-1">bolt</span>
                <h4 className="font-bold text-sm">Instant Result</h4>
                <p className="text-xs text-blue-200 mt-0.5">Adjust sliders to explore</p>
              </div>
            </div>
          </div>

          {/* Right: Eligibility Calculator Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20 space-y-5">
              <div className="mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">
                  Eligibility Estimator
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Estimate Your Maximum Loan Amount
                </h3>
              </div>

              {/* Monthly Income Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Monthly Net Income
                  </label>
                  <span className="text-sm font-black text-[#0B2E8D]">
                    {formatCurrency(monthlyIncome)}
                  </span>
                </div>
                <input
                  type="range"
                  min={15000}
                  max={1000000}
                  step={5000}
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B2E8D]"
                />
                <div className="flex justify-between text-[10px] font-semibold text-slate-400">
                  <span>₹15K</span>
                  <span>₹5L</span>
                  <span>₹10L</span>
                </div>
              </div>

              {/* Existing EMI Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Existing Monthly EMIs
                  </label>
                  <span className="text-sm font-black text-red-600">
                    {formatCurrency(existingEmi)}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={Math.round(monthlyIncome * 0.5)}
                  step={1000}
                  value={Math.min(existingEmi, Math.round(monthlyIncome * 0.5))}
                  onChange={(e) => setExistingEmi(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-[10px] font-semibold text-slate-400">
                  <span>₹0</span>
                  <span>{formatCurrency(Math.round(monthlyIncome * 0.5))}</span>
                </div>
              </div>

              {/* Tenure & Rate (Side by Side) */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">
                    Tenure
                  </label>
                  <select
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#0B2E8D]"
                  >
                    {[1, 2, 3, 5, 7, 10, 15, 20].map((y) => (
                      <option key={y} value={y}>
                        {y} {y === 1 ? "Year" : "Years"}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">
                    Interest Rate
                  </label>
                  <select
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#0B2E8D]"
                  >
                    {[8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 12.0, 14.0, 16.0, 18.0, 20.0, 24.0].map((r) => (
                      <option key={r} value={r}>
                        {r.toFixed(1)}% p.a.
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Result Display */}
              <div className="bg-gradient-to-br from-[#001A62] to-[#0B2E8D] rounded-2xl p-5 text-white space-y-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 block">
                    Estimated Maximum Loan
                  </span>
                  <div className="text-2xl sm:text-3xl font-black tracking-tight">
                    {maxLoanAmount > 0 ? `₹ ${formatLakhs(maxLoanAmount)}` : "—"}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-white/15">
                  <div>
                    <span className="text-blue-200 uppercase font-semibold block text-[9px]">Max New EMI</span>
                    <span className="font-bold text-white text-sm">
                      {maxAffordableEmi > 0 ? formatCurrency(maxAffordableEmi) : "—"}
                    </span>
                  </div>
                  <div>
                    <span className="text-blue-200 uppercase font-semibold block text-[9px]">Repayment Period</span>
                    <span className="font-bold text-white text-sm">
                      {totalMonths} Months
                    </span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[10px] text-slate-400 leading-snug">
                This is an indicative estimate based on standard FOIR norms (50% cap). Actual eligibility depends on your credit bureau score, employer category, age, co-applicant income, and individual lender policies. No personal data is collected or transmitted.
              </p>

              {/* CTA */}
              <button
                onClick={handleApply}
                className="w-full bg-[#BB0119] hover:bg-[#E0292E] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <span>Apply to Know Your Exact Eligibility</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreditScoreWidget;
