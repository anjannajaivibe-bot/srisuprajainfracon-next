import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  date: string;
  featuredImage?: string;
  excerpt?: string;
};

export const metadata: Metadata = {
  title: "Blog | Sri Supraja Infracon",
  description:
    "Read expert insights on DTCP approved plots, RERA approved plots, gated community plots, resort plots, and real estate investment in Hyderabad.",
  alternates: {
    canonical: "https://srisuprajainfracon.com/blog/",
  },
};

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "");
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
      return post;
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="bg-[#f8f6f1] min-h-screen">
      <section className="bg-[#12251d] text-white px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#d6b56d]">
            Sri Supraja Insights
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold">
            Real Estate Blogs
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-white/80 text-lg">
            Expert insights on open plots, resort plots, gated communities,
            DTCP approvals, RERA approvals, and Hyderabad growth corridors.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}/`}>
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  {post.featuredImage && (
                    <Image
                      src={post.featuredImage}
                      alt={stripHtml(post.title)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                <div className="p-7">
                  <p className="text-sm text-[#b08a3c] font-medium">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <h2
                    className="mt-3 text-2xl font-semibold text-[#12251d] leading-snug group-hover:text-[#b08a3c] transition"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />

                  <p className="mt-4 text-gray-600 line-clamp-3">
                    {stripHtml(post.excerpt || post.metaDescription || "")}
                  </p>

                  <span className="inline-block mt-6 text-[#12251d] font-semibold">
                    Read Article →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}