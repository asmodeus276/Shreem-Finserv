"use client";

import React, { useState, useMemo } from "react";
import { BRAND_CONFIG } from "@/config/brand";
import { InnerBanner } from "@/components/InnerBanner";
import { PartnerMarquee } from "@/components/PartnerMarquee";

interface JobOpening {
  id: string;
  title: string;
  department: "Sales & Business Development" | "Operations & Leadership" | "Credit Risk & Underwriting" | "Specialized Lending";
  location: string;
  type: string;
  experience: string;
  compensation: string;
  badge?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const OPENINGS: JobOpening[] = [
  {
    id: "sales-executive",
    title: "Sales Executive (Loan Advisory & Direct Sales)",
    department: "Sales & Business Development",
    location: "Vaishali, Ghaziabad / Delhi-NCR",
    type: "Full-Time",
    experience: "1 - 3 Years",
    compensation: "Competitive Fixed Salary + Uncapped Monthly Disbursement Incentives",
    badge: "Actively Hiring",
    description:
      "Drive customer acquisition for personal loans, business loans, home loans, and Loan Against Property (LAP). Advise retail and MSME clients on premier bank schemes, coordinate quick document collection, and guide files through sanction to disbursal.",
    responsibilities: [
      "Prospect, consult, and convert retail and business leads seeking immediate capital.",
      "Understand client financial needs and recommend the most suitable bank or NBFC product from our 50+ lending partners.",
      "Collect and verify preliminary KYC, income papers, and banking statements for fast credit appraisal.",
      "Coordinate with central underwriting and branch operations to expedite in-principle sanction and same-day fund release.",
      "Build long-term client relationships to generate consistent repeat loan requests and referral pipelines.",
    ],
    requirements: [
      "Graduate in Commerce, Management, Finance, or any relevant discipline.",
      "1+ years experience in retail loan sales, banking DSA, financial products, or tele-advisory.",
      "Strong communication and interpersonal skills in Hindi and conversational English.",
      "Goal-driven attitude with a proven track record of meeting or exceeding monthly disbursement targets.",
    ],
  },
  {
    id: "tally-sales-executive",
    title: "Tally Sales Executive (Software & SME Financial Solutions)",
    department: "Sales & Business Development",
    location: "Vaishali, Ghaziabad (NCR)",
    type: "Full-Time",
    experience: "1 - 4 Years",
    compensation: "Fixed Salary + High Incentive on Software Sales & MSME Credit",
    badge: "Hot Role",
    description:
      "Engage business owners, traders, and accounting practitioners to market Tally Prime accounting software solutions, while evaluating Tally financial surrogates for fast-track MSME business loans and working capital credit lines.",
    responsibilities: [
      "Demonstrate and sell Tally Prime software licenses, upgrades, and customization solutions to MSME enterprises.",
      "Review client bookkeeping data, GST filings, and sales ledgers in Tally to assess pre-approved business loan eligibility.",
      "Network with Chartered Accountants, tax practitioners, and commercial bookkeepers across Delhi-NCR for software and loan tie-ups.",
      "Present integrated lending solutions to SME owners based on their banking cash flows and Tally ledger analytics.",
      "Provide customer onboarding assistance, software feature overviews, and maintain healthy post-sales relationships.",
    ],
    requirements: [
      "Hands-on proficiency with Tally Prime / Tally.ERP 9 and solid grasp of accounting fundamentals (P&L, Balance Sheet, GST).",
      "1 to 4 years experience in B2B software sales, Tally partner dealerships, or commercial accounting advisory.",
      "Ability to present software product demos and pitch financial loan solutions to enterprise decision-makers.",
      "Energetic approach with excellent negotiation and relationship-building capabilities.",
    ],
  },
  {
    id: "operation-head",
    title: "Operation Head (Lending Operations & Banking Alliances)",
    department: "Operations & Leadership",
    location: "Vaishali, Ghaziabad (NCR)",
    type: "Full-Time",
    experience: "5 - 10 Years",
    compensation: "Best in Industry + Performance Bonus & Leadership Perks",
    badge: "Leadership",
    description:
      "Lead end-to-end loan operations, branch processing teams, credit bureau audits, and banking partner liaison. Ensure seamless file movement from login to disbursal across 50+ Scheduled Commercial Banks and NBFCs with strict TAT adherence.",
    responsibilities: [
      "Oversee complete operational lifecycle for Business Loans, Home Loans, LAP, Machinery Loans, and Doctor Loans.",
      "Serve as the primary liaison with regional credit heads, CPUs, and sales managers across private and public partner banks.",
      "Monitor and reduce file turnaround time (TAT) from initial application login to final legal/technical clearance and disbursement.",
      "Supervise document scrutiny, verification protocols, fraud prevention, and strict DPDP 2026 data compliance.",
      "Mentor and lead a team of operations executives, loan processors, and customer support representatives.",
      "Resolve escalated queries from bank underwriting committees to optimize sanction conversion rates.",
    ],
    requirements: [
      "5+ years of hands-on experience in loan operations, credit administration, or branch management with a bank, NBFC, or premier DSA.",
      "Deep understanding of credit underwriting norms, banking surrogates, mortgage documentation, and title appraisal.",
      "Strong leadership and team-management capabilities with high problem-solving velocity.",
      "Bachelor's / Master's degree in Finance, Banking, Business Administration, or related field.",
    ],
  },
  {
    id: "credit-mgr",
    title: "Senior Credit Underwriting Manager (MSME & LAP)",
    department: "Credit Risk & Underwriting",
    location: "Vaishali, Ghaziabad (NCR)",
    type: "Full-Time",
    experience: "3 - 6 Years",
    compensation: "Competitive Fixed CTC + Performance Bonus",
    description:
      "Lead appraisal and credit decisioning for high-ticket Loan Against Property (LAP) and MSME working capital applications across our 50+ bank partner network.",
    responsibilities: [
      "Analyze client financials, ITR, GST returns, and banking turnover patterns.",
      "Liaise with credit heads of top private banks (HDFC, ICICI, Kotak, SBI, Tata Capital).",
      "Structure customized term loans and overdraft limits to maximize client approval rates.",
      "Perform risk assessment and coordinate property legal search and technical valuation.",
    ],
    requirements: [
      "3+ years experience in SME/LAP credit underwriting with a reputable bank or NBFC.",
      "Thorough knowledge of balance sheet analysis, cash flow modeling, and financial ratio evaluation.",
      "Strong understanding of Indian real estate mortgage documentation.",
    ],
  },
  {
    id: "dsa-manager",
    title: "DSA Channel Growth & Onboarding Manager",
    department: "Sales & Business Development",
    location: "Vaishali, Ghaziabad / Hybrid",
    type: "Full-Time",
    experience: "2 - 5 Years",
    compensation: "Attractive Base + Channel Volume Overrides",
    description:
      "Drive DSA agent onboarding, training, and payout tracking across North India. Build relationships with chartered accountants, tax consultants, and loan brokers.",
    responsibilities: [
      "Recruit and activate 50+ new channel partners and DSAs monthly.",
      "Conduct regular product knowledge sessions on doctor loans and MSME facilities.",
      "Ensure fast TAT on partner lead payouts and payout reconciliation.",
      "Implement partner engagement campaigns to boost monthly file submission volume.",
    ],
    requirements: [
      "2+ years experience managing DSA/channel sales networks in banking or consumer finance.",
      "Existing relationship network with CAs, real estate brokers, and financial intermediaries.",
      "Strong negotiation and communication skills.",
    ],
  },
  {
    id: "doctor-loan-officer",
    title: "Healthcare Finance Specialist (Doctors Lending)",
    department: "Specialized Lending",
    location: "Delhi-NCR",
    type: "Full-Time",
    experience: "1 - 4 Years",
    compensation: "Competitive Base + High Medical Loan Incentives",
    description:
      "Manage end-to-end relationship management and credit structuring exclusively for doctors, hospital directors, and specialized medical clinics.",
    responsibilities: [
      "Engage with medical consultants, surgeons, and clinic owners for medical equipment and personal loans.",
      "Coordinate fast-track digital KYC collection and sanction dispatch in under 24 hours.",
      "Provide transparent advisory with zero hidden charges.",
      "Structure customized term loan and overdraft lines for clinics and diagnostic centers.",
    ],
    requirements: [
      "1+ years experience in professional loans, doctor credit lines, or healthcare equipment finance.",
      "Professional demeanor suited for consulting senior medical practitioners.",
      "Knowledge of medical practitioner surrogate underwriting.",
    ],
  },
];

const DEPARTMENTS = [
  "All Positions",
  "Sales & Business Development",
  "Operations & Leadership",
  "Credit Risk & Underwriting",
  "Specialized Lending",
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All Positions");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    linkedin: "",
    notes: "",
  });

  const filteredOpenings = useMemo(() => {
    return OPENINGS.filter((job) => {
      const matchesDept =
        selectedDept === "All Positions" || job.department === selectedDept;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query);
      return matchesDept && matchesQuery;
    });
  }, [selectedDept, searchQuery]);

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setFormData((prev) => ({ ...prev, role: job.title }));
    const formElement = document.getElementById("application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/apply-job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("[Career Apply Error]:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-[#F7F9FB]">
      {/* Hero Banner */}
      <InnerBanner
        badge="JOIN OUR EXPANDING TALENT TEAM"
        badgeIcon="groups"
        title="Build Your Career in"
        highlightText="Financial Loan Advisory"
        subtitle="Join Shreem Finserv — India's trusted multi-bank loan marketplace headquartered in Vaishali, Ghaziabad. We are actively hiring sales leaders, Tally financial specialists, and operations heads to power our next phase of growth."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Company" },
          { label: "Careers" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        imageAlt="Join the Shreem Finserv Career Team"
        ctaText="View Open Roles"
        ctaLink="#openings-section"
        quickStats={[
          { label: "Headquarters", value: "Vaishali, GZB" },
          { label: "Lending Network", value: "50+ Banks/NBFCs" },
          { label: "Incentives", value: "Uncapped Monthly" },
          { label: "Response SLA", value: "< 48 Hours" },
        ]}
      />

      {/* Why Work With Us Section */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B309A]">
            Why Join Shreem Finserv
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Empower Borrowers &amp; Accelerate Your Growth
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Work alongside veteran bankers, access direct lending desks across 50+ institutions, and enjoy industry-leading incentive packages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B309A] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">payments</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">Uncapped Incentives</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Earn top-tier monthly disbursement bonuses with transparent calculation slabs on top of your competitive fixed monthly salary.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">handshake</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">50+ Bank Network</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Never lose a customer deal. With 50+ Scheduled Commercial Banks &amp; NBFCs, structure the right funding package for every applicant.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">trending_up</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">Fast-Track Promotions</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Merit-driven career path. High performers move rapidly from sales executives to team managers and zonal operations leads.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">apartment</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">Prime NCR Headquarters</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Work from our modern, air-conditioned office at Cloud 9, H3 Tower, Vaishali, Ghaziabad with high operational autonomy and positive culture.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="openings-section" className="py-12 md:py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B309A]">
                Current Job Openings
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Explore Available Roles ({filteredOpenings.length})
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                We are actively looking for talent in Sales, Tally Software Solutions, Operations, and Underwriting.
              </p>
            </div>

            {/* Keyword Search */}
            <div className="w-full md:w-72 relative">
              <span className="material-symbols-outlined text-slate-400 absolute left-3 top-2.5 text-lg">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search job title or keyword..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B309A]/30"
              />
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedDept === dept
                    ? "bg-[#0B309A] text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings Cards */}
          {filteredOpenings.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">work_off</span>
              <h3 className="font-bold text-slate-700 text-base">No roles matched your search</h3>
              <p className="text-xs text-slate-500 mt-1">Try selecting another department or submit your resume below directly.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredOpenings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#0B309A]/50 hover:shadow-md transition-all space-y-5"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {job.badge && (
                          <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 bg-[#E30613]/10 text-[#E30613] border border-[#E30613]/20 rounded-md">
                            {job.badge}
                          </span>
                        )}
                        <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 bg-blue-50 text-[#0B309A] border border-blue-200 rounded-md">
                          {job.department}
                        </span>
                        <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md">
                          {job.type}
                        </span>
                        <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md">
                          Exp: {job.experience}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-900">{job.title}</h3>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-0.5">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px] text-[#0B309A]">location_on</span>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-emerald-700">
                          <span className="material-symbols-outlined text-[15px]">currency_rupee</span>
                          {job.compensation}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleApplyClick(job)}
                      className="inline-flex items-center justify-center gap-1.5 bg-[#0B309A] hover:bg-[#E30613] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-xs transition-colors flex-shrink-0"
                    >
                      <span>Apply for this Role</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100 space-y-2">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px] text-[#0B309A]">task_alt</span>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#0B309A] font-bold text-[13px] leading-tight">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100 space-y-2">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px] text-emerald-700">person_check</span>
                        Candidate Requirements
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-700 font-bold text-[13px] leading-tight">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Direct Application Form Section */}
      <section id="application-form" className="py-16 max-w-3xl mx-auto px-4 md:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B309A]">
              Direct Talent Application
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {selectedJob ? `Apply for ${selectedJob.title}` : "Submit Candidate Application"}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              {selectedJob
                ? `Department: ${selectedJob.department} • Location: ${selectedJob.location}`
                : "Fill in your details below. Our talent acquisition team reviews every submission within 48 hours."}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Application Submitted Successfully!</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you for applying. Our HR and talent acquisition team will review your profile and reach out via phone or email within 48 business hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    role: "",
                    experience: "",
                    linkedin: "",
                    notes: "",
                  });
                }}
                className="mt-2 text-xs font-bold text-[#0B309A] hover:underline"
              >
                Submit another application
              </button>
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
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B309A]/30"
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
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B309A]/30"
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
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B309A]/30"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Applying For Position *
                  </label>
                  <select
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B309A]/30"
                  >
                    <option value="">Select a Position</option>
                    {OPENINGS.map((op) => (
                      <option key={op.id} value={op.title}>
                        {op.title}
                      </option>
                    ))}
                    <option value="General Financial Advisor">Other / General Application</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Total Relevant Experience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2.5 Years in Loan Sales / Tally / Operations"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B309A]/30"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    LinkedIn / Portfolio URL (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B309A]/30"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Brief Introduction &amp; Past Disbursement Milestones
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your past monthly loan disbursement achievements, software sales track record, or why you'd like to join Shreem Finserv..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B309A]/30"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0B309A] hover:bg-[#E30613] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-colors text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <span>Submit Candidate Profile</span>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                Or send your CV directly to{" "}
                <a href={`mailto:${BRAND_CONFIG.email}`} className="text-[#0B309A] font-bold underline">
                  {BRAND_CONFIG.email}
                </a>{" "}
                with subject &quot;Job Application - [Your Position]&quot;.
              </p>
            </form>
          )}
        </div>
      </section>

      <PartnerMarquee />
    </div>
  );
}
