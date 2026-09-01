import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Urgent Cash Advance — Instant 2-Hour Disbursal up to ₹25 Lakhs | Shreem Finserv",
  description:
    "Instant emergency cash loan online. Fast 2-hour disbursal, 100% paperless Aadhaar eKYC, flexible short-term tenures, starting 1.15% per month. Zero hidden charges.",
};

export default function UrgentCashPage() {
  return (
    <ProductPageTemplate
      categoryName="Urgent Cash Advance"
      badge="Express Liquidity Solution"
      headline="Instant 2-Hour Disbursal for"
      highlightText="Emergency Financial & Personal Needs (₹50K – ₹25L)"
      description="Unexpected expenses cannot wait. Get immediate unsecured funds from ₹50,000 up to ₹25 Lakhs credited directly to your bank account with 100% paperless Aadhaar e-KYC and instant sanction."
      bannerImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=75"
      maxAmount="₹50K – ₹25L"
      interestRate="From 1.15% / mo"
      tenure="3 to 24 Months"
      disbursalSpeed="Within 2 Hours"
      defaultSliderAmount={200000}
      minSliderAmount={50000}
      maxSliderAmount={2500000}
      defaultEmiRate={13.5}
      defaultEmiTenureYears={2}
      features={[
        {
          title: "2-Hour Express Disbursal",
          desc: "Instant automated approval with direct NEFT/IMPS credit to your savings account in under 2 hours.",
          icon: "bolt",
        },
        {
          title: "100% Paperless e-KYC",
          desc: "Complete digital processing via Aadhaar OTP verification and online bank account aggregator.",
          icon: "description",
        },
        {
          title: "Zero Collateral Needed",
          desc: "No property, gold, or guarantor required. Approved strictly based on income and bank cash flows.",
          icon: "verified_user",
        },
        {
          title: "Flexible Short Tenures",
          desc: "Choose budget-friendly repayment tenures from 3 to 24 months with no strict lock-in periods.",
          icon: "schedule",
        },
        {
          title: "Multipurpose Liquidity",
          desc: "Use funds freely for medical emergencies, wedding expenses, home repairs, or travel.",
          icon: "payments",
        },
        {
          title: "Transparent & Zero Hidden Fees",
          desc: "100% clear upfront fee schedule with zero undisclosed brokerage or administrative penalties.",
          icon: "money_off",
        },
      ]}
      eligibility={[
        "Age Range: 21 to 58 years of age.",
        "Employment: Salaried Employees (Corporate, Pvt Ltd, Govt) or Self-Employed Individuals.",
        "Monthly Income: Minimum net salary of ₹20,000/month credited directly to bank account.",
        "Credit Profile: Minimum 650+ CIBIL score.",
        "Nationality: Indian Resident.",
      ]}
      documents={[
        "KYC Identity: PAN Card and Aadhaar Card (Linked to active mobile number).",
        "Income Proof: Last 3 Months Salary Slips (Salaried) or 1 Year ITR (Self-Employed).",
        "Bank Statements: Last 3–6 Months Salary Account Bank Statement via Net Banking / Account Aggregator.",
      ]}
      faqs={[
        {
          q: "How fast can I get funds credited to my bank account?",
          a: "Upon completing online OTP e-KYC and digital bank statement verification, loan funds are disbursed via IMPS directly into your account within 2 hours.",
        },
        {
          q: "Do I need to submit physical paper documents?",
          a: "No. The entire process is 100% digital and paperless. You can apply and complete verification from your smartphone.",
        },
        {
          q: "Can I prepay the urgent cash advance before tenure ends?",
          a: "Yes. You can foreclose or part-pay your loan anytime with zero or minimal foreclosure charges.",
        },
      ]}
    />
  );
}
