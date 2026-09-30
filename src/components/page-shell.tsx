import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="grid-backdrop border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="label-mono">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 ${className}`}>
      {eyebrow && <p className="label-mono">{eyebrow}</p>}
      {title && (
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      )}
      <div className={eyebrow || title ? "mt-8" : ""}>{children}</div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40 ${className}`}
    >
      {children}
    </div>
  );
}
