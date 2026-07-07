import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full stack online store with cart, checkout, and admin dashboard.",
    longDescription:
      "A production-ready e-commerce app built with Next.js and a REST API. Features include product catalog, user auth, Stripe payments, and an admin panel for inventory management.",
    image: "/projects/ecommerce.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description:
      "Collaborative project management app with real-time updates.",
    longDescription:
      "Kanban-style task board with drag-and-drop, team workspaces, and live sync via WebSockets. Built for teams that need clarity without complexity.",
    image: "/projects/task-manager.svg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Location-aware weather app with forecasts and interactive maps.",
    image: "/projects/weather.svg",
    tags: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    description:
      "Headless CMS with markdown editor and static site generation.",
    image: "/projects/blog.svg",
    tags: ["Next.js", "MDX", "Prisma", "Vercel"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
