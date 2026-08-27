"use client";

import React, { useState } from "react";
import { BANK_PARTNERS_DATA } from "@/components/BankLogos";

interface BankComparisonTableProps {
  categoryTitle?: string;
  className?: string;
}

export const BankComparisonTable: React.FC<BankComparisonTableProps> = ({
  categoryTitle = "Personal & Business Lending",
  className = "",
}) => {
  const [filter, setFilter] = useState<"All" | "Bank" | "NBFC">("All");

  const filteredBanks = BANK_PARTNERS_DATA.filter((b) => {
    if (filter === "All") return true;
    return b.category === filter;
  });

  const handleApply = () => {
    const form = document.getElementById("lead-application-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`py-12 md:py-16 bg-white border-t border-slate-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200 mb-2">
              <span className="material-symbols-outlined text-[16px]">compare_arrows</span>
              Transparent Market Comparison
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Compare Top Lender Rates for {categoryTitle}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Shreem Finserv matches your profile across all co-lenders to guarantee the lowest interest rate and maximum sanction.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 self-start md:self-auto overflow-x-auto max-w-full">
            {(["All", "Bank", "NBFC"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                  filter === tab
                    ? "bg-[#001A62] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab === "All" ? "All Lenders (12+)" : tab === "Bank" ? "Banks Only" : "NBFCs Only"}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Mobile Optimized Card List (< md screens) */}
        <div className="md:hidden space-y-4">
          {filteredBanks.map((bank) => (
            <div
              key={bank.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 flex-shrink-0 rounded-lg overflow-hidden">{bank.svgIcon}</div>
                  <div className="min-w-0">
                    <div className="font-bold text-slate-900 text-sm truncate">{bank.name}</div>
                    <span className="text-[10px] font-semibold text-slate-400 block">{bank.category} Partner</span>
                  </div>
                </div>
                <span className="font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-lg text-xs whitespace-nowrap flex-shrink-0">
                  {bank.interestRate}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-200/60">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Max Sanction</span>
                  <span className="font-bold text-slate-800">{bank.maxAmount}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Processing Fee</span>
                  <span className="font-medium text-slate-600">{bank.processingFee}</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 bg-white p-2.5 rounded-xl border border-slate-200/60">
                <span className="font-semibold text-slate-700">Advantage:</span> {bank.specialFeature}
              </div>

              <button
                onClick={handleApply}
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-[#001A62] hover:bg-[#BB0119] py-2.5 px-4 rounded-xl transition-colors shadow-sm"
              >
                <span>Apply with {bank.shortName}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>

        {/* 2. Desktop Full Table View (>= md screens) */}
        <div className="hidden md:block border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <th className="py-4 px-6">Co-Lending Institution</th>
                  <th className="py-4 px-6">Interest Rate</th>
                  <th className="py-4 px-6">Maximum Sanction</th>
                  <th className="py-4 px-6">Processing Fee</th>
                  <th className="py-4 px-6">Special Advantage</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredBanks.map((bank) => (
                  <tr
                    key={bank.id}
                    className="hover:bg-blue-50/40 transition-colors group"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 flex-shrink-0 rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                          {bank.svgIcon}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 leading-tight">
                            {bank.name}
                          </div>
                          <span className="text-[10px] font-semibold text-slate-400">
                            {bank.category} Partner
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      <span className="font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg text-xs">
                        {bank.interestRate}
                      </span>
                    </td>

                    <td className="py-4 px-6 font-bold text-slate-800">
                      {bank.maxAmount}
                    </td>

                    <td className="py-4 px-6 text-xs text-slate-600 font-medium">
                      {bank.processingFee}
                    </td>

                    <td className="py-4 px-6 text-xs text-slate-500 max-w-xs">
                      {bank.specialFeature}
                    </td>

                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={handleApply}
                        className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#001A62] hover:bg-[#BB0119] px-4 py-2 rounded-lg transition-colors shadow-sm"
                      >
                        <span>Apply</span>
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Guarantee Note */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500 px-2">
          <span>* Interest rates and limits are subject to underwriting approval and RBI guidelines.</span>
          <span className="font-semibold text-emerald-700 flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px]">verified</span>
            Zero Markup on Direct Bank Quotes
          </span>
        </div>

      </div>
    </section>
  );
};

export default BankComparisonTable;
