"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { MenuIcon, CloseIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { primaryNav } from "@/data/nav";
import { business, buildTelLink, buildWhatsAppLink, defaultWhatsAppMessage } from "@/data/contact";
import { trackEvent } from "@/lib/analytics";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-bg/90 backdrop-blur" : "border-transparent bg-bg"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-tight text-ink md:text-xl">
            HIGH LOOK
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-soft">
            Steel Furniture
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {primaryNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-red" : "text-ink hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={buildTelLink()}
            onClick={() => trackEvent("phone_clicked", { location: "header" })}
            className="flex items-center gap-2 border border-ink/15 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <a
            href={buildWhatsAppLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_clicked", { location: "header" })}
            className="flex items-center gap-2 bg-whatsapp px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-line bg-bg lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 text-base font-medium ${
                  pathname === link.href ? "text-red" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/faq" className="py-3 text-base font-medium text-ink">
              FAQ
            </Link>
            <div className="mt-3 flex flex-col gap-3 border-t border-line pt-4">
              <a
                href={buildTelLink()}
                onClick={() => trackEvent("phone_clicked", { location: "mobile_menu" })}
                className="flex items-center justify-center gap-2 border border-ink/15 px-4 py-3 text-sm font-medium text-ink"
              >
                <PhoneIcon className="h-4 w-4" />
                Call {business.phoneDisplay}
              </a>
              <a
                href={buildWhatsAppLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_clicked", { location: "mobile_menu" })}
                className="flex items-center justify-center gap-2 bg-whatsapp px-4 py-3 text-sm font-medium text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
