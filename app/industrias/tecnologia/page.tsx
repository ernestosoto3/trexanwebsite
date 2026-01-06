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
  openGraph: {
    title: "Reciclaje Electrónico para Tecnología | Recibásicos",
    description: "Gestión segura de infraestructura TI con destrucción certificada de datos críticos.",
    images: ["/images/industrias/industriatech.jpg"],
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
    src: "/images/industrias/industriatech.jpg",
    alt: "Industria Tecnología - Reciclaje de infraestructura TI y data centers",
  },
  height: "60vh" as const,
  badgeText: "Tecnología",
  title: "Gestión Segura de Infraestructura TI y Datos Críticos",
  subtitle:
    "Brindamos soluciones de retiro, desmontaje y reciclaje de hardware para Data Centers y empresas tecnológicas, garantizando la destrucción certificada de información bajo los estándares de seguridad más estrictos de la industria.",
} as const;

const INTRO_TEXT = `Blindamos la infraestructura crítica de empresas de TI y Data Centers mediante el retiro seguro de hardware y
la destrucción certificada de información. Nuestro proceso de reciclaje de servidores, UPS y equipos de red
garantiza que los datos sensibles sean eliminados irreversiblemente mientras se recupera el valor de los
componentes tecnológicos.` as const;

const FEATURES: readonly FeatureItem[] = [
  {
    title: "Destrucción Segura de Información",
    body: "Eliminación segura de información crítica con procesos certificados y controlados.",
  },
  {
    title: "Procesos Escalables",
    body: "Retiros masivos o por etapas para oficinas, sucursales, data centers y renovaciones.",
  },
  {
    title: "Recuperación de Valor",
    body: "Recuperación de metales valiosos para reducir costos de reposición y maximizar retorno.",
  },
] as const;

const SERVICES: readonly ServiceItem[] = [
  {
    title: "Retiro y Transporte",
    body: "Coordinación para retiros por sitio con control de cadena de custodia cuando aplica.",
  },
  {
    title: "Desmontaje Especializado",
    body: "Manejo de servidores, red, UPS y baterías con procesos seguros y trazables.",
  },
  {
    title: "Soporte a Objetivos ESG",
    body: "Contribuye a metas ESG y reducción de huella ambiental con reportabilidad.",
  },
] as const;

const SERVICE_IMAGE: ServiceImage = {
  src: "/images/industrias/industriatech2.jpeg.webp",
  alt: "Reciclaje de infraestructura tecnológica y data centers",
} as const;

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function TecnologiaPage() {
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
        title="Soluciones Especializadas para Tecnología"
        items={[...FEATURES]}
      />

      {/* Services Section */}
      <SplitServiceSection
        kicker="Nuestros Servicios"
        title="Circularidad para infraestructura TI y telecomunicaciones"
        items={[...SERVICES]}
        image={SERVICE_IMAGE}
      />

      {/* Contact Form */}
      <ContactForm industry="Tecnología" />
    </main>
  );
}