interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Heading className="text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-[2.75rem]">
        {title}
      </Heading>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
