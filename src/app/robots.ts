import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: "https://www.srisuprajainfracon.com/sitemap.xml",
    host: "https://www.srisuprajainfracon.com",
  };
}
