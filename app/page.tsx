import { Hero } from "@/components/sections/Hero";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { OurWorkPreview } from "@/components/sections/OurWorkPreview";
import { WhyHighLook } from "@/components/sections/WhyHighLook";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "High Look Steel Furniture — Strong. Durable. Stylish.",
  description:
    "New steel almirah orders, bulk manufacturing, cutting & preparing, repairs, leg installation, painting, and lock & handle repairs.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <BeforeAfterSection />
      <ValueProps />
      <ServicesShowcase />
      <HowItWorks />
      <OurWorkPreview />
      <WhyHighLook />
      <ClosingCta />
    </>
  );
}