import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GaugeRule } from "@/components/ui/GaugeRule";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center border-b border-line bg-bg">
      <Container className="flex flex-col items-start gap-6">
        <GaugeRule orientation="horizontal" count={40} className="w-full max-w-xs" />
        <span className="eyebrow">404</span>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-ink-soft">
          The page you&apos;re looking for may have moved or the link may be incorrect. You can go
          back to the homepage or browse our services.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/services" variant="secondary">
            View Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
