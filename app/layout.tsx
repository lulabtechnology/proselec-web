import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import FloatingCTA from "@/components/site/floating-cta";
import { site } from "@/content/site";

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
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${fontSans.variable} ${fontDisplay.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
