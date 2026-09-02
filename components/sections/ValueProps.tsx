import { Container } from "@/components/ui/Container";

const values = [
  {
    title: "Strong & Durable",
    description: "Steel furniture built and repaired to hold up to daily, long-term use.",
  },
  {
    title: "Expert Service",
    description: "Work carried out by people who handle steel almirahs every day.",
  },
  {
    title: "Quality Finish",
    description: "Clean, even finishing on every repair, paint job, and new build.",
  },
  {
    title: "Customer Satisfaction",
    description: "We work to your specification and keep you informed along the way.",
  },
];

export function ValueProps() {
  return (
    <section className="border-b border-line bg-bg py-16 md:py-20">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {values.map((value, index) => (
            <div key={value.title} className="flex flex-col gap-3 border-t border-ink/15 pt-5">
              <span className="font-mono text-xs text-ink-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{value.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
