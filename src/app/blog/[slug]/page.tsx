import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReadingProgress from "@/components/blog/ReadingProgress";
import { extractFaqSchema } from "@/lib/blog-schema";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const SITE_URL = "https://www.srisuprajainfracon.com";

type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  canonical?: string;
  date: string;
  modified?: string;
  updatedAt?: string;
  featuredImage?: string;
  excerpt?: string;
  content: string;
  category?: string;
  tags?: string[];
  author?: string;
};

type TocItem = {
  id: string;
  text: string;
  level: number;
};

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function slugify(text: string) {
  return stripHtml(text)
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function calculateReadingTime(content: string) {
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

      toc.push({ id, text: cleanText, level: Number(level) });

      if (attrs.includes("id=")) return match;

      return `<h${level}${attrs} id="${id}">${headingText}</h${level}>`;
    }
  );

  return { content: updatedContent, toc };
}

function readPostFile(file: string): BlogPost {
  const filePath = path.join(BLOG_DIR, file);
  const stats = fs.statSync(filePath);
  const post = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    ...post,
    tags: Array.isArray(post.tags) ? post.tags : [],
    category: post.category || "Investment Guide",
    author: post.author || "Sri Supraja Infracon Editorial Team",
    updatedAt: stats.mtime.toISOString(),
    modified: post.modified || stats.mtime.toISOString(),
  };
}

function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".json"))
    .map(readPostFile)
    .sort(
      (a, b) =>
        new Date(b.updatedAt || b.modified || b.date).getTime() -
        new Date(a.updatedAt || a.modified || a.date).getTime()
    );
}

function getPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return readPostFile(`${slug}.json`);
}

function getRelatedPosts(currentPost: BlogPost): BlogPost[] {
  const currentTags = new Set(
    (currentPost.tags || []).map((tag) => tag.toLowerCase())
  );

  return getAllPosts()
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      const matchingTags = (post.tags || []).filter((tag) =>
        currentTags.has(tag.toLowerCase())
      ).length;

      const sameCategory = post.category === currentPost.category ? 1 : 0;

      return {
        post,
        score: matchingTags * 3 + sameCategory,
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;

      return (
        new Date(b.post.updatedAt || b.post.modified || b.post.date).getTime() -
        new Date(a.post.updatedAt || a.post.modified || a.post.date).getTime()
      );
    })
    .slice(0, 3)
    .map((item) => item.post);
}

function getPreviousNextPosts(currentSlug: string) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === currentSlug);

  return {
    previousPost: index > 0 ? posts[index - 1] : null,
    nextPost: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
  };
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
  const canonical = post.canonical || `${SITE_URL}/blog/${slug}/`;
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
      images: [
        {
          url: image,
          width: 1600,
          height: 900,
          alt: stripHtml(post.title),
        },
      ],
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.modified || post.date,
      authors: [post.author || "Sri Supraja Infracon Editorial Team"],
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

  const relatedPosts = getRelatedPosts(post);
  const { previousPost, nextPost } = getPreviousNextPosts(slug);
  const { content, toc } = addHeadingIds(post.content);

  const title = stripHtml(post.title);
  const description = post.metaDescription || stripHtml(post.excerpt || "");
  const canonical = post.canonical || `${SITE_URL}/blog/${slug}/`;
  const image = post.featuredImage
    ? `${SITE_URL}${post.featuredImage}`
    : `${SITE_URL}/og-image.jpg`;

  const readingTime = calculateReadingTime(post.content);
  const category = post.category || "Investment Guide";
  const author = post.author || "Sri Supraja Infracon Editorial Team";

  const formattedDate = formatDate(post.date);
  const formattedModifiedDate = formatDate(
    post.updatedAt || post.modified || post.date
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [image],
    author: {
      "@type": "Organization",
      name: author,
      url: SITE_URL,
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
    dateModified: post.updatedAt || post.modified || post.date,
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
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: title, item: canonical },
    ],
  };

  const faqSchema = extractFaqSchema(content);

  return (
    <main className="min-h-screen bg-[#f8f6f1]">
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
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

        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b08a3c]">
                  Table of Contents
                </p>

                <nav className="mt-5 space-y-3">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm leading-snug transition hover:text-[#b08a3c] ${
                        item.level === 3
                          ? "ml-4 text-gray-500"
                          : "font-medium text-[#12251d]"
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          <article className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#b08a3c]">
              <span>{category}</span>
              <span className="text-gray-400">•</span>
              <span>Published {formattedDate}</span>
              <span className="text-gray-400">•</span>
              <span>Updated {formattedModifiedDate}</span>
              <span className="text-gray-400">•</span>
              <span>{readingTime} min read</span>
            </div>

            <h1
              className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[#12251d] md:text-5xl"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />

            <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-600">
              <span>By {author}</span>
            </div>

            {post.metaDescription && (
              <p className="mt-6 max-w-4xl text-lg leading-8 text-[#3d463f]">
                {post.metaDescription}
              </p>
            )}

            {post.featuredImage && (
              <div className="relative mt-10 h-[260px] overflow-hidden rounded-3xl bg-gray-100 shadow-sm md:h-[460px]">
                <Image
                  src={post.featuredImage}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
            )}

            {toc.length > 0 && (
              <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm lg:hidden">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b08a3c]">
                  Table of Contents
                </p>

                <nav className="mt-5 space-y-3">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm font-medium text-[#12251d] hover:text-[#b08a3c]"
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <div
              className="
                prose prose-lg md:prose-xl mt-12 max-w-none scroll-smooth
                prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:tracking-tight prose-headings:text-[#12251d]
                prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-[#d6c7a3] prose-h2:pb-3 prose-h2:text-3xl md:prose-h2:text-4xl
                prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-2xl md:prose-h3:text-3xl
                prose-p:mb-7 prose-p:leading-9 prose-p:text-[#3d463f]
                prose-strong:text-[#12251d]
                prose-a:font-semibold prose-a:text-[#b08a3c] prose-a:no-underline hover:prose-a:text-[#8f6f2e]
                prose-ul:my-8 prose-ol:my-8 prose-li:mb-2 prose-li:leading-8 prose-li:text-[#3d463f]
                prose-img:my-12 prose-img:rounded-3xl prose-img:shadow-lg
                prose-blockquote:rounded-r-2xl prose-blockquote:border-l-[#b08a3c] prose-blockquote:bg-[#f5efe2] prose-blockquote:px-6 prose-blockquote:py-4
                prose-table:border prose-table:border-collapse prose-th:bg-[#12251d] prose-th:p-4 prose-th:text-white prose-td:p-4
              "
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-[#12251d]">
                About the Editorial Team
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                Sri Supraja Infracon Editorial Team creates practical real
                estate guides to help buyers understand plot investment,
                documentation, approvals, registration, and long-term property
                decisions with better clarity.
              </p>
            </section>

            <section className="mt-16 border-t border-gray-200 pt-10">
              <h2 className="font-display text-2xl font-semibold text-[#12251d]">
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
                  className="rounded-full border bg-white px-5 py-3 text-[#12251d] hover:border-[#b08a3c]"
                >
                  Bridge County
                </Link>

                <Link
                  href="/projects/sindhu-sarovar"
                  className="rounded-full border bg-white px-5 py-3 text-[#12251d] hover:border-[#b08a3c]"
                >
                  Sindhu Sarovar
                </Link>

                <Link
                  href="/projects/"
                  className="rounded-full border bg-white px-5 py-3 text-[#12251d] hover:border-[#b08a3c]"
                >
                  View All Projects
                </Link>
              </div>
            </section>

            {(previousPost || nextPost) && (
              <section className="mt-16 grid gap-6 border-t border-gray-200 pt-10 md:grid-cols-2">
                {previousPost && (
                  <Link
                    href={`/blog/${previousPost.slug}/`}
                    className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg"
                  >
                    <p className="text-sm font-semibold text-[#b08a3c]">
                      ← Previous Guide
                    </p>
                    <h3
                      className="mt-2 text-lg font-semibold text-[#12251d]"
                      dangerouslySetInnerHTML={{ __html: previousPost.title }}
                    />
                  </Link>
                )}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}/`}
                    className="rounded-2xl bg-white p-6 text-right shadow-sm transition hover:shadow-lg"
                  >
                    <p className="text-sm font-semibold text-[#b08a3c]">
                      Next Guide →
                    </p>
                    <h3
                      className="mt-2 text-lg font-semibold text-[#12251d]"
                      dangerouslySetInnerHTML={{ __html: nextPost.title }}
                    />
                  </Link>
                )}
              </section>
            )}

            {relatedPosts.length > 0 && (
              <section className="mt-16 border-t border-gray-200 pt-10">
                <h2 className="font-display text-2xl font-semibold text-[#12251d]">
                  Related Blogs
                </h2>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}/`}
                      className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-lg"
                    >
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#b08a3c]">
                        {item.category || "Investment Guide"}
                      </p>
                      <h3
                        className="text-lg font-semibold leading-snug text-[#12251d]"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                        {stripHtml(item.excerpt || item.metaDescription || "")}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-16 rounded-3xl bg-[#12251d] p-8 text-white">
              <h2 className="font-display text-2xl font-semibold">
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
                  href="/contact-us/"
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