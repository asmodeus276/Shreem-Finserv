import React from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { Logo } from "@/components/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001A62] text-white pt-16 pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-900/60">
          
          {/* 1. Brand Info & Address */}
          <div className="lg:col-span-2 space-y-4">
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

            {/* Social Media Links & Direct WhatsApp */}
            <div className="pt-2 flex items-center gap-2.5">
              {BRAND_CONFIG.social.linkedin && (
                <a
                  href={BRAND_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0B2E8D] text-white flex items-center justify-center transition-colors text-xs font-bold"
                >
                  in
                </a>
              )}
              {BRAND_CONFIG.social.twitter && (
                <a
                  href={BRAND_CONFIG.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0B2E8D] text-white flex items-center justify-center transition-colors text-xs font-bold"
                >
                  𝕏
                </a>
              )}
              {BRAND_CONFIG.social.instagram && (
                <a
                  href={BRAND_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0B2E8D] text-white flex items-center justify-center transition-colors text-xs font-bold"
                >
                  ig
                </a>
              )}
              {BRAND_CONFIG.social.facebook && (
                <a
                  href={BRAND_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0B2E8D] text-white flex items-center justify-center transition-colors text-xs font-bold"
                >
                  fb
                </a>
              )}
              {BRAND_CONFIG.social.whatsapp && (
                <a
                  href={BRAND_CONFIG.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Support"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px]">chat</span>
                  <span>WhatsApp</span>
                </a>
              )}
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-semibold text-white">
                <span className="material-symbols-outlined text-[16px] text-emerald-400">verified_user</span>
                {BRAND_CONFIG.compliance.dpdp}
              </div>
            </div>
          </div>

          {/* 2. Quick Loan Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#B7C4FF] mb-4">
              Lending Solutions
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-blue-100/80 font-medium">
              {BRAND_CONFIG.products.map((p) => (
                <li key={p.id}>
                  <Link
                    href={p.slug}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="material-symbols-outlined text-[14px] text-blue-400 group-hover:translate-x-0.5 transition-transform">
                      chevron_right
                    </span>
                    <span>{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company & Knowledge */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#B7C4FF] mb-4">
              Company &amp; Hub
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-blue-100/80 font-medium">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Financial Guides</span>
                  <span className="text-[10px] bg-emerald-500 text-white px-1.5 py-0.2 rounded font-bold">New</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Careers</span>
                  <span className="text-[10px] bg-amber-400 text-slate-900 px-1.5 py-0.2 rounded font-bold">Hiring</span>
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-white transition-colors">Press &amp; Media</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact &amp; Map</Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-white transition-colors">DSA Partner Portal</Link>
              </li>
            </ul>
          </div>

          {/* 4. Financial Tools & Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#B7C4FF] mb-4">
              Tools &amp; Compliance
            </h3>
            <div className="flex flex-col space-y-2.5 text-xs sm:text-sm text-blue-100/80">
              <Link href="/calculator" className="hover:text-white transition-colors">Smart EMI Calculator</Link>
              <Link href="/credit-score" className="hover:text-white transition-colors">Free Credit Score Check</Link>
              <Link href="/track-application" className="hover:text-white transition-colors">Live Loan Tracker</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors pt-2 border-t border-blue-900/60">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/compliance" className="hover:text-white transition-colors">RBI Fair Practice</Link>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-900/80">
              <a
                href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
                className="inline-block text-xs font-bold text-white bg-[#BB0119] hover:bg-[#E0292E] px-3.5 py-2 rounded-lg transition-colors shadow"
              >
                Call Helpline Now
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
