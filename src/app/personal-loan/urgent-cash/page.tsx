import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Urgent Cash Advance - Instant 2-Hour Disbursal up to ₹5 Lakhs | Shreem Finserv",
  description:
    "Instant emergency cash loan online. Fast 2-hour disbursal, 100% paperless Aadhaar eKYC, flexible short-term tenures, starting 11.25% p.a. Zero hidden charges.",
};

export default function UrgentCashPage() {
  return (
    <ProductPageTemplate
      categoryName="Urgent Cash Advance"
      badge="Instant Liquidity Solution"
      headline="Instant 2-Hour Disbursal for"
      highlightText="Emergency Financial & Medical Needs"
      description="Unexpected expenses cannot wait for days of branch approvals. Get immediate unsecured funds from ₹50,000 up to ₹5 Lakhs credited directly to your bank account with zero physical paperwork."
      longOverview={`Life is unpredictable. Whether you face an unplanned medical emergency hospitalization, urgent vehicle repair, home renovation, or critical short-term working capital gap before client receivables arrive, waiting 7 to 10 days for traditional retail bank processing is simply not an option.

Shreem Finserv’s Instant Urgent Cash facility uses 100% automated algorithmic credit assessment, instant Aadhaar XML eKYC, and automated bank statement account aggregator parsing. Partnering with top-tier digital NBFCs and fintech lending banks (Poonawalla Fincorp, InCred, Tata Capital, KreditBee, DMI Finance), we issue instant in-principle loan approvals in under 15 minutes with complete bank account disbursal in as fast as 2 hours.`}
      maxAmount="Up to ₹5 Lakhs"
      interestRate="Starting 11.25% p.a."
      tenure="3 to 36 Months"
      disbursalSpeed="Within 2 Hours"
      defaultSliderAmount={200000}
      minSliderAmount={50000}
      maxSliderAmount={500000}
      defaultEmiRate={11.25}
      defaultEmiTenureYears={2}
      variants={[
        {
          title: "Medical Emergency Fast-Track",
          tag: "2-Hour SLA",
          desc: "Immediate liquidity for hospital bills, surgeries, diagnostic tests, and critical treatments.",
          amount: "Up to ₹5 Lakhs",
          icon: "emergency",
        },
        {
          title: "Short-Term Salary Advance",
          tag: "Instant",
          desc: "Bridge mid-month cash crunches, family school fees, or travel ticket bookings.",
          amount: "Up to ₹2 Lakhs",
          icon: "payments",
        },
        {
          title: "Home & Vehicle Urgent Repair",
          tag: "Fast Cash",
          desc: "Fund urgent roof leakage repairs, interior fixes, or accidental vehicle claims.",
          amount: "Up to ₹3.5 Lakhs",
          icon: "home_repair_service",
        },
        {
          title: "Micro-Business Bridge Loan",
          tag: "Retail MSME",
          desc: "Quick 30-day liquidity to clear supplier dues or grab bulk raw material cash discounts.",
          amount: "Up to ₹5 Lakhs",
          icon: "storefront",
        },
      ]}
      benefits={[
        {
          title: "100% Paperless Digital Processing",
          desc: "Complete the entire application from your smartphone using Aadhaar OTP verification and net banking statement link.",
          icon: "smartphone",
        },
        {
          title: "Guaranteed 2-Hour Disbursal SLA",
          desc: "Direct automated NEFT/IMPS funds transfer to your registered savings or current account upon e-sign agreement.",
          icon: "bolt",
        },
        {
          title: "No Collateral or Guarantor",
          desc: "Clean unsecured facility requiring no gold, property, or fixed deposits as pledge.",
          icon: "lock_open",
        },
        {
          title: "Flexible Micro-Tenures (3 to 36 Mos)",
          desc: "Select comfortable short-term tenures to pay off quickly and minimize overall interest outflow.",
          icon: "date_range",
        },
        {
          title: "Zero Hidden Administrative Charges",
          desc: "Full transparency on processing fees and interest calculations with no surprise charges.",
          icon: "money_off",
        },
        {
          title: "Build & Rebuild Credit Score",
          desc: "On-time repayments are reported to CIBIL and Experian monthly, boosting your long-term credit profile.",
          icon: "trending_up",
        },
      ]}
      eligibility={[
        "Applicant Type: Salaried Employees (Govt/Pvt Ltd/MNC) and Self-Employed Individuals",
        "Age Criteria: 21 to 58 years",
        "Minimum Monthly Net Take-Home: ₹25,000 credited directly to a bank account",
        "Active Bank Account: Valid savings/current account with active Net Banking or UPI facilities",
        "Credit Rating: CIBIL score of 650+ (Profiles with limited credit history also considered based on banking cash flows)",
      ]}
      documents={[
        "Instant Identity Proof: PAN Card (Verified via NSDL instant lookup)",
        "Address & KYC: Aadhaar Card (Instant DigiLocker / OTP verification)",
        "Income Proof: Last 3 months bank statements via Account Aggregator / PDF net banking upload",
        "Employment Proof: Official Company Email ID or Employee ID card (for salaried applicants)",
        "Bank Mandate: eNACH / UPI AutoPay setup for automated hassle-free EMI repayments",
      ]}
      faqs={[
        {
          q: "How fast will the urgent cash be credited to my bank account?",
          a: "Once you complete digital KYC and e-sign the digital loan agreement, funds are disbursed via IMPS/RTGS within 2 hours during banking operational hours.",
        },
        {
          q: "Is there any physical document collection or home verification?",
          a: "No. The entire process for loans up to ₹5 Lakhs is 100% digital, paperless, and contactless.",
        },
        {
          q: "Can I apply if my CIBIL score is low or I am a first-time borrower?",
          a: "Yes. Our digital underwriting engine considers your recent 6-month banking transaction velocity and monthly salary consistency, allowing applicants with emerging credit scores (650+) to qualify.",
        },
        {
          q: "What is the minimum and maximum loan amount available?",
          a: "You can apply for amounts as low as ₹50,000 up to ₹5,00,000 depending on your monthly net income and debt service ratio.",
        },
        {
          q: "How are the monthly EMIs repaid?",
          a: "Repayments are automated through RBI-regulated eNACH / UPI AutoPay mandate linked directly to your primary salary or business bank account.",
        },
        {
          q: "Can I prepay the urgent cash advance early?",
          a: "Yes. You can prepay or foreclose the loan anytime through our partner lender portals. Prepayment rules vary between NIL to standard minimal charges after 3 to 6 EMIs.",
        },
        {
          q: "Will checking my eligibility hurt my credit score?",
          a: "No. Checking your initial pre-approved eligibility on Shreem Finserv is a soft inquiry with zero negative impact on your CIBIL score.",
        },
        {
          q: "Is my personal data and Aadhaar details safe?",
          a: "Absolutely. Shreem Finserv adheres strictly to the Digital Personal Data Protection (DPDP) Act 2026 and utilizes 256-bit AES encryption with zero third-party data sharing.",
        },
      ]}
    />
  );
}
