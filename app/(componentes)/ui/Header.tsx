// app/(componentes)/ui/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const sectors = [
  "Automotriz",
  "Manufactura",
  "Gobierno",
  "Electrónica",
  "Tecnología",
  "Salud",
  "Retail",
  "Educación",
];

const aboutDropdown = [
  { href: "/sostenibilidad", label: "Sostenibilidad" },
  { href: "/certificaciones", label: "Certificaciones" },
  { href: "/noticias", label: "Noticias" },
];

function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Helper to combine classes more cleanly
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const industryItems = useMemo(() => {
    return sectors.map((name) => ({
      name,
      slug: slugify(name),
      href: `/industrias/${slugify(name)}`,
    }));
  }, []);

  // Simplified active state checks
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isInAboutSection = useMemo(() => {
    return [ "/nuestraempresa", "/nosotros", "/sostenibilidad", "/certificaciones", "/noticias"].some(
      (path) => pathname === path || pathname.startsWith(path + "/")
    );
  }, [pathname]);

  const isInIndustriasSection = pathname.startsWith("/industrias");
  const activeIndustrySlug = isInIndustriasSection ? pathname.split("/")[2] : null;

  // Close mobile menu and reset accordions
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileIndustriesOpen(false);
    setMobileAboutOpen(false);
  };

  // Consistent link styling
  const linkClass = (active: boolean) =>
    cn(
      "transition-colors",
      active ? "text-orange-600" : "text-zinc-700 hover:text-orange-600"
    );

  const dropdownItemClass = (active: boolean) =>
    cn(
      "block px-3 py-2 text-sm transition-colors",
      active
        ? "bg-orange-50 text-orange-700"
        : "text-zinc-700 hover:bg-zinc-50 hover:text-orange-600"
    );

  return (
    <header className="border-b border-zinc-200 bg-white">
      {/* Top strip */}
      <div className="bg-emerald-900 text-emerald-50 text-xs md:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
          <p className="hidden sm:block">
            San Luis Potosí, México · +52 (444) 829 2422
          </p>
          <div className="flex flex-1 items-center justify-between sm:justify-end gap-4">
            <a href="mailto:contacto@recibasicos.com" className="hover:underline">
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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/RecisbasicosLogo2.png"
            alt="Logotipo de Recibásicos"
            width={60}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight uppercase">
              Recibásicos
            </span>
            <span className="text-xs text-zinc-500">Trexan Recycling Group</span>
          </div>
        </Link>

        {/* Spacer for pushing nav to the right */}
        <div className="flex-1" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className={linkClass(isActive("/"))}>
            Inicio
          </Link>

          {/* Nosotros dropdown */}
          <div className="relative group">
            <Link
              href="/nuestraempresa"
              className={cn("inline-flex items-center gap-1.5", linkClass(isInAboutSection))}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Nuestra Empresa
              <ChevronDown className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </Link>

            <div
              role="menu"
              className={cn(
                "absolute left-0 top-full z-50 pt-3",
                "opacity-0 invisible translate-y-1",
                "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0",
                "group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0",
                "transition-all"
              )}
            >
              <div className="w-48 border border-zinc-200 bg-white shadow-xl p-2">
                <Link
                  href="/nosotros"
                  role="menuitem"
                  className={dropdownItemClass(isActive("/nosotros"))}
                >
                  Sobre Nosotros
                </Link>
                {aboutDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className={dropdownItemClass(isActive(item.href))}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Industrias dropdown */}
          <div className="relative group">
            <Link
              href="/industrias"
              className={cn("inline-flex items-center gap-1.5", linkClass(isInIndustriasSection))}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Industrias
              <ChevronDown className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </Link>

            <div
              role="menu"
              className={cn(
                "absolute left-0 top-full z-50 pt-3",
                "opacity-0 invisible translate-y-1",
                "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0",
                "group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0",
                "transition-all"
              )}
            >
              <div className="w-56 border border-zinc-200 bg-white shadow-xl p-2">
                {industryItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.href}
                    role="menuitem"
                    className={dropdownItemClass(activeIndustrySlug === item.slug)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contacto"
          className="hidden md:block px-4 py-2 text-sm font-semibold bg-emerald-800 text-white hover:bg-emerald-900 transition-colors"
        >
          Contacto
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center border border-zinc-300 p-2 text-zinc-700 md:hidden"
          aria-label="Abrir menú de navegación"
          aria-expanded={mobileOpen}
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
      {mobileOpen && (
        <nav className="border-t border-zinc-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2 text-sm">
            <Link
              href="/"
              className={cn("block py-1", isActive("/") ? "text-orange-600" : "text-zinc-700")}
              onClick={closeMobileMenu}
            >
              Inicio
            </Link>

            {/* Mobile Nosotros accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileAboutOpen((p) => !p)}
                className={cn(
                  "w-full flex items-center justify-between py-1",
                  "border-b border-transparent hover:border-zinc-200",
                  isInAboutSection ? "text-orange-600" : "text-zinc-700"
                )}
                aria-expanded={mobileAboutOpen}
              >
                <span>Nosotros</span>
                <ChevronDown
                  className={cn(
                    "transition-transform",
                    mobileAboutOpen && "rotate-180"
                  )}
                />
              </button>

              {mobileAboutOpen && (
                <div className="ml-2 border-l border-zinc-200 pl-3 py-1 space-y-1">
                  <Link
                    href="/nosotros"
                    className={cn(
                      "block py-1",
                      isActive("/nosotros") ? "text-orange-600" : "text-zinc-700"
                    )}
                    onClick={closeMobileMenu}
                  >
                    Sobre nosotros
                  </Link>

                  {aboutDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block py-1",
                        isActive(item.href) ? "text-orange-600" : "text-zinc-700"
                      )}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industrias accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen((p) => !p)}
                className={cn(
                  "w-full flex items-center justify-between py-1",
                  "border-b border-transparent hover:border-zinc-200",
                  isInIndustriasSection ? "text-orange-600" : "text-zinc-700"
                )}
                aria-expanded={mobileIndustriesOpen}
              >
                <span>Industrias</span>
                <ChevronDown
                  className={cn(
                    "transition-transform",
                    mobileIndustriesOpen && "rotate-180"
                  )}
                />
              </button>

              {mobileIndustriesOpen && (
                <div className="ml-2 border-l border-zinc-200 pl-3 py-1 space-y-1">
                  <Link
                    href="/industrias"
                    className={cn(
                      "block py-1",
                      pathname === "/industrias" ? "text-orange-600" : "text-zinc-700"
                    )}
                    onClick={closeMobileMenu}
                  >
                    Ver todas
                  </Link>

                  {industryItems.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className={cn(
                        "block py-1",
                        activeIndustrySlug === item.slug ? "text-orange-600" : "text-zinc-700"
                      )}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2">
              <Link
                href="/contacto"
                className="block px-4 py-2 text-center text-sm font-semibold bg-emerald-800 text-white hover:bg-emerald-900 transition-colors"
                onClick={closeMobileMenu}
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