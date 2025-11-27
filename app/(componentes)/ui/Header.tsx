// app/(componentes)/ui/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/industrias", label: "Industrias" },
  { href: "/certificaciones", label: "Certificaciones" },
  { href: "/sostenibilidad", label: "Sostenibilidad" },
  { href: "/noticias", label: "Noticias" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur border-b border-zinc-200">
      {/* Top strip */}
      <div className="bg-emerald-900 text-emerald-50 text-xs md:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
          <p className="hidden sm:block">
            San Luis Potosí, México · +52 (444) 829 2422
          </p>
          <div className="flex flex-1 items-center justify-between sm:justify-end gap-4">
            <a
              href="mailto:contacto@recibasicos.com"
              className="hover:underline"
            >
              contacto@recibasicos.com
            </a>
            <span className="hidden md:inline text-emerald-100">
              Parte del Grupo Trexan
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        {/* Logo + text */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/RecisbasicosLogo2.png"
            alt="Logotipo de Recibásicos"
            width={40}
            height={40}
            className="h-12 w-12"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight uppercase">
              Recibásicos
            </span>
            <span className="text-xs text-zinc-500">
              Trexan Recycling Group
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-700 hover:text-emerald-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contacto"
            className="rounded-full px-4 py-2 text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-zinc-300 p-2 text-zinc-700 md:hidden"
          aria-label="Abrir menú de navegación"
        >
          <span className="sr-only">Abrir menú</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-zinc-700" />
            <span className="block h-0.5 w-5 bg-zinc-700" />
            <span className="block h-0.5 w-5 bg-zinc-700" />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-zinc-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-1 text-zinc-700 hover:text-emerald-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contacto"
                className="block rounded-full px-4 py-2 text-center text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
                onClick={() => setOpen(false)}
              >
                Pide una cotización
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
