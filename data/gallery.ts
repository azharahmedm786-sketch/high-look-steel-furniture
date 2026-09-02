import type { GalleryProject } from "@/types";

/**
 * Portfolio projects for the Our Work page.
 * Replace image paths with real photos as they become available —
 * see /public/images/work and /public/images/before-after.
 *
 * This array is structured so it can be replaced by an admin-managed
 * `GalleryProject` table later without changing the Our Work page.
 */
export const galleryProjects: GalleryProject[] = [
  {
    id: "project-01",
    title: "Custom Two-Door Almirah",
    serviceSlug: "new-almirah-orders",
    category: "new-almirahs",
    description: "A new two-door almirah built to fit a specific alcove width.",
    image: { src: "/images/work/project-01.jpg", alt: "New two-door steel almirah", aspect: "portrait" },
    hasBeforeAfter: false,
  },
  {
    id: "project-02",
    title: "Rust Repair & Panel Reinforcement",
    serviceSlug: "almirah-repairs",
    category: "repairs",
    description: "Rust removal and panel reinforcement on a long-used almirah base.",
    image: { src: "/images/work/project-02.jpg", alt: "Repaired steel almirah", aspect: "landscape" },
    hasBeforeAfter: true,
    beforeImage: { src: "/images/before-after/almirah-01-before.jpg", alt: "Almirah before repair", aspect: "portrait" },
    afterImage: { src: "/images/before-after/almirah-01-after.jpg", alt: "Almirah after repair", aspect: "portrait" },
  },
  {
    id: "project-03",
    title: "Full Refinish — Navy Matte",
    serviceSlug: "steel-painting",
    category: "painting",
    description: "Surface preparation and a full repaint in a matte navy finish.",
    image: { src: "/images/work/project-03.jpg", alt: "Repainted steel almirah", aspect: "square" },
    hasBeforeAfter: true,
    beforeImage: { src: "/images/before-after/almirah-02-before.jpg", alt: "Almirah door before painting", aspect: "square" },
    afterImage: { src: "/images/before-after/almirah-02-after.jpg", alt: "Almirah door after painting", aspect: "square" },
  },
  {
    id: "project-04",
    title: "Lock Mechanism Replacement",
    serviceSlug: "locks-handles-repair",
    category: "locks-handles",
    description: "Replacement of a jammed lock mechanism and handle realignment.",
    image: { src: "/images/work/project-04.jpg", alt: "Repaired almirah lock", aspect: "square" },
    hasBeforeAfter: false,
  },
  {
    id: "project-05",
    title: "New Leg Set — Raised Base",
    serviceSlug: "new-legs-installation",
    category: "leg-installation",
    description: "New corrosion-resistant legs fitted to raise the base off a damp floor.",
    image: { src: "/images/work/project-05.jpg", alt: "New almirah legs installed", aspect: "landscape" },
    hasBeforeAfter: true,
    beforeImage: { src: "/images/before-after/almirah-03-before.jpg", alt: "Almirah legs before replacement", aspect: "landscape" },
    afterImage: { src: "/images/before-after/almirah-03-after.jpg", alt: "Almirah legs after replacement", aspect: "landscape" },
  },
  {
    id: "project-06",
    title: "Hostel Locker Order",
    serviceSlug: "bulk-manufacturing",
    category: "bulk-work",
    description: "A bulk order of identical lockers manufactured to one specification.",
    image: { src: "/images/work/project-06.jpg", alt: "Bulk steel lockers", aspect: "wide" },
    hasBeforeAfter: false,
  },
  {
    id: "project-07",
    title: "Panel Cutting for Assembly",
    serviceSlug: "cutting-preparing",
    category: "cutting-preparing",
    description: "Steel sheet cut and prepared ahead of assembly.",
    image: { src: "/images/work/project-07.jpg", alt: "Steel sheet cutting", aspect: "square" },
    hasBeforeAfter: false,
  },
  {
    id: "project-08",
    title: "Three-Door Wardrobe Almirah",
    serviceSlug: "new-almirah-orders",
    category: "new-almirahs",
    description: "A larger three-door almirah with an internal locker compartment.",
    image: { src: "/images/work/project-08.jpg", alt: "New three-door steel almirah", aspect: "portrait" },
    hasBeforeAfter: false,
  },
];

export const galleryCategories: { key: GalleryProject["category"] | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "new-almirahs", label: "New Almirahs" },
  { key: "repairs", label: "Repairs" },
  { key: "painting", label: "Painting" },
  { key: "locks-handles", label: "Locks & Handles" },
  { key: "leg-installation", label: "Leg Installation" },
  { key: "bulk-work", label: "Bulk Work" },
  { key: "cutting-preparing", label: "Cutting & Preparing" },
];
