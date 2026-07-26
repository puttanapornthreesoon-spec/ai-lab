"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-3">
      <button
        className="button-secondary disabled:cursor-not-allowed disabled:opacity-45"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        type="button"
      >
        <ChevronLeft aria-hidden="true" size={16} />
        Previous
      </button>
      <span aria-live="polite" className="px-3 text-sm text-[var(--ink-muted)]">
        Page <strong className="text-[var(--ink)]">{page}</strong> of {totalPages}
      </span>
      <button
        className="button-secondary disabled:cursor-not-allowed disabled:opacity-45"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        type="button"
      >
        Next
        <ChevronRight aria-hidden="true" size={16} />
      </button>
    </nav>
  );
}
