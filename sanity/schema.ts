// sanity/schema.ts
import { type SchemaTypeDefinition } from 'sanity'
import noticias from './schemaTypes/noticias'
import industrias from './schemaTypes/industrias'
import certificaciones from './schemaTypes/certificaciones'
import ubicaciones from './schemaTypes/ubicaciones'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [noticias, industrias, certificaciones, ubicaciones], 
}
