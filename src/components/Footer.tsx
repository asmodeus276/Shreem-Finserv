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
            <div className="pt-2 flex items-center gap-2.5 flex-wrap">
              {BRAND_CONFIG.social.linkedin && (
                <a
                  href={BRAND_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72Z"/>
                  </svg>
                </a>
              )}
              {BRAND_CONFIG.social.instagram && (
                <a
                  href={BRAND_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
              {BRAND_CONFIG.social.whatsapp && (
                <a
                  href={BRAND_CONFIG.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Support"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all hover:scale-105 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.127-.533-1.834-.759-3.003-2.617-3.094-2.738-.09-.121-.741-.987-.741-1.884 0-.897.469-1.339.636-1.52.167-.181.365-.226.486-.226.122 0 .243.002.349.006.111.005.26-.042.406.309.15.361.512 1.25.557 1.341.045.091.076.197.015.318-.061.121-.091.196-.182.303-.091.106-.192.237-.274.318-.09.09-.185.187-.079.369.106.182.471.777 1.01 1.258.694.619 1.28.811 1.462.902.182.091.289.076.395-.045.106-.122.456-.531.577-.713.122-.182.243-.152.41-.091.167.061 1.059.499 1.241.59.182.091.303.136.349.212.045.076.045.438-.099.843z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.399C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.153-.45-4.457-1.233l-.32-.191-2.943.83.846-2.868-.208-.33C4.12 15.148 3.6 13.616 3.6 12c0-4.632 3.768-8.4 8.4-8.4 4.633 0 8.4 3.768 8.4 8.4 0 4.633-3.767 8.4-8.4 8.4z" />
                  </svg>
                  <span>WhatsApp Desk</span>
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
