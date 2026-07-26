import Link from "next/link";
import { Mail } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { SiteLogo } from "./site-logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-muted)]/60">
      <div className="site-container py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <SiteLogo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--ink-muted)]">
              Empowering healthcare professionals to learn, evaluate, and use artificial
              intelligence responsibly.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Explore</p>
            <ul className="mt-4 grid gap-3 text-sm text-[var(--ink-muted)]">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-[var(--accent)]" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Connect</p>
            <ul className="mt-4 grid gap-3 text-sm text-[var(--ink-muted)]">
              <li>
                <Link className="hover:text-[var(--accent)]" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-[var(--accent)]" href="/privacy">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="hover:text-[var(--accent)]" href="/terms">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-[var(--line)] pt-7 text-xs text-[var(--ink-soft)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Digital GiGz AI Lab. Educational content only.</p>
          <div className="flex items-center gap-3">
            <a
              aria-label="Email Digital GiGz AI Lab"
              className="icon-button !h-9 !w-9"
              href="mailto:hello@digitalgigz.ai"
            >
              <Mail aria-hidden="true" size={15} />
            </a>
            <span>Social channels coming soon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
