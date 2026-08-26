import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Loan Against Property (LAP) - Low Interest Mortgages up to ₹15 Crore | Shreem Finserv",
  description:
    "Unlock equity from residential, commercial, or industrial real estate. Lowest mortgage rates starting from 8.75% p.a., flexible 15-year tenure, up to 75% LTV.",
};

export default function LapPage() {
  return (
    <ProductPageTemplate
      categoryName="Loan Against Property (LAP)"
      badge="Secured Real Estate Equity Line"
      headline="Unlock Substantial Capital Against"
      highlightText="Residential, Commercial & Industrial Real Estate"
      description="Leverage your immovable property to secure long-term, low-interest capital up to ₹15 Crore for business expansion, debt restructuring, or capital-intensive investments across 50+ partner banks."
      longOverview={`Loan Against Property (LAP) is one of the most cost-effective borrowing instruments available in India. By mortgaging clear-title residential homes, commercial office buildings, industrial plots, or retail shops, property owners can access massive liquidity at interest rates significantly lower than unsecured business or personal loans.

Shreem Finserv collaborates with tier-1 housing finance companies (HFCs) and scheduled commercial banks—including HDFC Bank, SBI, ICICI, Piramal Capital, Godrej Finance, and Axis Bank—to deliver customized mortgage structures. Whether you are aiming to reduce cash burn through debt consolidation, expand industrial manufacturing, or discount long-term commercial lease rentals (LRD), our legal and technical appraisal desk guarantees maximum Loan-to-Value (up to 75%) and swift title clearance.`}
      maxAmount="Up to ₹15 Crore"
      interestRate="Starting 8.75% p.a."
      tenure="Up to 15 Years (180 Mos)"
      disbursalSpeed="5 to 7 Working Days"
      defaultSliderAmount={7500000}
      minSliderAmount={1000000}
      maxSliderAmount={50000000}
      defaultEmiRate={8.75}
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
      benefits={[
        {
          title: "Lowest-in-Market Interest Rates",
          desc: "Starting at just 8.75% p.a., secured mortgage financing reduces your monthly interest outflow by up to 50% compared to unsecured loans.",
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
      eligibility={[
        "Borrower Profile: Salaried Individuals, Self-Employed Professionals (Doctors, CAs), Business Proprietors, Directors",
        "Age Requirements: 21 to 65 years at the time of loan maturity",
        "Property Title: Clear, marketable freehold title without pending litigation or municipal encumbrances",
        "Eligible Property Types: Freehold residential apartments, independent houses, approved commercial buildings, industrial plots",
        "Credit Score: CIBIL score of 680+ with steady income generation to service monthly mortgage obligations",
      ]}
      documents={[
        "Property Title Documents: Registered Sale Deed, Conveyance Deed, Allotment Letter, Mother Deed chain for 13–30 years",
        "Municipal Proofs: Approved Sanction Plan, Latest Paid Property Tax Receipts, Occupancy Certificate (OC)",
        "Identity & Address: PAN Card, Aadhaar Card, Passport of all co-owners and applicants",
        "Income Proofs (Salaried): Last 3 months payslips, Form 16 (Part A & B), 6 months bank statements",
        "Income Proofs (Self-Employed / Business): Last 3 years audited financial statements with ITR and 12 months bank statements",
        "Existing Loan Track: Loan sanction letter and 12 months repayment track record (if balance transfer)",
      ]}
      faqs={[
        {
          q: "What properties can be pledged for a Loan Against Property?",
          a: "You can pledge self-occupied residential houses, flats/apartments, rented commercial spaces, office units, retail shops, industrial plots, and factory land with approved municipal layout plans.",
        },
        {
          q: "How is the eligible loan amount calculated in LAP?",
          a: "The sanction limit is determined by two factors: (1) The technical market valuation of the property (up to 60%–75% LTV), and (2) Your net disposable income and Fixed Obligation to Income Ratio (FOIR) to ensure comfortable repayment.",
        },
        {
          q: "Can co-owned properties be mortgaged?",
          a: "Yes. In fact, all legal co-owners of the property must be co-applicants in the loan application. This also allows you to combine household incomes to achieve a higher loan sanction.",
        },
        {
          q: "What is Lease Rental Discounting (LRD)?",
          a: "Lease Rental Discounting is a specialized mortgage facility for commercial property owners who have leased space to established corporate or retail tenants. The bank sanctions a loan based on the discounted net present value of your future rental receipts.",
        },
        {
          q: "How long does it take to get a Loan Against Property disbursed?",
          a: "Because LAP involves technical property inspection and legal title search (30-year search report), the end-to-end turnaround is typically 5 to 7 working days from document collection to disbursement.",
        },
        {
          q: "Can I prepay or foreclose my Loan Against Property?",
          a: "Yes. Under RBI guidelines, individual borrowers with floating interest rate LAP facilities enjoy NIL foreclosure charges after the mandatory lock-in period.",
        },
        {
          q: "What happens to original property title deeds during the loan tenure?",
          a: "The original registered sale deed and property chain documents are stored in fireproof bank vaults with institutional insurance until the loan is fully repaid and a No Objection Certificate (NOC) is issued.",
        },
        {
          q: "Can I get a top-up on my existing Loan Against Property?",
          a: "Yes. If your property value has appreciated or you have serviced your mortgage for over 12 months, Shreem Finserv can facilitate a substantial top-up loan at prime interest rates.",
        },
      ]}
    />
  );
}
