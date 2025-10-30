import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'industria',          
  title: 'Industrias',
  type: 'document',
  fields: [
    defineField({ name: 'nombre', title: 'Nombre', type: 'string' }),
    defineField({ name: 'descripcion', title: 'Descripción', type: 'text' }),
  ],
})