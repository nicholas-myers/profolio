type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
