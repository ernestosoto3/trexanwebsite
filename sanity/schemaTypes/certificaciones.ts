import { defineType, defineField } from 'sanity'

const certificaciones = defineType({
  name: 'certificacion',
  title: 'Certificación',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', type: 'string', title: 'Título', validation: r => r.required() }),
    defineField({ name: 'emisor', type: 'string', title: 'Emisor' }),
    defineField({ name: 'fecha', type: 'date', title: 'Fecha' }),
    defineField({ name: 'descripcion', type: 'text', title: 'Descripción' }),
  ],
});

export default certificaciones;
