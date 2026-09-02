import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { ServiceRequestForm } from "@/components/sections/ServiceRequestForm";
import { business, buildTelLink, buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Call, WhatsApp, or send a request to High Look Steel Furniture.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        description={business.serviceAreaNote}
      />
      <section className="bg-surface py-16 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest2 text-ink-soft">
                {business.name}
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={buildTelLink()}
                  className="flex items-center gap-3 text-lg font-medium text-ink hover:text-navy"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {business.phoneDisplay}
                </a>
                <a
                  href={buildWhatsAppLink(defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg font-medium text-ink hover:text-whatsapp"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {business.phoneDisplay}
                </a>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
              {business.serviceAreaNote}
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">Request a Service</h2>
            <ServiceRequestForm />
          </div>
        </Container>
      </section>
    </>
  );
}
