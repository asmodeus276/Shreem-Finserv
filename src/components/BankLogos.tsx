import React from "react";

export interface BankInfo {
  id: string;
  name: string;
  shortName: string;
  category: "Bank" | "NBFC";
  color: string;
  interestRate: string;
  maxAmount: string;
  processingFee: string;
  specialFeature: string;
  svgIcon: React.ReactNode;
}

/* ─── Helper: Clean text-logo pill with brand colour ─── */
const BankIconSvg = ({
  bg,
  text,
  label,
}: {
  bg: string;
  text?: string;
  label: string;
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-label={label}
  >
    <rect width="48" height="48" rx="10" fill={bg} />
    <text
      x="24"
      y="26"
      textAnchor="middle"
      dominantBaseline="central"
      fill={text ?? "#ffffff"}
      fontSize="11"
      fontWeight="800"
      fontFamily="Inter, system-ui, sans-serif"
    >
      {label}
    </text>
  </svg>
);

export const BANK_PARTNERS_DATA: BankInfo[] = [
  {
    id: "hdfc",
    name: "HDFC Bank",
    shortName: "HDFC",
    category: "Bank",
    color: "#004C8F",
    interestRate: "Starting 8.75% p.a.",
    maxAmount: "Up to ₹15 Crore",
    processingFee: "0.50% - 1.00%",
    specialFeature: "Instant digital sanction in 4 hours for prime profiles",
    svgIcon: <BankIconSvg bg="#004C8F" label="HDFC" />,
  },
  {
    id: "sbi",
    name: "State Bank of India",
    shortName: "SBI",
    category: "Bank",
    color: "#00A5DF",
    interestRate: "Starting 8.50% p.a.",
    maxAmount: "Up to ₹20 Crore",
    processingFee: "Zero to 0.35%",
    specialFeature: "Lowest sovereign repo-linked lending rates (EBLR)",
    svgIcon: <BankIconSvg bg="#00A5DF" label="SBI" />,
  },
  {
    id: "icici",
    name: "ICICI Bank",
    shortName: "ICICI",
    category: "Bank",
    color: "#F37E20",
    interestRate: "Starting 8.90% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.50% - 1.25%",
    specialFeature: "Pre-approved corporate and doctor loan offers",
    svgIcon: <BankIconSvg bg="#A81D24" label="ICICI" />,
  },
  {
    id: "axis",
    name: "Axis Bank",
    shortName: "Axis",
    category: "Bank",
    color: "#97144D",
    interestRate: "Starting 9.25% p.a.",
    maxAmount: "Up to ₹5 Crore",
    processingFee: "1.00%",
    specialFeature: "100% paperless digital KYC & video appraisal",
    svgIcon: <BankIconSvg bg="#97144D" label="AXIS" />,
  },
  {
    id: "kotak",
    name: "Kotak Mahindra Bank",
    shortName: "Kotak",
    category: "Bank",
    color: "#ED1C24",
    interestRate: "Starting 9.50% p.a.",
    maxAmount: "Up to ₹7.5 Crore",
    processingFee: "0.75% - 1.50%",
    specialFeature: "Fastest MSME working capital & overdraft sanctions",
    svgIcon: <BankIconSvg bg="#ED1C24" label="Kotak" />,
  },
  {
    id: "idfc",
    name: "IDFC FIRST Bank",
    shortName: "IDFC",
    category: "Bank",
    color: "#9D1D27",
    interestRate: "Starting 9.75% p.a.",
    maxAmount: "Up to ₹5 Crore",
    processingFee: "0.50% - 1.00%",
    specialFeature: "Zero foreclosure charges after 12 EMIs on personal loans",
    svgIcon: <BankIconSvg bg="#9D1D27" label="IDFC" />,
  },
  {
    id: "tata-capital",
    name: "Tata Capital",
    shortName: "Tata Cap",
    category: "NBFC",
    color: "#00539B",
    interestRate: "Starting 9.99% p.a.",
    maxAmount: "Up to ₹3 Crore",
    processingFee: "1.00% - 1.75%",
    specialFeature: "Customized EMI moratorium for industrial equipment",
    svgIcon: <BankIconSvg bg="#00539B" label="TATA" />,
  },
  {
    id: "bajaj",
    name: "Bajaj Finserv",
    shortName: "Bajaj",
    category: "NBFC",
    color: "#0072BC",
    interestRate: "Starting 10.50% p.a.",
    maxAmount: "Up to ₹40 Lakhs",
    processingFee: "1.25% - 2.00%",
    specialFeature: "Flexi hybrid limit with unlimited withdrawals",
    svgIcon: <BankIconSvg bg="#0072BC" label="Bajaj" />,
  },
  {
    id: "piramal",
    name: "Piramal Finance",
    shortName: "Piramal",
    category: "NBFC",
    color: "#D9272E",
    interestRate: "Starting 9.40% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.75%",
    specialFeature:
      "High LTV LAP sanctions for commercial & residential property",
    svgIcon: <BankIconSvg bg="#D9272E" label="PFL" />,
  },
  {
    id: "lt-finance",
    name: "L&T Finance",
    shortName: "L&T Fin",
    category: "NBFC",
    color: "#0066B2",
    interestRate: "Starting 10.25% p.a.",
    maxAmount: "Up to ₹2 Crore",
    processingFee: "1.00%",
    specialFeature: "Tailored micro-enterprise & women business schemes",
    svgIcon: <BankIconSvg bg="#0066B2" label="L&T" />,
  },
  {
    id: "indusind",
    name: "IndusInd Bank",
    shortName: "IndusInd",
    category: "Bank",
    color: "#861F41",
    interestRate: "Starting 9.40% p.a.",
    maxAmount: "Up to ₹5 Crore",
    processingFee: "1.00%",
    specialFeature: "Instant current account overdraft & working capital",
    svgIcon: <BankIconSvg bg="#861F41" label="IIB" />,
  },
  {
    id: "bob",
    name: "Bank of Baroda",
    shortName: "BoB",
    category: "Bank",
    color: "#F26522",
    interestRate: "Starting 8.60% p.a.",
    maxAmount: "Up to ₹15 Crore",
    processingFee: "0.25% - 0.50%",
    specialFeature: "Baroda Sun MSME specialized credit support",
    svgIcon: <BankIconSvg bg="#F26522" label="BoB" />,
  },
  {
    id: "pnb",
    name: "Punjab National Bank",
    shortName: "PNB",
    category: "Bank",
    color: "#A20034",
    interestRate: "Starting 8.65% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.35%",
    specialFeature: "Subsidized government MSME & Mudra loans",
    svgIcon: <BankIconSvg bg="#A20034" label="PNB" />,
  },
  {
    id: "poonawalla",
    name: "Poonawalla Fincorp",
    shortName: "Poonawalla",
    category: "NBFC",
    color: "#DA291C",
    interestRate: "Starting 9.99% p.a.",
    maxAmount: "Up to ₹50 Lakhs",
    processingFee: "1.00%",
    specialFeature:
      "Zero pre-payment charges & zero hidden administrative fees",
    svgIcon: <BankIconSvg bg="#DA291C" label="PFL" />,
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
      <div className="w-8 h-8 flex-shrink-0 rounded-lg overflow-hidden">
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
