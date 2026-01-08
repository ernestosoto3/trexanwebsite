// app/sitemap.ts
import type { MetadataRoute } from "next";
import { sanityClient } from "@/lib/sanity";


/**
 * Sitemap configuration
 * Tells search engines about all pages on the site and their priority
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://recibasicos.com";
  const currentDate = new Date();

  // ============================================================================
  // STATIC PAGES - Main website pages
  // ============================================================================
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0, // Homepage - highest priority
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nuestra-empresa`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/certificaciones`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sostenibilidad`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9, // Contact is important
    },
    {
      url: `${baseUrl}/industrias`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/noticias`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // ============================================================================
  // INDUSTRY PAGES - All industry sectors
  // ============================================================================
  const industries = [
    "automotriz",
    "educacion",
    "electronica",
    "gobierno",
    "manufactura",
    "retail",
    "salud",
    "tecnologia",
  ];

  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/industrias/${industry}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================================================
  // NEWS ARTICLES - Dynamic from Sanity CMS
  // ============================================================================
  let newsPages: MetadataRoute.Sitemap = [];

  try {
    const noticias = await sanityClient.fetch<Array<{ slug: { current: string }; fecha?: string }>>(
      `*[_type == "noticia"] { slug, fecha }`
    );

    newsPages = noticias.map((noticia) => ({
      url: `${baseUrl}/noticias/${noticia.slug.current}`,
      lastModified: noticia.fecha ? new Date(noticia.fecha) : currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error fetching news articles for sitemap:", error);
    // Continue without news articles if Sanity fetch fails
  }

  // ============================================================================
  // COMBINE ALL PAGES
  // ============================================================================
  return [...staticPages, ...industryPages, ...newsPages];
}