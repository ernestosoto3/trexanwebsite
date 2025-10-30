'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('ok')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          className="w-full border rounded-xl p-3"
          placeholder="Nombre"
          value={form.name}
          onChange={e=>setForm({...form, name: e.target.value})}
        />
        <input
          className="w-full border rounded-xl p-3"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={e=>setForm({...form, email: e.target.value})}
        />
        <textarea
          className="w-full border rounded-xl p-3 min-h-[140px]"
          placeholder="Mensaje"
          value={form.message}
          onChange={e=>setForm({...form, message: e.target.value})}
        />
        <button className="px-5 py-3 rounded-xl border font-medium">
          {status === 'sending' ? 'Enviando…' : 'Enviar'}
        </button>
      </form>
      {status === 'ok' && <p className="text-green-600 mt-3">¡Enviado!</p>}
      {status === 'error' && <p className="text-red-600 mt-3">Error al enviar.</p>}
    </main>
  )
}
