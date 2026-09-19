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
  imageObjectPosition?: string;
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
  imageObjectPosition = "50% 20%",
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 border-b border-slate-200">
      
      {/* Controlled Responsive Height Container (Compact Above-The-Fold Layout) */}
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center overflow-hidden">
        
        {/* Full-Bleed Panoramic Background Image (Smart 50% 20% Focal Point for Perfect Headroom) */}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            priority
            sizes="100vw"
            className="object-cover select-none pointer-events-none"
            style={{ objectPosition: imageObjectPosition || "50% 20%" }}
          />
        )}

        {/* Subtle Left-Side Gradient for Text Legibility Over Dark Backgrounds */}
        <div className="absolute inset-0 z-[5] bg-gradient-to-r from-white/70 via-white/40 to-transparent pointer-events-none" />

        {/* Foreground Content Area */}
        <div className="absolute inset-0 z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center">
          <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl space-y-1 sm:space-y-2 md:space-y-3">
            
            {/* Main Title (Brand Royal Blue #0B309A) */}
            <h1 className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#0B309A] tracking-tight leading-[1.12]">
              {title}{" "}
              {highlightText && (
                <span className="block font-semibold text-[#0B309A] mt-0.5">{highlightText}</span>
              )}
            </h1>

            {/* Subtitle matching screenshots */}
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-semibold tracking-normal max-w-md">
              {subtitle}
            </p>

            {/* Optional CTA Link */}
            {ctaText && ctaLink && (
              <div className="pt-1 sm:pt-2 md:pt-3">
                <Link
                  href={ctaLink}
                  className="inline-flex items-center justify-center px-4 sm:px-6 md:px-7 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-[#0B309A] hover:bg-[#082475] text-white font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider shadow-sm transition-all"
                >
                  <span>{ctaText}</span>
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Full-Width Dark Grey Breadcrumb Bar (Matching Screenshots #4b5563) */}
      <div className="w-full bg-[#4b5563] text-slate-200 py-2 sm:py-2.5 border-t border-slate-600/50 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-xs sm:text-sm font-semibold flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
          {breadcrumbs.map((crumb, cIdx) => {
            const isLast = cIdx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={cIdx}>
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className="text-slate-200 hover:text-white transition-colors flex-shrink-0">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={`${isLast ? "text-white font-bold" : "text-slate-300"} flex-shrink-0`}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && <span className="text-slate-400 flex-shrink-0">&gt;</span>}
              </React.Fragment>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default InnerBanner;
