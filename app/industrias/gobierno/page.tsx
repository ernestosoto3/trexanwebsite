import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../(componentes)/ui/ContactForm";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Gobierno | Cumplimiento y Seguridad | Recibásicos",
  description: "Soluciones de reciclaje electrónico para instituciones públicas. Destrucción certificada de datos, cumplimiento normativo y transparencia total para auditorías.",
  keywords: ["reciclaje gobierno", "destrucción datos gobierno", "cumplimiento normativo", "reciclaje sector público", "sostenibilidad gobierno"],
};

export default function GobiernoPage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/industrias/gobierno-hero.jpg"
            alt="Instalaciones gubernamentales con gestión de residuos electrónicos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/60" />
        </div>

        <div className="section relative h-[60vh] flex items-center">
          <div className="max-w-4xl text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-white/25 px-4 py-2 text-sm uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-[--color-primary]" />
              Gobierno
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Soluciones de Reciclaje Electrónico para Sector Público
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl">
              Cumplimiento, seguridad y sostenibilidad para instituciones gubernamentales
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border-green-800 text-white bg-green-800 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white rounded-none transition-colors"
              >
                Solicitar Cotización
              </Link>
              <Link
                href="/nosotros"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border-green-800 text-white bg-green-800 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white rounded-none transition-colors"
              >
                Conoce Nuestros Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section">
          <div className="text-center max-w-5xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Apoyamos a entidades gubernamentales en el manejo responsable de equipos electrónicos retirados
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600">
              Garantizamos destrucción de datos cuando aplica, trazabilidad del proceso y cumplimiento total 
              con las regulaciones ambientales mexicanas. Trabajamos con cómputo, telecomunicaciones, baterías, 
              cables, paneles y aparatos institucionales.
            </p>
          </div>
        </div>
      </section>

      {/* QUÉ OFRECEMOS - Grid layout */}
      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="section">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-3">
              Qué Ofrecemos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
              Soluciones Especializadas para Gobierno
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Manejo Transparente
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Procesos ideales para auditorías y reportes oficiales con documentación completa de cada etapa del reciclaje.
              </p>
            </article>

            {/* Feature 2 */}
            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Destrucción Segura de Información
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Protección total de datos sensibles con certificaciones que cumplen los más altos estándares de seguridad.
              </p>
            </article>

            {/* Feature 3 */}
            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Cumplimiento Normativo Total
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Alineación completa con regulaciones federales, estatales y municipales del sector público mexicano.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICIOS DETALLADOS - Green background with orange lines */}
      <section className="py-16 md:py-20 bg-green-800">
        <div className="section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 text-white">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-300 mb-3">
                  Nuestros Servicios
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Servicios Especializados para Instituciones Públicas
                </h2>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Trazabilidad por Activo</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Código único para cada equipo desde retiro hasta disposición final con portal digital para acceso a certificados históricos.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Destrucción Certificada de Datos</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Borrado de nivel DoD 5220.22-M o destrucción física de medios con certificados individuales por equipo.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Cumplimiento LGPGIR y NOM</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Manifiestos de entrega-transporte-recepción (NOM-052) y certificaciones R2v3 reconocidas internacionalmente.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image placeholder */}
            <div className="relative h-[400px] lg:h-[500px] bg-zinc-100 flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/images/industrias/gobierno-content.jpg"
                alt="Procesos de reciclaje para gobierno"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM - Imported Component */}
      <ContactForm 
        industry="Gobierno"
        title="Cuéntanos sobre tus necesidades de reciclaje"
        subtitle="Completa el formulario y nuestro equipo especializado en sector público se pondrá en contacto contigo"
      />
    </main>
  );
}