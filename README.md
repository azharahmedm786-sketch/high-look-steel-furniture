# High Look Steel Furniture — Website

Production website for High Look Steel Furniture, built with Next.js 14
(App Router), TypeScript, and Tailwind CSS.

## 1. Requirements

- Node.js 18.18 or later
- npm (comes with Node)

## 2. Installation

```bash
npm install
```

## 3. Environment variables

Copy the example file and fill in real values:

```bash
cp .env.example .env.local
```

See `.env.example` for what each variable does. At minimum, set
`NEXT_PUBLIC_SITE_URL` to the real domain before deploying — it's used
in metadata, the sitemap, and structured data.

## 4. Local development

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 5. Build

```bash
npm run build
```

Then to run the production build locally:

```bash
npm run start
```

Also available:

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript, no emit
```

> **Note on this delivery:** the environment this project was built in
> had no network access, so `npm install` / `npm run build` /
> `npm run lint` could not be executed here to produce a live pass/fail
> result. The code was instead audited manually and systematically —
> import resolution, bracket/brace balance, unused imports, `React.*`
> type usage without imports (found and fixed), Tailwind class names
> against the config, internal link targets against real routes, and
> the content rules below — but please run the four commands above
> once after `npm install` on your machine before deploying, and open
> an issue/ask if anything surfaces.

## 6. Production deployment

This is a standard Next.js app and deploys cleanly to:

- **Vercel** (recommended): connect the repo, set the environment
  variables from `.env.example` in the project settings, deploy.
- **Netlify**: use the official Next.js runtime/plugin, set the same
  environment variables.
- Any Node host that can run `npm run build && npm run start`.

Remember to set `NEXT_PUBLIC_SITE_URL` (and the phone/WhatsApp
variables if they ever change) in the hosting platform's environment
variable settings, not just in a local `.env.local`.

## 7. How to replace placeholder images with real photos

No real business photographs were available while building this site,
so every image slot currently renders a labeled placeholder — a
correctly-proportioned box showing the intended file path and a short
description — instead of a broken image or a generated stock photo.

To swap one in:

1. Save the real photo at the path shown in the placeholder's corner
   label, under `public/images/...` (folders already exist for
   `hero/`, `services/`, `work/`, `before-after/`, `team/`, `gallery/`).
2. Find the component rendering that placeholder (usually
   `<PlaceholderImage image={...} />`) and swap it for Next's built-in
   `<Image>` component inside a `relative` wrapper with the same
   aspect-ratio class, e.g.:

   ```tsx
   <div className="relative w-full aspect-[4/3]">
     <Image src={image.src} alt={image.alt} fill className="object-cover" />
   </div>
   ```

   Full instructions and the reasoning are documented at the top of
   `components/ui/PlaceholderImage.tsx`.
3. No layout changes are needed — every placeholder already reserves
   the exact aspect ratio the real photo will use.

## 8. How to modify business information

Everything about the business — name, tagline, phone number, WhatsApp
number, and the "no fixed address/hours" note — lives in one file:

```
data/contact.ts
```

Change it there and it updates everywhere (header, footer, every CTA,
structured data, sitemap).

## 9. How to add or edit services

The seven approved services live in:

```
data/services.ts
```

Each entry drives its card on the homepage/services page **and** its
full detail page automatically — there's no separate content to edit
per page. To edit a service's copy, FAQs, or process steps, edit its
object in this file. **Do not add an eighth service** without updating
the seven dedicated route folders under `app/services/` to match (the
routes are static, not dynamically generated, so a truly new service
needs its own `page.tsx` following the pattern of the existing ones).

## 10. How to add gallery ("Our Work") projects

Portfolio projects live in:

```
data/gallery.ts
```

Add a new object to the `galleryProjects` array with a unique `id`,
the `serviceSlug` it relates to, a `category` (must match one of the
keys in `galleryCategories` in the same file), an image, and optionally
`beforeImage`/`afterImage` for the compare-slider.

## 11. Content & structure notes

- **No fabricated content:** there is no fake address, hours, pricing,
  certifications, statistics, or testimonials anywhere in this codebase
  — search `data/` and you'll find only what was explicitly provided,
  plus honest fallback copy like "Contact us for a quotation."
- **No QR/UPI payment scanner** exists anywhere in this project.
- **Only seven services** are represented anywhere in the UI, nav,
  forms, or structured data — enforced by `data/services.ts` being the
  single source of truth every other file reads from.
- **Service request form**: works fully client-side (validation, file
  type/size/count checks) but has no backend yet. It will not fake a
  successful submission — if `NEXT_PUBLIC_FORM_ENDPOINT` isn't set, it
  shows an honest message directing the person to call/WhatsApp
  instead. Set that env var to a real endpoint once one exists.

## 12. Architecture at a glance

```
app/            Routes (App Router) — one folder per URL
components/ui/  Small reusable primitives (Button, Accordion, icons...)
components/sections/  Page sections composed from ui/ primitives
components/layout/    Header, Footer, mobile action bar
data/           Editable content — services, gallery, FAQ, nav, contact
lib/            SEO helpers, structured data, form validation, analytics
types/          Shared TypeScript content models
public/images/  Real photos go here (currently placeholders only)
```

This structure was chosen so that a future admin dashboard or CMS can
replace the files in `data/` with API calls without touching any
component — every section reads from `data/`, never hardcodes content.
