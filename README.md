# Shreem Finserv - Official Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-App%20Check-orange?logo=firebase)](https://firebase.google.com/)

> **Your Financial Growth Partner** — A premium, full-featured lending advisory platform for Shreem Finserv built with Next.js 16, TypeScript, and Tailwind CSS v4.

---

## Live Platform Features

### 🏦 Co-Lending Partner Network
- **50+ Banks & NBFCs**: HDFC Bank, ICICI Bank, SBI, Axis Bank, Kotak Mahindra, IDFC FIRST, Tata Capital, Bajaj Finserv, Piramal Finance, L&T Finance, IndusInd Bank, Bank of Baroda, PNB, Poonawalla Fincorp, and more.
- Smooth infinite marquee with authentic vector brand logos.
- Interactive bank rate comparison table with All / Banks / NBFCs filter tabs.

### 💰 Loan Products (6 Core + Multi-Variant)
| Route | Product | Max Amount | Interest Rate |
|-------|---------|-----------|---------------|
| `/personal-loan/for-doctors` | Personal Loan for Doctors | ₹50 Lakhs | From 9.99% |
| `/business-loan/msme-working-capital` | MSME Working Capital | ₹2 Crore | From 10.50% |
| `/loan-against-property` | Loan Against Property (LAP) | ₹15 Crore | From 8.75% |
| `/machinery-loan` | Machinery & Equipment Loan | ₹5 Crore | From 10.00% |
| `/personal-loan/urgent-cash` | Urgent Cash Advance | ₹5 Lakhs | From 11.25% |
| `/business-loan/for-women` | Business Loan for Women | ₹1 Crore | From 9.75% |

### 🛠️ Interactive Financial Tools
- **Smart EMI Calculator** — Real-time sliders for Amount (₹1L–₹5Cr), Rate (8.5%–24%), Tenure (1–20 years) with Principal vs. Interest breakdown.
- **Free Credit Score Check** — Soft CIBIL inquiry with zero score impact and pre-approved offer matching.
- **Live Application Tracker** — Reference ID (`CC-XXXXXXXX`) real-time status lookup.
- **Partner / DSA Onboarding Portal** — Earn ₹1 Lakh+ monthly as a Shreem Partner.

### 📱 Mobile-First Design
- Floating bottom action bar (Call, WhatsApp, Track, Apply) for mobile.
- Responsive bank cards on mobile, full tables on desktop.
- Touch-optimized EMI calculator sliders.
- Tailwind responsive breakpoints throughout.

---

## Tech Stack

- **Framework**: Next.js 16.3 (App Router, Turbopack, Static Generation)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4 with custom `@theme` design tokens
- **Backend**: Firebase (App Check reCAPTCHA Enterprise, Cloud Functions `asia-south1`)
- **Security**: Firestore Rules, DPDP 2026 compliant, 256-bit encrypted

---

## Project Structure

```
shreem-finserv-web/
├── src/
│   ├── app/                    # App Router Pages (19 static routes)
│   │   ├── page.tsx            # Homepage
│   │   ├── calculator/         # Standalone EMI Calculator
│   │   ├── credit-score/       # Free Credit Score Tool
│   │   ├── partner/            # DSA Partner Onboarding
│   │   ├── track-application/  # Live Loan Tracker
│   │   ├── about/              # About Us
│   │   ├── contact/            # Contact + Callback Form
│   │   ├── personal-loan/
│   │   │   ├── for-doctors/
│   │   │   └── urgent-cash/
│   │   ├── business-loan/
│   │   │   ├── msme-working-capital/
│   │   │   └── for-women/
│   │   ├── loan-against-property/
│   │   ├── machinery-loan/
│   │   ├── privacy-policy/
│   │   ├── terms/
│   │   └── compliance/
│   ├── components/
│   │   ├── Navbar.tsx          # Dual-tier + mega-menu navigation
│   │   ├── Footer.tsx          # DPDP & RBI compliant footer
│   │   ├── MobileStickyBar.tsx # Mobile action bar
│   │   ├── LeadForm.tsx        # Firebase lead capture form
│   │   ├── EmiCalculator.tsx   # Interactive EMI calculator
│   │   ├── BankLogos.tsx       # 14 vector bank SVGs + data
│   │   ├── BankComparisonTable.tsx  # Filterable rate table
│   │   ├── PartnerMarquee.tsx  # Infinite bank logo marquee
│   │   ├── ProductPageTemplate.tsx  # Full product page layout
│   │   ├── CreditScoreWidget.tsx    # Free credit score
│   │   ├── PartnerSection.tsx  # DSA partner form
│   │   ├── AwardsShowcase.tsx  # Bank partner awards
│   │   ├── Testimonials.tsx    # Client success stories
│   │   ├── ApplicationTracker.tsx   # Loan status lookup
│   │   ├── ProductCard.tsx     # Product grid card
│   │   └── Logo.tsx            # Brand logo component
│   ├── config/
│   │   └── brand.ts            # Brand constants, products, compliance
│   └── lib/
│       └── firebase.ts         # App Check + Cloud Functions
├── firestore.rules             # Security rules
└── public/
    ├── logo-mark.png           # Brand logo
    └── logos/                  # Downloaded bank SVG assets
```

---

## Getting Started

```bash
npm install
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (19/19 static routes, 0 errors)
```

---

## Brand Identity

- **Brand Colors**: Navy Blue `#0B2E8D` (Trust) + Crimson `#BB0119` (Urgency)
- **Typography**: Plus Jakarta Sans (Display) + Inter (Body)
- **Address**: Office No. 537, Cloud 9 Tower, Vaishali, Ghaziabad (UP) 201010
- **Hotline**: +91 9355445828
- **Email**: Contact@shreemfinserv.com
- **Compliance**: DPDP Act 2026 | RBI Fair Practice Code | Zero Upfront Fee Guarantee

---

*Built with ❤️ for Shreem Finserv — Your Financial Growth Partner*
