import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-canopy)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 md:py-28 lg:px-8">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="animate-rise mt-4 max-w-4xl font-display text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {lead ? (
          <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {lead}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  lead,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto w-full max-w-7xl px-4 py-16 md:py-24 lg:px-8 ${className}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? (
        <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight text-cream md:text-4xl">
          {title}
        </h2>
      ) : null}
      {lead ? <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{lead}</p> : null}
      <div className={eyebrow || title || lead ? "mt-10" : ""}>{children}</div>
    </section>
  );
}

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="surface-card rounded-lg p-8 text-center">
      <p className="font-condensed text-lg uppercase tracking-[0.12em] text-muted-foreground">
        {message}
      </p>
    </div>
  );
}
