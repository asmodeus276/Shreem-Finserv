import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "MSME Working Capital & Business Loans up to ₹2 Crore | Shreem Finserv",
  description:
    "Unsecured working capital loans and revolving credit lines for Indian MSMEs, manufacturers, traders, and service enterprises. Fast approvals, GST surrogate underwriting, starting 10.5% p.a.",
};

export default function MsmeLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="MSME Working Capital Loan"
      badge="High-Growth Enterprise Liquidity"
      headline="Collateral-Free Working Capital Lines"
      highlightText="Powering Manufacturing, Trading & MSME Expansion"
      description="Maintain uninterrupted supply chains, bridge debtor payment cycles, and procure bulk raw materials with tailored unsecured credit lines up to ₹2 Crore across 50+ banking partners."
      longOverview={`In today’s competitive industrial ecosystem, steady working capital is the lifeblood of every Micro, Small, and Medium Enterprise (MSME). Whether you are managing seasonal inventory buildup, fulfilling large government or corporate tenders, or navigating 90-day debtor payment cycles, liquidity shortfalls can stall business momentum.

Traditional bank branch approvals often demand massive physical collateral, years of audited profitability, and weeks of tedious branch visits. Shreem Finserv reimagines commercial lending by leveraging GST surrogate analytics, banking turnover algorithms, and digital ledger verification. We connect your enterprise with premier scheduled banks (HDFC, ICICI, SBI, Kotak, IndusInd, Tata Capital) to sanction unsecured working capital credit lines and overdraft limits up to ₹2 Crore in as fast as 48 hours.`}
      maxAmount="Up to ₹2 Crore"
      interestRate="Starting 10.50% p.a."
      tenure="12 to 60 Months"
      disbursalSpeed="Within 48 Hours"
      defaultSliderAmount={5000000}
      minSliderAmount={500000}
      maxSliderAmount={20000000}
      defaultEmiRate={10.5}
      defaultEmiTenureYears={3}
      variants={[
        {
          title: "GST Surrogate Unsecured Term Loan",
          tag: "Unsecured",
          desc: "Sanctions calculated directly on 12-month GSTR-3B filings without hard collateral.",
          amount: "Up to ₹2 Crore",
          icon: "receipt_long",
        },
        {
          title: "Revolving Overdraft / CC Limit",
          tag: "Revolving",
          desc: "Flexible cash credit overdraft on current account; pay interest strictly on utilized funds.",
          amount: "Up to ₹1.5 Crore",
          icon: "sync_alt",
        },
        {
          title: "CGTMSE Government Backed Line",
          tag: "Govt Scheme",
          desc: "Subsidized collateral-free business credit covered under Credit Guarantee Fund Trust for MSEs.",
          amount: "Up to ₹5 Crore",
          icon: "account_balance",
        },
        {
          title: "Invoice Discounting & Bill Factoring",
          tag: "Supply Chain",
          desc: "Instant 85% liquidity advance against verified corporate and PSU debtor invoices.",
          amount: "Up to ₹3 Crore",
          icon: "fact_check",
        },
      ]}
      features={[
        {
          title: "Zero Collateral Required",
          desc: "Unsecured business credit lines sanctioned on GST turnover and banking cash flow — no property mortgage needed.",
          icon: "verified_user",
        },
        {
          title: "GST Surrogate Analytics",
          desc: "Our automated algorithms assess GSTR-1 and GSTR-3B filings to calculate maximum eligible loan limits instantly.",
          icon: "analytics",
        },
        {
          title: "Instant Overdraft Activation",
          desc: "Revolving cash credit limits activated on your current account — draw and repay funds as business demands.",
          icon: "sync_alt",
        },
        {
          title: "CGTMSE Coverage Up to ₹5 Cr",
          desc: "Government guarantee scheme backing collateral-free loans for eligible micro and small enterprises.",
          icon: "account_balance",
        },
        {
          title: "Flexible Repayment Options",
          desc: "Choose from EMI term loans, drop-line overdrafts, or bullet repayment structures matching your revenue cycle.",
          icon: "tune",
        },
        {
          title: "100% Digital Application",
          desc: "Complete online processing with e-KYC, digital bank statement parsing, and paperless sanction letters.",
          icon: "cloud_upload",
        },
      ]}
      benefits={[
        {
          title: "Zero Collateral Mortgage Required",
          desc: "Sanctioned on financial turnover, bank cash flow, and GST filings rather than pledging factory land or machinery.",
          icon: "no_sim",
        },
        {
          title: "GST Surrogate Underwriting",
          desc: "Our automated algorithms assess GSTR-1, GSTR-3B, and banking credits to maximize your eligible loan limit.",
          icon: "analytics",
        },
        {
          title: "Flexible Drop-Line & Overdraft Limits",
          desc: "Draw funds as needed to clear vendor payments, and deposit customer receivables anytime to curtail interest costs.",
          icon: "payments",
        },
        {
          title: "Interest Subsidy under MSME Schemes",
          desc: "Access government interest subvention schemes and lower guarantee fee structures under CGTMSE provisions.",
          icon: "verified",
        },
        {
          title: "Custom Moratorium on Expansion",
          desc: "Structured repayment holidays available during factory relocation or production line commissioning.",
          icon: "hourglass_bottom",
        },
        {
          title: "Multi-Entity Compatibility",
          desc: "Available for Proprietorships, Partnerships, Private Limited companies, LLPs, and One Person Companies (OPC).",
          icon: "domain",
        },
      ]}
      eligibility={[
        "Business Constitution: Proprietorship, Partnership Firm, LLP, Private Limited Company",
        "Operational Vintage: Minimum 2 years in active commercial operations with valid registrations",
        "Annual Turnover: Minimum ₹40 Lakhs gross annual turnover as declared in GST returns",
        "Banking Track: Consistent credit turnover and clean banking track with zero major cheque bounces",
        "Credit Rating: Commercial CIBIL score of 680+ for the enterprise and 700+ for key promoters/directors",
      ]}
      documents={[
        "Entity KYC: Business PAN, GST Registration Certificate, Udyam MSME Registration Certificate",
        "Promoter KYC: PAN Card, Aadhaar Card, Residence Proof of all Partners / Directors",
        "GST Returns: Last 12 months GSTR-3B filings and GSTR-1 summary",
        "Banking Statements: Last 12 months official current account banking statements (PDF with e-verification)",
        "Financial Statements: Last 2 years Audited Financials (Balance Sheet, P&L, Tax Audit Report) for limits > ₹50 Lakhs",
        "Constitutional Documents: Partnership Deed / MOA & AOA / Certificate of Incorporation",
      ]}
      faqs={[
        {
          q: "What is the difference between an MSME Term Loan and an Overdraft (OD) limit?",
          a: "A Term Loan provides a lump sum amount disbursed into your bank account with a fixed monthly EMI over 1 to 5 years. An Overdraft (OD) or Cash Credit (CC) limit is a revolving credit line assigned to your current account where you only pay interest on the exact amount utilized on a day-to-day basis.",
        },
        {
          q: "How does GST surrogate lending work?",
          a: "GST surrogate lending calculates your borrowing capacity based on your average monthly GSTR-3B turnover and gross operating margins, without requiring extensive real estate collateral. Strong, growing monthly GST filings translate into higher sanction amounts.",
        },
        {
          q: "Can manufacturing units and trading companies both apply?",
          a: "Yes. Our MSME lending programs cater to manufacturers, traders, wholesalers, retail distributors, IT service providers, and transport logistics operators.",
        },
        {
          q: "What is the CGTMSE scheme and how does it help MSMEs?",
          a: "The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) is a government scheme that guarantees loans up to ₹5 Crore provided by member banks, allowing eligible MSMEs to receive loans without offering third-party collateral.",
        },
        {
          q: "Are the interest rates fixed or floating?",
          a: "Most MSME working capital facilities are linked to Repo Linked Lending Rate (RLLR) or External Benchmark Lending Rate (EBLR), offering floating rate benefits that decrease whenever the RBI lowers benchmark repo rates.",
        },
        {
          q: "Can I transfer my existing high-interest CC/OD limit to Shreem partner banks?",
          a: "Yes. Shreem Finserv specializes in Working Capital Takeover & Enhancement, helping you transfer high-cost overdrafts to partner banks at rates starting from 10.50% p.a., often with an additional 25% to 50% top-up limit.",
        },
        {
          q: "How quickly can an MSME receive sanction and disbursement?",
          a: "With complete digital GST data and bank statement uploads, digital sanction letters are issued within 24 to 48 hours. Legal documentation and limit activation occur within 3 working days.",
        },
        {
          q: "What happens if our enterprise has existing loans?",
          a: "Existing loans are factored into your Fixed Obligation to Income Ratio (FOIR). If your business cash flows comfortably support additional debt service, surplus limits are readily approved.",
        },
      ]}
    />
  );
}
