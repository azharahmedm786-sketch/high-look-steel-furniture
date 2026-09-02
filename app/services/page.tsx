import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Services",
  description:
    "New almirah orders, bulk manufacturing, cutting & preparing, repairs, leg installation, painting, and lock & handle repairs.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Seven services, one steel furniture standard."
        description="From a brand-new almirah to a small lock repair, every job is handled to the same standard of finish."
      />
      <ServicesShowcase />
      <ClosingCta />
    </>
  );
}
