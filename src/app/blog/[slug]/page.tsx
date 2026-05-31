import fs from "fs";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

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

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "");
}

function getPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
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

  return {
    title: post.seoTitle || stripHtml(post.title),
    description: post.metaDescription || stripHtml(post.excerpt || ""),
    alternates: {
      canonical:
        post.canonical || `https://srisuprajainfracon.com/blog/${slug}/`,
    },
    openGraph: {
      title: post.seoTitle || stripHtml(post.title),
      description: post.metaDescription || stripHtml(post.excerpt || ""),
      type: "article",
      images: post.featuredImage ? [post.featuredImage] : [],
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

  return (
    <main className="bg-[#f8f6f1] min-h-screen">
      <article className="max-w-4xl mx-auto px-6 py-16">
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
              alt={stripHtml(post.title)}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none mt-10 prose-headings:text-[#12251d] prose-a:text-[#b08a3c] prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}