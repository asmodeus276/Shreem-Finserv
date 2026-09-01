"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

interface SlideData {
  id: string;
  badge: string;
  badgeIcon: string;
  productTitle: string;
  headline: string;
  subHeadline: string;
  features: { icon: string; text: string }[];
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  bgImage: string;
  gradientOverlay: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: "professional-loan",
    badge: "Specialized Credit for Doctors, CAs & Consultants",
    badgeIcon: "medical_services",
    productTitle: "Professional Loans",
    headline: "Serving Your Financial Needs Is Our Priority!",
    subHeadline:
      "Exclusive collateral-free financial solutions designed for doctors, chartered accountants, architects, and certified practitioners with fast-track 24-hour disbursals.",
    features: [
      { icon: "verified", text: "Zero Collateral Required" },
      { icon: "percent", text: "Starting @ 9.9% p.a." },
      { icon: "schedule", text: "Sanction in 24 Hours" },
    ],
    ctaText: "APPLY NOW",
    ctaLink: "/personal-loan/for-doctors",
    secondaryCtaText: "Check Eligibility",
    secondaryCtaLink: "#lead-form",
    bgImage:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=2000&q=85",
    gradientOverlay:
      "from-[#00103A]/95 via-[#001A62]/85 to-transparent",
  },
  {
    id: "business-loan",
    badge: "Empowering Enterprises & MSMEs",
    badgeIcon: "storefront",
    productTitle: "Business Loans",
    headline: "Serving Your Financial Needs Is Our Priority!",
    subHeadline:
      "Fuel your business expansion, procure inventory, or meet operational cash flow with flexible unsecured working capital loans up to ₹2 Crore across 50+ lenders.",
    features: [
      { icon: "payments", text: "₹1L to ₹2 Crore Capital" },
      { icon: "percent", text: "Starting @ 10.5% p.a." },
      { icon: "speed", text: "Disbursal in 48 Hours" },
    ],
    ctaText: "APPLY NOW",
    ctaLink: "/business-loan/msme-working-capital",
    secondaryCtaText: "Calculate EMI",
    secondaryCtaLink: "#emi-calculator",
    bgImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    gradientOverlay:
      "from-[#051846]/95 via-[#0B2E8D]/80 to-transparent",
  },
  {
    id: "home-loan",
    badge: "Lowest Interest Rates in India",
    badgeIcon: "home",
    productTitle: "Home Loans",
    headline: "Serving Your Financial Needs Is Our Priority!",
    subHeadline:
      "Step into your dream home with bespoke mortgage financing, maximum tax advantages under 80C, and seamless doorstep document assistance.",
    features: [
      { icon: "percent", text: "Lowest Rates from 8.5% p.a." },
      { icon: "hourglass_top", text: "Tenures up to 30 Years" },
      { icon: "rule", text: "Up to 90% Property Value" },
    ],
    ctaText: "APPLY NOW",
    ctaLink: "/home-loan",
    secondaryCtaText: "View Bank Comparison",
    secondaryCtaLink: "#bank-comparison",
    bgImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    gradientOverlay:
      "from-[#001740]/95 via-[#002277]/80 to-transparent",
  },
  {
    id: "loan-against-property",
    badge: "High-Value Capital Against Real Estate",
    badgeIcon: "real_estate_agent",
    productTitle: "Loan Against Property",
    headline: "Serving Your Financial Needs Is Our Priority!",
    subHeadline:
      "Unlock up to 75% of your residential, commercial, or industrial property market value with long-term repayment and low monthly EMIs.",
    features: [
      { icon: "apartment", text: "Funding ₹25L to ₹10 Cr" },
      { icon: "savings", text: "Starting @ 9% p.a." },
      { icon: "calendar_month", text: "Tenure up to 15-20 Years" },
    ],
    ctaText: "APPLY NOW",
    ctaLink: "/loan-against-property",
    secondaryCtaText: "Check Property Value",
    secondaryCtaLink: "#lead-form",
    bgImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85",
    gradientOverlay:
      "from-[#04143A]/95 via-[#082670]/80 to-transparent",
  },
  {
    id: "machinery-loan",
    badge: "Industrial & Manufacturing Financing",
    badgeIcon: "precision_manufacturing",
    productTitle: "Machinery & Equipment Loans",
    headline: "Serving Your Financial Needs Is Our Priority!",
    subHeadline:
      "Acquire state-of-the-art machinery and manufacturing equipment to scale production capacity with structured equipment lease and loan products.",
    features: [
      { icon: "precision_manufacturing", text: "Up to 90% Invoice Funded" },
      { icon: "savings", text: "Starting @ 10% p.a." },
      { icon: "bolt", text: "Express Appraisal & Sanction" },
    ],
    ctaText: "APPLY NOW",
    ctaLink: "/machinery-loan",
    secondaryCtaText: "Talk to Expert",
    secondaryCtaLink: "#lead-form",
    bgImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=85",
    gradientOverlay:
      "from-[#031131]/95 via-[#062060]/80 to-transparent",
  },
];

// Quick selector list underneath slider (mirroring reference layout)
const QUICK_LOAN_SELECTOR = [
  {
    title: "Professional Loan",
    icon: "medical_services",
    slideIdx: 0,
    link: "/personal-loan/for-doctors",
  },
  {
    title: "Business Loan",
    icon: "storefront",
    slideIdx: 1,
    link: "/business-loan/msme-working-capital",
  },
  {
    title: "Home Loan",
    icon: "home",
    slideIdx: 2,
    link: "/home-loan",
  },
  {
    title: "Loan Against Property",
    icon: "real_estate_agent",
    slideIdx: 3,
    link: "/loan-against-property",
  },
  {
    title: "Machinery Loan",
    icon: "precision_manufacturing",
    slideIdx: 4,
    link: "/machinery-loan",
  },
  {
    title: "Urgent Cash Advance",
    icon: "bolt",
    slideIdx: 0,
    link: "/personal-loan/urgent-cash",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 28,
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 5500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden bg-slate-950">
      {/* Main Slider Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={slide.id}
                className="relative flex-[0_0_100%] min-w-0 min-h-[540px] sm:min-h-[580px] md:min-h-[620px] lg:min-h-[660px] flex items-center"
              >
                {/* Background Image with Next.js Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.bgImage}
                    alt={slide.productTitle}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover object-center transition-transform duration-1000 ease-out"
                    style={{
                      transform: isActive ? "scale(1.04)" : "scale(1)",
                    }}
                  />
                  {/* Deep Multi-Layered Gradient & Vignette Overlay for High Readability */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${slide.gradientOverlay}`}
                  />
                  <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-[0.85]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 lg:py-24">
                  <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6">
                    {/* Badge Pill */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg">
                      <span className="material-symbols-outlined text-[18px] text-amber-400">
                        {slide.badgeIcon}
                      </span>
                      <span>{slide.badge}</span>
                    </div>

                    {/* Product Name & Strong Headline */}
                    <div className="space-y-2">
                      <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                        {slide.productTitle}
                      </h2>
                      <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#7dd3fc] tracking-tight">
                        {slide.headline}
                      </p>
                    </div>

                    {/* Sub-headline / Description */}
                    <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl text-shadow-sm font-normal">
                      {slide.subHeadline}
                    </p>

                    {/* Key Highlights Pill Row */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                      {slide.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-slate-200"
                        >
                          <span className="material-symbols-outlined text-[16px] text-emerald-400">
                            {feat.icon}
                          </span>
                          <span>{feat.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
                      <Link
                        href={slide.ctaLink}
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#BB0119] to-[#E0292E] hover:from-[#9c0115] hover:to-[#BB0119] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-xl hover:shadow-red-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                      >
                        <span>{slide.ctaText}</span>
                        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>

                      {slide.secondaryCtaText && slide.secondaryCtaLink && (
                        <Link
                          href={slide.secondaryCtaLink}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm sm:text-base transition-all duration-200"
                        >
                          <span>{slide.secondaryCtaText}</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Navigation Controls: Left & Right Arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/60 hover:bg-[#0B2E8D] text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <span className="material-symbols-outlined text-[24px] sm:text-[28px] group-hover:-translate-x-0.5 transition-transform">
          chevron_left
        </span>
      </button>

      <button
        onClick={scrollNext}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/60 hover:bg-[#0B2E8D] text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <span className="material-symbols-outlined text-[24px] sm:text-[28px] group-hover:translate-x-0.5 transition-transform">
          chevron_right
        </span>
      </button>

      {/* Slide Controls: Bottom Dot Pagination & Counter */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-2">
        <div className="flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-xl">
          {scrollSnaps.map((_, dotIndex) => {
            const isDotActive = dotIndex === selectedIndex;
            return (
              <button
                key={dotIndex}
                onClick={() => scrollTo(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={`transition-all duration-300 rounded-full h-2.5 focus:outline-none ${
                  isDotActive
                    ? "w-8 bg-[#BB0119] shadow-md shadow-red-500/50"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            );
          })}
          <span className="text-white/70 text-xs font-semibold pl-2 tracking-wider">
            0{selectedIndex + 1} / 0{HERO_SLIDES.length}
          </span>
        </div>
      </div>

      {/* Quick Loan Product Selector Bar (Below Slide, as in Reference Screenshot) */}
      <div className="relative z-20 bg-gradient-to-r from-[#001A62] via-[#0B2E8D] to-[#001A62] py-4 border-t border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-3">
            <p className="text-xs sm:text-sm font-semibold text-blue-100 tracking-wide">
              Explore our suite of customized solutions for every financial need.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3">
            {QUICK_LOAN_SELECTOR.map((item, qIdx) => (
              <Link
                key={qIdx}
                href={item.link}
                className="group flex items-center gap-2 sm:gap-2.5 bg-white/95 hover:bg-white p-2.5 sm:p-3 rounded-xl border border-white/30 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0B2E8D]/10 text-[#0B2E8D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B2E8D] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    {item.icon}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-800 group-hover:text-[#0B2E8D] truncate transition-colors">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium truncate">
                    Instant Apply →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
