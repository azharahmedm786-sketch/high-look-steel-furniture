import { PageHeader } from "@/components/sections/PageHeader";
import { WhyHighLook } from "@/components/sections/WhyHighLook";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ValueProps } from "@/components/sections/ValueProps";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Why Us",
  description:
    "Why High Look Steel Furniture: quality workmanship, durable results, professional service, and clean finishing on every job.",
  path: "/why-us",
});

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why High Look"
        title="Judged by the finish, not the pitch."
        description="We'd rather the work speak for itself than make claims we can't back up."
      />
      <ValueProps />
      <WhyHighLook showCta={false} />
      <HowItWorks />
      <ClosingCta />
    </>
  );
}
