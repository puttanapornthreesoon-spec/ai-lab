"use client";

import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  ClipboardList,
  FileSearch,
  Heart,
  MessageSquareText,
  Search,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { LabTool, tools } from "@/lib/catalog-data";
import { useLocalIds } from "@/lib/use-local-ids";
import { Modal } from "./ui/modal";
import { Toast } from "./ui/toast";

const categoryIcons = {
  Learning: BookOpenCheck,
  Research: FileSearch,
  Writing: WandSparkles,
  Communication: MessageSquareText,
  Operations: ClipboardList,
};

export function ToolsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useLocalIds("dg-tool-favorites");
  const [selected, setSelected] = useState<LabTool | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const categoryMatch = category === "All" || tool.category === category;
      const queryMatch =
        !normalized ||
        [tool.title, tool.description, tool.category, tool.audience, tool.useCase]
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
          ? "Tool saved to your dashboard."
          : "Tool removed from saved items."
        : "Browser storage is unavailable, so this tool could not be saved.",
    );
  }

  const categories = ["All", ...Array.from(new Set(tools.map((tool) => tool.category)))];

  return (
    <>
      <div className="catalog-toolbar">
        <div className="site-container py-5">
          <div className="grid items-center gap-4 lg:grid-cols-[minmax(280px,0.8fr)_1.2fr]">
            <div className="search-shell">
              <Search aria-hidden="true" size={18} />
              <label className="sr-only" htmlFor="tool-search">
                Search AI tools
              </label>
              <input
                className="field"
                id="tool-search"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search tools by task or topic…"
                type="search"
                value={query}
              />
              {query ? (
                <button
                  aria-label="Clear tool search"
                  className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-[var(--ink-soft)] hover:bg-[var(--surface-muted)]"
                  onClick={() => setQuery("")}
                  type="button"
                >
                  <X aria-hidden="true" size={16} />
                </button>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Filter tools by category">
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
          <p aria-live="polite" className="mt-3 text-xs text-[var(--ink-soft)]">
            {filtered.length} {filtered.length === 1 ? "tool" : "tools"} shown
          </p>
        </div>
      </div>

      <section className="site-container py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.length ? (
            filtered.map((tool) => {
              const Icon = categoryIcons[tool.category];
              const favorite = favorites.includes(tool.id);
              return (
                <article className="catalog-card" key={tool.id}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="icon-shell">
                      <Icon aria-hidden="true" size={21} />
                    </div>
                    <button
                      aria-label={
                        favorite ? `Remove ${tool.title} from saved tools` : `Save ${tool.title}`
                      }
                      aria-pressed={favorite}
                      className={`icon-button !h-10 !w-10 ${favorite ? "!border-violet-300 !bg-[var(--accent-soft)] !text-[var(--accent)]" : ""}`}
                      onClick={() => toggleFavorite(tool.id)}
                      type="button"
                    >
                      <Heart
                        aria-hidden="true"
                        fill={favorite ? "currentColor" : "none"}
                        size={17}
                      />
                    </button>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="badge badge-accent">{tool.category}</span>
                    <span className="badge">{tool.status}</span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight">{tool.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[var(--ink-muted)]">
                    {tool.description}
                  </p>
                  <div className="mt-6 border-t border-[var(--line)] pt-5">
                    <p className="text-xs text-[var(--ink-soft)]">Designed for</p>
                    <p className="mt-1 text-sm font-semibold">{tool.audience}</p>
                    <button
                      aria-label={`View ${tool.title} workflow`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                      onClick={() => setSelected(tool)}
                      type="button"
                    >
                      View workflow
                      <ArrowRight aria-hidden="true" size={16} />
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="empty-state">
              <BrainCircuit
                aria-hidden="true"
                className="mx-auto text-[var(--ink-soft)]"
                size={30}
              />
              <h2 className="mt-5 text-xl font-semibold">No exact match</h2>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">
                Try a broader term or clear the current filter.
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

      <Modal
        open={Boolean(selected)}
        onClose={closeModal}
        title={selected?.title ?? "Tool workflow"}
      >
        {selected ? (
          <div>
            <span className="badge badge-accent">{selected.category}</span>
            <p className="mt-5 leading-7 text-[var(--ink-muted)]">{selected.description}</p>
            <div className="mt-6 rounded-2xl bg-[var(--surface-muted)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]">
                Suggested workflow
              </p>
              <ol className="mt-4 space-y-4">
                {selected.steps.map((step, index) => (
                  <li className="flex items-center gap-3 text-sm font-medium" key={step}>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-6 flex gap-3 rounded-2xl border border-[var(--line)] p-5">
              <Sparkles
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-[var(--accent)]"
                size={18}
              />
              <div>
                <p className="text-sm font-semibold">Human review checkpoint</p>
                <p className="mt-1 text-sm leading-6 text-[var(--ink-muted)]">{selected.review}</p>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
      <Toast message={toast} onClose={() => setToast(null)} />
    </>
  );
}
