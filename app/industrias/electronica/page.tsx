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
  openGraph: {
    title: "Reciclaje Electrónico | Recuperación de Metales Preciosos",
    description: "Valorización de componentes electrónicos y recuperación de metales con procesos de alto rendimiento.",
    images: ["/images/industrias/GRUPO-TREXAN-14.jpg"],
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
    src: "/images/industrias/GRUPO-TREXAN-14.jpg",
    alt: "Industria Electrónica - Recuperación de metales preciosos",
  },
  height: "60vh" as const,
  badgeText: "Electrónica",
  title: "Valorización Avanzada de Componentes y Metales Preciosos",
  subtitle:
    "Optimizamos la recuperación en tarjetas electrónicas, periféricos y dispositivos obsoletos mediante procesos de refinamiento metálico de alto rendimiento, transformando sus excedentes en recursos estratégicos para la economía circular.",
} as const;

const INTRO_TEXT = `Especialistas en la valorización de tarjetas electrónicas, periféricos y componentes no conformes. Aplicamos
procesos de desmantelamiento y refinación de alto rendimiento para recuperar metales preciosos, asegurando
que la propiedad intelectual y los materiales sensibles sean gestionados bajo estrictos protocolos de
seguridad y economía circular.` as const;

const FEATURES: readonly FeatureItem[] = [
  {
    title: "Recuperación de Metales y Partes",
    body: "Recuperación de metales preciosos y partes aprovechables con procesos de alto rendimiento.",
  },
  {
    title: "Reducción de Inventarios Obsoletos",
    body: "Liberación de espacio físico mediante retiro, clasificación y reciclaje eficiente.",
  },
  {
    title: "Destrucción Certificada de Datos",
    body: "Protección de información sensible mediante destrucción certificada y procesos controlados.",
  },
] as const;

const SERVICES: readonly ServiceItem[] = [
  {
    title: "Logística Eficiente",
    body: "Recolección y transporte para flujos continuos o retiros programados de inventario.",
  },
  {
    title: "Desmontaje y Reciclaje Avanzado",
    body: "Procesos especializados para tarjetas electrónicas, periféricos, baterías, cables y metales.",
  },
  {
    title: "Imagen Responsable y Circular",
    body: "Fortalece tu reputación con evidencias de circularidad y manejo responsable del e-waste.",
  },
] as const;

const SERVICE_IMAGE: ServiceImage = {
  src: "/images/industrias/industriaelec2.webp",
  alt: "Desmontaje y reciclaje avanzado de electrónica",
} as const;

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function ElectronicaPage() {
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
        title="Soluciones Especializadas para Electrónica"
        items={[...FEATURES]}
      />

      {/* Services Section */}
      <SplitServiceSection
        kicker="Nuestros Servicios"
        title="Logística, desmontaje y refinamiento para maximizar recuperación"
        items={[...SERVICES]}
        image={SERVICE_IMAGE}
      />

      {/* Contact Form */}
      <ContactForm industry="Electrónica" />
    </main>
  );
}