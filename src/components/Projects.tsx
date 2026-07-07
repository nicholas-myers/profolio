import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Work"
          title="Selected projects"
          description="A collection of full stack web applications I've designed and built."
        />

        <div className="flex flex-col gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {other.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {other.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
