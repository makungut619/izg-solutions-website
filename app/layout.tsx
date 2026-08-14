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
    "website development South Africa",
    "website development Centurion",
    "web developer Centurion",
    "web design Gauteng",
    "web design Pretoria",
    "affordable website South Africa",
    "small business website South Africa",
    "business website Pretoria",
    "SME website",
    "WhatsApp chatbot South Africa",
    "WhatsApp automation South Africa",
    "WhatsApp bot for business",
    "chatbot developer Gauteng",
    "WhatsApp ordering system",
    "WhatsApp booking bot",
    "business automation South Africa",
    "digital presence",
    "digital catalogue",
    "custom digital solutions South Africa",
    "ecommerce website South Africa",
  ],
  authors: [{ name: "IZG Solutions" }],
  creator: "IZG Solutions",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0c93e7" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.izgsolutions.co.za",
    siteName: "IZG Solutions",
    title: "IZG Solutions | Your Business, Always On",
    description:
      "Professional websites and WhatsApp chatbot automation for small and medium businesses in South Africa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IZG Solutions - Professional websites and WhatsApp chatbot automation for growing businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IZG Solutions | Your Business, Always On",
    description:
      "Professional websites and WhatsApp chatbot automation for small and medium businesses in South Africa.",
    images: ["/twitter-card.jpg"],
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
  verification: {
    google: "KdR8fn6bfbim5XSLxQ710pi-VIZFboFB5YGHBu1Totk",
  },
  other: {
    "msapplication-TileColor": "#0c93e7",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.izgsolutions.co.za/#business",
    name: "IZG Solutions",
    url: "https://www.izgsolutions.co.za",
    logo: "https://www.izgsolutions.co.za/schema-logo.png",
    image: "https://www.izgsolutions.co.za/og-image.jpg",
    description:
      "Professional websites and WhatsApp chatbot automation for small and medium businesses in South Africa.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Centurion",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.8603,
      longitude: 28.1894,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27-72-362-8397",
      contactType: "sales",
      email: "info@izgsolutions.co.za",
      availableLanguage: ["English"],
    },
    priceRange: "R3000 - R12000",
    areaServed: [
      {
        "@type": "Country",
        name: "South Africa",
      },
      {
        "@type": "City",
        name: "Centurion",
      },
      {
        "@type": "City",
        name: "Pretoria",
      },
      {
        "@type": "AdministrativeArea",
        name: "Gauteng",
      },
    ],
    sameAs: [
      "https://www.instagram.com/izgsolutions",
      "https://www.tiktok.com/@izg.solutions",
      "https://x.com/izgsolutions",
    ],
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
