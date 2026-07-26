"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Accordion({ items }: { items: readonly { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--line)] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={open}
                className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left font-semibold hover:bg-[var(--surface-muted)] sm:px-6"
                id={buttonId}
                onClick={() => setOpenIndex(open ? null : index)}
                type="button"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={`shrink-0 text-[var(--ink-soft)] transition-transform ${open ? "rotate-180" : ""}`}
                  size={18}
                />
              </button>
            </h3>
            <div
              aria-hidden={!open}
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              id={panelId}
              role="region"
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 leading-7 text-[var(--ink-muted)] sm:px-6">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
