import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ArrowIcon } from "@/components/ui/Icons";
import { services } from "@/data/services";
import { buildWhatsAppLink } from "@/data/contact";

export function ServicesShowcase() {
  return (
    <section className="border-b border-line bg-surface py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-4 pb-12 md:flex-row md:items-end md:justify-between md:pb-16">
          <SectionHeading
            eyebrow="What we do"
            title="Seven services. One standard."
            description="Every job — new or repaired — is handled to the same standard of finish."
          />
          <Link
            href="/services"
            className="hidden shrink-0 items-center gap-2 text-sm font-medium text-ink hover:text-navy md:flex"
          >
            View all services <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const span = service.gridSpan === "large" ? "md:col-span-2" : "md:col-span-1";
            const message = `Hi High Look Steel Furniture, I'm interested in ${service.name}. I'd like to share my requirements.`;
            return (
              <article
                key={service.slug}
                className={`group flex flex-col overflow-hidden border border-line bg-bg transition-shadow hover:shadow-[0_1px_0_0_rgba(0,0,0,0.04)] ${span}`}
              >
                <SiteImage
                  image={service.heroImage}
                  className="transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-snug tracking-tight">
                      {service.name}
                    </h3>
                    <ServiceIcon icon={service.icon} className="mt-1 h-6 w-6 shrink-0 text-red" />
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft">{service.cardDescription}</p>
                  <div className="mt-auto flex items-center gap-5 pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                    >
                      Learn More
                    </Link>
                    <a
                      href={buildWhatsAppLink(message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-navy hover:text-red"
                    >
                      Request Service
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex md:hidden">
          <Link href="/services" className="flex items-center gap-2 text-sm font-medium text-ink">
            View all services <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
