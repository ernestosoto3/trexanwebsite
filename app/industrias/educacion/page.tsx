import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../(componentes)/ui/ContactForm";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Educación | Sostenibilidad en Campus | Recibásicos",
  description:
    "Soluciones para escuelas y universidades: retiro, reciclaje o reutilización de equipos de aulas y laboratorios. Destrucción de datos, reciclaje y recuperación de valor con enfoque sostenible.",
  keywords: [
    "reciclaje educación",
    "reciclaje universidades",
    "reciclaje escuelas",
    "destrucción de datos académicos",
    "sostenibilidad campus",
  ],
};

export default function EducacionPage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/industrias/educacion-hero.jpg"
            alt="Escuelas y universidades con reciclaje tecnológico"
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
              Educación
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Sostenibilidad para escuelas y universidades a través del reciclaje tecnológico
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl">
              Retiro, reciclaje y destrucción de datos para equipos de aulas, laboratorios y oficinas.
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
              Gestión segura para equipos institucionales y protección de información académica
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600">
              Recibásicos apoya a escuelas, universidades y centros educativos a retirar, reciclar o reutilizar equipos
              electrónicos de aulas, laboratorios y oficinas: computadoras, impresoras, proyectores, routers, baterías y
              cableado. Ofrecemos recolección, destrucción de datos, reciclaje y recuperación de valor, con enfoque educativo
              y sostenible.
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
              Soluciones Especializadas para Educación
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Gestión Segura de Equipos Institucionales
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Retiro y reciclaje de equipos de campus con procesos controlados y trazables.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Protección de Información Académica
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Destrucción segura de datos administrativos o académicos cuando aplica.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Campus más Limpio y Sostenible
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Reducción de residuos y mejor aprovechamiento de espacios con enfoque de sostenibilidad.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICIOS DETALLADOS - Green background with orange lines */}
      <section className="py-16 md:py-20 bg-green-800">
        <div className="section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-300 mb-3">
                  Nuestros Servicios
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Reciclaje tecnológico con enfoque educativo y responsable
                </h2>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Recolección y Retiro</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Coordinación de retiros para aulas, laboratorios y oficinas sin interrumpir actividades.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Destrucción de Datos</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Manejo seguro de información administrativa o académica con procesos confiables.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Impacto Sostenible</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Contribuye a metas de sostenibilidad y responsabilidad social educativa con circularidad real.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] bg-zinc-100 flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/images/industrias/educacion-content.jpg"
                alt="Reciclaje tecnológico para instituciones educativas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactForm
        industry="Educación"
        title="Cuéntanos sobre tus necesidades de reciclaje"
        subtitle="Completa el formulario y nuestro equipo especializado en educación se pondrá en contacto contigo"
      />
    </main>
  );
}
