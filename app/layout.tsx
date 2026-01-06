// app/layout.tsx
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(componentes)/ui/Header";
import Footer from "./(componentes)/ui/Footer";
import ScrollToTop from "./(componentes)/ui/ScrollToTop";

// ============================================================================
// FONTS - Inter (similar to Geist Sans, auto-hosted by Next.js)
// ============================================================================
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans", // Keep same variable name
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// ============================================================================
// SITE CONFIGURATION
// ============================================================================
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://recibasicos.com";
const SITE_NAME = "Recibásicos";
const SITE_TITLE = "Recibásicos - Reciclaje de Residuos Electrónicos | Trexan Recycling Group";
const SITE_DESCRIPTION =
  "Líder en acopio y valorización de residuos electrónicos en México. Certificaciones R2v3, ISO 14001 e ISO 45001. Trazabilidad total y cumplimiento normativo garantizado.";

// ============================================================================
// METADATA - SEO Optimization
// ============================================================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  
  description: SITE_DESCRIPTION,
  
  keywords: [
    "reciclaje electrónico",
    "RAEE",
    "residuos electrónicos",
    "certificación R2v3",
    "ISO 14001",
    "ISO 45001",
    "economía circular",
    "destrucción de datos",
    "Trexan",
    "México",
  ],
  
  authors: [{ name: "Recibásicos - Trexan Recycling Group" }],
  
  creator: "Recibásicos",
  publisher: "Trexan Recycling Group",
  
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
  
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Recibásicos - Reciclaje de Residuos Electrónicos",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@trexanrecycling",
  },
  
  alternates: {
    canonical: "/",
  },
  
  verification: {
    // Add when you have them:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  
  category: "business",
};

// ============================================================================
// VIEWPORT - Mobile optimization
// ============================================================================
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "047857" },
    { media: "(prefers-color-scheme: dark)", color: "065F46" },
  ],
};

// ============================================================================
// ROOT LAYOUT
// ============================================================================
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}