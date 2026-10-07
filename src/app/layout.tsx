import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Analytics } from "@/components/site/analytics";
import { CookieBanner } from "@/components/site/cookie-banner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const SITE_URL = "https://tradehound.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TradeHound — AI field service management for the trades",
    template: "%s — TradeHound",
  },
  description:
    "TradeHound turns a technician's voice memo into a client-ready report, reviewed line items, and an invoice with a payment link. Dispatch, collections, and preventive maintenance in one place.",
  keywords: [
    "field service management",
    "HVAC software",
    "plumbing dispatch software",
    "AI job reports",
    "trades invoicing",
    "service business software",
  ],
  authors: [{ name: "TradeHound" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "TradeHound",
    title: "TradeHound — AI field service management for the trades",
    description:
      "Speak the job. TradeHound writes the report, drafts the line items for your review, and sends the invoice.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeHound — AI field service management for the trades",
    description:
      "Speak the job. TradeHound writes the report, drafts the line items for your review, and sends the invoice.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-on-primary"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
