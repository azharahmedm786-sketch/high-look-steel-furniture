import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { ServiceRequestForm } from "@/components/sections/ServiceRequestForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request a Service",
  description:
    "Tell High Look Steel Furniture what you need — new order, repair, painting, or hardware fix.",
  path: "/request-service",
});

export default function RequestServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Request a Service"
        title="Tell us what you need."
        description="Fill in the details below, or call/WhatsApp us directly if that's easier."
      />
      <section className="bg-surface py-16 md:py-24">
        <Container className="max-w-2xl">
          <ServiceRequestForm />
        </Container>
      </section>
    </>
  );
}