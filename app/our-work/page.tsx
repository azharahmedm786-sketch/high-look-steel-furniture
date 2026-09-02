"use client";

import { useState } from "react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SiteImage } from "@/components/ui/SiteImage";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { galleryProjects, galleryCategories } from "@/data/gallery";
import { getServiceBySlug } from "@/data/services";
import type { GalleryProject } from "@/types";

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryProject["category"] | "all">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryProjects
      : galleryProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="A portfolio of steel furniture, done properly."
        description="New almirahs, repairs, painting, and everything in between. Filter by category to see a specific kind of work."
      />

      <section className="border-b border-line bg-surface py-4">
        <Container className="flex flex-wrap gap-2 py-4">
          {galleryCategories.map((category) => {
            const active = activeCategory === category.key;
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                aria-pressed={active}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-ink text-white" : "border border-line text-ink-soft hover:border-ink/40"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </Container>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => {
              const service = getServiceBySlug(project.serviceSlug);
              const isExpanded = expandedId === project.id;
              const canExpand = project.hasBeforeAfter && project.beforeImage && project.afterImage;

              return (
                <article key={project.id} className="flex flex-col gap-3 border border-line bg-surface p-3">
                  {isExpanded && canExpand && project.beforeImage && project.afterImage ? (
                    <BeforeAfterSlider before={project.beforeImage} after={project.afterImage} />
                  ) : (
                    <SiteImage
                      image={project.image}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  )}
                  <div className="flex items-start justify-between gap-3 px-1 pb-1">
                    <div>
                      <p className="text-sm font-medium text-ink">{project.title}</p>
                      <p className="mt-1 text-xs text-ink-soft">{project.description}</p>
                      {service ? (
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-ink-soft/70">
                          {service.shortName}
                        </p>
                      ) : null}
                    </div>
                    {canExpand ? (
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                        className="shrink-0 whitespace-nowrap text-xs font-medium text-red underline underline-offset-4"
                      >
                        {isExpanded ? "Hide compare" : "Before/After"}
                      </button>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-sm text-ink-soft">
              No projects in this category yet.
            </p>
          ) : null}
        </Container>
      </section>
    </>
  );
}
