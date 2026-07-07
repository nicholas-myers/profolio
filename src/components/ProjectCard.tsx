import Image from "next/image";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-surface-elevated ${
          featured ? "lg:w-1/2" : "aspect-video"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={featured ? 600 : 400}
          height={featured ? 340 : 225}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            featured ? "min-h-[240px] lg:min-h-full" : ""
          }`}
        />
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:p-8" : ""}`}>
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {featured && project.longDescription
            ? project.longDescription
            : project.description}
        </p>

        <div className="mt-6 flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              Live demo
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Source code
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
