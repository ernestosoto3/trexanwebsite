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
  title: "Reciclaje Electrónico para Gobierno | Cumplimiento y Seguridad | Recibásicos",
  description:
    "Soluciones de reciclaje electrónico para instituciones públicas. Destrucción certificada de datos, cumplimiento normativo y transparencia total para auditorías.",
  keywords: [
    "reciclaje gobierno",
    "destrucción datos gobierno",
    "cumplimiento normativo",
    "reciclaje sector público",
    "sostenibilidad gobierno",
  ],
  openGraph: {
    title: "Reciclaje Electrónico para Gobierno | Recibásicos",
    description: "Gestión transparente de activos institucionales con cumplimiento normativo total.",
    images: ["/images/industrias/texasgobierno.jpg"],
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
    src: "/images/industrias/texasgobierno.jpg",
    alt: "Industria Gobierno - Gestión transparente de activos institucionales",
  },
  height: "60vh" as const,
  badgeText: "Gobierno",
  title: "Gestión Transparente y Trazable de Activos Institucionales",
  subtitle:
    "Garantizamos el cumplimiento total de la normativa ambiental y administrativa mediante procesos documentados, ideales para auditorías de control interno y reportes de sostenibilidad gubernamental.",
} as const;

const INTRO_TEXT = `Proveemos a las instituciones públicas un modelo de baja de activos electrónicos basado en la transparencia
total y la certeza jurídica. Garantizamos el cumplimiento de las normativas federales y estatales,
proporcionando manifiestos de disposición final y certificados de destrucción de datos que aseguran una
rendición de cuentas impecable.` as const;

const FEATURES: readonly FeatureItem[] = [
  {
    title: "Manejo Transparente",
    body: "Procesos ideales para auditorías y reportes oficiales con documentación completa de cada etapa del reciclaje.",
  },
  {
    title: "Destrucción Segura de Información",
    body: "Protección total de datos sensibles con certificaciones que cumplen los más altos estándares de seguridad.",
  },
  {
    title: "Cumplimiento Normativo Total",
    body: "Alineación completa con regulaciones federales, estatales y municipales del sector público mexicano.",
  },
] as const;

const SERVICES: readonly ServiceItem[] = [
  {
    title: "Trazabilidad por Activo",
    body: "Código único para cada equipo desde retiro hasta disposición final con portal digital para acceso a certificados históricos.",
  },
  {
    title: "Destrucción Certificada de Datos",
    body: "Borrado de nivel DoD 5220.22-M o destrucción física de medios con certificados individuales por equipo.",
  },
  {
    title: "Cumplimiento LGPGIR y NOM",
    body: "Manifiestos de entrega-transporte-recepción (NOM-052) y certificaciones R2v3 reconocidas internacionalmente.",
  },
] as const;

const SERVICE_IMAGE: ServiceImage = {
  src: "/images/industrias/industriagobe2.jpeg",
  alt: "Procesos de reciclaje para gobierno con cumplimiento normativo",
} as const;

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function GobiernoPage() {
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
        title="Soluciones Especializadas para Gobierno"
        items={[...FEATURES]}
      />

      {/* Services Section */}
      <SplitServiceSection
        kicker="Nuestros Servicios"
        title="Servicios Especializados para Instituciones Públicas"
        items={[...SERVICES]}
        image={SERVICE_IMAGE}
      />

      {/* Contact Form */}
      <ContactForm industry="Gobierno" />
    </main>
  );
}