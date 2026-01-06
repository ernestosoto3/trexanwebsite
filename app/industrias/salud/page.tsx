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
  title: "Reciclaje Electrónico para Salud | Protección de Datos y Cumplimiento | Recibásicos",
  description:
    "Soluciones para hospitales, clínicas y laboratorios: equipos electrónicos y dispositivos médicos obsoletos. Destrucción segura de datos, cumplimiento normativo y reciclaje confiable.",
  keywords: [
    "reciclaje salud",
    "reciclaje hospital",
    "datos pacientes destrucción",
    "equipos médicos obsoletos",
    "cumplimiento sector salud",
  ],
  openGraph: {
    title: "Reciclaje Electrónico para Salud | Recibásicos",
    description: "Gestión segura de tecnología médica con destrucción certificada de datos sensibles.",
    images: ["/images/industrias/GRUPO TREXAN-55-1.jpg"],
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
    src: "/images/industrias/GRUPO TREXAN-55-1.jpg",
    alt: "Industria Salud - Gestión segura de equipos médicos y datos sensibles",
  },
  height: "60vh" as const,
  badgeText: "Salud",
  title: "Gestión Segura de Tecnología Médica y Datos Sensibles",
  subtitle:
    "Protegemos la integridad de su institución mediante el retiro responsable de equipos electrónicos y la destrucción certificada de registros confidenciales, garantizando un entorno hospitalario libre de riesgos y en total cumplimiento normativo.",
} as const;

const INTRO_TEXT = `Gestionamos el retiro de equipo médico y administrativo con un enfoque prioritario en la protección de datos
sensibles y el cumplimiento sanitario. Ayudamos a hospitales y laboratorios a disponer de su tecnología
obsoleta de forma segura, evitando riesgos ambientales y asegurando la confidencialidad de la información
institucional y del paciente.` as const;

const FEATURES: readonly FeatureItem[] = [
  {
    title: "Protección Absoluta de Datos",
    body: "Destrucción segura de información confidencial con procesos controlados y trazables.",
  },
  {
    title: "Cumplimiento y Manejo Responsable",
    body: "Gestión de residuos electrónicos alineada a normas y prácticas del sector salud.",
  },
  {
    title: "Reducción de Riesgos y Desorden",
    body: "Retiro y disposición confiable para liberar espacio y disminuir riesgos operativos.",
  },
] as const;

const SERVICES: readonly ServiceItem[] = [
  {
    title: "Destrucción Segura de Registros",
    body: "Protección de datos sensibles para cumplir políticas internas y requerimientos de privacidad.",
  },
  {
    title: "Manejo de Equipos y Aparatos Obsoletos",
    body: "Gestión de monitores, computadoras, baterías y aparatos médicos con reciclaje responsable.",
  },
  {
    title: "Respaldo a Responsabilidad Social",
    body: "Refuerza políticas de responsabilidad social y ambiental con procesos reportables.",
  },
] as const;

const SERVICE_IMAGE: ServiceImage = {
  src: "/images/industrias/industriasalud2.jpg",
  alt: "Reciclaje seguro para sector salud con protección de datos",
} as const;

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function SaludPage() {
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
        title="Soluciones Especializadas para Salud"
        items={[...FEATURES]}
      />

      {/* Services Section */}
      <SplitServiceSection
        kicker="Nuestros Servicios"
        title="Procesos confiables para hospitales, clínicas y laboratorios"
        items={[...SERVICES]}
        image={SERVICE_IMAGE}
      />

      {/* Contact Form */}
      <ContactForm industry="Salud" />
    </main>
  );
}