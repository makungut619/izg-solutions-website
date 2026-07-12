import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { Analytics } from "@/components/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.izgsolutions.co.za"),
  title: {
    default: "IZG Solutions | Your Business, Always On",
    template: "%s | IZG Solutions",
  },
  description:
    "Professional websites and WhatsApp chatbot automation for small and medium businesses in South Africa. We build your digital presence and automate customer engagement 24/7.",
  keywords: [
    "website development",
    "website development South Africa",
    "website development Centurion",
    "WhatsApp chatbot",
    "WhatsApp automation South Africa",
    "small business website",
    "business automation",
    "digital presence",
    "web design Gauteng",
    "chatbot for business",
    "digital catalogue",
    "custom digital solutions",
    "SME website",
  ],
  authors: [{ name: "IZG Solutions" }],
  creator: "IZG Solutions",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.izgsolutions.co.za",
    siteName: "IZG Solutions",
    title: "IZG Solutions | Your Business, Always On",
    description:
      "Professional websites and WhatsApp chatbot automation for small and medium businesses in South Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IZG Solutions | Your Business, Always On",
    description:
      "Professional websites and WhatsApp chatbot automation for small and medium businesses in South Africa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.izgsolutions.co.za",
  },
  verification: {
    google: "KdR8fn6bfbim5XSLxQ710pi-VIZFboFB5YGHBu1Totk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IZG Solutions",
    url: "https://www.izgsolutions.co.za",
    logo: "https://www.izgsolutions.co.za/opengraph-image",
    description:
      "Professional websites and WhatsApp chatbot automation for small and medium businesses in South Africa.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Centurion",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27-72-362-8397",
      contactType: "sales",
      email: "info@izgsolutions.co.za",
    },
    sameAs: [],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.izg = window.izg || { track: function() { (window._izg_q = window._izg_q || []).push(arguments); }};`,
          }}
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
