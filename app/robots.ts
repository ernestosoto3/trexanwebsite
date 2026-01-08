// app/robots.ts
import type { MetadataRoute } from "next";

/**
 * Robots.txt configuration
 * Tells search engines which pages to crawl and index
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://recibasicos.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/studio",      // Block Sanity Studio from search engines
          "/studio/*",    // Block all studio routes
          "/api/*",       // Block API routes from indexing
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}