"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

type ScoreCategory = {
  label: string;
  badgeColor: string;
  textColor: string;
  bgLight: string;
  borderColor: string;
  approvalRate: string;
  loanRate: string;
  description: string;
  tier: string;
  lenders: string[];
};

const getScoreCategory = (score: number): ScoreCategory => {
  if (score >= 775) {
    return {
      label: "Excellent Score",
      badgeColor: "bg-emerald-500",
      textColor: "text-emerald-600",
      bgLight: "bg-emerald-50",
      borderColor: "border-emerald-200",
      approvalRate: "98% (Guaranteed Prime)",
      loanRate: "From 8.75% - 9.99% p.a.",
      description: "You qualify for the lowest market interest rates, zero processing fee waivers, and instant pre-approved limits from Tier-1 banks.",
      tier: "Tier-1 Prime Borrower",
      lenders: ["HDFC Bank", "ICICI Bank", "SBI", "Axis Bank", "Tata Capital"],
    };
  }
  if (score >= 700) {
    return {
      label: "Good Score",
      badgeColor: "bg-blue-600",
      textColor: "text-blue-600",
      bgLight: "bg-blue-50",
      borderColor: "border-blue-200",
      approvalRate: "85% (High Approval)",
      loanRate: "From 10.25% - 11.50% p.a.",
      description: "Eligible for fast-track approvals across 40+ leading partner banks & NBFCs with standard documentation.",
      tier: "Preferred Borrower",
      lenders: ["Kotak Mahindra", "Bajaj Finserv", "IDFC FIRST", "Piramal Finance"],
    };
  }
  if (score >= 600) {
    return {
      label: "Fair Score",
      badgeColor: "bg-amber-500",
      textColor: "text-amber-600",
      bgLight: "bg-amber-50",
      borderColor: "border-amber-200",
      approvalRate: "60% (Moderate Approval)",
      loanRate: "From 12.00% - 15.50% p.a.",
      description: "Eligible for select NBFC unsecured loans and secured credit lines. A co-applicant or collateral helps unlock lower interest rates.",
      tier: "Standard Borrower",
      lenders: ["Poonawalla Fincorp", "L&T Finance", "Aditya Birla Capital"],
    };
  }
  return {
    label: "Needs Improvement",
    badgeColor: "bg-red-500",
    textColor: "text-red-600",
    bgLight: "bg-red-50",
    borderColor: "border-red-200",
    approvalRate: "35% (Specialized Desk)",
    loanRate: "From 14.50% - 18.00% p.a.",
    description: "Higher rejection risk with traditional banks. We help arrange credit-builder programs, gold loans, or secured LAP to rebuild your credit history.",
    tier: "Credit-Builder Track",
    lenders: ["Specialized NBFCs", "Secured LAP Desks", "Credit-Builder Programs"],
  };
};

export const CreditScoreWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"score" | "estimator">("score");

  // --- Credit Score Tab State ---
  const [score, setScore] = useState<number>(765);
  const [calculationMode, setCalculationMode] = useState<"slider" | "simulator">("slider");
  
  // Simulator inputs
  const [onTimePayments, setOnTimePayments] = useState<"always" | "mostly" | "delayed">("always");
  const [cardUtilization, setCardUtilization] = useState<"low" | "medium" | "high">("low");
  const [creditVintage, setCreditVintage] = useState<"vintage5" | "vintage2" | "new">("vintage5");
  const [activeEnquiries, setActiveEnquiries] = useState<"none" | "few" | "many">("none");

  // Soft inquiry modal/lead state
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryPan, setInquiryPan] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryLoading, setInquiryLoading] = useState(false);

  // --- Eligibility Estimator Tab State ---
  const [monthlyIncome, setMonthlyIncome] = useState(100000);
  const [existingEmi, setExistingEmi] = useState(10000);
  const [tenureYears, setTenureYears] = useState(5);
  const [interestRate, setInterestRate] = useState(10.5);

  // Recalculate score from simulator
  const computeSimulatedScore = () => {
    let base = 750;
    if (onTimePayments === "always") base += 60;
    else if (onTimePayments === "mostly") base -= 30;
    else base -= 120;

    if (cardUtilization === "low") base += 45;
    else if (cardUtilization === "medium") base -= 10;
    else base -= 70;

    if (creditVintage === "vintage5") base += 35;
    else if (creditVintage === "vintage2") base += 10;
    else base -= 20;

    if (activeEnquiries === "none") base += 20;
    else if (activeEnquiries === "few") base -= 15;
    else base -= 55;

    return Math.min(900, Math.max(300, base));
  };

  const handleApplySimulator = (e: React.FormEvent) => {
    e.preventDefault();
    const computed = computeSimulatedScore();
    setScore(computed);
    setCalculationMode("slider");
  };

  // Eligibility Estimator Calculations
  const maxAffordableEmi = Math.max(0, Math.round(monthlyIncome * 0.5 - existingEmi));
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

  // Gauge calculations for 300 - 900 score
  const minScore = 300;
  const maxScore = 900;
  const clampedScore = Math.min(maxScore, Math.max(minScore, score));
  const scorePercent = (clampedScore - minScore) / (maxScore - minScore);
  // Semi-circle gauge rotation (-90 to +90 degrees)
  const rotationAngle = -90 + scorePercent * 180;

  const category = getScoreCategory(clampedScore);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryLoading(true);
    try {
      await fetch("/api/lead-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: inquiryName,
          phone: inquiryPhone,
          pan: inquiryPan || "N/A",
          loanType: "Credit Score Health Check",
          amount: 500000,
          city: "Online / Credit Desk",
          estimatedScore: clampedScore,
          source: "Credit Score Widget",
        }),
      });
      setInquirySubmitted(true);
    } catch {
      setInquirySubmitted(true);
    } finally {
      setInquiryLoading(false);
    }
  };

  return (
    <section id="credit-score-section" className="py-12 md:py-16 bg-gradient-to-br from-[#00144D] via-[#0B2E8D] to-[#081B4E] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
              <span className="material-symbols-outlined text-[15px]">verified_user</span>
              100% Free • Soft Bureau Inquiry • Zero Score Impact
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-2 text-white">
              Credit Score &amp; Loan Eligibility Center
            </h1>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <button
              onClick={() => setActiveTab("score")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "score"
                  ? "bg-white text-[#0B2E8D] shadow-lg scale-102"
                  : "text-blue-100 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">speed</span>
              <span>Credit Score Simulator</span>
            </button>
            <button
              onClick={() => setActiveTab("estimator")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "estimator"
                  ? "bg-white text-[#0B2E8D] shadow-lg scale-102"
                  : "text-blue-100 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              <span>Borrowing Capacity (FOIR)</span>
            </button>
          </div>
        </div>

        {/* ================= TAB 1: CREDIT SCORE SIMULATOR & GAUGE ================= */}
        {activeTab === "score" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Score Gauge & Pre-Approvals */}
            <div className="lg:col-span-6 bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl flex flex-col items-center text-center">
              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                  CIBIL &amp; Bureau Meter
                </span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${category.badgeColor}`}>
                  {category.label}
                </span>
              </div>

              {/* Visual SVG Semi-Circle Gauge */}
              <div className="relative w-64 h-36 sm:w-72 sm:h-40 my-2 flex items-end justify-center overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 200 110">
                  <defs>
                    <linearGradient id="scoreGaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="35%" stopColor="#F59E0B" />
                      <stop offset="70%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                  {/* Gauge Arc Track */}
                  <path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#ffffff25"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />
                  {/* Colored Arc */}
                  <path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="url(#scoreGaugeGrad)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeDasharray="251.32"
                    strokeDashoffset={251.32 * (1 - scorePercent)}
                    className="transition-all duration-300 ease-out"
                  />
                  {/* Needle Pivot & Line */}
                  <g
                    transform={`translate(100, 100) rotate(${rotationAngle})`}
                    className="transition-transform duration-300 ease-out"
                  >
                    <line x1="0" y1="0" x2="0" y2="-72" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="0" cy="0" r="8" fill="#FFFFFF" />
                    <circle cx="0" cy="0" r="4" fill="#0B2E8D" />
                  </g>
                </svg>

                {/* Score Bracket Labels */}
                <span className="absolute left-2 bottom-0 text-[10px] font-bold text-red-300">300</span>
                <span className="absolute right-2 bottom-0 text-[10px] font-bold text-emerald-300">900</span>
              </div>

              {/* Big Score Display */}
              <div className="mt-2 space-y-1">
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white flex items-center justify-center gap-2">
                  <span>{clampedScore}</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/10 text-blue-200">
                    / 900
                  </span>
                </div>
                <p className="text-sm font-semibold text-emerald-300">{category.tier}</p>
              </div>

              {/* Dynamic Benefits Card */}
              <div className="w-full mt-6 bg-slate-900/60 rounded-2xl p-5 border border-white/10 text-left space-y-3">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Approval Probability</span>
                    <span className="text-emerald-400 font-extrabold text-sm">{category.approvalRate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Indicative Rate</span>
                    <span className="text-white font-extrabold text-sm">{category.loanRate}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 border-t border-white/10 pt-3 leading-relaxed">
                  {category.description}
                </p>

                <div className="pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Recommended Fast-Track Lenders:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {category.lenders.map((lender) => (
                      <span key={lender} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white/10 text-white border border-white/10">
                        {lender}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Free Soft Inquiry CTA Button */}
              <button
                onClick={() => setShowInquiryForm(true)}
                className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 text-sm"
              >
                <span className="material-symbols-outlined text-[18px]">policy</span>
                <span>Get Free Official Credit Health Report</span>
              </button>
            </div>

            {/* Right: Score Interactive Controls (Slider vs Factor Quiz) */}
            <div className="lg:col-span-6 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              {/* Header & Mode Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Credit Score Simulator
                  </h3>
                  <p className="text-xs text-slate-500">
                    Adjust score to see how interest rates &amp; approval change
                  </p>
                </div>
                <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold">
                  <button
                    onClick={() => setCalculationMode("slider")}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      calculationMode === "slider" ? "bg-white text-[#0B2E8D] shadow-xs" : "text-slate-500"
                    }`}
                  >
                    Direct Slider
                  </button>
                  <button
                    onClick={() => setCalculationMode("simulator")}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      calculationMode === "simulator" ? "bg-white text-[#0B2E8D] shadow-xs" : "text-slate-500"
                    }`}
                  >
                    Factor Estimator
                  </button>
                </div>
              </div>

              {/* MODE A: DIRECT SLIDER */}
              {calculationMode === "slider" ? (
                <div className="space-y-6">
                  {/* Slider */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Drag Score Slider
                      </label>
                      <span className="text-xl font-black text-[#0B2E8D]">
                        {score} CIBIL
                      </span>
                    </div>
                    <input
                      type="range"
                      min={300}
                      max={900}
                      step={5}
                      value={score}
                      onChange={(e) => setScore(Number(e.target.value))}
                      className="w-full h-3 bg-gradient-to-r from-red-400 via-amber-400 via-blue-400 to-emerald-500 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] font-bold text-slate-400">
                      <span className="text-red-500">300 (Poor)</span>
                      <span className="text-amber-500">650 (Fair)</span>
                      <span className="text-blue-600">750 (Good)</span>
                      <span className="text-emerald-600">900 (Excellent)</span>
                    </div>
                  </div>

                  {/* 4 Score Brackets Quick Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Or Select Typical Ranges:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        type="button"
                        onClick={() => setScore(550)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          score < 600 ? "border-red-500 bg-red-50 text-red-700 font-bold" : "border-slate-200 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <div className="text-xs font-black">300 - 599</div>
                        <div className="text-[10px] text-slate-500">Rebuilder</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setScore(660)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          score >= 600 && score < 700 ? "border-amber-500 bg-amber-50 text-amber-700 font-bold" : "border-slate-200 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <div className="text-xs font-black">600 - 699</div>
                        <div className="text-[10px] text-slate-500">Fair</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setScore(740)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          score >= 700 && score < 775 ? "border-blue-500 bg-blue-50 text-[#0B2E8D] font-bold" : "border-slate-200 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <div className="text-xs font-black">700 - 774</div>
                        <div className="text-[10px] text-slate-500">Good</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setScore(810)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          score >= 775 ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold" : "border-slate-200 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <div className="text-xs font-black">775 - 900</div>
                        <div className="text-[10px] text-slate-500">Excellent</div>
                      </button>
                    </div>
                  </div>

                  {/* Impact Summary Table */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      What this score unlocks for you:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                        <span><strong>Personal Loan:</strong> Eligible up to ₹50 Lakhs with minimum paperwork</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                        <span><strong>Business &amp; MSME Loans:</strong> Priority approval from PSU &amp; Private banks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                        <span><strong>Loan Against Property:</strong> Up to 75% LTV value at lowest base lending rates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                /* MODE B: 4 FACTOR ESTIMATOR QUIZ */
                <form onSubmit={handleApplySimulator} className="space-y-4">
                  {/* Factor 1: On-Time Payments */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      1. Repayment History (Past 24 Months)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "always", label: "Always On Time", desc: "0 Delays" },
                        { id: "mostly", label: "1-2 Delays", desc: "30 Days late" },
                        { id: "delayed", label: "Frequent Defaults", desc: "60+ Days" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setOnTimePayments(item.id as any)}
                          className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                            onTimePayments === item.id
                              ? "border-[#0B2E8D] bg-blue-50/80 text-[#0B2E8D] font-bold"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          <div className="font-bold">{item.label}</div>
                          <div className="text-[10px] text-slate-400">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Factor 2: Credit Card Utilization */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      2. Credit Card Limit Usage
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "low", label: "< 30% of Limit", desc: "Ideal Discipline" },
                        { id: "medium", label: "30% - 60%", desc: "Moderate Usage" },
                        { id: "high", label: "> 60% of Limit", desc: "Credit Hungry" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCardUtilization(item.id as any)}
                          className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                            cardUtilization === item.id
                              ? "border-[#0B2E8D] bg-blue-50/80 text-[#0B2E8D] font-bold"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          <div className="font-bold">{item.label}</div>
                          <div className="text-[10px] text-slate-400">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Factor 3: Credit Vintage */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      3. Oldest Credit Card or Loan Age
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "vintage5", label: "5+ Years", desc: "Long History" },
                        { id: "vintage2", label: "2 - 5 Years", desc: "Good Vintage" },
                        { id: "new", label: "< 2 Years / None", desc: "New to Credit" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCreditVintage(item.id as any)}
                          className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                            creditVintage === item.id
                              ? "border-[#0B2E8D] bg-blue-50/80 text-[#0B2E8D] font-bold"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          <div className="font-bold">{item.label}</div>
                          <div className="text-[10px] text-slate-400">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Factor 4: Hard Inquiries */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      4. Recent Loan Inquiries (Last 3 Months)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "none", label: "0 Inquiries", desc: "Clean Record" },
                        { id: "few", label: "1 - 2 Inquiries", desc: "Normal" },
                        { id: "many", label: "3+ Applications", desc: "High Inquiry" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveEnquiries(item.id as any)}
                          className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                            activeEnquiries === item.id
                              ? "border-[#0B2E8D] bg-blue-50/80 text-[#0B2E8D] font-bold"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          <div className="font-bold">{item.label}</div>
                          <div className="text-[10px] text-slate-400">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0B2E8D] hover:bg-[#071F60] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md text-sm flex items-center justify-center gap-2"
                  >
                    <span>Calculate Estimated Score</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </form>
              )}

              {/* Direct Apply CTA */}
              <div className="pt-2">
                <Link
                  href="/apply"
                  className="w-full bg-[#BB0119] hover:bg-[#E0292E] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <span>Apply for Pre-Approved Loan</span>
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                </Link>
              </div>
            </div>

          </div>
        )}

        {/* ================= TAB 2: LOAN BORROWING CAPACITY (FOIR) ================= */}
        {activeTab === "estimator" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold border border-white/20">
                <span className="material-symbols-outlined text-[16px]">calculate</span>
                FOIR Borrowing Capacity Formula
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Calculate Maximum <span className="text-emerald-400 block mt-1">Loan Eligibility</span>
              </h2>

              <p className="text-blue-100 text-sm leading-relaxed max-w-xl">
                Banks cap your total monthly loan repayment obligations (existing EMIs + new EMI) to **50% of your net monthly in-hand salary / income** (Fixed Obligations to Income Ratio).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-2xl text-emerald-400 mb-1">price_check</span>
                  <h4 className="font-bold text-xs">Zero Fee Check</h4>
                  <p className="text-[10px] text-blue-200 mt-0.5">100% Free calculation</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-2xl text-emerald-400 mb-1">shield</span>
                  <h4 className="font-bold text-xs">No Data Collected</h4>
                  <p className="text-[10px] text-blue-200 mt-0.5">Calculated in browser</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-2xl text-emerald-400 mb-1">bolt</span>
                  <h4 className="font-bold text-xs">Instant Result</h4>
                  <p className="text-[10px] text-blue-200 mt-0.5">Explore by slider</p>
                </div>
              </div>
            </div>

            {/* Right: Eligibility Inputs & Output */}
            <div className="lg:col-span-6 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
              <div className="mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">
                  Eligibility Calculator
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  Set Your Income &amp; Existing EMIs
                </h3>
              </div>

              {/* Monthly Income Slider */}
              <div className="space-y-1.5">
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
              </div>

              {/* Existing EMI Slider */}
              <div className="space-y-1.5">
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
              </div>

              {/* Tenure & Rate */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">
                    Tenure
                  </label>
                  <select
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900"
                  >
                    {[1, 2, 3, 5, 7, 10, 15, 20].map((y) => (
                      <option key={y} value={y}>
                        {y} {y === 1 ? "Year" : "Years"}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">
                    Interest Rate
                  </label>
                  <select
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900"
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
              <div className="bg-gradient-to-br from-[#001A62] to-[#0B2E8D] rounded-2xl p-5 text-white space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 block">
                  Estimated Maximum Loan
                </span>
                <div className="text-3xl font-black tracking-tight">
                  {maxLoanAmount > 0 ? `₹ ${formatLakhs(maxLoanAmount)}` : "—"}
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-white/15">
                  <div>
                    <span className="text-blue-200 block text-[9px] uppercase">Max New EMI</span>
                    <span className="font-bold text-white text-xs">{formatCurrency(maxAffordableEmi)}</span>
                  </div>
                  <div>
                    <span className="text-blue-200 block text-[9px] uppercase">Tenure</span>
                    <span className="font-bold text-white text-xs">{totalMonths} Months</span>
                  </div>
                </div>
              </div>

              <Link
                href="/apply"
                className="w-full bg-[#BB0119] hover:bg-[#E0292E] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <span>Apply with Instant Eligibility</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>

          </div>
        )}

      </div>

      {/* ================= SOFT INQUIRY MODAL ================= */}
      {showInquiryForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setShowInquiryForm(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>

            {!inquirySubmitted ? (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="text-center space-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
                    <span className="material-symbols-outlined text-2xl">verified_user</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Free Credit Health Report
                  </h3>
                  <p className="text-xs text-slate-500">
                    100% Free soft inquiry via RBI-licensed bureau partner. <strong>Zero impact on CIBIL score</strong>.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Full Name (As per PAN)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B2E8D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number (Aadhaar linked)</label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value.replace(/\D/g, ""))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B2E8D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">PAN Card Number (Optional)</label>
                    <input
                      type="text"
                      maxLength={10}
                      placeholder="e.g. ABCDE1234F"
                      value={inquiryPan}
                      onChange={(e) => setInquiryPan(e.target.value.toUpperCase())}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold uppercase focus:outline-none focus:border-[#0B2E8D]"
                    />
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 bg-slate-50 p-2.5 rounded-xl border border-slate-100 leading-tight">
                  🔒 By submitting, you authorize Shreem Finserv to fetch your soft bureau score and share pre-approved loan recommendations as per DPDP Act 2026.
                </div>

                <button
                  type="submit"
                  disabled={inquiryLoading}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md text-sm flex items-center justify-center gap-2"
                >
                  {inquiryLoading ? (
                    <span>Processing Secure Request...</span>
                  ) : (
                    <>
                      <span>Send My Free Report</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Request Received!</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Our credit advisory desk has initiated your soft credit health analysis. Your advisor will share the customized report and pre-approved offers via WhatsApp/SMS shortly on <strong>+91 {inquiryPhone}</strong>.
                </p>
                <button
                  onClick={() => {
                    setShowInquiryForm(false);
                    setInquirySubmitted(false);
                  }}
                  className="bg-[#0B2E8D] text-white text-xs font-bold px-6 py-2.5 rounded-xl"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CreditScoreWidget;
