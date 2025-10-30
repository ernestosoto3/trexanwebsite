import { sanityClient } from '@/lib/sanity'
import { qNoticias } from '@/lib/queries'

export default async function NoticiasPage() {
  const noticias = await sanityClient.fetch(qNoticias)
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Noticias</h1>
      <ul className="space-y-4">
        {noticias.map((n:any) => (
          <li key={n._id} className="p-4 rounded-xl border">
            <h2 className="text-xl font-semibold">{n.titulo}</h2>
            <p className="text-sm text-gray-500">{new Date(n.fecha).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
