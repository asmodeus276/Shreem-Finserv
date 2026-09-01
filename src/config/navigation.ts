export interface NavLoanItem {
  id: string;
  title: string;
  shortTitle: string;
  subText: string;
  slug: string;
  icon: string;
  tag?: string;
  badgeColor?: string;
  highlights?: string;
}

// Primary Priority Focus Loans (Left Column in Mega-Menu)
export const PRIMARY_LOANS: NavLoanItem[] = [
  {
    id: "professional-loan",
    title: "Professional Loan",
    shortTitle: "Professional",
    subText: "For Doctors, CAs & Certified Practitioners",
    slug: "/personal-loan/for-doctors",
    icon: "medical_services",
    tag: "From 9.9%",
    badgeColor: "text-[#0B2E8D] bg-blue-50 border-blue-200",
    highlights: "₹50K – ₹1 Cr | 24 Hr SLA",
  },
  {
    id: "business-loan",
    title: "Business Loan",
    shortTitle: "Business",
    subText: "MSME & Enterprise Working Capital",
    slug: "/business-loan/msme-working-capital",
    icon: "storefront",
    tag: "From 10.5%",
    badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    highlights: "₹1L – ₹2 Cr | Collateral-Free",
  },
  {
    id: "home-loan",
    title: "Home Loan",
    shortTitle: "Home Loan",
    subText: "Low Interest Rates & Doorstep Mortgage",
    slug: "/home-loan",
    icon: "home",
    tag: "From 8.5%",
    badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
    highlights: "₹10L – ₹5 Cr | Up to 30 Yrs",
  },
  {
    id: "loan-against-property",
    title: "Loan Against Property",
    shortTitle: "LAP",
    subText: "Commercial & Residential Equity Line",
    slug: "/loan-against-property",
    icon: "real_estate_agent",
    tag: "From 9%",
    badgeColor: "text-amber-700 bg-amber-50 border-amber-200",
    highlights: "₹25L – ₹10 Cr | Up to 75% LTV",
  },
];

// Secondary Loan Products (Right Column in Mega-Menu)
export const SECONDARY_LOANS: NavLoanItem[] = [
  {
    id: "machinery-loan",
    title: "Machinery & Equipment Loan",
    shortTitle: "Machinery",
    subText: "Plant & Industrial Equipment Financing",
    slug: "/machinery-loan",
    icon: "precision_manufacturing",
    tag: "From 10%",
    badgeColor: "text-indigo-700 bg-indigo-50 border-indigo-200",
    highlights: "Up to ₹5 Cr | 90% Funded",
  },
  {
    id: "urgent-cash-advance",
    title: "Urgent Cash Advance",
    shortTitle: "Urgent Cash",
    subText: "2-Hour Emergency Personal Liquidity",
    slug: "/personal-loan/urgent-cash",
    icon: "bolt",
    tag: "2-Hr Fast",
    badgeColor: "text-red-700 bg-red-50 border-red-200",
    highlights: "₹50K – ₹25L | Instant e-KYC",
  },
  {
    id: "loans-for-women",
    title: "Loans for Women Entrepreneurs",
    shortTitle: "Women Founders",
    subText: "Subsidized Credit Lines for Founders",
    slug: "/business-loan/for-women",
    icon: "diversity_3",
    tag: "0.5% Rebate",
    badgeColor: "text-purple-700 bg-purple-50 border-purple-200",
    highlights: "₹1L – ₹75L | Subsidized",
  },
  {
    id: "working-capital",
    title: "Working Capital & Overdraft",
    shortTitle: "Working Capital",
    subText: "Revolving Credit Lines for Cash Flow",
    slug: "/business-loan/msme-working-capital",
    icon: "account_balance_wallet",
    tag: "Revolving",
    badgeColor: "text-cyan-700 bg-cyan-50 border-cyan-200",
    highlights: "Pay for Utilized Days",
  },
];

// Combined Loan List in exact 1-8 sequence
export const ALL_NAV_LOANS: NavLoanItem[] = [
  ...PRIMARY_LOANS,
  ...SECONDARY_LOANS,
];

// Main Navigation Items Configuration
export const MAIN_NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Loans", href: "#", hasDropdown: true },
  { label: "Calculator", href: "/calculator" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
