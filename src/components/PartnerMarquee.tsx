"use client";

import React, { useState } from "react";
import { BANK_PARTNERS_DATA, BankInfo } from "@/components/BankLogos";

export const PartnerMarquee: React.FC = () => {
  const [showAllModal, setShowAllModal] = useState(false);
  const [selectedBank, setSelectedBank] = useState<BankInfo | null>(null);

  return (
    <section className="py-8 bg-white border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Authorized Co-Lending Network With{" "}
            <span className="text-[#0B309A] font-extrabold">
              50+ Scheduled Banks &amp; Premier NBFCs
            </span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowAllModal(true)}
          className="text-xs font-bold text-[#0B309A] hover:text-[#E30613] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>View All Partners &amp; Rates</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>

      {/* Marquee Wrapper with continuous animation */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="flex w-max gap-5 animate-marquee py-2.5 hover:[animation-play-state:paused]">
          {[...BANK_PARTNERS_DATA, ...BANK_PARTNERS_DATA].map((p, idx) => (
            <div
              key={`${p.id}-${idx}`}
              onClick={() => setSelectedBank(p)}
              className="inline-flex items-center gap-3 bg-white border border-slate-200/90 hover:border-[#0B309A] px-3.5 py-2 rounded-xl transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 group flex-shrink-0 cursor-pointer select-none min-w-[240px]"
            >
              <div className="w-14 h-8 flex-shrink-0 bg-white rounded-lg p-1 border border-slate-200/80 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                {p.svgIcon}
              </div>
              <div className="flex flex-col text-left justify-center min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-[#0B309A] transition-colors leading-tight truncate">
                    {p.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                </div>
                <span className="text-[11px] text-emerald-700 font-bold mt-0.5 whitespace-nowrap">
                  {p.interestRate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Details / All Partners Modal */}
      {(showAllModal || selectedBank) && (
        <div
          onClick={() => {
            setShowAllModal(false);
            setSelectedBank(null);
          }}
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative max-h-[85vh] overflow-y-auto animate-fade-in-up"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B309A] text-xs font-bold border border-blue-200 mb-1">
                  <span className="material-symbols-outlined text-[16px]">account_balance</span>
                  Authorized Lending Network
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedBank ? selectedBank.name : "All 50+ Co-Lending Bank & NBFC Partners"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowAllModal(false);
                  setSelectedBank(null);
                }}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {selectedBank ? (
              <div className="space-y-4">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-4">
                  <div className="w-16 h-10 bg-white rounded-xl p-1.5 border border-slate-200 flex items-center justify-center shadow-xs">
                    {selectedBank.svgIcon}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-slate-900">{selectedBank.name}</h4>
                    <span className="text-xs text-[#0B309A] font-semibold">{selectedBank.category} Channel Partner</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Interest Rate</span>
                    <span className="font-bold text-emerald-700 text-sm mt-0.5 block">{selectedBank.interestRate}</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Max Limit</span>
                    <span className="font-bold text-slate-900 text-sm mt-0.5 block">{selectedBank.maxAmount}</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Processing Fee</span>
                    <span className="font-bold text-slate-700 text-sm mt-0.5 block">{selectedBank.processingFee}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-[#0B309A] font-medium">
                  <strong>Special Feature:</strong> {selectedBank.specialFeature}
                </div>

                <a
                  href="#lead-application-form"
                  onClick={() => {
                    setShowAllModal(false);
                    setSelectedBank(null);
                  }}
                  className="block text-center w-full bg-[#0B309A] hover:bg-[#0B2E8D] text-white font-bold py-3.5 rounded-xl text-xs transition-all shadow-md mt-4"
                >
                  Apply with {selectedBank.name} via Shreem Priority Channel →
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {BANK_PARTNERS_DATA.map((bank) => (
                  <div
                    key={bank.id}
                    onClick={() => setSelectedBank(bank)}
                    className="p-3.5 rounded-2xl bg-white hover:bg-blue-50/60 border border-slate-200 hover:border-[#0B309A]/40 transition-all cursor-pointer flex items-center justify-between group shadow-2xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-14 h-9 bg-white rounded-lg p-1 border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-2xs">
                        {bank.svgIcon}
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-xs font-bold text-slate-900 group-hover:text-[#0B309A] truncate">
                          {bank.name}
                        </h5>
                        <p className="text-[10px] text-emerald-700 font-semibold">{bank.interestRate}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-[#0B309A]">
                      chevron_right
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PartnerMarquee;
