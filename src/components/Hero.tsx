"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

interface SlideData {
  id: string;
  titleLine1: string;
  titleLine2: string;
  headline: string;
  ctaText: string;
  ctaLink: string;
  bgImage: string;
  imageAlt: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: "professional-loans",
    titleLine1: "Professional",
    titleLine2: "Loans",
    headline: "Serving Your Financial Needs Is Our Priority!",
    ctaText: "APPLY NOW",
    ctaLink: "/personal-loan/for-doctors",
    bgImage: "/images/doctor-hero-banner.jpg",
    imageAlt: "Professional Loans for Doctors & Practitioners",
  },
  {
    id: "business-loans",
    titleLine1: "Business",
    titleLine2: "Loans",
    headline: "Serving Your Financial Needs Is Our Priority!",
    ctaText: "APPLY NOW",
    ctaLink: "/business-loan",
    bgImage: "/images/business-hero-banner.jpg",
    imageAlt: "Business Loans & MSME Working Capital",
  },
  {
    id: "personal-loans",
    titleLine1: "Personal",
    titleLine2: "Loans",
    headline: "Serving Your Financial Needs Is Our Priority!",
    ctaText: "APPLY NOW",
    ctaLink: "/personal-loan",
    bgImage: "/images/personal-hero-banner.jpg",
    imageAlt: "Instant Personal Loans & Retail Credit",
  },
];

// Quick Selector Icons & Categories matching the reference
const QUICK_LOAN_CARDS = [
  {
    title: "Working Capital",
    icon: "account_balance_wallet",
    link: "/business-loan/msme-working-capital",
  },
  {
    title: "Business Loan",
    icon: "storefront",
    link: "/business-loan",
  },
  {
    title: "Professional Loan",
    icon: "medical_services",
    link: "/personal-loan/for-doctors",
  },
  {
    title: "Personal Loan",
    icon: "payments",
    link: "/personal-loan",
  },
  {
    title: "New /Used Car Loan",
    icon: "directions_car",
    link: "/personal-loan",
  },
  {
    title: "Medical Equipment Loan",
    icon: "monitor_heart",
    link: "/personal-loan/for-doctors",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 25,
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

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
      
      {/* 1. Main Hero Slider Container (Full-Bleed Matching capitalneed.com) */}
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {HERO_SLIDES.map((slide, index) => {
            return (
              <div
                key={slide.id}
                className="relative flex-[0_0_100%] min-w-0 min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[620px] flex items-center bg-[#e7f3fb]"
              >
                {/* Full-Bleed Panoramic Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.bgImage}
                    alt={slide.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover object-left md:object-center"
                  />
                  {/* Subtle right gradient overlay to ensure text contrast on all devices */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-[#e7f3fb]/90 md:to-transparent pointer-events-none" />
                </div>

                {/* Foreground Text Overlay positioned in the right half */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Left 5 Cols: Transparent Space occupied by Doctor / Subject Photo */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-5" />

                    {/* Right 7 Cols: Exact Typography & CTA Button */}
                    <div className="md:col-span-7 lg:col-span-7 space-y-3 sm:space-y-4 md:space-y-5 text-left pl-2 md:pl-6 lg:pl-10">
                      
                      {/* Giant Bold Headline matching capitalneed.com screenshot */}
                      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#263238] tracking-tight leading-[1.02]">
                        {slide.titleLine1}
                        <br />
                        {slide.titleLine2}
                      </h1>

                      {/* Subtitle */}
                      <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#37474f] tracking-tight leading-snug max-w-xl">
                        {slide.headline}
                      </p>

                      {/* Styled Pill CTA Button */}
                      <div className="pt-2 sm:pt-4">
                        <Link
                          href={slide.ctaLink}
                          className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#dce7ee] hover:bg-[#cfdbe3] text-[#263238] font-black text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                        >
                          <span>{slide.ctaText}</span>
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Slide Pagination Dots (Bottom Centered inside Hero Slider) */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2 pointer-events-none">
          {scrollSnaps.map((_, dotIndex) => {
            const isDotActive = dotIndex === selectedIndex;
            return (
              <button
                key={dotIndex}
                onClick={() => scrollTo(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={`pointer-events-auto transition-all duration-200 rounded-full h-2.5 ${
                  isDotActive
                    ? "w-2.5 bg-slate-600 shadow-xs"
                    : "w-2.5 bg-slate-400/80 hover:bg-slate-500"
                }`}
              />
            );
          })}
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
              className="flex md:grid md:grid-cols-6 gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth w-full px-2 py-1 items-stretch"
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
