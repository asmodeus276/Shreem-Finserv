import React from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 sm:pt-32 md:pt-36 pb-16 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#BB0119] text-xs font-bold border border-red-200">
          <span className="material-symbols-outlined text-[16px]">error</span>
          404 - Resource Not Located
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
          Oops! That Page Seems to Have Moved.
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          The link you followed may be expired or the address was entered incorrectly. Don’t worry — your financial journey with Shreem Finserv is right on track.
        </p>

        {/* Quick Links Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Popular Financial Tools &amp; Products:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/personal-loan/for-doctors"
              className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-[#001A62] border border-slate-100 transition-all font-semibold text-xs"
            >
              <span className="material-symbols-outlined text-[#0B2E8D]">medical_services</span>
              <span>Doctors Loan</span>
            </Link>
            <Link
              href="/business-loan/msme-working-capital"
              className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-[#001A62] border border-slate-100 transition-all font-semibold text-xs"
            >
              <span className="material-symbols-outlined text-emerald-600">storefront</span>
              <span>MSME Working Capital</span>
            </Link>
            <Link
              href="/calculator"
              className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-[#001A62] border border-slate-100 transition-all font-semibold text-xs"
            >
              <span className="material-symbols-outlined text-[#0B2E8D]">calculate</span>
              <span>Smart EMI Calculator</span>
            </Link>
            <Link
              href="/credit-score"
              className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-[#001A62] border border-slate-100 transition-all font-semibold text-xs"
            >
              <span className="material-symbols-outlined text-emerald-600">speed</span>
              <span>Free Credit Score</span>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#001A62] hover:bg-[#0B2E8D] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">home</span>
            <span>Return to Homepage</span>
          </Link>
          <a
            href={`tel:${BRAND_CONFIG.phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-sm transition-all"
          >
            <span className="material-symbols-outlined text-[18px] text-[#BB0119]">call</span>
            <span>Call Support ({BRAND_CONFIG.phoneDisplay})</span>
          </a>
        </div>

      </div>
    </div>
  );
}
