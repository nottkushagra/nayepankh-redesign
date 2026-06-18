"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQAccordion({ items }: { items: Array<{ q: string; a: string }> }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div key={item.q} className="rounded-[8px] border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-brand-ink dark:text-white"
            aria-expanded={open === index}
          >
            {item.q}
            <ChevronDown className={`h-4 w-4 shrink-0 transition ${open === index ? "rotate-180" : ""}`} />
          </button>
          {open === index && <p className="px-5 pb-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}
