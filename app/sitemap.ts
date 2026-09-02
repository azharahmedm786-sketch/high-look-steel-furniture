import type { MetadataRoute } from "next";
import { business } from "@/data/contact";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/our-work",
    "/why-us",
    "/contact",
    "/faq",
    "/request-service",
    "/privacy-policy",
    "/terms",
  ];

  const servicePaths = services.map((s) => `/services/${s.slug}`);

  const entries: MetadataRoute.Sitemap = [...staticPaths, ...servicePaths].map((path) => {
    const changeFrequency: "weekly" | "monthly" = path === "" ? "weekly" : "monthly";
    const priority = path === "" ? 1 : path === "/services" ? 0.9 : 0.7;
    return {
      url: new URL(path, business.siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  return entries;
}
