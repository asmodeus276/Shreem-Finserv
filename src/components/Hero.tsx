"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

interface SlideData {
  id: string;
  badge: string;
  badgeIcon: string;
  titleLine1: string;
  titleLine2: string;
  headline: string;
  keyBenefits: string[];
  ctaText: string;
  ctaLink: string;
  bgImage: string;
  imageAlt: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: "professional-loans",
    badge: "Exclusive for Doctors, CAs & Professionals",
    badgeIcon: "medical_services",
    titleLine1: "Professional",
    titleLine2: "Loans",
    headline: "Fast-Track Collateral-Free Credit with Express 24-Hour Sanction!",
    keyBenefits: ["Zero Collateral Required", "Starting @ 9.9% p.a.", "Funding Up to ₹1 Crore"],
    ctaText: "APPLY NOW",
    ctaLink: "/professional-loan",
    bgImage: "/images/doctor-hero-banner-right.jpg",
    imageAlt: "Professional Loans for Doctors and Certified Practitioners",
  },
  {
    id: "business-loans",
    badge: "Fueling Enterprise & MSME Expansion",
    badgeIcon: "storefront",
    titleLine1: "Business",
    titleLine2: "Loans",
    headline: "Flexible Commercial Working Capital Across 50+ Leading Lenders!",
    keyBenefits: ["Loans Up to ₹2 Crore", "Starting @ 10.5% p.a.", "Disbursal in 48 Hours"],
    ctaText: "APPLY NOW",
    ctaLink: "/business-loan",
    bgImage: "/images/business-hero-banner-right.jpg",
    imageAlt: "Business Loans and Working Capital for Enterprises",
  },
  {
    id: "home-loans",
    badge: "Lowest Interest Mortgage Rates in India",
    badgeIcon: "home",
    titleLine1: "Home",
    titleLine2: "Loans",
    headline: "Step Into Your Dream Home with Maximum Tax Benefits & Doorstep Clearances!",
    keyBenefits: ["Starting from 8.5% p.a.", "Tenures up to 30 Years", "Up to 90% Property Value"],
    ctaText: "APPLY NOW",
    ctaLink: "/home-loan",
    bgImage: "/images/home-loan-inner-banner.jpg",
    imageAlt: "Home Loans and Low Interest Mortgages for Families",
  },
  {
    id: "loan-against-property",
    badge: "Maximum Liquidity Against Real Estate",
    badgeIcon: "real_estate_agent",
    titleLine1: "Property",
    titleLine2: "Loans",
    headline: "Unlock Substantial Capital Against Residential & Commercial Real Estate!",
    keyBenefits: ["Funding ₹25L to ₹10 Crore", "Starting @ 9.0% p.a.", "Flexible 15-Year Tenure"],
    ctaText: "APPLY NOW",
    ctaLink: "/loan-against-property",
    bgImage: "/images/lap-inner-banner.jpg",
    imageAlt: "Loan Against Property and Commercial Mortgage Financing",
  },
  {
    id: "personal-loans",
    badge: "Instant Collateral-Free Emergency Credit",
    badgeIcon: "payments",
    titleLine1: "Personal",
    titleLine2: "Loans",
    headline: "Instant Digital Approvals with 100% Paperless Processing!",
    keyBenefits: ["Instant Sanction", "Zero Hidden Charges", "Minimal Documentation"],
    ctaText: "APPLY NOW",
    ctaLink: "/personal-loan",
    bgImage: "/images/personal-hero-banner-right.jpg",
    imageAlt: "Instant Personal Loans and Collateral-Free Retail Credit",
  },
];

// Quick Selector Icons & Categories matching user priority order
const QUICK_LOAN_CARDS = [
  {
    title: "Professional Loan",
    icon: "medical_services",
    link: "/professional-loan",
  },
  {
    title: "Business Loan",
    icon: "storefront",
    link: "/business-loan",
  },
  {
    title: "Home Loan",
    icon: "home",
    link: "/home-loan",
  },
  {
    title: "Loan Against Property",
    icon: "real_estate_agent",
    link: "/loan-against-property",
  },
  {
    title: "Personal Loan",
    icon: "payments",
    link: "/personal-loan",
  },
  {
    title: "Working Capital",
    icon: "account_balance_wallet",
    link: "/business-loan/msme-working-capital",
  },
  {
    title: "Machinery Loan",
    icon: "precision_manufacturing",
    link: "/machinery-loan",
  },
  {
    title: "New / Used Car Loan",
    icon: "directions_car",
    link: "/personal-loan",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 20,
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

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

    const syncSnaps = () => {
      onSelect();
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    const timer = setTimeout(syncSnaps, 0);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", syncSnaps);

    return () => {
      clearTimeout(timer);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", syncSnaps);
    };
  }, [emblaApi, onSelect]);

  const scrollCardsLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: -240, behavior: "smooth" });
    }
  };

  const scrollCardsRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: 240, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-white">
      
      {/* 1. Main Hero Slider Container (Deep Royal Navy & High-Contrast Visuals) */}
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {HERO_SLIDES.map((slide, index) => {
            return (
              <div
                key={slide.id}
                className="relative flex-[0_0_100%] min-w-0 min-h-[480px] sm:min-h-[530px] md:min-h-[580px] lg:min-h-[620px] flex items-center bg-[#001038] overflow-hidden"
              >
                {/* Full-Bleed Panoramic Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.bgImage}
                    alt={slide.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover object-right md:object-right select-none pointer-events-none"
                  />
                  {/* Multi-stage Luxury Gradient Overlay:
                      Solid dark navy on the left where typography and CTAs sit, 
                      smoothly transitioning across center, completely transparent on the right
                      to showcase the crisp, high-resolution photographic subjects with zero white haze */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#000d2b] via-[#00164e]/95 via-45% md:via-55% to-[#00164e]/20 md:to-transparent pointer-events-none" />
                  {/* Soft top-and-bottom vignette for seamless header and section integration */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#000d2b]/40 via-transparent to-[#000d2b]/50 pointer-events-none" />
                </div>

                {/* Foreground Content Area on the Left */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-18">
                  <div className="max-w-2xl lg:max-w-3xl space-y-3 sm:space-y-4 md:space-y-4.5 text-left">
                    
                    {/* Trust Badge Pill */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-400/30 text-cyan-300 backdrop-blur-md shadow-sm">
                      <span className="material-symbols-outlined text-[17px] text-amber-400">
                        {slide.badgeIcon}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-200">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Giant Bold Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.06] drop-shadow-sm">
                      {slide.titleLine1}{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                        {slide.titleLine2}
                      </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl font-medium text-slate-100/90 tracking-tight leading-relaxed max-w-xl">
                      {slide.headline}
                    </p>

                    {/* Key Value Benefits Checkmarks */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-1 pb-1">
                      {slide.keyBenefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 rounded-xl px-3 py-2 backdrop-blur-md transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px] text-emerald-400 shrink-0">
                            check_circle
                          </span>
                          <span className="text-xs sm:text-[13px] font-semibold text-white whitespace-nowrap">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Row */}
                    <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                      <Link
                        href={slide.ctaLink}
                        className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#e50914] hover:bg-[#c40812] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-red-950/50 transition-all duration-200 hover:scale-105 active:scale-95 group"
                      >
                        <span>{slide.ctaText}</span>
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>

                      {/* Hotline Call CTA */}
                      <a
                        href="tel:+918745003840"
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm tracking-wide backdrop-blur-md border border-white/20 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                      >
                        <span className="material-symbols-outlined text-[18px] text-emerald-400">
                          phone_in_talk
                        </span>
                        <span className="whitespace-nowrap">Call +91 87450 03840</span>
                      </a>
                    </div>

                    {/* Micro Trust Proof Strip */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-slate-300/85 font-medium pt-1">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-amber-400">star</span>
                        50+ Partner Banks & NBFCs
                      </span>
                      <span>•</span>
                      <span>Zero Prepayment Penalty</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="hidden sm:inline">100% Safe & RBI Compliant</span>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Hero Slider Left Navigation Arrow Button */}
        <button
          onClick={scrollPrev}
          aria-label="Previous Banner"
          className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white shadow-2xl backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group/arrow"
        >
          <span className="material-symbols-outlined text-[24px] sm:text-[28px] text-white group-hover/arrow:-translate-x-0.5 transition-transform">
            chevron_left
          </span>
        </button>

        {/* Hero Slider Right Navigation Arrow Button */}
        <button
          onClick={scrollNext}
          aria-label="Next Banner"
          className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white shadow-2xl backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group/arrow"
        >
          <span className="material-symbols-outlined text-[24px] sm:text-[28px] text-white group-hover/arrow:translate-x-0.5 transition-transform">
            chevron_right
          </span>
        </button>

        {/* Slide Pagination Dots & Counter (Bottom Centered inside Hero Slider) */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg pointer-events-auto">
            {scrollSnaps.map((_, dotIndex) => {
              const isDotActive = dotIndex === selectedIndex;
              return (
                <button
                  key={dotIndex}
                  onClick={() => scrollTo(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${
                    isDotActive
                      ? "w-7 bg-[#e50914] shadow-sm shadow-red-500/50"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              );
            })}
            <span className="text-white/90 text-[11px] font-bold pl-1 tracking-wider">
              0{selectedIndex + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>
        </div>

      </div>

      {/* 2. Bottom Quick Loan Solutions Carousel (Full-Width Royal Blue Strip #1c4e9e) */}
      <div className="w-full bg-[#1c4e9e] text-white py-5 md:py-6 shadow-xl border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Top Centered White Text */}
          <div className="text-center mb-4 sm:mb-5">
            <h2 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-wide">
              Explore our suite of customized solutions for every financial need.
            </h2>
          </div>

          {/* Icon Cards Row with Left / Right Navigation Arrow Buttons */}
          <div className="relative flex items-center">
            
            {/* Left < Arrow Button */}
            <button
              onClick={scrollCardsLeft}
              aria-label="Scroll left"
              className="absolute -left-2 sm:-left-4 z-20 w-8 h-8 rounded-full bg-white text-[#1c4e9e] hover:bg-slate-100 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>

            {/* Horizontal Scrollable Row of White Rounded Cards */}
            <div
              ref={cardsContainerRef}
              className="flex md:grid md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth w-full px-2 py-1 items-stretch"
            >
              {QUICK_LOAN_CARDS.map((card, idx) => (
                <Link
                  key={idx}
                  href={card.link}
                  className="flex-shrink-0 w-[150px] sm:w-[170px] md:w-auto bg-white hover:bg-slate-50 rounded-2xl p-3.5 sm:p-4 text-center flex flex-col items-center justify-center gap-2.5 border border-white/80 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1c4e9e] group-hover:bg-[#1c4e9e] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                    <span className="material-symbols-outlined text-[24px]">
                      {card.icon}
                    </span>
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#1c4e9e] transition-colors leading-tight">
                    {card.title}
                  </span>
                </Link>
              ))}
            </div>

            {/* Right > Arrow Button */}
            <button
              onClick={scrollCardsRight}
              aria-label="Scroll right"
              className="absolute -right-2 sm:-right-4 z-20 w-8 h-8 rounded-full bg-white text-[#1c4e9e] hover:bg-slate-100 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>

          </div>

        </div>
      </div>

    </div>
  );
}

export default Hero;
