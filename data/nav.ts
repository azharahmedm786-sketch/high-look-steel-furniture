import type { NavLink } from "@/types";

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavLink[] = [
  ...primaryNav,
  { label: "FAQ", href: "/faq" },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];
