import type { ServiceImage } from "@/types";

/**
 * Renders a clearly-marked, correctly-proportioned image placeholder.
 *
 * WHY NOT next/image WITH A REAL FILE YET:
 * No production photographs have been supplied. Rather than shipping
 * broken image icons or generated stock photography, every image slot
 * on the site reserves the exact aspect ratio real photos will use.
 *
 * TO REPLACE WITH A REAL PHOTO:
 * 1. Drop the file at the `src` path shown in the corner label (under
 *    /public/images/...).
 * 2. Swap <PlaceholderImage image={...} /> for:
 *      <Image src={image.src} alt={image.alt} fill className="object-cover" />
 *    inside a `relative` wrapper with the same aspect-ratio class.
 * No layout changes are needed — the aspect ratio is already correct.
 */
const aspectClass: Record<ServiceImage["aspect"], string> = {
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export function PlaceholderImage({
  image,
  className = "",
  priority = false,
}: {
  image: ServiceImage;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-navy ${aspectClass[image.aspect]} ${className}`}
      role="img"
      aria-label={image.alt}
      data-priority={priority || undefined}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/50"
        >
          <rect x="3" y="6" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <path d="M3 16l4.5-4.5a1.5 1.5 0 0 1 2.1 0L14 15.9l1.6-1.6a1.5 1.5 0 0 1 2.1 0L21 17.7" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="8" cy="10" r="1.4" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        <p className="max-w-[220px] text-xs font-medium leading-snug text-white/70">
          {image.alt}
        </p>
      </div>
      <span className="absolute bottom-2 left-2 rounded-sm bg-black/40 px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-white/60">
        {image.src}
      </span>
    </div>
  );
}
