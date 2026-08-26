"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS, BlogPost } from "@/lib/blogData";
import { BRAND_CONFIG } from "@/config/brand";

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
    <div className="pt-24 md:pt-28 pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-slate-50 py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              Financial Knowledge Hub
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Lending Insights, Guides &amp; Market Intelligence
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Expert underwriting strategies, rate trends across 50+ partner banks, CIBIL optimization, and government MSME credit schemes explained by senior lending advisors.
            </p>

            {/* Search Input Bar */}
            <div className="pt-2 max-w-xl mx-auto">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search articles on doctor loans, MSME, LAP, CIBIL..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0B2E8D]/30 focus:border-[#0B2E8D]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
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

        {/* Featured Article Box (if showing All and no search) */}
        {selectedCategory === "All" && searchQuery === "" && (
          <div className="mb-12">
            <div className="bg-gradient-to-br from-[#001A62] via-[#0B2E8D] to-[#001A62] text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative">
              <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#BB0119] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
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
                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 bg-white text-[#001A62] hover:bg-slate-100 font-bold px-5 py-2.5 rounded-xl text-xs shadow transition-all"
                    >
                      <span>Read Full Guide</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                    <span className="text-xs text-blue-200 font-medium">
                      By {featuredPost.author.name}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                    Quick Takeaways:
                  </span>
                  <ul className="space-y-2 text-xs text-blue-50">
                    {featuredPost.keyTakeaways.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-emerald-400 text-[16px] flex-shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:border-[#0B2E8D]/40 interactive-shadow transition-all flex flex-col justify-between"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase px-2.5 py-1 bg-blue-50 text-[#0B2E8D] border border-blue-200/80 rounded-lg">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base md:text-lg leading-snug hover:text-[#0B2E8D] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
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

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-3 text-xs">
                <div className="flex items-center gap-2 pt-3">
                  <div className="w-7 h-7 rounded-full bg-[#001A62] text-white flex items-center justify-center font-bold text-[10px]">
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
                  className="inline-flex items-center gap-1 text-[#0B2E8D] hover:text-[#BB0119] font-bold transition-colors pt-3"
                >
                  <span>Read</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Lead Advisory Banner */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Need Personalized Financial Advice?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Talk to Our Senior Credit Underwriters
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Get an instant portfolio assessment, bank sanction estimation, and personalized rate comparison with zero credit impact.
            </p>
          </div>
          <a
            href={`tel:${BRAND_CONFIG.phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-2 bg-[#BB0119] hover:bg-[#e0292e] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-xs sm:text-sm flex-shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>Call Advisory: {BRAND_CONFIG.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
