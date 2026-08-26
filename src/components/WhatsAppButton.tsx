"use client";

import React, { useState, useEffect } from "react";
import { BRAND_CONFIG } from "@/config/brand";

export const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    // Show after 2 seconds or on scroll
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const cleanPhone = BRAND_CONFIG.phone.replace(/[^0-9]/g, "");
  const defaultMessage = encodeURIComponent(
    "Hi Shreem Finserv, I need advice regarding a loan for my requirement. Please assist me."
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${defaultMessage}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex items-center group">
      {/* Tooltip on Desktop hover */}
      <div
        className={`hidden md:block mr-3 bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-xl border border-slate-800 transition-all duration-300 ${
          tooltipOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0"
        }`}
      >
        <div className="font-bold text-emerald-400">Need Instant Loan Help?</div>
        <div className="text-[11px] text-slate-300">Chat with a Senior Credit Manager</div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shreem Finserv on WhatsApp"
        onMouseEnter={() => setTooltipOpen(true)}
        onMouseLeave={() => setTooltipOpen(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-70 animate-ping"></span>
        
        {/* WhatsApp Vector Icon */}
        <svg
          className="w-8 h-8 relative z-10 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.127-.533-1.834-.759-3.003-2.617-3.094-2.738-.09-.121-.741-.987-.741-1.884 0-.897.469-1.339.636-1.52.167-.181.365-.226.486-.226.122 0 .243.002.349.006.111.005.26-.042.406.309.15.361.512 1.25.557 1.341.045.091.076.197.015.318-.061.121-.091.196-.182.303-.091.106-.192.237-.274.318-.09.09-.185.187-.079.369.106.182.471.777 1.01 1.258.694.619 1.28.811 1.462.902.182.091.289.076.395-.045.106-.122.456-.531.577-.713.122-.182.243-.152.41-.091.167.061 1.059.499 1.241.59.182.091.303.136.349.212.045.076.045.438-.099.843z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.399C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 Ra 2zm0 18.2c-1.637 0-3.153-.45-4.457-1.233l-.32-.191-2.943.83.846-2.868-.208-.33C4.12 15.148 3.6 13.616 3.6 12c0-4.632 3.768-8.4 8.4-8.4 4.633 0 8.4 3.768 8.4 8.4 0 4.633-3.767 8.4-8.4 8.4z" />
        </svg>

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-300 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
