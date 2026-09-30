import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "CA Loan — Professional Loan for Chartered Accountants up to ₹75 Lakhs | Shreem Finserv",
  description:
    "Collateral-free CA Loans from ₹1 Lakh to ₹75 Lakhs for Chartered Accountants & auditing firms. Preferential rates from 13.00% p.a., 24-hour disbursal, flexible tenure up to 5 years across 50+ banking partners.",
  keywords: [
    "ca loan",
    "professional loan for ca",
    "loan for chartered accountant",
    "ca practice expansion loan",
    "chartered accountant personal loan",
    "unsecured loan for ca",
    "shreem finserv ca loan",
  ],
};

export default function CaLoanPage() {
  return (
    <ProductPageTemplate
      categoryId="professional-loan"
      categoryName="CA Loan"
      badge="Specialized Credit for Chartered Accountants"
      headline="Professional Loan For Chartered Accountants"
      highlightText="up to ₹75 Lakhs | From 13.00% p.a."
      description="Tailor-made collateral-free financing designed specifically for practicing Chartered Accountants (CAs) and audit firms. Establish new branch offices, invest in IT & tax audit software, hire qualified staff, and manage practice cash flows with fast 24-hour sanction and flexible tenure up to 5 years."
      bannerImage="/images/ca-hero-banner.jpg"
      maxAmount="₹1L – ₹75L"
      interestRate="From 13.00% p.a."
      tenure="Up to 5 Years (60 Months)"
      disbursalSpeed="Within 24 to 48 Hours"
      defaultSliderAmount={2500000}
      minSliderAmount={100000}
      maxSliderAmount={7500000}
      defaultEmiRate={13.0}
      defaultEmiTenureYears={3}
      features={[
        {
          title: "Tailor-Made for Chartered Accountants",
          desc: "Dedicated underwriting honoring your ICAI Certificate of Practice (COP), professional vintage, and audit track record.",
          icon: "account_balance",
        },
        {
          title: "100% Collateral-Free & Unsecured",
          desc: "Zero requirement to mortgage office premises, pledge financial securities, or hypothecate assets.",
          icon: "verified_user",
        },
        {
          title: "High Sanction up to ₹75 Lakhs",
          desc: "Access ample funding from ₹1 Lakh up to ₹75 Lakhs to acquire commercial office space, digitize operations, or expand branch network.",
          icon: "payments",
        },
        {
          title: "Express 24-Hour Approval & Disbursal",
          desc: "Streamlined digital application with automated bank statement processing and rapid direct account disbursement.",
          icon: "bolt",
        },
        {
          title: "Flexible Repayment Horizon",
          desc: "Select structured tenures from 12 to 60 months (up to 5 years) designed to match quarterly tax audit cash flows.",
          icon: "tune",
        },
        {
          title: "Multi-Purpose Utilization",
          desc: "Use capital freely for office interior renovation, purchasing ERP & tax software licenses, hiring articles/assistants, or meeting overhead expenses.",
          icon: "business_center",
        },
      ]}
      eligibility={[
        "Nationality: Applicant must be a Citizen of India.",
        "Age Range: Between 24 years (at loan application) and 65 years (at loan maturity).",
        "Eligible Profile: Practicing Chartered Accountants holding a valid ICAI Certificate of Practice (COP), or partners in registered CA firms.",
        "Professional Experience: Minimum 1 year of post-qualification continuous professional practice.",
        "Minimum Annual Income: Minimum annual professional gross receipts / income of at least ₹3 Lakhs.",
        "Credit Profile: Minimum 650+ CIBIL score with a clean repayment track record.",
      ]}
      documents={[
        "Proof of Identity: PAN Card, Aadhaar Card, Passport, Voter ID, or Driving License.",
        "Proof of Address: Electricity Bill, Utility Bill, or Registered Rent Agreement.",
        "Professional Qualification Proof: ICAI Membership Certificate and valid Certificate of Practice (COP).",
        "Office Premises Proof: Commercial electricity bill, registered lease agreement, or firm registration certificate.",
        "Financial Documents: Last 6 to 12 Months Bank Statements (Current and/or Savings) and Last 2 Years ITR with Computation of Income.",
      ]}
      faqs={[
        {
          q: "What is the eligibility criteria for a CA Professional Loan?",
          a: "The applicant must be an Indian citizen aged 24 to 65 years, hold a valid Certificate of Practice (COP) from ICAI with at least 1 year of post-qualification practice, and have annual gross professional receipts of at least ₹3 Lakhs.",
        },
        {
          q: "Do I need to submit collateral or security for a CA Loan?",
          a: "No. Professional Loans for Chartered Accountants are 100% collateral-free and unsecured. Approvals are based on your professional credentials, bank statements, and credit history.",
        },
        {
          q: "What is the maximum loan amount and interest rate offered for CAs?",
          a: "Loan amounts range from ₹1 Lakh up to ₹75 Lakhs with attractive interest rates starting from 13.00% p.a. onwards across our network of 50+ banks and NBFCs.",
        },
        {
          q: "What purposes can I use the CA Loan funds for?",
          a: "You can utilize the funds without any end-use restrictions: setting up or renovating your office, hiring staff, buying auditing & compliance software, opening a branch office, or managing seasonal working capital.",
        },
        {
          q: "How fast is the loan approval and disbursal process?",
          a: "With digital document upload, in-principle approval is delivered within a few hours and funds are disbursed into your bank account within 24 to 48 hours.",
        },
        {
          q: "Can salaried Chartered Accountants also apply for this loan?",
          a: "Yes. Salaried Chartered Accountants employed with corporate firms or MNCs can apply for our specialized corporate personal loans with preferential interest rates and express approvals.",
        },
      ]}
    />
  );
}
