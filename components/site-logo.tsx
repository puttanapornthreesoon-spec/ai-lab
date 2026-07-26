import Link from "next/link";
import { Sparkles } from "lucide-react";

export function SiteLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      aria-label="Digital GiGz AI Lab home"
      className="inline-flex items-center gap-2.5 rounded-xl"
      href="/"
    >
      <span className="logo-mark">
        <Sparkles aria-hidden="true" size={19} strokeWidth={2.2} />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-sm font-bold tracking-[-0.02em]">DIGITAL GiGz</span>
          <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--ink-soft)]">
            AI Lab
          </span>
        </span>
      )}
    </Link>
  );
}
