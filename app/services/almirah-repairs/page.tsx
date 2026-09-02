import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getServiceBySlug("almirah-repairs")!;

export const metadata = buildMetadata({
  title: service.name,
  description: service.metaDescription,
  path: "/services/almirah-repairs",
});

export default function Page() {
  return <ServiceDetailTemplate slug="almirah-repairs" />;
}
