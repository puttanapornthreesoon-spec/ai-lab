"use client";

import {
  Bookmark,
  CheckCircle2,
  Clipboard,
  LibraryBig,
  Search,
  ShieldAlert,
  Sparkles,
  X,
} from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { PromptItem, prompts } from "@/lib/catalog-data";
import { useLocalIds } from "@/lib/use-local-ids";
import { Modal } from "./ui/modal";
import { Toast } from "./ui/toast";

export function PromptLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useLocalIds("dg-prompt-favorites");
  const [selected, setSelected] = useState<PromptItem | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const categories = ["All", ...Array.from(new Set(prompts.map((prompt) => prompt.category)))];
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return prompts.filter((prompt) => {
      const categoryMatch = category === "All" || prompt.category === category;
      const queryMatch =
        !normalized ||
        [prompt.title, prompt.description, prompt.category, prompt.audience]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      return categoryMatch && queryMatch;
    });
  }, [category, query]);

  function toggleFavorite(id: string) {
    const next = favorites.includes(id)
      ? favorites.filter((item) => item !== id)
      : [...favorites, id];
    const saved = setFavorites(next);
    setToast(
      saved
        ? next.includes(id)
          ? "Prompt saved to favorites."
          : "Prompt removed from favorites."
        : "Browser storage is unavailable, so this prompt could not be saved.",
    );
  }

  async function copyPrompt(prompt: PromptItem) {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setToast("Prompt copied. Remove sensitive information before use.");
    } catch {
      setToast("Copy is unavailable here. Select the prompt text and copy it manually.");
    }
  }

  return (
    <>
      <div className="catalog-toolbar">
        <div className="site-container py-5">
          <div className="grid items-center gap-4 lg:grid-cols-[minmax(280px,0.8fr)_1.2fr]">
            <div className="search-shell">
              <Search aria-hidden="true" size={18} />
              <label className="sr-only" htmlFor="prompt-search">
                Search prompt library
              </label>
              <input
                className="field"
                id="prompt-search"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search prompts, topics, or audiences…"
                type="search"
                value={query}
              />
              {query ? (
                <button
                  aria-label="Clear prompt search"
                  className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-[var(--ink-soft)] hover:bg-[var(--surface-muted)]"
                  onClick={() => setQuery("")}
                  type="button"
                >
                  <X aria-hidden="true" size={16} />
                </button>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Filter prompts by category">
              {categories.map((item) => (
                <button
                  aria-pressed={category === item}
                  className="filter-chip"
                  key={item}
                  onClick={() => setCategory(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-4 text-xs text-[var(--ink-soft)]">
            <p aria-live="polite">
              {filtered.length} {filtered.length === 1 ? "prompt" : "prompts"} shown
            </p>
            <p>{favorites.length} saved</p>
          </div>
        </div>
      </div>

      <section className="site-container py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.length ? (
            filtered.map((prompt) => {
              const favorite = favorites.includes(prompt.id);
              return (
                <article className="catalog-card" key={prompt.id}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="badge badge-accent">{prompt.category}</span>
                    <button
                      aria-label={
                        favorite ? `Remove ${prompt.title} from favorites` : `Save ${prompt.title}`
                      }
                      aria-pressed={favorite}
                      className={`icon-button !h-10 !w-10 ${favorite ? "!border-violet-300 !bg-[var(--accent-soft)] !text-[var(--accent)]" : ""}`}
                      onClick={() => toggleFavorite(prompt.id)}
                      type="button"
                    >
                      <Bookmark
                        aria-hidden="true"
                        fill={favorite ? "currentColor" : "none"}
                        size={17}
                      />
                    </button>
                  </div>
                  <h2 className="mt-6 text-xl font-semibold tracking-tight">{prompt.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[var(--ink-muted)]">
                    {prompt.description}
                  </p>
                  <div className="mt-5 rounded-xl bg-[var(--surface-muted)] p-4 text-xs leading-5 text-[var(--ink-muted)]">
                    {prompt.prompt.length > 145
                      ? `${prompt.prompt.slice(0, 145).trim()}…`
                      : prompt.prompt}
                  </div>
                  <div className="mt-5 flex gap-2 border-t border-[var(--line)] pt-5">
                    <button
                      aria-label={`Use ${prompt.title} prompt`}
                      className="button-primary flex-1"
                      onClick={() => setSelected(prompt)}
                      type="button"
                    >
                      <Sparkles aria-hidden="true" size={15} />
                      Use prompt
                    </button>
                    <button
                      aria-label={`Copy ${prompt.title}`}
                      className="icon-button shrink-0"
                      onClick={() => copyPrompt(prompt)}
                      type="button"
                    >
                      <Clipboard aria-hidden="true" size={17} />
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="empty-state">
              <LibraryBig aria-hidden="true" className="mx-auto text-[var(--ink-soft)]" size={30} />
              <h2 className="mt-5 text-xl font-semibold">No prompts found</h2>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">
                Try a broader search or clear the active filter.
              </p>
              <button
                className="button-secondary mt-6"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
                type="button"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Modal open={Boolean(selected)} onClose={closeModal} title={selected?.title ?? "Prompt"}>
        {selected ? (
          <div>
            <div className="flex gap-3 rounded-2xl border border-amber-300/40 bg-amber-100/50 p-4 text-amber-950 dark:bg-amber-300/10 dark:text-amber-100">
              <ShieldAlert aria-hidden="true" className="mt-0.5 shrink-0" size={18} />
              <p className="text-sm leading-6">
                Before you paste: remove names, IDs, dates, contact details, and other protected or
                confidential information.
              </p>
            </div>
            <div className="mt-5 rounded-2xl bg-[var(--surface-muted)] p-5 text-sm leading-7 text-[var(--ink)]">
              {selected.prompt}
            </div>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]">
                Review checklist
              </p>
              <ul className="mt-4 space-y-3">
                {selected.checks.map((check) => (
                  <li className="flex gap-3 text-sm text-[var(--ink-muted)]" key={check}>
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[var(--success)]"
                      size={17}
                    />
                    {check}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="button-primary mt-7 w-full"
              onClick={() => copyPrompt(selected)}
              type="button"
            >
              <Clipboard aria-hidden="true" size={16} />
              Copy prompt
            </button>
          </div>
        ) : null}
      </Modal>
      <Toast message={toast} onClose={() => setToast(null)} />
    </>
  );
}
