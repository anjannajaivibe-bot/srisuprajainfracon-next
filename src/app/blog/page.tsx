import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BlogSearch from "@/components/blog/BlogSearch";
import NewsletterSubscribe from "@/components/blog/NewsletterSubscribe";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const SITE_URL = "https://www.srisuprajainfracon.com";
const NEWSLETTER_ENABLED = process.env.NEWSLETTER_ENABLED === "true";

const consolidatedBlogSlugs = new Set([
  "open-plots-in-hyderabad",
  "best-open-plots-in-hyderabad-for-sale",
  "top-open-plots-resorts-hyderabad",
  "best-open-plots-resorts-in-hyderabad",
  "dtcp-approved-plots-in-hyderabad",
]);

type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  date: string;
  modified?: string;
  featuredImage?: string;
  excerpt?: string;
  content?: string;
  category?: string;
  readingTime?: number;
};

export const metadata: Metadata = {
  title: "Investor Knowledge Center",
  description:
    "Explore real estate investment guides, buyer checklists, legal insights, plotted development tips, and Hyderabad real estate market updates by Sri Supraja Infracon.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Investor Knowledge Center | Sri Supraja Infracon",
    description:
      "Practical real estate guides, plot buying checklists, legal insights, and investment knowledge for informed property decisions.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function calculateReadingTime(content = "") {
  const words = stripHtml(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const post = JSON.parse(
        fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
      );

      return {
        slug: post.slug,
        title: post.title,
        date: post.date,
        modified: post.modified,
        featuredImage: post.featuredImage,
        excerpt: stripHtml(post.excerpt || post.metaDescription || ""),
        category: post.category || "Investment Guide",
        readingTime: calculateReadingTime(post.content || ""),
      };
    })
    .filter((post) => !consolidatedBlogSlugs.has(post.slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const posts = getPosts();
  const featuredPost = posts[0];

  return (
    <main className="min-h-screen bg-[#f8f6f1]">
      <section className="bg-[#12251d] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d6b56d]">
            Sri Supraja Insights
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
            Investor Knowledge Center
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">
            Practical guides, buyer checklists, legal explanations and Hyderabad
            real estate insights designed to support informed property decisions.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group grid overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:shadow-xl lg:grid-cols-2"
          >
            <div className="relative min-h-[320px] overflow-hidden bg-gray-100">
              {featuredPost.featuredImage && (
                <Image
                  src={featuredPost.featuredImage}
                  alt={stripHtml(featuredPost.title)}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              )}
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#12251d] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
                  Featured Article
                </span>
                <span className="rounded-full bg-[#f5efe2] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#8f6f2e]">
                  {featuredPost.category}
                </span>
              </div>
              <p className="mt-5 text-sm font-medium text-[#b08a3c]">
                {formatDate(featuredPost.date)} • {featuredPost.readingTime} min read
              </p>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight text-[#12251d] md:text-4xl"
                dangerouslySetInnerHTML={{ __html: featuredPost.title }}
              />
              <p className="mt-5 line-clamp-4 text-gray-600">
                {featuredPost.excerpt}
              </p>
              <span className="mt-8 font-semibold text-[#12251d]">
                Read Featured Blog →
              </span>
            </div>
          </Link>
        </section>
      )}

      {NEWSLETTER_ENABLED && (
        <section className="mx-auto max-w-7xl px-6 pt-12">
          <NewsletterSubscribe source="blog-hub" />
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#b08a3c]">
              Latest Investment Guides
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#12251d]">
              Learn Before You Invest
            </h2>
          </div>
          <p className="text-sm font-medium text-gray-600">
            {posts.length} articles published
          </p>
        </div>
        <BlogSearch posts={posts} featuredSlug={featuredPost?.slug} />
      </section>
    </main>
  );
}
