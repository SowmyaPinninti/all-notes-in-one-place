import type { ReactNode } from "react";

export function Panel({ children }: { children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-glass-border bg-glass p-6 shadow-2xl backdrop-blur-xl md:p-10">
      {children}
    </section>
  );
}

export function Dropdown({ title, kicker, children }: { title: string; kicker?: string; children: ReactNode }) {
  return (
    <Panel>
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
          <span>
            {kicker && <span className="block font-mono text-xs uppercase tracking-[0.25em] text-glow">{kicker}</span>}
            <span className="mt-1 block font-display text-3xl md:text-4xl">{title}</span>
          </span>
          <span className="text-glow transition-transform duration-300 group-open:rotate-180">▾</span>
        </summary>
        <div className="mt-8 space-y-6 leading-relaxed text-foreground/85">{children}</div>
      </details>
    </Panel>
  );
}

export function Era({ year, title, children }: { year: string; title: string; children: ReactNode }) {
  return (
    <div className="border-l-2 border-glow/60 pl-5">
      <p className="font-mono text-sm tracking-widest text-glow">{year}</p>
      <h3 className="mt-1 font-display text-2xl text-foreground">{title}</h3>
      <div className="mt-3 space-y-3 leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}

export function SubHeading({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="pt-6">
      {label && <p className="font-mono text-xs uppercase tracking-[0.25em] text-glow">{label}</p>}
      <h3 className="mt-1 font-display text-3xl text-foreground">{children}</h3>
    </div>
  );
}

export function MinorHeading({ children }: { children: ReactNode }) {
  return <h4 className="pt-2 font-display text-2xl text-foreground">{children}</h4>;
}

/** One of Sowmya's own questions, shown exactly as a question block. */
export function Question({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-4 rounded-xl border border-glow/40 bg-glow/10 p-5">
      <span className="font-display text-4xl leading-none text-glow">?</span>
      <p className="font-display text-2xl italic leading-snug text-foreground">{children}</p>
    </div>
  );
}

export function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-glow/40 bg-glow/10 p-5 text-foreground/90">
      <strong className="text-glow">{label}</strong> {children}
    </div>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((it) => (
        <span key={it} className="rounded-full border border-glass-border bg-glass px-2.5 py-0.5 text-xs text-foreground/90">
          {it}
        </span>
      ))}
    </div>
  );
}

export function DataTable({
  head,
  rows,
  caption,
}: {
  head: string[];
  rows: ReactNode[][];
  caption?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-glass-border bg-glass-strong">
      {caption && <p className="border-b border-glass-border px-4 py-3 text-sm text-foreground/70">{caption}</p>}
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead className="font-mono text-xs uppercase tracking-widest text-glow">
          <tr>
            {head.map((h) => (
              <th key={h} className="p-4 align-bottom">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-foreground/85">
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-glass-border align-top">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "p-4 font-display text-lg text-foreground" : "p-4"}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-glow" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberedCards({ items }: { items: [string, ReactNode][] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2">
      {items.map(([title, text], i) => (
        <li key={title} className="rounded-xl border border-glass-border bg-glass-strong p-5">
          <span className="font-mono text-xs text-glow">{String(i + 1).padStart(2, "0")}</span>
          <h4 className="mt-1 font-display text-xl text-foreground">{title}</h4>
          <div className="mt-2 text-sm leading-relaxed text-foreground/80">{text}</div>
        </li>
      ))}
    </ol>
  );
}
