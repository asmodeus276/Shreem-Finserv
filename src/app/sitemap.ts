import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shreemfinserv.com";
  const currentDate = new Date();

  // Core Static Routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/personal-loan/for-doctors`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business-loan/msme-working-capital`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/loan-against-property`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/machinery-loan`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/personal-loan/urgent-cash`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/business-loan/for-women`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/credit-score`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partner`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/track-application`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/media`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/compliance`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ];

  // Dynamic Blog Routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogRoutes];
}
