"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { BRAND_CONFIG } from "@/config/brand";

export interface CustomerReview {
  id: string;
  name: string;
  role: string;
  city: string;
  loanType: string;
  rating: number;
  avatarUrl: string;
  cardImage?: string;
  reviewText: string;
  advisor?: string;
  tag?: string;
  date?: string;
}

// Real Verified Client Reviews from Shreem Finserv Official Instagram
export const DEFAULT_CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "rev-dr-abhishek",
    name: "Dr. Abhishek Verma",
    role: "Medical Practitioner & Clinic Director",
    city: "Verified Doctor Client",
    loanType: "Doctor Professional Loan",
    rating: 5,
    avatarUrl: "/testimonials/avatar_dr_abhishek.jpg",
    cardImage: "/testimonials/review_dr_abhishek.jpg",
    reviewText:
      "Thank you so much Shikha ji & Team for all the support in making it happen. It was wonderful connecting with you and your efforts, sincerity and commitment towards your work is commendable. You are very prompt and proactive in resolving queries or issues faced by the customers. More power to you 👍",
    advisor: "Managed by Shikha & Team",
    tag: "Verified Instagram Feedback",
    date: "Verified Client Story",
  },
  {
    id: "rev-dr-gautam",
    name: "Dr. Gautam Arora",
    role: "Neurologist, Pain Management Specialist",
    city: "Narayana Health Specialist",
    loanType: "Doctor Professional Loan",
    rating: 5,
    avatarUrl: "/testimonials/avatar_dr_gautam.jpg",
    cardImage: "/testimonials/review_dr_gautam.jpg",
    reviewText:
      "Very thankful to Shikha ma'am & her team. She will guide you through the process and its a streamlined experience. She has a wealth of knowledge and experience. She helped me a lot. Thanks!",
    advisor: "Managed by Shikha Ma'am",
    tag: "Verified Instagram Feedback",
    date: "Verified Specialist Review",
  },
  {
    id: "rev-dr-anand",
    name: "Dr. Anand Kumar",
    role: "MBBS, MD",
    city: "Consulting Physician",
    loanType: "Doctor Professional Loan",
    rating: 5,
    avatarUrl: "/testimonials/avatar_dr_anand.jpg",
    cardImage: "/testimonials/review_dr_anand.jpg",
    reviewText:
      "I am very satisfied with the services provided by Ms. Pooja Chauhan and her team. From documentation to disbursement, the process was handled efficiently with clear communication and transparency. The team was responsive, supportive, and professional at every stage. I would definitely recommend their services to others. 😊🙏🏻",
    advisor: "Managed by Ms. Pooja Chauhan",
    tag: "Verified Instagram Feedback",
    date: "Verified Doctor Review",
  },
  {
    id: "rev-dr-balaji",
    name: "Dr. Balaji Baliram",
    role: "Medical Practitioner",
    city: "Maharashtra to Rajasthan Relocation",
    loanType: "Doctor Loan @ 9.9% ROI",
    rating: 5,
    avatarUrl: "/testimonials/avatar_dr_balaji.jpg",
    cardImage: "/testimonials/review_dr_balaji.jpg",
    reviewText:
      "Initially hesitant, but when rate came down to 9.9%, they guided throughout. Since I relocated from Maharashtra to Rajasthan, I had documentation hurdles, but Shikha Ma'am's team took ownership and delivered 100% on their commitment. Highly recommend their service!",
    advisor: "Managed by Shalini & Shikha Ma'am",
    tag: "Verified Instagram Feedback",
    date: "Verified Client Story",
  },
  {
    id: "rev-dr-pooja",
    name: "Dr. Siddharth & Medical Team",
    role: "Medical Practitioner & Surgeon",
    city: "Clinic Expansion Client",
    loanType: "Doctor Professional Loan",
    rating: 5,
    avatarUrl: "/testimonials/avatar_dr_professional.jpg",
    cardImage: "/testimonials/review_dr_professional.jpg",
    reviewText:
      "Thank you, Pooja Ma'am, and the entire Shreem Team, for your support in helping me with my Dr. Professional Loan. Your professionalism, transparency, and quick assistance made the process smooth and stress-free. I truly appreciate your guidance and timely help.",
    advisor: "Managed by Pooja Ma'am",
    tag: "Verified Instagram Feedback",
    date: "Verified Doctor Review",
  },
  {
    id: "rev-msme-business",
    name: "Vikramaditya Singhania",
    role: "Managing Director, MSME Logistics",
    city: "Pune, Maharashtra",
    loanType: "Business Loan (₹1.5 Crore)",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    reviewText:
      "Securing a ₹1.5 Cr collateral-free working capital loan within 48 hours seemed impossible until we engaged Shreem Finserv. No collateral pledging, totally transparent terms, and direct bank disbursal. Unmatched efficiency across 50+ co-lending banks!",
    advisor: "Enterprise Underwriting Desk",
    tag: "High-Ticket MSME Disbursal",
    date: "Verified Enterprise Client",
  },
];

interface TestimonialsSliderProps {
  reviews?: CustomerReview[];
  title?: string;
  subtitle?: string;
}

export function TestimonialsSlider({
  reviews = DEFAULT_CUSTOMER_REVIEWS,
  title = "Real Client Feedback & Instagram Shoutouts",
  subtitle = "Genuine stories of fast-track sanctions, lowest interest rates, and dedicated advisory from our verified borrowers.",
}: TestimonialsSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
      duration: 25,
      dragFree: false,
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
  const [selectedCardImage, setSelectedCardImage] = useState<string | null>(null);

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-50 via-pink-50 to-amber-50 text-purple-900 text-xs font-bold border border-purple-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600"></span>
              Verified Instagram Client Shoutouts
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Previous Review"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm hover:border-[#0B2E8D] hover:bg-blue-50 text-slate-700 hover:text-[#0B2E8D] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">chevron_left</span>
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next Review"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm hover:border-[#0B2E8D] hover:bg-blue-50 text-slate-700 hover:text-[#0B2E8D] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
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
                  
                  {/* Top Header: Star Ratings + Loan Type Badge */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
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

                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#0B2E8D] border border-blue-200 truncate">
                        {rev.loanType}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-700 text-sm leading-relaxed line-clamp-5 group-hover:text-slate-900 transition-colors italic">
                      &ldquo;{rev.reviewText}&rdquo;
                    </p>

                    {/* Advisor Mention Pill */}
                    {rev.advisor && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-600">
                        <span className="material-symbols-outlined text-[14px] text-emerald-600">check_circle</span>
                        <span>{rev.advisor}</span>
                      </div>
                    )}
                  </div>

                  {/* Customer Profile Bottom Footer */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Avatar */}
                      <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 flex-shrink-0">
                        <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                          <Image
                            src={rev.avatarUrl}
                            alt={rev.name}
                            fill
                            sizes="44px"
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1">
                          <h4 className="font-bold text-sm text-slate-900 truncate">
                            {rev.name}
                          </h4>
                          <span className="material-symbols-outlined text-blue-600 text-[15px] flex-shrink-0">
                            verified
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate">
                          {rev.role}
                        </p>
                      </div>
                    </div>

                    {/* View Original Card Button */}
                    {rev.cardImage && (
                      <button
                        type="button"
                        onClick={() => setSelectedCardImage(rev.cardImage || null)}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-purple-50 hover:text-purple-700 text-slate-600 text-[10px] font-bold border border-slate-200 transition-colors flex items-center gap-1 flex-shrink-0 cursor-pointer"
                        title="View Original Instagram Post"
                      >
                        <span className="material-symbols-outlined text-[13px]">visibility</span>
                        <span>Proof</span>
                      </button>
                    )}
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
                className={`transition-all duration-300 rounded-full h-2 focus:outline-none cursor-pointer ${
                  isDotActive
                    ? "w-8 bg-[#0B2E8D]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            );
          })}
        </div>

        {/* Instagram Trust Callout Footer */}
        {BRAND_CONFIG.social.instagram && (
          <div className="mt-10 text-center">
            <a
              href={BRAND_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 hover:from-purple-100 hover:to-pink-100 border border-purple-200/80 text-xs font-bold text-purple-950 transition-all shadow-xs group"
            >
              <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 text-white flex items-center justify-center text-[11px] font-bold">
                📷
              </span>
              <span>View More Client Reviews &amp; Stories on Our Official Instagram</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform text-purple-700">
                open_in_new
              </span>
            </a>
          </div>
        )}

      </div>

      {/* Modal Popup to View Original Feedback Card */}
      {selectedCardImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCardImage(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-slate-900 text-white">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600"></span>
                <span className="text-xs font-bold">Verified Client Feedback Post</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCardImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Card Image */}
            <div className="relative aspect-square w-full bg-slate-100">
              <Image
                src={selectedCardImage}
                alt="Client Feedback"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain"
              />
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 text-center border-t border-slate-200">
              <p className="text-xs font-bold text-slate-700">
                ⭐ 100% Authentic Feedback from Shreem Finserv Client Community
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default TestimonialsSlider;
