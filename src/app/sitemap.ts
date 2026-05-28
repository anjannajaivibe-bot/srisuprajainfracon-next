import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.suprajainfracon.com";

  return [
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

    /* SEO Landing Pages */

    {
      url: `${baseUrl}/open-plots-and-resorts-in-hyderabad/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    /*
    Future SEO Pages
    Uncomment once pages are created

    {
      url: `${baseUrl}/resort-plots-in-hyderabad/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${baseUrl}/gated-community-plots-in-hyderabad/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${baseUrl}/hmda-approved-open-plots-hyderabad/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${baseUrl}/open-plots-vs-apartments/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    */

    /* Project Pages */

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
      url: `${baseUrl}/projects/subash-meadows/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.92,
    },
  ];
}