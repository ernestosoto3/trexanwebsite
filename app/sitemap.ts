// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trexan.com";
  const pages = ["", "/nosotros", "/operaciones", "/certificaciones", "/contacto", "/industrias", "/noticias", "/sostenibilidad"];

  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7
  }));
}
