import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/contact";

export function ClosingCta({
  title = "Ready to get started?",
  description = "Tell us what you need and we'll take it from there.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-ink py-20 text-white md:py-24">
      <Container className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-lg">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-3 text-white/60">{description}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href="/request-service" className="bg-white text-ink hover:bg-white/90">
            Request a Service
          </Button>
          <Button href={buildWhatsAppLink(defaultWhatsAppMessage)} variant="whatsapp" external>
            WhatsApp Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
