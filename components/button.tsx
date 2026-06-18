import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-brand-blue text-white shadow-glow hover:-translate-y-0.5 hover:bg-blue-700",
        variant === "secondary" &&
          "border border-slate-200 bg-white text-brand-ink hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue",
        variant === "ghost" && "text-brand-blue hover:bg-blue-50",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
