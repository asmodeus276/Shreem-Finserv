import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Business Loan & MSME Working Capital up to ₹5 Crores | Shreem Finserv",
  description:
    "Secure fast collateral-free Business Loans and MSME Working Capital from ₹2 Lakhs up to ₹5 Crores starting from 11.25% p.a. Multi-bank sanctions in 48 hours with Shreem Finserv.",
};

export default function BusinessLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Business Loan"
      badge="FAST MSME & ENTERPRISE CAPITAL"
      headline="Get Hassle-Free"
      highlightText="Business Loan"
      bannerImage="/images/business-loan-inner-banner.jpg"
      description="Scale your enterprise, finance working capital, purchase inventory, or expand operations with collateral-free business loans from ₹2 Lakhs up to ₹5 Crores across 50+ Scheduled Commercial Banks & NBFCs."
      maxAmount="₹5 Crores"
      interestRate="11.25% p.a."
      tenure="Up to 5 Years"
      disbursalSpeed="Under 48 Hours"
      defaultSliderAmount={2000000}
      minSliderAmount={100000}
      maxSliderAmount={50000000}
      defaultEmiRate={11.5}
      defaultEmiTenureYears={3}
      features={[
        {
          title: "Collateral-Free MSME Limits",
          desc: "Unsecured business loans up to ₹1 Crore and CGTMSE/secured facilities up to ₹5 Crores.",
          icon: "storefront",
        },
        {
          title: "Fast 48-Hour Disbursal SLA",
          desc: "Expedited credit appraisal with fast-track in-principle sanctioning.",
          icon: "electric_bolt",
        },
        {
          title: "Working Capital & Overdraft",
          desc: "Flexible Term Loans, Dropline Overdraft (OD), and Cash Credit (CC) limits.",
          icon: "account_balance",
        },
        {
          title: "GST & Banking Surrogate",
          desc: "Underwriting based on banking cash flows, GST returns, and POS turnover.",
          icon: "receipt_long",
        },
        {
          title: "Zero Pre-Closure Penalties",
          desc: "Prepay your business loan flexibly when cash flow peaks with zero prepayment charges.",
          icon: "savings",
        },
        {
          title: "Dedicated Relationship Manager",
          desc: "End-to-end support from senior corporate finance advisors to structure the optimal debt package.",
          icon: "support_agent",
        },
      ]}
      eligibility={[
        "Proprietorships, Partnerships, LLPs, Private Limited & Public Limited companies",
        "Minimum business vintage of 1 year with active operations",
        "Minimum annual business turnover of ₹20 Lakhs",
        "Audited or CA-certified financials and active GST filing",
        "Clean banking track record with no major defaults",
      ]}
      documents={[
        "Promoter PAN, Aadhaar, and Business PAN Card",
        "Certificate of Incorporation, Partnership Deed, or GST Registration Certificate",
        "Latest 12 Months primary Business Bank Account Statement",
        "Latest 2 Years ITR with Computation, Balance Sheet, and P&L statements",
        "Latest 12 Months GST returns (GSTR-3B / GSTR-1)",
      ]}
      faqs={[
        {
          q: "What is the maximum unsecured business loan I can get?",
          a: "You can receive up to ₹1 Crore without collateral, and up to ₹5 Crores with CGTMSE government credit guarantees or structured enterprise banking.",
        },
        {
          q: "How fast will the business loan amount be credited?",
          a: "In-principle approvals are delivered in 4 to 24 hours. Full disbursal into your business current account is completed within 48 to 72 hours upon documentation.",
        },
        {
          q: "Can I get a loan for seasonal working capital spikes?",
          a: "Yes! We structure customized Overdraft (OD) and Cash Credit (CC) limits where you only pay interest on the amount utilized.",
        },
        {
          q: "Does Shreem Finserv charge any advance fees?",
          a: "No! There are strictly zero upfront fees. All processing charges are deducted directly by the lending bank upon sanction.",
        },
      ]}
    />
  );
}
