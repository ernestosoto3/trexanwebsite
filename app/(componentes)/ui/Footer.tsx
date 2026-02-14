// app/(componentes)/ui/Footer.tsx
import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

// ============================================================================
// CONSTANTS - Extracted for maintainability
// ============================================================================
const LOGO = {
  src: "/images/partners/recibasicos-logo.png",
  alt: "Logotipo de Recibásicos",
  width: 52,
  height: 52,
} as const;

const NAVIGATION_LINKS = [
  { href: "/nuestraempresa", label: "Nuestra Empresa" },
  { href: "/industrias", label: "Industrias" },
  { href: "/sostenibilidad", label: "Sostenibilidad" },
  { href: "/certificaciones", label: "Certificaciones" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
] as const;

const SOLUTIONS = [
  "Recolección y acopio de RAEE",
  "Desmantelamiento y trituración",
  "Producción de concentrados para fundición",
  "Transporte ecológico y manifiestos ambientales",
] as const;

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/company/trexanrecycling/", label: "LinkedIn", external: true },
  { href: "https://trexan.co", label: "Trexan.co", external: true },
] as const;

const CONTACT = {
  company: "Recibásicos S.A. de C.V.",
  address: "Eje 132 No.120, Zona Industrial del Potosí",
  postalCode: "C.P. 78395, San Luis Potosí, S.L.P., México",
  phone: {
    display: "+52 (444) 829 2422",
    tel: "+524448292422",
  },
  email: "contacto@recibasicos.com",
} as const;

const LEGAL_LINKS = [
  { href: "/privacidad", label: "Aviso de privacidad" },
  { href: "/terminos", label: "Términos de uso" },
] as const;

// Get current year once (not on every render)
const CURRENT_YEAR = new Date().getFullYear();

// ============================================================================
// FOOTER COMPONENT
// ============================================================================
function FooterComponent() {
  return (
    <footer className="bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)_minmax(0,1.1fr)_minmax(0,1.3fr)] items-start">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={LOGO.src}
              alt={LOGO.alt}
              width={LOGO.width}
              height={LOGO.height}
              className="h-12 w-12"
              quality={90}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight uppercase">
                Recibásicos
              </span>
              <span className="text-xs text-zinc-400">
                Parte del Trexan Recycling Group
              </span>
            </div>
          </Link>

          <p className="max-w-md text-sm text-zinc-400">
            Empresa socialmente sustentable enfocada al acopio, recolección,
            reciclaje y disposición final de residuos de aparatos eléctricos y
            electrónicos (RAEE) en México.
          </p>

          <div className="flex items-center gap-3 text-xs text-zinc-500">
            {SOCIAL_LINKS.map((link, index) => (
              <div key={link.href} className="flex items-center gap-3">
                {index > 0 && (
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                )}
                <a
                  href={link.href}
                  className="hover:text-emerald-400 transition-colors"
                  {...(link.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Column */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wide text-zinc-200">
            Navegación
          </h3>
          <ul className="space-y-1.5 text-sm text-zinc-400">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-emerald-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions Column */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wide text-zinc-200">
            Soluciones
          </h3>
          <ul className="space-y-1.5 text-sm text-zinc-400">
            {SOLUTIONS.map((solution) => (
              <li key={solution}>{solution}</li>
            ))}
          </ul>
          <h4 className="pt-4 text-sm font-semibold tracking-wide text-zinc-200">
            Certificaciones
          </h4>
          <p className="text-sm text-zinc-400">
            R2v3, ISO 14001, ISO 45001, permisos de SEMARNAT e IMMEX.
          </p>
        </div>

        {/* Contact Column */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wide text-zinc-200">
            Contacto
          </h3>
          <div className="space-y-1.5 text-sm text-zinc-400">
            <p className="font-semibold text-zinc-200">{CONTACT.company}</p>
            <p>
              {CONTACT.address}
              <br />
              {CONTACT.postalCode}
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/524448292422"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-400 hover:underline transition-colors"
              >
                {CONTACT.phone.display}
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-medium text-emerald-400 hover:underline transition-colors"
              >
                {CONTACT.email}
              </a>
            </p>
          </div>

          <Button
            href="/contacto"
            variant="primary"
            className="bg-emerald-700 text-white border-emerald-700"
          >
            Pide una cotización
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {CURRENT_YEAR} Recibásicos · Trexan Recycling Group. Todos los
            derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {LEGAL_LINKS.map((link, index) => (
              <div key={link.href} className="flex items-center gap-4">
                {index > 0 && (
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                )}
                <Link href={link.href} className="hover:text-emerald-400 transition-colors">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const Footer = memo(FooterComponent);
Footer.displayName = "Footer";

export default Footer;