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
  modified?: string;
  category?: string;
  readingTime?: number;
};

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogSearch({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const deferredQuery = useDeferredValue(query);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(posts.map((post) => post.category || "Investment Guide"))
    );

    return ["All", ...uniqueCategories];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const search = deferredQuery.trim().toLowerCase();

    return posts.filter((post) => {
      const category = post.category || "Investment Guide";
      const text = `${stripHtml(post.title)} ${post.excerpt || ""} ${category}`
        .toLowerCase()
        .trim();

      const matchesSearch = search ? text.includes(search) : true;
      const matchesCategory =
        activeCategory === "All" || category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, deferredQuery, posts]);

  return (
    <>
      <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
        <input
          type="search"
          placeholder="Search investment guides, legal topics, locations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-4 text-lg outline-none transition focus:border-[#b08a3c] focus:ring-2 focus:ring-[#b08a3c]/20"
        />

        <div className="flex items-center rounded-2xl bg-white px-5 py-4 text-sm font-medium text-gray-600 shadow-sm">
          {filteredPosts.length} result{filteredPosts.length === 1 ? "" : "s"}
        </div>
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? "bg-[#12251d] text-white"
                : "bg-white text-[#12251d] hover:bg-[#f5efe2]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => {
            const cleanTitle = stripHtml(post.title);
            const category = post.category || "Investment Guide";
            const updatedDate = post.modified || post.date;

            return (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/blog/${post.slug}/`}>
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    {post.featuredImage && (
                      <Image
                        src={post.featuredImage}
                        alt={cleanTitle}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    )}

                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#12251d] shadow-sm">
                      {category}
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-sm font-medium text-[#b08a3c]">
                      {formatDate(post.date)} • {post.readingTime || 1} min read
                    </p>

                    <h2
                      className="mt-3 text-2xl font-semibold leading-snug text-[#12251d]"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />

                    <p className="mt-4 line-clamp-3 text-gray-600">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span className="font-semibold text-[#12251d]">
                        Read Article →
                      </span>

                      <span className="text-xs text-gray-500">
                        Updated {formatDate(updatedDate)}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
          <h3 className="text-2xl font-semibold text-[#12251d]">
            No articles found
          </h3>
          <p className="mt-3 text-gray-600">
            Try searching with a different topic or choose another category.
          </p>
        </div>
      )}
    </>
  );
}