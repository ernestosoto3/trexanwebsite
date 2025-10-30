import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'certificacion',     
  title: 'Certificaciones',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'entidad', title: 'Entidad', type: 'string' }),
    defineField({ name: 'fecha', title: 'Fecha', type: 'date' }),
  ],
})