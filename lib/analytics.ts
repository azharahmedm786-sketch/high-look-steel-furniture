/**
 * Provider-agnostic analytics event tracking.
 *
 * No analytics script is loaded unless NEXT_PUBLIC_ANALYTICS_PROVIDER is
 * set (see .env.example), so nothing is tracked out of the box — this
 * keeps the site privacy-respecting by default while making it easy to
 * wire up GA4 / Plausible / another provider later.
 */
export type AnalyticsEvent =
  | "whatsapp_clicked"
  | "phone_clicked"
  | "service_viewed"
  | "service_request_started"
  | "service_request_submitted"
  | "gallery_viewed"
  | "contact_form_submitted";

export function trackEvent(event: AnalyticsEvent, payload?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;
  if (!provider) return;

  const w = window as typeof window & {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props?: Record<string, string> }) => void;
  };

  if (provider === "ga4" && typeof w.gtag === "function") {
    w.gtag("event", event, payload || {});
  }

  if (provider === "plausible" && typeof w.plausible === "function") {
    w.plausible(event, { props: payload });
  }
}
