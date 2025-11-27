// app/(componentes)/ui/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)_minmax(0,1.1fr)_minmax(0,1.3fr)] items-start">
        {/* Brand column */}
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logos/RecisbasicosLogo.png"
              alt="Logotipo de Recibásicos"
              width={52}
              height={52}
              className="h-12 w-12"
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
            {/* Aquí luego puedes cambiar por íconos reales de redes */}
            <span>LinkedIn</span>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span>Trexan.co</span>
          </div>
        </div>

        {/* Navigation column */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wide text-zinc-200">
            Navegación
          </h3>
          <ul className="space-y-1.5 text-sm text-zinc-400">
            <li>
              <Link href="/nosotros" className="hover:text-emerald-400">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/operaciones" className="hover:text-emerald-400">
                Operaciones
              </Link>
            </li>
            <li>
              <Link href="/industrias" className="hover:text-emerald-400">
                Industrias que atendemos
              </Link>
            </li>
            <li>
              <Link href="/sostenibilidad" className="hover:text-emerald-400">
                Sostenibilidad
              </Link>
            </li>
            <li>
              <Link href="/certificaciones" className="hover:text-emerald-400">
                Certificaciones
              </Link>
            </li>
            <li>
              <Link href="/noticias" className="hover:text-emerald-400">
                Noticias
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-emerald-400">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Solutions / value column */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wide text-zinc-200">
            Soluciones
          </h3>
          <ul className="space-y-1.5 text-sm text-zinc-400">
            <li>Recolección y acopio de RAEE</li>
            <li>Desmantelamiento y trituración</li>
            <li>Producción de concentrados para fundición</li>
            <li>Transporte ecológico y manifiestos ambientales</li>
          </ul>
          <h4 className="pt-4 text-sm font-semibold tracking-wide text-zinc-200">
            Certificaciones
          </h4>
          <p className="text-sm text-zinc-400">
              R2v3, ISO 14001, ISO 45001, permisos de SEMARNAT e IMMEX.
          </p>
        </div>

        {/* Contact column */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wide text-zinc-200">
            Contacto
          </h3>
          <div className="space-y-1.5 text-sm text-zinc-400">
            <p className="font-semibold text-zinc-200">Recibásicos S.A. de C.V.</p>
            <p>
              Eje 132 No.120, Zona Industrial del Potosí
              <br />
              C.P. 78395, San Luis Potosí, S.L.P., México
            </p>
            <p>
              Teléfono:{" "}
              <a
                href="tel:+524448292422"
                className="font-medium text-emerald-400 hover:underline"
              >
                +52 (444) 829 2422
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:contacto@recibasicos.com"
                className="font-medium text-emerald-400 hover:underline"
              >
                contacto@recibasicos.com
              </a>
            </p>
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
          >
            Pide una cotización
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Recibásicos · Trexan Recycling Group.
            Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span>Aviso de privacidad</span>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span>Términos de uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
