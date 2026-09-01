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
  title = "Smart Loan EMI & Savings Calculator",
  subtitle = "Calculate exact monthly payments, total interest, amortization schedule, and balance transfer savings.",
  className = "",
}) => {
  const [calcMode, setCalcMode] = useState<"standard" | "balance-transfer">("standard");
  const [amount, setAmount] = useState(initialAmount);
  const [rate, setRate] = useState(initialRate);
  const [tenureYears, setTenureYears] = useState(initialTenureYears);
  const [currentRate, setCurrentRate] = useState(14.5); // For balance transfer mode
  const [showAmortization, setShowAmortization] = useState(false);

  // EMI Formula: E = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
  const calculateEmiValue = (principal: number, annualRate: number, years: number) => {
    const r = annualRate / 12 / 100;
    const n = years * 12;
    if (r === 0) return Math.round(principal / n);
    return Math.round((principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  };

  const monthlyEmi = calculateEmiValue(amount, rate, tenureYears);
  const totalMonths = tenureYears * 12;
  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - amount);

  // Balance transfer calculations
  const currentEmi = calculateEmiValue(amount, currentRate, tenureYears);
  const currentTotalPayment = currentEmi * totalMonths;
  const totalSavings = Math.max(0, currentTotalPayment - totalPayment);
  const monthlySavings = Math.max(0, currentEmi - monthlyEmi);

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

  // Generate Year-by-Year Amortization Schedule
  const generateYearlySchedule = () => {
    const schedule = [];
    let balance = amount;
    const monthlyRate = rate / 12 / 100;

    for (let year = 1; year <= tenureYears; year++) {
      let yearlyInterest = 0;
      let yearlyPrincipal = 0;

      for (let m = 1; m <= 12; m++) {
        const interestMonth = balance * monthlyRate;
        const principalMonth = monthlyEmi - interestMonth;
        yearlyInterest += interestMonth;
        yearlyPrincipal += principalMonth;
        balance = Math.max(0, balance - principalMonth);
      }

      schedule.push({
        year,
        principalPaid: Math.round(yearlyPrincipal),
        interestPaid: Math.round(yearlyInterest),
        totalYearly: Math.round(yearlyPrincipal + yearlyInterest),
        endingBalance: Math.round(balance),
      });
    }
    return schedule;
  };

  const yearlySchedule = generateYearlySchedule();

  return (
    <div className={`bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-10 shadow-lg ${className}`}>
      {/* Header & Mode Switcher */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200 mb-2">
          <span className="material-symbols-outlined text-[16px]">calculate</span>
          Instant Financial Underwriting Tools
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">{title}</h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">{subtitle}</p>

        {/* Tab Switcher */}
        <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 mt-5">
          <button
            onClick={() => setCalcMode("standard")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              calcMode === "standard"
                ? "bg-[#001A62] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Standard Loan EMI
          </button>
          <button
            onClick={() => setCalcMode("balance-transfer")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              calcMode === "balance-transfer"
                ? "bg-[#BB0119] text-white shadow-sm"
                : "text-slate-600 hover:text-[#BB0119]"
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">trending_down</span>
            Balance Transfer Savings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Sliders Column */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          {/* Loan Amount Slider */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2.5 sm:space-y-3">
            <div className="flex justify-between items-center gap-2">
              <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600">
                Loan Principal Amount
              </label>
              <span className="text-base sm:text-lg font-black text-[#0B2E8D] whitespace-nowrap flex-shrink-0">
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

          {/* Interest Rate Sliders */}
          {calcMode === "standard" ? (
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2.5 sm:space-y-3">
              <div className="flex justify-between items-center gap-2">
                <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600">
                  Interest Rate (p.a.)
                </label>
                <span className="text-base sm:text-lg font-black text-emerald-600 whitespace-nowrap flex-shrink-0">
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
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-red-50/60 p-4 rounded-2xl border border-red-200/80 space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] uppercase font-bold text-red-800">Your Current Higher Rate</label>
                  <span className="font-bold text-red-700">{currentRate.toFixed(2)}%</span>
                </div>
                <input
                  type="range"
                  min={11.5}
                  max={24}
                  step={0.25}
                  value={currentRate}
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                  className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
              </div>

              <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/80 space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] uppercase font-bold text-emerald-800">Shreem Negotiated Rate</label>
                  <span className="font-bold text-emerald-700">{rate.toFixed(2)}%</span>
                </div>
                <input
                  type="range"
                  min={8.5}
                  max={13}
                  step={0.25}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>
            </div>
          )}

          {/* Tenure Slider */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2.5 sm:space-y-3">
            <div className="flex justify-between items-center gap-2">
              <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600">
                Loan Tenure
              </label>
              <span className="text-base sm:text-lg font-black text-slate-900 whitespace-nowrap flex-shrink-0">
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

          {/* Action to Toggle Amortization Schedule */}
          <div className="pt-1 flex items-center justify-between">
            <button
              onClick={() => setShowAmortization(!showAmortization)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2E8D] hover:text-[#001A62] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                {showAmortization ? "visibility_off" : "table_chart"}
              </span>
              <span>{showAmortization ? "Hide Amortization Schedule" : "View Year-by-Year Repayment Schedule"}</span>
            </button>

            <a
              href={`https://wa.me/918745003840?text=Hi%20Shreem%20Finserv,%20I%20calculated%20an%20EMI%20of%20${monthlyEmi}%20for%20${amount}%20loan.%20Please%20guide%20me%20on%20instant%20approval.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
            >
              <span className="material-symbols-outlined text-[16px]">share</span>
              <span>Share Quote on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Results & Breakdown Column */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#001A62] via-[#0B2E8D] to-[#001A62] text-white p-5 sm:p-7 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-5 md:space-y-6">
          {calcMode === "standard" ? (
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B7C4FF] block mb-1">
                Estimated Monthly EMI
              </span>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                {formatCurrency(monthlyEmi)}
                <span className="text-xs font-normal text-blue-200 ml-1">/ month</span>
              </div>
            </div>
          ) : (
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300 block mb-1">
                Total Balance Transfer Savings
              </span>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-300 tracking-tight">
                {formatCurrency(totalSavings)}
              </div>
              <p className="text-xs text-blue-200 mt-1">
                You save <strong>{formatCurrency(monthlySavings)} / month</strong> on your EMI!
              </p>
            </div>
          )}

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
            <div className="col-span-2 pt-1.5 border-t border-white/10 flex justify-between items-center">
              <div>
                <span className="text-blue-200 uppercase font-semibold block text-[9px] sm:text-[10px]">Total Amount Payable</span>
                <span className="font-extrabold text-emerald-300 text-sm sm:text-base">{formatCurrency(totalPayment)}</span>
              </div>
              <span className="text-[10px] text-blue-200 bg-white/10 px-2.5 py-1 rounded-full font-bold">
                {tenureYears} Years Tenure
              </span>
            </div>
          </div>

          <button
            onClick={handleApply}
            className="w-full button-shine bg-[#BB0119] hover:bg-[#E0292E] text-white font-bold py-3.5 px-5 rounded-xl transition-all shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
          >
            <span>Lock This Low Interest Quote</span>
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Amortization Table Accordion */}
      {showAmortization && (
        <div className="mt-8 pt-8 border-t border-slate-200 animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-slate-900 text-base">
              Annual Principal &amp; Interest Amortization Schedule
            </h4>
            <span className="text-xs text-slate-500">Based on {rate.toFixed(2)}% p.a. for {tenureYears} Years</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 font-bold uppercase text-slate-600">
                <tr>
                  <th className="py-3 px-4">Year</th>
                  <th className="py-3 px-4">Principal Paid</th>
                  <th className="py-3 px-4">Interest Paid</th>
                  <th className="py-3 px-4">Total Yearly Payment</th>
                  <th className="py-3 px-4">Ending Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {yearlySchedule.map((row) => (
                  <tr key={row.year} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-2.5 px-4 font-bold text-slate-900">Year {row.year}</td>
                    <td className="py-2.5 px-4 text-emerald-700 font-semibold">{formatCurrency(row.principalPaid)}</td>
                    <td className="py-2.5 px-4 text-red-600">{formatCurrency(row.interestPaid)}</td>
                    <td className="py-2.5 px-4 font-bold text-slate-800">{formatCurrency(row.totalYearly)}</td>
                    <td className="py-2.5 px-4 text-slate-600 font-mono">{formatCurrency(row.endingBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;
