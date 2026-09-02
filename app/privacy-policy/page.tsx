import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${business.name} handles information submitted through this website.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="bg-surface py-16 md:py-24">
        <Container className="max-w-2xl text-sm leading-relaxed text-ink-soft">
          <p>
            This page explains, in plain terms, how {business.name} handles information you share
            through this website.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-ink">Information we collect</h2>
          <p className="mt-3">
            When you use the Request a Service form or contact form, we collect the details you
            provide — such as your name, phone number, location, service requirement, and any
            photos you choose to upload. We do not collect information beyond what you submit.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-ink">How we use it</h2>
          <p className="mt-3">
            Information you submit is used only to respond to your request, understand the work
            involved, and arrange the service you asked about.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-ink">WhatsApp and phone contact</h2>
          <p className="mt-3">
            If you contact us by WhatsApp or phone, that conversation is subject to WhatsApp&apos;s
            or your telecom provider&apos;s own privacy practices in addition to ours.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-ink">Analytics</h2>
          <p className="mt-3">
            This site may use privacy-respecting analytics to understand which pages and actions
            (such as a WhatsApp click or a form submission) are useful to visitors. No analytics
            provider is active unless explicitly configured.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-ink">Contacting us</h2>
          <p className="mt-3">
            If you have questions about this policy or want information removed, contact us at{" "}
            {business.phoneDisplay}.
          </p>

          <p className="mt-10 text-xs text-ink-soft/70">
            This policy may be updated from time to time. It was last reviewed at the time this
            website was published.
          </p>
        </Container>
      </section>
    </>
  );
}
