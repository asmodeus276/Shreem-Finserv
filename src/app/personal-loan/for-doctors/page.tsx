import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Professional Loans for Doctors, CAs & Consultants — From 9.9% p.a. | Shreem Finserv",
  description:
    "Collateral-free Professional Loans and Personal Loans from ₹50,000 to ₹1 Crore. Preferential rates from 9.9% p.a., flexible tenure up to 7 years, minimal documentation, and 24-hour disbursal across 50+ lenders.",
};

export default function ProfessionalLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Professional Loan"
      badge="Specialized Credit for Doctors & CAs"
      headline="Instant Collateral-Free Financing for"
      highlightText="Doctors, CAs, & Certified Practitioners (₹50K – ₹1Cr)"
      description="Collateral-free credit solutions crafted for doctors, chartered accountants, architects, and salaried executives with 24-hour express disbursals and lowest interest rates from 9.9% p.a."
      bannerImage="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1400&q=75"
      maxAmount="₹50K – ₹1Cr"
      interestRate="From 9.9% p.a."
      tenure="Up to 7 Years"
      disbursalSpeed="Within 24 Hours"
      defaultSliderAmount={2500000}
      minSliderAmount={50000}
      maxSliderAmount={10000000}
      defaultEmiRate={9.9}
      defaultEmiTenureYears={5}
      features={[
        {
          title: "Zero Collateral Required",
          desc: "Access unsecured funding up to ₹1 Crore without pledging property, clinic assets, or gold.",
          icon: "verified_user",
        },
        {
          title: "24-Hour Express Disbursal",
          desc: "In-principle sanction in under 2 hours with same-day direct bank account crediting.",
          icon: "bolt",
        },
        {
          title: "Flexible Repayment Tenures",
          desc: "Choose comfortable repayment options from 12 to 84 months (up to 7 years) to keep EMIs low.",
          icon: "tune",
        },
        {
          title: "Preferential Rates from 9.9% p.a.",
          desc: "Special discounted interest rate slabs for certified medical practitioners, CAs, and top corporate employees.",
          icon: "percent",
        },
        {
          title: "100% Digital & Paperless",
          desc: "Instant e-KYC and digital bank statement verification with zero branch visits required.",
          icon: "description",
        },
        {
          title: "Multi-Lender Pre-Approval",
          desc: "Compare pre-approved loan quotes across 50+ banking partners for optimal terms.",
          icon: "hub",
        },
      ]}
      eligibility={[
        "Age Range: 21 to 65 years of age at loan maturity.",
        "Eligible Profiles: Doctors (MBBS, MD, MS, BDS), Chartered Accountants, Architects, and Salaried Executives.",
        "Minimum Income: ₹25,000/month (Salaried) or ₹3.5 Lakhs annual ITR (Self-Employed).",
        "Work Experience: Minimum 1 year total experience (6 months at current job) or 2 years in professional practice.",
        "Credit Profile: 700+ CIBIL score with healthy repayment track record.",
        "Nationality: Indian Resident.",
      ]}
      documents={[
        "KYC Identity Proof: PAN Card, Aadhaar Card, Passport, or Voter ID.",
        "Income Proof: Last 3 Months Salary Slips (Salaried) OR 2 Years ITR with Computation (Professionals).",
        "Bank Statements: Last 6 Months Bank Statement showing salary credits or professional receipts.",
        "Professional Credentials (for Doctors/CAs): Degree Certificate and Medical Council / ICAI Registration Certificate.",
        "Current Address Proof: Electricity Bill, Utility Bill, or Registered Rent Agreement.",
      ]}
      faqs={[
        {
          q: "What is the maximum loan amount available under Professional Loans?",
          a: "Loan amounts range from ₹50,000 up to ₹1 Crore, depending on your professional credentials, annual gross receipts, and CIBIL score.",
        },
        {
          q: "Do I need to submit collateral or security for this loan?",
          a: "No. Professional loans are 100% collateral-free and unsecured. Sanction is determined by your professional vintage and banking track record.",
        },
        {
          q: "What is the interest rate for Doctors and CAs?",
          a: "Interest rates start from 9.9% p.a. with special rate concessions for certified medical specialists and chartered accountants.",
        },
        {
          q: "How fast will the loan be disbursed?",
          a: "With digital documentation, in-principle sanction is delivered in hours and funds are disbursed directly to your account within 24 hours.",
        },
      ]}
    />
  );
}
