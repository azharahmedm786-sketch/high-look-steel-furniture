import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { footerNav, legalNav } from "@/data/nav";
import { services } from "@/data/services";
import { business, buildTelLink, buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl font-semibold tracking-tight">HIGH LOOK</p>
            <p className="font-mono text-xs uppercase tracking-widest2 text-white/50">
              Steel Furniture
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-widest2 text-white/60">
              Strong &bull; Durable &bull; Stylish
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {business.serviceAreaNote}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={buildTelLink()}
                className="flex items-center gap-2 border border-white/20 px-4 py-2.5 text-sm hover:border-white/40"
              >
                <PhoneIcon className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
              <a
                href={buildWhatsAppLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-whatsapp px-4 py-2.5 text-sm text-white hover:opacity-90"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest2 text-white/40">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest2 text-white/40">Services</p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {legalNav.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
