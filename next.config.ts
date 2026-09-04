import type { NextConfig } from "next";

const legacyBlogSlugs = [
  "upcoming-attractions-near-hyderabad-2026",
  "what-is-dtcp-approval-in-hyderabad",
  "kamkole-real-estate-investment-hotspot",
  "dtcp-rera-approved-plots-in-hyderabad",
  "open-villa-plot-projects-in-hyderabad",
  "upcoming-developing-areas-in-hyderabad-2026",
  "best-plots-in-hyderabad",
  "hyderabad-investment-areas",
  "rera-approved-plots-hyderabad-guide",
  "plots-near-orr-hyderabad",
  "hyderabad-real-estate-market-trends-2025",
  "open-plots-in-hyderabad-investment-2025",
];

const consolidatedBlogRedirects = [
  {
    slug: "open-plots-in-hyderabad",
    destination: "/open-plots-and-resorts-in-hyderabad",
  },
  {
    slug: "best-open-plots-in-hyderabad-for-sale",
    destination: "/open-plots-and-resorts-in-hyderabad",
  },
  {
    slug: "top-open-plots-resorts-hyderabad",
    destination: "/open-plots-and-resorts-in-hyderabad",
  },
  {
    slug: "best-open-plots-resorts-in-hyderabad",
    destination: "/open-plots-and-resorts-in-hyderabad",
  },
  {
    slug: "dtcp-approved-plots-in-hyderabad",
    destination: "/blog/dtcp-rera-approved-plots-in-hyderabad",
  },
  {
    slug: "kamkole-real-estate-investment-guide",
    destination: "/blog/kamkole-real-estate-investment-hotspot",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  async redirects() {
    return [
      // Invalid and obsolete URLs reported in Google Search Console.
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/&",
        destination: "/",
        permanent: true,
      },
      {
        source: "/$",
        destination: "/",
        permanent: true,
      },

      // Consolidate overlapping search-intent content into stronger authority URLs.
      ...consolidatedBlogRedirects.flatMap(({ slug, destination }) => [
        {
          source: `/blog/${slug}`,
          destination,
          permanent: true,
        },
        {
          source: `/blog/${slug}/`,
          destination,
          permanent: true,
        },
        {
          source: `/${slug}`,
          destination,
          permanent: true,
        },
        {
          source: `/${slug}/`,
          destination,
          permanent: true,
        },
      ]),

      // Obsolete internal URLs retained for visitors and search engines.
      {
        source: "/resort-plots-in-hyderabad",
        destination: "/projects/supraja-iris-resort-plots",
        permanent: true,
      },
      {
        source: "/open-plots-in-west-hyderabad-mumbai-highway",
        destination: "/open-plots-and-resorts-in-hyderabad",
        permanent: true,
      },
      {
        source: "/gated-community-plots-in-hyderabad",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/hmda-approved-open-plots-hyderabad",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/is-this-a-good-time-to-buy-plots-in-hyderabad",
        destination: "/blog/hyderabad-real-estate-market-trends-2025",
        permanent: true,
      },
      {
        source: "/open-plots-vs-apartments-investment-guide",
        destination: "/blog/open-plots-in-hyderabad-investment-2025",
        permanent: true,
      },
      {
        source: "/best-investment-opportunity-in-hyderabad",
        destination: "/blog/hyderabad-investment-areas",
        permanent: true,
      },
      {
        source: "/best-open-plot-developers-in-hyderabad",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/supraja-vs-generic-layouts",
        destination: "/projects",
        permanent: true,
      },

      // Contact page redirects.
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/contact-us",
        permanent: true,
      },

      // Legacy root-level blog URL redirects.
      ...legacyBlogSlugs.flatMap((slug) => [
        {
          source: `/${slug}`,
          destination: `/blog/${slug}`,
          permanent: true,
        },
        {
          source: `/${slug}/`,
          destination: `/blog/${slug}`,
          permanent: true,
        },
      ]),
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/:path*.ico",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/manifest.webmanifest",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
