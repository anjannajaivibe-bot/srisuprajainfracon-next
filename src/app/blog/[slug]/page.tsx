import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReadingProgress from "@/components/blog/ReadingProgress";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const SITE_URL = "https://srisuprajainfracon.com";

type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  canonical?: string;
  date: string;
  modified?: string;
  featuredImage?: string;
  excerpt?: string;
  content: string;
};

type TocItem = {
  id: string;
  text: string;
  level: number;
};

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

function slugify(text: string) {
  return stripHtml(text)
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function addHeadingIds(content: string) {
  const toc: TocItem[] = [];
  const usedIds = new Map<string, number>();

  const updatedContent = content.replace(
    /<h([2-3])([^>]*)>(.*?)<\/h\1>/gi,
    (match, level, attrs, headingText) => {
      const cleanText = stripHtml(headingText);
      let id = slugify(cleanText);

      if (!id) return match;

      const count = usedIds.get(id) || 0;
      usedIds.set(id, count + 1);

      if (count > 0) id = `${id}-${count + 1}`;

      toc.push({
        id,
        text: cleanText,
        level: Number(level),
      });

      if (attrs.includes("id=")) return match;

      return `<h${level}${attrs} id="${id}">${headingText}</h${level}>`;
    }
  );

  return { content: updatedContent, toc };
}

function getPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function getRelatedPosts(currentSlug: string): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) =>
      JSON.parse(fs.readFileSync(path.join(BLOG_DIR, file), "utf8"))
    )
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
}

export async function generateStaticParams() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => ({
      slug: file.replace(".json", ""),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  const title = post.seoTitle || stripHtml(post.title);
  const description = post.metaDescription || stripHtml(post.excerpt || "");
  const canonical = `${SITE_URL}/blog/${slug}/`;
  const image = post.featuredImage
    ? `${SITE_URL}${post.featuredImage}`
    : `${SITE_URL}/og-image.jpg`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      images: [image],
      publishedTime: post.date,
      modifiedTime: post.modified || post.date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug);
  const { content, toc } = addHeadingIds(post.content);

  const title = stripHtml(post.title);
  const description = post.metaDescription || stripHtml(post.excerpt || "");
  const canonical = `${SITE_URL}/blog/${slug}/`;
  const image = post.featuredImage
    ? `${SITE_URL}${post.featuredImage}`
    : `${SITE_URL}/og-image.jpg`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [image],
    author: {
      "@type": "Organization",
      name: "Sri Supraja Infracon",
    },
    publisher: {
      "@type": "Organization",
      name: "Sri Supraja Infracon",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.jpg`,
      },
    },
    datePublished: post.date,
    dateModified: post.modified || post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonical,
      },
    ],
  };

  return (
    <main className="bg-[#f8f6f1] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#b08a3c]">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/blog/" className="hover:text-[#b08a3c]">
            Blog
          </Link>{" "}
          / <span className="text-[#12251d]">{title}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#b08a3c]">
                  Table of Contents
                </p>

                <nav className="mt-5 space-y-3">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm leading-snug hover:text-[#b08a3c] ${
                        item.level === 3
                          ? "ml-4 text-gray-500"
                          : "text-[#12251d]"
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          <article className="max-w-4xl">
            <p className="text-sm text-[#b08a3c] font-medium">
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            <h1
              className="mt-4 text-4xl md:text-5xl font-semibold text-[#12251d] leading-tight"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />

            {post.featuredImage && (
              <div className="relative mt-10 h-[260px] md:h-[460px] rounded-3xl overflow-hidden bg-gray-100">
                <Image
                  src={post.featuredImage}
                  alt={title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}

            {toc.length > 0 && (
              <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm lg:hidden">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#b08a3c]">
                  Table of Contents
                </p>

                <nav className="mt-5 space-y-3">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-[#12251d] hover:text-[#b08a3c]"
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <div
              className="prose prose-lg max-w-none mt-10 scroll-smooth prose-headings:scroll-mt-28 prose-headings:text-[#12251d] prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-[#12251d] prose-a:text-[#b08a3c] prose-img:rounded-2xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <section className="mt-16 border-t border-gray-200 pt-10">
              <h2 className="text-2xl font-semibold text-[#12251d]">
                Explore Premium Projects
              </h2>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/projects/supraja-iris-resort-plots"
                  className="rounded-full bg-[#12251d] px-5 py-3 text-white hover:bg-[#b08a3c]"
                >
                  Supraja IRIS
                </Link>

                <Link
                  href="/projects/bridge-county"
                  className="rounded-full bg-white px-5 py-3 text-[#12251d] border hover:border-[#b08a3c]"
                >
                  Bridge County
                </Link>

                <Link
                  href="/projects/sindhu-sarovar"
                  className="rounded-full bg-white px-5 py-3 text-[#12251d] border hover:border-[#b08a3c]"
                >
                  Sindhu Sarovar
                </Link>

                <Link
                  href="/projects/"
                  className="rounded-full bg-white px-5 py-3 text-[#12251d] border hover:border-[#b08a3c]"
                >
                  View All Projects
                </Link>
              </div>
            </section>

            {relatedPosts.length > 0 && (
              <section className="mt-16 border-t border-gray-200 pt-10">
                <h2 className="text-2xl font-semibold text-[#12251d]">
                  Related Blogs
                </h2>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}/`}
                      className="rounded-2xl bg-white p-5 shadow-sm hover:shadow-lg transition"
                    >
                      <h3
                        className="text-lg font-semibold text-[#12251d] leading-snug"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                        {stripHtml(item.excerpt || item.metaDescription || "")}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-16 rounded-3xl bg-[#12251d] p-8 text-white">
              <h2 className="text-2xl font-semibold">
                Looking for DTCP & RERA Approved Plots?
              </h2>
              <p className="mt-3 text-white/80">
                Explore premium plotted developments by Sri Supraja Infracon
                across Hyderabad growth corridors.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/projects/"
                  className="rounded-full bg-[#b08a3c] px-6 py-3 font-semibold text-white"
                >
                  Explore Projects
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white"
                >
                  Schedule Site Visit
                </Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}