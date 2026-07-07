import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Portfolio
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-accent">{siteConfig.name}</span>
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-xl font-medium text-muted sm:text-2xl">
          {siteConfig.title}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {siteConfig.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            View my work
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
          >
            Contact me
          </a>
        </div>

        {siteConfig.location && (
          <p className="mt-12 flex items-center gap-2 text-sm text-muted">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {siteConfig.location}
          </p>
        )}
      </div>
    </section>
  );
}
