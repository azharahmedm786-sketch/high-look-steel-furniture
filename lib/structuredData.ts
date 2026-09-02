import { business } from "@/data/contact";
import type { Service, FaqItem } from "@/types";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    telephone: business.phoneE164,
    url: business.siteUrl,
    description:
      "Steel almirah and steel furniture services: new orders, bulk manufacturing, cutting & preparing, repairs, leg installation, painting, and lock & handle repairs.",
    // No verified street address or fixed hours have been supplied by the
    // business, so none is included here — do not fabricate one.
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneE164,
    },
    url: `${business.siteUrl}/services/${service.slug}`,
  };
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, business.siteUrl).toString(),
    })),
  };
}

export type JsonLdObject = ReturnType<
  typeof localBusinessJsonLd | typeof serviceJsonLd | typeof faqPageJsonLd | typeof breadcrumbJsonLd
>;

// Re-export FaqItem for convenience where this module is imported for typing.
export type { FaqItem };
