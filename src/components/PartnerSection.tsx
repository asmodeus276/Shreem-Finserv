"use client";

import React, { useState } from "react";
import { submitLead } from "@/lib/firebase";
import { BRAND_CONFIG } from "@/config/brand";

export const PartnerSection: React.FC = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [experience, setExperience] = useState("Direct Selling Agent (DSA)");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || mobile.length !== 10) return;

    setLoading(true);
    try {
      await submitLead({
        fullName: name.trim(),
        mobile,
        city: city.trim() || "India",
        loanCategory: `Partner Onboarding (${experience})`,
        amount: 0,
        consent: true,
        marketingConsent: false,
        sourcePage: typeof window !== "undefined" ? window.location.pathname : "/partner",
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="partner-onboarding-section" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-[#001A62] to-[#0B2E8D] text-white rounded-3xl p-8 md:p-14 shadow-2xl overflow-hidden relative">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#BB0119]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold border border-white/15">
                <span className="material-symbols-outlined text-[16px]">handshake</span>
                Join India’s Fastest Growing Lending Network
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Become a Shreem Partner. <span className="text-emerald-400 block mt-1">Earn ₹1 Lakh+ Every Month.</span>
              </h2>

              <p className="text-blue-100 text-base leading-relaxed max-w-xl">
                Are you a Financial Advisor, CA, Real Estate Consultant, or DSA? Partner with {BRAND_CONFIG.name} to access 50+ Banks & NBFCs, high commission slabs, and same-week payout settlements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-emerald-400 text-2xl">payments</span>
                  <div>
                    <h4 className="font-bold text-sm">Highest Payout Slabs</h4>
                    <p className="text-xs text-blue-200 mt-0.5">Transparent commissions with weekly disbursements.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-emerald-400 text-2xl">devices</span>
                  <div>
                    <h4 className="font-bold text-sm">Dedicated Partner Portal</h4>
                    <p className="text-xs text-blue-200 mt-0.5">Live CRM tracking for all your client applications.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-emerald-400 text-2xl">support_agent</span>
                  <div>
                    <h4 className="font-bold text-sm">Dedicated Desk Manager</h4>
                    <p className="text-xs text-blue-200 mt-0.5">Personal relationship manager for end-to-end file login.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-emerald-400 text-2xl">verified</span>
                  <div>
                    <h4 className="font-bold text-sm">Zero Investment</h4>
                    <p className="text-xs text-blue-200 mt-0.5">Free partner registration with immediate onboarding.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Registration Form */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl border border-white/20">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Partner Registration Received!</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Our Head of Channel Partnerships will call you within 2 hours to activate your partner code and portal credentials.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">Quick Partner Onboarding</span>
                      <h3 className="text-2xl font-bold text-slate-900 mt-0.5">Register as Channel Partner</h3>
                      <p className="text-xs text-slate-500 mt-1">Start monetizing your client referrals today.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Full Name / Company Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Amit Verma / Verma Consultants"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Mobile Number
                        </label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm font-semibold">+91</span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="98765 43210"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-3 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Operating City
                        </label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. Delhi NCR, Lucknow, Mumbai"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Current Profession
                        </label>
                        <select
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] transition-colors"
                        >
                          <option value="Direct Selling Agent (DSA)">Direct Selling Agent (DSA)</option>
                          <option value="Chartered Accountant / Tax Consultant">Chartered Accountant / Tax Consultant</option>
                          <option value="Real Estate Consultant / Broker">Real Estate Consultant / Broker</option>
                          <option value="Financial Planner / Insurance Advisor">Financial Planner / Insurance Advisor</option>
                          <option value="Other Business Owner">Other Business Owner</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#BB0119] hover:bg-[#E0292E] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm mt-4"
                      >
                        {loading ? (
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        ) : (
                          <>
                            <span>Join Partner Program</span>
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
