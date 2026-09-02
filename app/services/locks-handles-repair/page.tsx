import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getServiceBySlug("locks-handles-repair")!;

export const metadata = buildMetadata({
  title: service.name,
  description: service.metaDescription,
  path: "/services/locks-handles-repair",
});

export default function Page() {
  return <ServiceDetailTemplate slug="locks-handles-repair" />;
}
