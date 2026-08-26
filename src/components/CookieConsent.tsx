"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("shreem_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("shreem_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("shreem_cookie_consent", "essential_only");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-16 md:bottom-6 inset-x-4 md:inset-x-auto md:right-24 md:max-w-md z-50 bg-slate-900/95 text-white p-5 rounded-2xl shadow-2xl border border-slate-700/80 backdrop-blur-md animate-in fade-in-50 slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 border border-blue-400/30">
          <span className="material-symbols-outlined text-[20px]">cookie</span>
        </div>
        <div className="space-y-2 flex-1 text-xs">
          <div className="font-bold text-sm text-slate-100 flex items-center justify-between">
            <span>Privacy &amp; Cookie Notice</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full font-mono">
              {BRAND_CONFIG.compliance.dpdp}
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            We use cookies to analyze portal traffic, personalize loan recommendations, and ensure 256-bit encrypted data integrity.
          </p>
          <div className="text-[11px] text-slate-400">
            Learn more in our{" "}
            <Link href="/privacy-policy" className="underline hover:text-white transition-colors">
              Privacy Policy
            </Link>{" "}
            &amp;{" "}
            <Link href="/terms" className="underline hover:text-white transition-colors">
              Terms
            </Link>.
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-end gap-2.5">
        <button
          onClick={handleDecline}
          className="text-xs font-semibold text-slate-400 hover:text-white px-3.5 py-1.5 rounded-lg hover:bg-slate-800 transition-colors"
        >
          Essential Only
        </button>
        <button
          onClick={handleAccept}
          className="text-xs font-bold text-white bg-[#0B2E8D] hover:bg-[#133db5] px-4 py-2 rounded-lg shadow-sm transition-colors"
        >
          Accept All Cookies
        </button>
      </div>
    </aside>
  );
};

export default CookieConsent;
