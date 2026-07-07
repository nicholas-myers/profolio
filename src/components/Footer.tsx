import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {year} {siteConfig.name}. Built with Next.js & React.
        </p>
        <a
          href="#"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
