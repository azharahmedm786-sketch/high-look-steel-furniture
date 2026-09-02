import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { localBusinessJsonLd } from "@/lib/structuredData";
import { business } from "@/data/contact";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1B33",
};

export const metadata: Metadata = {
 metadataBase: new URL(business.siteUrl),

  title: {
    default: `${business.name} — Strong. Durable. Stylish.`,
    template: `%s | ${business.name}`,
  },

  description:
    "New steel almirah orders, bulk manufacturing, cutting & preparing, repairs, leg installation.",

  icons: {
    icon: "/high-look-steel-furniture/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="flex min-h-screen flex-col pb-16 lg:pb-0">
        <JsonLd data={localBusinessJsonLd()} />

        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        <MobileActionBar />
      </body>
    </html>
  );
}