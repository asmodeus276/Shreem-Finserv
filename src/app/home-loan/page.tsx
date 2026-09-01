import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Home Loans — From 8.5% p.a. | Shreem Finserv",
  description:
    "Apply for affordable Home Loans from ₹10 Lakhs to ₹5 Crore. Lowest market rates starting from 8.5% p.a., flexible 30-year tenure, up to 90% financing, and zero hidden charges across 50+ banks.",
};

export default function HomeLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Home Loan"
      badge="Lowest Interest Rates in India"
      headline="Turn Your Dream Home Into Reality With"
      highlightText="Affordable Home Loans from ₹10 Lakhs to ₹5 Crore"
      description="Affordable home purchase, plot construction, and balance transfer loans at the lowest market rates starting from 8.5% p.a., extended tenures up to 30 years, and maximum tax benefits."
      bannerImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=75"
      maxAmount="₹10L – ₹5Cr"
      interestRate="From 8.5% p.a."
      tenure="Up to 30 Years"
      disbursalSpeed="3 to 5 Working Days"
      defaultSliderAmount={5000000}
      minSliderAmount={1000000}
      maxSliderAmount={50000000}
      defaultEmiRate={8.5}
      defaultEmiTenureYears={20}
      features={[
        {
          title: "Lowest Market Interest Rates",
          desc: "Access competitive interest rates starting from 8.5% p.a. through India's premier public and private banks.",
          icon: "percent",
        },
        {
          title: "Flexible Long Repayment Tenure",
          desc: "Repayment tenures up to 30 years (360 months) ensuring budget-friendly monthly EMIs for your household.",
          icon: "schedule",
        },
        {
          title: "Up to 90% Property Financing",
          desc: "High Loan-to-Value (LTV) funding based on the registered agreement value of the residential property.",
          icon: "pie_chart",
        },
        {
          title: "Substantial Annual Tax Benefits",
          desc: "Claim tax deductions every year on principal repayment (Sec 80C up to ₹1.5L) and interest paid (Sec 24b up to ₹2L).",
          icon: "receipt_long",
        },
        {
          title: "Balance Transfer Facility",
          desc: "Transfer your existing home loan to premier lenders for lower interest rates and additional liquid top-up funds.",
          icon: "swap_horiz",
        },
        {
          title: "New & Resale Properties",
          desc: "Financing available for newly built developer apartments, resale properties, plot purchase, and home extensions.",
          icon: "domain",
        },
      ]}
      eligibility={[
        "Age Range: 21 to 65 years at loan maturity.",
        "Employment Status: Salaried Individuals (Govt, MNC, Corporate) or Self-Employed Applicants with stable income.",
        "Income Stability: Minimum monthly income of ₹25,000/month (Salaried) or ₹3.5 Lakhs annual ITR (Self-Employed).",
        "Credit Profile: Minimum 700+ CIBIL score for lowest rate slabs.",
        "Property Criteria: Residential property meeting bank technical, structural, and legal clearance guidelines.",
        "Nationality: Indian Resident.",
      ]}
      documents={[
        "KYC Proof: PAN Card, Aadhaar Card, Passport, Voter ID, or Utility Bill.",
        "Income Documents (Salaried): Last 3 Months Salary Slips, 6 Months Bank Statement, Form 16 / 2 Years ITR.",
        "Income Documents (Self-Employed): Last 2–3 Years ITR with Computation of Income, Audited Balance Sheet & P&L, 12 Months Current Bank Statements, GST Certificate.",
        "Property Documents: Agreement to Sell / Builder Allotment Letter, Mother Deed chain for 13–30 years, Approved Building Sanction Plan, Latest Paid Property Tax Receipts.",
      ]}
      faqs={[
        {
          q: "What is the maximum loan amount I can get for a Home Loan?",
          a: "Home loan amounts range from ₹10 Lakhs up to ₹5 Crore (and higher for luxury homes), funding up to 80% to 90% of the property value.",
        },
        {
          q: "What is the interest rate for a Home Loan?",
          a: "Interest rates start from 8.5% p.a. based on your credit score, employment stability, and lender selection across our 50+ banking partners.",
        },
        {
          q: "What tax benefits can I claim on my Home Loan?",
          a: "Under Section 80C, you can claim deductions up to ₹1.5 Lakhs per year on principal repayment. Under Section 24(b), you can claim up to ₹2 Lakhs per year on interest paid.",
        },
        {
          q: "How long does home loan sanction and disbursal take?",
          a: "In-principle sanction is issued within 24 hours. Property legal verification and technical inspection take 3 to 5 business days before final disbursal.",
        },
      ]}
    />
  );
}
