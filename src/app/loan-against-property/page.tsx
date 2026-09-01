import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Loan Against Property (LAP) — From 9% p.a. | Shreem Finserv",
  description:
    "Apply for Loan Against Property (LAP) from ₹25 Lakhs to ₹10 Crore. Lowest mortgage rates starting from 9% p.a., flexible 15-year tenure, up to 75% LTV, and swift legal clearance across 50+ lenders.",
};

export default function LapPage() {
  return (
    <ProductPageTemplate
      categoryName="Loan Against Property"
      badge="Secured Real Estate Equity Line"
      headline="Unlock Substantial Capital Against"
      highlightText="Residential, Commercial & Industrial Real Estate (₹25L – ₹10Cr)"
      description="A Loan Against Property (LAP) allows you to unlock the value of your residential, commercial, or industrial property and obtain high-ticket funds for personal or business requirements at significantly lower interest rates."
      longOverview={`A Loan Against Property (LAP) is one of the most cost-effective borrowing instruments in India. By mortgaging clear-title residential homes, commercial office buildings, industrial plots, or retail shops, property owners can access substantial liquidity at interest rates significantly lower than unsecured business or personal loans.

Shreem Finserv collaborates with India's tier-1 housing finance companies (HFCs) and scheduled commercial banks—including HDFC Bank, SBI, ICICI Bank, Axis Bank, Piramal Capital, Godrej Finance, and Bajaj Housing—to deliver customized mortgage structures. Whether you are aiming to reduce monthly interest outflow through debt consolidation, expand manufacturing capacity, or discount long-term commercial lease rentals (LRD), our legal and technical appraisal desk guarantees maximum Loan-to-Value (up to 75%) and swift title clearance.`}
      maxAmount="₹25L – ₹10Cr"
      interestRate="From 9% p.a."
      tenure="Up to 15 Years (180 Mos)"
      disbursalSpeed="5 to 7 Working Days"
      defaultSliderAmount={7500000}
      minSliderAmount={2500000}
      maxSliderAmount={100000000}
      defaultEmiRate={9.0}
      defaultEmiTenureYears={10}
      variants={[
        {
          title: "Residential Property Mortgage",
          tag: "High LTV",
          desc: "Borrow against self-occupied or rented residential houses, apartments, and villas.",
          amount: "Up to ₹10 Crore",
          icon: "cottage",
        },
        {
          title: "Commercial & Office Space LAP",
          tag: "Business",
          desc: "Unlock liquidity against retail shops, corporate office floors, and commercial complexes.",
          amount: "Up to ₹15 Crore",
          icon: "apartment",
        },
        {
          title: "Industrial Plot & Warehouse LAP",
          tag: "Industrial",
          desc: "Structured term loans against industrial sheds, warehouses, and manufacturing land parcels.",
          amount: "Up to ₹20 Crore",
          icon: "factory",
        },
        {
          title: "Lease Rental Discounting (LRD)",
          tag: "Cash Flow",
          desc: "Monetize future rental cash flows from premier corporate, retail, or banking tenants.",
          amount: "Up to ₹50 Crore",
          icon: "currency_exchange",
        },
      ]}
      features={[
        {
          title: "High Loan Amount (Up to 75% LTV)",
          desc: "Unlock maximum liquidity from ₹25 Lakhs up to ₹10 Crore based on certified technical property valuation.",
          icon: "pie_chart",
        },
        {
          title: "Lower Interest Rates",
          desc: "Access competitive interest rates starting from 9% p.a., significantly lower than unsecured loans.",
          icon: "savings",
        },
        {
          title: "Extended Repayment Horizon",
          desc: "Flexible tenure up to 15–20 years (up to 180 months) keeping your monthly EMI burden low and manageable.",
          icon: "calendar_month",
        },
        {
          title: "Multi-Property Eligibility",
          desc: "Pledge residential houses, freehold builder flats, commercial shops, office spaces, and industrial plots.",
          icon: "domain",
        },
        {
          title: "Flexible Multipurpose End-Use",
          desc: "Use funds freely for business expansion, debt restructuring, working capital, or personal milestones.",
          icon: "tune",
        },
        {
          title: "Balance Transfer & Top-Up",
          desc: "Transfer existing high-rate LAP from other lenders to lower your interest and unlock surplus top-up funds.",
          icon: "swap_horiz",
        },
        {
          title: "Retain Full Ownership & Usage",
          desc: "Continue living in your residence or running business operations from your property without any disruption.",
          icon: "home_pin",
        },
        {
          title: "Simplified Legal & Technical Clearance",
          desc: "Dedicated legal desk for quick title vetting, encumbrance check, and hassle-free property appraisal.",
          icon: "verified_user",
        },
      ]}
      benefits={[
        {
          title: "Lowest-in-Market Interest Rates",
          desc: "Starting at just 9% p.a., secured mortgage financing reduces your monthly interest outflow by up to 50% compared to unsecured loans.",
          icon: "savings",
        },
        {
          title: "Extended 15-Year Repayment Horizon",
          desc: "Long amortization tenures up to 180 months keep your monthly EMI affordable and manageable for long-term cash flow.",
          icon: "schedule",
        },
        {
          title: "High Loan-to-Value (LTV) Up to 75%",
          desc: "Receive maximum sanction limits based on transparent, certified technical property valuation and circle rates.",
          icon: "pie_chart",
        },
        {
          title: "Debt Consolidation Superpower",
          desc: "Merge multiple high-interest personal, business, or credit card loans into a single, low-cost mortgage EMI.",
          icon: "merge_type",
        },
        {
          title: "Retain Full Ownership & Usage",
          desc: "Continue living in your residence or running business operations from your commercial property without disruption.",
          icon: "home_pin",
        },
        {
          title: "Balance Transfer + Massive Top-Up",
          desc: "Transfer existing LAP from other lenders to lower your rate and unlock immediate surplus top-up funds.",
          icon: "swap_horiz",
        },
      ]}
      feesSchedule={[
        { chargeType: "Processing Fees", standardBankRate: "1.00% to 2.00% of loan amount", shreemAdvantage: "From 0.50% (Special Institutional Slabs)" },
        { chargeType: "Property Legal & Technical Valuation", standardBankRate: "₹7,500 to ₹15,000 per property", shreemAdvantage: "Subsidized / Waived by select lenders" },
        { chargeType: "Foreclosure Charges", standardBankRate: "2% to 4% (for non-individual borrowers)", shreemAdvantage: "Zero foreclosure charges on floating rates" },
        { chargeType: "Advisory & Brokerage Fee", standardBankRate: "1% to 2% charged by DSA brokers", shreemAdvantage: "₹0 Free Advisory (Zero Upfront Brokerage)" },
      ]}
      eligibility={[
        "Age Range: Applicant should be between 21 and 65 years at the time of loan maturity.",
        "Employment Status: Salaried Individuals, Self-Employed Professionals (Doctors, CAs), Business Proprietors, Directors, LLPs.",
        "Property Title: Clear, marketable freehold title without pending litigation, family disputes, or municipal encumbrances.",
        "Eligible Property Types: Freehold residential apartments, independent houses, approved commercial buildings, industrial plots.",
        "Income Stability: Stable and verifiable income source to support loan repayment (FOIR within 60%).",
        "Credit Profile: Minimum 680+ CIBIL score with healthy repayment track record.",
        "Nationality: Applicant must be an Indian Resident.",
      ]}
      documents={[
        "Property Title Documents: Registered Sale Deed, Conveyance Deed, Allotment Letter, Mother Deed chain for 13–30 years.",
        "Municipal Approvals: Approved Building Sanction Plan, Latest Paid Property Tax Receipts, Occupancy Certificate (OC).",
        "KYC of Applicants: PAN Card, Aadhaar Card, Passport or Voter ID of all co-owners and applicants.",
        "Income Proofs (Salaried): Last 3 Months Payslips, Form 16 (Part A & B), 6 Months Bank Statements.",
        "Income Proofs (Self-Employed / Business): Last 3 Years Audited Financial Statements with ITR and Computation, 12 Months Current Bank Statements, GST Certificate.",
        "Existing Loan Track (if Balance Transfer): Loan Sanction Letter and 12-month repayment track statement.",
      ]}
      faqs={[
        {
          q: "What is the maximum loan amount I can get against my property?",
          a: "You can get loans from ₹25 Lakhs up to ₹10 Crore (and higher for commercial properties), funding up to 75% of the property's certified market valuation.",
        },
        {
          q: "Can I take a loan against residential or commercial property?",
          a: "Yes. All clear-title freehold properties—including self-occupied residential apartments, villas, commercial shops, office floors, and industrial sheds—are eligible.",
        },
        {
          q: "What is the interest rate for Loan Against Property?",
          a: "Interest rates start from 9% p.a. depending on property type, borrower income profile, and credit score across our 50+ banking partners.",
        },
        {
          q: "Can I transfer my existing high-interest LAP to Shreem Finserv's banking partners?",
          a: "Yes. You can execute a balance transfer to lower your interest rate, reduce your monthly EMI, and access high-ticket surplus top-up funds.",
        },
      ]}
    />
  );
}
