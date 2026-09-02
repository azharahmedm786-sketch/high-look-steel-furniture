import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";
import { ArrowIcon } from "@/components/ui/Icons";
import { galleryProjects } from "@/data/gallery";

export function OurWorkPreview() {
  const preview = galleryProjects.slice(0, 4);

  return (
    <section className="border-b border-line bg-bg py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-4 pb-12 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Our work" title="A look at recent projects." />
          <Link
            href="/our-work"
            className="hidden shrink-0 items-center gap-2 text-sm font-medium text-ink hover:text-navy md:flex"
          >
            View full portfolio <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((project) => (
            <Link
              key={project.id}
              href="/our-work"
              className="group flex flex-col gap-3 border border-line bg-surface p-3 transition-colors hover:border-ink/30"
            >
              <SiteImage
                image={project.image}
                className="transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="px-1 pb-1">
                <p className="text-sm font-medium text-ink">{project.title}</p>
                <p className="text-xs text-ink-soft">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex md:hidden">
          <Link href="/our-work" className="flex items-center gap-2 text-sm font-medium text-ink">
            View full portfolio <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
