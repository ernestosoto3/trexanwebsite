import { createClient } from '@sanity/client'

console.log('🔎 Script started')

const sanity = createClient({
  projectId: 'demo',          // demo para probar import
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})

console.log('✅ createClient is a function:', typeof createClient === 'function')
console.log('✅ sanity.fetch exists:', typeof (sanity as any).fetch === 'function')

