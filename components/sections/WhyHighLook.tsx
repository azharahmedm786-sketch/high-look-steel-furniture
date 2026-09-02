import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";

const points = [
  {
    title: "Quality workmanship",
    description: "Each job — new or repaired — is carried out with attention to detail, not rushed to close it out.",
  },
  {
    title: "Durable results",
    description: "Steel is chosen and prepared with long-term use in mind, not just how it looks on delivery day.",
  },
  {
    title: "Professional service",
    description: "Clear communication from your first message through to the completed job.",
  },
  {
    title: "Clean finishing",
    description: "Painting, panels, and joints are finished evenly, not left rough at the edges.",
  },
];

export function WhyHighLook({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="border-b border-line bg-surface py-20 md:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="order-2 lg:order-1">
          <SectionHeading eyebrow="Why High Look" title="Furniture built around what it needs to hold up to." />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point.title} className="flex flex-col gap-2">
                <h3 className="text-base font-semibold tracking-tight">{point.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{point.description}</p>
              </div>
            ))}
          </div>
          {showCta ? (
            <div className="mt-10">
              <Button href="/why-us" variant="ghost">
                More about High Look &rarr;
              </Button>
            </div>
          ) : null}
        </div>
        <div className="order-1 lg:order-2">
          <SiteImage
            image={{
              src: "/images/gallery/workshop-detail.jpg",
              alt: "Detail photograph of steel furniture finishing work",
              aspect: "square",
            }}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
