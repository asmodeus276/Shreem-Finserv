"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blogData";
import { BRAND_CONFIG } from "@/config/brand";
import { InnerBanner } from "@/components/InnerBanner";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Doctor Loans",
    "MSME & Business",
    "Credit Score",
    "Secured Loans",
    "Women Finance",
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16">
      
      {/* Capital Need Style Banner */}
      <InnerBanner
        badge="FINANCIAL KNOWLEDGE HUB"
        badgeIcon="menu_book"
        title="Lending Insights &amp;"
        highlightText="Market Intelligence"
        subtitle="Expert underwriting strategies, rate trends across 50+ partner banks, CIBIL optimization, and government MSME credit schemes explained by senior lending advisors."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
          { label: "Articles & Guides" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        imageAlt="Shreem Finserv Financial Insights and Research"
        ctaText="Explore Latest Guides"
        ctaLink="#articles-grid"
        quickStats={[
          { label: "Research Guides", value: "25+ Articles" },
          { label: "Author Bench", value: "Senior Underwriters" },
          { label: "Topics", value: "MSME, Doctors, LAP" },
          { label: "Access", value: "100% Free" },
        ]}
      />

      <div id="articles-grid" className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[#001A62] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[280px]">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>
            <input
              type="text"
              placeholder="Search articles & topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#001A62]/30"
            />
          </div>
        </div>

        {/* Featured Article Box (if showing All and no search) */}
        {selectedCategory === "All" && searchQuery === "" && (
          <div className="mb-12">
            <div className="bg-gradient-to-br from-[#001A62] via-[#0B2E8D] to-[#001A62] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden relative group">
              <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#BB0119] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-sm">
                      Featured Guide
                    </span>
                    <span className="text-xs text-blue-200 font-medium">
                      {featuredPost.date} • {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="hover:text-blue-200 transition-colors"
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 bg-white text-[#001A62] hover:bg-blue-50 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all group-hover:shadow-lg"
                    >
                      <span>Read Full Guide</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                    <span className="text-xs text-blue-200 font-medium">
                      By {featuredPost.author.name} • {featuredPost.author.role}
                    </span>
                  </div>
                </div>

                {/* Right side Featured Image Container */}
                <div className="lg:col-span-5 relative">
                  <div className="relative h-64 sm:h-72 lg:h-80 w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 border border-white/40 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-emerald-600 text-base">verified</span>
                        <span className="text-xs font-bold text-slate-800">Verified Underwriter Guide</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#001A62] bg-blue-50 px-2.5 py-0.5 rounded-md">2026 Edition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:border-[#001A62]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image Header */}
                <Link href={`/blog/${post.slug}`} className="block relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20"></div>
                  
                  {/* Category Pill Floating */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase px-3 py-1 bg-white/95 backdrop-blur-md text-[#001A62] rounded-lg shadow-sm border border-white/50">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time Pill Floating */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-semibold text-white/95 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-2.5 left-3 text-[11px] font-medium text-white/90 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-amber-300">verified</span>
                    <span>Research Advisory</span>
                  </div>
                </Link>

                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="font-bold text-slate-900 text-base md:text-lg leading-snug group-hover:text-[#001A62] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs mt-2">
                <div className="flex items-center gap-2 pt-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#001A62] to-[#0B2E8D] text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
                    {post.author.avatarInitials}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 leading-tight">
                      {post.author.name}
                    </div>
                    <span className="text-[10px] text-slate-400">
                      {post.date}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-[#001A62] group-hover:text-[#BB0119] font-bold transition-colors pt-3"
                >
                  <span>Read Guide</span>
                  <span className="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Lead Advisory Banner */}
        <div className="mt-16 bg-[#001A62] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Need Personalized Financial Advice?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Talk to Our Senior Credit Underwriters
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm max-w-xl">
              Get an instant portfolio assessment, bank sanction estimation, and personalized rate comparison with zero credit impact.
            </p>
          </div>
          <a
            href={`tel:${BRAND_CONFIG.phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-2 bg-[#BB0119] hover:bg-[#9c0115] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-xs sm:text-sm flex-shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>Call Advisory: {BRAND_CONFIG.phoneDisplay}</span>
          </a>
        </div>

      </div>
      <PartnerMarquee />
    </div>
  );
}
