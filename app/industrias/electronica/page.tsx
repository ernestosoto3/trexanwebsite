import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/(componentes)/ui/Hero";
import ContactForm from "../../(componentes)/ui/ContactForm";
import IntroText from "@/app/(componentes)/ui/IntroText";

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
      <Hero
        bg={{ type: "image", src: "/images/industrias/GRUPO-TREXAN-14.jpg", alt: "Industria Electrónica" }}
        height="60vh"
        badgeText="Electrónica"
        title="Valorización Avanzada de Componentes y Metales Preciosos"
        subtitle="Optimizamos la recuperación en tarjetas electrónicas, periféricos y dispositivos obsoletos mediante procesos de refinamiento metálico de alto rendimiento, transformando sus excedentes en recursos estratégicos para la economía circular."
      />

      {/* INTRO TEXT */}
      <IntroText>
        Especialistas en la valorización de tarjetas electrónicas, 
        periféricos y componentes no conformes. Aplicamos procesos 
        de desmantelamiento y refinación de alto rendimiento para 
        recuperar metales preciosos, asegurando que la propiedad 
        intelectual y los materiales sensibles sean gestionados bajo 
        estrictos protocolos de seguridad y economía circular.
      </IntroText>

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
      />
    </main>
  );
}
