import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Accordion } from "@/components/ui/Accordion";
import { GaugeRule } from "@/components/ui/GaugeRule";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { JsonLd } from "@/components/ui/JsonLd";
import { getServiceBySlug, services } from "@/data/services";
import { galleryProjects } from "@/data/gallery";
import { buildWhatsAppLink, buildTelLink, business } from "@/data/contact";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "@/lib/structuredData";
import type { ServiceSlug } from "@/types";

export function ServiceDetailTemplate({ slug }: { slug: ServiceSlug }) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const message = `Hi ${business.name}, I'm interested in ${service.name}. I'd like to share my requirements.`;
  const relatedProjects = galleryProjects.filter((p) => p.serviceSlug === slug);
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const showcaseProject = relatedProjects.find(
    (p) => p.hasBeforeAfter && p.beforeImage && p.afterImage
  );

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={faqPageJsonLd(service.faqs)} />

      {/* Hero */}
      <section className="border-b border-line bg-bg py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <Link href="/services" className="eyebrow no-underline">
              &larr; All Services
            </Link>
            <div className="flex items-center gap-3">
              <ServiceIcon icon={service.icon} className="h-8 w-8 text-red" />
              <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                {service.name}
              </h1>
            </div>
            <p className="text-lg text-ink-soft">{service.tagline}</p>
            <p className="max-w-md text-base leading-relaxed text-ink-soft">{service.intro}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href={buildWhatsAppLink(message)} variant="whatsapp" external>
                Request Service
              </Button>
              <Button href={buildTelLink()} variant="secondary">
                Call {business.phoneDisplay}
              </Button>
            </div>
          </div>
          <SiteImage image={service.heroImage} priority sizes="(min-width: 1024px) 50vw, 100vw" />
        </Container>
      </section>

      {/* What we do */}
      <section className="border-b border-line bg-surface py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="What we do" title="The scope of this service." />
            <ul className="mt-8 flex flex-col gap-4">
              {service.whatWeDo.map((item) => (
                <li key={item} className="flex gap-3 border-t border-line pt-4 text-sm text-ink-soft first:border-t-0 first:pt-0">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Common requirements" title="What customers usually ask for." />
            <ul className="mt-8 flex flex-col gap-4">
              {service.commonRequirements.map((item) => (
                <li key={item} className="flex gap-3 border-t border-line pt-4 text-sm text-ink-soft first:border-t-0 first:pt-0">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-b border-line bg-navy py-16 text-white md:py-24">
        <Container>
          <SectionHeading eyebrow="Process" title="How this service runs." />
          <GaugeRule orientation="horizontal" className="my-10" count={60} />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step.title} className="flex flex-col gap-3">
                <span className="font-mono text-sm text-red">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Before/after or gallery */}
      {service.hasBeforeAfter && showcaseProject?.beforeImage && showcaseProject?.afterImage ? (
        <section className="border-b border-line bg-surface py-16 md:py-24">
          <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
            <SectionHeading
              eyebrow="Results"
              title="Before and after."
              description="An example of the kind of result this service aims for."
            />
            <BeforeAfterSlider
              before={showcaseProject.beforeImage}
              after={showcaseProject.afterImage}
            />
          </Container>
        </section>
      ) : relatedProjects.length > 0 ? (
        <section className="border-b border-line bg-surface py-16 md:py-24">
          <Container>
            <SectionHeading eyebrow="Related work" title="Recent examples." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.slice(0, 3).map((project) => (
                <div key={project.id} className="flex flex-col gap-3">
                  <SiteImage image={project.image} sizes="(min-width: 1024px) 33vw, 100vw" />
                  <p className="text-sm font-medium text-ink">{project.title}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="border-b border-line bg-bg py-16 md:py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title={`Questions about ${service.shortName.toLowerCase()}.`} />
          <div className="mt-10">
            <Accordion
              items={service.faqs.map((faq, index) => ({
                id: `${service.slug}-${index}`,
                question: faq.question,
                answer: faq.answer,
              }))}
            />
          </div>
        </Container>
      </section>

      {/* Related services + CTA */}
      <section className="bg-ink py-16 text-white md:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-lg">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to request this service?
              </h2>
              <p className="mt-3 text-white/60">Contact us for a quotation — pricing depends on the specific job.</p>
            </div>
            <div className="flex flex-wrap gap-4">
<Button href="/request-service" className="!bg-white !text-ink hover:!bg-white/90">                Request a Service
              </Button>
              <Button href={buildWhatsAppLink(message)} variant="whatsapp" external>
                WhatsApp Us
              </Button>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-10">
            <p className="font-mono text-xs uppercase tracking-widest2 text-white/40">
              Other services
            </p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-sm text-white/70 hover:text-white"
                >
                  {s.name} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
