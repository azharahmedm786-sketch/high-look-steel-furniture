import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms",
  description: `Terms of use for the ${business.name} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms" />
      <section className="bg-surface py-16 md:py-24">
        <Container className="max-w-2xl text-sm leading-relaxed text-ink-soft">
          <h2 className="text-lg font-semibold text-ink">Use of this website</h2>
          <p className="mt-3">
            This website describes the services offered by {business.name} and allows you to get
            in touch to request one. Information on this site is provided for general reference
            and is not a binding quotation.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-ink">Quotations and pricing</h2>
          <p className="mt-3">
            Prices are not published on this website because they depend on the specific item,
            size, and work involved. Any quotation is only confirmed once discussed directly with
            us.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-ink">Service requests</h2>
          <p className="mt-3">
            Submitting a service request through this website, by phone, or by WhatsApp does not
            itself confirm a booking. A booking is confirmed once details and scheduling are agreed
            directly with us.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-ink">Content accuracy</h2>
          <p className="mt-3">
            We aim to keep the information on this site accurate and up to date, but details such
            as services offered may change. Contact us to confirm current availability.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-ink">Contact</h2>
          <p className="mt-3">
            Questions about these terms can be directed to us at {business.phoneDisplay}.
          </p>
        </Container>
      </section>
    </>
  );
}
