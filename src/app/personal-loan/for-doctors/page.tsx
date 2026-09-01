import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Personal Loans & Professional Loans — From 9.9% p.a. | Shreem Finserv",
  description:
    "Apply for collateral-free Personal Loans and Professional Loans from ₹50,000 to ₹1 Crore. Preferential rates from 9.9% p.a., flexible tenure up to 7 years, minimal documentation, and 24-hour disbursal across 50+ lenders.",
};

export default function ProfessionalLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Personal & Professional Loan"
      badge="Collateral-Free Instant Credit"
      headline="Instant Collateral-Free Financing"
      highlightText="Personal Loans & Professional Loans from ₹50K to ₹1 Crore"
      description="A Personal Loan is an unsecured loan that helps individuals, salaried professionals, doctors, and consultants meet personal, clinical, or emergency financial needs without providing any collateral."
      longOverview={`A Personal & Professional Loan is an all-purpose, collateral-free credit instrument crafted to deliver fast liquidity with zero asset pledging. Whether you are a salaried executive funding medical needs or home renovation, or a certified medical doctor / chartered accountant expanding clinic infrastructure, our lending marketplace pairs you with India's highest-tier banking institutions.

Shreem Finserv connects you with 50+ leading scheduled commercial banks and premier NBFCs—including HDFC Bank, ICICI Bank, SBI, Axis Bank, Kotak, Tata Capital, and Bajaj Finance—to secure preferential interest rates starting from 9.9% p.a. With our 100% digital e-KYC and automated underwriting, funds can be credited directly to your bank account in as fast as 24 hours.`}
      maxAmount="₹50K – ₹1Cr"
      interestRate="From 9.9% p.a."
      tenure="Up to 7 Years (84 Mos)"
      disbursalSpeed="Within 24 Hours"
      defaultSliderAmount={2500000}
      minSliderAmount={50000}
      maxSliderAmount={10000000}
      defaultEmiRate={9.9}
      defaultEmiTenureYears={5}
      variants={[
        {
          title: "Doctor & Medical Professional Loan",
          tag: "Zero Collateral",
          desc: "Tailored for MBBS, MD, MS, BDS, and clinic directors with fast-track underwriting.",
          amount: "Up to ₹1 Crore",
          icon: "medical_services",
        },
        {
          title: "Salaried Personal Loan",
          tag: "Instant e-KYC",
          desc: "Pre-approved personal financing for corporate, MNC, and government employees.",
          amount: "₹50K to ₹50 Lakhs",
          icon: "person",
        },
        {
          title: "Chartered Accountant / CS Loan",
          tag: "Professional",
          desc: "Bespoke unsecured funding for practicing CAs, CS, and management consultants.",
          amount: "Up to ₹75 Lakhs",
          icon: "calculate",
        },
        {
          title: "Emergency & Medical Liquidity",
          tag: "Express SLA",
          desc: "Fast-track personal credit line for unforeseen medical emergencies and personal milestones.",
          amount: "Up to ₹25 Lakhs",
          icon: "bolt",
        },
      ]}
      features={[
        {
          title: "Collateral-Free Financing",
          desc: "Access unsecured funds from ₹50,000 to ₹1 Crore without pledging property, gold, or shares.",
          icon: "verified_user",
        },
        {
          title: "Quick Approval & Express Disbursal",
          desc: "Streamlined digital verification with in-principle sanction in minutes and disbursal in 24 hours.",
          icon: "bolt",
        },
        {
          title: "Flexible Repayment Tenure",
          desc: "Choose customized repayment options from 12 to 84 months (up to 7 years) for low monthly EMIs.",
          icon: "tune",
        },
        {
          title: "Multipurpose End-Use",
          desc: "Use funds freely for clinic expansion, home improvements, weddings, travel, education, or debt consolidation.",
          icon: "payments",
        },
        {
          title: "Competitive Interest Rates",
          desc: "Access preferential interest rates starting from 9.9% p.a. based on professional credentials and CIBIL score.",
          icon: "percent",
        },
        {
          title: "Digital & Paperless Documentation",
          desc: "100% online processing with Aadhaar OTP e-KYC and digital bank statement verification.",
          icon: "description",
        },
        {
          title: "Multi-Lender Pre-Approval",
          desc: "Compare pre-approved loan quotes across 50+ banking partners with zero impact on credit score.",
          icon: "hub",
        },
        {
          title: "Dedicated Loan Assistance",
          desc: "Personal loan relationship manager assigned from application to direct bank account crediting.",
          icon: "support_agent",
        },
      ]}
      benefits={[
        {
          title: "Zero Collateral Required",
          desc: "No property, guarantor, or fixed deposit lien needed to unlock full loan sanction limits.",
          icon: "lock_open",
        },
        {
          title: "Industry-Leading Interest Rates",
          desc: "Preferential rate slabs starting at 9.9% p.a. saving significant interest across your loan lifecycle.",
          icon: "savings",
        },
        {
          title: "Extended 7-Year Repayment",
          desc: "Longer amortization horizons keep monthly EMIs comfortable and stress-free for your budget.",
          icon: "calendar_month",
        },
        {
          title: "Debt Consolidation",
          desc: "Combine multiple high-cost credit cards and personal loans into a single lower-interest EMI.",
          icon: "merge_type",
        },
        {
          title: "Special Professional Concessions",
          desc: "Exclusive pricing discounts and higher sanction multipliers for Doctors, CAs, and Architects.",
          icon: "workspace_premium",
        },
        {
          title: "Zero Hidden Charges",
          desc: "Complete transparency with transparent fee schedules and zero upfront advisory brokerage.",
          icon: "money_off",
        },
      ]}
      feesSchedule={[
        { chargeType: "Processing Fees", standardBankRate: "1.50% to 3.00% of loan amount", shreemAdvantage: "From 0.75% (Special Partner Rate)" },
        { chargeType: "Prepayment / Foreclosure", standardBankRate: "3% to 5% on principal outstanding", shreemAdvantage: "Zero charges after 6-12 EMIs" },
        { chargeType: "Documentation & Verification", standardBankRate: "₹1,000 to ₹3,000", shreemAdvantage: "100% Digital e-Sign & e-Stamp" },
        { chargeType: "Upfront Brokerage Fees", standardBankRate: "Often charged by local brokers (1%)", shreemAdvantage: "₹0 Free Service (Zero Upfront Charges)" },
      ]}
      eligibility={[
        "Age Range: Applicant must be between 21 and 65 years of age at loan maturity.",
        "Employment Status: Salaried Individuals (MNC, Corporate, Govt), Medical Doctors, Chartered Accountants, Self-Employed Professionals.",
        "Income Stability: Minimum monthly income of ₹25,000/month (Salaried) or ₹3.5 Lakhs annual ITR (Self-Employed).",
        "Work Experience: Minimum 1 year total work experience (at least 6 months with current organization) or 2 years in professional practice.",
        "Credit Profile: Minimum 700+ CIBIL score with clean repayment track record.",
        "Nationality: Applicant must be an Indian Resident.",
      ]}
      documents={[
        "KYC Identity Proof: PAN Card, Aadhaar Card (Linked to mobile), Passport, or Voter ID.",
        "Income Proof (Salaried): Last 3 Months Salary Slips and latest Form 16 / 2 Years ITR.",
        "Income Proof (Self-Employed / Doctors): Last 2–3 Years ITR with Computation of Income and Balance Sheet.",
        "Bank Statements: Last 6 Months Bank Statement showing salary credits or active professional practice transactions.",
        "Professional Credentials (for Doctors/CAs): Medical Council of India (MCI) / State Council Registration, MBBS/MD Degree Certificate, ICAI Membership Certificate.",
        "Current Address Proof: Electricity Bill, Water Bill, or Registered Rent Agreement.",
      ]}
      faqs={[
        {
          q: "What is the maximum loan amount available for Personal & Professional Loans?",
          a: "Loan amounts range from ₹50,000 up to ₹1 Crore. For certified medical professionals and CAs, higher sanction limits are available based on professional vintage and gross receipts.",
        },
        {
          q: "Do I need to submit collateral or security for this loan?",
          a: "No. All personal and professional loans are 100% collateral-free and unsecured. Sanction is determined by your income stability, CIBIL score, and banking transactions.",
        },
        {
          q: "What is the interest rate for Personal & Professional Loans?",
          a: "Interest rates start from 9.9% p.a. depending on your employer category, professional qualifications, CIBIL score, and chosen lending partner.",
        },
        {
          q: "How soon will the funds be disbursed to my account?",
          a: "With complete online KYC and bank statement verification, in-principle sanction is delivered in hours and direct disbursal takes place within 24 hours.",
        },
      ]}
    />
  );
}
