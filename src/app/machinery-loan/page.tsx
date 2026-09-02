import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Machinery & Supply Chain Financing — From 10% p.a. | Shreem Finserv",
  description:
    "Finance industrial machinery, plant equipment, and supply chain working capital up to ₹5 Crore. Starting from 10% p.a., up to 7-year tenure, 90% invoice funding, and fast digital approvals across 50+ lenders.",
};

export default function MachineryLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Machinery Loan"
      badge="Asset & Equipment Financing"
      headline="Upgrade Industry with"
      highlightText="Machinery Loan"
      description="Acquire industrial machinery, manufacturing tools, medical diagnostic equipment, and commercial vehicles with up to 90% invoice financing and tenures up to 7 years."
      bannerImage="/images/machinery-loan-inner-banner.jpg"
      maxAmount="₹10L – ₹5Cr"
      interestRate="From 10% p.a."
      tenure="Up to 7 Years"
      disbursalSpeed="3 to 5 Working Days"
      defaultSliderAmount={3500000}
      minSliderAmount={500000}
      maxSliderAmount={50000000}
      defaultEmiRate={10.0}
      defaultEmiTenureYears={5}
      features={[
        {
          title: "Up to 90% Invoice Financing",
          desc: "Fund up to 90% of the proforma invoice value of new or imported industrial machinery.",
          icon: "pie_chart",
        },
        {
          title: "Improved Working Capital",
          desc: "Free up tied operating capital and keep plant operations running without cash flow gaps.",
          icon: "account_balance_wallet",
        },
        {
          title: "Flexible Repayment up to 7 Yrs",
          desc: "Choose customized repayment tenures from 1 to 7 years with structured seasonal EMI options.",
          icon: "tune",
        },
        {
          title: "Competitive Interest Rates",
          desc: "Access competitive interest rates starting from 10% p.a. through India's premier asset lenders.",
          icon: "percent",
        },
        {
          title: "Tax Depreciation Advantage",
          desc: "Claim full income tax depreciation benefits under Section 32 on capitalized machinery assets.",
          icon: "receipt_long",
        },
        {
          title: "Direct OEM Settlement",
          desc: "Direct disbursement to certified domestic and international equipment manufacturers.",
          icon: "handshake",
        },
      ]}
      eligibility={[
        "Registered Business Entity: Proprietorship, Partnership Firm, Pvt Ltd Company, or LLP.",
        "Active GST Registration: Valid GSTIN with regular monthly filing history.",
        "Business Vintage: Minimum 2 to 3 years of active continuous manufacturing or commercial operations.",
        "Annual Turnover: Minimum ₹50 Lakhs+ annual business turnover with healthy banking credits.",
        "Credit Profile: Minimum 680+ CIBIL score.",
      ]}
      documents={[
        "KYC Documents: PAN Card, Aadhaar Card, Passport / Voter ID of Promoters / Directors.",
        "Business Registration Proof: GST Certificate, Udyam / MSME Certificate, Certificate of Incorporation.",
        "Financial Statements: Last 2–3 Years Audited Financials with Computation of Income.",
        "Banking Statements: Last 12 Months Current Account Bank Statements in PDF format.",
        "Equipment Proforma Invoice: Official Quotation / Proforma Invoice from authorized OEM vendor.",
      ]}
      faqs={[
        {
          q: "What percentage of the machinery cost can be financed?",
          a: "Banks and NBFCs fund up to 80% to 90% of the proforma invoice value (including GST), requiring only 10% to 20% margin money from the borrower.",
        },
        {
          q: "What is the interest rate for Machinery Loans?",
          a: "Interest rates start from 10% p.a. depending on your business vintage, equipment type, and lender selection.",
        },
        {
          q: "Can I finance both imported and domestic machinery?",
          a: "Yes. Both brand-new domestic machines and imported plant equipment from authorized international manufacturers are eligible for financing.",
        },
        {
          q: "How long does approval and equipment disbursal take?",
          a: "With complete financial documents and proforma invoice, sanction is issued in 48 hours and direct disbursal to the vendor takes place within 3 to 5 business days.",
        },
      ]}
    />
  );
}
