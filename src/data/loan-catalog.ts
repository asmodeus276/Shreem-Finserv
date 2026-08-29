export interface LoanProduct {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  url: string;
  keySpecifications: {
    loanAmount: string;
    interestRate: string;
    tenure: string;
    eligibilitySummary: string;
    collateral: string;
    processingTime: string;
  };
  featuresAndBenefits: Array<{
    title: string;
    description: string;
  }>;
  eligibilityCriteria: string[];
  documentsRequired: string[];
  applicationProcess: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface PartnerLender {
  name: string;
  type: string;
  logo: string;
}

export const CATEYE_LOAN_PRODUCTS: LoanProduct[] = [
  {
    id: "business-loan",
    name: "Business Loan",
    category: "Commercial / MSME",
    tagline: "Fuel Your Business Growth",
    description: "A Business Loan is a financial solution designed to help businesses meet their operational and growth-related requirements. Whether you need funds for expansion, working capital, inventory purchase, equipment financing, or unexpected business expenses, a business loan provides timely access to capital without diluting business ownership.",
    url: "https://cateye.in/services/business-loan",
    keySpecifications: {
      loanAmount: "₹1 Lakh up to ₹2 Crore (Unsecured) / Higher with Collateral",
      interestRate: "Starting from 10.5% p.a.",
      tenure: "12 to 60 Months (Up to 5 Years)",
      eligibilitySummary: "Min. 1-2 years business vintage, profitable operations",
      collateral: "Zero collateral required for unsecured business loans",
      processingTime: "24 to 48 Hours Quick Approval"
    },
    featuresAndBenefits: [
      {
        title: "Collateral-Free Funding",
        description: "Access unsecured funding without pledging any property or asset as security."
      },
      {
        title: "Flexible Repayment Tenures",
        description: "Choose structured tenures from 12 to 60 months tailored to your business cash flow."
      },
      {
        title: "Quick Disbursal",
        description: "Fast-track documentation and evaluation to get funds disbursed within 24 to 48 hours."
      },
      {
        title: "Multipurpose End-Use",
        description: "Use funds for working capital, raw materials, inventory, expansion, hiring, or marketing."
      },
      {
        title: "Competitive Interest Rates",
        description: "Benefit from customized interest rates starting at 10.5% p.a. based on your credit profile."
      },
      {
        title: "Minimal Paperwork",
        description: "Streamlined digital process requiring minimal KYC, banking, and financial documents."
      }
    ],
    eligibilityCriteria: [
      "Age: Business owner/applicant must be between 21 and 65 years.",
      "Business Vintage: Minimum 1 to 2 years of active business operations.",
      "Annual Turnover: Minimum annual business turnover as required by partnering lenders (typically ₹20L+).",
      "Credit Score: Minimum CIBIL score of 650+ preferred for fast-track approvals.",
      "Business Structure: Proprietorship, Partnership, LLP, Private Limited, or Public Limited entity.",
      "Banking Track Record: Minimum 6-12 months of clean bank statements with healthy transaction flow."
    ],
    documentsRequired: [
      "KYC: PAN Card & Aadhaar Card of Applicant/Promoters/Partners/Directors.",
      "Proof of Address: Passport, Voter ID, Utility Bill, or Rental Agreement.",
      "Business Registration: GST Registration Certificate, Udyam / MSME Certificate, Shop & Establishment Act license, Certificate of Incorporation, MOA & AOA / Partnership Deed.",
      "Financial Documents: Last 2-3 years Income Tax Returns (ITR) with CA Computation of Income, Balance Sheet, and Profit & Loss statement.",
      "Banking Records: Last 12 months updated bank statements for all active business accounts.",
      "Existing Facility Details: Sanction letters of existing running loans/overdraft limits (if any)."
    ],
    applicationProcess: [
      { step: "01", title: "Submit Requirement", desc: "Fill out the online application with basic personal and business details." },
      { step: "02", title: "Document Verification", desc: "Upload or share business registration, ITRs, and bank statements." },
      { step: "03", title: "Lender Matchmaking", desc: "We evaluate your financial profile and match with 50+ leading banks/NBFCs for best rates." },
      { step: "04", title: "Credit Approval", desc: "Lender sanctions loan terms, amount, interest rate, and tenure." },
      { step: "05", title: "Fund Disbursal", desc: "Direct disbursal to your business bank account within 24-48 hours." }
    ],
    faqs: [
      {
        question: "What is a Business Loan?",
        answer: "A Business Loan is an unsecured or secured credit facility offered to companies, MSMEs, and self-employed individuals to support business growth, inventory purchases, working capital, and operational requirements."
      },
      {
        question: "Can I get a business loan without collateral?",
        answer: "Yes, unsecured business loans do not require any collateral or asset pledging, up to ₹2 Crore depending on business turnover and credit score."
      },
      {
        question: "What is the minimum credit score required for a business loan?",
        answer: "A CIBIL score of 650 or higher is generally required, though higher scores (750+) ensure lower interest rates and faster sanctions."
      },
      {
        question: "How long does the loan approval and disbursal take?",
        answer: "With complete documentation, loan sanctions typically take 24 to 48 hours, followed by prompt disbursal."
      }
    ]
  },
  {
    id: "personal-loan",
    name: "Personal Loan",
    category: "Retail / Individual",
    tagline: "Instant Funds for Personal Ambitions & Emergencies",
    description: "A Personal Loan is an unsecured loan that helps individuals meet personal financial needs without providing any collateral. Whether you need funds for medical emergencies, home renovation, travel, education, debt consolidation, or wedding expenses, a personal loan offers quick financial support with minimal documentation.",
    url: "https://cateye.in/services/personal-loan",
    keySpecifications: {
      loanAmount: "₹50,000 up to ₹1 Crore",
      interestRate: "Starting from 9.9% p.a.",
      tenure: "12 to 72 Months (Up to 6 Years)",
      eligibilitySummary: "Salaried (Min ₹20k/mo) & Self-Employed Professionals",
      collateral: "100% Unsecured / Zero Collateral",
      processingTime: "Instant In-Principle Sanction, Disbursal in 2-24 Hours"
    },
    featuresAndBenefits: [
      {
        title: "No Collateral Required",
        description: "Zero security or guarantor needed to avail the loan."
      },
      {
        title: "Instant In-Principle Approval",
        description: "Quick online assessment and rapid approval process."
      },
      {
        title: "Flexible Repayment Tenures",
        description: "Choose customizable EMIs and tenures ranging from 1 to 6 years."
      },
      {
        title: "Competitive Interest Rates",
        description: "Attractive interest rates starting from 9.9% p.a. from top banks & NBFCs."
      },
      {
        title: "Zero End-Use Restriction",
        description: "Use the funds freely for medical, weddings, travel, education, or home renovation."
      },
      {
        title: "Transparent & Digital",
        description: "No hidden charges with completely transparent terms and conditions."
      }
    ],
    eligibilityCriteria: [
      "Age: 21 to 60 years (salaried) / up to 65 years (self-employed).",
      "Employment: Salaried employees (MNC, Corporate, Public/Private sector, Govt) & Self-employed individuals.",
      "Monthly Income: Minimum net salary of ₹20,000 - ₹25,000 per month (varies by city).",
      "Work Experience: Minimum 1 year total experience with at least 6 months at current employer.",
      "Credit Score: Minimum CIBIL score of 650+ (750+ gets premium rates).",
      "Residency: Indian citizen."
    ],
    documentsRequired: [
      "KYC Documents: PAN Card, Aadhaar Card, Passport / Voter ID.",
      "Income Proof (Salaried): Salary slips of last 3 months, Form 16 / ITR.",
      "Income Proof (Self-Employed): Last 2 years ITR with CA computation.",
      "Bank Statements: Last 6 months salary / operative bank account statement.",
      "Photographs: 2 passport size photographs."
    ],
    applicationProcess: [
      { step: "01", title: "Apply Online", desc: "Share basic personal, employment, and income details." },
      { step: "02", title: "Submit Documents", desc: "Upload KYC, salary slips, and bank statements digitally." },
      { step: "03", title: "Compare & Choose", desc: "Compare customized offers from 50+ bank partners." },
      { step: "04", title: "Instant Sanction", desc: "Fast approval by the partner bank/NBFC." },
      { step: "05", title: "Disbursal", desc: "Direct credit of funds into your bank account." }
    ],
    faqs: [
      {
        question: "What is a Personal Loan?",
        answer: "A personal loan is an unsecured loan offered by financial institutions based on your income, credit history, and repayment capacity, without requiring any collateral."
      },
      {
        question: "Can I prepay or foreclose my personal loan?",
        answer: "Yes, most lenders permit prepayment and foreclosure after a minimum lock-in period (typically 6-12 months) as per bank terms."
      },
      {
        question: "How is my loan eligibility calculated?",
        answer: "Eligibility is determined by your net monthly income, credit score, current EMI obligations, age, and employment stability."
      }
    ]
  },
  {
    id: "loan-against-property",
    name: "Loan Against Property (LAP)",
    category: "Mortgage / Secured Loan",
    tagline: "Unlock the Hidden Value of Your Real Estate Asset",
    description: "A Loan Against Property (LAP) allows you to unlock the value of your residential, commercial, or industrial property and obtain funds for personal or business requirements. Unlike unsecured loans, LAP offers larger loan amounts, lower interest rates, and longer repayment tenures, making it an ideal choice for high-value funding needs.",
    url: "https://cateye.in/services/loan-against-property",
    keySpecifications: {
      loanAmount: "₹25 Lakh up to ₹10 Crore+ (Up to 70-75% of Property Market Value)",
      interestRate: "Starting from 9.0% p.a.",
      tenure: "Up to 15 to 20 Years",
      eligibilitySummary: "Salaried, Self-Employed, MSMEs, Property Owners",
      collateral: "Residential, Commercial, Industrial, or Plot Property",
      processingTime: "3 to 7 Working Days (Including Legal & Technical Valuation)"
    },
    featuresAndBenefits: [
      {
        title: "High Loan Quantum",
        description: "Get substantial funds up to ₹10 Crore+ based on property valuation."
      },
      {
        title: "Lower Interest Rates",
        description: "Significantly cheaper interest rates starting at 9.0% p.a. compared to unsecured loans."
      },
      {
        title: "Longer Repayment Tenure",
        description: "Extended tenure up to 15-20 years for lower, manageable monthly EMIs."
      },
      {
        title: "Flexible Property Types",
        description: "Eligible against residential homes, commercial shops/offices, industrial units, and select land."
      },
      {
        title: "Retain Property Ownership",
        description: "Continue occupying and utilizing the mortgaged property while paying EMIs."
      },
      {
        title: "Dual Purpose (Personal & Business)",
        description: "Use proceeds for business expansion, debt consolidation, education, or weddings."
      }
    ],
    eligibilityCriteria: [
      "Age: 21 to 65 years at loan maturity.",
      "Borrower Type: Salaried employees, self-employed businessmen, professionals, partnership firms, and private limited companies.",
      "Income: Stable and verifiable income stream sufficient to service the proposed EMI.",
      "Property Ownership: Freehold, clear title property with no legal dispute.",
      "Credit Score: Minimum CIBIL score of 650+.",
      "LTV Ratio: Loan to Value ratio typically between 50% to 75% of the property's market value."
    ],
    documentsRequired: [
      "KYC Documents: PAN, Aadhaar, Passport / Voter ID of all co-owners and applicants.",
      "Income Proof: Salaried (last 3 months salary slips, Form 16, 6 months bank statement); Self-employed (last 3 years ITR with computation, audited balance sheets, 12 months bank statements).",
      "Property Documents: Original title deed / sale deed, complete chain of previous title deeds (last 30 years), approved building plan and layout, latest property tax paid receipt, encumbrance certificate (EC), NOC from builder or housing society.",
      "Valuation & Legal Reports: Initiated and coordinated by lender's approved technical valuer and legal advocate."
    ],
    applicationProcess: [
      { step: "01", title: "Application & Consultation", desc: "Share property details and loan requirements." },
      { step: "02", title: "Document Submission", desc: "Submit KYC, income papers, and property title documents." },
      { step: "03", title: "Technical & Legal Appraisal", desc: "Lender performs physical property inspection and title verification." },
      { step: "04", title: "Sanction & Terms", desc: "Issuance of formal sanction letter with customized LTV and interest rates." },
      { step: "05", title: "Disbursal & Mortgage", desc: "Execution of mortgage agreement and fund disbursal." }
    ],
    faqs: [
      {
        question: "What is Loan Against Property (LAP)?",
        answer: "LAP is a secured loan where you mortgage your existing residential, commercial, or industrial property to obtain funds at much lower interest rates than unsecured loans."
      },
      {
        question: "Can I get LAP on commercial property?",
        answer: "Yes, banks and NBFCs finance loans against residential houses/apartments, commercial offices, retail shops, and industrial properties."
      },
      {
        question: "What is the maximum LTV (Loan to Value) offered?",
        answer: "Lenders generally offer 50% to 75% of the market value of the property depending on property type, location, and applicant credit profile."
      }
    ]
  },
  {
    id: "home-loan",
    name: "Home Loan",
    category: "Housing / Mortgage",
    tagline: "Turn Your Dream Home Into Reality",
    description: "A Home Loan helps individuals purchase, construct, renovate, or extend a residential property. With long repayment tenures, attractive interest rates, and tax benefits under the Income Tax Act, a home loan is the most practical and accessible way to finance your dream house or apartment.",
    url: "https://cateye.in/services/home-loan",
    keySpecifications: {
      loanAmount: "₹10 Lakh up to ₹5 Crore+ (Up to 80-90% of Property Cost)",
      interestRate: "Starting from 8.5% p.a.",
      tenure: "Up to 30 Years",
      eligibilitySummary: "Salaried and Self-Employed Indian Residents & NRIs",
      collateral: "The Residential Property being purchased/constructed",
      processingTime: "3 to 5 Working Days"
    },
    featuresAndBenefits: [
      {
        title: "Lowest Interest Rates",
        description: "Benefit from industry-low interest rates starting from 8.5% p.a."
      },
      {
        title: "Extended Repayment Tenure",
        description: "Repay comfortably with tenures up to 30 years."
      },
      {
        title: "High Loan Eligibility (LTV)",
        description: "Get funding up to 80-90% of the property's registered agreement value."
      },
      {
        title: "Tax Benefits",
        description: "Claim deductions on Principal under Sec 80C (up to ₹1.5L) and Interest under Sec 24(b) (up to ₹2L)."
      },
      {
        title: "Balance Transfer & Top-Up",
        description: "Transfer existing high-interest home loans and secure additional top-up funds easily."
      },
      {
        title: "Diverse Housing Solutions",
        description: "Covers new home purchase, resale flat, plot purchase + construction, home extension, and renovation."
      }
    ],
    eligibilityCriteria: [
      "Age: 21 to 65 years at loan maturity.",
      "Employment Type: Salaried professionals (IT, MNC, PSU, Govt, Corporate) & Self-employed (Doctors, CA, Traders, Business Owners).",
      "Income: Minimum regular monthly income of ₹25,000+.",
      "Credit Profile: CIBIL score of 700+ is preferred for lowest interest rate slabs.",
      "Co-applicant: Adding a co-applicant (spouse, parents, children) boosts loan eligibility."
    ],
    documentsRequired: [
      "KYC Proof: PAN Card, Aadhaar Card, Passport / Driving License.",
      "Income Proof (Salaried): 3 months payslips, 6 months bank statement, Form 16 (last 2 years).",
      "Income Proof (Self-Employed): 3 years ITR with Computation, Balance Sheet, P&L, 12 months bank statements.",
      "Property Documents: Agreement to Sale / Allotment Letter, Builder NOC, Approved Floor Plan, Title Search Report, Property Chain Documents."
    ],
    applicationProcess: [
      { step: "01", title: "Submit Application", desc: "Provide basic personal and property details." },
      { step: "02", title: "Eligibility Assessment", desc: "We evaluate your income and credit profile across 50+ lenders." },
      { step: "03", title: "Legal & Technical Appraisal", desc: "Lender performs property valuation and legal search." },
      { step: "04", title: "Sanction Letter", desc: "Receive conditional sanction with loan amount, rate, and tenure." },
      { step: "05", title: "Disbursal", desc: "Disbursement made directly to builder/seller in stages or lumpsum." }
    ],
    faqs: [
      {
        question: "What is the maximum tenure for a home loan?",
        answer: "Most banks and housing finance companies (HFCs) offer tenures up to 30 years, subject to your retirement age."
      },
      {
        question: "What tax benefits can I claim on a home loan?",
        answer: "You can claim up to ₹1.5 Lakh under Section 80C for principal repayment, and up to ₹2 Lakh under Section 24(b) for interest paid."
      },
      {
        question: "Can I transfer my existing home loan to another bank?",
        answer: "Yes, you can opt for a Home Loan Balance Transfer to reduce your interest rate and lower your monthly EMI."
      }
    ]
  },
  {
    id: "vehicle-loan",
    name: "Vehicle Loan",
    category: "Auto / Asset Financing",
    tagline: "Drive Home Your Dream Car or Commercial Fleet",
    description: "A Vehicle Loan helps individuals and businesses finance the purchase of new or used vehicles without making a large upfront payment. Whether you are buying a two-wheeler, a family car, an electric vehicle (EV), or commercial fleet vehicles for business logistics, vehicle loans offer flexible tenures and quick approvals.",
    url: "https://cateye.in/services/vehicle-loan",
    keySpecifications: {
      loanAmount: "₹50,000 up to ₹1 Crore (Up to 100% On-Road Financing)",
      interestRate: "Starting from 9.9% p.a.",
      tenure: "12 to 84 Months (Up to 7 Years)",
      eligibilitySummary: "Salaried, Self-Employed, Fleet Operators & Corporates",
      collateral: "Hypothecation of the Purchased Vehicle",
      processingTime: "Same Day / Within 24-48 Hours"
    },
    featuresAndBenefits: [
      {
        title: "Up to 100% On-Road Financing",
        description: "Finance entire vehicle cost including ex-showroom price, insurance, and road tax."
      },
      {
        title: "New & Pre-Owned Vehicle Loans",
        description: "Available for brand new cars/trucks as well as certified used vehicles."
      },
      {
        title: "Quick Approval & Disbursal",
        description: "Swift paperless sanctions and direct dealer payout."
      },
      {
        title: "Flexible Repayment Tenures",
        description: "Repayment tenures from 1 to 7 years to fit your monthly budget."
      },
      {
        title: "Competitive Interest Rates",
        description: "Special discounted interest rates and low processing fees."
      },
      {
        title: "Commercial & Fleet Finance",
        description: "Dedicated schemes for commercial transport operators, taxis, and heavy commercial vehicles."
      }
    ],
    eligibilityCriteria: [
      "Age: 21 to 65 years.",
      "Borrower Profile: Salaried individuals, business owners, self-employed professionals, transport operators, and corporate entities.",
      "Income: Stable income source showing capacity to service the EMI.",
      "Credit Score: Minimum CIBIL score of 650+.",
      "Residency: Indian citizen with valid local address proof."
    ],
    documentsRequired: [
      "KYC: PAN Card, Aadhaar Card, Driving License / Passport.",
      "Income Proof: 3 months payslips or 2 years ITR with CA computation.",
      "Bank Statement: 6 months bank statement showing regular earnings.",
      "Vehicle Papers: Proforma invoice / quotation from authorized vehicle dealer, or RC copy and valuation report for used vehicle."
    ],
    applicationProcess: [
      { step: "01", title: "Select Vehicle & Apply", desc: "Choose your vehicle and submit dealer quotation." },
      { step: "02", title: "Submit KYC & Income", desc: "Provide basic KYC and banking documents." },
      { step: "03", title: "Instant Sanction", desc: "Lender sanctions loan and issues delivery order (DO)." },
      { step: "04", title: "Vehicle Delivery", desc: "Dealer receives payment and delivers vehicle with hypothecation." }
    ],
    faqs: [
      {
        question: "Can I get 100% financing on my car?",
        answer: "Yes, many banking partners offer up to 100% on-road financing for new vehicles based on your credit score and income profile."
      },
      {
        question: "Are used vehicles eligible for financing?",
        answer: "Yes, certified used cars and pre-owned commercial vehicles are eligible for loans up to 80-85% of their evaluated market value."
      }
    ]
  },
  {
    id: "supply-chain-finance",
    name: "Supply Chain Finance",
    category: "Trade & Working Capital",
    tagline: "Optimize Working Capital Across Your Supply Chain",
    description: "Supply Chain Finance is a specialized funding solution that helps businesses improve cash flow by providing timely financing against invoices, purchase orders, or receivables. It enables suppliers, distributors, dealers, and manufacturers to maintain smooth business operations without waiting for long payment cycles.",
    url: "https://cateye.in/services/supply-chain-finance",
    keySpecifications: {
      loanAmount: "₹10 Lakh up to ₹5 Crore+ (Up to ₹1 Cr for quick facility)",
      interestRate: "Competitive Market Rates starting from 10% p.a.",
      tenure: "Up to 12 Months (Revolving Credit / Invoice Discounting Cycle)",
      eligibilitySummary: "Suppliers, Dealers, Distributors, Anchor Corporate Vendors",
      collateral: "Invoices / Receivables / Purchase Orders",
      processingTime: "Fast-Track Credit Approval & Line Activation"
    },
    featuresAndBenefits: [
      {
        title: "Improved Working Capital",
        description: "Free up tied-up capital and maintain liquidity without operational disruptions."
      },
      {
        title: "Faster Invoice Realization",
        description: "Convert verified invoices into instant cash within 24-48 hours instead of waiting 60-90 days."
      },
      {
        title: "Better Cash Flow Predictability",
        description: "Bridge the gap between raw material procurement, manufacturing, and customer payments."
      },
      {
        title: "Reduced Payment Cycle Pressure",
        description: "Strengthen vendor-buyer relationships with timely payments and early payment cash discounts."
      },
      {
        title: "Revolving Credit Line",
        description: "Draw down funds as and when invoices are raised, paying interest only on the utilized amount."
      },
      {
        title: "Digital Platform Integration",
        description: "Seamless upload and verification of e-invoices and GST data for rapid discounting."
      }
    ],
    eligibilityCriteria: [
      "Entity Type: Registered Business Entity (Proprietorship, Partnership, LLP, Pvt Ltd).",
      "GST Status: Active GST registration with consistent, timely filing history.",
      "Operational History: Minimum 1-2 years in business operations.",
      "Corporate Anchors / Supply Relationships: Documented ongoing trading relationships with reputed corporate buyers or established dealer networks.",
      "Banking Track Record: Clean banking transaction history without major defaults or frequent cheque bounces."
    ],
    documentsRequired: [
      "Entity KYC & Business Proof: GST Certificate, Udyam / MSME Certificate, PAN of business and promoters.",
      "Financial Records: 2 years Audited Financials, Profit & Loss, Balance Sheet, ITR filings.",
      "Banking: 12 months current account bank statements.",
      "Supply Chain Proof: Accepted Invoices, Purchase Orders (PO), Ledger Statements of Anchor Corporate/Buyer, E-Way bills."
    ],
    applicationProcess: [
      { step: "01", title: "Business Profile Submission", desc: "Share supply chain structure, buyers, and funding requirements." },
      { step: "02", title: "Document Upload", desc: "Provide invoices, POs, GST returns, and banking statements." },
      { step: "03", title: "Credit Assessment", desc: "Underwriting evaluation of both buyer creditworthiness and supplier capacity." },
      { step: "04", title: "Facility Sanction", desc: "Credit limit sanctioned and tripartite agreement established." },
      { step: "05", title: "Direct Disbursal", desc: "Immediate invoice discounting into your account upon invoice presentation." }
    ],
    faqs: [
      {
        question: "What is Supply Chain Finance?",
        answer: "Supply Chain Finance is a financing mechanism where suppliers discount their approved invoices to receive instant cash, or buyers extend payment terms through financial intermediaries."
      },
      {
        question: "How is it different from a traditional term loan?",
        answer: "Unlike term loans, supply chain finance is a revolving credit facility linked directly to real commercial transactions and trade invoices, allowing repetitive drawdowns."
      },
      {
        question: "Who can apply for Supply Chain Finance?",
        answer: "Suppliers, vendors, distributors, and dealers doing regular business with medium and large corporate entities with valid GST invoices."
      }
    ]
  },
  {
    id: "insurance",
    name: "Insurance Services",
    category: "Financial Protection / Advisory",
    tagline: "Comprehensive Risk Protection for Life & Business",
    description: "Insurance is a financial protection plan that safeguards individuals, families, and businesses against unforeseen risks, liabilities, and financial losses. Whether it is Life, Health, Motor, Property, or Business liability insurance, the right coverage provides peace of mind and total financial security.",
    url: "https://cateye.in/services/insurance",
    keySpecifications: {
      loanAmount: "Comprehensive Coverage as per Need",
      interestRate: "Flexible & Affordable Premium Plans",
      tenure: "Annual Renewable / Multi-Year Cover",
      eligibilitySummary: "Individuals, Families, Self-Employed, Corporates & MSMEs",
      collateral: "N/A - Pure Risk Coverage",
      processingTime: "Instant Digital Issuance / Hassle-Free Claim Support"
    },
    featuresAndBenefits: [
      {
        title: "Life & Term Insurance",
        description: "Secure your family's future and financial stability with comprehensive life term plans."
      },
      {
        title: "Health & Critical Illness",
        description: "Cover hospitalisation, medical treatments, surgeries, and critical illnesses with cashless hospital networks."
      },
      {
        title: "Motor Insurance",
        description: "Comprehensive and third-party motor insurance for private cars, two-wheelers, and commercial fleets."
      },
      {
        title: "Property & Fire Insurance",
        description: "Safeguard homes, offices, factories, and warehouses against fire, flood, natural disasters, and burglary."
      },
      {
        title: "Business & Group Health",
        description: "Group health insurance for employees, Keyman insurance, Workmen's compensation, and Directors & Officers liability."
      },
      {
        title: "Dedicated Claim Support",
        description: "Expert guidance from paperwork to final payout during insurance claims."
      }
    ],
    eligibilityCriteria: [
      "Age: Entry age from 18 to 65 years (varies per policy).",
      "Residency: Indian citizen or NRI.",
      "Health / Medical: Medical declaration or health check-up for high sum assured life/health policies.",
      "Asset Ownership: Valid registration documents for motor and property insurance.",
      "Business Entity: Active registration for corporate and group policies."
    ],
    documentsRequired: [
      "KYC Documents: PAN Card, Aadhaar Card, Passport.",
      "Income Proof: Salary slips, ITR for high-value term life plans.",
      "Medical Reports: Medical checkup reports (if required by insurer).",
      "Vehicle / Property Documents: Vehicle RC & previous insurance policy, or property ownership documents."
    ],
    applicationProcess: [
      { step: "01", title: "Requirement Analysis", desc: "Understand your risk coverage and budget requirements." },
      { step: "02", title: "Policy Comparison", desc: "Compare top policies across leading insurance companies." },
      { step: "03", title: "Document Submission", desc: "Submit KYC, medical declarations, or asset details." },
      { step: "04", title: "Policy Issuance", desc: "Immediate digital policy issuance with instant cover." }
    ],
    faqs: [
      {
        question: "Which types of insurance are available?",
        answer: "We facilitate Term Life, Comprehensive Health, Motor (Car & Two Wheeler), Property & Fire, and Corporate Group Insurance."
      },
      {
        question: "How does claim support work?",
        answer: "Our advisory team guides you step-by-step through claim filing, hospital coordination for cashless claims, and documentation with the insurer."
      }
    ]
  }
];

export const PARTNER_LENDERS: PartnerLender[] = [
  { name: "HDFC Bank", type: "Private Bank", logo: "/images/lending-partner-logos/HDFC_Bank_Logo.svg.png" },
  { name: "ICICI Bank", type: "Private Bank", logo: "/images/lending-partner-logos/ICICI_Bank_Logo.svg.png" },
  { name: "Axis Bank", type: "Private Bank", logo: "/images/lending-partner-logos/Axis_Bank_logo.svg.png" },
  { name: "Kotak Mahindra Bank", type: "Private Bank", logo: "/images/lending-partner-logos/Kotak_Mahindra_Bank_logo.png" },
  { name: "IndusInd Bank", type: "Private Bank", logo: "/images/lending-partner-logos/IndusInd_Bank_SVG_Logo.svg.png" },
  { name: "IDFC First Bank", type: "Private Bank", logo: "/images/lending-partner-logos/Logo_of_IDFC_First_Bank.svg.png" },
  { name: "Karur Vysya Bank", type: "Commercial Bank", logo: "/images/lending-partner-logos/Karur-Vysya-Bank-Logo-Vector.svg-.png" },
  { name: "Bajaj Finance", type: "NBFC", logo: "/images/lending-partner-logos/bajaj.png" },
  { name: "Tata Capital", type: "NBFC", logo: "/images/lending-partner-logos/tata-capital-logo.png" },
  { name: "L&T Finance", type: "NBFC", logo: "/images/lending-partner-logos/l & t.jpeg" },
  { name: "Piramal Finance", type: "NBFC / Housing", logo: "/images/lending-partner-logos/piramal-vector-logo.png" },
  { name: "Shriram Finance", type: "NBFC", logo: "/images/lending-partner-logos/shriram-finance-logo.png" },
  { name: "SMFG India Credit (Fullerton)", type: "NBFC", logo: "/images/lending-partner-logos/smfg.png" },
  { name: "Cholamandalam Finance", type: "NBFC", logo: "/images/lending-partner-logos/chola.jpg" },
  { name: "Poonawalla Fincorp", type: "NBFC", logo: "/images/lending-partner-logos/POONAWALLA.png" },
  { name: "Hero FinCorp", type: "NBFC", logo: "/images/lending-partner-logos/hero-fincrop.png" },
  { name: "DMI Finance", type: "Digital NBFC", logo: "/images/lending-partner-logos/DMI_LOGO.avif" },
  { name: "InCred Finance", type: "NBFC", logo: "/images/lending-partner-logos/incred.png" },
  { name: "KreditBee", type: "Fintech NBFC", logo: "/images/lending-partner-logos/kreditbee_05112019.png" },
  { name: "FlexiLoans", type: "MSME Fintech NBFC", logo: "/images/lending-partner-logos/Flexiloans.jpg" },
  { name: "Indifi Capital", type: "MSME NBFC", logo: "/images/lending-partner-logos/Indifi_capital_private_limited_logo.png" },
  { name: "Faircent", type: "P2P / NBFC", logo: "/images/lending-partner-logos/faircent-logo.png" },
  { name: "Godrej Finance", type: "NBFC", logo: "/images/lending-partner-logos/goderaj.png" },
  { name: "MAS Financial Services", type: "NBFC", logo: "/images/lending-partner-logos/mas-logo.png" },
  { name: "MCL Finance", type: "NBFC", logo: "/images/lending-partner-logos/mcl-logo.jpg" },
  { name: "Aditya Birla Finance (ABC)", type: "NBFC", logo: "/images/lending-partner-logos/abc_header_logo.png" },
  { name: "Udyog Plus (Aditya Birla)", type: "MSME Platform", logo: "/images/lending-partner-logos/udyog Plus_HomePage.png" }
];
