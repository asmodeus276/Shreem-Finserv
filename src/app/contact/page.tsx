import { Metadata } from "next";
import { BRAND_CONFIG } from "@/config/brand";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us - Shreem Finserv Priority Helpline & Office",
  description:
    "Get in touch with Shreem Finserv loan advisors. Call +91 9355445828 or visit our office at Cloud 9 Tower, Vaishali, Ghaziabad.",
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
            Reach our advisory desk directly via phone, email, or visit our headquarters.
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

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6">
            <LeadForm
              title="Request Priority Callback"
              subtitle="Our senior credit underwriting desk will reach out immediately."
            />
          </div>

        </div>
      </div>
    </div>
  );
}
