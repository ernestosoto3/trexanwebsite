// app/(componentes)/ui/Header.tsx
"use client";

import { memo, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "./Button";

// ============================================================================
// CONSTANTS
// ============================================================================
const LOGO = {
  src: "/images/partners/PNG RECIBÁSICOS NO LETRAS.png",
  alt: "Logotipo de Recibásicos",
  width: 60,
  height: 60,
} as const;

const CONTACT_INFO = {
  location: "San Luis Potosí, México",
  phone: {
    display: "+52 (444) 829 2422",
    tel: "+524448292422",
  },
  email: "contacto@recibasicos.com",
} as const;

const SECTORS = [
  "Automotriz",
  "Manufactura",
  "Gobierno",
  "Electrónica",
  "Tecnología",
  "Salud",
  "Retail",
  "Educación",
] as const;

const ABOUT_DROPDOWN = [
  { href: "/nosotros", label: "Sobre Nosotros" },
  { href: "/sostenibilidad", label: "Sostenibilidad" },
  { href: "/certificaciones", label: "Certificaciones" },
  { href: "/noticias", label: "Noticias" },
] as const;

const ABOUT_PATHS = [
  "/nuestraempresa",
  "/nosotros",
  "/sostenibilidad",
  "/certificaciones",
  "/noticias",
] as const;

// ============================================================================
// TYPES
// ============================================================================
type IndustryItem = {
  name: string;
  slug: string;
  href: string;
};

// ============================================================================
// UTILITIES
// ============================================================================
function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================
const ChevronDown = memo(({ className = "" }: { className?: string }) => (
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
));

ChevronDown.displayName = "ChevronDown";

// ============================================================================
// MAIN HEADER COMPONENT
// ============================================================================
function HeaderComponent() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // Generate industry items once
  const industryItems = useMemo<IndustryItem[]>(
    () =>
      SECTORS.map((name) => ({
        name,
        slug: slugify(name),
        href: `/industrias/${slugify(name)}`,
      })),
    []
  );

  // Active state checks
  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isInAboutSection = ABOUT_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  const isInIndustriasSection = pathname.startsWith("/industrias");
  const activeIndustrySlug = isInIndustriasSection
    ? pathname.split("/")[2]
    : null;

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileIndustriesOpen(false);
    setMobileAboutOpen(false);
  };

  // Consistent link styling
  const linkClass = (active: boolean): string =>
    cn(
      "transition-colors",
      active ? "text-orange-600" : "text-zinc-700 hover:text-orange-600"
    );

  const dropdownItemClass = (active: boolean): string =>
    cn(
      "block px-3 py-2 text-sm transition-colors",
      active
        ? "bg-orange-50 text-orange-700"
        : "text-zinc-700 hover:bg-zinc-50 hover:text-orange-600"
    );

  return (
    <header className="border-b border-zinc-200 bg-white">
      {/* Top Strip */}
      <div className="bg-emerald-700 text-emerald-50 text-xs md:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
          <p className="hidden sm:block">
            {CONTACT_INFO.location} ·{" "}
            <a
              href={`tel:${CONTACT_INFO.phone.tel}`}
              className="hover:underline"
            >
              {CONTACT_INFO.phone.display}
            </a>
          </p>
          <div className="flex flex-1 items-center justify-between sm:justify-end gap-4">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:underline"
            >
              {CONTACT_INFO.email}
            </a>
            <span className="hidden md:inline text-emerald-100">
              Parte del Grupo Trexan
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={LOGO.src}
            alt={LOGO.alt}
            width={LOGO.width}
            height={LOGO.height}
            className="h-12 w-auto object-contain"
            priority
            quality={90}
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

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className={linkClass(isActive("/"))}>
            Inicio
          </Link>

          {/* Nuestra Empresa Dropdown */}
          <div className="relative group">
            <Link
              href="/nuestraempresa"
              className={cn(
                "inline-flex items-center gap-1.5",
                linkClass(isInAboutSection)
              )}
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
              <div className="w-48 bg-white shadow-xl p-2">
                {ABOUT_DROPDOWN.map((item) => (
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

          {/* Industrias Dropdown */}
          <div className="relative group">
            <Link
              href="/industrias"
              className={cn(
                "inline-flex items-center gap-1.5",
                linkClass(isInIndustriasSection)
              )}
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
              <div className="w-56 bg-white shadow-xl p-2">
                {industryItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.href}
                    role="menuitem"
                    className={dropdownItemClass(
                      activeIndustrySlug === item.slug
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            href="/contacto"
            variant="primary"
            className="bg-emerald-800 text-white hover:bg-emerald-900 border-emerald-800"
          >
            Contacto
          </Button>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="border-t border-zinc-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2 text-sm">
            <Link
              href="/"
              className={cn(
                "block py-1",
                isActive("/") ? "text-orange-600" : "text-zinc-700"
              )}
              onClick={closeMobileMenu}
            >
              Inicio
            </Link>

            {/* Mobile Nuestra Empresa Accordion */}
            <div>
              <div
                className={cn(
                  "w-full flex items-center justify-between py-1",
                  "border-b border-transparent hover:border-zinc-200",
                  isInAboutSection ? "text-orange-600" : "text-zinc-700"
                )}
              >
                <Link
                  href="/nuestraempresa"
                  className="flex-1 text-left"
                  onClick={closeMobileMenu}
                >
                  Nuestra Empresa
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileAboutOpen((p) => !p)}
                  className="p-1"
                  aria-label="Abrir sección Nuestra Empresa"
                  aria-expanded={mobileAboutOpen}
                >
                  <ChevronDown
                    className={cn(
                      "transition-transform",
                      mobileAboutOpen && "rotate-180"
                    )}
                  />
                </button>
              </div>

              {mobileAboutOpen && (
                <div className="ml-2 border-l border-zinc-200 pl-3 py-1 space-y-1">
                  {ABOUT_DROPDOWN.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block py-1",
                        isActive(item.href)
                          ? "text-orange-600"
                          : "text-zinc-700"
                      )}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industrias Accordion */}
            <div>
              <div
                className={cn(
                  "w-full flex items-center justify-between py-1",
                  "border-b border-transparent hover:border-zinc-200",
                  isInIndustriasSection ? "text-orange-600" : "text-zinc-700"
                )}
              >
                <Link
                  href="/industrias"
                  className="flex-1 text-left"
                  onClick={closeMobileMenu}
                >
                  Industrias
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileIndustriesOpen((p) => !p)}
                  className="p-1"
                  aria-label="Abrir sección Industrias"
                  aria-expanded={mobileIndustriesOpen}
                >
                  <ChevronDown
                    className={cn(
                      "transition-transform",
                      mobileIndustriesOpen && "rotate-180"
                    )}
                  />
                </button>
              </div>

              {mobileIndustriesOpen && (
                <div className="ml-2 border-l border-zinc-200 pl-3 py-1 space-y-1">
                  {industryItems.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className={cn(
                        "block py-1",
                        activeIndustrySlug === item.slug
                          ? "text-orange-600"
                          : "text-zinc-700"
                      )}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <div className="pt-2">
              <Button
                href="/contacto"
                variant="primary"
                className="w-full bg-emerald-700 text-white text-center"
              >
                Contacto
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const Header = memo(HeaderComponent);
Header.displayName = "Header";

export default Header;