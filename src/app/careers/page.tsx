"use client";

import React, { useState } from "react";
import { BRAND_CONFIG } from "@/config/brand";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
}

const OPENINGS: JobOpening[] = [
  {
    id: "credit-mgr",
    title: "Senior Credit Underwriting Manager (MSME & LAP)",
    department: "Credit Risk & Operations",
    location: "Vaishali, Ghaziabad (NCR)",
    type: "Full-Time",
    experience: "3 - 6 Years",
    description:
      "Lead appraisal and credit decisioning for high-ticket Loan Against Property (LAP) and MSME working capital applications across our 50+ bank partner network.",
    responsibilities: [
      "Analyze client financials, ITR, GST returns, and banking turnover patterns.",
      "Liaise with credit heads of top private banks (HDFC, ICICI, Kotak, SBI, Tata Capital).",
      "Structure customized term loans and overdraft limits to maximize client approval rates.",
    ],
  },
  {
    id: "dsa-manager",
    title: "DSA Channel Growth & Onboarding Manager",
    department: "Channel Sales & Partnerships",
    location: "Vaishali, Ghaziabad / Hybrid",
    type: "Full-Time",
    experience: "2 - 5 Years",
    description:
      "Drive DSA agent onboarding, training, and payout tracking across North India. Build relationships with chartered accountants, tax consultants, and loan brokers.",
    responsibilities: [
      "Recruit and activate 50+ new channel partners and DSAs monthly.",
      "Conduct regular product knowledge sessions on doctor loans and MSME facilities.",
      "Ensure fast TAT on partner lead payouts and payout reconciliation.",
    ],
  },
  {
    id: "doctor-loan-officer",
    title: "Healthcare Finance Specialist (Doctors Lending)",
    department: "Specialized Lending",
    location: "Delhi-NCR",
    type: "Full-Time",
    experience: "1 - 4 Years",
    description:
      "Manage end-to-end relationship management and credit structuring exclusively for doctors, hospital directors, and specialized medical clinics.",
    responsibilities: [
      "Engage with medical consultants, surgeons, and clinic owners for medical equipment and personal loans.",
      "Coordinate fast-track digital KYC collection and sanction dispatch in under 24 hours.",
      "Provide transparent advisory with zero hidden charges.",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Growth & Fintech Marketing Lead",
    department: "Growth & Product",
    location: "Vaishali, Ghaziabad / Remote Friendly",
    type: "Full-Time",
    experience: "2 - 4 Years",
    description:
      "Spearhead performance marketing, SEO content, Google Ads, and conversion rate optimization for Shreem Finserv's digital lending portals.",
    responsibilities: [
      "Manage high-converting Google Ads and Meta campaigns for loan keywords.",
      "Optimize web landing pages, calculators, and lead capture forms for organic search.",
      "Drive educational content across LinkedIn and financial media channels.",
    ],
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    linkedin: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 md:pt-28 pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/60 via-white to-slate-50 py-12 md:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200">
              <span className="material-symbols-outlined text-[16px]">work</span>
              We Are Hiring
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Build the Future of Transparent Fintech Lending
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Join Shreem Finserv’s high-growth financial advisory team in Ghaziabad (NCR). Empower doctors, MSMEs, and entrepreneurs with fast capital while accelerating your career.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-emerald-600 text-[18px]">payments</span>
                Top-Tier Industry Compensation + Performance Incentives
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#0B2E8D] text-[18px]">trending_up</span>
                Fast-Track Leadership Trajectory
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">
            Life at Shreem Finserv
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Why You’ll Love Working With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B2E8D] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">Uncapped Bonuses</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Earn lucrative monthly disbursement incentives on top of your competitive fixed base salary.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">health_and_safety</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">Health Coverage</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Comprehensive medical and accidental insurance for you and your immediate family members.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">Fintech Training</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Direct masterclasses with senior bank underwriting heads and credit risk leadership.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">celebration</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">Modern Work Culture</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Collaborative workplace at Cloud 9 Tower, Vaishali with high autonomy and zero corporate bureaucracy.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">
              Current Openings
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Explore Available Roles
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Select an opening below to view key responsibilities and apply directly.
            </p>
          </div>

          <div className="space-y-4">
            {OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#0B2E8D]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase px-2.5 py-1 bg-blue-50 text-[#0B2E8D] border border-blue-200 rounded-md">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-bold uppercase px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                      {job.type}
                    </span>
                    <span className="text-[10px] font-bold uppercase px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md">
                      Exp: {job.experience}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">{job.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{job.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <a
                  href="#application-form"
                  onClick={() => {
                    setSelectedJob(job);
                    setFormData((prev) => ({ ...prev, role: job.title }));
                  }}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#001A62] hover:bg-[#BB0119] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow transition-colors flex-shrink-0"
                >
                  <span>Apply for Role</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 max-w-3xl mx-auto px-4 md:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">
              Direct Talent Application
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Submit Your Resume / Profile
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Don’t see your exact role? Send your details — our HR team reviews every submission.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Application Received!</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Our talent acquisition team will review your profile and reach out within 48 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2E8D]/30"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2E8D]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2E8D]/30"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Applying For Role *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior Credit Manager"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2E8D]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Years of Relevant Experience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 3.5 Years in Banking/DSA"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2E8D]/30"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    LinkedIn / Portfolio URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2E8D]/30"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Brief Introduction &amp; Achievements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your past loan disbursement milestones or why you’d like to join Shreem Finserv..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2E8D]/30"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#001A62] hover:bg-[#BB0119] text-white font-black py-3.5 px-6 rounded-xl shadow-md transition-colors text-xs sm:text-sm"
              >
                Submit Candidate Profile
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                Or email your CV directly to{" "}
                <a href={`mailto:${BRAND_CONFIG.email}`} className="text-[#0B2E8D] font-bold underline">
                  {BRAND_CONFIG.email}
                </a>{" "}
                with subject &quot;Career Application - [Your Role]&quot;.
              </p>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
