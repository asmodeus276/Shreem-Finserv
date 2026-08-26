"use client";

import React from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

export default function MediaPage() {
  const pressReleases = [
    {
      title: "Shreem Finserv Crosses ₹500 Crore Loan Disbursal Milestone Across North India",
      date: "January 14, 2026",
      source: "National Financial Bureau",
      excerpt:
        "Fintech lending advisory Shreem Finserv announced crossing ₹500 Crore in cumulative credit facilitations, propelled by surges in collateral-free personal loans for medical specialists and MSME working capital lines.",
      linkText: "Read Coverage Summary",
    },
    {
      title: "Shreem Finserv Partners with 14+ Scheduled Banks to Launch 4-Hour Doctor Loan Sanction Desk",
      date: "November 28, 2025",
      source: "Banking & Healthcare Digest",
      excerpt:
        "Through direct co-lending integrations with HDFC Bank, ICICI Bank, and SBI, medical doctors can now obtain formal in-principle sanction letters within 4 hours using paperless digital verification.",
      linkText: "View Press Release",
    },
    {
      title: "Zero Upfront Fee Guarantee Mandated to Eliminate DSA Markups for MSME Borrowers",
      date: "August 18, 2025",
      source: "MSME Weekly Monitor",
      excerpt:
        "In line with RBI Fair Practice codes and DPDP 2026, Shreem Finserv reinforced its zero-advisory-fee charter, guaranteeing borrowers direct institutional quotes without hidden broker margins.",
      linkText: "Read Policy Note",
    },
  ];

  return (
    <div className="pt-24 md:pt-28 pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-slate-50 py-12 md:py-18 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200">
              <span className="material-symbols-outlined text-[16px]">newspaper</span>
              Press &amp; Media Center
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              News, Announcements &amp; Brand Assets
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Stay up to date with official company developments, market reports, executive statements, and downloadable media resources for Shreem Finserv.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-16">
        
        {/* Press Releases Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">
                Official Updates
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Latest Press Releases &amp; Coverage
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-medium">
              Editorial Contact: {BRAND_CONFIG.email}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressReleases.map((pr, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#0B2E8D]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-bold text-[#0B2E8D]">{pr.source}</span>
                    <span>{pr.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {pr.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pr.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-700">Verified Release</span>
                  <span className="text-[#0B2E8D] font-bold inline-flex items-center gap-1">
                    <span>{pr.linkText}</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Kit / Media Assets Download Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Media Kit &amp; Visual Identity
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Official Brand Guidelines &amp; High-Res Assets
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Journalists, publishing partners, and affiliate platforms can download official Shreem Finserv logo marks, founder headshots, and corporate boilerplates for press usage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <div className="text-xs font-bold text-slate-200">Primary Logo Mark</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">PNG, SVG (Navy &amp; Crimson)</div>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <div className="text-xs font-bold text-slate-200">Executive Bios</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Leadership quotes &amp; photos</div>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <div className="text-xs font-bold text-slate-200">Compliance Kit</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">DPDP 2026 &amp; RBI certificates</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-2xl">download</span>
              </div>
              <div className="font-bold text-sm text-slate-100">
                Media Kit Package (.ZIP)
              </div>
              <p className="text-xs text-slate-400">
                Includes high-resolution transparent logos, brand guidelines, and color palettes.
              </p>
              <a
                href="/logo-mark.png"
                download="Shreem-Finserv-Brand-Kit.png"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#0B2E8D] hover:bg-[#133db5] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow"
              >
                <span className="material-symbols-outlined text-[16px]">cloud_download</span>
                <span>Download Assets (2.4 MB)</span>
              </a>
            </div>
          </div>
        </section>

        {/* Media Inquiries Contact Box */}
        <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-900">
              Media &amp; Interview Inquiries
            </h3>
            <p className="text-xs text-slate-500">
              For spokesperson quotes, lending market data, or story collaborations, reach our media desk.
            </p>
          </div>
          <a
            href={`mailto:${BRAND_CONFIG.email}?subject=Media%20Inquiry%20-%20Shreem%20Finserv`}
            className="inline-flex items-center gap-2 bg-[#001A62] hover:bg-[#0B2E8D] text-white font-bold px-6 py-3 rounded-xl text-xs shadow transition-colors flex-shrink-0"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>Contact Media Desk</span>
          </a>
        </section>

      </div>
    </div>
  );
}
