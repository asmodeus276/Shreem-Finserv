import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Personal Loans for Doctors - Preferential Rates up to ₹50 Lakhs | Shreem Finserv",
  description:
    "Exclusive unsecured personal & professional loans for MBBS, MD, MS, BDS, and specialized doctors. Preferential rates from 9.99% p.a., 24-hour disbursal, zero collateral.",
};

export default function DoctorLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Personal Loan for Doctors"
      badge="Specialized Medical Professional Scheme"
      headline="Exclusive Unsecured Credit Lines"
      highlightText="Engineered for Doctors & Healthcare Practitioners"
      description="Medical practitioners need frictionless, collateral-free liquidity to scale clinics, procure cutting-edge diagnostic equipment, or fund personal life milestones. Shreem Finserv offers custom-structured loans with priority underwriting across 50+ banking partners."
      longOverview={`As a licensed medical practitioner (MBBS, MD, MS, BDS, MDS, BHMS, BAMS), your financial profile represents high stability, elite creditworthiness, and essential societal impact. Traditional retail loan products often fail to acknowledge the unique cash flow dynamics of private clinics, consultation retainers, and hospital visiting fees.

Shreem Finserv’s dedicated Doctor Lending Desk bypasses traditional cumbersome audit protocols. We provide collateral-free personal and professional credit lines up to ₹50 Lakhs based primarily on your Medical Registration Certificate and recent banking turnover. Whether you are expanding an ICU setup, opening a multi-speciality polyclinic, or attending an international medical fellowship, our consortium of 50+ partner banks guarantees lowest-in-class interest rates starting from 9.99% p.a.`}
      maxAmount="Up to ₹50 Lakhs"
      interestRate="Starting 9.99% p.a."
      tenure="12 to 84 Months"
      disbursalSpeed="Within 24 Hours"
      defaultSliderAmount={3500000}
      minSliderAmount={200000}
      maxSliderAmount={5000000}
      defaultEmiRate={9.99}
      defaultEmiTenureYears={5}
      variants={[
        {
          title: "Clinic Setup & Expansion Loan",
          tag: "Unsecured",
          desc: "Finance modern interiors, diagnostic setups, consultation suites, and pharmacy inventory.",
          amount: "Up to ₹50 Lakhs",
          icon: "local_hospital",
        },
        {
          title: "Medical Equipment Refinance",
          tag: "Low Rate",
          desc: "Fund advanced ultrasound machines, dental chairs, laser workstations, and surgical tools.",
          amount: "Up to ₹1 Crore",
          icon: "biomedical",
        },
        {
          title: "Doctor Home & Clinic Mortgage",
          tag: "Secured",
          desc: "Low-cost high-tenure mortgage for purchasing commercial clinic space or prime residential homes.",
          amount: "Up to ₹10 Crore",
          icon: "home_work",
        },
        {
          title: "Personal Milestone & Travel Loan",
          tag: "Instant",
          desc: "Unrestricted end-use funds for international medical conferences, family weddings, or tax outflows.",
          amount: "Up to ₹40 Lakhs",
          icon: "flight_takeoff",
        },
      ]}
      benefits={[
        {
          title: "No Collateral or Guarantor",
          desc: "100% unsecured lending sanctioned solely on your medical degree, registration license, and clean repayment track.",
          icon: "verified_user",
        },
        {
          title: "Preferential Interest Slabs",
          desc: "Direct tie-ups with HDFC, ICICI, SBI, and Axis Bank ensuring doctor-exclusive 9.99% interest pricing.",
          icon: "percent",
        },
        {
          title: "Flexi-Hybrid Overdraft Facility",
          desc: "Withdraw and repay capital as per your clinic's patient inflow; pay interest only on the utilized amount.",
          icon: "account_balance_wallet",
        },
        {
          title: "Minimal Financial Scrutiny",
          desc: "No balance sheet auditing or complex P&L requirements for loans up to ₹30 Lakhs for established doctors.",
          icon: "task",
        },
        {
          title: "Extended 7-Year Tenure",
          desc: "Comfortable repayment horizons up to 84 months keeping monthly EMI burden minimal during initial practice setup.",
          icon: "calendar_month",
        },
        {
          title: "NIL Foreclosure Post 12 EMIs",
          desc: "Full freedom to close the loan or make bulk prepayments from surplus consultancy income with zero penalty.",
          icon: "lock_open",
        },
      ]}
      eligibility={[
        "Educational Qualification: MBBS, MD, MS, BDS, MDS, BHMS, BAMS from recognized MCI/NMC university",
        "Professional Vintage: Minimum 2 years post-registration experience (1 year for MD/MS specialists)",
        "Age Criteria: 25 to 65 years at the time of loan maturity",
        "Minimum Monthly Net Receipts: ₹60,000 for salaried doctors / ₹1,00,000 for self-employed practitioners",
        "Credit Health: CIBIL score of 700+ with clean repayment history on existing facilities",
      ]}
      documents={[
        "KYC Proofs: PAN Card, Aadhaar Card / Passport",
        "Medical Credentials: NMC / State Medical Council Registration Certificate & Highest Degree",
        "Income Proofs (Salaried): Last 3 months payslips + Form 16",
        "Income Proofs (Self-Employed): Last 2 years ITR with computation sheets + P&L statement",
        "Banking Statements: Last 6 months operative bank statements showing consultancy/practice receipts",
        "Clinic Ownership Proof: Electricity bill / Lease agreement (for self-employed clinic owners)",
      ]}
      faqs={[
        {
          q: "What is the maximum unsecured loan amount a doctor can obtain?",
          a: "Under the doctor-specific unsecured lending program, practicing doctors can avail up to ₹50 Lakhs without pledging any collateral, gold, or property. For larger equipment or multi-speciality hospital infrastructure, secured lines up to ₹15 Crores are available.",
        },
        {
          q: "Can BDS, BAMS, and BHMS practitioners apply for this loan?",
          a: "Yes. In addition to allopathic MBBS/MD/MS doctors, registered dental practitioners (BDS/MDS) and AYUSH practitioners (BAMS/BHMS) with active state council registration and minimum 2 years of practice are fully eligible.",
        },
        {
          q: "Is there any restriction on how the sanctioned funds can be used?",
          a: "No. The Personal Loan for Doctors has zero end-use restrictions. You can utilize the funds for clinic renovation, hiring staff, medical device purchases, debt consolidation, children's overseas education, or personal vacations.",
        },
        {
          q: "How fast will the funds be disbursed to my bank account?",
          a: "Upon complete digital document submission, in-principle approval is generated within 4 hours. Final documentation execution and disbursement into your designated bank account typically complete within 24 to 36 hours.",
        },
        {
          q: "How does the Flexi Hybrid Drop-Line overdraft work for doctors?",
          a: "With a Flexi Drop-Line facility, a predetermined limit (e.g. ₹35 Lakhs) is assigned to your current account. You can withdraw funds whenever a supplier payment or clinic expense arises, and deposit surplus patient collections anytime. Interest is charged strictly on daily utilized balance, saving up to 40% on interest.",
        },
        {
          q: "Are there any foreclosure or prepayment charges if I close the loan early?",
          a: "Shreem Finserv partners with banks offering NIL foreclosure charges on floating-rate doctor loans once 12 regular EMIs have been successfully serviced.",
        },
        {
          q: "Does applying through Shreem Finserv impact my CIBIL score?",
          a: "No. Our initial eligibility assessment is a soft inquiry that has zero negative impact on your CIBIL or Experian credit score.",
        },
        {
          q: "Can doctors working in government or corporate hospitals apply?",
          a: "Yes. Salaried medical consultants and doctors employed at government medical colleges, AIIMS, Apollo, Max, Fortis, and other corporate hospitals are eligible with expedited salary-slip processing.",
        },
      ]}
    />
  );
}
