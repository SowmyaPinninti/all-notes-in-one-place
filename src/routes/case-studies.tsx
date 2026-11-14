import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "AI Case Studies — Sowmya" },
      { name: "description", content: "Upcoming AI product case studies and projects by Sowmya." },
      { property: "og:title", content: "AI Case Studies — Sowmya" },
      { property: "og:description", content: "Upcoming AI product case studies and projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <div className="relative min-h-screen text-foreground">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-[position:80%_20%]"
        style={{ backgroundImage: "url(/ai-background.jpg)" }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-overlay/60 via-overlay/75 to-overlay/90" />
      <Link
        to="/"
        className="fixed left-4 top-4 z-20 rounded-full border border-glass-border bg-glass-strong px-5 py-2 text-sm font-semibold text-glow backdrop-blur-md"
      >
        ← Back to Notes
      </Link>
      <main className="mx-auto max-w-3xl px-5 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-glow">Projects</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">
          AI <em className="text-glow">Case Studies</em>
        </h1>
        <div className="mt-10 rounded-2xl border border-glass-border bg-glass p-8 backdrop-blur-xl">
          <p className="text-lg text-foreground/85">
            My upcoming AI projects and case studies will be shared here soon. Stay tuned!
          </p>
        </div>
      </main>
    </div>
  );
}
