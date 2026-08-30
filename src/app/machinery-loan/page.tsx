import { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Machinery & Equipment Loans - 90% Proforma Funding up to ₹5 Crore | Shreem Finserv",
  description:
    "Finance industrial machinery, CNC tooling, packaging plants, and medical diagnostic technology. 90% invoice financing, starting 10.0% p.a., up to 7-year tenure.",
};

export default function MachineryLoanPage() {
  return (
    <ProductPageTemplate
      categoryName="Machinery & Equipment Loan"
      badge="Industrial Asset Financing"
      headline="Up to 90% Invoice Financing for"
      highlightText="Industrial Machinery & Advanced Medical Technology"
      description="Upgrade production capabilities, automate industrial plants, or procure advanced hospital equipment with specialized machinery term loans up to ₹5 Crore with asset-backed structuring."
      longOverview={`Modern manufacturing and diagnostic healthcare depend on cutting-edge capital equipment. Upgrading to high-precision CNC machines, automated packaging lines, plastic injection molding units, commercial printing presses, or robotic surgical systems demands substantial upfront capital outlays that can deplete working capital reserves.

Shreem Finserv’s Industrial Equipment Financing program provides up to 90% funding on the proforma invoice value of both domestic and imported plant machinery. Backed by institutional equipment financiers including Tata Capital, L&T Finance, Cholamandalam, and HDFC Bank, our machinery loans use the hypothecated equipment itself as primary collateral, eliminating the need to mortgage real estate while offering extended repayment horizons up to 7 years.`}
      maxAmount="Up to ₹5 Crore"
      interestRate="Starting 10.00% p.a."
      tenure="Up to 7 Years (84 Mos)"
      disbursalSpeed="Within 72 Hours"
      defaultSliderAmount={4000000}
      minSliderAmount={500000}
      maxSliderAmount={50000000}
      defaultEmiRate={10.0}
      defaultEmiTenureYears={5}
      variants={[
        {
          title: "New Industrial Plant & Machinery",
          tag: "90% Funding",
          desc: "Finance standard industrial machinery, CNC mills, lathes, stamping presses, and textile looms.",
          amount: "Up to ₹5 Crore",
          icon: "precision_manufacturing",
        },
        {
          title: "Medical & Diagnostic Technology",
          tag: "Healthcare",
          desc: "Specialized funding for MRI, CT Scanners, Ultrasound, Dialysis, and Robotic surgical systems.",
          amount: "Up to ₹10 Crore",
          icon: "biomedical",
        },
        {
          title: "Used / Refurbished Equipment Loan",
          tag: "Cost Saver",
          desc: "Finance certified pre-owned or imported refurbished equipment based on chartered engineer valuation.",
          amount: "Up to ₹2 Crore",
          icon: "build_circle",
        },
        {
          title: "Operating & Financial Lease Lines",
          tag: "Tax Efficient",
          desc: "Structured equipment leasing with off-balance sheet benefits and full 100% tax depreciation write-offs.",
          amount: "Up to ₹15 Crore",
          icon: "table_view",
        },
      ]}
      features={[
        {
          title: "90% Proforma Invoice Funding",
          desc: "Minimal 10-15% promoter contribution — the bank finances up to 90% of your equipment's invoice value.",
          icon: "receipt",
        },
        {
          title: "No Property Mortgage Needed",
          desc: "The purchased equipment itself serves as primary collateral through hypothecation — no real estate required.",
          icon: "security",
        },
        {
          title: "Import LC & Trade Finance",
          desc: "Seamless Letter of Credit facility for importing machinery from Germany, Japan, USA, and China.",
          icon: "flight_land",
        },
        {
          title: "Tax Depreciation Benefits",
          desc: "Claim 15% to 40% accelerated depreciation on qualifying plant machinery under Indian Income Tax Act.",
          icon: "calculate",
        },
        {
          title: "3-6 Month Moratorium Period",
          desc: "Repayment holiday during machine shipping, installation, and commissioning — pay only simple interest.",
          icon: "hourglass_empty",
        },
        {
          title: "Direct OEM Supplier Disbursal",
          desc: "Fast and transparent settlement made directly to authorized manufacturers or equipment distributors.",
          icon: "local_shipping",
        },
      ]}
      benefits={[
        {
          title: "Up to 90% Proforma Invoice Funding",
          desc: "Minimal promoter contribution (only 10% to 15% margin money) keeps your liquidity intact for operating expenses.",
          icon: "receipt",
        },
        {
          title: "Hypothecation of Equipment as Primary Security",
          desc: "The purchased machine itself acts as the primary collateral; no real estate mortgage required for standard assets.",
          icon: "security",
        },
        {
          title: "LC / Foreign Letter of Credit Facility",
          desc: "Import capital equipment from Germany, Japan, USA, or China seamlessly with our partner banks' trade finance desks.",
          icon: "flight_land",
        },
        {
          title: "Tax Depreciation Advantages",
          desc: "Claim up to 15% to 40% accelerated depreciation on qualifying plant machinery under the Indian Income Tax Act.",
          icon: "calculate",
        },
        {
          title: "Custom Moratorium Period",
          desc: "Enjoy repayment holidays of 3 to 6 months during machine shipping, installation, and commercial trial production.",
          icon: "hourglass_empty",
        },
        {
          title: "Direct Supplier Disbursal",
          desc: "Fast, transparent settlement made directly to OEM manufacturers or authorized machinery distributors.",
          icon: "local_shipping",
        },
      ]}
      eligibility={[
        "Constitution: Proprietorship, Partnership Firm, LLP, Private Limited, Public Limited Company",
        "Business Track: Minimum 2 years of active commercial manufacturing, engineering, or medical operations",
        "Technical Feasibility: Machine must be sourced from reputed domestic OEMs or verified international exporters",
        "Financial Standing: Positive net worth and demonstrable cash flow capacity to service asset EMIs",
        "Credit Score: Promoter CIBIL 680+ with zero wilful defaults on past asset or term loans",
      ]}
      documents={[
        "Machine Documentation: Proforma Invoice / Quotation / Purchase Order from authorized equipment OEM",
        "Technical Specifications: Machine catalogue, layout plan, and estimated useful economic life report",
        "Entity KYC: Business PAN, GST Registration Certificate, Udyam MSME Certificate, Factory License",
        "Financials: Last 2 years Audited Balance Sheet, P&L Statement, Tax Audit Report, and GSTR-3B filings",
        "Banking Statements: Last 12 months active bank account statements showing operating turnover",
        "Promoter KYC: PAN Card, Aadhaar Card, Address Proof of all Directors / Partners",
      ]}
      faqs={[
        {
          q: "Can I finance imported machinery from international manufacturers?",
          a: "Yes. Shreem Finserv facilitates equipment loans for imported machines with complete Letter of Credit (LC) and Buyers' Credit structures covering customs clearance and shipping duties.",
        },
        {
          q: "How much margin money does the borrower need to provide?",
          a: "Typically between 10% and 20% of the total invoice value (including GST). The remaining 80% to 90% is disbursed by the financing bank directly to the equipment manufacturer.",
        },
        {
          q: "Can used or refurbished machinery be financed?",
          a: "Yes. Second-hand or refurbished machines with a minimum residual economic life of 5 years can be funded up to 70% of the Chartered Engineer's certified valuation.",
        },
        {
          q: "Is additional property collateral required for machinery loans?",
          a: "For standard standard-brand machinery up to ₹2 Crore, the hypothecation of the machine itself is usually sufficient. For larger multi-crore specialized custom tooling, collateral or corporate guarantees may be structured.",
        },
        {
          q: "How does the moratorium period work for new equipment installation?",
          a: "We can structure an initial 3 to 6-month moratorium where you only pay simple interest while the machine is being delivered, installed, and commissioned into commercial production.",
        },
        {
          q: "Are equipment loans eligible for government subsidies?",
          a: "Yes. Eligible manufacturing units can claim credit linked capital subsidies under CLCSS and various state industrial development policies.",
        },
        {
          q: "What is the typical repayment tenure for machinery loans?",
          a: "Tenures range from 36 months to 84 months (3 to 7 years) aligned with the depreciation and cash flow generation of the machine.",
        },
        {
          q: "How quickly can a machinery loan application be approved?",
          a: "In-principle credit sanctions are issued within 48 to 72 hours of submitting the proforma invoice and business financials.",
        },
      ]}
    />
  );
}
