'use client';

import type { Metadata } from "next";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity/sanity.config";

// ============================================================================
// METADATA FOR SEO
// Note: This won't work in a client component, but documenting for reference
// If you need metadata, you'd need to create a separate layout.tsx file
// ============================================================================
// export const metadata: Metadata = {
//   title: "Studio | Sanity CMS",
//   description: "Content management system for Recibásicos website",
//   robots: "noindex, nofollow", // Prevent search engines from indexing the studio
// };

/**
 * Sanity Studio page component
 * This is a client component that renders the Sanity Studio interface
 * 
 * @see https://www.sanity.io/docs/create-a-sanity-powered-website-with-next-js
 */
export default function StudioPage() {
  return <NextStudio config={config} />;
}