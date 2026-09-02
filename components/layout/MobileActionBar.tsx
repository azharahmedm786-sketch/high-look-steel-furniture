"use client";

import Link from "next/link";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { business, buildTelLink, buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/contact";
import { trackEvent } from "@/lib/analytics";

export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <a
        href={buildTelLink()}
        onClick={() => trackEvent("phone_clicked", { location: "mobile_bar" })}
        className="flex flex-col items-center justify-center gap-1 border-r border-line py-3 text-ink"
      >
        <PhoneIcon className="h-5 w-5" />
        <span className="text-[11px] font-medium">Call</span>
      </a>
      <a
        href={buildWhatsAppLink(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_clicked", { location: "mobile_bar" })}
        className="flex flex-col items-center justify-center gap-1 border-r border-line bg-whatsapp py-3 text-white"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="text-[11px] font-medium">WhatsApp</span>
      </a>
      <Link
        href="/request-service"
        className="flex flex-col items-center justify-center gap-1 bg-ink py-3 text-white"
      >
        <span className="text-lg leading-none">+</span>
        <span className="text-[11px] font-medium">Request</span>
      </Link>
      <p className="sr-only">
        {business.name}, {business.phoneDisplay}
      </p>
    </div>
  );
}
