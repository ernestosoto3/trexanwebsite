import { memo } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Button from "../(componentes)/ui/Button";
import Hero from "../(componentes)/ui/Hero";
import CTA from "../(componentes)/ui/CTA";

// ============================================================================
// METADATA FOR SEO
// ============================================================================
export const metadata: Metadata = {
  title: "Nuestra Empresa | Liderando el Reciclaje Electrónico | Recibásicos",
  description:
    "Más de una década transformando residuos electrónicos en recursos valiosos. Certificaciones R2v3, ISO 14001 e ISO 45001. Trazabilidad total y economía circular.",
  keywords: [
    "reciclaje electrónico México",
    "valorización RAEE",
    "certificaciones ambientales",
    "economía circular",
    "gestión residuos electrónicos",
  ],
  openGraph: {
    title: "Nuestra Empresa | Recibásicos",
    description: "Liderando el futuro de la valorización electrónica con certificaciones internacionales.",
    images: ["/images/industrias/GRUPO TREXAN-42.jpg"],
  },
};

export const revalidate = 60;

// ============================================================================
// TYPES
// ============================================================================
interface CoreVertical {
  readonly title: string;
  readonly bullets: readonly string[];
}

interface ContentCard {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly alt: string;
  readonly href: string;
}

// ============================================================================
// CONSTANTS
// ============================================================================
const HERO_CONFIG = {
  bg: {
    type: "image" as const,
    src: "/images/industrias/GRUPO TREXAN-42.jpg",
    alt: "Nuestra Empresa - Instalaciones de reciclaje electrónico",
  },
  height: "60vh" as const,
  badgeText: "Nuestra Empresa",
  title: "Liderando el Futuro de la Valorización Electrónica",
  subtitle:
    "En Recibásicos transformamos desafíos ambientales en oportunidades sostenibles, garantizando trazabilidad total y certificaciones internacionales en cada proceso.",
} as const;

const CORE_VERTICALS: readonly CoreVertical[] = [
  {
    title: "Acopio Integral",
    bullets: [
      "Servicios de recolección en sitio",
      "Cadena de custodia documentada",
      "Instalaciones: Centros integrados en México",
    ],
  },
  {
    title: "Valorización Certificada",
    bullets: [
      "Cumplimiento de normas R2v3 e ISO",
      "Separación y clasificación avanzada",
      "Certificados de destrucción y valorización",
    ],
  },
  {
    title: "Economía Circular",
    bullets: [
      "Evitamos disposición en rellenos sanitarios",
      "Generamos materias primas secundarias",
      "Reducción de huella de carbono",
    ],
  },
  {
    title: "Gestión Completa",
    bullets: [
      "Consultoría en manejo de residuos",
      "Reportes de cumplimiento normativo",
      "Programas de recolección programada",
    ],
  },
] as const;

const CONTENT_CARDS: readonly ContentCard[] = [
  {
    title: "Sobre Nosotros",
    description: "Más de una década liderando el reciclaje de electrónicos en México",
    image: "/images/industrias/DJI_0410-1.JPG",
    alt: "Instalaciones de Recibásicos mostrando infraestructura de reciclaje",
    href: "/nosotros",
  },
  {
    title: "Sostenibilidad",
    description: "Compromiso ambiental certificado en cada etapa del proceso",
    image: "/images/naturaleza/herosostenibilidad2.jpg",
    alt: "Prácticas sostenibles en procesamiento de residuos electrónicos",
    href: "/sostenibilidad",
  },
  {
    title: "Certificaciones",
    description: "R2v3, ISO 14001 e ISO 45001 garantizan calidad y seguridad operacional",
    image: "/images/industrias/GRUPO TREXAN-74.jpg",
    alt: "Certificaciones internacionales de calidad y medio ambiente",
    href: "/certificaciones",
  },
  {
    title: "Noticias",
    description: "Mantente informado sobre innovaciones y logros en reciclaje electrónico",
    image: "/images/industrias/main-img-2-1.jpeg",
    alt: "Últimas noticias y actualizaciones de Recibásicos",
    href: "/noticias",
  },
] as const;

// ============================================================================
// SUB-COMPONENTS (Memoized for performance)
// ============================================================================

/**
 * Core vertical card component
 * Memoized to prevent unnecessary re-renders
 */
interface VerticalCardProps {
  readonly vertical: CoreVertical;
}

const VerticalCard = memo(function VerticalCard({ vertical }: VerticalCardProps) {
  return (
    <article className="relative bg-white border-t-4 border-orange-600 shadow-xl p-6 space-y-4 transition-all duration-200 hover:shadow-3xl hover:-translate-y-1">
      <h3 className="text-xl font-bold text-zinc-900">{vertical.title}</h3>

      <ul className="space-y-2 text-sm text-zinc-700">
        {vertical.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="text-emerald-700 mt-0.5" aria-hidden="true">
              •
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
});

/**
 * Content card component
 * Memoized to prevent unnecessary re-renders
 */
interface ContentCardComponentProps {
  readonly card: ContentCard;
}

const ContentCardComponent = memo(function ContentCardComponent({
  card,
}: ContentCardComponentProps) {
  return (
    <article className="bg-white shadow-xl overflow-hidden transition-all duration-200 hover:shadow-3xl hover:-translate-y-1 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" aria-hidden="true" />
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-zinc-900">
          {card.title}
        </h3>
        <p className="text-sm md:text-base text-zinc-600 leading-relaxed flex-1">
          {card.description}
        </p>

        <div className="pt-4">
          <Button
            href={card.href}
            variant="primary"
            className="w-full bg-emerald-700 text-white hover:bg-emerald-800 rounded-none border-none"
            aria-label={`Conocer más sobre ${card.title}`}
          >
            Conocer Más
          </Button>
        </div>
      </div>
    </article>
  );
});

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function NuestraEmpresaPage() {
  return (
    <main className="min-h-dvh bg-zinc-50">
      {/* Hero Section */}
      <Hero
        bg={HERO_CONFIG.bg}
        height={HERO_CONFIG.height}
        badgeText={HERO_CONFIG.badgeText}
        title={HERO_CONFIG.title}
        subtitle={HERO_CONFIG.subtitle}
      />

      {/* Core Verticals Section */}
      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="section">
          <header className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-left">
              Nuestros Cuatro Pilares Operativos
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VERTICALS.map((vertical) => (
              <VerticalCard key={vertical.title} vertical={vertical} />
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-zinc-50">
        <div className="bg-emerald-700 text-white py-8 md:py-14 px-8 md:px-12 text-center text-xl md:text-2xl leading-relaxed max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Comprometidos con la Reducción del Impacto Ambiental
          </h3>

          <p className="mt-6 text-base md:text-xl leading-relaxed text-white/90 max-w-5xl mx-auto">
            Integramos ingeniería avanzada y rigor normativo para resolver la complejidad de los
            residuos electrónicos. A través de nuestro modelo operativo, transformamos el desecho
            industrial en materias primas secundarias, asegurando que cada etapa del proceso sea
            trazable, segura y certificada internacionalmente.
          </p>
        </div>
      </section>

      {/* Content Cards Section */}
      <section className="py-10 md:py-14 bg-zinc-50">
        <div className="section">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTENT_CARDS.map((card) => (
              <ContentCardComponent key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}