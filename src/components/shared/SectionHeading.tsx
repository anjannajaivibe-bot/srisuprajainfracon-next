type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;


