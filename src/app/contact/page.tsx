import { Metadata } from "next";
import { BRAND_CONFIG } from "@/config/brand";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Shreem Finserv Priority Helpline & Office",
  description:
    "Get in touch with Shreem Finserv loan advisors. Call +91 87450 03840 or visit our office at Cloud 9 Tower, Vaishali, Ghaziabad.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200 mb-2">
            <span className="material-symbols-outlined text-[16px]">contact_support</span>
            Always Here to Help
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Connect With Our Financial Advisors
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Reach our advisory desk directly via phone, WhatsApp, social channels, or visit our headquarters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details + Interactive Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Direct Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-[#BB0119] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Helpline</span>
                <a
                  href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="text-xl font-bold text-slate-900 hover:text-[#0B2E8D] block mt-0.5 transition-colors"
                >
                  {BRAND_CONFIG.phoneDisplay}
                </a>
                <p className="text-xs text-slate-500 mt-1">{BRAND_CONFIG.workingHours}</p>
              </div>
            </div>

            {/* WhatsApp & Social Media Card */}
            <div className="bg-gradient-to-br from-emerald-50/80 via-white to-blue-50/50 p-6 rounded-2xl border border-emerald-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.127-.533-1.834-.759-3.003-2.617-3.094-2.738-.09-.121-.741-.987-.741-1.884 0-.897.469-1.339.636-1.52.167-.181.365-.226.486-.226.122 0 .243.002.349.006.111.005.26-.042.406.309.15.361.512 1.25.557 1.341.045.091.076.197.015.318-.061.121-.091.196-.182.303-.091.106-.192.237-.274.318-.09.09-.185.187-.079.369.106.182.471.777 1.01 1.258.694.619 1.28.811 1.462.902.182.091.289.076.395-.045.106-.122.456-.531.577-.713.122-.182.243-.152.41-.091.167.061 1.059.499 1.241.59.182.091.303.136.349.212.045.076.045.438-.099.843z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.399C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.153-.45-4.457-1.233l-.32-.191-2.943.83.846-2.868-.208-.33C4.12 15.148 3.6 13.616 3.6 12c0-4.632 3.768-8.4 8.4-8.4 4.633 0 8.4 3.768 8.4 8.4 0 4.633-3.767 8.4-8.4 8.4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">WhatsApp &amp; Social Connect</h3>
                    <p className="text-xs text-slate-500">Fast digital support &amp; latest updates</p>
                  </div>
                </div>
                <a
                  href={BRAND_CONFIG.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-transform hover:scale-105 shadow-xs"
                >
                  <span>Chat on WhatsApp</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-200/60">
                <span className="text-xs font-semibold text-slate-500">Follow official pages:</span>
                {BRAND_CONFIG.social.linkedin && (
                  <a
                    href={BRAND_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white text-xs font-bold transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72Z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                )}
                {BRAND_CONFIG.social.instagram && (
                  <a
                    href={BRAND_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-pink-600 hover:text-white text-xs font-bold transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                )}
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0B2E8D] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Official Email</span>
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="text-lg font-bold text-slate-900 hover:text-[#0B2E8D] block mt-0.5 transition-colors"
                >
                  {BRAND_CONFIG.email}
                </a>
                <p className="text-xs text-slate-500 mt-1">Guaranteed response within 30 minutes</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Principal Office</span>
                <p className="text-base font-bold text-slate-900 mt-0.5">
                  {BRAND_CONFIG.address}
                </p>
                <div className="inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold mt-2">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  <span>DPDP 2026 Secured Facility</span>
                </div>
              </div>
            </div>

            {/* Google Maps Location Embed */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-2">
              <div className="flex items-center justify-between px-2 pt-1 text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#0B2E8D] text-[18px]">map</span>
                  Headquarters Map Location (Vaishali, Ghaziabad)
                </span>
                <a
                  href="https://maps.google.com/?q=Cloud+9+Tower+Vaishali+Ghaziabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B2E8D] hover:underline text-[11px]"
                >
                  Open in Google Maps ↗
                </a>
              </div>
              <div className="w-full h-60 rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  title="Shreem Finserv Office Location Map"
                  src="https://maps.google.com/maps?q=Cloud%209%20Tower,%20Vaishali,%20Ghaziabad,%20Uttar%20Pradesh%20201010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
