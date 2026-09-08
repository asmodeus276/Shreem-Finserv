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
    <div className="relative w-full overflow-hidden bg-slate-50">
      
      {/* 1. Main Hero Slider */}
      <div className="w-full overflow-hidden relative" ref={emblaRef}>
        <div className="flex" style={{ touchAction: "pan-y" }}>
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0 min-h-[440px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[560px] bg-slate-50"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[inherit] pt-6 pb-16 sm:pt-8 sm:pb-14 lg:py-14">

                {/* Column 1: Text Content */}
                <div className="space-y-3 sm:space-y-4 text-left order-2 lg:order-1">

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 shadow-xs">
                    <span className="material-symbols-outlined text-[16px] text-[#1c4e9e]">
                      {slide.badgeIcon}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#1c4e9e]">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                    {slide.titleLine1}{" "}
                    <span className="text-[#1c4e9e]">{slide.titleLine2}</span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-lg font-medium text-slate-600 leading-relaxed max-w-lg">
                    {slide.headline}
                  </p>

                  {/* Benefit Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {slide.keyBenefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-xs"
                      >
                        <span className="material-symbols-outlined text-[16px] text-emerald-500 shrink-0">
                          check_circle
                        </span>
                        <span className="text-xs sm:text-[13px] font-semibold text-slate-700 whitespace-nowrap">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Row */}
                  <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3">
                    <Link
                      href={slide.ctaLink}
                      className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#e50914] hover:bg-[#c40812] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-500/20 transition-all duration-200 hover:scale-105 active:scale-95 group"
                    >
                      <span>{slide.ctaText}</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>

                    <a
                      href="tel:+918745003840"
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm tracking-wide border border-slate-200 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[18px] text-emerald-500">
                        phone_in_talk
                      </span>
                      <span className="whitespace-nowrap">Call +91 87450 03840</span>
                    </a>
                  </div>

                  {/* Trust Strip */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-slate-400 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-amber-500">star</span>
                      50+ Partner Banks & NBFCs
                    </span>
                    <span>•</span>
                    <span>Zero Prepayment Penalty</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline">100% Safe & RBI Compliant</span>
                  </div>
                </div>

                {/* Column 2: Image */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm order-1 lg:order-2">
                  <Image
                    src={slide.bgImage}
                    alt={slide.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center select-none pointer-events-none"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          aria-label="Previous Banner"
          className="hidden sm:flex absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg border border-slate-200 items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group/arrow"
        >
          <span className="material-symbols-outlined text-[22px] sm:text-[26px] group-hover/arrow:-translate-x-0.5 transition-transform">
            chevron_left
          </span>
        </button>

        <button
          onClick={scrollNext}
          aria-label="Next Banner"
          className="hidden sm:flex absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg border border-slate-200 items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group/arrow"
        >
          <span className="material-symbols-outlined text-[22px] sm:text-[26px] group-hover/arrow:translate-x-0.5 transition-transform">
            chevron_right
          </span>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-slate-200 shadow-md pointer-events-auto">
            {scrollSnaps.map((_, dotIndex) => {
              const isDotActive = dotIndex === selectedIndex;
              return (
                <button
                  key={dotIndex}
                  onClick={() => scrollTo(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${
                    isDotActive
                      ? "w-7 bg-[#e50914] shadow-sm"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              );
            })}
            <span className="text-slate-500 text-[11px] font-bold pl-1 tracking-wider">
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
