import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Loans for Women Entrepreneurs — 0.50% Interest Rebate | Shreem Finserv",
  description:
    "Empowering women-led enterprises and self-employed professionals with subsidized business credit from ₹1 Lakh to ₹75 Lakhs. Special 0.5% interest concession and collateral-free approvals.",
};

export default function WomenLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Loans for Women Entrepreneurs"
      badge="Women Empowerment Initiative"
      headline="Subsidized Business Credit Lines for"
      highlightText="Women Founders & Enterprise Owners (₹1L – ₹75L)"
      description="Fuel your entrepreneurial vision with exclusive female-focused credit lines, special 0.5% interest rate concessions, zero collateral requirements, and fast-track approvals across 50+ banking partners."
      bannerImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=75"
      maxAmount="₹1L – ₹75L"
      interestRate="From 10.0% p.a. (0.5% Rebate)"
      tenure="Up to 5 Years"
      disbursalSpeed="24 to 48 Hours"
      defaultSliderAmount={2500000}
      minSliderAmount={100000}
      maxSliderAmount={7500000}
      defaultEmiRate={10.0}
      defaultEmiTenureYears={3}
      features={[
        {
          title: "Special 0.5% Interest Rebate",
          desc: "Exclusive lower interest rate slabs for enterprises where women hold 51%+ equity.",
          icon: "percent",
        },
        {
          title: "100% Collateral-Free",
          desc: "No property mortgage or asset hypothecation required. Approved on business revenue.",
          icon: "verified_user",
        },
        {
          title: "Flexible Working Capital",
          desc: "Use funds freely for inventory, marketing, staff payroll, boutique upgrades, or e-commerce expansion.",
          icon: "storefront",
        },
        {
          title: "Fast 24-48 Hour Disbursal",
          desc: "Rapid digital evaluation with direct account crediting in 24 to 48 hours.",
          icon: "bolt",
        },
        {
          title: "Flexible Repayment Tenures",
          desc: "Tenures from 1 to 5 years (up to 60 months) with structured cash-flow friendly EMIs.",
          icon: "tune",
        },
        {
          title: "Dedicated Women Advisory Desk",
          desc: "Personalized guidance from application to disbursal with free credit counseling.",
          icon: "support_agent",
        },
      ]}
      eligibility={[
        "Eligibility: Women Entrepreneurs, Directors, Partners, or Self-Employed Female Professionals holding at least 51% ownership.",
        "Age Range: 21 to 60 years of age.",
        "Business Vintage: Minimum 1 to 2 years of active continuous business operations.",
        "Credit Profile: Minimum 650+ CIBIL score with clean repayment track.",
        "Nationality: Indian Resident.",
      ]}
      documents={[
        "KYC Identity: PAN Card, Aadhaar Card, Passport or Voter ID of the primary applicant.",
        "Business Proof: GST Certificate, Udyam / MSME Certificate, Trade License, or Incorporation Certificate.",
        "Financial Statements: Last 2 Years ITR with Computation and Banking Statements (Last 12 Months).",
      ]}
      faqs={[
        {
          q: "What is the special interest concession for women entrepreneurs?",
          a: "Women-owned businesses (with 51%+ female shareholding) receive a preferential 0.50% interest rate rebate across our banking partner network.",
        },
        {
          q: "Do I need collateral or security for this loan?",
          a: "No. All loans under this scheme are 100% collateral-free and unsecured.",
        },
        {
          q: "How fast is the loan approval process?",
          a: "Approvals are processed in 24 hours with complete digital documentation, and funds are disbursed within 48 hours.",
        },
      ]}
    />
  );
}
