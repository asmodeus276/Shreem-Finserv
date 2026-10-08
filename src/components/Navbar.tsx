"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND_CONFIG } from "@/config/brand";
import { Logo } from "@/components/Logo";

// Top Header Navigation Links matching capitalneed.com
const TOP_NAV_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Partner Login", href: "/partner" },
  { label: "Blogs", href: "/blog" },
  { label: "Career", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export interface SubMenuLink {
  label: string;
  href: string;
  desc?: string;
  badge?: string;
  icon?: string;
}

export interface LoanItemConfig {
  id: string;
  label: string;
  href: string;
  subLinks?: SubMenuLink[];
}

export const LOAN_NAV_ITEMS: LoanItemConfig[] = [
  {
    id: "professional-loan",
    label: "Professional Loan",
    href: "/professional-loan",
    subLinks: [
      {
        label: "Doctor Loan (Medical Practitioners)",
        href: "/professional-loan/doctor-loan",
        desc: "Up to ₹75 Lakhs collateral-free for clinic expansion & medical equipment @ 11.99% p.a.",
        badge: "Specialized",
        icon: "stethoscope",
      },
      {
        label: "CA Loan (Chartered Accountants)",
        href: "/professional-loan/ca-loan",
        desc: "Up to ₹75 Lakhs collateral-free for office expansion & working capital @ 13.00% p.a.",
        badge: "Specialized",
        icon: "calculate",
      },
      {
        label: "Professional Loan Overview",
        href: "/professional-loan",
        desc: "Explore all professional financing solutions, eligibility & features.",
        icon: "account_balance",
      },
    ],
  },
  {
    id: "business-loan",
    label: "Business Loan",
    href: "/business-loan",
  },
  {
    id: "home-loan",
    label: "Home Loan",
    href: "/home-loan",
  },
  {
    id: "loan-against-property",
    label: "Loan Against Property",
    href: "/loan-against-property",
  },
  {
    id: "personal-loan",
    label: "Personal Loan",
    href: "/personal-loan",
  },
  {
    id: "working-capital",
    label: "Working Capital",
    href: "/working-capital",
  },
  {
    id: "car-loan",
    label: "Car Loan",
    href: "/car-loan",
  },
  {
    id: "education-loan",
    label: "Education Loan",
    href: "/education-loan",
  },
  {
    id: "machinery-loan",
    label: "Machinery Loan",
    href: "/machinery-loan",
  },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLoansAccordionOpen, setMobileLoansAccordionOpen] = useState(true);
  const [mobileProfLoanOpen, setMobileProfLoanOpen] = useState(true);

  // Professional Loan Dropdown state
  const [profDropdownOpen, setProfDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const desktopDropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileDropdownRef = useRef<HTMLDivElement | null>(null);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setProfDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Click outside and Escape key handler
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        profDropdownOpen &&
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(target) &&
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(target)
      ) {
        setProfDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setProfDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [profDropdownOpen]);

  const handleProfMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setProfDropdownOpen(true);
  };

  const handleProfMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setProfDropdownOpen(false);
    }, 200);
  };

  const toggleProfDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!profDropdownOpen) {
      setMobileMenuOpen(false);
    }
    setProfDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    if (!mobileMenuOpen) {
      setProfDropdownOpen(false);
    }
    setMobileMenuOpen((prev) => !prev);
  };

  const scrollToApply = (e: React.MouseEvent) => {
    const formEl = document.getElementById("lead-form") || document.getElementById("lead-application-form");
    if (formEl) {
      e.preventDefault();
      formEl.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setProfDropdownOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 shadow-md bg-white">
      {/* Tier 1: Top Header Bar (White Background) */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-18 md:h-20 flex justify-between items-center">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Right-Aligned Navigation & Red Pill [Apply Now] Button */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Top Nav Links */}
            <nav className="flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-semibold text-slate-700">
              {TOP_NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href === "/about-us" && pathname === "/about");
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`transition-colors duration-150 py-1 hover:text-[#0B309A] ${
                      isActive ? "text-[#0B309A] font-bold" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Red Pill [Apply Now] Button matching brand */}
            <Link
              href="/apply"
              onClick={pathname === "/" ? scrollToApply : undefined}
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#E30613] hover:bg-[#FF1A27] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
              className="p-2 text-[#E30613] hover:bg-red-50 rounded-lg flex items-center justify-center"
              aria-label="Call hotline"
            >
              <span className="material-symbols-outlined text-[24px]">call</span>
            </a>
            
            <Link
              href="/apply"
              onClick={pathname === "/" ? scrollToApply : undefined}
              className="px-3.5 py-1.5 rounded-full bg-[#E30613] text-white font-bold text-[11px] uppercase tracking-wider shadow-xs"
            >
              Apply
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="p-2 text-slate-700 hover:text-[#0B309A] focus:outline-none rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2: Sub-Header Bar (Full-Width Royal Blue Strip #0B309A) */}
      <div className="relative w-full bg-[#0B309A] text-white border-t border-blue-900/40 shadow-inner z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between py-1.5 sm:py-2">
          
          {/* Horizontal Loan Links Row */}
          <nav className="flex-1 min-w-0 flex items-center gap-1 sm:gap-1.5 xl:gap-2 2xl:gap-2.5 text-xs sm:text-[12.5px] 2xl:text-[13px] font-medium whitespace-nowrap overflow-x-auto no-scrollbar scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 pr-2">
            {LOAN_NAV_ITEMS.map((item, idx) => {
              const isCurrentActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));

              // Professional Loan with Dropdown
              if (item.subLinks) {
                return (
                  <div
                    key={item.id}
                    ref={desktopDropdownRef}
                    className="relative flex-shrink-0"
                    onMouseEnter={handleProfMouseEnter}
                    onMouseLeave={handleProfMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={toggleProfDropdown}
                      className={`flex-shrink-0 px-2.5 py-1.5 rounded-md transition-all duration-150 flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                        isCurrentActive
                          ? "text-white font-bold bg-white/15 underline underline-offset-4 decoration-2"
                          : profDropdownOpen
                          ? "text-white font-bold bg-white/20"
                          : "text-blue-100 hover:text-white hover:bg-white/10"
                      }`}
                      aria-expanded={profDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <span
                        className={`material-symbols-outlined text-[15px] transition-transform duration-200 ${
                          profDropdownOpen ? "rotate-180 text-amber-300" : "text-blue-200"
                        }`}
                      >
                        expand_more
                      </span>
                    </button>

                    {/* Dedicated Desktop-Only Dropdown (anchored to button, visible on lg+ screens) */}
                    {profDropdownOpen && (
                      <div
                        className="hidden lg:block absolute left-0 top-full pt-1.5 z-50 w-80 sm:w-96 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-150"
                        onMouseEnter={handleProfMouseEnter}
                        onMouseLeave={handleProfMouseLeave}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 text-slate-800 space-y-1.5">
                          <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center justify-between border-b border-slate-100 pb-2">
                            <span>Specialized Professional Loans</span>
                            <span className="text-emerald-600 font-bold">Fast Approval</span>
                          </div>

                          {item.subLinks.map((sub, sIdx) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sIdx}
                                href={sub.href}
                                onClick={() => setProfDropdownOpen(false)}
                                className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group ${
                                  isSubActive
                                    ? "bg-blue-50/80 text-[#0B309A]"
                                    : "hover:bg-slate-50 text-slate-800 hover:text-[#0B309A]"
                                }`}
                              >
                                <div className="p-2 rounded-lg bg-blue-50 text-[#0B309A] group-hover:bg-[#0B309A] group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                                  <span className="material-symbols-outlined text-[18px]">
                                    {sub.icon || "medical_services"}
                                  </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-bold text-slate-900 group-hover:text-[#0B309A]">
                                      {sub.label}
                                    </span>
                                    {sub.badge && (
                                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-red-100 text-[#E30613]">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </div>
                                  {sub.desc && (
                                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mt-0.5">
                                      {sub.desc}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            );
                          })}

                          <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-2">
                            <Link
                              href="/professional-loan#rates-section"
                              onClick={() => setProfDropdownOpen(false)}
                              className="text-[11px] font-semibold text-slate-500 hover:text-[#0B309A]"
                            >
                              Check Rates &rarr;
                            </Link>
                            <Link
                              href="/apply"
                              onClick={() => setProfDropdownOpen(false)}
                              className="px-3 py-1 bg-[#0B309A] hover:bg-[#082475] text-white text-[11px] font-bold rounded-lg shadow-xs"
                            >
                              Apply Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Direct Link for all other loan products (Business Loan, Home Loan, LAP, Personal Loan, Working Capital, etc.)
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex-shrink-0 px-2.5 py-1.5 rounded-md transition-all duration-150 flex items-center gap-1 whitespace-nowrap ${
                    idx === LOAN_NAV_ITEMS.length - 1 ? "mr-4 md:mr-0" : ""
                  } ${
                    isCurrentActive
                      ? "text-white font-bold bg-white/15 underline underline-offset-4 decoration-2"
                      : "text-blue-100 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Red Pill Hotline Button matching brand (+91 87450 03840) */}
          <div className="hidden xl:flex items-center pl-4 flex-shrink-0">
            <a
              href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E30613] hover:bg-[#FF1A27] text-white text-xs font-bold tracking-wide shadow-sm transition-transform hover:scale-105 whitespace-nowrap flex-shrink-0"
            >
              <span className="material-symbols-outlined text-[14px]">call</span>
              <span className="whitespace-nowrap">{BRAND_CONFIG.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Professional Loan Dropdown (Placed outside overflow-x-auto container so it is NEVER clipped on mobile) */}
      {profDropdownOpen && (
        <div
          ref={mobileDropdownRef}
          className="lg:hidden fixed inset-x-0 top-[110px] sm:top-[116px] px-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-[2px] -z-10"
            onClick={() => setProfDropdownOpen(false)}
            aria-hidden="true"
          />

          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-3.5 text-slate-800 space-y-2 max-w-md mx-auto max-h-[calc(100vh-130px)] overflow-y-auto">
            <div className="px-2 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="material-symbols-outlined text-[16px] text-[#0B309A]">medical_services</span>
                <span>Specialized Professional Loans</span>
              </span>
              <button
                type="button"
                onClick={() => setProfDropdownOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {LOAN_NAV_ITEMS.find((item) => item.id === "professional-loan")?.subLinks?.map((sub, sIdx) => {
              const isSubActive = pathname === sub.href;
              return (
                <Link
                  key={sIdx}
                  href={sub.href}
                  onClick={() => setProfDropdownOpen(false)}
                  className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                    isSubActive
                      ? "bg-blue-50 text-[#0B309A] font-medium"
                      : "active:bg-slate-100 hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-[#0B309A] flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">
                      {sub.icon || "medical_services"}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-bold text-slate-900">
                        {sub.label}
                      </span>
                      {sub.badge && (
                        <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-red-100 text-[#E30613]">
                          {sub.badge}
                        </span>
                      )}
                    </div>
                    {sub.desc && (
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mt-0.5">
                        {sub.desc}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-1">
              <Link
                href="/professional-loan#rates-section"
                onClick={() => setProfDropdownOpen(false)}
                className="text-xs font-semibold text-slate-600 hover:text-[#0B309A] py-1"
              >
                Check Rates &rarr;
              </Link>
              <Link
                href="/apply"
                onClick={() => setProfDropdownOpen(false)}
                className="px-4 py-1.5 bg-[#E30613] hover:bg-[#FF1A27] text-white text-xs font-bold rounded-lg shadow-xs"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 shadow-2xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2 font-semibold text-slate-800 text-sm">
            
            {/* Top Quick Links */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 font-bold"
            >
              Home
            </Link>

            {/* Loan Categories Accordion */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
              <button
                type="button"
                onClick={() => setMobileLoansAccordionOpen(!mobileLoansAccordionOpen)}
                className="w-full flex items-center justify-between p-3 bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#0B309A]">account_balance</span>
                  <span>Loan Products ({LOAN_NAV_ITEMS.length})</span>
                </div>
                <span
                  className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                    mobileLoansAccordionOpen ? "rotate-180 text-[#0B309A]" : "text-slate-500"
                  }`}
                >
                  expand_more
                </span>
              </button>

              {mobileLoansAccordionOpen && (
                <div className="p-2 space-y-1 bg-white">
                  {LOAN_NAV_ITEMS.map((item) => {
                    // Professional loan with subpage links
                    if (item.subLinks) {
                      return (
                        <div key={item.id} className="border border-blue-100 rounded-lg overflow-hidden bg-blue-50/20">
                          <button
                            type="button"
                            onClick={() => setMobileProfLoanOpen(!mobileProfLoanOpen)}
                            className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-[#0B309A] hover:bg-blue-50 transition-colors"
                          >
                            <span className="flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[16px]">medical_services</span>
                              <span>{item.label}</span>
                            </span>
                            <span
                              className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${
                                mobileProfLoanOpen ? "rotate-180" : ""
                              }`}
                            >
                              expand_more
                            </span>
                          </button>

                          {mobileProfLoanOpen && (
                            <div className="pl-4 pr-2 py-1.5 space-y-1 bg-white border-t border-blue-100 text-xs">
                              {item.subLinks.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  href={sub.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`flex items-center justify-between py-1.5 px-2 rounded-md ${
                                    pathname === sub.href
                                      ? "bg-blue-50 font-bold text-[#0B309A]"
                                      : "text-slate-700 hover:text-[#0B309A] hover:bg-slate-50"
                                  }`}
                                >
                                  <span>{sub.label}</span>
                                  {sub.badge && (
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-[#E30613]">
                                      {sub.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Direct link for other loan products
                    const isItemActive = pathname === item.href;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                          isItemActive
                            ? "bg-blue-50 text-[#0B309A] font-bold"
                            : "text-slate-700 hover:bg-slate-50 hover:text-[#0B309A]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {TOP_NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 font-bold text-slate-800 text-xs"
              >
                {link.label}
              </Link>
            ))}

            {/* Utility Links */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              <Link
                href="/calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-blue-50 text-[#0B309A] text-xs font-bold"
              >
                <span className="material-symbols-outlined text-[15px]">calculate</span>
                <span>EMI Calc</span>
              </Link>
              <Link
                href="/credit-score"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold"
              >
                <span className="material-symbols-outlined text-[15px]">speed</span>
                <span>Credit Score</span>
              </Link>
            </div>

            {/* Mobile Contact & Apply Group */}
            <div className="pt-3 flex flex-col gap-2 border-t border-slate-100">
              <a
                href={BRAND_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.127-.533-1.834-.759-3.003-2.617-3.094-2.738-.09-.121-.741-.987-.741-1.884 0-.897.469-1.339.636-1.52.167-.181.365-.226.486-.226.122 0 .243.002.349.006.111.005.26-.042.406.309.15.361.512 1.25.557 1.341.045.091.076.197.015.318-.061.121-.091.196-.182.303-.091.106-.192.237-.274.318-.09.09-.185.187-.079.369.106.182.471.777 1.01 1.258.694.619 1.28.811 1.462.902.182.091.289.076.395-.045.106-.122.456-.531.577-.713.122-.182.243-.152.41-.091.167.061 1.059.499 1.241.59.182.091.303.136.349.212.045.076.045.438-.099.843z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.399C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.153-.45-4.457-1.233l-.32-.191-2.943.83.846-2.868-.208-.33C4.12 15.148 3.6 13.616 3.6 12c0-4.632 3.768-8.4 8.4-8.4 4.633 0 8.4 3.768 8.4 8.4 0 4.633-3.767 8.4-8.4 8.4z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
                className="w-full text-center py-2.5 text-xs font-bold text-[#0B309A] border border-[#0B309A] rounded-xl flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Call: {BRAND_CONFIG.phoneDisplay}</span>
              </a>

              <Link
                href="/apply"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (pathname === "/") scrollToApply(e);
                }}
                className="w-full text-center py-2.5 text-xs font-black uppercase tracking-wider text-white bg-[#E30613] hover:bg-[#FF1A27] rounded-xl shadow"
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
