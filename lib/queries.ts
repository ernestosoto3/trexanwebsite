// ============================================================================
// SANITY GROQ QUERIES
// ============================================================================

/**
 * GROQ (Graph-Relational Object Queries) for Sanity CMS
 * @see https://www.sanity.io/docs/groq
 */

// ============================================================================
// TYPES
// ============================================================================

/**
 * Noticia (News Article) type from Sanity
 */
export interface SanityNoticia {
  readonly _id: string;
  readonly _type: "noticia";
  readonly titulo: string;
  readonly slug: {
    readonly current: string;
  };
  readonly fecha: string;
  readonly contenido?: string | any[]; // Can be string or Portable Text blocks
  readonly resumen?: string;
  readonly excerpt?: string;
  readonly imagen?: {
    readonly asset?: {
      readonly url?: string;
    };
  };
  readonly image?: {
    readonly asset?: {
      readonly url?: string;
    };
  };
  readonly imageUrl?: string;
}

/**
 * Simplified noticia for list views
 */
export interface NoticiaListItem {
  readonly _id: string;
  readonly titulo: string;
  readonly slug: {
    readonly current: string;
  };
  readonly fecha: string;
  readonly resumen?: string;
  readonly imagen?: {
    readonly asset?: {
      readonly url?: string;
    };
  };
}

// ============================================================================
// NEWS ARTICLE QUERIES
// ============================================================================

/**
 * Query to fetch all noticias (news articles)
 * Ordered by date (newest first)
 * Returns: Array of news articles with basic info
 * UPDATED: Now includes 'contenido' for excerpt extraction
 */
export const qNoticias = `*[_type == "noticia"] | order(fecha desc) {
  _id,
  titulo,
  slug,
  fecha,
  resumen,
  excerpt,
  contenido,
  imagen{
    asset->{
      url
    }
  },
  image{
    asset->{
      url
    }
  },
  imageUrl
}`;

/**
 * Query to fetch a single noticia by slug
 * Returns: Single news article with full content
 * 
 * @param slug - The slug of the article to fetch
 * @example
 * const noticia = await sanityClient.fetch(qNoticiaBySlug, { slug: "my-article" })
 */
export const qNoticiaBySlug = `*[_type == "noticia" && slug.current == $slug][0]{
  _id,
  titulo,
  slug,
  fecha,
  contenido,
  resumen,
  excerpt,
  imagen{
    asset->{
      url
    }
  },
  image{
    asset->{
      url
    }
  },
  imageUrl
}`;

/**
 * Query to fetch recent noticias with limit
 * Returns: Limited number of recent articles
 * 
 * @param limit - Number of articles to fetch (default: 3)
 * @example
 * const recentNews = await sanityClient.fetch(qRecentNoticias, { limit: 5 })
 */
export const qRecentNoticias = `*[_type == "noticia"] | order(fecha desc) [0...$limit] {
  _id,
  titulo,
  slug,
  fecha,
  resumen,
  excerpt,
  contenido,
  imagen{
    asset->{
      url
    }
  }
}`;

/**
 * Query to fetch all noticia slugs (for sitemap generation)
 * Returns: Array of slugs and dates
 */
export const qNoticiasSlugs = `*[_type == "noticia"] {
  "slug": slug.current,
  fecha
}`;

/**
 * Query to check if a noticia exists by slug
 * Returns: Boolean
 * 
 * @param slug - The slug to check
 */
export const qNoticiaExists = `count(*[_type == "noticia" && slug.current == $slug]) > 0`;

// ============================================================================
// UTILITY QUERIES
// ============================================================================

/**
 * Count total number of noticias
 * Returns: Number
 */
export const qNoticiasCount = `count(*[_type == "noticia"])`;

/**
 * Get all unique years from noticias (for archive filtering)
 * Returns: Array of years
 */
export const qNoticiasYears = `array::unique(*[_type == "noticia"].fecha[0..3])`;

/**
 * Filter noticias by year
 * Returns: Articles from specific year
 * 
 * @param year - The year to filter by (e.g., "2025")
 */
export const qNoticiasByYear = `*[_type == "noticia" && fecha match $year + "*"] | order(fecha desc) {
  _id,
  titulo,
  slug,
  fecha,
  resumen,
  imagen{
    asset->{
      url
    }
  }
}`;

// ============================================================================
// FUTURE QUERIES (Add as needed)
// ============================================================================

/**
 * Example: Query for categories (if you add them later)
 * 
 * export const qCategories = `*[_type == "category"] | order(name asc) {
 *   _id,
 *   name,
 *   slug,
 *   description
 * }`;
 */

/**
 * Example: Query for featured noticias (if you add featured flag)
 * 
 * export const qFeaturedNoticias = `*[_type == "noticia" && featured == true] | order(fecha desc) [0...3] {
 *   _id,
 *   titulo,
 *   slug,
 *   fecha,
 *   resumen,
 *   imagen{
 *     asset->{
 *       url
 *     }
 *   }
 * }`;
 */

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  qNoticias,
  qNoticiaBySlug,
  qRecentNoticias,
  qNoticiasSlugs,
  qNoticiaExists,
  qNoticiasCount,
  qNoticiasYears,
  qNoticiasByYear,
};