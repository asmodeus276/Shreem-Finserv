"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { submitLead } from "@/lib/firebase";

interface LeadFormProps {
  defaultCategory?: string;
  defaultAmount?: number;
  minAmount?: number;
  maxAmount?: number;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  defaultCategory,
  defaultAmount = 5000000,
  minAmount = 50000,
  maxAmount = 50000000,
  title = "Check Loan Eligibility & Rates",
  subtitle = "Instant evaluation with zero impact on credit score.",
  className = "",
}) => {
  const pathname = usePathname();

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [loanCategory, setLoanCategory] = useState(defaultCategory || "Personal Loan");
  const [prevDefaultCategory, setPrevDefaultCategory] = useState(defaultCategory);
  if (defaultCategory !== prevDefaultCategory) {
    setPrevDefaultCategory(defaultCategory);
    setLoanCategory(defaultCategory || "Personal Loan");
  }

  const [amount, setAmount] = useState(defaultAmount);
  const [consent, setConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successResult, setSuccessResult] = useState<{
    applicationId: string;
    message?: string;
  } | null>(null);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name as per PAN card.");
      return;
    }
    const cleanMobile = mobile.replace(/\D/g, "");
    if (cleanMobile.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!city.trim()) {
      setErrorMessage("Please enter your current city.");
      return;
    }
    if (!loanCategory) {
      setErrorMessage("Please select a loan category.");
      return;
    }
    if (!consent) {
      setErrorMessage("Please consent to the DPDP 2026 terms to proceed.");
      return;
    }

    setLoading(true);

    try {
      // Automatically pass window.location.pathname as sourcePage
      const sourcePage = typeof window !== "undefined" ? window.location.pathname : pathname || "/";

      const res = await submitLead({
        fullName: fullName.trim(),
        mobile: cleanMobile,
        city: city.trim(),
        loanCategory,
        amount,
        consent,
        marketingConsent,
        sourcePage,
      });

      if (res.success) {
        setSuccessResult({
          applicationId: res.applicationId,
          message: res.message,
        });
      } else {
        setErrorMessage(res.message || "Unable to submit application. Please try again.");
      }
    } catch (err: unknown) {
      console.error("Form submission failed:", err);
      setErrorMessage("Connection error. Please check your internet or try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessResult(null);
    setFullName("");
    setMobile("");
    setCity("");
    setAmount(defaultAmount);
    setConsent(false);
    setMarketingConsent(false);
    setErrorMessage(null);
  };

  if (successResult) {
    return (
      <div
        id="lead-application-form"
        className={`bg-white rounded-2xl border border-emerald-200 p-8 shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl">check_circle</span>
        </div>

        <div>
          <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-2">
            Application Received
          </span>
          <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
          <p className="text-slate-600 text-sm mt-1">
            Our senior credit manager will contact you within 30 minutes.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left space-y-2">
          <div className="flex justify-between items-center text-xs text-slate-500 font-semibold uppercase">
            <span>Tracking Reference ID</span>
            <span className="text-emerald-600">Active</span>
          </div>
          <div className="text-2xl font-mono font-bold text-[#0B2E8D]">
            {successResult.applicationId}
          </div>
          <p className="text-xs text-slate-500">
            Keep this ID safe to track your real-time approval status online.
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="#application-tracker"
            onClick={(e) => {
              const tracker = document.getElementById("application-tracker");
              if (tracker) {
                e.preventDefault();
                tracker.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#0B2E8D] hover:bg-[#001A62] text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">search</span>
            Track Status Now
          </a>
          <button
            onClick={handleReset}
            className="w-full text-xs font-semibold text-slate-600 hover:text-slate-900 py-2 transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="lead-application-form"
      className={`bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 interactive-shadow ${className}`}
    >
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">
            Direct Disbursal Channel
          </span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>
      </div>

      {errorMessage && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-lg text-xs font-semibold text-red-700 flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">error</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="As per PAN card (e.g. Ramesh Sharma)"
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] focus:ring-1 focus:ring-[#0B2E8D] transition-colors"
          />
        </div>

        {/* Mobile & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm font-semibold">
                +91
              </span>
              <input
                type="tel"
                required
                maxLength={10}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="98765 43210"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-12 pr-3 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] focus:ring-1 focus:ring-[#0B2E8D] transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Delhi NCR, Mumbai"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] focus:ring-1 focus:ring-[#0B2E8D] transition-colors"
            />
          </div>
        </div>

        {/* Category Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Loan Category <span className="text-red-500">*</span>
          </label>
          <select
            value={loanCategory}
            onChange={(e) => setLoanCategory(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] focus:ring-1 focus:ring-[#0B2E8D] transition-colors"
          >
            <option value="Personal Loans for Doctors">Personal Loans for Doctors</option>
            <option value="MSME Working Capital">MSME Working Capital</option>
            <option value="Loan Against Property">Loan Against Property (LAP)</option>
            <option value="Machinery & Equipment">Machinery & Equipment Loan</option>
            <option value="Urgent Cash Advance">Urgent Cash Advance</option>
            <option value="Loans for Women Entrepreneurs">Loans for Women Entrepreneurs</option>
            <option value="General Personal Loan">General Personal Loan</option>
            <option value="General Business Loan">General Business Loan</option>
          </select>
        </div>

        {/* Amount Slider & Live Instant Quote */}
        <div className="pt-2">
          <div className="flex justify-between items-center gap-2 mb-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Required Loan Amount
            </label>
            <span className="text-base font-bold text-[#0B2E8D] whitespace-nowrap flex-shrink-0">
              {formatCurrency(amount)}
            </span>
          </div>
          <input
            type="range"
            min={minAmount}
            max={maxAmount}
            step={25000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B2E8D]"
          />
          <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1">
            <span>{formatCurrency(minAmount)}</span>
            <span>{formatCurrency(maxAmount)}</span>
          </div>

          {/* Live Estimate Feedback Pill */}
          <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50/60 border border-blue-200/80 rounded-xl flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#0B2E8D]">speed</span>
              <div>
                <span className="text-slate-500 text-[10px] uppercase font-bold block">Estimated EMI (~5 Yrs)</span>
                <span className="font-extrabold text-[#001A62] text-sm">
                  {formatCurrency(
                    Math.round(
                      (amount * (10.5 / 1200) * Math.pow(1 + 10.5 / 1200, 60)) /
                        (Math.pow(1 + 10.5 / 1200, 60) - 1)
                    )
                  )}
                  <span className="text-[10px] text-slate-500 font-normal"> /mo</span>
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-emerald-700 text-[10px] font-bold block">Sanction SLA</span>
              <span className="font-bold text-slate-800 text-xs">Within 24 Hours</span>
            </div>
          </div>
        </div>

        {/* DPDP Consent — Mandatory: Data Sharing with Lenders */}
        <div className="space-y-3 pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 w-4 h-4 text-[#0B2E8D] rounded border-slate-300 focus:ring-[#0B2E8D]"
            />
            <span className="text-xs text-slate-500 leading-snug group-hover:text-slate-700 transition-colors">
              <span className="text-red-500">*</span>{" "}
              I consent to Shreem Finserv sharing my personal data with its lending partners for the purpose of processing this loan application, in accordance with the{" "}
              <span className="font-semibold text-slate-700">Digital Personal Data Protection Act, 2023</span> and{" "}
              <Link href="/privacy-policy" className="underline text-[#0B2E8D] hover:text-[#001A62]">Privacy Policy</Link>.
            </span>
          </label>

          {/* Optional: Marketing Communications */}
          <label className="flex items-start gap-2.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
              className="mt-0.5 w-4 h-4 text-[#0B2E8D] rounded border-slate-300 focus:ring-[#0B2E8D]"
            />
            <span className="text-xs text-slate-500 leading-snug group-hover:text-slate-700 transition-colors">
              I agree to receive promotional offers and updates from Shreem Finserv via SMS, WhatsApp, and email. (Optional — you can opt out anytime.)
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full button-shine bg-[#BB0119] hover:bg-[#E0292E] disabled:bg-slate-400 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 text-sm mt-3 cursor-pointer"
        >
          {loading ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Submitting Application...</span>
            </>
          ) : (
            <>
              <span>Get Instant Approval</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </>
          )}
        </button>

        {/* Security & Regulatory Badges */}
        <div className="pt-2 flex items-center justify-center gap-4 text-[10px] text-slate-400 font-semibold border-t border-slate-100">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px] text-emerald-600">lock</span>
            256-Bit SSL
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px] text-[#0B2E8D]">verified_user</span>
            DPDP Compliant
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px] text-slate-600">money_off</span>
            Zero Upfront Fee
          </span>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
