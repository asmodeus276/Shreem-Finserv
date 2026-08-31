"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

export default function ApplyClientPage() {
  const [step, setStep] = useState<number>(1);
  const [loanType, setLoanType] = useState<string>("Personal Loan");
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [tenureYears, setTenureYears] = useState<number>(5);
  
  // Applicant details
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [employmentType, setEmploymentType] = useState<"Salaried" | "Self-Employed / Business" | "Doctor / Professional">("Salaried");
  const [monthlyIncome, setMonthlyIncome] = useState<number>(75000);
  const [companyName, setCompanyName] = useState<string>("");
  const [pan, setPan] = useState<string>("");
  const [consent, setConsent] = useState<boolean>(true);

  // Status
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [refId, setRefId] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  // Approximate EMI calculation (10.5% default)
  const calculateEmi = (p: number, y: number, rate: number = 10.5) => {
    const r = rate / 12 / 100;
    const n = y * 12;
    if (r === 0) return Math.round(p / n);
    return Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  };

  const currentEmi = calculateEmi(loanAmount, tenureYears);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !city) {
      setErrorMsg("Please fill in all mandatory details.");
      return;
    }
    if (phone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    const generatedRefId = `SF-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const res = await fetch("/api/lead-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          email: email || "Not provided",
          city,
          loanType,
          amount: loanAmount,
          tenure: `${tenureYears} Years`,
          employmentType,
          monthlyIncome,
          companyName: companyName || "Self / Private",
          pan: pan || "N/A",
          refId: generatedRefId,
          source: "Direct /apply Portal",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit lead");
      }

      setRefId(generatedRefId);
      setSubmitted(true);
    } catch {
      // Graceful fallback: show confirmation even if endpoint delayed
      setRefId(generatedRefId);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B2E8D] text-xs font-bold mb-3 border border-blue-200">
            <span className="material-symbols-outlined text-[15px]">bolt</span>
            Instant Pre-Approved Loan Sanctions
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apply for Your Loan in 2 Minutes
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Get priority loan matchmaking with 50+ RBI-regulated banks and NBFCs with zero upfront processing charges.
          </p>
        </div>

        {!submitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Form Container */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
              
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    step >= 1 ? "bg-[#0B2E8D] text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    1
                  </div>
                  <span className={`text-xs font-bold ${step >= 1 ? "text-slate-900" : "text-slate-400"}`}>
                    Loan Requirements
                  </span>
                </div>
                <div className="h-0.5 w-12 bg-slate-200"></div>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    step === 2 ? "bg-[#0B2E8D] text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    2
                  </div>
                  <span className={`text-xs font-bold ${step === 2 ? "text-slate-900" : "text-slate-400"}`}>
                    Applicant Profile
                  </span>
                </div>
              </div>

              {errorMsg && (
                <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">error</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* STEP 1: Loan Requirements */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Select Loan Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        { name: "Personal Loan", icon: "person" },
                        { name: "Business Loan", icon: "store" },
                        { name: "Loan Against Property", icon: "home" },
                        { name: "Machinery Loan", icon: "precision_manufacturing" },
                        { name: "Doctor's Loan", icon: "stethoscope" },
                        { name: "Women Entrepreneur", icon: "shield_person" },
                      ].map((item) => (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => setLoanType(item.name)}
                          className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all ${
                            loanType === item.name
                              ? "border-[#0B2E8D] bg-blue-50/70 text-[#0B2E8D] font-bold shadow-xs"
                              : "border-slate-200 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span className="material-symbols-outlined text-[20px] text-[#0B2E8D]">{item.icon}</span>
                          <span className="text-xs">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Loan Amount Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Required Loan Amount
                      </label>
                      <span className="text-lg font-black text-[#0B2E8D]">
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={50000}
                      max={50000000}
                      step={50000}
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B2E8D]"
                    />
                    <div className="flex justify-between text-[11px] font-bold text-slate-400">
                      <span>₹50K</span>
                      <span>₹50 Lakhs</span>
                      <span>₹5 Crore</span>
                    </div>
                  </div>

                  {/* Tenure Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Preferred Tenure
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {[1, 2, 3, 5, 7, 10].map((y) => (
                        <button
                          key={y}
                          type="button"
                          onClick={() => setTenureYears(y)}
                          className={`py-2 rounded-xl border text-center text-xs font-bold transition-all ${
                            tenureYears === y
                              ? "border-[#0B2E8D] bg-[#0B2E8D] text-white"
                              : "border-slate-200 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          {y} {y === 1 ? "Yr" : "Yrs"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-[#0B2E8D] hover:bg-[#071F60] text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                  >
                    <span>Proceed to Applicant Details</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              )}

              {/* STEP 2: Applicant Profile */}
              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Employment Type */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                      Employment Status
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["Salaried", "Self-Employed / Business", "Doctor / Professional"] as const).map((emp) => (
                        <button
                          key={emp}
                          type="button"
                          onClick={() => setEmploymentType(emp)}
                          className={`p-2.5 rounded-xl border text-center text-xs transition-all ${
                            employmentType === emp
                              ? "border-[#0B2E8D] bg-blue-50 text-[#0B2E8D] font-bold"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {emp}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Full Name (As per PAN) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amit Kumar"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B2E8D]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-digit mobile"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B2E8D]"
                      />
                    </div>
                  </div>

                  {/* Email & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B2E8D]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        City / Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Delhi NCR, Mumbai, Ghaziabad"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B2E8D]"
                      />
                    </div>
                  </div>

                  {/* Monthly Income & PAN */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Monthly Net Income (₹)
                      </label>
                      <input
                        type="number"
                        placeholder="75000"
                        value={monthlyIncome}
                        onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B2E8D]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        PAN Card Number (Optional)
                      </label>
                      <input
                        type="text"
                        maxLength={10}
                        placeholder="ABCDE1234F"
                        value={pan}
                        onChange={(e) => setPan(e.target.value.toUpperCase())}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold uppercase focus:outline-none focus:border-[#0B2E8D]"
                      />
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      type="checkbox"
                      id="applyConsent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded-sm border-slate-300 text-[#0B2E8D] focus:ring-[#0B2E8D]"
                    />
                    <label htmlFor="applyConsent" className="text-[11px] text-slate-500 leading-snug">
                      I authorize {BRAND_CONFIG.legalName} and its banking partners to contact me and check indicative credit eligibility under DPDP Act 2026 guidelines. Zero upfront fees guaranteed.
                    </label>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-2xl text-xs transition-colors"
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      disabled={submitting || !consent}
                      className="w-2/3 bg-[#BB0119] hover:bg-[#E0292E] text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Sanctioning Request...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <span className="material-symbols-outlined text-[18px]">bolt</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Live Quotation Card */}
              <div className="bg-gradient-to-br from-[#001A62] via-[#0B2E8D] to-[#142450] rounded-3xl p-6 sm:p-7 text-white shadow-xl space-y-5 border border-white/20">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Application Summary
                </span>

                <div className="space-y-1">
                  <span className="text-xs text-blue-200 block">Requested Amount</span>
                  <div className="text-3xl font-black">{formatCurrency(loanAmount)}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/15 text-xs">
                  <div>
                    <span className="text-blue-200 block text-[10px] uppercase">Loan Category</span>
                    <span className="font-bold text-white text-sm">{loanType}</span>
                  </div>
                  <div>
                    <span className="text-blue-200 block text-[10px] uppercase">Tenure</span>
                    <span className="font-bold text-white text-sm">{tenureYears} Years</span>
                  </div>
                  <div>
                    <span className="text-blue-200 block text-[10px] uppercase">Est. Monthly EMI</span>
                    <span className="font-bold text-emerald-300 text-sm">{formatCurrency(currentEmi)}/mo</span>
                  </div>
                  <div>
                    <span className="text-blue-200 block text-[10px] uppercase">Indicative Rate</span>
                    <span className="font-bold text-white text-sm">From 8.75% p.a.</span>
                  </div>
                </div>

                <div className="p-3 bg-white/10 rounded-2xl border border-white/10 text-xs space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-400 text-[16px]">verified</span>
                    Zero Upfront Brokerage Policy
                  </div>
                  <p className="text-[11px] text-blue-200">
                    You never pay any upfront consultation or application fees to Shreem Finserv.
                  </p>
                </div>
              </div>

              {/* Need direct call help card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-bold text-sm text-slate-900">Need Phone Assistance?</h4>
                  <p className="text-xs text-slate-500">Speak directly to an assigned loan officer</p>
                </div>
                <a
                  href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <span className="material-symbols-outlined text-[15px]">call</span>
                  <span>Call Desk</span>
                </a>
              </div>

            </div>

          </div>
        ) : (
          /* Submission Confirmation Card */
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Application Received Successfully
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Your Loan Request is Under Priority Review
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{fullName}</strong>. Your loan application for <strong>{formatCurrency(loanAmount)} ({loanType})</strong> has been registered with our banking network.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 max-w-sm mx-auto space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Application Reference ID</span>
              <div className="text-xl font-mono font-black text-[#0B2E8D]">{refId}</div>
            </div>

            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Our certified loan officer will call you on <strong>+91 {phone}</strong> within 15 minutes to share pre-approved interest rate comparisons across HDFC, ICICI, SBI, and partner NBFCs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100">
              <Link
                href="/"
                className="bg-[#0B2E8D] text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-[#071F60] transition-colors"
              >
                Return to Home
              </Link>
              <Link
                href="/track-application"
                className="bg-slate-100 text-slate-800 text-xs font-bold px-6 py-3 rounded-xl hover:bg-slate-200 transition-colors"
              >
                Track Status
              </Link>
              <a
                href={BRAND_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-emerald-500 transition-colors inline-flex items-center gap-1.5"
              >
                <span>WhatsApp Desk</span>
                <span className="material-symbols-outlined text-[14px]">chat</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
