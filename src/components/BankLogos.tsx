import React from "react";
import Image from "next/image";

export interface BankInfo {
  id: string;
  name: string;
  shortName: string;
  category: "Bank" | "NBFC";
  color: string;
  logoUrl: string;
  interestRate: string;
  maxAmount: string;
  processingFee: string;
  specialFeature: string;
  svgIcon: React.ReactNode;
}

/* ═══════════════════════════════════════════════════════════════════
   OFFICIAL BANK & NBFC PARTNER LOGOS (Authentic Browser Logos)
   ═══════════════════════════════════════════════════════════════════ */

const renderBankLogo = (src: string, alt: string) => (
  <Image
    src={src}
    alt={alt}
    width={80}
    height={32}
    className="w-full h-full object-contain"
  />
);

export const BANK_PARTNERS_DATA: BankInfo[] = [
  {
    id: "hdfc",
    name: "HDFC Bank",
    shortName: "HDFC Bank",
    category: "Bank",
    color: "#004C8F",
    logoUrl: "/logos/banks/hdfc.svg",
    interestRate: "Starting 8.75% p.a.",
    maxAmount: "Up to ₹15 Crore",
    processingFee: "0.50% - 1.00%",
    specialFeature: "Instant digital sanction in 4 hours for prime profiles",
    svgIcon: renderBankLogo("/logos/banks/hdfc.svg", "HDFC Bank"),
  },
  {
    id: "sbi",
    name: "State Bank of India",
    shortName: "SBI",
    category: "Bank",
    color: "#00A5DF",
    logoUrl: "/logos/banks/sbi.svg",
    interestRate: "Starting 8.50% p.a.",
    maxAmount: "Up to ₹20 Crore",
    processingFee: "Zero to 0.35%",
    specialFeature: "Lowest sovereign repo-linked lending rates (EBLR)",
    svgIcon: renderBankLogo("/logos/banks/sbi.svg", "State Bank of India"),
  },
  {
    id: "icici",
    name: "ICICI Bank",
    shortName: "ICICI Bank",
    category: "Bank",
    color: "#9C1D26",
    logoUrl: "/logos/banks/icici.svg",
    interestRate: "Starting 8.90% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.50% - 1.25%",
    specialFeature: "Pre-approved corporate and doctor loan offers",
    svgIcon: renderBankLogo("/logos/banks/icici.svg", "ICICI Bank"),
  },
  {
    id: "axis",
    name: "Axis Bank",
    shortName: "Axis Bank",
    category: "Bank",
    color: "#97144D",
    logoUrl: "/logos/banks/axis.svg",
    interestRate: "Starting 9.25% p.a.",
    maxAmount: "Up to ₹5 Crore",
    processingFee: "1.00%",
    specialFeature: "100% paperless digital KYC & video appraisal",
    svgIcon: renderBankLogo("/logos/banks/axis.svg", "Axis Bank"),
  },
  {
    id: "kotak",
    name: "Kotak Mahindra Bank",
    shortName: "Kotak Bank",
    category: "Bank",
    color: "#ED1C24",
    logoUrl: "/logos/banks/kotak.svg",
    interestRate: "Starting 9.50% p.a.",
    maxAmount: "Up to ₹7.5 Crore",
    processingFee: "0.75% - 1.50%",
    specialFeature: "Fastest MSME working capital & overdraft sanctions",
    svgIcon: renderBankLogo("/logos/banks/kotak.svg", "Kotak Mahindra Bank"),
  },
  {
    id: "idfc",
    name: "IDFC FIRST Bank",
    shortName: "IDFC FIRST",
    category: "Bank",
    color: "#9D1D27",
    logoUrl: "/logos/banks/idfc.svg",
    interestRate: "Starting 9.75% p.a.",
    maxAmount: "Up to ₹5 Crore",
    processingFee: "0.50% - 1.00%",
    specialFeature: "Zero foreclosure charges after 12 EMIs on personal loans",
    svgIcon: renderBankLogo("/logos/banks/idfc.svg", "IDFC FIRST Bank"),
  },
  {
    id: "tata-capital",
    name: "Tata Capital",
    shortName: "Tata Capital",
    category: "NBFC",
    color: "#00539B",
    logoUrl: "/logos/banks/tata-capital.svg",
    interestRate: "Starting 9.99% p.a.",
    maxAmount: "Up to ₹3 Crore",
    processingFee: "1.00% - 1.75%",
    specialFeature: "Customized EMI moratorium for industrial equipment",
    svgIcon: renderBankLogo("/logos/banks/tata-capital.svg", "Tata Capital"),
  },
  {
    id: "bajaj",
    name: "Bajaj Finserv",
    shortName: "Bajaj Finserv",
    category: "NBFC",
    color: "#0072BC",
    logoUrl: "/logos/banks/bajaj.svg",
    interestRate: "Starting 10.50% p.a.",
    maxAmount: "Up to ₹40 Lakhs",
    processingFee: "1.25% - 2.00%",
    specialFeature: "Flexi hybrid limit with unlimited withdrawals",
    svgIcon: renderBankLogo("/logos/banks/bajaj.svg", "Bajaj Finserv"),
  },
  {
    id: "piramal",
    name: "Piramal Finance",
    shortName: "Piramal Finance",
    category: "NBFC",
    color: "#D9272E",
    logoUrl: "/logos/banks/piramal.svg",
    interestRate: "Starting 9.40% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.75%",
    specialFeature: "High LTV LAP sanctions for commercial & residential property",
    svgIcon: renderBankLogo("/logos/banks/piramal.svg", "Piramal Finance"),
  },
  {
    id: "lt-finance",
    name: "L&T Finance",
    shortName: "L&T Finance",
    category: "NBFC",
    color: "#0066B2",
    logoUrl: "/logos/banks/lt-finance.svg",
    interestRate: "Starting 10.25% p.a.",
    maxAmount: "Up to ₹2 Crore",
    processingFee: "1.00%",
    specialFeature: "Tailored micro-enterprise & women business schemes",
    svgIcon: renderBankLogo("/logos/banks/lt-finance.svg", "L&T Finance"),
  },
  {
    id: "indusind",
    name: "IndusInd Bank",
    shortName: "IndusInd Bank",
    category: "Bank",
    color: "#861F41",
    logoUrl: "/logos/banks/indusind.svg",
    interestRate: "Starting 9.40% p.a.",
    maxAmount: "Up to ₹5 Crore",
    processingFee: "1.00%",
    specialFeature: "Instant current account overdraft & working capital",
    svgIcon: renderBankLogo("/logos/banks/indusind.svg", "IndusInd Bank"),
  },
  {
    id: "bob",
    name: "Bank of Baroda",
    shortName: "Bank of Baroda",
    category: "Bank",
    color: "#F26522",
    logoUrl: "/logos/banks/bob.png",
    interestRate: "Starting 8.60% p.a.",
    maxAmount: "Up to ₹15 Crore",
    processingFee: "0.25% - 0.50%",
    specialFeature: "Baroda Sun MSME specialized credit support",
    svgIcon: renderBankLogo("/logos/banks/bob.png", "Bank of Baroda"),
  },
  {
    id: "pnb",
    name: "Punjab National Bank",
    shortName: "PNB",
    category: "Bank",
    color: "#A20034",
    logoUrl: "/logos/banks/pnb.svg",
    interestRate: "Starting 8.65% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.35%",
    specialFeature: "Subsidized government MSME & Mudra loans",
    svgIcon: renderBankLogo("/logos/banks/pnb.svg", "Punjab National Bank"),
  },
  {
    id: "poonawalla",
    name: "Poonawalla Fincorp",
    shortName: "Poonawalla Fincorp",
    category: "NBFC",
    color: "#DA291C",
    logoUrl: "/logos/banks/poonawalla.png",
    interestRate: "Starting 9.99% p.a.",
    maxAmount: "Up to ₹50 Lakhs",
    processingFee: "1.00%",
    specialFeature: "Zero pre-payment charges & zero hidden administrative fees",
    svgIcon: renderBankLogo("/logos/banks/poonawalla.png", "Poonawalla Fincorp"),
  },
];

export const BankBadge: React.FC<{ bankId: string; className?: string }> = ({
  bankId,
  className = "",
}) => {
  const bank =
    BANK_PARTNERS_DATA.find((b) => b.id === bankId) || BANK_PARTNERS_DATA[0];

  return (
    <div
      className={`inline-flex items-center gap-2.5 bg-white border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-sm hover:shadow transition-all ${className}`}
    >
      <div className="w-12 h-8 flex-shrink-0 bg-white rounded-lg p-1 border border-slate-100 flex items-center justify-center shadow-xs">
        {bank.svgIcon}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs font-bold text-slate-900 leading-tight">
          {bank.name}
        </span>
        <span className="text-[10px] text-slate-400 font-semibold">
          {bank.category} Partner
        </span>
      </div>
    </div>
  );
};

export default BankBadge;
