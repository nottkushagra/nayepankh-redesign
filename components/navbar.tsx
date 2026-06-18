"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { assets, navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="NayePankh Foundation home">
          <Image
            src={assets.logo}
            alt="NayePankh Foundation logo"
            width={52}
            height={52}
            priority
            className="h-12 w-12 rounded-xl object-contain"
          />
          <div className="leading-tight">
            <p className="font-semibold text-brand-ink dark:text-white">NayePankh</p>
            <p className="text-xs text-slate-500 dark:text-slate-300">Foundation</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-brand-blue dark:text-slate-300 dark:hover:bg-white/10",
                pathname === item.href && "bg-blue-50 text-brand-blue dark:bg-white/10 dark:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/volunteer"
            className="hidden min-h-10 items-center gap-2 rounded-full bg-brand-green px-4 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-green-700 sm:inline-flex"
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
            Join
          </Link>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-brand-blue hover:text-brand-blue dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
          >
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="hidden h-4 w-4 dark:block" />
          </button>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden dark:border-white/10 dark:bg-slate-950">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
