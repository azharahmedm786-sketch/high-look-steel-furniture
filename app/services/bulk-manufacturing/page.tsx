import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getServiceBySlug("bulk-manufacturing")!;

export const metadata = buildMetadata({
  title: service.name,
  description: service.metaDescription,
  path: "/services/bulk-manufacturing",
});

export default function Page() {
  return <ServiceDetailTemplate slug="bulk-manufacturing" />;
}
