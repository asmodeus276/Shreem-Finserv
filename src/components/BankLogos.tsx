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

export interface CategoryPartnerRateConfig {
  bankId: string;
  rate: number;
  unit?: "% p.a." | "% / mo";
  specialFeature?: string;
  maxAmount?: string;
  processingFee?: string;
}

export interface CategoryRateConfig {
  id: string;
  categoryName: string;
  baseRate: number;
  unit: "% p.a." | "% / mo";
  partners: CategoryPartnerRateConfig[];
}

/* ═══════════════════════════════════════════════════════════════════
   OFFICIAL BANK & NBFC PARTNER LOGOS (Authentic Visual Rendering)
   ═══════════════════════════════════════════════════════════════════ */

const renderBankLogo = (src: string, alt: string) => (
  <div className="relative w-full h-full flex items-center justify-center p-1">
    <Image
      src={src}
      alt={alt}
      width={120}
      height={32}
      className="max-h-full max-w-full w-auto h-auto object-contain filter-none brightness-100 contrast-100"
    />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   BASE BANK & NBFC DIRECTORY DICTIONARY
   ═══════════════════════════════════════════════════════════════════ */

export const BANK_PARTNERS_MAP: Record<string, BankInfo> = {
  hdfc: {
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
  sbi: {
    id: "sbi",
    name: "State Bank of India",
    shortName: "SBI",
    category: "Bank",
    color: "#00A5DF",
    logoUrl: "/logos/banks/sbi.svg",
    interestRate: "Starting 7.25% p.a.",
    maxAmount: "Up to ₹20 Crore",
    processingFee: "Zero to 0.35%",
    specialFeature: "Lowest sovereign repo-linked lending rates (EBLR)",
    svgIcon: renderBankLogo("/logos/banks/sbi.svg", "State Bank of India"),
  },
  pnb: {
    id: "pnb",
    name: "Punjab National Bank",
    shortName: "PNB",
    category: "Bank",
    color: "#A20034",
    logoUrl: "/logos/banks/pnb.svg",
    interestRate: "Starting 7.25% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.35%",
    specialFeature: "Subsidized sovereign rates and government credit schemes",
    svgIcon: renderBankLogo("/logos/banks/pnb.svg", "Punjab National Bank"),
  },
  canara: {
    id: "canara",
    name: "Canara Bank",
    shortName: "Canara Bank",
    category: "Bank",
    color: "#004C8F",
    logoUrl: "/logos/banks/canara.svg",
    interestRate: "Starting 7.25% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.25% - 0.50%",
    specialFeature: "Preferred sovereign rates with zero advance broker charges",
    svgIcon: renderBankLogo("/logos/banks/canara.svg", "Canara Bank"),
  },
  "indian-bank": {
    id: "indian-bank",
    name: "Indian Bank",
    shortName: "Indian Bank",
    category: "Bank",
    color: "#003399",
    logoUrl: "/logos/banks/indian-bank.png",
    interestRate: "Starting 7.25% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.25% - 0.40%",
    specialFeature: "Special loan rebates for women co-applicants & affordable housing",
    svgIcon: renderBankLogo("/logos/banks/indian-bank.png", "Indian Bank"),
  },
  icici: {
    id: "icici",
    name: "ICICI Bank",
    shortName: "ICICI Bank",
    category: "Bank",
    color: "#9C1D26",
    logoUrl: "/logos/banks/icici.svg",
    interestRate: "Starting 8.90% p.a.",
    maxAmount: "Up to ₹10 Crore",
    processingFee: "0.50% - 1.25%",
    specialFeature: "Pre-approved corporate and professional loan offers",
    svgIcon: renderBankLogo("/logos/banks/icici.svg", "ICICI Bank"),
  },
  axis: {
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
  kotak: {
    id: "kotak",
    name: "Kotak Mahindra Bank",
    shortName: "Kotak Bank",
    category: "Bank",
    color: "#ED1C24",
    logoUrl: "/logos/banks/kotak.svg",
    interestRate: "Starting 8.50% p.a.",
    maxAmount: "Up to ₹7.5 Crore",
    processingFee: "0.75% - 1.50%",
    specialFeature: "Fastest MSME working capital & overdraft sanctions",
    svgIcon: renderBankLogo("/logos/banks/kotak.svg", "Kotak Mahindra Bank"),
  },
  idfc: {
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
  "tata-capital": {
    id: "tata-capital",
    name: "Tata Capital",
    shortName: "Tata Capital",
    category: "NBFC",
    color: "#00539B",
    logoUrl: "/logos/banks/tata-capital.png",
    interestRate: "Starting 9.99% p.a.",
    maxAmount: "Up to ₹3 Crore",
    processingFee: "1.00% - 1.75%",
    specialFeature: "Customized EMI moratorium for equipment and business",
    svgIcon: renderBankLogo("/logos/banks/tata-capital.png", "Tata Capital"),
  },
  bajaj: {
    id: "bajaj",
    name: "Bajaj Finserv",
    shortName: "Bajaj Finserv",
    category: "NBFC",
    color: "#0072BC",
    logoUrl: "/logos/banks/bajaj.svg",
    interestRate: "Starting 10.50% p.a.",
    maxAmount: "Up to ₹50 Lakhs",
    processingFee: "1.25% - 2.00%",
    specialFeature: "Flexi hybrid limit with unlimited withdrawals",
    svgIcon: renderBankLogo("/logos/banks/bajaj.svg", "Bajaj Finserv"),
  },
  piramal: {
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
  "lt-finance": {
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
  indusind: {
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
  bob: {
    id: "bob",
    name: "Bank of Baroda",
    shortName: "Bank of Baroda",
    category: "Bank",
    color: "#F26522",
    logoUrl: "/logos/banks/bob.png",
    interestRate: "Starting 8.60% p.a.",
    maxAmount: "Up to ₹15 Crore",
    processingFee: "0.25% - 0.50%",
    specialFeature: "Baroda Sun MSME & retail specialized credit support",
    svgIcon: renderBankLogo("/logos/banks/bob.png", "Bank of Baroda"),
  },
  poonawalla: {
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
};

export const BANK_PARTNERS_DATA: BankInfo[] = Object.values(BANK_PARTNERS_MAP);

/* ═══════════════════════════════════════════════════════════════════
   CATEGORY-SPECIFIC INTEREST RATE MATRIX
   (Strictly mapped to all loan categories with precise bank brackets)
   ═══════════════════════════════════════════════════════════════════ */

export const CATEGORY_RATES_MATRIX: Record<string, CategoryRateConfig> = {
  // 1. Home Loan (/home-loan) — Starting Rate: 7.25% p.a.
  "home-loan": {
    id: "home-loan",
    categoryName: "Home Loan",
    baseRate: 7.25,
    unit: "% p.a.",
    partners: [
      { bankId: "sbi", rate: 7.25, specialFeature: "Lowest sovereign repo-linked lending rates (EBLR)" },
      { bankId: "pnb", rate: 7.25, specialFeature: "Subsidized sovereign home loan rates and PMAY benefits" },
      { bankId: "canara", rate: 7.25, specialFeature: "Preferred sovereign housing rates with zero advance broker charges" },
      { bankId: "indian-bank", rate: 7.25, specialFeature: "Special home loan rebates for women co-applicants" },
      { bankId: "bob", rate: 8.60, specialFeature: "Baroda Home Advantage with quick digital appraisal" },
      { bankId: "hdfc", rate: 8.75, specialFeature: "Instant digital sanction in 4 hours for prime profiles" },
      { bankId: "icici", rate: 8.90, specialFeature: "Pre-approved home loan offers with minimal documentation" },
      { bankId: "axis", rate: 9.25, specialFeature: "100% paperless digital KYC & video appraisal" },
    ],
  },

  // 2. Car Loan (/car-loan) — Starting Rate: 7.50% p.a. (New) / 11.50% p.a. (Used)
  "car-loan": {
    id: "car-loan",
    categoryName: "Car Loan",
    baseRate: 7.50,
    unit: "% p.a.",
    partners: [
      { bankId: "sbi", rate: 7.50, specialFeature: "Lowest auto loan rates on new car financing with zero prepayment penalty" },
      { bankId: "hdfc", rate: 7.75, specialFeature: "30-minute digital approval and 80% on-road funding for new cars" },
      { bankId: "icici", rate: 8.00, specialFeature: "Instant paperless sanction for pre-approved corporate customers" },
      { bankId: "axis", rate: 8.25, specialFeature: "Flexible tenures up to 8 years with quick dealer payout" },
      { bankId: "kotak", rate: 8.50, specialFeature: "Customized EMI repayment schemes for luxury & commercial vehicles" },
      { bankId: "bob", rate: 8.70, specialFeature: "Baroda Auto Loan with nominal processing fee" },
    ],
  },

  // 3. Education Loan (/education-loan) — Starting Rate: 8.50% p.a.
  "education-loan": {
    id: "education-loan",
    categoryName: "Education Loan",
    baseRate: 8.50,
    unit: "% p.a.",
    partners: [
      { bankId: "sbi", rate: 8.50, specialFeature: "SBI Scholar & Global Ed-vantage schemes for top universities" },
      { bankId: "pnb", rate: 8.50, specialFeature: "PNB Udaan overseas education loans with full tuition coverage" },
      { bankId: "canara", rate: 8.60, specialFeature: "Vidya Sagar education loan with extended study moratorium" },
      { bankId: "hdfc", rate: 9.00, specialFeature: "HDFC Credila fast-track unsecured loans for global masters" },
      { bankId: "icici", rate: 9.25, specialFeature: "Comprehensive pre-visa sanction letters for premier institutes" },
      { bankId: "axis", rate: 9.50, specialFeature: "100% living & tuition financing with zero collateral up to ₹50L" },
    ],
  },

  // 4. Loan Against Property / LAP (/loan-against-property) — Starting Rate: 9.00% p.a.
  "loan-against-property": {
    id: "loan-against-property",
    categoryName: "Loan Against Property",
    baseRate: 9.00,
    unit: "% p.a.",
    partners: [
      { bankId: "sbi", rate: 9.00, specialFeature: "Lowest mortgage equity rates for residential & commercial property" },
      { bankId: "pnb", rate: 9.10, specialFeature: "Subsidized sovereign LAP terms for MSME business expansion" },
      { bankId: "hdfc", rate: 9.25, specialFeature: "High LTV ratio up to 75% with fast legal & technical appraisal" },
      { bankId: "icici", rate: 9.50, specialFeature: "Instant digital sanction with customized overdraft against property" },
      { bankId: "axis", rate: 9.75, specialFeature: "Flexible 15-20 year repayment tenure with zero prepayment charges" },
      { bankId: "piramal", rate: 9.90, specialFeature: "High LTV LAP sanctions for commercial & residential property" },
    ],
  },

  // 5. Professional Loan (/professional-loan) — Starting Rate: 9.90% p.a.
  "professional-loan": {
    id: "professional-loan",
    categoryName: "Professional Loan",
    baseRate: 9.90,
    unit: "% p.a.",
    partners: [
      { bankId: "sbi", rate: 9.90, specialFeature: "Doctor Plus & CA credit lines with zero collateral requirement" },
      { bankId: "hdfc", rate: 10.25, specialFeature: "Instant pre-approved professional limits up to ₹1 Crore" },
      { bankId: "icici", rate: 10.50, specialFeature: "Fast-track clinic expansion and equipment composite limits" },
      { bankId: "axis", rate: 10.75, specialFeature: "Paperless KYC and same-day sanction for certified practitioners" },
      { bankId: "kotak", rate: 11.00, specialFeature: "Tailored professional overdraft with flexible repayment tenures" },
      { bankId: "tata-capital", rate: 11.25, specialFeature: "Collateral-free practice setup financing with minimal paperwork" },
    ],
  },

  // 6. Personal Loan (/personal-loan) — Starting Rate: 10.50% p.a.
  "personal-loan": {
    id: "personal-loan",
    categoryName: "Personal Loan",
    baseRate: 10.50,
    unit: "% p.a.",
    partners: [
      { bankId: "hdfc", rate: 10.50, specialFeature: "Instant digital sanction in 4 hours for salaried & prime profiles" },
      { bankId: "icici", rate: 10.75, specialFeature: "Pre-approved corporate personal loan offers with zero physical KYC" },
      { bankId: "axis", rate: 11.00, specialFeature: "100% paperless digital verification and flexible 12-84 month tenures" },
      { bankId: "kotak", rate: 11.25, specialFeature: "Express personal credit with instant bank account disbursal" },
      { bankId: "sbi", rate: 11.50, specialFeature: "SBI Xpress Credit with lowest sovereign processing fees" },
      { bankId: "idfc", rate: 11.75, specialFeature: "Zero foreclosure charges after 12 EMIs on personal loans" },
    ],
  },

  // 7. Business Loan (/business-loan) — Starting Rate: 14.00% p.a.
  "business-loan": {
    id: "business-loan",
    categoryName: "Business Loan",
    baseRate: 14.00,
    unit: "% p.a.",
    partners: [
      { bankId: "hdfc", rate: 14.00, specialFeature: "Unsecured business growth credit lines with fast 24-48 hr sanction" },
      { bankId: "icici", rate: 14.25, specialFeature: "GST and banking surrogate underwriting with zero property pledge" },
      { bankId: "axis", rate: 14.50, specialFeature: "Customized MSME term loans and dropline overdraft limits" },
      { bankId: "kotak", rate: 14.75, specialFeature: "Fastest MSME working capital & unsecured business limits" },
      { bankId: "bajaj", rate: 15.00, specialFeature: "Flexi hybrid business credit limit with unlimited withdrawals" },
      { bankId: "tata-capital", rate: 15.25, specialFeature: "Collateral-free working capital loans with seasonal EMI plans" },
    ],
  },

  // 8. Working Capital (/working-capital or /business-loan/msme-working-capital) — Starting Rate: 14.00% p.a.
  "working-capital": {
    id: "working-capital",
    categoryName: "Working Capital",
    baseRate: 14.00,
    unit: "% p.a.",
    partners: [
      { bankId: "hdfc", rate: 14.00, specialFeature: "Revolving Cash Credit (CC) & Overdraft (OD) facility for MSMEs" },
      { bankId: "axis", rate: 14.25, specialFeature: "Dropline Overdraft with interest charged strictly on daily utilization" },
      { bankId: "icici", rate: 14.50, specialFeature: "Instant trade credit lines & invoice discounting integration" },
      { bankId: "sbi", rate: 14.50, specialFeature: "SME working capital facilities linked to sovereign EBLR" },
      { bankId: "indusind", rate: 14.75, specialFeature: "Instant current account overdraft & working capital lines" },
      { bankId: "kotak", rate: 15.00, specialFeature: "Fast working capital sanctions for supply chain & trade cycles" },
    ],
  },

  // 9. Machinery & Equipment Loan (/machinery-loan) — Starting Rate: 10.00% p.a.
  "machinery-loan": {
    id: "machinery-loan",
    categoryName: "Machinery Loan",
    baseRate: 10.00,
    unit: "% p.a.",
    partners: [
      { bankId: "sbi", rate: 10.00, specialFeature: "Direct OEM machinery financing with full depreciation tax benefits" },
      { bankId: "hdfc", rate: 10.25, specialFeature: "Up to 90% invoice funding for new domestic and imported equipment" },
      { bankId: "icici", rate: 10.50, specialFeature: "Fast machinery loan appraisal with direct vendor disbursement" },
      { bankId: "axis", rate: 10.50, specialFeature: "Structured seasonal repayment schedules matching plant revenue" },
      { bankId: "tata-capital", rate: 10.75, specialFeature: "Customized EMI moratorium for industrial equipment & plant tools" },
      { bankId: "kotak", rate: 11.00, specialFeature: "Diagnostic & manufacturing machinery financing with minimal margin" },
    ],
  },

  // 10. Loans for Women Entrepreneurs (/business-loan/for-women) — Starting Rate: 10.00% p.a. (0.50% Subsidy)
  "loans-for-women": {
    id: "loans-for-women",
    categoryName: "Loans for Women Entrepreneurs",
    baseRate: 10.00,
    unit: "% p.a.",
    partners: [
      { bankId: "sbi", rate: 10.00, specialFeature: "Stree Shakti & Stand-Up India subsidized credit with 0.50% rebate" },
      { bankId: "pnb", rate: 10.00, specialFeature: "PNB Mahila Udyam Nidhi with zero collateral & concessionary rate" },
      { bankId: "canara", rate: 10.00, specialFeature: "Canara Mahila Vikas scheme with zero processing fee concessions" },
      { bankId: "hdfc", rate: 10.25, specialFeature: "Preferential unsecured credit lines for women-led enterprises" },
      { bankId: "icici", rate: 10.50, specialFeature: "Fast-track business sanctions with dedicated women advisory desk" },
      { bankId: "lt-finance", rate: 10.75, specialFeature: "Tailored micro-enterprise & women business schemes" },
    ],
  },

  // 11. Urgent Cash Advance (/personal-loan/urgent-cash) — Starting Rate: 1.15% / month
  "urgent-cash-advance": {
    id: "urgent-cash-advance",
    categoryName: "Urgent Cash Advance",
    baseRate: 1.15,
    unit: "% / mo",
    partners: [
      { bankId: "idfc", rate: 1.15, unit: "% / mo", specialFeature: "Instant 2-hour digital disbursal with paperless Aadhaar e-KYC" },
      { bankId: "bajaj", rate: 1.20, unit: "% / mo", specialFeature: "Flexi cash advance with zero hidden administrative fees" },
      { bankId: "poonawalla", rate: 1.25, unit: "% / mo", specialFeature: "Zero pre-payment charges & fast IMPS bank crediting" },
      { bankId: "tata-capital", rate: 1.25, unit: "% / mo", specialFeature: "Instant emergency personal liquidity with flexible 3-24 mo tenures" },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════════
   CATEGORY NORMALIZER & RATE CALCULATOR UTILITIES
   ═══════════════════════════════════════════════════════════════════ */

export function normalizeCategorySlug(categoryOrSlug: string): string {
  if (!categoryOrSlug) return "home-loan";
  const s = categoryOrSlug.toLowerCase().trim();

  if (s.includes("urgent") || s.includes("cash")) return "urgent-cash-advance";
  if (s.includes("women") || s.includes("mahila")) return "loans-for-women";
  if (s.includes("machinery") || s.includes("equipment")) return "machinery-loan";
  if (
    s.includes("working-capital") ||
    s.includes("working capital") ||
    s.includes("msme-working-capital") ||
    s.includes("overdraft") ||
    s.includes("cash credit")
  ) {
    return "working-capital";
  }
  if (
    s.includes("doctor") ||
    s.includes("professional") ||
    s.includes("practitioner") ||
    s.includes("ca ") ||
    s.includes("chartered")
  ) {
    return "professional-loan";
  }
  if (s.includes("business") || s.includes("commercial") || s.includes("msme")) {
    return "business-loan";
  }
  if (
    s.includes("property") ||
    s.includes("lap") ||
    s.includes("against property") ||
    s.includes("mortgage")
  ) {
    return "loan-against-property";
  }
  if (s.includes("car") || s.includes("vehicle") || s.includes("auto")) {
    return "car-loan";
  }
  if (s.includes("education") || s.includes("student") || s.includes("study")) {
    return "education-loan";
  }
  if (s.includes("home") || s.includes("housing")) {
    return "home-loan";
  }
  if (s.includes("personal")) {
    return "personal-loan";
  }

  return "home-loan";
}

export function parseRateNumber(
  rateString?: string
): { rate: number; unit: "% p.a." | "% / mo" } | null {
  if (!rateString) return null;
  const match = rateString.match(/(\d+(?:\.\d+)?)/);
  if (!match) return null;
  const rate = parseFloat(match[1]);
  const isMonthly =
    rateString.toLowerCase().includes("/ mo") ||
    rateString.toLowerCase().includes("/ month") ||
    rateString.toLowerCase().includes("per month");
  return {
    rate,
    unit: isMonthly ? "% / mo" : "% p.a.",
  };
}

/**
 * Returns dynamic bank partners for a specific loan category, enforcing
 * the Strict Guard Rail: Math.max(bankRate, categoryBaseRate).
 * No bank card will EVER display an interest rate lower than the page's summary starting rate.
 */
export function getBankPartnersForCategory(
  categoryOrSlug?: string,
  summaryRateString?: string
): BankInfo[] {
  const slug = normalizeCategorySlug(categoryOrSlug || "");
  const matrix = CATEGORY_RATES_MATRIX[slug] || CATEGORY_RATES_MATRIX["home-loan"];

  const parsedSummary = summaryRateString ? parseRateNumber(summaryRateString) : null;
  const categoryBaseRate = parsedSummary
    ? Math.max(matrix.baseRate, parsedSummary.rate)
    : matrix.baseRate;
  const unit = matrix.unit || (parsedSummary ? parsedSummary.unit : "% p.a.");

  return matrix.partners.map((partnerCfg) => {
    const baseBank = BANK_PARTNERS_MAP[partnerCfg.bankId] || BANK_PARTNERS_DATA[0];
    
    // Strict Guard Rail: rate must never be lower than categoryBaseRate
    const effectiveRate = Math.max(partnerCfg.rate, categoryBaseRate);
    const partnerUnit = partnerCfg.unit || unit;
    const formattedRate = `Starting ${effectiveRate.toFixed(2)}${partnerUnit}`;

    return {
      ...baseBank,
      id: `${baseBank.id}-${slug}`,
      interestRate: formattedRate,
      maxAmount: partnerCfg.maxAmount || baseBank.maxAmount,
      processingFee: partnerCfg.processingFee || baseBank.processingFee,
      specialFeature: partnerCfg.specialFeature || baseBank.specialFeature,
    };
  });
}

export const BankBadge: React.FC<{ bankId: string; className?: string }> = ({
  bankId,
  className = "",
}) => {
  const bank =
    BANK_PARTNERS_MAP[bankId] ||
    BANK_PARTNERS_DATA.find((b) => b.id === bankId) ||
    BANK_PARTNERS_DATA[0];

  return (
    <div
      className={`inline-flex items-center gap-3 bg-white border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all ${className}`}
    >
      <div className="w-14 h-8 flex-shrink-0 bg-white rounded-lg p-1 border border-slate-200/80 flex items-center justify-center shadow-xs">
        {bank.svgIcon}
      </div>
      <div className="flex flex-col text-left min-w-0">
        <span className="text-xs font-bold text-slate-900 leading-tight truncate">
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
