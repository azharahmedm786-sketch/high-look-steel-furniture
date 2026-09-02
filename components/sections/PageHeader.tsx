import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-line bg-bg py-16 md:py-24">
      <Container className="flex max-w-2xl flex-col gap-5">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
