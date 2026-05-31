import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const baseUrl = "https://www.suprajainfracon.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/open-plots-and-resorts-in-hyderabad/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects/supraja-iris-resort-plots/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.98,
    },
    {
      url: `${baseUrl}/projects/bridge-county/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/projects/sindhu-sarovar/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/projects/subhash-meadows/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.92,
    },
  ];

  let blogPages: MetadataRoute.Sitemap = [];

  if (fs.existsSync(BLOG_DIR)) {
    blogPages = fs
      .readdirSync(BLOG_DIR)
      .filter((file) => file.endsWith(".json"))
      .map((file) => {
        const post = JSON.parse(
          fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
        );

        return {
          url: `${baseUrl}/blog/${post.slug}/`,
          lastModified: new Date(post.modified || post.date),
          changeFrequency: "monthly" as const,
          priority: 0.75,
        };
      });
  }

  return [...staticPages, ...blogPages];
}
