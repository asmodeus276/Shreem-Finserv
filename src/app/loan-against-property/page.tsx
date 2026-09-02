import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Loan Against Property (LAP) — From 9% p.a. | Shreem Finserv",
  description:
    "Apply for Loan Against Property (LAP) from ₹25 Lakhs to ₹10 Crore. Lowest mortgage rates starting from 9% p.a., flexible 15-year tenure, up to 75% LTV, and swift legal clearance across 50+ lenders.",
};

export default function LapPage() {
  return (
    <ProductPageTemplate
      categoryName="Loan Against Property"
      badge="Secured Real Estate Equity Line"
      headline="Unlock Value with"
      highlightText="Loan Against Property"
      description="Unlock up to 75% of your property's certified market valuation with low mortgage interest rates starting from 9% p.a., extended 15-20 year repayment, and complete retention of ownership."
      bannerImage="/images/lap-inner-banner.jpg"
      maxAmount="₹25L – ₹10Cr"
      interestRate="From 9% p.a."
      tenure="Up to 15-20 Years"
      disbursalSpeed="5 to 7 Working Days"
      defaultSliderAmount={7500000}
      minSliderAmount={2500000}
      maxSliderAmount={100000000}
      defaultEmiRate={9.0}
      defaultEmiTenureYears={10}
      features={[
        {
          title: "High Loan Amount (Up to 75% LTV)",
          desc: "Unlock maximum liquidity from ₹25 Lakhs up to ₹10 Crore based on certified technical property valuation.",
          icon: "pie_chart",
        },
        {
          title: "Low Interest Rates from 9% p.a.",
          desc: "Significantly cheaper interest rates compared to unsecured business or personal loans.",
          icon: "savings",
        },
        {
          title: "Extended 15-20 Year Repayment",
          desc: "Long repayment horizon keeping monthly EMIs low and manageable for long-term cash flow.",
          icon: "calendar_month",
        },
        {
          title: "Multi-Property Eligibility",
          desc: "Pledge residential houses, freehold builder flats, commercial shops, office spaces, and industrial plots.",
          icon: "domain",
        },
        {
          title: "Flexible Multipurpose End-Use",
          desc: "Use funds freely for business expansion, debt restructuring, working capital, or personal milestones.",
          icon: "tune",
        },
        {
          title: "Balance Transfer & Top-Up",
          desc: "Transfer existing high-rate LAP from other lenders to lower your interest and unlock surplus top-up funds.",
          icon: "swap_horiz",
        },
      ]}
      eligibility={[
        "Age Range: 21 to 65 years at the time of loan maturity.",
        "Employment Status: Salaried Individuals, Self-Employed Professionals (Doctors, CAs), Business Proprietors, Directors.",
        "Property Title: Clear, marketable freehold title without pending litigation or municipal encumbrances.",
        "Eligible Properties: Freehold residential apartments, independent houses, approved commercial buildings, industrial plots.",
        "Income Stability: Verifiable income source to service monthly mortgage obligations.",
        "Credit Profile: Minimum 680+ CIBIL score.",
      ]}
      documents={[
        "Property Title Documents: Registered Sale Deed, Conveyance Deed, Allotment Letter, Mother Deed chain for 13–30 years.",
        "Municipal Approvals: Approved Building Sanction Plan, Latest Paid Property Tax Receipts, Occupancy Certificate (OC).",
        "KYC of Applicants: PAN Card, Aadhaar Card, Passport or Voter ID of all co-owners and applicants.",
        "Income Proofs (Salaried): Last 3 Months Payslips, Form 16 (Part A & B), 6 Months Bank Statements.",
        "Income Proofs (Self-Employed): Last 3 Years Audited Financials with ITR and Computation, 12 Months Current Bank Statements, GST Certificate.",
      ]}
      faqs={[
        {
          q: "What is the maximum loan amount I can get against my property?",
          a: "You can get loans from ₹25 Lakhs up to ₹10 Crore, funding up to 75% of the property's certified market valuation.",
        },
        {
          q: "Can I take a loan against residential or commercial property?",
          a: "Yes. All clear-title freehold properties—including self-occupied residential apartments, villas, commercial shops, office floors, and industrial sheds—are eligible.",
        },
        {
          q: "What is the interest rate for Loan Against Property?",
          a: "Interest rates start from 9% p.a. depending on property type, borrower income profile, and credit score across our 50+ banking partners.",
        },
        {
          q: "Can I transfer my existing high-interest LAP to Shreem Finserv's banking partners?",
          a: "Yes. You can execute a balance transfer to lower your interest rate, reduce your monthly EMI, and access high-ticket surplus top-up funds.",
        },
      ]}
    />
  );
}
