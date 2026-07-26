"use client";

import { ArrowRight, CalendarDays, Clock3, Newspaper, Search, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { blogPosts } from "@/lib/catalog-data";
import { Pagination } from "./ui/pagination";

const PAGE_SIZE = 6;

export function BlogExplorer() {
  const searchParams = useSearchParams();
  const requestedPage = Number(searchParams.get("page") ?? 1);
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [category, setCategory] = useState(searchParams.get("category") ?? "All");
  const [tag, setTag] = useState(searchParams.get("tag") ?? "All");
  const [page, setPage] = useState(Number.isFinite(requestedPage) ? Math.max(1, requestedPage) : 1);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category !== "All") params.set("category", category);
    if (tag !== "All") params.set("tag", tag);
    if (page > 1) params.set("page", String(page));
    const next = params.size
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;
    window.history.replaceState(null, "", next);
  }, [category, page, query, tag]);

  const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];
  const tags = ["All", ...Array.from(new Set(blogPosts.flatMap((post) => post.tags)))];
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const categoryMatch = category === "All" || post.category === category;
      const tagMatch = tag === "All" || post.tags.includes(tag);
      const queryMatch =
        !normalized ||
        [post.title, post.description, post.category, post.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      return categoryMatch && tagMatch && queryMatch;
    });
  }, [category, query, tag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function changeCategory(next: string) {
    setCategory(next);
    setPage(1);
  }

  return (
    <>
      <div className="catalog-toolbar">
        <div className="site-container py-5">
          <div className="grid items-center gap-4 lg:grid-cols-[minmax(280px,0.8fr)_1.2fr]">
            <div className="search-shell">
              <Search aria-hidden="true" size={18} />
              <label className="sr-only" htmlFor="article-search">
                Search articles
              </label>
              <input
                className="field"
                id="article-search"
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder="Search articles, topics, or tags…"
                type="search"
                value={query}
              />
              {query ? (
                <button
                  aria-label="Clear article search"
                  className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-[var(--ink-soft)] hover:bg-[var(--surface-muted)]"
                  onClick={() => {
                    setQuery("");
                    setPage(1);
                  }}
                  type="button"
                >
                  <X aria-hidden="true" size={16} />
                </button>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Filter articles by category">
              {categories.map((item) => (
                <button
                  aria-pressed={category === item}
                  className="filter-chip"
                  key={item}
                  onClick={() => changeCategory(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <label className="text-xs font-semibold text-[var(--ink-soft)]" htmlFor="tag-filter">
              Filter by tag
            </label>
            <select
              className="field !min-h-10 !w-auto !py-2"
              id="tag-filter"
              onChange={(event) => {
                setTag(event.target.value);
                setPage(1);
              }}
              value={tag}
            >
              {tags.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <p aria-live="polite" className="mt-3 text-xs text-[var(--ink-soft)]">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"} found
          </p>
        </div>
      </div>

      <section className="site-container py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.length ? (
            visible.map((post, index) => (
              <article className="catalog-card group" key={post.slug}>
                <div
                  className={`mb-6 h-2 rounded-full ${
                    index % 3 === 0
                      ? "bg-gradient-to-r from-violet-500 to-indigo-400"
                      : index % 3 === 1
                        ? "bg-gradient-to-r from-sky-500 to-cyan-400"
                        : "bg-gradient-to-r from-indigo-500 to-fuchsia-400"
                  }`}
                />
                <span className="badge badge-accent w-fit">{post.category}</span>
                <div className="mt-3 flex flex-wrap gap-2" aria-label={`Tags for ${post.title}`}>
                  {post.tags.map((postTag) => (
                    <span className="tag" key={postTag}>
                      {postTag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-5 text-xl font-semibold leading-snug tracking-tight">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--ink-muted)]">
                  {post.description}
                </p>
                <div className="meta-row mt-6 border-t border-[var(--line)] pt-5">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays aria-hidden="true" size={13} />
                    {post.displayDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 aria-hidden="true" size={13} />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  aria-label={`Read ${post.title}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                  href={`/blog/${post.slug}`}
                >
                  Read article
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                    size={16}
                  />
                </Link>
              </article>
            ))
          ) : (
            <div className="empty-state">
              <Newspaper aria-hidden="true" className="mx-auto text-[var(--ink-soft)]" size={30} />
              <h2 className="mt-5 text-xl font-semibold">No articles found</h2>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">
                Try a broader topic or clear the active category.
              </p>
              <button
                className="button-secondary mt-6"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                  setTag("All");
                  setPage(1);
                }}
                type="button"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
        {filtered.length > PAGE_SIZE ? (
          <Pagination page={safePage} totalPages={totalPages} onPageChange={setPage} />
        ) : null}
      </section>
    </>
  );
}
