/**
 * Single source of truth for business identity and contact details.
 * Edit this file to update the business name, phone number, or WhatsApp
 * number everywhere on the site.
 */
export const business = {
  name: "High Look Steel Furniture",
  shortName: "High Look",
  tagline: "Strong. Durable. Stylish.",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "98452 71535",
  phoneE164: process.env.NEXT_PUBLIC_PHONE_E164 || "+919845271535",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919845271535",
  // No physical address or fixed hours have been supplied by the business.
  // Do not invent one — this line is shown instead wherever a location or
  // hours would normally appear.
  serviceAreaNote: "Contact us to check service availability in your area.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.highlooksteel.com",
} as const;

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${business.whatsappNumber}?text=${encoded}`;
}

export function buildTelLink(): string {
  return `tel:${business.phoneE164}`;
}

export const defaultWhatsAppMessage = `Hi ${business.name}, I'd like to know more about your services.`;
