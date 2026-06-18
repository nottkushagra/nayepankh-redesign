import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ eyebrow, title, intro, children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-5 text-lg leading-8 text-slate-600">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
