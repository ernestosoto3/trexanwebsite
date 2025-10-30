export const qNoticias = `*[_type == "noticia"] | order(fecha desc){
    _id, titulo, "slug": slug.current, fecha, contenido, imagen
  }`
  