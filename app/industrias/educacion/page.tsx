import { Metadata } from "next";
import Hero from "@/app/(componentes)/ui/Hero";
import IntroText from "@/app/(componentes)/ui/IntroText";
import ContactForm from "../../(componentes)/ui/ContactForm";
import FeatureGridSection from "@/app/(componentes)/ui/FeatureGridSection";
import SplitServiceSection from "@/app/(componentes)/ui/SplitServiceSection";

// ============================================================================
// METADATA FOR SEO
// ============================================================================
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
  openGraph: {
    title: "Reciclaje Electrónico para Educación | Recibásicos",
    description: "Gestión responsable de equipos académicos con enfoque sostenible para campus educativos.",
    images: ["/images/industrias/biblioteca.jpg"],
  },
};

// ============================================================================
// TYPES
// ============================================================================
interface FeatureItem {
  readonly title: string;
  readonly body: string;
}

interface ServiceItem {
  readonly title: string;
  readonly body: string;
}

interface ServiceImage {
  readonly src: string;
  readonly alt: string;
}

// ============================================================================
// CONSTANTS
// ============================================================================
const HERO_CONFIG = {
  bg: {
    type: "image" as const,
    src: "/images/industrias/biblioteca.jpg",
    alt: "Industria Educación - Campus sostenible con reciclaje electrónico",
  },
  height: "60vh" as const,
  badgeText: "Educación",
  title: "Transformando la Tecnología Académica en Impacto Sostenible",
  subtitle:
    "Impulsamos campus más limpios y responsables mediante la gestión integral de equipos de cómputo, laboratorios y oficinas, asegurando que el retiro de tecnología obsoleta contribuya directamente a sus metas de sostenibilidad institucional.",
} as const;

const INTRO_TEXT = `Apoyamos a las instituciones educativas en la modernización de sus campus mediante el retiro responsable de
equipos de aulas y laboratorios. Ofrecemos una solución integral que combina la destrucción de datos
académicos con procesos de reciclaje que refuerzan los objetivos de sostenibilidad y responsabilidad social
de la comunidad educativa.` as const;

const FEATURES: readonly FeatureItem[] = [
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
] as const;

const SERVICES: readonly ServiceItem[] = [
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
] as const;

const SERVICE_IMAGE: ServiceImage = {
  src: "/images/industrias/industriaedu2.jpg",
  alt: "Reciclaje tecnológico para instituciones educativas",
} as const;

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function EducacionPage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* Hero Section */}
      <Hero
        bg={HERO_CONFIG.bg}
        height={HERO_CONFIG.height}
        badgeText={HERO_CONFIG.badgeText}
        title={HERO_CONFIG.title}
        subtitle={HERO_CONFIG.subtitle}
      />

      {/* Intro Text */}
      <IntroText>{INTRO_TEXT}</IntroText>

      {/* Features Section */}
      <FeatureGridSection
        kicker="Qué Ofrecemos"
        title="Soluciones Especializadas para Educación"
        items={[...FEATURES]}
      />

      {/* Services Section */}
      <SplitServiceSection
        kicker="Nuestros Servicios"
        title="Reciclaje tecnológico con enfoque educativo y responsable"
        items={[...SERVICES]}
        image={SERVICE_IMAGE}
      />

      {/* Contact Form */}
      <ContactForm industry="Educación" />
    </main>
  );
}