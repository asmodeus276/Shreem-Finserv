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

export const BANK_PARTNERS_DATA: BankInfo[] = [
  {
    id: "hdfc",
    name: "HDFC Bank",
    shortName: "HDFC Bank",
    category: "Bank",
    color: "#004C8F",
    interestRate: "Starting 8.75% p.a.",
    maxAmount: "Up to ₹15 Crore",
    processingFee: "0.50% - 1.00%",
    specialFeature: "Instant digital sanction in 4 hours for prime profiles",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#004C8F" />
        <rect x="6" y="6" width="36" height="36" rx="4" fill="white" />
        <rect x="10" y="10" width="28" height="28" fill="#004C8F" />
        {/* HDFC Cross in Red & Blue */}
        <rect x="15" y="15" width="18" height="18" fill="white" />
        <rect x="18" y="18" width="12" height="12" fill="#ED2128" />
        <rect x="22" y="11" width="4" height="26" fill="#ED2128" />
        <rect x="11" y="22" width="26" height="4" fill="#ED2128" />
      </svg>
    ),
  },
  {
    id: "sbi",
    name: "State Bank of India",
    shortName: "SBI",
    category: "Bank",
    color: "#280071",
    interestRate: "Starting 8.50% p.a.",
    maxAmount: "Up to ₹20 Crore",
    processingFee: "Zero to 0.35%",
    specialFeature: "Lowest sovereign repo-linked lending rates (EBLR)",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="23" fill="#00A5DF" stroke="#0072BC" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="14" fill="#00A5DF" />
        {/* Keyhole cutout */}
        <circle cx="24" cy="21" r="5" fill="white" />
        <rect x="22" y="21" width="4" height="17" fill="white" />
      </svg>
    ),
  },
  {
    id: "icici",
    name: "ICICI Bank",
    shortName: "ICICI Bank",
    category: "Bank",
    color: "#F37E20",
    interestRate: "Starting 8.90% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.50% - 1.25%",
    specialFeature: "Pre-approved corporate and doctor loan offers",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#A81D24" />
        {/* ICICI stylized flame letter 'i' */}
        <circle cx="17" cy="16" r="3.5" fill="#F37E20" />
        <rect x="14" y="22" width="6" height="14" rx="2" fill="#F37E20" />
        <path d="M25 15C25 15 32 18 32 26C32 34 24 36 24 36" stroke="#F37E20" strokeWidth="4" strokeLinecap="round" />
        <circle cx="27" cy="25.5" r="2.5" fill="white" />
      </svg>
    ),
  },
  {
    id: "axis",
    name: "Axis Bank",
    shortName: "Axis Bank",
    category: "Bank",
    color: "#97144D",
    interestRate: "Starting 9.25% p.a.",
    maxAmount: "Up to ₹5 Crore",
    processingFee: "1.00%",
    specialFeature: "100% paperless digital KYC & video appraisal",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#97144D" />
        {/* Axis Bank stylized triangle A symbol */}
        <path d="M24 10L36 34H28L24 26L20 34H12L24 10Z" fill="white" />
        <polygon points="24,19 21,26 27,26" fill="#97144D" />
      </svg>
    ),
  },
  {
    id: "kotak",
    name: "Kotak Mahindra Bank",
    shortName: "Kotak Bank",
    category: "Bank",
    color: "#ED1C24",
    interestRate: "Starting 9.50% p.a.",
    maxAmount: "Up to ₹7.5 Crore",
    processingFee: "0.75% - 1.50%",
    specialFeature: "Fastest MSME working capital & overdraft sanctions",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#ED1C24" />
        {/* Kotak infinity loop */}
        <path d="M14 24C14 19 18 15 23 15C27 15 30 18 32 21L34 24C36 27 38 29 41 29" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M34 24C34 29 30 33 25 33C21 33 18 30 16 27L14 24C12 21 10 19 7 19" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3.5" fill="#003366" />
      </svg>
    ),
  },
  {
    id: "idfc",
    name: "IDFC FIRST Bank",
    shortName: "IDFC FIRST",
    category: "Bank",
    color: "#9D1D27",
    interestRate: "Starting 9.75% p.a.",
    maxAmount: "Up to ₹5 Crore",
    processingFee: "0.50% - 1.00%",
    specialFeature: "Zero foreclosure charges after 12 EMIs on personal loans",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#9D1D27" />
        {/* IDFC FIRST 4-block geometric crest */}
        <rect x="12" y="12" width="10" height="10" rx="1.5" fill="white" />
        <rect x="25" y="12" width="11" height="10" rx="1.5" fill="white" />
        <rect x="12" y="25" width="10" height="11" rx="1.5" fill="white" />
        <rect x="25" y="25" width="11" height="11" rx="1.5" fill="#F4B223" />
      </svg>
    ),
  },
  {
    id: "tata-capital",
    name: "Tata Capital",
    shortName: "Tata Capital",
    category: "NBFC",
    color: "#00539B",
    interestRate: "Starting 9.99% p.a.",
    maxAmount: "Up to ₹3 Crore",
    processingFee: "1.00% - 1.75%",
    specialFeature: "Customized EMI moratorium for industrial equipment",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#00539B" />
        {/* TATA double swoosh arcs */}
        <path d="M12 18C16 15 22 15 26 21C29 26 33 26 36 24" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M12 26C16 23 22 23 26 29C29 34 33 34 36 32" stroke="#5BC2E7" strokeWidth="3" strokeLinecap="round" />
        <text x="24" y="42" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">TATA</text>
      </svg>
    ),
  },
  {
    id: "bajaj",
    name: "Bajaj Finserv",
    shortName: "Bajaj Finserv",
    category: "NBFC",
    color: "#0072BC",
    interestRate: "Starting 10.50% p.a.",
    maxAmount: "Up to ₹40 Lakhs",
    processingFee: "1.25% - 2.00%",
    specialFeature: "Flexi hybrid limit with unlimited withdrawals",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#0072BC" />
        {/* Bajaj Finserv stylized B Wings */}
        <circle cx="24" cy="24" r="14" stroke="white" strokeWidth="3" />
        <path d="M18 16H26C29 16 31 18 31 20C31 22 29 24 26 24H18V16Z" fill="white" />
        <path d="M18 24H27C30 24 32 26 32 28.5C32 31 30 33 27 33H18V24Z" fill="#FDB913" />
      </svg>
    ),
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
    specialFeature: "High LTV LAP sanctions for commercial & residential property",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#D9272E" />
        {/* Piramal polygon diamond emblem */}
        <polygon points="24,10 37,32 11,32" fill="white" />
        <polygon points="24,18 31,30 17,30" fill="#D9272E" />
        <circle cx="24" cy="25" r="3" fill="#F4B223" />
      </svg>
    ),
  },
  {
    id: "lt-finance",
    name: "L&T Finance",
    shortName: "L&T Finance",
    category: "NBFC",
    color: "#0066B2",
    interestRate: "Starting 10.25% p.a.",
    maxAmount: "Up to ₹2 Crore",
    processingFee: "1.00%",
    specialFeature: "Tailored micro-enterprise & women business schemes",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#0066B2" />
        <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="2.5" />
        <text x="24" y="28" textAnchor="middle" fill="white" fontSize="11" fontWeight="900" fontFamily="sans-serif">L&T</text>
      </svg>
    ),
  },
  {
    id: "indusind",
    name: "IndusInd Bank",
    shortName: "IndusInd Bank",
    category: "Bank",
    color: "#861F41",
    interestRate: "Starting 9.40% p.a.",
    maxAmount: "Up to ₹5 Crore",
    processingFee: "1.00%",
    specialFeature: "Instant current account overdraft & working capital",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#861F41" />
        {/* IndusInd zebu bull horned mascot crest */}
        <circle cx="24" cy="24" r="13" fill="#861F41" stroke="#F4B223" strokeWidth="2" />
        <path d="M16 22C16 18 20 14 24 14C28 14 32 18 32 22C32 26 28 30 24 30C20 30 16 26 16 22Z" fill="#F4B223" />
        <path d="M15 16L18 20M33 16L30 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "bob",
    name: "Bank of Baroda",
    shortName: "Bank of Baroda",
    category: "Bank",
    color: "#F26522",
    interestRate: "Starting 8.60% p.a.",
    maxAmount: "Up to ₹15 Crore",
    processingFee: "0.25% - 0.50%",
    specialFeature: "Baroda Sun MSME specialized credit support",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#F26522" />
        {/* Baroda Sun dual-B rays */}
        <circle cx="24" cy="24" r="11" fill="white" />
        <path d="M21 16H25C27 16 28 17 28 19C28 21 27 22 25 22H21V16Z" fill="#F26522" />
        <path d="M21 22H26C28 22 29 23 29 25C29 27 28 28 26 28H21V22Z" fill="#F26522" />
        <path d="M16 14L13 11M32 14L35 11M16 34L13 37M32 34L35 37" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
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
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#A20034" />
        <circle cx="24" cy="24" r="14" fill="#F4B223" />
        <circle cx="24" cy="24" r="9" fill="#A20034" />
        <path d="M20 18V30M20 18H26C28 18 29 19 29 21C29 23 28 24 26 24H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
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
    specialFeature: "Zero pre-payment charges & zero hidden administrative fees",
    svgIcon: (
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#DA291C" />
        {/* Poonawalla concentric circles */}
        <circle cx="24" cy="24" r="14" stroke="white" strokeWidth="3" fill="none" />
        <circle cx="24" cy="24" r="7" fill="white" />
        <circle cx="24" cy="24" r="3.5" fill="#001A62" />
      </svg>
    ),
  },
];

export const BankBadge: React.FC<{ bankId: string; className?: string }> = ({
  bankId,
  className = "",
}) => {
  const bank = BANK_PARTNERS_DATA.find((b) => b.id === bankId) || BANK_PARTNERS_DATA[0];

  return (
    <div className={`inline-flex items-center gap-3 bg-white border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-sm hover:shadow transition-all ${className}`}>
      {bank.svgIcon}
      <div className="flex flex-col text-left">
        <span className="text-xs font-bold text-slate-900 leading-tight">{bank.name}</span>
        <span className="text-[10px] text-slate-400 font-semibold">{bank.category} Partner</span>
      </div>
    </div>
  );
};
