"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND_CONFIG } from "@/config/brand";
import { Logo } from "@/components/Logo";
import { PRIMARY_LOANS, SECONDARY_LOANS, ALL_NAV_LOANS } from "@/config/navigation";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const [mobileLoansAccordionOpen, setMobileLoansAccordionOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 15;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLoansDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToApply = (e: React.MouseEvent) => {
    const formEl = document.getElementById("lead-form") || document.getElementById("lead-application-form");
    if (formEl) {
      e.preventDefault();
      formEl.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setLoansDropdownOpen(false);
    }
  };

  const scrollToTrack = (e: React.MouseEvent) => {
    const trackEl = document.getElementById("application-tracker");
    if (trackEl) {
      e.preventDefault();
      trackEl.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setLoansDropdownOpen(false);
    }
  };

  const isLoanActive = ALL_NAV_LOANS.some((item) => pathname === item.slug);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      {/* Top Quick Utility Bar (Navy Blue) */}
      <div className="bg-[#001A62] text-white py-1.5 px-4 md:px-8 text-xs font-medium border-b border-blue-900/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-[#B7C4FF] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px] text-[#BB0119]">call</span>
              <span className="font-bold">{BRAND_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={BRAND_CONFIG.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.127-.533-1.834-.759-3.003-2.617-3.094-2.738-.09-.121-.741-.987-.741-1.884 0-.897.469-1.339.636-1.52.167-.181.365-.226.486-.226.122 0 .243.002.349.006.111.005.26-.042.406.309.15.361.512 1.25.557 1.341.045.091.076.197.015.318-.061.121-.091.196-.182.303-.091.106-.192.237-.274.318-.09.09-.185.187-.079.369.106.182.471.777 1.01 1.258.694.619 1.28.811 1.462.902.182.091.289.076.395-.045.106-.122.456-.531.577-.713.122-.182.243-.152.41-.091.167.061 1.059.499 1.241.59.182.091.303.136.349.212.045.076.045.438-.099.843z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.399C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.153-.45-4.457-1.233l-.32-.191-2.943.83.846-2.868-.208-.33C4.12 15.148 3.6 13.616 3.6 12c0-4.632 3.768-8.4 8.4-8.4 4.633 0 8.4 3.768 8.4 8.4 0 4.633-3.767 8.4-8.4 8.4z" />
              </svg>
              <span>WhatsApp Chat</span>
            </a>
            <a
              href={`mailto:${BRAND_CONFIG.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#B7C4FF] transition-colors text-blue-200"
            >
              <span className="material-symbols-outlined text-[15px]">mail</span>
              <span>{BRAND_CONFIG.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 md:gap-6 text-blue-200 text-xs">
            <Link
              href="/credit-score"
              className="flex items-center gap-1 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">speed</span>
              <span>Free Credit Score</span>
            </Link>
            <Link
              href="/partner"
              className="hidden lg:flex items-center gap-1 text-amber-300 font-bold hover:text-amber-200 transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">handshake</span>
              <span>DSA Partner</span>
            </Link>
            <span className="hidden sm:flex items-center gap-1 text-[#B7C4FF]">
              <span className="material-symbols-outlined text-[15px] text-emerald-400">verified_user</span>
              <span>{BRAND_CONFIG.compliance.dpdp}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-slate-200"
            : "bg-white/95 backdrop-blur-sm border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center gap-2 lg:gap-4">
          {/* Brand Logo */}
          <div className="flex-shrink-0 mr-1 lg:mr-2">
            <Logo size="md" />
          </div>

          {/* Desktop Primary Navigation Links: Home, Loans ▾, EMI Calculator, Blog, About Us, Contact */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-bold text-slate-700">
            {/* 1. Home */}
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-xl transition-all ${
                pathname === "/"
                  ? "text-[#001A62] bg-blue-50/90 font-extrabold shadow-xs"
                  : "hover:text-[#001A62] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* 2. Loans ▾ (Consolidated Mega-Menu Dropdown) */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setLoansDropdownOpen(true)}
              onMouseLeave={() => setLoansDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setLoansDropdownOpen(!loansDropdownOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                  isLoanActive || loansDropdownOpen
                    ? "text-[#001A62] bg-blue-50/90 font-extrabold shadow-xs"
                    : "hover:text-[#001A62] hover:bg-slate-50"
                }`}
                aria-expanded={loansDropdownOpen}
              >
                <span>Loans</span>
                <span
                  className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                    loansDropdownOpen ? "rotate-180 text-[#0B2E8D]" : "text-slate-500"
                  }`}
                >
                  expand_more
                </span>
              </button>

              {/* Mega-Menu Dropdown (2-Column Responsive Grid) */}
              {loansDropdownOpen && (
                <div className="absolute top-full -left-16 xl:-left-24 w-[740px] xl:w-[780px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  
                  {/* 2-Column Products Grid */}
                  <div className="grid grid-cols-2 gap-4 pb-4">
                    
                    {/* Left Column: Primary Priority Focus (1. Professional, 2. Business, 3. Home, 4. LAP) */}
                    <div className="space-y-1.5 bg-slate-50/80 p-3 rounded-2xl border border-slate-100">
                      <div className="flex items-center justify-between px-2 py-1">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0B2E8D] flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">star</span>
                          Primary Priority Loans
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">Instant Sanction</span>
                      </div>

                      {PRIMARY_LOANS.map((item, idx) => (
                        <Link
                          key={item.id}
                          href={item.slug}
                          onClick={() => setLoansDropdownOpen(false)}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 group ${
                            pathname === item.slug
                              ? "bg-blue-100/70 border border-blue-200"
                              : "hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200/60"
                          }`}
                        >
                          <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0B2E8D] group-hover:bg-[#0B2E8D] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 shadow-2xs">
                            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold text-slate-900 group-hover:text-[#001A62] truncate">
                                {idx + 1}. {item.title}
                              </span>
                              {item.tag && (
                                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded border ${item.badgeColor}`}>
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {item.subText}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Right Column: Secondary Products (5. Machinery, 6. Urgent Cash, 7. Women Founders, 8. Working Capital) */}
                    <div className="space-y-1.5 bg-slate-50/80 p-3 rounded-2xl border border-slate-100">
                      <div className="flex items-center justify-between px-2 py-1">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">tune</span>
                          Specialized Financing
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">Custom Limits</span>
                      </div>

                      {SECONDARY_LOANS.map((item, idx) => (
                        <Link
                          key={item.id}
                          href={item.slug}
                          onClick={() => setLoansDropdownOpen(false)}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 group ${
                            pathname === item.slug
                              ? "bg-blue-100/70 border border-blue-200"
                              : "hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200/60"
                          }`}
                        >
                          <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-[#001A62] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 shadow-2xs">
                            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold text-slate-900 group-hover:text-[#001A62] truncate">
                                {idx + 5}. {item.title}
                              </span>
                              {item.tag && (
                                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded border ${item.badgeColor}`}>
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {item.subText}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                  </div>

                  {/* Dropdown Quick Utility Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between px-3 text-xs font-bold">
                    <div className="flex items-center gap-4">
                      <Link
                        href="/calculator"
                        onClick={() => setLoansDropdownOpen(false)}
                        className="inline-flex items-center gap-1.5 text-[#0B2E8D] hover:underline"
                      >
                        <span className="material-symbols-outlined text-[16px] text-blue-600">calculate</span>
                        <span>Smart EMI Calculator</span>
                      </Link>
                      <Link
                        href="/credit-score"
                        onClick={() => setLoansDropdownOpen(false)}
                        className="inline-flex items-center gap-1.5 text-emerald-700 hover:underline"
                      >
                        <span className="material-symbols-outlined text-[16px] text-emerald-600">speed</span>
                        <span>Check Free Credit Score</span>
                      </Link>
                    </div>

                    <Link
                      href="/apply"
                      onClick={() => setLoansDropdownOpen(false)}
                      className="inline-flex items-center gap-1 text-[#BB0119] hover:underline font-extrabold"
                    >
                      <span>Instant Eligibility Check →</span>
                    </Link>
                  </div>

                </div>
              )}
            </div>

            {/* 3. EMI Calculator (Feature Link) */}
            <Link
              href="/calculator"
              className={`px-3.5 py-2 rounded-xl transition-all inline-flex items-center gap-1.5 ${
                pathname === "/calculator"
                  ? "text-[#001A62] bg-blue-50/90 font-extrabold shadow-xs"
                  : "hover:text-[#001A62] hover:bg-slate-50"
              }`}
            >
              <span className="material-symbols-outlined text-[16px] text-[#0B2E8D]">calculate</span>
              <span>Calculator</span>
            </Link>

            {/* 4. Blog / Knowledge Hub (Feature Link) */}
            <Link
              href="/blog"
              className={`px-3.5 py-2 rounded-xl transition-all inline-flex items-center gap-1.5 ${
                pathname?.startsWith("/blog")
                  ? "text-[#001A62] bg-blue-50/90 font-extrabold shadow-xs"
                  : "hover:text-[#001A62] hover:bg-slate-50"
              }`}
            >
              <span className="material-symbols-outlined text-[16px] text-slate-500">article</span>
              <span>Blog</span>
            </Link>

            {/* 5. About Us */}
            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-xl transition-all ${
                pathname === "/about" || pathname === "/about-us"
                  ? "text-[#001A62] bg-blue-50/90 font-extrabold shadow-xs"
                  : "hover:text-[#001A62] hover:bg-slate-50"
              }`}
            >
              About Us
            </Link>

            {/* 6. Contact */}
            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-xl transition-all ${
                pathname === "/contact"
                  ? "text-[#001A62] bg-blue-50/90 font-extrabold shadow-xs"
                  : "hover:text-[#001A62] hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right-Aligned Action Group: [Track] & [APPLY NOW] */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/track-application"
              onClick={pathname === "/" ? scrollToTrack : undefined}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001A62] border border-[#001A62]/30 hover:border-[#001A62] bg-white hover:bg-slate-50 px-3.5 py-2.5 rounded-xl transition-all shadow-xs active:scale-95"
            >
              <span className="material-symbols-outlined text-[16px]">manage_search</span>
              <span>Track</span>
            </Link>
            <Link
              href="/apply"
              onClick={pathname === "/" ? scrollToApply : undefined}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#BB0119] to-[#E0292E] hover:from-[#9c0115] hover:to-[#BB0119] px-4.5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              <span>Apply Now</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#001A62] focus:outline-none rounded-xl hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 shadow-2xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2 font-semibold text-slate-800 text-sm">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-50 font-bold"
            >
              Home
            </Link>

            {/* 2. Loans ▾ Collapsible Accordion */}
            <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
              <button
                type="button"
                onClick={() => setMobileLoansAccordionOpen(!mobileLoansAccordionOpen)}
                className="w-full flex items-center justify-between p-3.5 bg-slate-100/70 text-slate-900 font-bold text-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#0B2E8D]">account_balance</span>
                  <span>Loans &amp; Financing (8)</span>
                </div>
                <span
                  className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${
                    mobileLoansAccordionOpen ? "rotate-180 text-[#0B2E8D]" : "text-slate-500"
                  }`}
                >
                  expand_more
                </span>
              </button>

              {mobileLoansAccordionOpen && (
                <div className="p-2 space-y-1 bg-white">
                  {/* Primary Priority Loans (1-4) */}
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#0B2E8D] px-3 pt-2">
                    Primary Priority Focus
                  </div>
                  {PRIMARY_LOANS.map((prod, idx) => (
                    <Link
                      key={prod.id}
                      href={prod.slug}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-blue-50 text-slate-800"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="material-symbols-outlined text-[18px] text-[#0B2E8D]">
                          {prod.icon}
                        </span>
                        <span className="text-xs font-bold truncate">
                          {idx + 1}. {prod.title}
                        </span>
                      </div>
                      {prod.tag && (
                        <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded border ${prod.badgeColor}`}>
                          {prod.tag}
                        </span>
                      )}
                    </Link>
                  ))}

                  {/* Secondary Loans (5-8) */}
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 px-3 pt-3">
                    Specialized Solutions
                  </div>
                  {SECONDARY_LOANS.map((prod, idx) => (
                    <Link
                      key={prod.id}
                      href={prod.slug}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="material-symbols-outlined text-[18px] text-slate-500">
                          {prod.icon}
                        </span>
                        <span className="text-xs font-medium truncate">
                          {idx + 5}. {prod.title}
                        </span>
                      </div>
                      {prod.tag && (
                        <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded border ${prod.badgeColor}`}>
                          {prod.tag}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Calculator */}
            <Link
              href="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-slate-50 font-bold text-slate-800"
            >
              <span className="material-symbols-outlined text-[18px] text-[#0B2E8D]">calculate</span>
              <span>EMI Calculator</span>
            </Link>

            {/* 4. Blog */}
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-slate-50 font-bold text-slate-800"
            >
              <span className="material-symbols-outlined text-[18px] text-slate-500">article</span>
              <span>Blog &amp; Knowledge Hub</span>
            </Link>

            {/* 5. About Us */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-50 font-bold"
            >
              About Us
            </Link>

            {/* 6. Contact */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-50 font-bold"
            >
              Contact
            </Link>

            {/* Utility Tools */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              <Link
                href="/credit-score"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold"
              >
                <span className="material-symbols-outlined text-[16px]">speed</span>
                <span>Free Credit Score</span>
              </Link>
              <Link
                href="/partner"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-amber-50 text-amber-800 text-xs font-bold"
              >
                <span className="material-symbols-outlined text-[16px]">handshake</span>
                <span>DSA Partner</span>
              </Link>
            </div>

            {/* Mobile Action Group: [WhatsApp Chat], [Track], & [Apply Now] */}
            <div className="pt-3 flex flex-col gap-2 border-t border-slate-100">
              <a
                href={BRAND_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-xs transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.127-.533-1.834-.759-3.003-2.617-3.094-2.738-.09-.121-.741-.987-.741-1.884 0-.897.469-1.339.636-1.52.167-.181.365-.226.486-.226.122 0 .243.002.349.006.111.005.26-.042.406.309.15.361.512 1.25.557 1.341.045.091.076.197.015.318-.061.121-.091.196-.182.303-.091.106-.192.237-.274.318-.09.09-.185.187-.079.369.106.182.471.777 1.01 1.258.694.619 1.28.811 1.462.902.182.091.289.076.395-.045.106-.122.456-.531.577-.713.122-.182.243-.152.41-.091.167.061 1.059.499 1.241.59.182.091.303.136.349.212.045.076.045.438-.099.843z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.399C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.153-.45-4.457-1.233l-.32-.191-2.943.83.846-2.868-.208-.33C4.12 15.148 3.6 13.616 3.6 12c0-4.632 3.768-8.4 8.4-8.4 4.633 0 8.4 3.768 8.4 8.4 0 4.633-3.767 8.4-8.4 8.4z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/track-application"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (pathname === "/") scrollToTrack(e);
                }}
                className="w-full text-center py-2.5 text-xs font-bold text-[#001A62] border border-[#001A62] rounded-xl"
              >
                Track Loan Application
              </Link>
              <Link
                href="/apply"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (pathname === "/") scrollToApply(e);
                }}
                className="w-full text-center py-2.5 text-xs font-black uppercase tracking-wider text-white bg-[#BB0119] rounded-xl shadow"
              >
                Apply for Loan
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
