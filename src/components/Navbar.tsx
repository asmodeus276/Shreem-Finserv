"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND_CONFIG } from "@/config/brand";
import { Logo } from "@/components/Logo";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToApply = (e: React.MouseEvent) => {
    const formEl = document.getElementById("lead-application-form");
    if (formEl) {
      e.preventDefault();
      formEl.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setMegaMenuOpen(false);
    }
  };

  const scrollToTrack = (e: React.MouseEvent) => {
    const trackEl = document.getElementById("application-tracker");
    if (trackEl) {
      e.preventDefault();
      trackEl.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setMegaMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      
      {/* Top Quick Bar (Navy Blue) */}
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
              href={`mailto:${BRAND_CONFIG.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-[#B7C4FF] transition-colors text-blue-200"
            >
              <span className="material-symbols-outlined text-[15px]">mail</span>
              <span>{BRAND_CONFIG.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 md:gap-6 text-blue-200">
            <Link
              href="/credit-score"
              className="hidden md:flex items-center gap-1 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">speed</span>
              <span>Free Credit Score</span>
            </Link>
            <Link
              href="/partner"
              className="hidden lg:flex items-center gap-1 text-amber-300 font-bold hover:text-amber-200 transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">handshake</span>
              <span>Become a Partner</span>
            </Link>
            <span className="flex items-center gap-1 text-[#B7C4FF]">
              <span className="material-symbols-outlined text-[15px] text-emerald-400">verified_user</span>
              <span>{BRAND_CONFIG.compliance.dpdp}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar (White Tier with Mega Menu) */}
      <div
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-slate-200"
            : "bg-white/90 backdrop-blur-sm border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center gap-6">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 mr-4 lg:mr-8">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-semibold">
            <Link
              href="/"
              className={`transition-colors py-2 ${
                pathname === "/" ? "text-[#001A62] border-b-2 border-[#001A62]" : "text-slate-600 hover:text-[#001A62]"
              }`}
            >
              Home
            </Link>

            {/* Mega Menu Products Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className={`flex items-center gap-1 py-2 transition-colors ${
                  pathname.includes("/personal-loan") ||
                  pathname.includes("/business-loan") ||
                  pathname.includes("/loan-against") ||
                  pathname.includes("/machinery")
                    ? "text-[#001A62] font-bold"
                    : "text-slate-600 hover:text-[#001A62]"
                }`}
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              >
                <span>All Loan Products</span>
                <span className="material-symbols-outlined text-[18px]">
                  {megaMenuOpen ? "expand_less" : "expand_more"}
                </span>
              </button>

              {/* Mega Menu Dropdown Panel */}
              {megaMenuOpen && (
                <div className="absolute top-full -left-20 w-[660px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 z-50 grid grid-cols-2 gap-4 animate-fade-in-up">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-2">
                      Personal & Professional
                    </span>
                    <Link
                      href="/personal-loan/for-doctors"
                      onClick={() => setMegaMenuOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/80 text-slate-700 hover:text-[#001A62] transition-all group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0B2E8D] group-hover/item:bg-[#0B2E8D] group-hover/item:text-white transition-colors flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[22px]">medical_services</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900 group-hover/item:text-[#0B2E8D]">Personal Loans for Doctors</div>
                        <div className="text-xs text-slate-500">Up to ₹50L | Starting 9.99% p.a.</div>
                      </div>
                    </Link>
                    <Link
                      href="/personal-loan/urgent-cash"
                      onClick={() => setMegaMenuOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-red-50/80 text-slate-700 hover:text-[#BB0119] transition-all group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#BB0119] group-hover/item:bg-[#BB0119] group-hover/item:text-white transition-colors flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[22px]">bolt</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900 group-hover/item:text-[#BB0119]">Urgent Cash Advance</div>
                        <div className="text-xs text-slate-500">Fast 2-hour emergency disbursal</div>
                      </div>
                    </Link>
                    <Link
                      href="/business-loan/for-women"
                      onClick={() => setMegaMenuOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50/80 text-slate-700 hover:text-purple-700 transition-all group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[22px]">diversity_3</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900 group-hover/item:text-purple-700">Loans for Women Founders</div>
                        <div className="text-xs text-slate-500">0.5% Special Interest Subsidy</div>
                      </div>
                    </Link>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-2">
                      Business & Secured Asset Loans
                    </span>
                    <Link
                      href="/business-loan/msme-working-capital"
                      onClick={() => setMegaMenuOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/80 text-slate-700 hover:text-emerald-700 transition-all group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[22px]">storefront</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900 group-hover/item:text-emerald-700">MSME Working Capital</div>
                        <div className="text-xs text-slate-500">Up to ₹2 Crore credit lines</div>
                      </div>
                    </Link>
                    <Link
                      href="/loan-against-property"
                      onClick={() => setMegaMenuOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-amber-50/80 text-slate-700 hover:text-amber-700 transition-all group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[22px]">real_estate_agent</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900 group-hover/item:text-amber-700">Loan Against Property</div>
                        <div className="text-xs text-slate-500">Up to ₹15 Crore | 15 Yrs Tenure</div>
                      </div>
                    </Link>
                    <Link
                      href="/machinery-loan"
                      onClick={() => setMegaMenuOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/80 text-slate-700 hover:text-[#0B2E8D] transition-all group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0B2E8D] group-hover/item:bg-[#0B2E8D] group-hover/item:text-white transition-colors flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[22px]">precision_manufacturing</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900 group-hover/item:text-[#0B2E8D]">Machinery & Equipment</div>
                        <div className="text-xs text-slate-500">90% invoice financing</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/calculator"
              className={`transition-colors py-2 ${
                pathname === "/calculator" ? "text-[#001A62] border-b-2 border-[#001A62]" : "text-slate-600 hover:text-[#001A62]"
              }`}
            >
              EMI Calculator
            </Link>

            <Link
              href="/credit-score"
              className={`transition-colors py-2 ${
                pathname === "/credit-score" ? "text-emerald-700 font-bold border-b-2 border-emerald-600" : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              Credit Score
            </Link>

            <Link
              href="/blog"
              className={`transition-colors py-2 ${
                pathname.startsWith("/blog") ? "text-[#001A62] border-b-2 border-[#001A62] font-bold" : "text-slate-600 hover:text-[#001A62]"
              }`}
            >
              Knowledge Hub
            </Link>

            <Link
              href="/partner"
              className={`transition-colors py-2 ${
                pathname === "/partner" ? "text-[#001A62] border-b-2 border-[#001A62]" : "text-slate-600 hover:text-[#001A62]"
              }`}
            >
              DSA Partner
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#application-tracker"
              onClick={scrollToTrack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#001A62] border border-[#001A62]/30 hover:border-[#001A62] bg-white hover:bg-slate-50 px-4 py-2.5 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">manage_search</span>
              Track Application
            </a>
            <a
              href="#lead-application-form"
              onClick={scrollToApply}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#BB0119] hover:bg-[#E0292E] px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-700 hover:text-[#001A62] focus:outline-none"
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
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-6 shadow-2xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-3 font-semibold text-slate-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Home
            </Link>
            
            <Link
              href="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 text-blue-800"
            >
              EMI Calculator
            </Link>

            <Link
              href="/credit-score"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 text-emerald-700"
            >
              Free Credit Score Check
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 text-[#0B2E8D]"
            >
              Knowledge Hub &amp; Guides
            </Link>

            <Link
              href="/partner"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 text-amber-700"
            >
              Become a Partner (Earn ₹1L/mo)
            </Link>

            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700"
            >
              Careers &amp; Openings
            </Link>

            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold px-3 pt-2">
              Loan Products
            </div>
            {BRAND_CONFIG.products.map((prod) => (
              <Link
                key={prod.id}
                href={prod.slug}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#001A62]"
              >
                <span className="material-symbols-outlined text-[18px] text-[#0B2E8D]">{prod.icon}</span>
                <span>{prod.title}</span>
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-2 border-t border-slate-100">
              <a
                href="#application-tracker"
                onClick={scrollToTrack}
                className="w-full text-center py-2.5 text-xs font-semibold text-[#001A62] border border-[#001A62] rounded-lg"
              >
                Track Loan Application
              </a>
              <a
                href="#lead-application-form"
                onClick={scrollToApply}
                className="w-full text-center py-2.5 text-xs font-semibold text-white bg-[#BB0119] rounded-lg shadow"
              >
                Apply for Loan
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
