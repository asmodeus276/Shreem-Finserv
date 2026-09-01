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
      categoryName="Machinery & Equipment Loan"
      badge="Asset & Supply Chain Financing"
      headline="Modernize Plant & Equipment With"
      highlightText="Machinery & Supply Chain Financing from ₹10 Lakhs to ₹5 Crore"
      description="Machinery & Supply Chain Finance is a funding solution that helps businesses improve cash flow, acquire advanced industrial equipment, and finance invoices or purchase orders without waiting for payment cycles."
      longOverview={`Machinery and Supply Chain Financing empowers Indian manufacturers, industrial units, healthcare facilities, and logistics operators to modernize plant infrastructure and maintain uninterrupted operations. Whether you are acquiring automated CNC machines, heavy packaging lines, medical diagnostic systems, or financing raw material procurement against purchase orders, our tailored asset financing keeps your cash flow intact.

Shreem Finserv partners with 50+ leading scheduled commercial banks and premier asset NBFCs—including Tata Capital, L&T Finance, HDFC Bank, ICICI Bank, SBI, and Axis Bank—to provide up to 90% invoice financing with interest rates starting from 10% p.a. and tenures up to 7 years.`}
      maxAmount="₹10L – ₹5Cr"
      interestRate="From 10% p.a."
      tenure="Up to 7 Years (84 Mos)"
      disbursalSpeed="3 to 5 Working Days"
      defaultSliderAmount={3500000}
      minSliderAmount={500000}
      maxSliderAmount={50000000}
      defaultEmiRate={10.0}
      defaultEmiTenureYears={5}
      variants={[
        {
          title: "Industrial & Plant Machinery",
          tag: "90% Invoice Funded",
          desc: "Finance CNC tools, automated production lines, and heavy manufacturing equipment.",
          amount: "Up to ₹5 Crore",
          icon: "precision_manufacturing",
        },
        {
          title: "Supply Chain & Invoice Finance",
          tag: "Cash Flow",
          desc: "Convert unpaid corporate buyer invoices and purchase orders into immediate working funds.",
          amount: "Up to ₹3 Crore",
          icon: "inventory_2",
        },
        {
          title: "Medical & Diagnostic Equipment",
          tag: "Healthcare",
          desc: "Financing for MRI, CT Scanners, Ultrasound, and surgical OT equipment.",
          amount: "Up to ₹5 Crore",
          icon: "medical_services",
        },
        {
          title: "Commercial Fleet & Vehicle Financing",
          tag: "Logistics",
          desc: "Dedicated financing for commercial logistics vehicles and transport fleets.",
          amount: "Up to ₹2 Crore",
          icon: "local_shipping",
        },
      ]}
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
          title: "Faster Invoice Realization",
          desc: "Convert outstanding invoices and supply contracts into immediate liquid funds without waiting.",
          icon: "bolt",
        },
        {
          title: "Flexible Repayment Tenures",
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
        {
          title: "Digital Processing & Fast Turnaround",
          desc: "Streamlined digital workflows for quick technical verification and loan activation.",
          icon: "cloud_upload",
        },
      ]}
      benefits={[
        {
          title: "Preserve Operational Liquidity",
          desc: "Acquire high-value machinery without depleting your working capital reserves.",
          icon: "savings",
        },
        {
          title: "Tax Shield on Asset Depreciation",
          desc: "Avail substantial tax deductions on machinery depreciation and interest repayment.",
          icon: "receipt_long",
        },
        {
          title: "Customized Repayment Structures",
          desc: "Tailor repayment schedules to match seasonal cash flow and plant production cycles.",
          icon: "tune",
        },
        {
          title: "Fast-Track Equipment Sanction",
          desc: "In-principle approvals issued within 48 hours based on equipment invoice and business financials.",
          icon: "bolt",
        },
        {
          title: "Multi-Lender Asset Financing",
          desc: "Compare offers across 50+ leading banks and NBFCs for lowest processing fees and margin money.",
          icon: "hub",
        },
        {
          title: "Dedicated Technical Desk",
          desc: "Assistance with machine valuation, OEM invoice verification, and insurance processing.",
          icon: "support_agent",
        },
      ]}
      feesSchedule={[
        { chargeType: "Processing Fees", standardBankRate: "1.50% to 2.50% of loan amount", shreemAdvantage: "From 0.75% (Special Institutional Rates)" },
        { chargeType: "Prepayment / Foreclosure", standardBankRate: "3% to 5% on principal outstanding", shreemAdvantage: "Zero foreclosure penalty after 12 months" },
        { chargeType: "Machine Valuation & Inspection", standardBankRate: "₹5,000 to ₹10,000", shreemAdvantage: "Subsidized through our OEM network" },
        { chargeType: "Advisory & Brokerage Fee", standardBankRate: "Charged by brokers (1-2%)", shreemAdvantage: "₹0 Free Advisory (Zero Upfront Charges)" },
      ]}
      eligibility={[
        "Registered Business Entity: Legally registered Proprietorship, Partnership Firm, Pvt Ltd Company, or LLP.",
        "Active GST Registration: Valid GSTIN with consistent, timely monthly filing track record.",
        "Business Vintage: Minimum 2 to 3 years of active continuous manufacturing or commercial operations.",
        "Annual Turnover: Minimum ₹50 Lakhs+ annual business turnover with healthy banking credits.",
        "Credit Profile: Minimum 680+ CIBIL score of promoters and business entity.",
        "Nationality: Applicant must be an Indian Resident.",
      ]}
      documents={[
        "KYC Documents: PAN Card, Aadhaar Card, Passport / Voter ID of Promoters / Directors.",
        "Business Registration Proof: GST Certificate, Udyam / MSME Certificate, Certificate of Incorporation, MOA & AOA.",
        "Financial Statements: Last 2–3 Years Audited Balance Sheet & P&L Statement with CA seal and Computation of Income.",
        "Banking Statements: Last 12 Months Current Account Bank Statements in PDF format.",
        "Equipment Proforma Invoice: Official Quotation / Proforma Invoice from authorized OEM or equipment vendor.",
        "GST Returns: Last 12 Months GSTR-3B and GSTR-1 filings.",
      ]}
      faqs={[
        {
          q: "What percentage of the machinery cost can be financed?",
          a: "Banks and NBFCs fund up to 80% to 90% of the proforma invoice value (including GST), requiring only 10% to 20% margin money from the borrower.",
        },
        {
          q: "What is the interest rate for Machinery & Supply Chain Loans?",
          a: "Interest rates start from 10% p.a. depending on your business vintage, equipment type, CIBIL score, and lender selection.",
        },
        {
          q: "Can I finance both imported and domestic machinery?",
          a: "Yes. Both brand-new domestic machines and imported plant equipment from authorized international manufacturers are eligible for financing with Letter of Credit (LC) support.",
        },
        {
          q: "How long does approval and equipment disbursal take?",
          a: "With complete financial documents and proforma invoice, sanction is issued in 48 hours and direct disbursal to the machine supplier takes place within 3 to 5 business days.",
        },
      ]}
    />
  );
}
