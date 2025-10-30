import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'noticia',
  title: 'Noticias',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titulo' } }),
    defineField({ name: 'contenido', title: 'Contenido', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'fecha', title: 'Fecha', type: 'datetime' }),
    defineField({ name: 'imagen', title: 'Imagen', type: 'image' }),
  ],
})
