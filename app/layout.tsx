import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import FloatingCTA from "@/components/site/floating-cta";
import MobileCTABar from "@/components/site/mobile-cta-bar";
import { site, contact } from "@/content/site";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fontDisplay = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: `${site.shortName} | Obras Civiles y Electromecánicas`,
    template: `%s | ${site.shortName}`
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.shortName} | Obras Civiles y Electromecánicas`,
    description: site.description,
    url: site.url,
    siteName: site.shortName,
    type: "website",
    images: [{ url: "/images/og.jpg" }]
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    foundingDate: String(site.founded),
    areaServed: "Panamá",
    telephone: contact.phones,
    email: contact.emails,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressLocality: "Santiago",
      addressRegion: "Veraguas",
      addressCountry: "PA"
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${fontSans.variable} ${fontDisplay.variable} font-sans antialiased`}>
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <FloatingCTA />
        <MobileCTABar />
        {/* Espacio para que la barra mobile no tape contenido */}
        <div className="h-16 md:hidden" />
      </body>
    </html>
  );
}
