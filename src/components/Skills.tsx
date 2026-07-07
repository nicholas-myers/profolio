import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Expertise"
          title="Skills & technologies"
          description="The tools and frameworks I use to bring ideas to life."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-xl border border-border bg-background p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {category.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
