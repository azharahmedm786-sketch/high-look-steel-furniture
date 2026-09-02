import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Work",
  description:
    "A portfolio of steel almirah and furniture projects: new builds, repairs, painting, leg installation, and locks & handles work.",
  path: "/our-work",
});

export default function OurWorkLayout({ children }: { children: ReactNode }) {
  return children;
}
