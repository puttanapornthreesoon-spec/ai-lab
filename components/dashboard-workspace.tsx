"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bookmark,
  BookOpenCheck,
  BrainCircuit,
  FileSearch,
  GraduationCap,
  Heart,
  Home,
  LibraryBig,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";
import { useMemo } from "react";
import { blogPosts, learningPaths, prompts, tools } from "@/lib/catalog-data";
import { useLocalIds } from "@/lib/use-local-ids";

export function DashboardWorkspace() {
  const [toolFavorites] = useLocalIds("dg-tool-favorites");
  const [promptFavorites] = useLocalIds("dg-prompt-favorites");

  const savedItems = useMemo(
    () => [
      ...tools
        .filter((tool) => toolFavorites.includes(tool.id))
        .map((tool) => ({ id: tool.id, title: tool.title, type: "Tool", href: "/tools" })),
      ...prompts
        .filter((prompt) => promptFavorites.includes(prompt.id))
        .map((prompt) => ({
          id: prompt.id,
          title: prompt.title,
          type: "Prompt",
          href: "/prompts",
        })),
    ],
    [promptFavorites, toolFavorites],
  );

  const activePath = learningPaths.find((path) => path.progress > 0) ?? learningPaths[0];
  const quickActions = [
    { href: "/prompts", label: "Build a prompt", icon: Sparkles },
    { href: "/tools", label: "Start a PICOT question", icon: BrainCircuit },
    { href: "/research", label: "Open an evidence table", icon: LibraryBig },
    { href: "/blog", label: "Search Lab notes", icon: Search },
  ];

  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar" aria-label="Dashboard navigation">
        <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--ink-soft)]">
          Workspace
        </p>
        <nav className="space-y-1">
          <Link aria-current="page" className="dashboard-link" href="/dashboard">
            <Home aria-hidden="true" size={17} />
            Overview
          </Link>
          <Link className="dashboard-link" href="/prompts">
            <Sparkles aria-hidden="true" size={17} />
            Saved prompts
          </Link>
          <Link className="dashboard-link" href="/tools">
            <BrainCircuit aria-hidden="true" size={17} />
            Saved tools
          </Link>
          <Link className="dashboard-link" href="/learn">
            <GraduationCap aria-hidden="true" size={17} />
            Learning
          </Link>
          <Link className="dashboard-link" href="/research">
            <FileSearch aria-hidden="true" size={17} />
            Research
          </Link>
        </nav>
        <div className="mt-6 rounded-xl bg-[var(--surface-muted)] p-4">
          <p className="text-xs font-semibold">Privacy reminder</p>
          <p className="mt-2 text-xs leading-5 text-[var(--ink-muted)]">
            Never save patient-identifiable or confidential organizational information here.
          </p>
        </div>
      </aside>

      <div>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold text-[var(--accent)]">Welcome to your Lab</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              What would you like to move forward today?
            </h1>
          </div>
          <Link className="button-primary shrink-0" href="/prompts">
            <Plus aria-hidden="true" size={16} />
            New prompt
          </Link>
        </div>

        <section
          aria-label="Workspace metrics"
          className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {[
            { label: "Saved prompts", value: promptFavorites.length, icon: Sparkles },
            { label: "Saved tools", value: toolFavorites.length, icon: BrainCircuit },
            { label: "Bookmarks", value: savedItems.length, icon: Bookmark },
            { label: "Learning status", value: "New", icon: GraduationCap },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article className="content-card !p-5" key={item.label}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold text-[var(--ink-soft)]">{item.label}</p>
                  <Icon aria-hidden="true" className="text-[var(--accent)]" size={17} />
                </div>
                <p className="mt-5 text-3xl font-semibold tracking-tight">{item.value}</p>
              </article>
            );
          })}
        </section>

        <div className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
          <section className="content-card" aria-labelledby="continue-heading">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--ink-soft)]">
                  Start learning
                </p>
                <h2 className="mt-2 text-xl font-semibold" id="continue-heading">
                  {activePath.title}
                </h2>
              </div>
              <span className="icon-shell shrink-0">
                <BookOpenCheck aria-hidden="true" size={20} />
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-[var(--ink-muted)]">
              Preview a {activePath.lessons}-lesson pathway on core terms, common failure modes, and
              responsible boundaries. No progress is claimed until learning persistence is
              connected.
            </p>
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs text-[var(--ink-soft)]">
                <span>Not started</span>
                <span>{activePath.progress}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-bar" style={{ width: `${activePath.progress}%` }} />
              </div>
            </div>
            <Link className="button-primary mt-7" href="/learn">
              View pathway
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </section>

          <section className="content-card" aria-labelledby="quick-actions-heading">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--ink-soft)]">
              Quick actions
            </p>
            <h2 className="sr-only" id="quick-actions-heading">
              Quick actions
            </h2>
            <div className="mt-4 grid gap-2">
              {quickActions.map(({ href, label, icon: Icon }) => (
                <Link
                  className="dashboard-link !bg-[var(--surface-muted)] hover:!bg-[var(--accent-soft)]"
                  href={href}
                  key={label}
                >
                  <Icon aria-hidden="true" size={16} />
                  <span className="flex-1">{label}</span>
                  <ArrowRight aria-hidden="true" size={14} />
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-2">
          <section className="content-card" aria-labelledby="bookmarks-heading">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--ink-soft)]">
                  Bookmarks
                </p>
                <h2 className="mt-2 text-xl font-semibold" id="bookmarks-heading">
                  Your saved workspace
                </h2>
              </div>
              <Heart aria-hidden="true" className="text-[var(--accent)]" size={19} />
            </div>
            {savedItems.length ? (
              <ul className="mt-5 divide-y divide-[var(--line)]">
                {savedItems.slice(0, 5).map((item) => (
                  <li key={`${item.type}-${item.id}`}>
                    <Link
                      className="flex items-center justify-between gap-4 py-4 text-sm font-semibold hover:text-[var(--accent)]"
                      href={item.href}
                    >
                      <span>{item.title}</span>
                      <span className="badge">{item.type}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-5 rounded-2xl border border-dashed border-[var(--line)] p-6 text-center">
                <Bookmark aria-hidden="true" className="mx-auto text-[var(--ink-soft)]" size={23} />
                <p className="mt-4 text-sm font-semibold">Nothing saved yet</p>
                <p className="mt-2 text-xs leading-5 text-[var(--ink-muted)]">
                  Use the bookmark or heart button in the prompt and tool libraries.
                </p>
              </div>
            )}
          </section>

          <section className="content-card" aria-labelledby="featured-prompts-heading">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--ink-soft)]">
                Editor-selected starter prompts
              </p>
              <h2 className="mt-2 text-xl font-semibold" id="featured-prompts-heading">
                Popular prompts
              </h2>
            </div>
            <ul className="mt-5 divide-y divide-[var(--line)]">
              {prompts.slice(0, 3).map((prompt) => (
                <li key={prompt.id}>
                  <Link className="block py-4 hover:text-[var(--accent)]" href="/prompts">
                    <span className="text-sm font-semibold">{prompt.title}</span>
                    <span className="mt-1 block text-xs text-[var(--ink-muted)]">
                      {prompt.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="content-card mt-5" aria-labelledby="recent-articles-heading">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--ink-soft)]">
                Recent articles
              </p>
              <h2 className="mt-2 text-xl font-semibold" id="recent-articles-heading">
                From the Lab Journal
              </h2>
            </div>
            <Link className="text-sm font-semibold text-[var(--accent)]" href="/blog">
              View all
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                className="rounded-2xl border border-[var(--line)] p-5 transition hover:border-violet-300 hover:bg-[var(--surface-muted)]"
                href={`/blog/${post.slug}`}
                key={post.slug}
              >
                <span className="badge">{post.category}</span>
                <h3 className="mt-4 font-semibold leading-snug">{post.title}</h3>
                <p className="mt-3 text-xs text-[var(--ink-soft)]">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
