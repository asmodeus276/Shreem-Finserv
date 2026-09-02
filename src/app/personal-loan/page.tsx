import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Personal Loan Online - Fast Approval up to ₹50 Lakhs | Shreem Finserv",
  description:
    "Apply for instant unsecured Personal Loans from ₹50,000 up to ₹50 Lakhs starting at 9.75% p.a. Minimal paperwork, zero collateral, and same-day bank disbursal with Shreem Finserv.",
};

export default function PersonalLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Personal Loan"
      badge="INSTANT UNSECURED FINANCING"
      headline="Enabling Dreams with"
      highlightText="Personal Loan"
      bannerImage="/images/personal-loan-inner-banner.jpg"
      description="Access collateral-free personal financing from ₹50,000 to ₹50 Lakhs with instant digital verification, low interest rates starting from 9.75% p.a., and flexible repayment tenures up to 84 months across 50+ banking partners."
      maxAmount="₹50 Lakhs"
      interestRate="9.75% p.a."
      tenure="Up to 7 Years"
      disbursalSpeed="Under 24 Hours"
      defaultSliderAmount={500000}
      minSliderAmount={50000}
      maxSliderAmount={5000000}
      defaultEmiRate={10.5}
      defaultEmiTenureYears={5}
      features={[
        {
          title: "Zero Collateral Required",
          desc: "100% unsecured loan facility with no pledge or guarantor required.",
          icon: "shield_lock",
        },
        {
          title: "Same-Day Direct Disbursal",
          desc: "Fast-track underwriting with immediate fund transfer to your bank account upon verification.",
          icon: "bolt",
        },
        {
          title: "Flexible Repayment Tenures",
          desc: "Choose customized tenures from 12 to 84 months with transparent EMI calculations.",
          icon: "calendar_month",
        },
        {
          title: "Multi-Bank Comparison",
          desc: "Compare quotes across 50+ top banks including HDFC, ICICI, SBI, Axis, Kotak & Tata Capital.",
          icon: "compare_arrows",
        },
        {
          title: "No End-Use Restrictions",
          desc: "Use loan funds freely for medical emergencies, home renovation, weddings, travel, or debt consolidation.",
          icon: "done_all",
        },
        {
          title: "Paperless Digital Application",
          desc: "Simple digital KYC with soft-copy upload and seamless end-to-end status tracking.",
          icon: "phone_iphone",
        },
      ]}
      eligibility={[
        "Age between 21 and 65 years at loan maturity",
        "Salaried employees, self-employed professionals, or business owners",
        "Minimum monthly net income of ₹18,000 (Salaried) or continuous business vintage (Self-employed)",
        "Minimum credit bureau score (CIBIL) of 675+ for fast-track approvals",
        "Indian citizen with valid identity and address proof",
      ]}
      documents={[
        "PAN Card & Aadhaar Card (Identity & Address Proof)",
        "Latest 3 Months Salary Slips or Form 16 (for Salaried)",
        "Latest 6 Months Bank Statement (Salary credit or primary banking account)",
        "Current residence proof (Electricity bill, Rent Agreement, or Utility bill)",
        "Passport size photograph & Employee ID Card",
      ]}
      faqs={[
        {
          q: "How much Personal Loan amount can I borrow?",
          a: "You can borrow from ₹50,000 up to ₹50 Lakhs depending on your monthly income, credit score, current financial liabilities, and banking history.",
        },
        {
          q: "What is the minimum credit score required for personal loans?",
          a: "A CIBIL score of 675+ easily qualifies for standard terms, while a score of 750+ secures the lowest interest rates starting from 9.75% p.a. with fee waivers.",
        },
        {
          q: "Are there any hidden fees or upfront advance payments?",
          a: "No! Shreem Finserv follows strict zero upfront fee policies. Loan processing fees are deducted directly from the disbursed loan amount by the sanctioning bank with complete transparency.",
        },
        {
          q: "Can I prepay or foreclose my personal loan early?",
          a: "Yes, many of our lending partners offer part-prepayment and zero foreclosure charges after completing minimum vintage (typically 6 to 12 EMIs).",
        },
      ]}
    />
  );
}
