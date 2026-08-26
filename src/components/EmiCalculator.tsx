"use client";

import React, { useState } from "react";

interface EmiCalculatorProps {
  initialAmount?: number;
  initialRate?: number;
  initialTenureYears?: number;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({
  initialAmount = 2500000,
  initialRate = 10.5,
  initialTenureYears = 5,
  title = "Smart Loan EMI Calculator",
  subtitle = "Calculate your exact monthly payments, total interest, and amortisation schedule.",
  className = "",
}) => {
  const [amount, setAmount] = useState(initialAmount);
  const [rate, setRate] = useState(initialRate);
  const [tenureYears, setTenureYears] = useState(initialTenureYears);

  // EMI Formula: E = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
  const calculateEmi = () => {
    const p = amount;
    const r = rate / 12 / 100;
    const n = tenureYears * 12;

    if (r === 0) return Math.round(p / n);
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEmi = calculateEmi();
  const totalMonths = tenureYears * 12;
  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - amount);

  const principalRatio = Math.round((amount / totalPayment) * 100) || 50;
  const interestRatio = 100 - principalRatio;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleApply = () => {
    const formEl = document.getElementById("lead-application-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-10 shadow-lg ${className}`}>
      <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200 mb-2">
          <span className="material-symbols-outlined text-[16px]">calculate</span>
          Instant Financial Planning
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">{title}</h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Sliders Column */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          
          {/* Loan Amount Slider */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2.5 sm:space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600">
                Loan Amount
              </label>
              <span className="text-base sm:text-lg font-black text-[#0B2E8D]">
                {formatCurrency(amount)}
              </span>
            </div>
            <input
              type="range"
              min={100000}
              max={50000000}
              step={50000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B2E8D]"
            />
            <div className="flex justify-between text-[10px] sm:text-[11px] font-semibold text-slate-400">
              <span>₹1 Lakh</span>
              <span>₹1 Crore</span>
              <span>₹5 Crore</span>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2.5 sm:space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600">
                Interest Rate (p.a.)
              </label>
              <span className="text-base sm:text-lg font-black text-emerald-600">
                {rate.toFixed(2)}%
              </span>
            </div>
            <input
              type="range"
              min={8.5}
              max={24}
              step={0.25}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[10px] sm:text-[11px] font-semibold text-slate-400">
              <span>8.50%</span>
              <span>15.00%</span>
              <span>24.00%</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2.5 sm:space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600">
                Loan Tenure
              </label>
              <span className="text-base sm:text-lg font-black text-slate-900">
                {tenureYears} Yrs <span className="text-xs font-semibold text-slate-400">({totalMonths} Mos)</span>
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#BB0119]"
            />
            <div className="flex justify-between text-[10px] sm:text-[11px] font-semibold text-slate-400">
              <span>1 Year</span>
              <span>5 Years</span>
              <span>10 Years</span>
              <span>20 Years</span>
            </div>
          </div>

        </div>

        {/* Results & Breakdown Column */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#001A62] to-[#0B2E8D] text-white p-5 sm:p-7 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-5 md:space-y-6">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B7C4FF] block mb-1">
              Estimated Monthly EMI
            </span>
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              {formatCurrency(monthlyEmi)}
              <span className="text-xs font-normal text-blue-200 ml-1">/ month</span>
            </div>
          </div>

          {/* Ratio Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-blue-200">
              <span>Principal: {principalRatio}%</span>
              <span>Interest: {interestRatio}%</span>
            </div>
            <div className="w-full h-2.5 sm:h-3 bg-white/20 rounded-full overflow-hidden flex">
              <div
                className="bg-emerald-400 h-full transition-all duration-300"
                style={{ width: `${principalRatio}%` }}
              ></div>
              <div
                className="bg-red-400 h-full transition-all duration-300"
                style={{ width: `${interestRatio}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/15 text-xs">
            <div>
              <span className="text-blue-200 uppercase font-semibold block text-[9px] sm:text-[10px]">Principal Amount</span>
              <span className="font-bold text-white text-xs sm:text-sm">{formatCurrency(amount)}</span>
            </div>
            <div>
              <span className="text-blue-200 uppercase font-semibold block text-[9px] sm:text-[10px]">Total Interest</span>
              <span className="font-bold text-red-300 text-xs sm:text-sm">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="col-span-2 pt-1.5 border-t border-white/10">
              <span className="text-blue-200 uppercase font-semibold block text-[9px] sm:text-[10px]">Total Amount Payable</span>
              <span className="font-extrabold text-emerald-300 text-sm sm:text-base">{formatCurrency(totalPayment)}</span>
            </div>
          </div>

          <button
            onClick={handleApply}
            className="w-full bg-[#BB0119] hover:bg-[#E0292E] text-white font-bold py-3 sm:py-3.5 px-5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-xs sm:text-sm"
          >
            <span>Apply With These Terms</span>
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
