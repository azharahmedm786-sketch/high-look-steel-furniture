import Image from "next/image";
import type { ServiceImage } from "@/types";

/**
 * This site is deployed to GitHub Pages under a repository subpath
 * (e.g. https://username.github.io/high-look-steel-furniture/), which
 * next.config.mjs sets via `basePath`. Static <Image> src strings do
 * NOT get that prefix added automatically in `output: "export"` mode,
 * so every image path is prefixed with it here, in one place.
 *
 * If this site ever moves to a host that serves it from the domain
 * root (Vercel, a custom domain, etc.), change BASE_PATH to "" and
 * remove `basePath`/`assetPrefix` from next.config.mjs — nothing else
 * needs to change.
 */
const BASE_PATH = "/high-look-steel-furniture";

const aspectClass: Record<ServiceImage["aspect"], string> = {
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export function SiteImage({
  image,
  className = "",
  priority = false,
  sizes = "100vw",
}: {
  image: ServiceImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${aspectClass[image.aspect]} ${className}`}
    >
      <Image
        src={`${BASE_PATH}${image.src}`}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover"
        sizes={sizes}
      />
    </div>
  );
}
