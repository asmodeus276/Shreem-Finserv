import React from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { Logo } from "@/components/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001A62] text-white pt-16 pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/60">
          
          {/* Brand Info & Address */}
          <div className="space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-blue-200/90 leading-relaxed max-w-sm pt-2">
              {BRAND_CONFIG.address}
            </p>
            <div className="space-y-1.5 text-xs text-blue-200/80 pt-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-blue-300">call</span>
                <a href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                  {BRAND_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-blue-300">mail</span>
                <a href={`mailto:${BRAND_CONFIG.email}`} className="hover:text-white transition-colors">
                  {BRAND_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-blue-300">schedule</span>
                <span>{BRAND_CONFIG.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-semibold text-white">
                <span className="material-symbols-outlined text-[16px] text-emerald-400">verified_user</span>
                {BRAND_CONFIG.compliance.dpdp}
              </div>
            </div>
          </div>

          {/* Quick Loan Products */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-[#B7C4FF] mb-4">
              Lending Solutions
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-100/80 font-medium">
              {BRAND_CONFIG.products.map((p) => (
                <li key={p.id}>
                  <Link
                    href={p.slug}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="material-symbols-outlined text-[16px] text-blue-400 group-hover:translate-x-0.5 transition-transform">
                      chevron_right
                    </span>
                    <span>{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance & Trust */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-[#B7C4FF] mb-4">
              Trust & Security
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-100/80">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-emerald-400 flex-shrink-0">shield_lock</span>
                <span>256-Bit SSL Bank Grade Encryption</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-emerald-400 flex-shrink-0">task_alt</span>
                <span>Direct Authorized Lending Partners</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-emerald-400 flex-shrink-0">money_off</span>
                <span>Zero Upfront or Hidden Charges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-emerald-400 flex-shrink-0">gavel</span>
                <span>Strict Compliance with RBI Lending Directives</span>
              </li>
            </ul>
          </div>

          {/* Legal Links & Quick Actions */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-[#B7C4FF] mb-4">
              Legal & Support
            </h3>
            <div className="flex flex-col space-y-2.5 text-sm text-blue-100/80">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/compliance" className="hover:text-white transition-colors">Compliance & Grievance</Link>
              <Link href="/financial-disclosure" className="hover:text-white transition-colors">Financial Disclosures</Link>
              <Link href="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-900">
              <p className="text-xs text-blue-300">Need Immediate Help?</p>
              <a
                href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
                className="inline-block mt-1 text-sm font-bold text-white bg-[#BB0119] hover:bg-[#E0292E] px-4 py-2 rounded-lg transition-colors"
              >
                Call Advisory Helpline
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300/70">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved. {BRAND_CONFIG.compliance.dpdp}.
          </p>
          <p className="text-center md:text-right max-w-xl">
            {BRAND_CONFIG.compliance.rbiDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
