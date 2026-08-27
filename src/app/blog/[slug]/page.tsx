import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blogData";
import { BRAND_CONFIG } from "@/config/brand";
import { LeadForm } from "@/components/LeadForm";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Shreem Finserv Blog`,
    description: post.excerpt,
    keywords: [...post.tags, "Shreem Finserv Blog", "Loan Guide India"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16">
      
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 overflow-x-auto whitespace-nowrap">
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-[#0B2E8D]">Home</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link href="/blog" className="hover:text-[#0B2E8D]">Knowledge Hub</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-[#0B2E8D] font-bold">{post.category}</span>
        </nav>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 space-y-6">
            
            {/* Header Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase px-3 py-1 bg-blue-50 text-[#0B2E8D] border border-blue-200 rounded-lg">
                  {post.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {post.date} • {post.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                {post.title}
              </h1>

              {/* Author Strip */}
              <div className="flex items-center gap-3 pt-2 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-full bg-[#001A62] text-white flex items-center justify-center font-bold text-sm">
                  {post.author.avatarInitials}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{post.author.name}</div>
                  <div className="text-xs text-slate-500">{post.author.role} • Shreem Finserv Advisory</div>
                </div>
              </div>
            </div>

            {/* Key Takeaways Callout Card */}
            <div className="bg-blue-50/80 border border-blue-200/90 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 font-bold text-[#0B2E8D] text-sm">
                <span className="material-symbols-outlined text-[20px]">lightbulb</span>
                <span>Executive Summary &amp; Key Highlights</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {post.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px] flex-shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Body Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed pt-2">
              {post.content.map((paragraph, index) => {
                const isHeading = paragraph.includes(":\n") || paragraph.startsWith("Step ");
                return (
                  <div key={index} className="space-y-2">
                    {paragraph.split("\n").map((line, lIdx) => {
                      if (line.endsWith(":") || line.includes("Criteria") || line.includes("Checklist") || line.includes("Revolution")) {
                        return (
                          <h3 key={lIdx} className="text-lg md:text-xl font-bold text-slate-900 pt-3 pb-1">
                            {line}
                          </h3>
                        );
                      }
                      if (line.startsWith("•") || line.startsWith("1.") || line.startsWith("2.") || line.startsWith("3.") || line.startsWith("4.")) {
                        return (
                          <p key={lIdx} className="pl-4 border-l-2 border-[#0B2E8D]/30 text-slate-600 font-medium text-xs sm:text-sm my-1">
                            {line}
                          </p>
                        );
                      }
                      return <p key={lIdx}>{line}</p>;
                    })}
                  </div>
                );
              })}
            </div>

            {/* Tags Strip */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Tags:</span>
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Related Product Action Card */}
            {post.relatedProductSlug && (
              <div className="bg-gradient-to-r from-[#001A62] to-[#0B2E8D] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Apply Directly Online
                  </span>
                  <h3 className="text-xl font-black">
                    Ready to Explore {post.relatedProductName}?
                  </h3>
                  <p className="text-xs text-blue-100 max-w-md">
                    Check your eligibility across 50+ co-lenders with minimal paperwork and zero upfront charges.
                  </p>
                </div>
                <Link
                  href={post.relatedProductSlug}
                  className="bg-[#BB0119] hover:bg-[#e0292e] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow flex-shrink-0 flex items-center gap-1.5 transition-all"
                >
                  <span>Explore Product</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            )}

            {/* Related Articles Strip */}
            <div className="pt-8 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Recommended Financial Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="p-4 bg-slate-50 hover:bg-white border border-slate-200 rounded-2xl transition-all shadow-sm group"
                  >
                    <span className="text-[10px] font-bold text-[#0B2E8D] uppercase block mb-1">
                      {rel.category}
                    </span>
                    <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#0B2E8D] transition-colors leading-snug">
                      {rel.title}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium block mt-2">
                      {rel.readTime}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </article>

          {/* Right Column: Sticky Lead Capture Form & Advisory Box */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              <LeadForm
                title="Instant Sanction Estimate"
                subtitle="Compare bank offers with zero impact on credit score."
              />

              {/* Direct Advisory Contact Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-2xl">support_agent</span>
                </div>
                <div className="font-bold text-slate-900 text-sm">
                  Need Help Deciding?
                </div>
                <p className="text-xs text-slate-500">
                  Speak directly with an authorized Shreem Finserv senior lending manager.
                </p>
                <a
                  href={`tel:${BRAND_CONFIG.phone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center justify-center gap-1.5 w-full bg-[#001A62] hover:bg-[#0B2E8D] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  <span>{BRAND_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
