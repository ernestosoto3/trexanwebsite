// ============================================================================
// SANITY QUERIES
// ============================================================================

/**
 * Query to fetch all noticias (news articles)
 * Returns: Array of news articles with basic info
 */
export const qNoticias = `*[_type == "noticia"] | order(fecha desc) {
  _id,
  titulo,
  slug,
  fecha,
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
 * Query to fetch a single noticia by slug
 * Returns: Single news article with full content
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