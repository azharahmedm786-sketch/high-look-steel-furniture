import type { Metadata } from "next";
import { business } from "@/data/contact";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  image?: string;
}

/**
 * Builds consistent per-page metadata: title, description, canonical URL,
 * Open Graph, and Twitter/X card. Call this from each page's
 * `generateMetadata` or `export const metadata`.
 */
export function buildMetadata({ title, description, path, image }: PageMetaInput): Metadata {
  const url = new URL(path, business.siteUrl).toString();
  const ogImage = image || "/images/hero/steel-almirah.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      images: [{ url: ogImage }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function fullTitle(pageTitle: string): string {
  return `${pageTitle} | ${business.name}`;
}
