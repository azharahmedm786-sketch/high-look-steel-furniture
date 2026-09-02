import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { galleryProjects } from "@/data/gallery";

export function BeforeAfterSection() {
  const project = galleryProjects.find((p) => p.hasBeforeAfter && p.beforeImage && p.afterImage);
  if (!project || !project.beforeImage || !project.afterImage) return null;

  return (
    <section className="border-b border-line bg-surface py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
        <SectionHeading
          eyebrow="See the difference"
          title="From worn to working again."
          description="Rust, dents, and tired finishes don't always mean replacement. This is the kind of result our repair and refinishing work aims for."
        />
        <div className="flex flex-col gap-6">
          <BeforeAfterSlider before={project.beforeImage} after={project.afterImage} />
          <div>
            <Button href="/our-work" variant="ghost">
              See more of our work &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
