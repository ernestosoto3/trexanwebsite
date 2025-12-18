import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../(componentes)/ui/ContactForm";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Electrónica | Recuperación de Valor | Recibásicos",
  description:
    "Gestión de dispositivos, tarjetas electrónicas, baterías y metales con logística eficiente, desmontaje, reciclaje avanzado, refinamiento metálico y destrucción certificada de datos.",
  keywords: [
    "reciclaje electrónica",
    "tarjetas electrónicas",
    "recuperación de metales preciosos",
    "destrucción de datos certificada",
    "reciclaje dispositivos",
  ],
};

export default function ElectronicaPage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/industrias/electronica-hero.jpg"
            alt="Reciclaje de equipos y componentes electrónicos"
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
              Electrónica
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Máxima recuperación de valor en equipos y componentes electrónicos
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl">
              Logística, desmontaje y reciclaje avanzado con protección de datos y recuperación de metales.
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
              Reciclaje avanzado para dispositivos, tarjetas y componentes obsoletos
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600">
              Recibásicos gestiona dispositivos, periféricos, tarjetas electrónicas, componentes obsoletos,
              baterías, cables y metales provenientes de empresas de electrónica y distribución. Nuestro enfoque
              combina logística eficiente, desmontaje, reciclaje avanzado, refinamiento metálico y destrucción
              de datos con certificación.
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
              Soluciones Especializadas para Electrónica
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Recuperación de Metales y Partes
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Recuperación de metales preciosos y partes aprovechables con procesos de alto rendimiento.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Reducción de Inventarios Obsoletos
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Liberación de espacio físico mediante retiro, clasificación y reciclaje eficiente.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Destrucción Certificada de Datos
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Protección de información sensible mediante destrucción certificada y procesos controlados.
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
                  Logística, desmontaje y refinamiento para maximizar recuperación
                </h2>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Logística Eficiente</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Recolección y transporte para flujos continuos o retiros programados de inventario.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Desmontaje y Reciclaje Avanzado</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Procesos especializados para tarjetas electrónicas, periféricos, baterías, cables y metales.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Imagen Responsable y Circular</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Fortalece tu reputación con evidencias de circularidad y manejo responsable del e-waste.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] bg-zinc-100 flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/images/industrias/electronica-content.jpg"
                alt="Desmontaje y reciclaje avanzado de electrónica"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactForm
        industry="Electrónica"
        title="Cuéntanos sobre tus necesidades de reciclaje"
        subtitle="Completa el formulario y nuestro equipo especializado en electrónica se pondrá en contacto contigo"
      />
    </main>
  );
}
