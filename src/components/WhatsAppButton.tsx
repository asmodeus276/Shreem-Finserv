"use client";

import React, { useState, useEffect } from "react";
import { BRAND_CONFIG } from "@/config/brand";

interface QuickOption {
  label: string;
  msg: string;
  icon: string;
}

const QUICK_OPTIONS: QuickOption[] = [
  {
    label: "Doctor Loan (9.99%)",
    msg: "Hi Shreem Finserv, I am interested in Personal Loan for Doctors. Please share eligibility details.",
    icon: "medical_services",
  },
  {
    label: "MSME Working Capital",
    msg: "Hi Shreem Finserv, I need unsecured business working capital for my enterprise.",
    icon: "storefront",
  },
  {
    label: "Loan Against Property",
    msg: "Hi Shreem Finserv, I want to explore Loan Against Property at low interest rates.",
    icon: "real_estate_agent",
  },
  {
    label: "Urgent 2-Hour Cash",
    msg: "Hi Shreem Finserv, I need an urgent cash advance. Please guide me on instant approval.",
    icon: "bolt",
  },
];

export const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  const cleanPhone = BRAND_CONFIG.phone.replace(/[^0-9]/g, "");

  useEffect(() => {
    // Show button after 1.2s
    const timer = setTimeout(() => setIsVisible(true), 1200);

    // Auto trigger friendly popup after 6s once per session
    const popupTimer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("wa_popup_dismissed");
      if (!dismissed) {
        setChatOpen(true);
        setHasAutoOpened(true);
      }
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(popupTimer);
    };
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setChatOpen(false);
    sessionStorage.setItem("wa_popup_dismissed", "true");
  };

  const sendWhatsApp = (messageText: string) => {
    const text = encodeURIComponent(messageText);
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, "_blank", "noopener,noreferrer");
    setChatOpen(false);
    sessionStorage.setItem("wa_popup_dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex flex-col items-end">
      {/* Interactive Chat Popup Card */}
      {chatOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden animate-fade-in-up transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#001A62] via-[#0B2E8D] to-[#001A62] p-4 text-white flex items-center justify-between relative overflow-hidden">
            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center font-bold text-white border border-white/30 text-sm">
                  SF
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#001A62] rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-bold text-sm leading-tight">
                  <span>Shreem Advisory Desk</span>
                  <span className="material-symbols-outlined text-[16px] text-emerald-400">verified</span>
                </div>
                <p className="text-[11px] text-blue-200 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Replies typically in &lt; 2 minutes
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="relative z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close Chat Popup"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            {/* Agent Bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm border border-slate-200/70 shadow-xs text-xs text-slate-700 leading-relaxed space-y-1.5">
              <p className="font-semibold text-slate-900">
                Namaste! 🙏 Welcome to {BRAND_CONFIG.name}.
              </p>
              <p className="text-slate-600">
                Looking for loan interest rates or instant pre-sanction? Select your requirement below to chat with a Senior Underwriter directly:
              </p>
            </div>

            {/* Quick Action Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block px-1">
                Quick Inquiries:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {QUICK_OPTIONS.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => sendWhatsApp(opt.msg)}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200/80 text-xs font-semibold text-slate-800 transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#0B2E8D] group-hover:text-emerald-600">
                        {opt.icon}
                      </span>
                      <span>{opt.label}</span>
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all">
                      arrow_forward
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input Field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (customMsg.trim()) {
                  sendWhatsApp(customMsg.trim());
                }
              }}
              className="pt-2 flex items-center gap-2"
            >
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Or type custom query..."
                className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0B2E8D] focus:ring-1 focus:ring-[#0B2E8D]"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center flex-shrink-0 shadow-sm hover:scale-105 active:scale-95 transition-all"
                aria-label="Send via WhatsApp"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center gap-2">
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="hidden md:flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-xl border border-slate-800 hover:bg-slate-900 hover:scale-105 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Need Loan Advice? <strong className="text-emerald-400">Chat Now</strong></span>
          </button>
        )}

        <button
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Toggle WhatsApp Chat"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 cursor-pointer"
        >
          {/* Radar Pulse Effect */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-70 animate-ping pointer-events-none"></span>

          {chatOpen ? (
            <span className="material-symbols-outlined text-2xl relative z-10">close</span>
          ) : (
            <svg
              className="w-8 h-8 relative z-10 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.127-.533-1.834-.759-3.003-2.617-3.094-2.738-.09-.121-.741-.987-.741-1.884 0-.897.469-1.339.636-1.52.167-.181.365-.226.486-.226.122 0 .243.002.349.006.111.005.26-.042.406.309.15.361.512 1.25.557 1.341.045.091.076.197.015.318-.061.121-.091.196-.182.303-.091.106-.192.237-.274.318-.09.09-.185.187-.079.369.106.182.471.777 1.01 1.258.694.619 1.28.811 1.462.902.182.091.289.076.395-.045.106-.122.456-.531.577-.713.122-.182.243-.152.41-.091.167.061 1.059.499 1.241.59.182.091.303.136.349.212.045.076.045.438-.099.843z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.399C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.153-.45-4.457-1.233l-.32-.191-2.943.83.846-2.868-.208-.33C4.12 15.148 3.6 13.616 3.6 12c0-4.632 3.768-8.4 8.4-8.4 4.633 0 8.4 3.768 8.4 8.4 0 4.633-3.767 8.4-8.4 8.4z" />
            </svg>
          )}

          {/* Online Indicator Badge */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-300 border-2 border-white rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
