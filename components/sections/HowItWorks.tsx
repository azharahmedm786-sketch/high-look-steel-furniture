import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GaugeRule } from "@/components/ui/GaugeRule";

const steps = [
  { number: "01", title: "Tell Us What You Need", description: "Call, WhatsApp, or fill in the request form with your requirement." },
  { number: "02", title: "Share Photos & Requirements", description: "Photos of the item or space help us understand the job before we arrive." },
  { number: "03", title: "Get Your Quote & Schedule", description: "We confirm the work involved, give you a quotation, and agree a time." },
  { number: "04", title: "We Complete the Service", description: "The work is carried out and finished to the agreed specification." },
];

export function HowItWorks() {
  return (
    <section className="border-b border-line bg-navy py-20 text-white md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A straightforward process."
          description="From first message to finished work, in four steps."
        />
        <GaugeRule orientation="horizontal" className="my-10" count={60} />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3">
              <span className="font-mono text-sm text-red">{step.number}</span>
              <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
