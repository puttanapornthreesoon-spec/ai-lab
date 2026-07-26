import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="site-container relative z-10">
        <div className="mb-8 flex items-center gap-2 text-xs font-semibold text-[var(--ink-soft)]">
          <Link className="hover:text-[var(--accent)]" href="/">
            Home
          </Link>
          <ChevronRight aria-hidden="true" size={13} />
          <span>{eyebrow}</span>
        </div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
