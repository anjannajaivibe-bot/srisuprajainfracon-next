import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const baseUrl = "https://www.srisuprajainfracon.com";

const consolidatedBlogSlugs = new Set([
  "open-plots-in-hyderabad",
  "best-open-plots-in-hyderabad-for-sale",
  "top-open-plots-resorts-hyderabad",
  "best-open-plots-resorts-in-hyderabad",
  "dtcp-approved-plots-in-hyderabad",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/contact-us`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${baseUrl}/open-plots-and-resorts-in-hyderabad`,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/project-verification`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/telangana-plot-verification`,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/projects/supraja-iris-resort-plots`,
      changeFrequency: "weekly",
      priority: 0.98,
    },
    {
      url: `${baseUrl}/projects/bridge-county`,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/projects/sindhu-sarovar`,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/projects/subhash-meadows`,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/editorial-policy`,
      changeFrequency: "monthly",
      priority: 0.55,
    },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  let blogPages: MetadataRoute.Sitemap = [];

  if (fs.existsSync(BLOG_DIR)) {
    blogPages = fs
      .readdirSync(BLOG_DIR)
      .filter((file) => file.endsWith(".json"))
      .map((file) =>
        JSON.parse(fs.readFileSync(path.join(BLOG_DIR, file), "utf8"))
      )
      .filter((post) => !consolidatedBlogSlugs.has(post.slug))
      .map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.modified || post.date),
        changeFrequency: "monthly" as const,
        priority: 0.75,
      }));
  }

  return [...staticPages, ...blogPages];
}
