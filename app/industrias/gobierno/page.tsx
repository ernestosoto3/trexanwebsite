import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/(componentes)/ui/Hero";
import IntroText from "@/app/(componentes)/ui/IntroText";
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
      <Hero
        bg={{ type: "image", src: "/images/industrias/texasgobierno.jpg", alt: "Industria Gobierno" }}
        height="60vh"
        badgeText="Gobierno"
        title="Gestión Transparente y Trazable de Activos Institucionales"
        subtitle="Garantizamos el cumplimiento total de la normativa ambiental y administrativa mediante procesos documentados, ideales para auditorías de control interno y reportes de sostenibilidad gubernamental."
      />

      {/* INTRO TEXT */}
      <IntroText>
        Proveemos a las instituciones públicas un modelo de baja 
        de activos electrónicos basado en la transparencia total y 
        la certeza jurídica. Garantizamos el cumplimiento de las 
        normativas federales y estatales, proporcionando manifiestos 
        de disposición final y certificados de destrucción de datos que 
        aseguran una rendición de cuentas impecable.
      </IntroText>

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
      />
    </main>
  );
}