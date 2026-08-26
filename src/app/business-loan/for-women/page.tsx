import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Business Loans for Women Entrepreneurs - 0.50% Special Concession | Shreem Finserv",
  description:
    "Empowering women-led enterprises, startups, and self-employed professionals. Preferential interest rates with 0.5% interest subsidy, CGTMSE collateral waivers, up to ₹1 Crore.",
};

export default function WomenLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Business Loan for Women"
      badge="Special Women Empowerment Scheme"
      headline="Subsidized Business Financing for"
      highlightText="Women Founders, Professionals & Enterprise Owners"
      description="Fuel your entrepreneurial vision with exclusive female-focused credit lines, government interest subventions, collateral-free CGTMSE schemes, and expedited underwriting across 50+ banking partners."
      longOverview={`Women-led enterprises are among the most dynamic drivers of India’s economic expansion. From boutique design studios, healthcare clinics, preschool franchises, and beauty wellness chains to high-tech software startups and manufacturing units, women entrepreneurs demonstrate exceptional fiscal discipline and industry-leading loan repayment integrity.

To champion this growth, Shreem Finserv has established an exclusive Women Entrepreneurship Financing Desk. In direct partnership with top public and private sector lenders (SBI Stree Shakti, PNB Mahila Udyam Nidhi, HDFC Bank, ICICI Bank, Tata Capital, and Mudra Yojana), we provide preferential business loans with a 0.50% interest concession, subsidized processing fees, and collateral-free sanctions up to ₹1 Crore.`}
      maxAmount="Up to ₹1 Crore"
      interestRate="Starting 9.75% p.a."
      tenure="12 to 60 Months"
      disbursalSpeed="Within 36 Hours"
      defaultSliderAmount={2500000}
      minSliderAmount={200000}
      maxSliderAmount={10000000}
      defaultEmiRate={9.75}
      defaultEmiTenureYears={4}
      variants={[
        {
          title: "Women MSME Growth Term Loan",
          tag: "0.5% Subsidy",
          desc: "Collateral-free working capital and expansion capital for registered female-owned businesses.",
          amount: "Up to ₹1 Crore",
          icon: "storefront",
        },
        {
          title: "Mudra Yojana (Tarun & Kishore)",
          tag: "Govt Scheme",
          desc: "Subsidized government-backed micro-credit for boutique owners, caterers, and artisan units.",
          amount: "Up to ₹10 Lakhs",
          icon: "account_balance",
        },
        {
          title: "Professional Women Credit Line",
          tag: "Doctors & CAs",
          desc: "Customized professional practice loans for female Doctors, Chartered Accountants, and Architects.",
          amount: "Up to ₹50 Lakhs",
          icon: "workspace_premium",
        },
        {
          title: "Stand-Up India Scheme Line",
          tag: "Greenfield",
          desc: "Bank funding for setting up greenfield manufacturing, trading, or service enterprises.",
          amount: "Up to ₹1 Crore",
          icon: "rocket_launch",
        },
      ]}
      benefits={[
        {
          title: "0.50% Preferential Interest Subsidy",
          desc: "Special discounted interest pricing offered across our partner banking consortium for majority women-owned entities.",
          icon: "percent",
        },
        {
          title: "Collateral-Free CGTMSE Guarantee",
          desc: "Avail unsecured business loans up to ₹1 Crore without mortgaging residential property or gold jewelry.",
          icon: "verified_user",
        },
        {
          title: "Special Women Desk Relationship Manager",
          desc: "Dedicated female credit advisors to assist with end-to-end documentation, file login, and door-step verification.",
          icon: "support_agent",
        },
        {
          title: "Subsidized Processing Charges",
          desc: "Up to 50% discount on standard bank processing fees and zero administrative documentation surcharges.",
          icon: "price_check",
        },
        {
          title: "Flexible Repayment & Moratorium",
          desc: "Structured repayment options with customized moratorium periods to support new business scaling.",
          icon: "schedule",
        },
        {
          title: "Minimal Paperwork & Fast Approval",
          desc: "Digital KYC and GST analytics enable in-principle sanction generation within 24 to 36 hours.",
          icon: "bolt",
        },
      ]}
      eligibility={[
        "Ownership Criteria: Enterprise must have minimum 51% shareholding / proprietary ownership held by a woman",
        "Business Vintage: Minimum 1 year of commercial operations with valid business registration (Udyam / GST / Trade License)",
        "Age Requirements: 21 to 60 years",
        "Turnover: Minimum ₹15 Lakhs annual turnover (for loans > ₹5 Lakhs)",
        "Credit History: Promoter CIBIL score of 680+ with clean past repayment record",
      ]}
      documents={[
        "Identity Proof: PAN Card, Aadhaar Card, Passport / Voter ID of the female promoter",
        "Business Entity Proof: GST Certificate, Udyam MSME Registration Certificate, Shop & Establishment License",
        "Ownership Proof: Partnership Deed / MOA & AOA / Shareholding Pattern certificate confirming >51% female ownership",
        "Financial Records: Last 12 months GSTR-3B filings and 12 months current/savings bank statements",
        "Past Income: Last 2 years ITR with computation of income (for loans > ₹10 Lakhs)",
      ]}
      faqs={[
        {
          q: "What constitutes a 'Women-Owned Enterprise' to qualify for special rates?",
          a: "To qualify for preferential rates and government subventions, a minimum of 51% equity shareholding and management control must be held by one or more women promoters.",
        },
        {
          q: "How does the 0.50% interest concession work?",
          a: "Our partner banks (including SBI, PNB, HDFC, and ICICI) offer an automatic 0.50% interest rate rebate below standard card rates for qualified female entrepreneurs.",
        },
        {
          q: "Can home-based businesses, salons, and cloud kitchens apply?",
          a: "Yes. Self-employed women running home-based catering, cloud kitchens, boutique fashion labels, digital agencies, and salons with active bank transaction tracks are fully eligible.",
        },
        {
          q: "Is property collateral required for a women's business loan?",
          a: "No. Loans up to ₹1 Crore are sanctioned completely collateral-free under the Credit Guarantee Scheme (CGTMSE) or Mudra Yojana.",
        },
        {
          q: "Can a male co-founder or spouse be a co-applicant?",
          a: "Yes. Spouses or male business partners can join as co-borrowers, which often strengthens the overall household income assessment and allows for higher sanction limits.",
        },
        {
          q: "What is the Stand-Up India scheme for women?",
          a: "Stand-Up India facilitates bank loans between ₹10 Lakhs and ₹1 Crore to at least one woman borrower per bank branch for setting up greenfield (new) trading, manufacturing, or service enterprises.",
        },
        {
          q: "How fast are the funds disbursed once approved?",
          a: "Upon complete document verification, funds are disbursed directly into your business current account within 24 to 36 hours.",
        },
        {
          q: "Are there any prepayment charges if I close the loan early?",
          a: "Our partner lenders offer floating-rate MSME facilities with NIL foreclosure charges once 12 EMIs are completed.",
        },
      ]}
    />
  );
}
