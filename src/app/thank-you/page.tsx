"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

export default function ThankYouPage() {
  const [refId, setRefId] = useState<string>("");

  useEffect(() => {
    // Generate or fetch reference ID
    const randomHex = Math.random().toString(36).substring(2, 8).toUpperCase();
    const id = `SF-${new Date().getFullYear()}-${randomHex}`;
    const timer = setTimeout(() => {
      setRefId(id);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const cleanPhone = BRAND_CONFIG.phone.replace(/[^0-9]/g, "");
  const waMessage = encodeURIComponent(
    `Hi Shreem Finserv, I just submitted an application on your website (Ref: ${refId}). Please share the status.`
  );
  const waUrl = `https://wa.me/${cleanPhone}?text=${waMessage}`;

  return (
    <div className="min-h-[85vh] pt-28 pb-16 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full space-y-8 text-center">
        
        {/* Animated Checkmark Circle */}
        <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xl animate-in zoom-in-50 duration-300">
          <span className="material-symbols-outlined text-4xl font-black">
            check
          </span>
        </div>

        {/* Heading & Reference Pill */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            Application Successfully Logged
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Thank You! Your Loan Request is in Motion.
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our algorithmic co-lending underwriting engine has received your profile and is matching you with prime bank quotes.
          </p>

          {/* Reference ID Box */}
          <div className="bg-white border-2 border-dashed border-[#0B2E8D]/40 rounded-2xl p-4 max-w-sm mx-auto shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Your Priority Application Reference
            </span>
            <span className="text-lg font-mono font-black text-[#0B2E8D]">
              {refId || "SF-2026-9482X"}
            </span>
          </div>
        </div>

        {/* 3-Step What Happens Next Timeline */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm text-left space-y-6">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
            <span className="material-symbols-outlined text-[#0B2E8D] text-xl">timeline</span>
            <span>What Happens Next? (Underwriting SLA: &lt; 2 Hours)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#001A62] text-white flex items-center justify-center font-bold text-xs">
                1
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Credit Desk Review</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                A dedicated senior loan officer verifies your basic details and checks co-lender eligibility matrices.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#0B2E8D] text-white flex items-center justify-center font-bold text-xs">
                2
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Rate &amp; Sanction Quote</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                You will receive a call and SMS with lowest-rate bank options and personalized EMI breakdowns.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#BB0119] text-white flex items-center justify-center font-bold text-xs">
                3
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Disbursal to Account</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Upon digital KYC sign-off, sanctioned funds are credited directly to your primary bank account.
              </p>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Speed Up on WhatsApp</span>
          </a>

          <Link
            href="/track-application"
            className="inline-flex items-center gap-2 bg-[#001A62] hover:bg-[#0B2E8D] text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">manage_search</span>
            <span>Track Application Portal</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-sm transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">home</span>
            <span>Back to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
