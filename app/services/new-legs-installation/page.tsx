import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getServiceBySlug("new-legs-installation")!;

export const metadata = buildMetadata({
  title: service.name,
  description: service.metaDescription,
  path: "/services/new-legs-installation",
});

export default function Page() {
  return <ServiceDetailTemplate slug="new-legs-installation" />;
}
