import { memo } from "react";
import type { Metadata } from "next";
import Hero from "@/app/(componentes)/ui/Hero";
import ContactForm from "../../(componentes)/ui/ContactForm";
import IntroText from "@/app/(componentes)/ui/IntroText";
import FeatureGridSection from "@/app/(componentes)/ui/FeatureGridSection";
import SplitServiceSection from "@/app/(componentes)/ui/SplitServiceSection";

// ============================================================================
// METADATA FOR SEO
// ============================================================================
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
  openGraph: {
    title: "Reciclaje Electrónico Automotriz | Recibásicos",
    description: "Gestión especializada de componentes electrónicos automotrices con trazabilidad completa y recuperación de valor.",
    images: ["/images/industrias/industriaautomotriz.jpg"],
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
    src: "/images/industrias/industriaautomotriz.jpg",
    alt: "Industria Automotriz - Reciclaje de componentes electrónicos",
  },
  height: "60vh" as const,
  badgeText: "Automotriz",
  title: "Valorización Avanzada de Componentes y Electrónica Automotriz",
  subtitle:
    "Optimizamos la recuperación de materiales en módulos de control, sensores y baterías complejas, garantizando una trazabilidad impecable que fortalece la cadena de suministro y el cumplimiento ESG de fabricantes y OEMs.",
} as const;

const INTRO_TEXT = `Maximizamos la eficiencia en la gestión de scrap electrónico y componentes complejos para la cadena de
suministro automotriz. Nuestro enfoque se centra en la recuperación de metales de alto valor y el manejo
seguro de módulos de control y baterías, garantizando la trazabilidad necesaria para cumplir con los
estándares de calidad y sostenibilidad de fabricantes y OEMs.` as const;

const FEATURES: readonly FeatureItem[] = [
  {
    title: "Reciclaje de Alto Rendimiento",
    body: "Procesos diseñados para recuperar materiales y componentes con eficiencia industrial.",
  },
  {
    title: "Manejo Seguro de Baterías y Electrónica Compleja",
    body: "Gestión responsable de baterías, cableado y sistemas electrónicos con control y seguridad.",
  },
  {
    title: "Trazabilidad Completa",
    body: "Seguimiento claro del proceso para cumplimiento, auditorías internas y reportes ESG.",
  },
] as const;

const SERVICES: readonly ServiceItem[] = [
  {
    title: "Cumplimiento y Manejo Responsable",
    body: "Gestión alineada a buenas prácticas ambientales para residuos electrónicos y baterías.",
  },
  {
    title: "Recuperación de Metales y Componentes",
    body: "Recuperación de metales y partes aprovechables para reducir costos y maximizar valor.",
  },
  {
    title: "Refuerzo ESG con Economía Circular",
    body: "Evidencia y soporte para iniciativas ESG mediante circularidad real y trazable.",
  },
] as const;

const SERVICE_IMAGE: ServiceImage = {
  src: "/images/industrias/industriaauto2.jpg",
  alt: "Reciclaje y recuperación de valor para industria automotriz",
} as const;

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function AutomotrizPage() {
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
        title="Soluciones Especializadas para Automotriz"
        items={[...FEATURES]}
      />

      {/* Services Section */}
      <SplitServiceSection
        kicker="Nuestros Servicios"
        title="Recuperación de valor y cumplimiento ambiental en automotriz"
        items={[...SERVICES]}
        image={SERVICE_IMAGE}
      />

      {/* Contact Form */}
      <ContactForm industry="Automotriz" />
    </main>
  );
}