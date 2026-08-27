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

/* ═══════════════════════════════════════════════════════════════════
   OFFICIAL BANK & NBFC LOGO MARKS (Authentic Vector Emblems)
   ═══════════════════════════════════════════════════════════════════ */

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
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="HDFC Bank Official Logo">
        <rect width="48" height="48" rx="10" fill="#004C8F" />
        {/* White cross separator lines forming interlocking corners */}
        <rect x="8" y="22" width="32" height="4" fill="#FFFFFF" />
        <rect x="22" y="8" width="4" height="32" fill="#FFFFFF" />
        {/* Central Red Square */}
        <rect x="17" y="17" width="14" height="14" fill="#ED1C24" />
      </svg>
    ),
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
    svgIcon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="State Bank of India Official Logo">
        <rect width="48" height="48" rx="10" fill="#FFFFFF" />
        <circle cx="24" cy="24" r="19" fill="#0080C8" />
        {/* Keyhole circular cutout */}
        <circle cx="24" cy="23" r="6.5" fill="#FFFFFF" />
        {/* Keyhole vertical slot */}
        <rect x="22" y="23" width="4" height="17" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: "icici",
    name: "ICICI Bank",
    shortName: "ICICI Bank",
    category: "Bank",
    color: "#9C1D26",
    interestRate: "Starting 8.90% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.50% - 1.25%",
    specialFeature: "Pre-approved corporate and doctor loan offers",
    svgIcon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="ICICI Bank Official Logo">
        <rect width="48" height="48" rx="10" fill="#9C1D26" />
        {/* Stylized 'i' dot */}
        <circle cx="24" cy="12" r="3.5" fill="#F37E20" />
        {/* Stylized 'i' stem and circular swoosh */}
        <path d="M21 18h6v17h-6z" fill="#FFFFFF" />
        <path d="M12 24.5c0-6.6 5.4-12 12-12 3.2 0 6.1 1.2 8.3 3.3l-3 3c-1.4-1.4-3.3-2.3-5.3-2.3-4.4 0-8 3.6-8 8s3.6 8 8 8c2 0 3.9-.9 5.3-2.3l3 3C30.1 35.3 27.2 36.5 24 36.5c-6.6 0-12-5.4-12-12z" fill="#F37E20" opacity="0.95" />
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
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Axis Bank Official Logo">
        <rect width="48" height="48" rx="10" fill="#97144D" />
        {/* Axis signature Burgundy triangular chevron / A */}
        <path d="M24 9L38 37H30L24 25L18 37H10L24 9Z" fill="#FFFFFF" />
        <path d="M24 16.5L30.5 29.5H25.5L24 26.5L22.5 29.5H17.5L24 16.5Z" fill="#97144D" />
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
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Kotak Mahindra Bank Official Logo">
        <rect width="48" height="48" rx="10" fill="#ED1C24" />
        {/* Kotak infinity K ribbon mark */}
        <path d="M14 12v24h5.5V26.5l7 9.5h7.5l-8.5-11.5L34 12h-7.5l-6.5 8.5V12h-6z" fill="#FFFFFF" />
        <circle cx="33.5" cy="15" r="3" fill="#003366" />
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
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="IDFC FIRST Bank Official Logo">
        <rect width="48" height="48" rx="10" fill="#9D1D27" />
        {/* 4 IDFC FIRST geometric quadrant blocks */}
        <rect x="12" y="12" width="10" height="10" rx="2" fill="#FFFFFF" />
        <rect x="26" y="12" width="10" height="10" rx="2" fill="#EAA023" />
        <rect x="12" y="26" width="10" height="10" rx="2" fill="#EAA023" />
        <rect x="26" y="26" width="10" height="10" rx="2" fill="#FFFFFF" />
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
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Tata Capital Official Logo">
        <rect width="48" height="48" rx="10" fill="#00539B" />
        {/* Iconic Tata T dual swoosh mark */}
        <path d="M13 14c4 0 10 1.5 10 10v12h-3.5V24c0-6-4-7.5-6.5-7.5v-2.5z" fill="#FFFFFF" />
        <path d="M35 14c-4 0-10 1.5-10 10v12h3.5V24c0-6 4-7.5 6.5-7.5v-2.5z" fill="#FFFFFF" />
        <circle cx="24" cy="11" r="2.5" fill="#FFFFFF" />
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
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Bajaj Finserv Official Logo">
        <rect width="48" height="48" rx="10" fill="#0072BC" />
        {/* Bajaj stylized dual flying chevron wings */}
        <path d="M13 15l11 9-11 9v-5.5l6.5-3.5-6.5-3.5V15z" fill="#FFFFFF" />
        <path d="M22 15l11 9-11 9v-5.5l6.5-3.5-6.5-3.5V15z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: "piramal",
    name: "Piramal Finance",
    shortName: "Piramal Finance",
    category: "NBFC",
    color: "#D9272E",
    interestRate: "Starting 9.40% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.75%",
    specialFeature: "High LTV LAP sanctions for commercial & residential property",
    svgIcon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Piramal Finance Official Logo">
        <rect width="48" height="48" rx="10" fill="#D9272E" />
        {/* Piramal geometric faceted diamond flower */}
        <circle cx="24" cy="24" r="4.5" fill="#FFFFFF" />
        <path d="M24 10l3 7.5h-6l3-7.5z" fill="#FFFFFF" />
        <path d="M24 38l3-7.5h-6l3 7.5z" fill="#FFFFFF" />
        <path d="M10 24l7.5-3v6l-7.5-3z" fill="#FFFFFF" />
        <path d="M38 24l-7.5-3v6l7.5-3z" fill="#FFFFFF" />
        <path d="M14 14l7 3.5-3.5 3.5-3.5-7z" fill="#FFC72C" />
        <path d="M34 14l-7 3.5 3.5 3.5 3.5-7z" fill="#FFC72C" />
        <path d="M14 34l7-3.5-3.5-3.5-3.5 7z" fill="#FFC72C" />
        <path d="M34 34l-7-3.5 3.5-3.5 3.5 7z" fill="#FFC72C" />
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
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="L&T Finance Official Logo">
        <rect width="48" height="48" rx="10" fill="#0066B2" />
        <circle cx="24" cy="24" r="16" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <path d="M16 16v16h8v-3h-5V16h-3z" fill="#FFFFFF" />
        <path d="M25 18h10v3h-3.5v11h-3V21H25v-3z" fill="#FFFFFF" />
        <circle cx="24.5" cy="25" r="1.5" fill="#FFFFFF" />
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
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="IndusInd Bank Official Logo">
        <rect width="48" height="48" rx="10" fill="#861F41" />
        {/* IndusInd Bull / Shield silhouette */}
        <path d="M24 10L36 15v9c0 7-5 13-12 15-7-2-12-8-12-15v-9l12-5z" fill="#FFFFFF" opacity="0.15" />
        <path d="M18 25c1-3 3-5 6-5 2 0 4 1 5 3l3-1c-1.5-3-4.5-5-8-5-4.5 0-8 3-9 7l3 1z" fill="#FBB03B" />
        <path d="M16 28c1 3 4 5 8 5 3.5 0 6.5-2 8-5l-3-1c-1 2-3 3-5 3-3 0-5-2-6-4l-2 2z" fill="#FBB03B" />
        <circle cx="24" cy="24" r="3" fill="#FFFFFF" />
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
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Bank of Baroda Official Logo">
        <rect width="48" height="48" rx="10" fill="#F26522" />
        {/* Baroda Sun emblem: Stylized double B sunburst */}
        <circle cx="24" cy="24" r="14" fill="#FFFFFF" />
        <circle cx="24" cy="24" r="11" fill="#F26522" />
        <path d="M19 17h5a3.5 3.5 0 013.5 3.5c0 1.2-.6 2.2-1.5 2.8 1.4.6 2.5 1.8 2.5 3.2a4 4 0 01-4 4h-5.5V17zm3 5.5h2a1.5 1.5 0 000-3h-2v3zm0 5.5h2.5a1.5 1.5 0 000-3H22v3z" fill="#FFFFFF" />
        {/* Sun rays accents */}
        <path d="M24 7v3M24 38v3M7 24h3M38 24h3M12 12l2.5 2.5M33.5 33.5l2.5 2.5M12 36l2.5-2.5M33.5 14.5l2.5-2.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
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
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Punjab National Bank Official Logo">
        <rect width="48" height="48" rx="10" fill="#A20034" />
        <circle cx="24" cy="24" r="14" stroke="#FFC72C" strokeWidth="2" fill="#A20034" />
        {/* PNB circular lockup emblem */}
        <path d="M18 16h6a5 5 0 015 5v2a5 5 0 01-5 5h-3v4h-3V16zm3 9h3a2 2 0 002-2v-2a2 2 0 00-2-2h-3v6z" fill="#FFFFFF" />
        <circle cx="24" cy="24" r="2" fill="#FFC72C" />
      </svg>
    ),
  },
  {
    id: "poonawalla",
    name: "Poonawalla Fincorp",
    shortName: "Poonawalla Fincorp",
    category: "NBFC",
    color: "#DA291C",
    interestRate: "Starting 9.99% p.a.",
    maxAmount: "Up to ₹50 Lakhs",
    processingFee: "1.00%",
    specialFeature: "Zero pre-payment charges & zero hidden administrative fees",
    svgIcon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Poonawalla Fincorp Official Logo">
        <rect width="48" height="48" rx="10" fill="#DA291C" />
        {/* Dynamic soaring butterfly wings */}
        <path d="M24 24c-3-6-8-9-13-9 0 7 4 13 10 15 1-2 2-4 3-6z" fill="#FFFFFF" />
        <path d="M24 24c3-6 8-9 13-9 0 7-4 13-10 15-1-2-2-4-3-6z" fill="#FFFFFF" />
        <path d="M24 25c-2 3-5 6-9 7 2 3 6 4 9 3 0-3 0-7 0-10z" fill="#FFC72C" />
        <path d="M24 25c2 3 5 6 9 7-2 3-6 4-9 3 0-3 0-7 0-10z" fill="#FFC72C" />
      </svg>
    ),
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
      <div className="w-8 h-8 flex-shrink-0 rounded-lg overflow-hidden shadow-xs">
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
