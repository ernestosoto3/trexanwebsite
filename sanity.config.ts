import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'CMS Recibásicos',

  // Hardcoded because Sanity Studio (Vite) doesn't read .env.local
  projectId: '5t75i38n',
  dataset: 'production',

  basePath: '/studio',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema,
})