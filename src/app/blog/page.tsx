import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BlogSearch from "@/components/blog/BlogSearch";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const SITE_URL = "https://srisuprajainfracon.com";

type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  date: string;
  modified?: string;
  featuredImage?: string;
  excerpt?: string;
};

export const metadata: Metadata = {
  title: "Blog | Sri Supraja Infracon",
  description:
    "Read expert insights on DTCP approved plots, RERA approved plots, gated community plots, resort plots, and real estate investment in Hyderabad.",
  alternates: {
    canonical: `${SITE_URL}/blog/`,
  },
  openGraph: {
    title: "Blog | Sri Supraja Infracon",
    description:
      "Expert insights on open plots, resort plots, gated communities, DTCP approvals, RERA approvals, and Hyderabad growth corridors.",
    url: `${SITE_URL}/blog/`,
    type: "website",
  },
};

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
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
        ...post,
        title: post.title,
        excerpt: stripHtml(post.excerpt || post.metaDescription || ""),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const posts = getPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-[#f8f6f1]">
      <section className="bg-[#12251d] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d6b56d]">
            Sri Supraja Insights
          </p>

          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
            Hyderabad Real Estate Insights
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">
            Expert insights on open plots, resort plots, gated communities,
            DTCP approvals, RERA approvals, and Hyderabad growth corridors.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <Link
            href={`/blog/${featuredPost.slug}/`}
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
              <p className="text-sm font-semibold uppercase tracking-widest text-[#b08a3c]">
                Featured Article
              </p>

              <p className="mt-5 text-sm font-medium text-[#b08a3c]">
                {new Date(featuredPost.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
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

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#b08a3c]">
            Latest Articles
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#12251d]">
            Explore Real Estate Insights
          </h2>
        </div>

        <BlogSearch posts={remainingPosts} />
      </section>
    </main>
  );
}
