# Shreem Finserv - Official Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-App%20Check-orange?logo=firebase)](https://firebase.google.com/)
[![DPDP](https://img.shields.io/badge/DPDP%202026-Compliant-10B981)](https://shreemfinserv.com/privacy-policy)

> **Your Financial Growth Partner** — A premium, full-featured lending advisory platform for Shreem Finserv built with Next.js 16, TypeScript, Tailwind CSS v4, and Firebase.

---

## Live Platform Features

### 🏦 Co-Lending Partner Network
- **50+ Banks & NBFCs**: HDFC Bank, ICICI Bank, SBI, Axis Bank, Kotak Mahindra, IDFC FIRST, Tata Capital, Bajaj Finserv, Piramal Finance, L&T Finance, IndusInd Bank, Bank of Baroda, PNB, Poonawalla Fincorp, and more.
- Smooth infinite marquee with authentic, properly scaled brand logos.
- Interactive bank rate comparison table with All / Banks / NBFCs filter tabs and mobile card view.

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
- **Live Application Tracker** — Reference ID (`SF-YYYY-XXXXXX`) real-time status lookup.
- **Partner / DSA Onboarding Portal** — Earn ₹1 Lakh+ monthly as a Shreem Partner.

### 📚 Knowledge Hub & Financial Guides (SEO Engine)
- `/blog` — Hub with keyword search, category filters, and featured guides.
- In-depth articles covering Doctor loans, MSME 48-hour sanctions, LAP vs. Personal loan math, CIBIL 750+ roadmap, women subsidies, and equipment financing.

### 🌟 Enterprise Trust & High-Conversion Features
- **Floating WhatsApp Widget** — One-tap chat with senior credit managers & radar pulse animation.
- **Animated Number Counters** — Smooth ease-out counter animations for key proof metrics.
- **Video-Style Case Studies** — Verified borrower testimonials with interactive modal deep dives.
- **DPDP 2026 Cookie Consent** — Persistent consent management with essential cookie modes.
- **Interactive Google Maps Embed** — Live office map of Cloud 9 Tower, Vaishali, Ghaziabad.
- **Dynamic XML Sitemap & Robots.txt** — Search engine indexation for all 31 routes.
- **JSON-LD Schema Markup** — Structured data for LocalBusiness, FAQPage, and FinancialProduct.
- **PWA Web App Manifest** — Mobile installable app support.
- **Dedicated Company Portals** — `/about`, `/contact`, `/careers`, `/media`, `/thank-you`, `/_not-found`.

---

## Tech Stack

- **Framework**: Next.js 16.3 (App Router, Turbopack, Static Generation / SSG)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4 with custom `@theme` design tokens
- **Backend**: Firebase (App Check reCAPTCHA Enterprise, Cloud Functions `asia-south1`)
- **Security**: Firestore Rules, DPDP 2026 compliant, 256-bit encrypted

---

## Project Structure

```
shreem-finserv-web/
├── src/
│   ├── app/                    # App Router Pages (31 static & SSG routes)
│   │   ├── page.tsx            # Homepage with animated counters
│   │   ├── calculator/         # Standalone EMI Calculator
│   │   ├── credit-score/       # Free Credit Score Tool
│   │   ├── partner/            # DSA Partner Onboarding
│   │   ├── track-application/  # Live Loan Tracker
│   │   ├── blog/               # Knowledge Hub listing & search
│   │   │   └── [slug]/         # Dynamic SSG blog post guides
│   │   ├── about/              # About Us & leadership
│   │   ├── contact/            # Contact + Google Maps embed
│   │   ├── careers/            # Open positions & job applications
│   │   ├── media/              # Press center & brand assets
│   │   ├── thank-you/          # Submission confirmation & reference ID
│   │   ├── not-found.tsx       # Custom branded 404 page
│   │   ├── sitemap.ts          # Dynamic XML Sitemap generator
│   │   ├── robots.ts           # Robots.txt generator
│   │   ├── personal-loan/      # Doctor & Urgent Cash routes
│   │   ├── business-loan/      # MSME & Women Entrepreneur routes
│   │   ├── loan-against-property/
│   │   ├── machinery-loan/
│   │   ├── privacy-policy/
│   │   ├── terms/
│   │   └── compliance/
│   ├── components/
│   │   ├── WhatsAppButton.tsx  # Floating WhatsApp widget
│   │   ├── BackToTop.tsx       # Scroll-to-top button
│   │   ├── CookieConsent.tsx   # DPDP 2026 cookie notice
│   │   ├── AnimatedCounter.tsx # Smooth stats counter
│   │   ├── JsonLd.tsx          # Schema.org structured data
│   │   ├── Navbar.tsx          # Dual-tier + mega-menu navigation
│   │   ├── Footer.tsx          # 5-column comprehensive footer
│   │   ├── MobileStickyBar.tsx # Mobile action bar
│   │   ├── LeadForm.tsx        # Firebase lead capture form
│   │   ├── EmiCalculator.tsx   # Interactive EMI calculator
│   │   ├── BankLogos.tsx       # 14 authentic bank brand logos
│   │   ├── BankComparisonTable.tsx  # Filterable rate table
│   │   ├── PartnerMarquee.tsx  # Infinite bank logo marquee
│   │   ├── ProductPageTemplate.tsx  # Full product page layout
│   │   ├── CreditScoreWidget.tsx    # Free credit score
│   │   ├── PartnerSection.tsx  # DSA partner form
│   │   ├── AwardsShowcase.tsx  # Bank partner awards
│   │   ├── Testimonials.tsx    # Video-style client success stories
│   │   ├── ApplicationTracker.tsx   # Loan status lookup
│   │   └── Logo.tsx            # Brand logo component
│   ├── config/
│   │   └── brand.ts            # Brand constants & products
│   └── lib/
│       ├── blogData.ts         # SEO article content store
│       └── firebase.ts         # App Check + Cloud Functions
├── firestore.rules             # Security rules
└── public/
    ├── manifest.json           # PWA Web App manifest
    ├── logo-mark.png           # Brand logo mark
    └── logos/                  # Bank SVG assets
```

---

## Getting Started

```bash
npm install
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (31/31 pre-rendered routes, 0 errors)
```

---

## Brand Identity

- **Brand Colors**: Navy Blue `#0B2E8D` (Trust) + Crimson `#BB0119` (Urgency)
- **Typography**: Plus Jakarta Sans (Display) + Inter (Body)
- **Address**: Office No. 537, Cloud 9 Tower, Vaishali, Ghaziabad (UP) 201010
- **Hotline / WhatsApp**: +91 8745003840
- **Email**: Finservshreem@gmail.com
- **Instagram**: [instagram.com/shreemfinserv](https://www.instagram.com/shreemfinserv)
- **LinkedIn**: [linkedin.com/in/shreem-finserv-508234316](https://www.linkedin.com/in/shreem-finserv-508234316)
- **Compliance**: DPDP Act 2026 | RBI Fair Practice Code | Zero Upfront Fee Guarantee

---

*Built with ❤️ for Shreem Finserv — Your Financial Growth Partner*
