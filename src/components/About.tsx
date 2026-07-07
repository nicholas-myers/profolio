import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="About" title="A bit about me" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            {siteConfig.about.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-xl border border-border bg-surface p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Currently
              </p>
              <p className="mt-3 text-2xl font-semibold text-foreground">
                {siteConfig.title}
              </p>
              <p className="mt-2 text-muted">{siteConfig.bio}</p>

              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
                <div>
                  <p className="text-3xl font-bold text-accent">4+</p>
                  <p className="mt-1 text-sm text-muted">Projects built</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">Full</p>
                  <p className="mt-1 text-sm text-muted">Stack coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
