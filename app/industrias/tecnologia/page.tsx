import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/(componentes)/ui/Hero";
import ContactForm from "../../(componentes)/ui/ContactForm";
import IntroText from "@/app/(componentes)/ui/IntroText";

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
      <Hero
        bg={{ type: "image", src: "/images/industrias/industriatech.jpg", alt: "Industria Tecnología" }}
        height="60vh"
        badgeText="Tecnología"
        title="Gestión Segura de Infraestructura TI y Datos Críticos"
        subtitle="Brindamos soluciones de retiro, desmontaje y reciclaje de hardware para Data Centers y empresas tecnológicas, garantizando la destrucción certificada de información bajo los estándares de seguridad más estrictos de la industria."
      />

      {/* INTRO TEXT */}
      <IntroText>
        Blindamos la infraestructura crítica de empresas de TI y 
        Data Centers mediante el retiro seguro de hardware y la 
        destrucción certificada de información. Nuestro proceso de 
        reciclaje de servidores, UPS y equipos de red garantiza que 
        los datos sensibles sean eliminados irreversiblemente mientras 
        se recupera el valor de los componentes tecnológicos.
      </IntroText>

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
      />
    </main>
  );
}
