import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../(componentes)/ui/ContactForm";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Salud | Protección de Datos y Cumplimiento | Recibásicos",
  description:
    "Soluciones para hospitales, clínicas y laboratorios: equipos electrónicos y dispositivos médicos obsoletos. Destrucción segura de datos, cumplimiento normativo y reciclaje confiable.",
  keywords: [
    "reciclaje salud",
    "reciclaje hospital",
    "datos pacientes destrucción",
    "equipos médicos obsoletos",
    "cumplimiento sector salud",
  ],
};

export default function SaludPage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/industrias/salud-hero.jpg"
            alt="Sector salud y reciclaje seguro de equipos electrónicos"
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
              Salud
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Reciclaje seguro para proteger a pacientes, instituciones y el medio ambiente
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl">
              Manejo confiable de equipos electrónicos y datos sensibles con procesos de cumplimiento.
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
              Manejo seguro de equipos y protección absoluta de información sensible
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600">
              Recibásicos atiende a hospitales, clínicas, laboratorios y proveedores del sector salud con soluciones
              para equipos electrónicos, aparatos médicos obsoletos, computadoras, monitores, baterías y metales.
              Nos especializamos en destrucción segura de datos sensibles (registros de pacientes), cumplimiento
              normativo y procesos de reciclaje confiables.
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
              Soluciones Especializadas para Salud
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Protección Absoluta de Datos
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Destrucción segura de información confidencial con procesos controlados y trazables.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Cumplimiento y Manejo Responsable
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Gestión de residuos electrónicos alineada a normas y prácticas del sector salud.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Reducción de Riesgos y Desorden
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Retiro y disposición confiable para liberar espacio y disminuir riesgos operativos.
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
                  Procesos confiables para hospitales, clínicas y laboratorios
                </h2>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Destrucción Segura de Registros</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Protección de datos sensibles para cumplir políticas internas y requerimientos de privacidad.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Manejo de Equipos y Aparatos Obsoletos</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Gestión de monitores, computadoras, baterías y aparatos médicos con reciclaje responsable.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Respaldo a Responsabilidad Social</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Refuerza políticas de responsabilidad social y ambiental con procesos reportables.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] bg-zinc-100 flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/images/industrias/salud-content.jpg"
                alt="Reciclaje seguro para sector salud"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactForm
        industry="Salud"
        title="Cuéntanos sobre tus necesidades de reciclaje"
        subtitle="Completa el formulario y nuestro equipo especializado en salud se pondrá en contacto contigo"
      />
    </main>
  );
}
