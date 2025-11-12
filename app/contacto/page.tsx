'use client'

import { useState } from 'react'
import Seccion from "../(componentes)/ui/Seccion";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    website: '' // honeypot
  })
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
      setForm({ name:'', company:'', email:'', phone:'', service:'', message:'', website:'' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <Seccion titulo="Contacto" subtitulo="Formulario, info directa y mapa de plantas.">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Info directa */}
        <div className="rounded-2xl p-6 ring-1 ring-foreground/10 space-y-3">
          <div>
            <div className="text-sm text-foreground/70">Email general</div>
            <div className="font-medium">info@trexan.co</div>
          </div>
          <div>
            <div className="text-sm text-foreground/70">Contacto directo</div>
            <div className="font-medium">gpizzutoa@trexan.co</div>
          </div>
          <div>
            <div className="text-sm text-zinc-600">Teléfono</div>
            <div className="font-medium">+52 (444) 219 7673</div>
          </div>
          <div className="pt-2">
            <Link href="/" className="underline underline-offset-4">Volver al Home</Link>
          </div>
        </div>

        {/* Formulario */}
        <div className="rounded-2xl p-6 ring-1 ring-foreground/10">
          <form onSubmit={onSubmit} className="grid gap-4">
            <input
              className="w-full border rounded-xl p-3"
              placeholder="Nombre completo"
              value={form.name}
              onChange={e=>setForm({...form, name: e.target.value})}
              required
            />
            <input
              className="w-full border rounded-xl p-3"
              placeholder="Empresa u organización (opcional)"
              value={form.company}
              onChange={e=>setForm({...form, company: e.target.value})}
            />
            <input
              className="w-full border rounded-xl p-3"
              placeholder="Correo electrónico"
              type="email"
              value={form.email}
              onChange={e=>setForm({...form, email: e.target.value})}
              required
            />
            <input
              className="w-full border rounded-xl p-3"
              placeholder="Teléfono (opcional)"
              value={form.phone}
              onChange={e=>setForm({...form, phone: e.target.value})}
            />
            <select
              className="w-full border rounded-xl p-3"
              value={form.service}
              onChange={e=>setForm({...form, service: e.target.value})}
            >
              <option value="">Seleccione un servicio</option>
              <option value="recibasicos">Procesos Fríos (Recibásicos)</option>
              <option value="ewr">Procesos Calientes (EWR)</option>
              <option value="certifications">Certificaciones y Cumplimiento</option>
              <option value="other">Otro</option>
            </select>

            <textarea
              className="w-full border rounded-xl p-3 min-h-[140px]"
              placeholder="Mensaje o consulta"
              value={form.message}
              onChange={e=>setForm({...form, message: e.target.value})}
              required
            />

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              autoComplete="off"
              style={{ display: "none" }}
              tabIndex={-1}
              value={form.website}
              onChange={e=>setForm({...form, website: e.target.value})}
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-5 py-3 rounded-xl border font-medium"
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar'}
            </button>

            {status === 'ok' && <p className="text-green-600">¡Gracias! Te contactaremos pronto.</p>}
            {status === 'error' && <p className="text-red-600">Hubo un error. Intenta de nuevo.</p>}
          </form>
        </div>

        {/* Mapa */}
        <div className="md:col-span-2 rounded-2xl overflow-hidden ring-1 ring-foreground/10">
          <iframe
            src="https://www.google.com/maps?q=Eje+132+No.+120,+Zona+Industrial+del+Potosí,+78395+San+Luis+Potosí,+SLP,+México&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Seccion>
  )
}
