import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Working Capital & Overdraft Facility — From 11.50% p.a. | Shreem Finserv",
  description:
    "Flexible Working Capital loans and Overdraft (OD) credit lines from ₹10 Lakhs to ₹5 Crore for MSMEs, manufacturers, and traders across 50+ banking partners.",
};

export default function WorkingCapitalPage() {
  return (
    <ProductPageTemplate
      categoryId="working-capital"
      categoryName="Working Capital"
      badge="Revolving Credit & Overdraft Lines"
      headline="Working Capital & Overdraft Facility"
      highlightText="up to ₹5 Crore | From 11.50% p.a."
      description="Keep your day-to-day operations smooth and cash flow healthy with flexible Working Capital loans, Overdraft (OD) limits, and Cash Credit (CC) facilities tailored for manufacturers, traders, and growing businesses."
      bannerImage="/images/business-loan-inner-banner.jpg"
      maxAmount="₹10L – ₹5Cr"
      interestRate="From 11.50% p.a."
      tenure="12 Months (Renewable Annually)"
      disbursalSpeed="Within 48 Hours"
      defaultSliderAmount={5000000}
      minSliderAmount={1000000}
      maxSliderAmount={50000000}
      defaultEmiRate={11.5}
      defaultEmiTenureYears={1}
      features={[
        {
          title: "Pay Only for Utilized Amount",
          desc: "With Overdraft and Cash Credit facilities, interest is charged only on the exact funds utilized and days used.",
          icon: "account_balance_wallet",
        },
        {
          title: "Collateral-Free Options up to ₹2 Crore",
          desc: "Unsecured working capital lines available based on 12-month GST and banking transaction surrogates.",
          icon: "verified_user",
        },
        {
          title: "Quick 48-Hour Sanction",
          desc: "Streamlined assessment and fast limit sanction to address immediate supply chain and inventory needs.",
          icon: "bolt",
        },
        {
          title: "Annual Limit Renewal",
          desc: "Seamless annual review and limit enhancement as your business turnover grows.",
          icon: "autorenew",
        },
      ]}
      eligibility={[
        "Business Vintage: Minimum 2 years of continuous business operations.",
        "Annual Turnover: Minimum ₹40 Lakhs+ annual business turnover with GST filings.",
        "Entity Types: Proprietorships, Partnerships, Pvt Ltd Companies, and LLPs.",
        "Credit Profile: Minimum 680+ CIBIL score with healthy banking transactions.",
      ]}
      documents={[
        "KYC of Promoters: PAN Card and Aadhaar Card.",
        "Business Proof: GST Certificate, Udyam Registration, or Incorporation Certificate.",
        "Financials: Last 2 Years Audited Balance Sheet & P&L with computation.",
        "Banking Statements: Last 12 Months Current Account Bank Statements.",
        "GST Returns: Last 12 Months GST R-3B filings.",
      ]}
      faqs={[
        {
          q: "How is interest calculated on an Overdraft (OD) line?",
          a: "Interest is calculated on a daily reducing balance basis only on the amount withdrawn from your limit, not on the total sanctioned limit.",
        },
        {
          q: "What is the difference between Term Loan and Working Capital?",
          a: "A Term Loan is disbursed as a lump sum with fixed monthly EMIs, whereas Working Capital provides an ongoing revolving limit that you can withdraw and repay as per business cash flow.",
        },
        {
          q: "Can I get an unsecured working capital loan?",
          a: "Yes! Collateral-free working capital lines are available up to ₹2 Crore based on your annual turnover, GST returns, and banking credits.",
        },
      ]}
    />
  );
}
