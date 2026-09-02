"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface InnerBannerProps {
  badge?: string;
  badgeIcon?: string;
  title: string;
  highlightText?: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  imageSrc?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  quickStats?: Array<{ label: string; value: string }>;
}

export const InnerBanner: React.FC<InnerBannerProps> = ({
  title,
  highlightText,
  subtitle,
  breadcrumbs,
  imageSrc,
  imageAlt,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 border-b border-slate-200">
      
      {/* Full-Bleed Panoramic Background Image */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-center"
          />
          {/* Smooth left gradient overlay to guarantee 100% crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent md:via-white/80" />
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-18 min-h-[300px] sm:min-h-[340px] md:min-h-[380px] flex items-center">
        <div className="max-w-2xl space-y-2 sm:space-y-3">
          
          {/* Main Title (Dark Navy Blue #1c4e9e matching screenshots) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c4e9e] tracking-tight leading-[1.1]">
            {title}{" "}
            {highlightText && (
              <span className="block font-medium text-[#1c4e9e] mt-0.5">{highlightText}</span>
            )}
          </h1>

          {/* Subtitle matching screenshots: "Loan amount | Quick Disbursal | Flexible EMI" */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium tracking-normal pt-1">
            {subtitle}
          </p>

          {/* Optional CTA Link */}
          {ctaText && ctaLink && (
            <div className="pt-3">
              <Link
                href={ctaLink}
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-[#1c4e9e] hover:bg-[#163f80] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all"
              >
                <span>{ctaText}</span>
              </Link>
            </div>
          )}

        </div>
      </div>

      {/* Full-Width Dark Grey Breadcrumb Bar (Matching Screenshots #4b5563) */}
      <div className="w-full bg-[#4b5563] text-slate-200 py-2 sm:py-2.5 border-t border-slate-600/50 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-xs sm:text-sm font-semibold flex items-center gap-2">
          {breadcrumbs.map((crumb, cIdx) => {
            const isLast = cIdx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={cIdx}>
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className="text-slate-200 hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-white font-bold" : "text-slate-300"}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && <span className="text-slate-400">&gt;</span>}
              </React.Fragment>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default InnerBanner;
