import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getServiceBySlug("new-almirah-orders")!;

export const metadata = buildMetadata({
  title: service.name,
  description: service.metaDescription,
  path: "/services/new-almirah-orders",
});

export default function Page() {
  return <ServiceDetailTemplate slug="new-almirah-orders" />;
}
