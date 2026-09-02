"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console for local debugging only — no technical details are
    // shown to the visitor.
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center border-b border-line bg-bg">
      <Container className="flex flex-col items-start gap-6">
        <span className="eyebrow">Something went wrong</span>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          We hit a snag loading this page.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-ink-soft">
          Please try again. If the problem continues, call or WhatsApp us directly and we&apos;ll
          help with whatever you were trying to do.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button onClick={reset}>Try Again</Button>
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
