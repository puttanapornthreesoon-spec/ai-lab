"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggleTheme() {
    const nextDark = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    try {
      localStorage.setItem("dg-theme", nextDark ? "dark" : "light");
    } catch {
      // The visual theme still applies when browser storage is unavailable.
    }
  }

  return (
    <button
      aria-label="Toggle color theme"
      className="icon-button"
      onClick={toggleTheme}
      type="button"
    >
      <Moon aria-hidden="true" className="theme-icon-moon" size={17} />
      <Sun aria-hidden="true" className="theme-icon-sun" size={17} />
    </button>
  );
}
