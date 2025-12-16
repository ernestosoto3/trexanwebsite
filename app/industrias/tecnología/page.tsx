import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../(componentes)/ui/ContactForm";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Tecnología | Seguridad y Circularidad | Recibásicos",
  description:
    "Retiro y reciclaje de hardware, servidores, red, UPS y baterías. Destrucción certificada de datos, desmontaje especializado y recuperación de valor para TI, telecom y data centers.",
  keywords: [
    "reciclaje TI",
    "reciclaje data center",
    "reciclaje servidores",
    "destrucción de datos",
    "UPS baterías reciclaje",
  ],
};

export default function TecnologiaPage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/industrias/tecnologia-hero.jpg"
            alt="Infraestructura tecnológica y reciclaje responsable de hardware"
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
              Tecnología
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Tecnología limpia: seguridad, cumplimiento y economía circular
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl">
              Retiro y reciclaje de infraestructura TI con destrucción certificada de datos y recuperación de valor.
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
              Retiro seguro de hardware y protección de información crítica
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600">
              Para empresas de TI, telecomunicaciones y data centers, Recibásicos ofrece retiro, transporte y reciclaje
              de hardware, servidores, equipos de red, UPS, baterías, cableado y dispositivos electrónicos. Incluimos
              destrucción certificada de datos, desmontaje especializado y recuperación de valor mediante refinamiento
              de materiales.
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
              Soluciones Especializadas para Tecnología
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Destrucción Segura de Información
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Eliminación segura de información crítica con procesos certificados y controlados.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Procesos Escalables
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Retiros masivos o por etapas para oficinas, sucursales, data centers y renovaciones.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Recuperación de Valor
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Recuperación de metales valiosos para reducir costos de reposición y maximizar retorno.
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
                  Circularidad para infraestructura TI y telecomunicaciones
                </h2>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Retiro y Transporte</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Coordinación para retiros por sitio con control de cadena de custodia cuando aplica.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Desmontaje Especializado</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Manejo de servidores, red, UPS y baterías con procesos seguros y trazables.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Soporte a Objetivos ESG</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Contribuye a metas ESG y reducción de huella ambiental con reportabilidad.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] bg-zinc-100 flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/images/industrias/tecnologia-content.jpg"
                alt="Reciclaje de infraestructura tecnológica"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactForm
        industry="Tecnología"
        title="Cuéntanos sobre tus necesidades de reciclaje"
        subtitle="Completa el formulario y nuestro equipo especializado en tecnología se pondrá en contacto contigo"
      />
    </main>
  );
}
