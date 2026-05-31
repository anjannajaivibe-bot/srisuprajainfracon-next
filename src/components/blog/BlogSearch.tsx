"use client";

import { useMemo, useState, useDeferredValue } from "react";
import Link from "next/link";
import Image from "next/image";

type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;
  featuredImage?: string;
  date: string;
};

export default function BlogSearch({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredPosts = useMemo(() => {
    const search = deferredQuery.trim().toLowerCase();

    if (!search) return posts;

    return posts.filter((post) => {
      const text = `${post.title} ${post.excerpt || ""}`.toLowerCase();
      return text.includes(search);
    });
  }, [deferredQuery, posts]);

  return (
    <>
      <div className="mb-12">
        <input
          type="search"
          placeholder="Search blogs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-4 text-lg outline-none focus:border-[#b08a3c]"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <Link href={`/blog/${post.slug}/`}>
              <div className="relative h-64 overflow-hidden bg-gray-100">
                {post.featuredImage && (
                  <Image
                    src={post.featuredImage}
                    alt={post.title.replace(/<[^>]*>/g, "")}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <div className="p-7">
                <p className="text-sm font-medium text-[#b08a3c]">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <h2
                  className="mt-3 text-2xl font-semibold leading-snug text-[#12251d]"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />

                <p className="mt-4 line-clamp-3 text-gray-600">
                  {post.excerpt}
                </p>

                <span className="mt-6 inline-block font-semibold text-[#12251d]">
                  Read Article →
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}