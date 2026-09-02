import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqs, faqCategories } from "@/data/faq";
import { faqPageJsonLd } from "@/lib/structuredData";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about High Look Steel Furniture's orders, repairs, painting, and service requests.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs.map((f) => ({ question: f.question, answer: f.answer })))} />
      <PageHeader eyebrow="FAQ" title="Common questions." />
      <section className="bg-surface py-16 md:py-24">
        <Container className="max-w-3xl">
          {faqCategories.map((category) => {
            const items = faqs.filter((f) => f.category === category);
            return (
              <div key={category} className="mb-14 last:mb-0">
                <h2 className="mb-4 font-mono text-xs uppercase tracking-widest2 text-red">
                  {category}
                </h2>
                <Accordion items={items} />
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
