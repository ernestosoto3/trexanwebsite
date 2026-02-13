import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Hero from "../(componentes)/ui/Hero";
import CTA from "../(componentes)/ui/CTA";
import IntroText from "../(componentes)/ui/IntroText";

// ============================================================================
// METADATA FOR SEO
// ============================================================================
export const metadata: Metadata = {
  title: "Sobre Nosotros | Trexan Recycling Group - Recibásicos",
  description:
    "Con más de 40 años de experiencia en reciclaje y valorización de metales, somos parte de Trexan Recycling Group. Operamos bajo estándares R2v3, ISO 14001 e ISO 45001.",
  keywords: [
    "Trexan Recycling Group",
    "Recibásicos",
    "EWR",
    "reciclaje electrónico México",
    "economía circular",
    "valorización de metales",
  ],
  openGraph: {
    title: "Sobre Nosotros | Trexan Recycling Group",
    description: "Conectando los residuos de hoy con los recursos del mañana mediante economía circular.",
    images: ["/images/industrias/DJI_0410-1.JPG"],
  },
};

// ============================================================================
// TYPES
// ============================================================================
interface ContentBlockProps {
  readonly title: string;
  readonly children: ReactNode;
  readonly align?: "left" | "right";
}

interface ResponsiveImageProps {
  readonly src: string;
  readonly alt: string;
  readonly priority?: boolean;
}

interface FeatureCardData {
  readonly icon: ReactNode;
  readonly title: string;
  readonly description: string;
}

interface MetricData {
  readonly value: string;
  readonly label: string;
}

// ============================================================================
// CONSTANTS
// ============================================================================
const IMAGES = {
  operations: "/images/industrias/GRUPO TREXAN-68.jpg",
  mountains: "/images/industrias/GRUPO TREXAN-31.jpg",
  hero: "/images/industrias/DJI_0410-1.JPG",
  altOperations: "/images/industrias/DJI_0410-1.JPG",
} as const;

const HERO_CONFIG = {
  bg: {
    type: "image" as const,
    src: IMAGES.hero,
    alt: "Sobre Nosotros - Trexan Recycling Group",
  },
  height: "60vh" as const,
  badgeText: "Sobre Nosotros",
  title: "Conectando los Residuos de Hoy con los Recursos del Mañana",
  subtitle:
    "Como parte de Trexan Recycling Group, combinamos ingeniería avanzada y cumplimiento normativo para transformar pasivos ambientales en recursos estratégicos para la industria global.",
} as const;

const INTRO_TEXT = `Con el respaldo de más de cuatro décadas de experiencia en la 
industria metalúrgica, nos hemos consolidado como el brazo 
especializado en procesos fríos y gestión de RAEE dentro de 
Trexan Recycling Group. Nuestra operación en México combina 
ingeniería de precisión y cumplimiento regulatorio para convertir 
la complejidad de los residuos electrónicos en una cadena de valor 
trazable y de alto rendimiento.` as const;

const TREXAN_METRICS: readonly MetricData[] = [
  { value: "+40", label: "Años de experiencia" },
  { value: "LATAM", label: "Cobertura regional" },
  { value: "R2v3", label: "Procesos auditables" },
  { value: "ISO", label: "Gestión certificada" },
] as const;

const CIRCULAR_ECONOMY_FEATURES: readonly FeatureCardData[] = [
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Reducción de Recursos Vírgenes",
    description:
      "Disminuimos la necesidad de extracción minera mediante la recuperación y reintegración de metales valiosos en cadenas productivas.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Minimización de Emisiones",
    description:
      "Reducimos emisiones de CO₂ y contaminantes asociados al manejo inadecuado de RAEE mediante procesos controlados y certificados.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Evidencia Documental Robusta",
    description:
      "Generamos documentación completa para auditorías ambientales, cumplimiento regulatorio y reportes ESG con trazabilidad total.",
  },
] as const;

// ============================================================================
// SUB-COMPONENTS (All memoized for performance)
// ============================================================================

/**
 * Reusable content block component
 * Memoized to prevent unnecessary re-renders
 */
const ContentBlock = memo(function ContentBlock({
  title,
  children,
  align = "left",
}: ContentBlockProps) {
  return (
    <div className="flex items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16">
      <div
        className={`max-w-lg text-center ${
          align === "right" ? "md:text-right" : "md:text-left"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
          {title}
        </h2>
        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-zinc-700">
          {children}
        </div>
      </div>
    </div>
  );
});

/**
 * Responsive image container
 * Memoized to prevent unnecessary re-renders
 */
const ResponsiveImage = memo(function ResponsiveImage({
  src,
  alt,
  priority = false,
}: ResponsiveImageProps) {
  return (
    <div className="relative w-full h-64 md:h-full md:min-h-90 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
});

/**
 * Metric card component
 * Memoized for performance
 */
interface MetricCardProps {
  readonly metric: MetricData;
}

const MetricCard = memo(function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="border border-white/25 p-5">
      <p className="text-3xl font-bold text-white">{metric.value}</p>
      <p className="text-xs uppercase tracking-wide text-white/80 mt-2">
        {metric.label}
      </p>
    </div>
  );
});

/**
 * Feature card component for circular economy section
 * Memoized for performance
 */
interface FeatureCardProps {
  readonly feature: FeatureCardData;
}

const FeatureCard = memo(function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 border-t-4 border-white hover:bg-white/15 transition-all duration-300">
      <div className="mb-4">{feature.icon}</div>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-white/80 leading-relaxed">{feature.description}</p>
    </div>
  );
});

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function NosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        bg={HERO_CONFIG.bg}
        height={HERO_CONFIG.height}
        badgeText={HERO_CONFIG.badgeText}
        title={HERO_CONFIG.title}
        subtitle={HERO_CONFIG.subtitle}
      />

      {/* Introduction */}
      <IntroText>{INTRO_TEXT}</IntroText>

      {/* Two-Column Content Sections */}
      <section className="bg-zinc-50 py-0">
        <div className="w-full">
          {/* Row 1: Text Left, Image Right */}
          <div className="grid md:grid-cols-2 md:items-stretch">
            <ContentBlock title="Nuestra Trayectoria">
              <p>
                Somos una empresa mexicana especializada en el acopio,
                recolección, almacenamiento, desmontaje y tratamiento de Residuos
                de Aparatos Eléctricos y Electrónicos (RAEE).
              </p>
              <p>
                Como parte de Trexan Recycling Group, operamos la etapa de
                procesos fríos, preparando y clasificando los materiales para su
                envío a la división EWR, donde se completa la refinación final
                de metales.
              </p>
            </ContentBlock>

            <ResponsiveImage
              src={IMAGES.operations}
              alt="Planta de reciclaje electrónico de Recibásicos"
            />
          </div>

          {/* Row 2: Image Left (desktop), Text Right (desktop) */}
          <div className="grid md:grid-cols-2 md:items-stretch">
            <div className="order-1 md:order-2">
              <ContentBlock title="Experiencia que Respalda" align="right">
                <p>
                  Contamos con especialistas con más de 40 años de experiencia
                  acumulada en reciclaje y transformación de metales, desde plantas
                  en México hasta proyectos internacionales.
                </p>
                <p>
                  Combinamos ingeniería, cumplimiento regulatorio y economía
                  circular para ofrecer soluciones confiables a industrias que
                  buscan descarbonizar y desmaterializar su cadena de suministro.
                </p>
              </ContentBlock>
            </div>

            <div className="order-2 md:order-1">
              <ResponsiveImage
                src={IMAGES.altOperations}
                alt="Operaciones industriales de valorización de metales"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trexan Recycling Group Section */}
      <section className="bg-emerald-700 py-16 md:py-24 text-white">
        <div className="section">
          <div className="max-w-7xl mx-auto">
            {/* Trexan Feature Header */}
            <div className="mb-16">
              <div className="h-2 bg-white" aria-hidden="true" />

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-12 lg:p-14 hover:bg-white/15 transition-all duration-300">
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                  {/* Left: brand + text */}
                  <div className="lg:col-span-7">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                      <div className="w-44 sm:w-56 md:w-64 max-w-40">
                        <Image
                          src="/images/partners/TrexanLogoT.png"
                          alt="Trexan Recycling Group Logo"
                          width={800}
                          height={320}
                          className="w-full h-auto"
                          priority
                        />
                      </div>

                      <h2 className="text-3xl md:text-5xl font-bold mt-8">
                        Trexan Recycling Group
                      </h2>

                      <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
                        Un ecosistema integrado que garantiza trazabilidad total desde el acopio hasta la refinación final.
                      </p>

                      <div className="mt-8 space-y-4 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl">
                        <p>
                          Trexan Recycling Group es un conglomerado líder en la gestión integral
                          de residuos electrónicos en México y Latinoamérica. Con más de 40 años
                          de experiencia acumulada en la industria del reciclaje y valorización de
                          metales, operamos bajo los más altos estándares internacionales.
                        </p>
                        <p>
                          Nuestra misión es transformar los pasivos ambientales en recursos valiosos,
                          integrando tecnología, cumplimiento normativo y economía circular para
                          ofrecer soluciones completas desde el acopio hasta la refinación final de
                          metales preciosos.
                        </p>
                      </div>

                      <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a
                          href="https://trexan.co/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-6 py-3 font-semibold hover:bg-white/90 border border-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
                        >
                          Visitar sitio web de Trexan
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>

                        <Link
                          href="/contacto"
                          className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-6 py-3 font-semibold border border-white hover:bg-white hover:text-emerald-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
                        >
                          Hablar con un asesor
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right: credibility metrics */}
                  <div className="lg:col-span-5">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
                      <p className="text-sm uppercase tracking-wider text-white/70 font-semibold">
                        Escala y credibilidad
                      </p>

                      <div className="mt-6 grid grid-cols-2 gap-6">
                        {TREXAN_METRICS.map((metric) => (
                          <MetricCard key={metric.label} metric={metric} />
                        ))}
                      </div>

                      <div className="mt-6 border-t border-white/25 pt-6">
                        <p className="text-sm text-white/85">
                          Evidencia documental, trazabilidad y cumplimiento orientado a auditorías ESG.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrated Flow Strip */}
            <div className="mb-14">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-5 md:px-10 md:py-7 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <p className="text-sm uppercase tracking-wider text-white/70 font-semibold">
                      Ecosistema integrado
                    </p>
                    <p className="text-white/90 mt-1">
                      Un flujo completo y trazable, diseñado para máxima recuperación y cumplimiento.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <span className="border border-white/25 px-4 py-2 text-sm font-semibold text-white bg-white/10">
                      Acopio & Clasificación
                    </span>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="border border-white/25 px-4 py-2 text-sm font-semibold text-white bg-white/10">
                      Procesos Fríos
                    </span>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="border border-white/25 px-4 py-2 text-sm font-semibold text-white bg-white/10">
                      Refinación Final
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Panels: Recibásicos and EWR */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
              {/* Recibásicos Panel */}
              <article>
                <div className="h-2 bg-white" aria-hidden="true" />

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-10 hover:bg-white/15 transition-all duration-300">
                  <div className="w-48 sm:w-56 md:w-64 mx-auto max-w-40">
                    <Image
                      src="/images/partners/recibasicos-letras-logo.png"
                      alt="Recibásicos Logo"
                      width={600}
                      height={220}
                      className="w-full h-auto"
                    />
                  </div>

                  <br />

                  <p className="text-sm uppercase tracking-wider text-white/70 mb-2 text-center">
                    ACOPIO Y PROCESOS FRÍOS
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    Recibásicos
                  </h2>

                  <div className="space-y-4 text-base md:text-lg text-white/85 leading-relaxed mb-6">
                    <p>
                      Recibásicos es la división especializada en el acopio, recolección,
                      almacenamiento, clasificación y desmantelamiento de Residuos de
                      Aparatos Eléctricos y Electrónicos (RAEE).
                    </p>
                    <p className="font-medium text-white">
                      Nuestra especialidad:
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-white font-bold text-lg mt-0.5" aria-hidden="true">•</span>
                      <span className="text-base text-white/85">
                        Operamos los procesos fríos de desmantelamiento mecánico,
                        separación y clasificación de componentes electrónicos sin
                        procesos térmicos.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white font-bold text-lg mt-0.5" aria-hidden="true">•</span>
                      <span className="text-base text-white/85">
                        Generamos evidencia documental completa respaldada por
                        certificaciones R2v3, ISO 14001 e ISO 45001 para garantizar
                        trazabilidad y cumplimiento normativo.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white font-bold text-lg mt-0.5" aria-hidden="true">•</span>
                      <span className="text-base text-white/85">
                        Preparamos concentrados metálicos clasificados y listos para
                        envío a la siguiente etapa de refinación en EWR.
                      </span>
                    </li>
                  </ul>

                  <div className="flex justify-center md:justify-start">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 bg-white text-emerald-900 px-6 py-3 font-semibold hover:bg-white/90 border border-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
                    >
                      Conoce más sobre Recibásicos
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>

              {/* EWR Panel */}
              <article>
                <div className="h-2 bg-white" aria-hidden="true" />

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-10 hover:bg-white/15 transition-all duration-300">
                  <div className="w-48 sm:w-56 md:w-64 mx-auto max-w-40">
                    <Image
                      src="/images/partners/EWR_Logotipo.png"
                      alt="EWR Logo"
                      width={600}
                      height={220}
                      className="w-full h-auto"
                    />
                  </div>

                  <br />

                  <p className="text-sm uppercase tracking-wider text-white/70 mb-2 text-center">
                    REFINACIÓN Y VALORIZACIÓN FINAL
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    EWR - Electronic Waste Recycling
                  </h2>

                  <div className="space-y-4 text-base md:text-lg text-white/85 leading-relaxed mb-8">
                    <p>
                      EWR es la división especializada en la refinación de metales
                      preciosos y la valorización final de materiales electrónicos.
                      Completamos el ciclo de economía circular mediante procesos
                      metalúrgicos de última generación.
                    </p>
                    <p>
                      Recibimos los concentrados metálicos preparados por Recibásicos
                      y los transformamos en metales refinados de alta pureza listos
                      para su reintroducción en cadenas productivas globales. Operamos
                      con tecnología de punta y control de calidad riguroso para
                      maximizar la recuperación de oro, plata, cobre, paladio y otros
                      metales valiosos.
                    </p>
                  </div>

                  <div className="flex justify-center md:justify-start">
                    <a
                      href="https://ewr.com.mx/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-emerald-900 px-6 py-3 font-semibold hover:bg-white/90 border border-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
                    >
                      Visitar sitio web de EWR
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy Section */}
      <section className="bg-emerald-700 py-16 md:py-24 text-white">
        <div className="section">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <header className="mb-12">
              <p className="text-sm uppercase tracking-wider text-white/70 mb-2">
                ECONOMÍA CIRCULAR
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Nuestro Lugar en la Economía Circular
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-4xl">
                Conectamos los residuos electrónicos de hoy con las materias primas 
                que la industria necesitará mañana.
              </p>
            </header>

            {/* Main Statement */}
            <div className="mb-16 border-l-4 border-white/40 pl-6 md:pl-8">
              <p className="text-xl md:text-2xl leading-relaxed text-white/95">
                Intervenimos en el punto crítico donde los residuos electrónicos
                dejan de ser un pasivo y se convierten en{" "}
                <span className="font-semibold text-white">
                  oportunidades de recuperación de valor
                </span>
                . Mediante procesos estandarizados, seguros y trazables, separamos
                y preparamos los materiales para su reintroducción en cadenas 
                productivas globales.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {CIRCULAR_ECONOMY_FEATURES.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>

            {/* Impact Statement */}
            <div className="bg-white/5 border border-white/20 p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                Cada lote gestionado contribuye a una economía circular real en 
                México y Latinoamérica
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-base md:text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-white text-xl" aria-hidden="true">•</span>
                  <span className="text-white/90">
                    Trazabilidad completa desde el acopio hasta la valorización final
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white text-xl" aria-hidden="true">•</span>
                  <span className="text-white/90">
                    Integración regulatoria con SEMARNAT, SEGAM y SAT
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white text-xl" aria-hidden="true">•</span>
                  <span className="text-white/90">
                    Operación certificada bajo estándares R2v3 e ISO 14001
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA />
    </>
  );
}