"use client";

import React, { useState, useEffect } from "react";

export const BackToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-20 md:bottom-6 left-4 md:left-6 z-40 p-3 rounded-full bg-slate-900/90 hover:bg-[#001A62] text-white shadow-xl backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
    >
      <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:-translate-y-1">
        arrow_upward
      </span>
    </button>
  );
};

export default BackToTop;
