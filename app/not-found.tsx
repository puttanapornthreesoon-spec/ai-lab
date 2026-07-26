import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5" id="main-content">
      <div className="max-w-lg text-center">
        <span className="icon-shell mx-auto !h-14 !w-14">
          <SearchX aria-hidden="true" size={24} />
        </span>
        <p className="mt-7 text-sm font-semibold text-[var(--accent)]">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em]">
          This page isn’t in the Lab.
        </h1>
        <p className="mt-4 leading-7 text-[var(--ink-muted)]">
          The resource may have moved, or the address may be incomplete.
        </p>
        <Link className="button-primary mt-7" href="/">
          <ArrowLeft aria-hidden="true" size={16} />
          Return home
        </Link>
      </div>
    </main>
  );
}
