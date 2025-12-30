import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ============================================================================
  // IMAGE OPTIMIZATION
  // ============================================================================
  images: {
    formats: ["image/avif", "image/webp"], // Modern formats for better compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Smaller image sizes
    minimumCacheTTL: 60, // Cache optimized images for 60 seconds
    dangerouslyAllowSVG: true, // Allow SVG images
    contentDispositionType: "attachment", // Security for SVG downloads
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // SVG security
  },

  // ============================================================================
  // COMPRESSION - Reduces bundle size
  // ============================================================================
  compress: true,

  // ============================================================================
  // PERFORMANCE OPTIMIZATIONS
  // ============================================================================
  reactStrictMode: true, // Catch common bugs early

  // ============================================================================
  // EXPERIMENTAL FEATURES (Performance)
  // ============================================================================
  experimental: {
    optimizePackageImports: [
      "lucide-react", // Tree-shake icons (only load icons you use)
      "@sanity/client",
      "@sanity/image-url",
    ],
  },

  // ============================================================================
  // SECURITY HEADERS
  // ============================================================================
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;