/**
 * Content models for High Look Steel Furniture.
 *
 * These types intentionally mirror the shape a future CMS / admin
 * dashboard would store in a database, so that data/*.ts files can be
 * swapped for API calls later without changing any component.
 */

export type ServiceSlug =
  | "new-almirah-orders"
  | "bulk-manufacturing"
  | "cutting-preparing"
  | "almirah-repairs"
  | "new-legs-installation"
  | "steel-painting"
  | "locks-handles-repair";

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceImage {
  /** Path relative to /public, e.g. "/images/services/almirah-repair.jpg" */
  src: string;
  alt: string;
  /** width / height, used to reserve layout space before the real photo is added */
  aspect: "square" | "landscape" | "portrait" | "wide";
}

export interface Service {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  /** One line used on cards */
  tagline: string;
  /** 2–3 sentence card description */
  cardDescription: string;
  /** Icon key rendered by <ServiceIcon /> */
  icon:
    | "cabinet"
    | "factory"
    | "cut"
    | "wrench"
    | "leg"
    | "spray"
    | "lock";
  heroImage: ServiceImage;
  gridSpan: "large" | "medium";
  intro: string;
  whatWeDo: string[];
  commonRequirements: string[];
  process: { title: string; description: string }[];
  hasBeforeAfter: boolean;
  faqs: ServiceFaqItem[];
  metaDescription: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  serviceSlug: ServiceSlug;
  category:
    | "new-almirahs"
    | "repairs"
    | "painting"
    | "locks-handles"
    | "leg-installation"
    | "bulk-work"
    | "cutting-preparing";
  description: string;
  image: ServiceImage;
  hasBeforeAfter: boolean;
  beforeImage?: ServiceImage;
  afterImage?: ServiceImage;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
