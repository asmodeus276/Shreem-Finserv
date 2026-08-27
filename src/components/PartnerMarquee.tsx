import React from "react";
import { BANK_PARTNERS_DATA } from "@/components/BankLogos";

export const PartnerMarquee: React.FC = () => {
  return (
    <section className="py-8 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Authorized Direct Partner With{" "}
          <span className="text-[#0B2E8D] font-extrabold">
            50+ Scheduled Banks &amp; Premier NBFCs
          </span>
        </p>
      </div>

      {/* Marquee Wrapper with continuous animation */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-5 animate-marquee py-2 hover:[animation-play-state:paused]">
          {[...BANK_PARTNERS_DATA, ...BANK_PARTNERS_DATA].map((p, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-[#0B2E8D]/40 px-5 py-3 rounded-2xl transition-all shadow-sm hover:shadow group flex-shrink-0 cursor-default select-none min-w-[180px]"
            >
              <div className="w-9 h-9 flex-shrink-0 rounded-lg overflow-hidden">
                {p.svgIcon}
              </div>
              <div className="flex flex-col text-left justify-center">
                <span className="text-xs font-bold text-slate-800 group-hover:text-[#0B2E8D] transition-colors leading-tight whitespace-nowrap">
                  {p.name}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold mt-0.5 whitespace-nowrap">
                  {p.interestRate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerMarquee;
