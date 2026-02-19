import { createClient, type ClientConfig } from "@sanity/client";

// ============================================================================
// SANITY CLIENT CONFIGURATION
// ============================================================================

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-01-01",
  useCdn: false,        
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: "published",
  resultSourceMap: false,
  ignoreBrowserTokenWarning: true,
};

export const sanityClient = createClient(config);

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Fetch data from Sanity with revalidation support
 * @param query  - GROQ query string
 * @param params - Query parameters (optional)
 * @param revalidate - Seconds until Next.js revalidates (default: 60s)
 */
export async function fetchSanity<T = any>(
  query: string,
  params?: Record<string, any>,
  revalidate: number = 60   // ✅ Added — revalidates every 60 seconds by default
): Promise<T | null> {
  try {
    const data = await sanityClient.fetch<T>(
      query,
      params ?? {},
      {
        next: { revalidate },  // ✅ Tells Next.js how long to cache this fetch
      }
    );
    return data;
  } catch (error) {
    console.error("Error fetching from Sanity:", error);
    return null;
  }
}

/**
 * Check if Sanity is properly configured
 */
export function isSanityConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET
  );
}

// ============================================================================
// SANITY IMAGE URL BUILDER
// ============================================================================

/**
 * Get Sanity image URL
 * @param source - Sanity image source object
 */
export function getSanityImageUrl(
  source?: { asset?: { url?: string } }
): string {
  return source?.asset?.url || "/images/placeholder.jpg";
}

// ============================================================================
// EXPORTS
// ============================================================================

export default sanityClient;