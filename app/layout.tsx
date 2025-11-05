// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // keep if you have global CSS

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://trexan.com"),
  title: "Trexan — Sustainable Metals from E-Waste",
  description: "Trexan transforms electronic waste into a sustainable source of metals.",
  openGraph: {
    title: "Trexan — Sustainable Metals from E-Waste",
    description: "Investor-ready circularity: metals recovered responsibly.",
    url: "/",
    siteName: "Trexan",
    images: [{ url: "/og.jpg" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trexan",
    description: "Sustainable metals from e-waste.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
