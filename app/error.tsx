"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-screen place-items-center px-5" id="main-content">
      <div className="max-w-lg text-center">
        <span className="icon-shell mx-auto !h-14 !w-14">
          <AlertTriangle aria-hidden="true" size={24} />
        </span>
        <h1 className="mt-7 text-4xl font-semibold tracking-[-0.045em]">
          Something needs another look.
        </h1>
        <p className="mt-4 leading-7 text-[var(--ink-muted)]">
          The page could not be displayed. Try the request again without re-entering any sensitive
          information.
        </p>
        <button className="button-primary mt-7" onClick={reset} type="button">
          <RotateCcw aria-hidden="true" size={16} />
          Try again
        </button>
      </div>
    </main>
  );
}
