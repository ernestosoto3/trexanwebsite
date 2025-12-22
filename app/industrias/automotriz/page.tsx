import { Metadata } from "next";
import Image from "next/image";
import Hero from "@/app/(componentes)/ui/Hero";
import ContactForm from "../../(componentes)/ui/ContactForm";
import IntroText from "@/app/(componentes)/ui/IntroText";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Automotriz | Movilidad Sostenible | Recibásicos",
  description:
    "Gestión segura de módulos de control, cableado, sensores, baterías y componentes eléctricos. Reciclaje de alto rendimiento, trazabilidad completa y recuperación de valor.",
  keywords: [
    "reciclaje automotriz",
    "reciclaje baterías",
    "módulos de control",
    "OEM reciclaje",
    "economía circular automotriz",
  ],
};

export default function AutomotrizPage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* HERO SECTION */}
      <Hero
        bg={{ type: "image", src: "/images/industrias/industriaautomotriz.jpg", alt: "Industria Automotriz" }}
        height="60vh"
        badgeText="Automotriz"
        title="Valorización Avanzada de Componentes y Electrónica Automotriz"
        subtitle="Optimizamos la recuperación de materiales en módulos de control, sensores y baterías complejas, garantizando una trazabilidad impecable que fortalece la cadena de suministro y el cumplimiento ESG de fabricantes y OEMs."
      />

      {/* INTRO TEXT */}
      <IntroText>
        Maximizamos la eficiencia en la gestión de scrap electrónico 
        y componentes complejos para la cadena de suministro automotriz. 
        Nuestro enfoque se centra en la recuperación de metales de alto 
        valor y el manejo seguro de módulos de control y baterías, 
        garantizando la trazabilidad necesaria para cumplir con los estándares 
        de calidad y sostenibilidad de fabricantes y OEMs.
      </IntroText>

      {/* QUÉ OFRECEMOS - Grid layout */}
      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="section">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-3">
              Qué Ofrecemos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
              Soluciones Especializadas para Automotriz
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Reciclaje de Alto Rendimiento
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Procesos diseñados para recuperar materiales y componentes con eficiencia industrial.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Manejo Seguro de Baterías y Electrónica Compleja
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Gestión responsable de baterías, cableado y sistemas electrónicos con control y seguridad.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Trazabilidad Completa
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Seguimiento claro del proceso para cumplimiento, auditorías internas y reportes ESG.
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
                  Recuperación de valor y cumplimiento ambiental en automotriz
                </h2>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Cumplimiento y Manejo Responsable</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Gestión alineada a buenas prácticas ambientales para residuos electrónicos y baterías.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Recuperación de Metales y Componentes</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Recuperación de metales y partes aprovechables para reducir costos y maximizar valor.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Refuerzo ESG con Economía Circular</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Evidencia y soporte para iniciativas ESG mediante circularidad real y trazable.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] bg-zinc-100 flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/images/industrias/automotriz-content.jpg"
                alt="Reciclaje y recuperación de valor para industria automotriz"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactForm
        industry="Automotriz"
      />
    </main>
  );
}
