import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/(componentes)/ui/Hero";
import ContactForm from "../../(componentes)/ui/ContactForm";
import IntroText from "@/app/(componentes)/ui/IntroText";

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
      <Hero
        bg={{ type: "image", src: "/images/industrias/biblioteca.jpg", alt: "Industria Educación" }}
        height="60vh"
        badgeText="Educación"
        title="Transformando la Tecnología Académica en Impacto Sostenible"
        subtitle="Impulsamos campus más limpios y responsables mediante la gestión integral de equipos de cómputo, laboratorios y oficinas, asegurando que el retiro de tecnología obsoleta contribuya directamente a sus metas de sostenibilidad institucional."
      />

      {/* INTRO TEXT */}
      <IntroText>
        Apoyamos a las instituciones educativas en la 
        modernización de sus campus mediante el retiro 
        responsable de equipos de aulas y laboratorios. 
        Ofrecemos una solución integral que combina la 
        destrucción de datos académicos con procesos de 
        reciclaje que refuerzan los objetivos de sostenibilidad 
        y responsabilidad social de la comunidad educativa.
      </IntroText>

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
