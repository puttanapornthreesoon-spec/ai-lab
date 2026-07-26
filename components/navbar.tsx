"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/site-data";
import { SiteLogo } from "./site-logo";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const background = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));

    if (open) {
      background.forEach((element) => element.setAttribute("inert", ""));
      mobilePanelRef.current?.querySelector<HTMLElement>("a")?.focus();
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function trapFocus(event: KeyboardEvent) {
      if (event.key !== "Tab" || !mobilePanelRef.current) return;
      const focusable = Array.from(
        mobilePanelRef.current.querySelectorAll<HTMLElement>("a, button"),
      ).filter((element) => !element.hasAttribute("disabled"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", trapFocus);
    }
    return () => {
      document.body.style.overflow = "";
      background.forEach((element) => element.removeAttribute("inert"));
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", trapFocus);
    };
  }, [open]);

  return (
    <header className="nav-shell">
      <nav
        aria-label="Primary navigation"
        className="site-container flex h-[4.75rem] items-center justify-between gap-5"
      >
        <SiteLogo />
        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              className="nav-link"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link className="button-primary" href="/dashboard">
            Open dashboard
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="icon-button"
            onClick={() => setOpen((current) => !current)}
            ref={menuButtonRef}
            type="button"
          >
            {open ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
          </button>
        </div>
      </nav>
      {open && (
        <div
          aria-label="Mobile navigation"
          aria-modal="true"
          className="absolute inset-x-0 top-full h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-[var(--line)] bg-[var(--background)] p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] lg:hidden"
          id="mobile-navigation"
          ref={mobilePanelRef}
          role="dialog"
        >
          <div className="site-container flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                className="rounded-xl px-4 py-3.5 text-base font-semibold text-[var(--ink-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--ink)]"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link className="button-primary mt-4" href="/dashboard" onClick={() => setOpen(false)}>
              Open dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
