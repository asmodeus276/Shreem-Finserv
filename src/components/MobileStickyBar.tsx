"use client";

import React from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

export const MobileStickyBar: React.FC = () => {
  const scrollToApply = (e: React.MouseEvent) => {
    const form = document.getElementById("lead-application-form");
    if (form) {
      e.preventDefault();
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        
        {/* Call Hotline */}
        <a
          href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 active:scale-95 transition-all text-center"
        >
          <span className="material-symbols-outlined text-[20px] text-[#0B2E8D]">call</span>
          <span className="text-[10px] font-bold mt-0.5">Call</span>
        </a>

        {/* WhatsApp Priority */}
        <a
          href={`https://wa.me/${BRAND_CONFIG.phone.replace(/\D/g, "")}?text=Hi%20Shreem%20Finserv,%20I%20want%20to%20apply%20for%20a%20loan`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 active:scale-95 transition-all text-center"
        >
          <span className="material-symbols-outlined text-[20px] text-emerald-600">chat</span>
          <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
        </a>

        {/* Track Status */}
        <Link
          href="/track-application"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 active:scale-95 transition-all text-center"
        >
          <span className="material-symbols-outlined text-[20px] text-slate-600">manage_search</span>
          <span className="text-[10px] font-bold mt-0.5">Track</span>
        </Link>

        {/* Apply Now Primary */}
        <Link
          href="/apply"
          onClick={(e) => {
            const form = document.getElementById("lead-application-form");
            if (form) {
              e.preventDefault();
              form.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-[#BB0119] hover:bg-[#E0292E] text-white active:scale-95 transition-all text-center shadow-sm"
        >
          <span className="material-symbols-outlined text-[20px]">bolt</span>
          <span className="text-[10px] font-bold mt-0.5">Apply</span>
        </Link>

      </div>
    </div>
  );
};

export default MobileStickyBar;
