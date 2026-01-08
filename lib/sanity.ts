import { createClient, type ClientConfig } from "@sanity/client";

// ============================================================================
// SANITY CLIENT CONFIGURATION
// ============================================================================

/**
 * Sanity Client Configuration
 * @see https://www.sanity.io/docs/js-client
 */
const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-01-01", // Use current date (YYYY-MM-DD) for API version
  useCdn: process.env.NODE_ENV === "production", // CDN for production, direct for dev
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: "published", // Only fetch published documents
  
  // Optional: Reduce response size
  resultSourceMap: false,
  
  // Optional: Configure for better performance
  ignoreBrowserTokenWarning: true,
};

/**
 * Sanity Client Instance
 * Used for fetching content from Sanity CMS
 * 
 * @example
 * import { sanityClient } from "@/lib/sanity"
 * const data = await sanityClient.fetch(query)
 */
export const sanityClient = createClient(config);

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Fetch data from Sanity with error handling
 * @param query - GROQ query string
 * @param params - Query parameters (optional)
 * @returns Promise with data or null on error
 */
export async function fetchSanity<T = any>(
  query: string,
  params?: Record<string, any>
): Promise<T | null> {
  try {
    const data = params
      ? await sanityClient.fetch<T>(query, params)
      : await sanityClient.fetch<T>(query);
    return data;
  } catch (error) {
    console.error("Error fetching from Sanity:", error);
    return null;
  }
}

/**
 * Check if Sanity is properly configured
 * @returns boolean
 */
export function isSanityConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET
  );
}

// ============================================================================
// SANITY IMAGE URL BUILDER (if needed)
// ============================================================================

/**
 * Get Sanity image URL
 * @param source - Sanity image source object
 * @returns Image URL string
 * 
 * @example
 * const imageUrl = getSanityImageUrl(article.imagen)
 */
export function getSanityImageUrl(source?: { asset?: { url?: string } }): string {
  return source?.asset?.url || "/images/placeholder.jpg";
}

// ============================================================================
// EXPORTS
// ============================================================================

export default sanityClient;