import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/(componentes)/ui/Hero";
import ContactForm from "../../(componentes)/ui/ContactForm";
import IntroText from "@/app/(componentes)/ui/IntroText";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Manufactura | Eficiencia Industrial | Recibásicos",
  description:
    "Gestión integral de e-waste industrial: equipos obsoletos, tableros, cableado y materiales metálicos. Logística, preprocesamiento y recuperación de metales con trazabilidad.",
  keywords: [
    "reciclaje manufactura",
    "e-waste industrial",
    "reciclaje tableros",
    "recuperación de metales",
    "logística industrial",
  ],
};

export default function ManufacturaPage() {
  return (
    <main className="min-h-dvh bg-white">
      <Hero
        bg={{ type: "image", src: "/images/industrias/milling.jpg", alt: "Industria Manufactura" }}
        height="60vh"
        badgeText="Manufactura"
        title="Optimización de Planta mediante Gestión de Scrap Electrónico"
        subtitle="Liberamos espacio operativo y maximizamos la recuperación de valor en tableros, maquinaria y cableado, mediante una logística especializada diseñada para no interrumpir el ritmo de su producción."
      />

      <IntroText>
        Optimizamos el flujo operativo de plantas industriales mediante 
        la gestión ordenada de excedentes electrónicos, tableros y 
        maquinaria obsoleta. Liberamos espacio productivo y transformamos 
        sus residuos en activos recuperados, respaldando sus auditorías 
        ambientales con documentación técnica y cumplimiento normativo riguroso.
      </IntroText>

      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="section">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-3">
              Qué Ofrecemos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
              Soluciones Especializadas para Manufactura
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Gestión Ordenada de E-Waste
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Procesos que reducen desorden y mejoran el control operativo y de inventarios.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Recuperación de Valor
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Separación y recuperación de metales para transformar desechos en ingresos.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Capacidad para Volúmenes Altos
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Manejo de materiales complejos y grandes volúmenes con logística especializada.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-green-800">
        <div className="section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-300 mb-3">
                  Nuestros Servicios
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Gestión integral para optimizar espacio, costos y cumplimiento
                </h2>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Recolección y Logística</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Retiro planificado para no afectar la operación y mantener control de materiales.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Separación y Preprocesamiento</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Clasificación y desmontaje para recuperación eficiente de metales y componentes.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Cumplimiento Normativo</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Procesos consistentes para auditorías y control ambiental dentro de planta.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] bg-zinc-100 flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/images/industrias/manufactura-content.jpg"
                alt="Gestión de residuos electrónicos en manufactura"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactForm
        industry="Manufactura"
        title="Cuéntanos sobre tus necesidades de reciclaje"
        subtitle="Completa el formulario y nuestro equipo especializado en manufactura se pondrá en contacto contigo"
      />
    </main>
  );
}
