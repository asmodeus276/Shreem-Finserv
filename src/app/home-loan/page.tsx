import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Home Loans — From 8.5% p.a. | Shreem Finserv",
  description:
    "Apply for affordable Home Loans from ₹10 Lakhs to ₹5 Crore. Lowest market rates starting from 8.5% p.a., flexible 30-year tenure, up to 90% financing, and zero hidden charges across 50+ banks.",
};

export default function HomeLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Home Loan"
      badge="Lowest Interest Rates in India"
      headline="Turn Your Dream Home Into Reality With"
      highlightText="Affordable Home Loans from ₹10 Lakhs to ₹5 Crore"
      description="A Home Loan helps individuals purchase, construct, renovate, or extend a residential property with lowest interest rates, extended repayment tenures, and maximum tax benefits."
      longOverview={`A Home Loan is designed to help individuals and families purchase, construct, renovate, or extend their residential property. Whether you are buying an under-construction builder floor, ready-to-move-in apartment, constructing a custom villa on a residential plot, or looking to transfer your existing high-cost home loan via balance transfer, our platform delivers the lowest borrowing rates.

Shreem Finserv collaborates with 50+ leading scheduled commercial banks and premier housing finance companies (HFCs)—including SBI, HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda, Kotak, and Godrej Housing Finance—to guarantee preferential interest rates starting from 8.5% p.a. With our dedicated legal and technical appraisal desk, you receive up to 90% financing and fast, hassle-free sanction.`}
      maxAmount="₹10L – ₹5Cr"
      interestRate="From 8.5% p.a."
      tenure="Up to 30 Years (360 Mos)"
      disbursalSpeed="3 to 5 Working Days"
      defaultSliderAmount={5000000}
      minSliderAmount={1000000}
      maxSliderAmount={50000000}
      defaultEmiRate={8.5}
      defaultEmiTenureYears={20}
      variants={[
        {
          title: "New Home Purchase Loan",
          tag: "Most Popular",
          desc: "Finance ready-to-move or under-construction builder flats and standalone homes.",
          amount: "₹10L to ₹5 Crore",
          icon: "home",
        },
        {
          title: "Plot & Home Construction Loan",
          tag: "Custom Build",
          desc: "Funding to purchase residential land and construct your customized home step by step.",
          amount: "Up to ₹5 Crore",
          icon: "foundation",
        },
        {
          title: "Home Loan Balance Transfer",
          tag: "Save on EMI",
          desc: "Transfer your existing high-cost home loan to top banks with lower rates & top-up cash.",
          amount: "Starting 8.5% p.a.",
          icon: "published_with_changes",
        },
        {
          title: "Home Renovation & Extension",
          tag: "Interior Upgrade",
          desc: "Capital to expand rooms, remodel interiors, or enhance structural valuation.",
          amount: "Up to ₹50 Lakhs",
          icon: "home_repair_service",
        },
      ]}
      features={[
        {
          title: "Lowest Market Interest Rates",
          desc: "Access competitive interest rates starting from 8.5% p.a. through India's premier public and private banks.",
          icon: "percent",
        },
        {
          title: "Flexible Long Repayment Tenure",
          desc: "Repayment tenures up to 30 years (360 months) ensuring budget-friendly monthly EMIs for your household.",
          icon: "schedule",
        },
        {
          title: "Up to 80%–90% Property Financing",
          desc: "High Loan-to-Value (LTV) funding based on the registered agreement value of the residential property.",
          icon: "pie_chart",
        },
        {
          title: "Minimal Documentation",
          desc: "Simple paperwork with digital KYC verification and streamlined document submission.",
          icon: "description",
        },
        {
          title: "Substantial Annual Tax Benefits",
          desc: "Claim tax deductions every year on principal repayment (Sec 80C up to ₹1.5L) and interest paid (Sec 24b up to ₹2L).",
          icon: "receipt_long",
        },
        {
          title: "Balance Transfer Facility",
          desc: "Transfer your existing home loan to premier lenders for lower interest rates and additional liquid top-up funds.",
          icon: "swap_horiz",
        },
        {
          title: "Quick Processing & Disbursal",
          desc: "Streamlined digital evaluation with in-principle sanction in 24 hours and fast legal clearance.",
          icon: "bolt",
        },
        {
          title: "New & Resale Properties",
          desc: "Financing available for newly built developer apartments, resale properties, plot purchase, and home extensions.",
          icon: "domain",
        },
      ]}
      benefits={[
        {
          title: "Unmatched Lowest Interest Rates",
          desc: "Preferential access to premier bank rate slabs starting at 8.5% p.a. saving you lakhs over your loan tenure.",
          icon: "savings",
        },
        {
          title: "Flexible Repayment Up to 30 Years",
          desc: "Comfortable long-term tenure ensuring low, budget-friendly monthly EMIs for your family.",
          icon: "calendar_month",
        },
        {
          title: "Substantial Tax Deductions",
          desc: "Avail annual tax exemptions under Section 80C (up to ₹1.5L) and Section 24b (up to ₹2L).",
          icon: "receipt_long",
        },
        {
          title: "End-to-End Legal & Title Assistance",
          desc: "Our legal desk conducts free property document vetting, encumbrance checks, and technical evaluation.",
          icon: "verified_user",
        },
        {
          title: "Balance Transfer with Top-Up",
          desc: "Switch your existing home loan to lower ROI and get additional liquid top-up cash.",
          icon: "swap_horiz",
        },
        {
          title: "Zero Foreclosure & Part-Payment Charges",
          desc: "Pay extra whenever you have surplus cash without paying any pre-closure penalty on floating rate loans.",
          icon: "money_off",
        },
      ]}
      feesSchedule={[
        { chargeType: "Processing Fees", standardBankRate: "0.50% to 1.00% of loan amount", shreemAdvantage: "From 0.25% (Special Promotional Slabs)" },
        { chargeType: "Prepayment / Foreclosure", standardBankRate: "0% on Floating Rate loans (RBI mandated)", shreemAdvantage: "100% Zero Foreclosure Penalty" },
        { chargeType: "Legal & Valuation Fees", standardBankRate: "₹5,000 to ₹10,000 per property", shreemAdvantage: "At actuals / Discounted via tie-ups" },
        { chargeType: "Advisory & Doorstep Assistance", standardBankRate: "Charged by brokers (0.5% - 1%)", shreemAdvantage: "₹0 Free Service (Zero Upfront Charges)" },
      ]}
      eligibility={[
        "Age Range: Applicant should be between 21 and 65 years at loan maturity.",
        "Employment Status: Salaried Individuals (Govt, MNC, Corporate) or Self-Employed Applicants with stable income.",
        "Income Stability: Stable and verifiable monthly income of ₹25,000/month (Salaried) or ₹3.5 Lakhs annual ITR (Self-Employed).",
        "Credit Profile: Minimum 700+ CIBIL score with clean repayment track record.",
        "Property Criteria: Residential property must meet lender technical, structural, and legal clearance guidelines.",
        "Nationality: Applicant must be an Indian Resident.",
      ]}
      documents={[
        "KYC Identity & Address Proof: PAN Card, Aadhaar Card (Linked to Mobile), Passport, Voter ID, or Utility Bill.",
        "Income Documents (Salaried): Last 3 Months Salary Slips, 6 Months Bank Statement showing salary credits, Form 16 / 2 Years ITR.",
        "Income Documents (Self-Employed): Last 2–3 Years ITR with Computation of Income, Audited Balance Sheet & P&L, 12 Months Current Bank Statements, GST Certificate.",
        "Property Documents: Agreement to Sell / Builder Allotment Letter, Mother Deed chain for 13–30 years, Approved Building Sanction Plan, Latest Paid Property Tax Receipts.",
      ]}
      faqs={[
        {
          q: "What is the maximum loan amount I can get for a Home Loan?",
          a: "Home loan amounts range from ₹10 Lakhs up to ₹5 Crore (and higher for premium properties), funding up to 80% to 90% of the registered property cost.",
        },
        {
          q: "What is the interest rate for a Home Loan?",
          a: "Interest rates start from 8.5% p.a. based on your credit score, employment stability, and lender selection across our 50+ banking partners.",
        },
        {
          q: "What tax benefits can I claim on my Home Loan?",
          a: "Under Section 80C, you can claim deductions up to ₹1.5 Lakhs per year on principal repayment. Under Section 24(b), you can claim up to ₹2 Lakhs per year on interest paid for self-occupied properties.",
        },
        {
          q: "How long does home loan sanction and disbursal take?",
          a: "With digital documentation, in-principle sanction is issued within 24 hours. Property legal verification and technical inspection take 3 to 5 business days before final disbursal.",
        },
      ]}
    />
  );
}
