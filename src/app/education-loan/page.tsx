import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Education Loan (Domestic & Overseas Studies) — From 8.50% p.a. | Shreem Finserv",
  description:
    "Fund higher education in premier Indian universities and top overseas colleges. Starting from 8.50% p.a., up to 100% funding with living expenses, flexible 15-year repayment, and zero prepayment penalties.",
};

export default function EducationLoanPage() {
  return (
    <ProductPageTemplate
      categoryId="education-loan"
      categoryName="Education Loan"
      badge="Global & Domestic Higher Education"
      headline="Fund Your Academic Future with"
      highlightText="Education Loan"
      description="Pursue higher education in top Indian universities and leading overseas institutions with student-friendly education loans starting from 8.50% p.a., full tuition and living expense coverage, and flexible repayment tenures up to 15 years."
      bannerImage="/images/personal-loan-inner-banner.jpg"
      maxAmount="₹2L – ₹1.5Cr"
      interestRate="From 8.50% p.a."
      tenure="Up to 15 Years"
      disbursalSpeed="2 to 3 Working Days"
      defaultSliderAmount={2500000}
      minSliderAmount={200000}
      maxSliderAmount={15000000}
      defaultEmiRate={8.50}
      defaultEmiTenureYears={10}
      features={[
        {
          title: "Up to 100% Complete Financing",
          desc: "Covers full tuition fees, accommodation, laboratory charges, laptop, books, and living expenses.",
          icon: "school",
        },
        {
          title: "Lowest Student Rates from 8.50% p.a.",
          desc: "Special concessionary interest rates for premier institutes (IITs, IIMs, AIIMS, and Ivy League universities).",
          icon: "percent",
        },
        {
          title: "Moratorium Period Included",
          desc: "Repayment holiday during the course period plus 6 to 12 months after course completion or job placement.",
          icon: "schedule",
        },
        {
          title: "Collateral-Free up to ₹50 Lakhs",
          desc: "Fast-track unsecured education financing based on admission offer letter and co-applicant profile.",
          icon: "verified_user",
        },
        {
          title: "Pre-Visa Sanction Letters",
          desc: "Fast in-principle loan sanction letters to meet international student visa financial clearance.",
          icon: "public",
        },
        {
          title: "Tax Deduction Under Sec 80E",
          desc: "Claim 100% tax deductions on interest paid towards education loan without any upper financial cap for 8 years.",
          icon: "receipt_long",
        },
      ]}
      eligibility={[
        "Nationality: Indian citizen with confirmed admission in recognized higher education courses in India or abroad.",
        "Eligible Courses: Graduation, Post-Graduation, Engineering, Medical, MBA, STEM, and certified vocational programs.",
        "Co-Applicant Requirement: Parent, spouse, legal guardian, or sibling with verifiable income as co-borrower.",
        "Academic Track Record: Minimum 50%+ aggregate in qualifying examinations.",
        "Credit Profile: Minimum 650+ CIBIL score for co-applicant.",
      ]}
      documents={[
        "Student KYC: PAN Card, Aadhaar Card, Passport (mandatory for overseas studies).",
        "Academic Records: 10th, 12th, Degree Marksheets, and Entrance Exam Scorecard (GRE, GMAT, IELTS, TOEFL, CAT, etc.).",
        "Admission Proof: Formal Admission Offer Letter / I-20 / CAS from the university with detailed fee schedule.",
        "Co-Applicant KYC & Income Proof: PAN, Aadhaar, 3 Months Salary Slips (Salaried) / 2 Years ITR (Self-Employed), and 6 Months Bank Statements.",
      ]}
      faqs={[
        {
          q: "What expenses are covered under the Education Loan?",
          a: "Education loans cover 100% of university tuition fees, exam fees, hostel & living accommodation, books, equipment (laptop), health insurance, and return air travel for overseas courses.",
        },
        {
          q: "When does the loan repayment start?",
          a: "Repayment typically begins after the moratorium period: Course duration + 6 months to 1 year after graduation, allowing students to settle into employment first.",
        },
        {
          q: "Can I get an education loan without collateral?",
          a: "Yes! Collateral-free unsecured education loans up to ₹50 Lakhs are available for premier Indian and global institutions based on student merit and co-applicant income.",
        },
        {
          q: "What is the tax benefit available on education loans?",
          a: "Under Section 80E of the Income Tax Act, you can claim tax deduction on the entire interest amount paid on education loans for up to 8 consecutive years with no maximum limit.",
        },
      ]}
    />
  );
}
