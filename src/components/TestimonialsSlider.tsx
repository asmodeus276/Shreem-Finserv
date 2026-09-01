"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { BRAND_CONFIG } from "@/config/brand";

export interface CustomerReview {
  id: string;
  name: string;
  handle?: string;
  role: string;
  city: string;
  loanType: string;
  rating: number;
  avatarUrl: string;
  reviewText: string;
  tag?: string;
  date?: string;
}

// Placeholder review dataset (Ready to be replaced with direct Instagram reviews)
export const DEFAULT_CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    name: "Dr. Arvind Mukherjee",
    handle: "@dr_arvind_ortho",
    role: "Orthopedic Surgeon & Clinic Owner",
    city: "New Delhi",
    loanType: "Professional Loan for Doctors",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80",
    reviewText:
      "Needed urgent unsecured financing to expand our daycare clinic. Shreem Finserv managed the complete sanction in just 18 hours with 9.99% preferential ROI. Zero hassle, zero hidden upfront fees!",
    tag: "Verified Client",
    date: "1 week ago on Instagram",
  },
  {
    id: "rev-2",
    name: "Rajesh Aggarwal",
    handle: "@aggarwal_logistics",
    role: "Director, Aggarwal Logistics",
    city: "Ghaziabad, UP",
    loanType: "Loan Against Property (LAP)",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    reviewText:
      "Transferred my existing high-interest overdraft to a low-cost Loan Against Property. Cut down monthly EMI outflow by nearly 35% plus got ₹75L top-up for warehouse expansion.",
    tag: "High Value Disbursal",
    date: "2 weeks ago on Instagram",
  },
  {
    id: "rev-3",
    name: "Pooja Verma",
    handle: "@pooja.auradesigns",
    role: "Founder, Aura Studio & Exports",
    city: "Gurugram, HR",
    loanType: "Business Loan for Women",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    reviewText:
      "As a female entrepreneur scaling export orders, Shreem Finserv helped me secure a collateral-free MSME loan with a special 0.5% interest subsidy. Their team handled everything at doorstep!",
    tag: "Women Entrepreneur",
    date: "3 weeks ago on Instagram",
  },
  {
    id: "rev-4",
    name: "Amitabh Sen",
    handle: "@sen_precision_mfg",
    role: "Managing Director, Sen Precision Tools",
    city: "Noida, UP",
    loanType: "Machinery & Equipment Loan",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    reviewText:
      "Importing 5-axis CNC machines was funded up to 90% of proforma invoice value. The 7-year repayment tenure gave our cash flow breathing space. Super transparent process.",
    tag: "Asset Financing",
    date: "1 month ago on Instagram",
  },
  {
    id: "rev-5",
    name: "Vikram & Ananya Malhotra",
    handle: "@malhotra_vikram",
    role: "IT Director & Product Lead",
    city: "Bengaluru / Noida",
    loanType: "Home Loan & Balance Transfer",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    reviewText:
      "We bought our 4BHK dream home with Shreem Finserv. They negotiated an 8.40% interest rate directly with SBI and handled all municipal and legal verification seamlessly.",
    tag: "Dream Home Owner",
    date: "Last month on Instagram",
  },
  {
    id: "rev-6",
    name: "Dr. Sunita Deshmukh",
    handle: "@dr_sunita_imaging",
    role: "Chief Radiologist & Diagnostic Hub",
    city: "Mumbai, MH",
    loanType: "Medical Equipment Finance",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80",
    reviewText:
      "Financed our new 1.5 Tesla MRI scanner with OEM settlement directly through Shreem Finserv's banking partners. Exceptional relationship manager support throughout!",
    tag: "Healthcare Equipment",
    date: "Recently on Instagram",
  },
];

interface TestimonialsSliderProps {
  reviews?: CustomerReview[];
  title?: string;
  subtitle?: string;
}

export function TestimonialsSlider({
  reviews = DEFAULT_CUSTOMER_REVIEWS,
  title = "What Our Borrowers Say",
  subtitle = "Real stories of rapid sanctions, lowest interest rates, and seamless disbursals.",
}: TestimonialsSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
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
    <section className="py-20 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 text-slate-800 text-xs font-bold border border-purple-200/60 shadow-xs">
              <span className="material-symbols-outlined text-[16px] text-[#BB0119]">
                favorite
              </span>
              <span>Client Reviews &amp; Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Navigation Controls (Desktop Top Right) */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Previous Review"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm hover:border-[#0B2E8D] hover:bg-blue-50 text-slate-700 hover:text-[#0B2E8D] flex items-center justify-center transition-all duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-[22px]">chevron_left</span>
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next Review"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm hover:border-[#0B2E8D] hover:bg-blue-50 text-slate-700 hover:text-[#0B2E8D] flex items-center justify-center transition-all duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-[22px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Carousel Slider Viewport */}
        <div className="overflow-hidden -mx-4 px-4 py-2" ref={emblaRef}>
          <div className="flex touch-pan-y gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
              >
                <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#0B2E8D]/30 transition-all duration-300 flex flex-col justify-between relative group">
                  {/* Top Quote & Rating Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      {/* 5-Star Rating Row */}
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: rev.rating }).map((_, sIdx) => (
                          <span
                            key={sIdx}
                            className="material-symbols-outlined text-[18px] fill-current"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>
                        ))}
                      </div>

                      {/* Loan Tag Badge */}
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {rev.loanType}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed line-clamp-4 group-hover:text-slate-900 transition-colors">
                      &ldquo;{rev.reviewText}&rdquo;
                    </p>
                  </div>

                  {/* Customer Profile Bottom Footer */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
                    {/* Avatar with gradient ring */}
                    <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 flex-shrink-0">
                      <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                        <Image
                          src={rev.avatarUrl}
                          alt={rev.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Name & Handle / Role */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-sm text-slate-900 truncate">
                          {rev.name}
                        </h4>
                        <span className="material-symbols-outlined text-blue-600 text-[16px] flex-shrink-0">
                          verified
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate">
                        {rev.role} • {rev.city}
                      </p>
                      {rev.handle && (
                        <p className="text-[11px] font-medium text-purple-600 truncate">
                          {rev.handle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {scrollSnaps.map((_, dotIdx) => {
            const isDotActive = dotIdx === selectedIndex;
            return (
              <button
                key={dotIdx}
                onClick={() => scrollTo(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full h-2 focus:outline-none ${
                  isDotActive
                    ? "w-8 bg-[#0B2E8D]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            );
          })}
        </div>

        {/* Instagram Trust Callout */}
        {BRAND_CONFIG.social.instagram && (
          <div className="mt-12 text-center">
            <a
              href={BRAND_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 hover:from-purple-100 hover:to-pink-100 border border-purple-200/80 text-xs font-bold text-purple-950 transition-all shadow-xs group"
            >
              <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 text-white flex items-center justify-center text-[11px] font-bold">
                📷
              </span>
              <span>View More Client Video Reviews on Our Instagram</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform text-purple-700">
                open_in_new
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default TestimonialsSlider;
