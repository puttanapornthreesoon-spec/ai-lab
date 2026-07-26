"use client";

import { CheckCircle2, X } from "lucide-react";
import { useEffect } from "react";

export function Toast({ message, onClose }: { message: string | null; onClose: () => void }) {
  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(onClose, 5200);
    return () => window.clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-[90] flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 text-sm shadow-[var(--shadow-xl)] sm:left-auto sm:right-6 sm:max-w-sm"
      role="status"
    >
      <CheckCircle2 aria-hidden="true" className="shrink-0 text-[var(--success)]" size={19} />
      <p className="flex-1 font-medium">{message}</p>
      <button
        aria-label="Dismiss notification"
        className="p-1 text-[var(--ink-soft)]"
        onClick={onClose}
        type="button"
      >
        <X aria-hidden="true" size={16} />
      </button>
    </div>
  );
}
