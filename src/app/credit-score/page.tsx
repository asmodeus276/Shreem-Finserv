import { Metadata } from "next";
import Link from "next/link";
import { CreditScoreWidget } from "@/components/CreditScoreWidget";
import { InnerBanner } from "@/components/InnerBanner";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { BRAND_CONFIG } from "@/config/brand";

export const metadata: Metadata = {
  title: "Free Credit Score Check & CIBIL Score Health Analyzer | Shreem Finserv",
  description:
    "Check your free credit score online with zero score impact. Simulate CIBIL health, discover pre-approved loan offers, and calculate borrowing eligibility with Shreem Finserv.",
};

export default function CreditScorePage() {
  const faqs = [
    {
      q: "Does checking my credit score on Shreem Finserv lower my CIBIL score?",
      a: "No, absolutely not. Checking your score through our platform counts as a 'Soft Inquiry' (consumer-initiated). Soft inquiries do not impact your credit bureau score in any way. Only hard inquiries initiated by banks during formal loan appraisals affect your score.",
    },
    {
      q: "What is considered a good CIBIL score for personal and business loans?",
      a: "A score of 750 and above is considered excellent by most Tier-1 banks (like HDFC, ICICI, SBI) for unsecured personal loans and MSME credit. A score between 700 and 749 is considered good and easily qualifies for standard interest rates. If your score is between 600 and 699, NBFCs and co-lending partners can still sanction loans based on cash flow and collateral.",
    },
    {
      q: "How often is my credit score updated by bureaus?",
      a: "Bureaus like TransUnion CIBIL, Experian, CRIF High Mark, and Equifax typically receive updated repayment and outstanding balance records from banks and NBFCs every 30 to 45 days.",
    },
    {
      q: "How can I improve my credit score from 600 to 750+ quickly?",
      a: "Key strategies include: 1) Paying 100% of EMIs and credit card bills before the due date, 2) Keeping your credit card balance utilization below 30% of your sanctioned limit, 3) Avoiding multiple loan applications within a short time frame, and 4) Keeping older credit card accounts open to maintain vintage.",
    },
    {
      q: "Can I get a loan if my credit score is below 650?",
      a: "Yes! Shreem Finserv partners with over 50+ banks and NBFCs, including specialized lending institutions that offer Loan Against Property (LAP), machinery loans, gold loans, or co-applicant backed credit for borrowers on a credit-builder track.",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-slate-50 min-h-screen">
      
      {/* Capital Need Style Banner */}
      <InnerBanner
        badge="FREE CIBIL & EXPERIAN SIMULATOR"
        badgeIcon="speed"
        title="Check Your Free"
        highlightText="Credit Score"
        subtitle="Get an instant credit health checkup with zero bureau score impact and unlock pre-approved loan sanctions across 50+ banking partners."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tools" },
          { label: "Free Credit Score" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
        imageAlt="Credit score evaluation and financial health"
        ctaText="Check Score Now"
        ctaLink="#score-simulator"
        quickStats={[
          { label: "Bureau Impact", value: "Zero (Soft Check)" },
          { label: "Evaluation Time", value: "Instant 60s" },
          { label: "Data Security", value: "256-Bit Encrypted" },
          { label: "Cost", value: "100% Free" },
        ]}
      />

      {/* 1. Main Interactive Score Meter & Estimator */}
      <div id="score-simulator" className="pt-8">
        <CreditScoreWidget />
      </div>

      {/* 2. Score Range Breakdown Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#001A62] bg-blue-100/60 px-3 py-1 rounded-full">
            Credit Score Brackets
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3">
            How Lenders Evaluate Your CIBIL Score
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Your credit score is a 3-digit number ranging from 300 to 900. Here is how leading Indian banks classify creditworthiness:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 300-599 */}
          <div className="bg-white p-6 rounded-3xl border border-red-200/80 shadow-xs hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center font-black text-lg mb-4">
              300-599
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <h3 className="font-bold text-sm text-slate-900">Needs Improvement</h3>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              High risk of rejection for unsecured loans. Shreem Finserv provides dedicated credit-builder facilities and secured collateral options.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-red-600">
              Loan Chance: ~35%
            </div>
          </div>

          {/* 600-699 */}
          <div className="bg-white p-6 rounded-3xl border border-amber-200/80 shadow-xs hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center font-black text-lg mb-4">
              600-699
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <h3 className="font-bold text-sm text-slate-900">Fair / Average</h3>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Eligible for select NBFC unsecured loans and business credit lines. Rates are standard with moderate documentation.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-amber-600">
              Loan Chance: ~60%
            </div>
          </div>

          {/* 700-774 */}
          <div className="bg-white p-6 rounded-3xl border border-blue-200/80 shadow-xs hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-blue-100 text-[#001A62] rounded-2xl flex items-center justify-center font-black text-lg mb-4">
              700-774
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <h3 className="font-bold text-sm text-slate-900">Good Score</h3>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Wide approval across top private and PSU banks. Fast processing times, flexible tenures, and competitive interest rates.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-blue-600">
              Loan Chance: ~85%
            </div>
          </div>

          {/* 775-900 */}
          <div className="bg-white p-6 rounded-3xl border border-emerald-200/80 shadow-xs hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-black text-lg mb-4">
              775-900
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <h3 className="font-bold text-sm text-slate-900">Excellent (Prime)</h3>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Prime borrower status. Guaranteed lowest rate quotes, 100% processing fee waivers, and instant pre-approved sanction letters.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600">
              Loan Chance: 98%+
            </div>
          </div>
        </div>
      </section>

      {/* 3. 5 Pillars of Credit Health */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full">
              Credit Bureau Science
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              The 5 Pillars That Determine Your Score
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Credit bureaus (CIBIL, Experian, CRIF, Equifax) compute your score using mathematical algorithms weighted across these factors:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="text-3xl font-black text-[#001A62]">35%</div>
              <h4 className="font-bold text-sm text-slate-900">Payment History</h4>
              <p className="text-xs text-slate-500">On-time EMI and credit card bill payments over time.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="text-3xl font-black text-[#001A62]">30%</div>
              <h4 className="font-bold text-sm text-slate-900">Credit Utilization</h4>
              <p className="text-xs text-slate-500">Total balance vs. total sanctioned credit card limit.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="text-3xl font-black text-[#001A62]">15%</div>
              <h4 className="font-bold text-sm text-slate-900">Credit Vintage</h4>
              <p className="text-xs text-slate-500">Age of your oldest and active credit accounts.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="text-3xl font-black text-[#001A62]">10%</div>
              <h4 className="font-bold text-sm text-slate-900">Credit Mix</h4>
              <p className="text-xs text-slate-500">Healthy balance of secured (LAP/Auto) and unsecured loans.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="text-3xl font-black text-[#001A62]">10%</div>
              <h4 className="font-bold text-sm text-slate-900">Hard Inquiries</h4>
              <p className="text-xs text-slate-500">Frequency of formal credit applications submitted to banks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Everything you need to know about credit scores and loan eligibility.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <h3 className="font-bold text-base text-slate-900 flex items-start gap-2.5">
                <span className="text-[#001A62] font-extrabold">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-12 bg-gradient-to-r from-[#00103A] via-[#001A62] to-[#0B2E8D] p-8 rounded-3xl text-white text-center space-y-4 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-black">
            Ready to Apply with Guaranteed Low Interest Rates?
          </h3>
          <p className="text-sm text-blue-100 max-w-xl mx-auto">
            Speak directly with Shreem Finserv loan specialists for priority matching across 50+ banking partners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/apply"
              className="bg-[#BB0119] hover:bg-[#9c0115] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md text-sm"
            >
              Apply for Loan Now
            </Link>
            <a
              href={BRAND_CONFIG.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all text-sm inline-flex items-center gap-2"
            >
              <span>Chat with Advisor</span>
              <span className="material-symbols-outlined text-[16px]">chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Co-Lending Partner Marquee */}
      <PartnerMarquee />
    </div>
  );
}
