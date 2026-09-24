import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Car Loan (New & Used Cars) — Starting from 7.50% p.a. | Shreem Finserv",
  description:
    "Finance new and certified pre-owned cars with up to 80% on-road funding for new cars and up to 200% funding for used cars. Starting from 7.50% p.a., flexible repayment up to 8 years, instant digital approvals, and quick disbursement across 50+ banking partners.",
};

export default function CarLoanPage() {
  return (
    <ProductPageTemplate
      categoryId="car-loan"
      categoryName="Car Loan"
      badge="Vehicle Finance & Auto Loans"
      headline="Drive Your Dream Vehicle with"
      highlightText="Instant Car Loan"
      description="Finance up to 80% on-road price for brand new cars and up to 200% valuation for certified pre-owned vehicles. Quick digital approvals, flexible tenures up to 8 years, and competitive rates across top auto lenders."
      bannerImage="/images/car-loan-inner-banner.jpg"
      maxAmount="Up to ₹1 Crore (80% On-Road)"
      interestRate="From 7.50% p.a."
      tenure="Up to 8 Years"
      disbursalSpeed="Sanction in 2 Hours"
      defaultSliderAmount={800000}
      minSliderAmount={100000}
      maxSliderAmount={10000000}
      defaultEmiRate={7.50}
      defaultEmiTenureYears={5}
      features={[
        {
          title: "Up to 80% On-Road Funding (New Cars)",
          desc: "Get funding up to 80% of the on-road price for new cars covering registration, road tax, and comprehensive vehicle insurance.",
          icon: "directions_car",
        },
        {
          title: "Up to 200% Funding (Used Cars)",
          desc: "Competitive financing options available for certified used cars with funding up to 200% of the evaluated market value for vehicles up to 10 years old.",
          icon: "car_repair",
        },
        {
          title: "Flexible Tenures up to 8 Years",
          desc: "Choose manageable monthly EMI tenures from 1 to 8 years customized to your cash flows and affordability.",
          icon: "calendar_month",
        },
        {
          title: "Lowest Interest Rates",
          desc: "Enjoy preferential auto loan rates starting from 7.50% p.a. for new cars and 11.50% p.a. for used cars from India's leading public and private sector banks.",
          icon: "percent",
        },
        {
          title: "Instant In-Principle Sanction",
          desc: "Digital paperwork and instant credit evaluation provide fast in-principle sanctions within 2 to 4 hours.",
          icon: "bolt",
        },
        {
          title: "Zero Hidden Charges",
          desc: "Transparent loan terms with minimal documentation, nominal processing fees, and zero prepayment penalty options.",
          icon: "verified_user",
        },
      ]}
      eligibility={[
        "Employment Type: Salaried Professionals, Self-Employed Businessmen, Doctors, CAs, and Certified Professionals.",
        "Age Criteria: Minimum 21 years at the time of loan application, maximum 65 years at loan maturity.",
        "Minimum Income: ₹25,000 net monthly salary for Salaried or ₹3 Lakhs annual ITR for Self-Employed applicants.",
        "Work Experience: Minimum 1 year total employment (6 months in current job) or 2 years in current business.",
        "Credit Score: Minimum 700+ CIBIL score for instant rate concessions and high loan-to-value (LTV) sanctions.",
      ]}
      documents={[
        "Identity & Address Proof: PAN Card, Aadhaar Card, Passport, or Voter ID.",
        "Income Proof (Salaried): Last 3 Months Salary Slips, Latest Form 16, and Last 6 Months Salary Bank Statements.",
        "Income Proof (Self-Employed): Last 2 Years ITR with Computation, Audited Financials, and Last 6 Months Banking.",
        "Vehicle Documents: Vehicle Proforma Invoice / Quotation from authorized dealer (or RC copy & valuation report for used cars).",
      ]}
      faqs={[
        {
          q: "What is the maximum loan amount available for a Car Loan?",
          a: "You can avail financing up to ₹1 Crore or up to 80% of the on-road price for new vehicles and up to 200% funding for used vehicles depending on your income, vehicle segment, and lender guidelines.",
        },
        {
          q: "Can I finance a second-hand / pre-owned car?",
          a: "Yes. Shreem Finserv facilitates used car loans with up to 200% of the car's certified valuation for vehicles up to 10 years old, with tenures up to 5 years.",
        },
        {
          q: "What is the starting interest rate for car loans?",
          a: "Car loan interest rates start from 7.50% p.a. for new vehicles and 11.50% p.a. for pre-owned cars, based on applicant credit profile and vehicle model.",
        },
        {
          q: "Can I prepay or foreclose my car loan early?",
          a: "Yes, you can prepay part or all of your car loan after completing the initial lock-in period (typically 6 months). Several partner banks offer zero foreclosure fees after 1-2 years of regular EMI repayments.",
        },
      ]}
    />
  );
}
