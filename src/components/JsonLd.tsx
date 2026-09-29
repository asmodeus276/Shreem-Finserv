import React from "react";
import { BRAND_CONFIG } from "@/config/brand";

interface JsonLdProps {
  type?: "Organization" | "LocalBusiness" | "FinancialProduct" | "FAQPage" | "Article";
  faqItems?: Array<{ q: string; a: string }>;
  productDetails?: {
    name: string;
    description: string;
    interestRate: string;
    maxAmount: string;
    url?: string;
  };
  breadcrumbItems?: Array<{ name: string; url: string }>;
  articleDetails?: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    authorName: string;
  };
}

export const JsonLd: React.FC<JsonLdProps> = ({
  type = "LocalBusiness",
  faqItems,
  productDetails,
  breadcrumbItems,
  articleDetails,
}) => {
  const schemas: Record<string, unknown>[] = [];

  // 1. Core FinancialService / LocalBusiness Schema
  const baseFinancialService = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://shreemfinserv.com/#organization",
    name: BRAND_CONFIG.name,
    legalName: BRAND_CONFIG.legalName,
    alternateName: ["Shreem Finserv", "Shreem Finserv Loan Marketplace"],
    url: "https://shreemfinserv.com",
    logo: "https://shreemfinserv.com/logo-mark.png",
    image: "https://shreemfinserv.com/images/founder.jpg",
    description: BRAND_CONFIG.tagline,
    telephone: BRAND_CONFIG.phone,
    email: BRAND_CONFIG.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Bank Transfer, Direct Loan Sanction",
    founder: {
      "@type": "Person",
      name: BRAND_CONFIG.founder.name,
      jobTitle: BRAND_CONFIG.founder.title,
      description: BRAND_CONFIG.founder.bio,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND_CONFIG.address,
      addressLocality: BRAND_CONFIG.city,
      addressRegion: BRAND_CONFIG.state,
      postalCode: BRAND_CONFIG.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.644800",
      longitude: "77.341100",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    sameAs: [
      BRAND_CONFIG.social.linkedin,
      BRAND_CONFIG.social.instagram,
      BRAND_CONFIG.social.whatsapp,
    ].filter(Boolean),
  };

  if (type === "LocalBusiness" || type === "Organization") {
    schemas.push(baseFinancialService);
  }

  // 2. Financial Product Schema
  if (productDetails) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FinancialProduct",
      name: productDetails.name,
      description: productDetails.description,
      url: productDetails.url || "https://shreemfinserv.com",
      provider: {
        "@type": "FinancialService",
        name: BRAND_CONFIG.name,
        telephone: BRAND_CONFIG.phone,
      },
      annualPercentageRate: productDetails.interestRate,
      amount: {
        "@type": "MonetaryAmount",
        currency: "INR",
        description: productDetails.maxAmount,
      },
      feesAndCommissionsSpecification: "Zero Upfront Advisory Fee Guarantee",
    });
  }

  // 3. FAQPage Schema for Google Rich Results
  if (faqItems && faqItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    });
  }

  // 4. BreadcrumbList Schema
  if (breadcrumbItems && breadcrumbItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  // 5. Article Schema
  if (articleDetails) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: articleDetails.headline,
      description: articleDetails.description,
      image: articleDetails.image,
      datePublished: articleDetails.datePublished,
      dateModified: articleDetails.datePublished,
      author: {
        "@type": "Person",
        name: articleDetails.authorName,
      },
      publisher: {
        "@type": "Organization",
        name: BRAND_CONFIG.name,
        logo: {
          "@type": "ImageObject",
          url: "https://shreemfinserv.com/logo-mark.png",
        },
      },
    });
  }

  const output = schemas.length === 1 ? schemas[0] : { "@context": "https://schema.org", "@graph": schemas };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(output) }}
    />
  );
};

export default JsonLd;
