interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, description, center }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {label && (
        <div className={`section-label mb-4 ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-matrix-500" />
          {label}
        </div>
      )}
      <h2 className="text-3xl font-bold leading-tight text-heading sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-bodytext">
          {description}
        </p>
      )}
    </div>
  );
}
