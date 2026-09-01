import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Business Loan & MSME Working Capital — From 10.5% p.a. | Shreem Finserv",
  description:
    "Apply for collateral-free Business Loans from ₹1 Lakh to ₹2 Crore. Starting from 10.5% p.a., flexible tenure up to 5 years, minimal documentation, and 48-hour disbursal across 50+ lenders.",
};

export default function BusinessLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Business Loan"
      badge="Unsecured MSME & Enterprise Credit"
      headline="Fuel Your Enterprise Growth With"
      highlightText="Collateral-Free Business Loans (₹1L – ₹2Cr)"
      description="Flexible unsecured credit lines designed for manufacturers, traders, and service enterprises to manage operational cash flow, inventory, and supplier invoices without pledging physical collateral."
      bannerImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=75"
      maxAmount="₹1L – upto ₹2Cr"
      interestRate="From 10.5% p.a."
      tenure="Up to 5 Years"
      disbursalSpeed="Within 48 Hours"
      defaultSliderAmount={5000000}
      minSliderAmount={100000}
      maxSliderAmount={20000000}
      defaultEmiRate={10.5}
      defaultEmiTenureYears={3}
      features={[
        {
          title: "Working Capital Support",
          desc: "Manage day-to-day business operations, supplier invoices, seasonal inventory, and payroll smoothly.",
          icon: "account_balance_wallet",
        },
        {
          title: "Collateral-Free Financing",
          desc: "Access unsecured business funding up to ₹2 Crore without pledging commercial, industrial, or residential assets.",
          icon: "verified_user",
        },
        {
          title: "Flexible Repayment Options",
          desc: "Choose customized repayment tenures up to 5 years (60 months) with structured EMI plans matching cash flow.",
          icon: "tune",
        },
        {
          title: "GST Surrogate Underwriting",
          desc: "Fast-track sanction based on 12-month GSTR-3B filings and banking credits without complex auditing.",
          icon: "receipt_long",
        },
        {
          title: "48-Hour Rapid Disbursal",
          desc: "Streamlined digital approval with direct fund transfer to your current account in under 48 hours.",
          icon: "bolt",
        },
        {
          title: "Competitive Rates from 10.5% p.a.",
          desc: "Compare offers across 50+ leading private, public banks and NBFCs for lowest interest rates.",
          icon: "percent",
        },
      ]}
      eligibility={[
        "Age Range: 21 to 65 years of age.",
        "Eligible Entities: Proprietorships, Partnership Firms, Pvt Ltd Companies, LLPs, and Self-Employed Business Owners.",
        "Business Vintage: Minimum 2 to 3 years of active continuous business operations.",
        "Annual Turnover: Minimum ₹40 Lakhs+ annual business turnover with regular GST filings.",
        "Banking Track Record: Healthy banking credits and no frequent cheque bounces.",
        "Credit Profile: Minimum 680+ CIBIL score.",
      ]}
      documents={[
        "KYC Identity: PAN Card, Aadhaar Card, Passport or Voter ID of Promoters / Directors.",
        "Business Registration Proof: GST Registration Certificate, Udyam / MSME Certificate, Certificate of Incorporation.",
        "Financial Statements: Last 2–3 Years Audited Balance Sheet & P&L Statement with CA seal and Computation of Income.",
        "Banking Statements: Last 12 Months Current Account Bank Statements in PDF format.",
        "GST Returns: Last 12 Months GSTR-3B and GSTR-1 filings.",
      ]}
      faqs={[
        {
          q: "What is the maximum loan amount I can get under a Business Loan?",
          a: "You can get unsecured business loans from ₹1 Lakh up to ₹2 Crore (and up to ₹5 Crore under CGTMSE schemes), depending on your annual business turnover and banking cash flows.",
        },
        {
          q: "Do I need to pledge collateral for a Business Loan?",
          a: "No. Our business loans are 100% unsecured and collateral-free. Sanctions are calculated based on your banking transactions and GST turnover.",
        },
        {
          q: "What is the interest rate for a Business Loan?",
          a: "Interest rates start from 10.5% p.a. depending on your business vintage, annual turnover, and CIBIL score across our 50+ banking partners.",
        },
        {
          q: "How fast will the funds be disbursed?",
          a: "With digital documentation, in-principle sanction is processed in under 24 hours and funds are disbursed within 48 hours directly to your current account.",
        },
      ]}
    />
  );
}
