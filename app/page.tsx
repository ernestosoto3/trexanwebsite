import { memo } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "./(componentes)/ui/Button";
import ServiceCards from "./(componentes)/ui/ServiceCards";
import ComoTrabajamosComoAyudamos from "./(componentes)/ui/ComoTrabajamosComoAyudamos";
import Hero from "./(componentes)/ui/Hero";
import CTA from "./(componentes)/ui/CTA";
import IntroText from "./(componentes)/ui/IntroText";
import { fetchSanity } from "@/lib/sanity";
import { qNoticias } from "@/lib/queries";

// ============================================================================
// METADATA FOR SEO
// ============================================================================
export const metadata: Metadata = {
  title: "Recibásicos - Reciclaje de Residuos Electrónicos | Trexan Recycling Group",
  description:
    "Líderes en valorización de residuos electrónicos con trazabilidad total. Certificaciones R2v3, ISO 14001 e ISO 45001. Economía circular y cumplimiento normativo garantizado.",
  keywords: [
    "reciclaje electrónico México",
    "RAEE",
    "certificación R2v3",
    "ISO 14001",
    "ISO 45001",
    "economía circular",
    "Trexan Recycling Group",
  ],
  openGraph: {
    title: "Recibásicos - Soluciones Sustentables para Residuos Electrónicos",
    description: "Líderes en valorización de RAEE con certificaciones internacionales y trazabilidad total.",
    images: ["/images/industrias/GRUPO TREXAN-2.jpg"],
    type: "website",
  },
};

export const revalidate = 60; // Revalidate every 60 seconds

// ============================================================================
// TYPES
// ============================================================================
interface Feature {
  readonly title: string;
  readonly desc: string;
}

interface NewsCard {
  readonly title: string;
  readonly date: string;
  readonly dateISO?: string;
  readonly excerpt: string;
  readonly image: string;
  readonly alt: string;
  readonly href: string;
}

interface SanityNoticia {
  readonly _id: string;
  readonly titulo?: string;
  readonly fecha?: string;
  readonly resumen?: string;
  readonly excerpt?: string;
  readonly contenido?: PortableTextBlock[]; // ADDED: Portable text content
  readonly slug?: {
    readonly current?: string;
  };
  readonly imagen?: {
    readonly asset?: {
      readonly url?: string;
    };
  };
  readonly image?: {
    readonly asset?: {
      readonly url?: string;
    };
  };
  readonly imageUrl?: string;
}

/**
 * Sanity Portable Text Block structure
 */
interface PortableTextBlock {
  _type: string;
  children?: Array<{
    text?: string;
    _type?: string;
  }>;
  style?: string;
}

interface SectionHeaderProps {
  readonly label?: string;
  readonly title: string;
  readonly description?: string;
  readonly align?: "left" | "center";
}

interface IndustryButtonProps {
  readonly industry: string;
}

interface NewsCardComponentProps {
  readonly card: NewsCard;
}

interface FeatureCardProps {
  readonly feature: Feature;
}

// ============================================================================
// CONSTANTS
// ============================================================================
const INDUSTRIES: readonly string[] = [
  "Automotriz",
  "Manufactura",
  "Gobierno",
  "Electrónica",
  "Tecnología",
  "Salud",
  "Retail",
  "Educación",
] as const;

const FEATURES: readonly Feature[] = [
  {
    title: "Economía circular",
    desc: "Reducimos transporte innecesario y maximizamos la recuperación de materiales.",
  },
  {
    title: "Evidencias y certificaciones",
    desc: "R2v3, ISO 14001 e ISO 45001 respaldan cada operación con informes claros.",
  },
  {
    title: "Equipo especializado",
    desc: "Cuadrillas capacitadas y equipadas para intervenir en sitios industriales y oficinas.",
  },
  {
    title: "Cobertura nacional",
    desc: "Red de centros integrados que agilizan la logística y bajan tiempos de respuesta.",
  },
] as const;

// Fallback news - used only if Sanity fetch fails
const FALLBACK_NEWS: readonly NewsCard[] = [
  {
    title: "Trexan Reconocida con Premio de Sustentabilidad Nacional",
    date: "Diciembre 15, 2025",
    dateISO: "2025-12-15",
    excerpt:
      "Trexan ha sido seleccionada para recibir el Premio Nacional de Sustentabilidad, un reconocimiento anual otorgado a empresas que demuestran excelencia en prácticas ambientales y economía circular...",
    image: "/images/industrias/GRUPO TREXAN-53.jpg",
    alt: "Vista aérea de las instalaciones de reciclaje Trexan con áreas de procesamiento organizadas",
    href: "/noticias/trexan-premio-sustentabilidad",
  },
  {
    title: "Transformando Residuos Industriales en Activos Estratégicos: Economía Circular",
    date: "Noviembre 19, 2025",
    dateISO: "2025-11-19",
    excerpt:
      "Los residuos industriales representan más que un desafío de disposición. Son una oportunidad sin explotar esperando ser desbloqueada. Las empresas con visión de futuro en manufactura, energía y tecnología...",
    image: "/images/industrias/GRUPO TREXAN-22.jpg",
    alt: "Línea de procesamiento industrial con maquinaria de trituración y separación de materiales",
    href: "/noticias/economia-circular-activos-estrategicos",
  },
  {
    title: "Fortaleciendo Relaciones con Clientes del Sector Electrónico: Ventaja Estratégica",
    date: "Octubre 2, 2025",
    dateISO: "2025-10-02",
    excerpt:
      "En el mundo competitivo de la gestión de residuos electrónicos, tu éxito depende no solo de lo que recolectas, sino de hacia dónde va. Como fabricante de componentes electrónicos...",
    image: "/images/industrias/shaking-hands.jpg",
    alt: "Patio de logística con materiales clasificados y organizados para reciclaje",
    href: "/noticias/sector-electronico-ventaja-estrategica",
  },
] as const;

const HERO_CONFIG = {
  bg: { type: "video" as const, src: "/videos/solution-video-2.mp4" },
  height: "60vh" as const,
  badgeText: "Recibasicos - Trexan Recycling Group",
  title: "Soluciones Sustentables para Residuos Electrónicos",
  buttons: [
    {
      href: "/contacto",
      label: "Solicitar Cotización",
      variant: "primary" as const,
      className: "bg-emerald-700 border-emerald-700 hover:bg-emerald-800",
    },
    {
      href: "/nosotros",
      label: "Conoce Nuestros Servicios",
      variant: "primary" as const,
      className: "hidden md:inline-flex bg-emerald-700 border-emerald-700 hover:bg-emerald-800",
    },
  ],
} as const;

const INTRO_TEXT = `Líderes en valorización de residuos electrónicos con trazabilidad total.
Protegemos su cadena de suministro mediante procesos certificados (R2v3, ISO)
que transforman pasivos ambientales en cumplimiento normativo y metas de
sostenibilidad cumplidas.` as const;

const SECONDARY_BUTTON_CLASSES = "rounded-none" as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Converts industry name to URL-safe slug
 * Examples: "Automotriz" → "automotriz", "Tecnología" → "tecnologia"
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Formats date string to Spanish locale
 */
function formatDateSpanish(input?: string): string {
  if (!input) return "";
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;

  return d.toLocaleDateString("es-PR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Extracts plain text excerpt from Sanity Portable Text
 * Takes first ~180 characters from content blocks
 */
function extractExcerptFromPortableText(
  blocks?: PortableTextBlock[],
  maxLength: number = 180
): string {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return "Lee más sobre esta actualización.";
  }

  // Extract all text from all blocks
  const allText = blocks
    .filter((block) => block._type === "block") // Only process text blocks
    .map((block) => {
      if (!block.children || !Array.isArray(block.children)) {
        return "";
      }
      // Extract text from all children
      return block.children
        .filter((child) => child._type === "span" && child.text)
        .map((child) => child.text)
        .join(" ");
    })
    .filter(Boolean) // Remove empty strings
    .join(" ");

  // Clean up whitespace
  const cleanText = allText.replace(/\s+/g, " ").trim();

  // If no text found, return default
  if (!cleanText) {
    return "Lee más sobre esta actualización.";
  }

  // Truncate to max length and add ellipsis
  if (cleanText.length <= maxLength) {
    return cleanText;
  }

  // Find last complete word before maxLength
  const truncated = cleanText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + "...";
  }

  return truncated + "...";
}

/**
 * Transforms Sanity noticia to NewsCard format
 * Now extracts excerpt from contenido if resumen is not available
 */
function transformSanityNoticia(n: SanityNoticia): NewsCard {
  const href = n?.slug?.current
    ? `/noticias/${n.slug.current}`
    : `/noticias/${n._id}`;

  const image =
    n?.imagen?.asset?.url ||
    n?.image?.asset?.url ||
    n?.imageUrl ||
    "/images/noticias/placeholder-1.jpg";

  // Priority order for excerpt:
  // 1. resumen field (if exists and has content)
  // 2. excerpt field (if exists and has content)
  // 3. Extract from contenido portable text
  // 4. Fallback message
  let excerpt = "Lee más sobre esta actualización.";
  
  if (n?.resumen && n.resumen.trim()) {
    excerpt = n.resumen;
  } else if (n?.excerpt && n.excerpt.trim()) {
    excerpt = n.excerpt;
  } else if (n?.contenido) {
    excerpt = extractExcerptFromPortableText(n.contenido);
  }

  return {
    title: n?.titulo ?? "Noticia",
    date: formatDateSpanish(n?.fecha),
    dateISO: n?.fecha,
    excerpt,
    href,
    image,
    alt: n?.titulo ?? "Noticia",
  };
}

// ============================================================================
// SUB-COMPONENTS (Memoized for performance)
// ============================================================================

/**
 * Section header component
 * Memoized to prevent unnecessary re-renders
 */
const SectionHeader = memo(function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`space-y-3 ${align === "center" ? "text-center" : "text-left"}`}>
      {label && (
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700">
          {label}
        </p>
      )}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-zinc-900">{title}</h2>
      {description && (
        <p className="text-base text-center md:text-lg text-zinc-600">{description}</p>
      )}
    </div>
  );
});

/**
 * Feature card component
 * Memoized to prevent unnecessary re-renders
 */
const FeatureCard = memo(function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="relative bg-zinc-50 border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
      <div className="absolute top-0 left-0 w-full h-2 bg-orange-600" aria-hidden="true" />
      <h3 className="mt-3 text-lg font-semibold text-zinc-900">{feature.title}</h3>
      <p className="mt-3 text-sm md:text-base text-zinc-600 leading-relaxed">{feature.desc}</p>
    </article>
  );
});

/**
 * Industry button component - Clickable link to industry pages
 * Memoized to prevent unnecessary re-renders
 */
const IndustryButton = memo(function IndustryButton({ industry }: IndustryButtonProps) {
  const slug = slugify(industry);
  const href = `/industrias/${slug}`;

  return (
    <Link
      href={href}
      className="flex w-full items-center justify-between py-4 text-left group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700 transition-all duration-200"
      aria-label={`Ver más sobre la industria ${industry}`}
    >
      <span className="text-base md:text-lg opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
        {industry}
      </span>
      <span
        className="text-sm opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
        aria-hidden="true"
      >
        ↗
      </span>
    </Link>
  );
});

/**
 * News card component
 * Memoized to prevent unnecessary re-renders
 */
const NewsCardComponent = memo(function NewsCardComponent({ card }: NewsCardComponentProps) {
  const dateTimeValue = card.dateISO || undefined;

  return (
    <Link
      href={card.href}
      className="relative group bg-white border border-zinc-200 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
      aria-label={`Leer más sobre: ${card.title}`}
    >
      {/* Orange strip */}
      <div className="absolute top-0 left-0 w-full h-2 bg-orange-600 z-10" aria-hidden="true" />

      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"
          aria-hidden="true"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-3 flex-1 flex flex-col">
        <time className="text-xs md:text-sm text-emerald-700 font-medium" dateTime={dateTimeValue}>
          {card.date}
        </time>
        <h3 className="text-lg md:text-xl font-semibold text-zinc-900 leading-snug group-hover:text-emerald-700 transition-colors duration-200">
          {card.title}
        </h3>
        <p className="text-sm md:text-base text-zinc-600 leading-relaxed line-clamp-3 flex-1">
          {card.excerpt}
        </p>
      </div>
    </Link>
  );
});

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default async function HomePage() {
  // Fetch news from Sanity
  const noticias = await fetchSanity<SanityNoticia[]>(qNoticias);

  // Determine which news to show (latest 3)
  let NEWS_CARDS: readonly NewsCard[];

  if (!noticias || noticias.length === 0) {
    // If Sanity fetch fails or returns no results, use fallback
    console.warn("Using fallback news on homepage");
    NEWS_CARDS = FALLBACK_NEWS.slice(0, 3);
  } else {
    // Transform Sanity news and combine with fallback, then take latest 3
    const fromSanity = noticias.map(transformSanityNoticia);
    NEWS_CARDS = [...fromSanity, ...FALLBACK_NEWS].slice(0, 3);
  }

  return (
    <main className="min-h-dvh bg-white">
      {/* Hero Section */}
      <Hero
        bg={HERO_CONFIG.bg}
        height={HERO_CONFIG.height}
        badgeText={HERO_CONFIG.badgeText}
        title={HERO_CONFIG.title}
        buttons={[...HERO_CONFIG.buttons]}
      />

      {/* Intro Text */}
      <IntroText>{INTRO_TEXT}</IntroText>

      {/* Services Band (desktop only) */}
      <section className="relative bg-white overflow-hidden hidden md:block">
        <div className="absolute top-0 left-0 w-full h-2 bg-orange-600 z-10" aria-hidden="true" />
        <div
          className="h-88 md:h-112 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/industrias/GRUPO TREXAN-2.jpg')" }}
          role="img"
          aria-label="Instalaciones de procesamiento de Trexan"
        />
      </section>

      {/* Service Cards */}
      <section className="relative md:-mt-64">
        <div className="section">
          <ServiceCards />
        </div>
      </section>

      {/* Video Section with Text Overlay */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-104 md:min-h-128 flex items-center justify-center">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="/videos/enviormentvid.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
          </div>

          {/* Text Content */}
          <div className="section relative z-10">
            <div className="bg-emerald-700 p-8 md:p-12 w-full border border-white/10">
              <div className="text-center text-white space-y-6 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Comprometidos con la Reducción del Impacto Ambiental
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-white/90">
                  Nuestro compromiso ambiental se materializa al mantener los residuos electrónicos
                  fuera de vertederos y mediante el diseño meticuloso de todos nuestros procesos.
                  Desde la recolección hasta la valorización final, aplicamos certificaciones
                  internacionales R2v3 e ISO 14001 para anticipar impactos, minimizar nuestra huella
                  ecológica y garantizar una economía circular real en México.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Trabajamos / Cómo Ayudamos */}
      <ComoTrabajamosComoAyudamos />

      {/* Industries Section */}
      <section className="py-8 bg-emerald-700 text-white">
        <div className="section">
          <div className="border-t border-emerald-300/70 pt-6">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-emerald-300">
              Industrias
            </p>
            <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Confiados en Diferentes Sectores
              </h2>
              
              <Button 
                href="/industrias" 
                variant="emerald-inverted"
                className={SECONDARY_BUTTON_CLASSES}
              >
                Industrias →
              </Button>
            </div>
          </div>

          {/* Industries List */}
          <div className="mt-8 border-y border-white/10 divide-y divide-white/10">
            {INDUSTRIES.map((industry) => (
              <IndustryButton key={industry} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section">
          <header className="mb-10">
            <SectionHeader
              title="¿Por qué las empresas trabajan con nosotros?"
              description="Cumplimos con normativas, cuidamos la seguridad y mantenemos evidencia clara de cada retiro."
              align="left"
            />
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* News Section - Now dynamically shows latest 3 from Sanity */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-zinc-50">
        <div className="section space-y-10">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-3 text-left flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
                Noticias y Actualizaciones
              </h2>
            </div>

            <div className="text-left pt-4">
              <Link
                href="/noticias"
                className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
              >
                Ver todas las noticias
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </header>

          {/* News Cards Grid - Always shows latest 3 */}
          <div className="grid md:grid-cols-3 gap-8">
            {NEWS_CARDS.map((card) => (
              <NewsCardComponent key={`${card.title}-${card.date}`} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}