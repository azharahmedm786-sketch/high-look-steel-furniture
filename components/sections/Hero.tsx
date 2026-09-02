import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GaugeRule } from "@/components/ui/GaugeRule";
import { SiteImage } from "@/components/ui/SiteImage";
import { buildWhatsAppLink } from "@/data/contact";

export function Hero() {
  const whatsappMessage =
    "Hi High Look Steel Furniture, I'm exploring your services and would like to know more.";

  return (
    <section className="relative overflow-hidden border-b border-line bg-bg">
      <Container className="grid gap-12 py-14 md:py-20 lg:grid-cols-[auto_1fr] lg:gap-16 lg:py-28">
        <GaugeRule className="hidden h-full lg:flex" count={30} />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-7 animate-fade-up">
            <span className="eyebrow">Strong &middot; Durable &middot; Stylish</span>
            <h1 className="text-[2.6rem] font-semibold leading-[1.03] tracking-tight md:text-6xl lg:text-[4rem]">
              Steel furniture
              <br />
              made to last.
            </h1>
            <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
              Quality you can trust. Service you can count on. From a new
              almirah to a repair that keeps an old one going.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="/services">Explore Services</Button>
              <Button href={buildWhatsAppLink(whatsappMessage)} variant="secondary" external>
                WhatsApp Us
              </Button>
            </div>
          </div>

          <div className="animate-fade-in [animation-delay:150ms]">
            <SiteImage
              image={{
                src: "/images/hero/steel-almirah.jpg",
                alt: "Hero photograph of a High Look steel almirah",
                aspect: "portrait",
              }}
              priority
              className="lg:aspect-[4/5]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
