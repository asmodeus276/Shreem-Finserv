import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Business Loan & MSME Working Capital — From 10.5% p.a. | Shreem Finserv",
  description:
    "Apply for collateral-free Business Loans from ₹1 Lakh to ₹2 Crore. Starting from 10.5% p.a., flexible tenure up to 5 years, minimal documentation, and 48-hour disbursal across 50+ lenders.",
};

export default function BusinessLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Business Loan"
      badge="Unsecured MSME & Enterprise Credit"
      headline="Fuel Your Business Growth With"
      highlightText="Collateral-Free Business Loans from ₹1 Lakh to ₹2 Crore"
      description="A Business Loan is a financial solution designed to help businesses meet their operational, inventory, working capital, and expansion-related requirements with zero asset mortgaging and fastest approvals across 50+ banks & NBFCs."
      longOverview={`A Business Loan is a specialized financing solution designed to empower Indian enterprises, traders, manufacturers, and service providers. Whether you need working capital to bridge cash flow gaps, procure bulk raw materials, upgrade technology, or hire talent to fulfill large contracts, our unsecured business loans provide the necessary liquidity without demanding physical collateral.

Shreem Finserv collaborates with 50+ leading scheduled commercial banks and premier NBFCs—including HDFC Bank, ICICI Bank, SBI, Axis Bank, Kotak, Tata Capital, and Bajaj Finance—to deliver competitive interest rates starting from 10.5% p.a. With our streamlined digital underwriting and GST surrogate evaluation, your enterprise can secure sanctions up to ₹2 Crore in as fast as 48 hours.`}
      maxAmount="₹1L – upto ₹2Cr"
      interestRate="From 10.5% p.a."
      tenure="Up to 5 Years (60 Mos)"
      disbursalSpeed="Within 48 Hours"
      defaultSliderAmount={5000000}
      minSliderAmount={100000}
      maxSliderAmount={20000000}
      defaultEmiRate={10.5}
      defaultEmiTenureYears={3}
      variants={[
        {
          title: "Working Capital Term Loan",
          tag: "Most Popular",
          desc: "Collateral-free liquidity for inventory, raw materials, supplier payments, and payroll.",
          amount: "₹1L to ₹2 Crore",
          icon: "account_balance_wallet",
        },
        {
          title: "GST Surrogate Business Loan",
          tag: "Fast Track",
          desc: "Instant sanction based on 12-month GSTR-3B filings without traditional collateral.",
          amount: "Up to ₹2 Crore",
          icon: "receipt_long",
        },
        {
          title: "Revolving Overdraft / CC Limit",
          tag: "Flexible Draw",
          desc: "Cash credit facility on current account — pay interest strictly on utilized funds.",
          amount: "Up to ₹1.5 Crore",
          icon: "sync_alt",
        },
        {
          title: "CGTMSE Government Backed Line",
          tag: "Govt Scheme",
          desc: "Subsidized collateral-free business loan backed by Credit Guarantee Trust for MSEs.",
          amount: "Up to ₹5 Crore",
          icon: "account_balance",
        },
      ]}
      features={[
        {
          title: "Working Capital Support",
          desc: "Manage day-to-day business operations, supplier invoices, seasonal inventory, and payroll smoothly.",
          icon: "account_balance_wallet",
        },
        {
          title: "Collateral-Free Loans",
          desc: "Access unsecured business financing without pledging commercial, industrial, or residential assets.",
          icon: "verified_user",
        },
        {
          title: "Flexible Repayment Options",
          desc: "Choose customized repayment tenures up to 5 years (60 months) with structured EMI plans matching cash flow.",
          icon: "tune",
        },
        {
          title: "High Loan Eligibility",
          desc: "Funding ranges from ₹1 Lakh up to ₹2 Crore based on your business turnover, GST filing, and bank track record.",
          icon: "payments",
        },
        {
          title: "Fast Processing & Disbursal",
          desc: "Streamlined digital underwriting with fast sanction and direct bank credit within 48 hours.",
          icon: "bolt",
        },
        {
          title: "Competitive Interest Rates",
          desc: "Access preferential interest rates starting from 10.5% p.a. through India's premier lending network.",
          icon: "percent",
        },
        {
          title: "Multiple Lender Options",
          desc: "Compare offers across 50+ leading private, public banks and NBFCs to secure the lowest rate and fee structure.",
          icon: "hub",
        },
        {
          title: "Simple & Digital Documentation",
          desc: "100% paperless verification with digital bank statement parsing, GST e-verification, and minimal paperwork.",
          icon: "description",
        },
      ]}
      benefits={[
        {
          title: "100% Collateral-Free Financing",
          desc: "Obtain high-ticket capital without risking your commercial property, factory, or personal assets.",
          icon: "lock_open",
        },
        {
          title: "Uninterrupted Cash Flow",
          desc: "Bridge 60-90 day debtor payment cycles and maintain smooth supply chain operations.",
          icon: "trending_up",
        },
        {
          title: "Tax Deductible Interest",
          desc: "Interest paid on business loans can be claimed as a legitimate business expense to reduce taxable profits.",
          icon: "receipt_long",
        },
        {
          title: "Customized Drawdown Structures",
          desc: "Choose between standard monthly EMI term loans or revolving overdraft limits based on capital requirements.",
          icon: "sync_alt",
        },
        {
          title: "Multi-Bank Algorithmic Matching",
          desc: "Our automated system pairs your profile with lenders that offer the highest approval probability.",
          icon: "smart_toy",
        },
        {
          title: "Dedicated Relationship Manager",
          desc: "1:1 credit manager assigned to manage documentation, sanction letters, and post-disbursal support.",
          icon: "support_agent",
        },
      ]}
      feesSchedule={[
        { chargeType: "Processing Fees", standardBankRate: "2.00% to 3.50% of loan amount", shreemAdvantage: "From 0.99% (Special Tie-up Rate)" },
        { chargeType: "Foreclosure / Prepayment", standardBankRate: "4% to 6% of principal outstanding", shreemAdvantage: "Zero charges after 6-12 months" },
        { chargeType: "Documentation & Stamp Duty", standardBankRate: "At actuals (₹1,500 - ₹5,000)", shreemAdvantage: "Transparent digital e-stamping" },
        { chargeType: "Consultation & Advisory", standardBankRate: "Often charged by brokers (1-2%)", shreemAdvantage: "₹0 Free Advisory (Zero Upfront Fees)" },
      ]}
      eligibility={[
        "Age Requirement: Applicant / Promoters should be between 21 and 65 years of age.",
        "Employment Status: Self-Employed Individuals, Proprietors, Partnership Firms, Pvt Ltd Companies, LLPs.",
        "Business Vintage: Minimum 2 to 3 years of active continuous business operations.",
        "Annual Turnover: Minimum ₹40 Lakhs+ annual business turnover with regular GST filings.",
        "Banking Track Record: Healthy banking track record with regular transaction volume and no frequent cheque bounces.",
        "Credit Profile: Minimum 680+ CIBIL score with clean loan repayment history.",
        "Nationality: Applicant must be an Indian Resident.",
      ]}
      documents={[
        "KYC of Promoters / Directors: PAN Card, Aadhaar Card, Passport or Voter ID.",
        "Business Registration Proof: GST Registration Certificate, Udyam / MSME Certificate, Shop & Establishment License, Certificate of Incorporation / Partnership Deed.",
        "Financial Statements: Last 2–3 Years Audited Balance Sheet & P&L Statement with CA seal and Computation of Income.",
        "Income Tax Returns: Last 2–3 Years ITR acknowledgements of the business entity and individual promoters.",
        "Bank Statements: Last 12 Months Current Account Bank Statements in PDF format.",
        "GST Returns: Last 12 Months GSTR-3B and GSTR-1 filings.",
      ]}
      faqs={[
        {
          q: "What is the maximum loan amount I can get under a Business Loan?",
          a: "You can get unsecured business loans from ₹1 Lakh up to ₹2 Crore (and up to ₹5 Crore under CGTMSE schemes), depending on your annual business turnover, profitability, and banking cash flows.",
        },
        {
          q: "Do I need to pledge collateral for a Business Loan?",
          a: "No. Our business loans are 100% unsecured and collateral-free. Sanction limits are calculated based on your banking transactions, financial statements, and GST turnover.",
        },
        {
          q: "What is the interest rate for a Business Loan?",
          a: "Interest rates start from 10.5% p.a. depending on your business vintage, annual turnover, CIBIL score, and lender selection across our 50+ banking partners.",
        },
        {
          q: "How fast will the funds be disbursed?",
          a: "With complete digital documentation (GST, ITR, and 12-month bank statements), sanction is processed in under 24 hours and funds are disbursed within 48 hours directly to your current account.",
        },
      ]}
    />
  );
}
