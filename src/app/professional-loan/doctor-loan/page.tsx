import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Doctor Loan — Professional Loan for Doctors up to ₹75 Lakhs | Shreem Finserv",
  description:
    "Collateral-free Doctor Loans from ₹1 Lakh to ₹75 Lakhs for medical practitioners, surgeons, dentists & clinic owners. Lowest rates from 11.99% p.a., 24-hour disbursal, flexible tenure up to 5 years across 50+ banks.",
  keywords: [
    "doctor loan",
    "professional loan for doctors",
    "medical equipment loan",
    "clinic expansion loan",
    "doctor personal loan",
    "unsecured loan for doctors",
    "shreem finserv doctor loan",
  ],
};

export default function DoctorLoanPage() {
  return (
    <ProductPageTemplate
      categoryId="professional-loan"
      categoryName="Doctor Loan"
      badge="Specialized Credit for Medical Practitioners"
      headline="Professional Loan For Doctors"
      highlightText="up to ₹75 Lakhs | From 11.99% p.a."
      description="Tailor-made collateral-free credit solutions designed specifically for self-employed doctors, clinic owners, surgeons, and healthcare practitioners. Upgrade your healthcare equipment, expand clinic infrastructure, or manage practice cash flows with instant online approval and flexible tenure up to 5 years."
      bannerImage="/images/professional-loan-inner-banner.jpg"
      maxAmount="₹1L – ₹75L"
      interestRate="From 11.99% p.a."
      tenure="Up to 5 Years (60 Months)"
      disbursalSpeed="Within 24 to 48 Hours"
      defaultSliderAmount={2500000}
      minSliderAmount={100000}
      maxSliderAmount={7500000}
      defaultEmiRate={11.99}
      defaultEmiTenureYears={3}
      features={[
        {
          title: "Customized for Healthcare Practitioners",
          desc: "Specially structured credit policies recognizing medical degrees (MBBS, MD, MS, BDS, MDS) and clinical practice vintage.",
          icon: "medical_services",
        },
        {
          title: "100% Collateral-Free & Unsecured",
          desc: "Zero requirement to mortgage clinic premises, pledge medical equipment, or provide gold collateral.",
          icon: "verified_user",
        },
        {
          title: "High Sanction up to ₹75 Lakhs",
          desc: "Access substantial liquidity from ₹1 Lakh up to ₹75 Lakhs to fund practice growth, hiring, or advanced diagnostic gear.",
          icon: "payments",
        },
        {
          title: "Express 24-48 Hour Disbursal",
          desc: "Instant digital e-KYC and automated bank statement verification ensure same-day sanctions and rapid direct account crediting.",
          icon: "bolt",
        },
        {
          title: "Flexible Repayment Horizon",
          desc: "Choose comfortable repayment terms from 12 to 60 months (up to 5 years) to maintain optimal practice cash flows.",
          icon: "tune",
        },
        {
          title: "Zero End-Usage Restrictions",
          desc: "Deploy funds freely for clinic renovation, cutting-edge medical technologies, hiring specialist staff, or consolidating high-interest debt.",
          icon: "health_and_safety",
        },
      ]}
      eligibility={[
        "Nationality: Applicant must be a Citizen of India.",
        "Age Criteria: Between 24 years (at loan application) and 65 years (at loan maturity).",
        "Eligible Medical Profiles: Self-employed Doctors (MBBS, MD, MS, BDS, MDS, DM, MCh, BHMS, BAMS) running their own clinics, nursing homes, dental centers, or hospitals.",
        "Professional Experience: Minimum 1 year of post-qualification continuous medical practice or clinical vintage.",
        "Minimum Annual Income: Minimum annual professional income receipts of at least ₹3 Lakhs.",
        "Credit Profile: Minimum 650+ CIBIL score with healthy repayment track record.",
      ]}
      documents={[
        "Proof of Identity: PAN Card, Aadhaar Card, Passport, Voter ID, or Driving License.",
        "Proof of Address: Electricity Bill, Utility Bill, or Registered Rent Agreement.",
        "Professional Qualification Proof: MBBS / MD / MS / BDS Degree Certificate and State/National Medical Council Registration Certificate.",
        "Practice & Clinic Proof: Clinical Establishment Certificate, Clinic Utility Bill, or Commercial Lease Agreement.",
        "Financial Documents: Last 6 to 12 Months Bank Statements and Last 2 Years ITR with Computation of Income.",
      ]}
      faqs={[
        {
          q: "How do I apply for a Doctor Loan with Shreem Finserv?",
          a: "You can apply 100% online through our simple 3-step digital process: enter your details in the application form, upload your medical registration and basic bank statements, and receive instant sanctions with funds credited within 24 to 48 hours.",
        },
        {
          q: "Do I need to pledge any security or collateral for a Doctor Loan?",
          a: "No. Professional Loans for Doctors at Shreem Finserv are 100% collateral-free and unsecured. You are not required to hypothecate clinic assets or pledge property.",
        },
        {
          q: "What are the interest rates and loan amounts available for Doctors?",
          a: "Doctor Loans range from ₹1 Lakh up to ₹75 Lakhs with preferential interest rates starting from 11.99% p.a. onwards, determined by your medical specialization and practice vintage.",
        },
        {
          q: "In how many days will the loan amount be disbursed to my bank account?",
          a: "With our digital verification platform, in-principle approval is provided within hours and funds are disbursed directly to your bank account within 24 to 48 hours post-verification.",
        },
        {
          q: "Can I use the Doctor Loan to buy medical equipment or renovate my clinic?",
          a: "Yes! There are no end-use restrictions. You can utilize the loan proceeds to purchase diagnostic/surgical equipment, expand clinic premises, set up an in-house pharmacy, or manage seasonal cash flow.",
        },
        {
          q: "Can I foreclose or prepay my Doctor Loan?",
          a: "Yes. You have the flexibility to prepay or foreclose your Doctor Loan after the initial lock-in period as per lender guidelines with nominal or zero foreclosure charges.",
        },
      ]}
    />
  );
}
