import { Metadata } from "next";
import Hero from "@/app/(componentes)/ui/Hero";
import IntroText from "@/app/(componentes)/ui/IntroText";
import ContactForm from "../../(componentes)/ui/ContactForm";
import FeatureGridSection from "@/app/(componentes)/ui/FeatureGridSection";
import SplitServiceSection from "@/app/(componentes)/ui/SplitServiceSection";

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
      <Hero
        bg={{
          type: "image",
          src: "/images/industrias/biblioteca.jpg",
          alt: "Industria Educación",
        }}
        height="60vh"
        badgeText="Educación"
        title="Transformando la Tecnología Académica en Impacto Sostenible"
        subtitle="Impulsamos campus más limpios y responsables mediante la gestión integral de equipos de cómputo, laboratorios y oficinas, asegurando que el retiro de tecnología obsoleta contribuya directamente a sus metas de sostenibilidad institucional."
      />

      <IntroText>
        Apoyamos a las instituciones educativas en la modernización de sus campus mediante el retiro responsable de
        equipos de aulas y laboratorios. Ofrecemos una solución integral que combina la destrucción de datos
        académicos con procesos de reciclaje que refuerzan los objetivos de sostenibilidad y responsabilidad social
        de la comunidad educativa.
      </IntroText>

      <FeatureGridSection
        kicker="Qué Ofrecemos"
        title="Soluciones Especializadas para Educación"
        items={[
          {
            title: "Gestión Segura de Equipos Institucionales",
            body: "Retiro y reciclaje de equipos de campus con procesos controlados y trazables.",
          },
          {
            title: "Protección de Información Académica",
            body: "Destrucción segura de datos administrativos o académicos cuando aplica.",
          },
          {
            title: "Campus más Limpio y Sostenible",
            body: "Reducción de residuos y mejor aprovechamiento de espacios con enfoque de sostenibilidad.",
          },
        ]}
      />

      <SplitServiceSection
        kicker="Nuestros Servicios"
        title="Reciclaje tecnológico con enfoque educativo y responsable"
        items={[
          {
            title: "Recolección y Retiro",
            body: "Coordinación de retiros para aulas, laboratorios y oficinas sin interrumpir actividades.",
          },
          {
            title: "Destrucción de Datos",
            body: "Manejo seguro de información administrativa o académica con procesos confiables.",
          },
          {
            title: "Impacto Sostenible",
            body: "Contribuye a metas de sostenibilidad y responsabilidad social educativa con circularidad real.",
          },
        ]}
        image={{
          src: "/images/industrias/educacion-content.jpg",
          alt: "Reciclaje tecnológico para instituciones educativas",
        }}
      />

      <ContactForm industry="Educación" />
    </main>
  );
}
