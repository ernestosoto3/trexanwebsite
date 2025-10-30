import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'ubicacion',          
  title: 'Ubicaciones',
  type: 'document',
  fields: [
    defineField({ name: 'nombre', title: 'Nombre', type: 'string' }),
    defineField({ name: 'direccion', title: 'Dirección', type: 'string' }),
    defineField({ name: 'mapUrl', title: 'Mapa (URL)', type: 'url' }),
  ],
})