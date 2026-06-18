"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { programs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(programs.map((program) => program.category)))];

export function ProgramFilter() {
  const [active, setActive] = useState("All");
  const visiblePrograms = useMemo(
    () => (active === "All" ? programs : programs.filter((program) => program.category === active)),
    [active]
  );

  return (
    <div>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "min-h-10 shrink-0 rounded-full border px-4 text-sm font-semibold transition",
              active === category
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-brand-blue hover:text-brand-blue dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visiblePrograms.map((program) => (
          <article
            key={program.title}
            className="group overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-slate-900"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={program.image}
                alt={`${program.title} at NayePankh Foundation`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-blue backdrop-blur">
                {program.category}
              </div>
            </div>
            <div className="p-5">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-brand-green">
                <program.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-brand-ink dark:text-white">{program.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{program.description}</p>
              <details className="mt-4 rounded-md bg-slate-50 p-3 text-sm text-slate-600 open:bg-blue-50 dark:bg-slate-950 dark:text-slate-300">
                <summary className="cursor-pointer font-semibold text-brand-blue">Read more</summary>
                <p className="mt-2 leading-6">{program.details}</p>
              </details>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
