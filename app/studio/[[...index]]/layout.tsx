import type { Metadata } from "next";
import type { ReactNode } from "react";

// ============================================================================
// METADATA FOR SEO
// ============================================================================
export const metadata: Metadata = {
  title: "Studio | Sanity CMS | Recibásicos",
  description: "Content management system for Recibásicos website",
  robots: "noindex, nofollow", // Prevent search engines from indexing the studio
};

/**
 * Studio layout component
 * Wraps the Sanity Studio with metadata
 */
export default function StudioLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}