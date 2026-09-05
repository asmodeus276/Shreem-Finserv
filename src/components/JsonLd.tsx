import React from "react";
import { BRAND_CONFIG } from "@/config/brand";

interface JsonLdProps {
  type?: "Organization" | "LocalBusiness" | "FinancialProduct" | "FAQPage";
  faqItems?: Array<{ q: string; a: string }>;
  productDetails?: {
    name: string;
    description: string;
    interestRate: string;
    maxAmount: string;
  };
}

export const JsonLd: React.FC<JsonLdProps> = ({
  type = "LocalBusiness",
  faqItems,
  productDetails,
}) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: BRAND_CONFIG.name,
    legalName: "Shreem Finserv Private Limited",
    alternateName: "Shreem Finserv",
    url: "https://shreemfinserv.com",
    logo: "https://shreemfinserv.com/logo-mark.png",
    description: BRAND_CONFIG.tagline,
    telephone: BRAND_CONFIG.phone,
    email: BRAND_CONFIG.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Bank Transfer, Direct Sanction",
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
        closes: "19:00",
      },
    ],
    sameAs: [
      BRAND_CONFIG.social.linkedin,
      BRAND_CONFIG.social.instagram,
    ].filter(Boolean),
  };

  let schemaToRender: Record<string, unknown> = baseSchema;

  if (type === "FAQPage" && faqItems && faqItems.length > 0) {
    schemaToRender = {
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
    };
  } else if (type === "FinancialProduct" && productDetails) {
    schemaToRender = {
      "@context": "https://schema.org",
      "@type": "FinancialProduct",
      name: productDetails.name,
      description: productDetails.description,
      provider: {
        "@type": "FinancialService",
        name: BRAND_CONFIG.name,
        telephone: BRAND_CONFIG.phone,
      },
      annualPercentageRate: productDetails.interestRate,
      feesAndCommissionsSpecification: "Zero Upfront Advisory Fee Guarantee",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToRender) }}
    />
  );
};

export default JsonLd;
