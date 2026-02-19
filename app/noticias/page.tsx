import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import type { Metadata } from "next";
import { fetchSanity } from "@/lib/sanity";
import { qNoticias } from "@/lib/queries";
import Hero from "../(componentes)/ui/Hero";
import IntroText from "../(componentes)/ui/IntroText";
import CTA from "../(componentes)/ui/CTA";

// ============================================================================
// METADATA FOR SEO
// ============================================================================
export const metadata: Metadata = {
  title: "Noticias | Economía Circular y Gestión de RAEE | Recibásicos",
  description:
    "Últimas noticias sobre reciclaje electrónico, economía circular y gestión de RAEE. Innovaciones, cumplimiento normativo y logros en sostenibilidad industrial.",
  keywords: [
    "noticias reciclaje electrónico",
    "economía circular México",
    "RAEE actualidad",
    "sostenibilidad industrial",
    "cumplimiento ambiental",
  ],
  openGraph: {
    title: "Noticias | Perspectivas sobre Economía Circular",
    description: "Mantente al tanto de las últimas innovaciones en reciclaje electrónico y gestión responsable de RAEE.",
    images: ["/images/industrias/main-img-2-1.jpeg"],
  },
};

export const revalidate = 60;

// ============================================================================
// TYPES
// ============================================================================
interface NewsCard {
  readonly title: string;
  readonly date: string;
  readonly dateISO?: string; // Original ISO date for datetime attribute
  readonly excerpt: string;
  readonly href: string;
  readonly image: string;
  readonly alt: string;
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

interface SanityNoticia {
  readonly _id: string;
  readonly titulo?: string;
  readonly fecha?: string;
  readonly resumen?: string;
  readonly excerpt?: string;
  readonly contenido?: PortableTextBlock[] | string; // Can be portable text or string
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

// ============================================================================
// CONSTANTS
// ============================================================================
const HERO_CONFIG = {
  bg: {
    type: "image" as const,
    src: "/images/industrias/main-img-2-1.jpeg",
    alt: "Noticias sobre economía circular y reciclaje electrónico",
  },
  height: "60vh" as const,
  badgeText: "Noticias",
  title: "Perspectivas sobre Economía Circular y Gestión de RAEE",
  subtitle:
    "Mantente al tanto de las últimas innovaciones, guías prácticas de cumplimiento y logros que están definiendo el futuro del reciclaje electrónico en México.",
} as const;

const INTRO_TEXT = `Explora las tendencias y avances que están redefiniendo 
la sostenibilidad industrial. Desde logros corporativos 
hasta análisis profundos sobre procesos de reciclaje 
certificado, te mantenemos al frente de la vanguardia en 
economía circular y gestión responsable de electrónicos.` as const;

const FALLBACK_NEWS: readonly NewsCard[] = [
  {
    title: "Trexan Reconocida con Premio de Sustentabilidad Nacional",
    date: "Diciembre 15, 2025",
    dateISO: "2025-12-15",
    excerpt:
      "Trexan ha sido seleccionada para recibir el Premio Nacional de Sustentabilidad, un reconocimiento anual otorgado a empresas que demuestran excelencia en sostenibilidad.",
    href: "/noticias/trexan-premio-sustentabilidad",
    image: "/images/industrias/GRUPO TREXAN-53.jpg",
    alt: "Premio de sostenibilidad - Trexan Recycling Group",
  },
  {
    title: "Transformando Residuos Industriales en Activos Estratégicos: Economía Circular",
    date: "Noviembre 19, 2025",
    dateISO: "2025-11-19",
    excerpt:
      "Los residuos industriales representan más que un desafío de disposición. Son una oportunidad para recuperar valor, fortalecer cumplimiento y elevar desempeño ambiental.",
    href: "/noticias/economia-circular-activos-estrategicos",
    image: "/images/industrias/GRUPO TREXAN-22.jpg",
    alt: "Economía circular - Transformación de residuos industriales",
  },
  {
    title: "Fortaleciendo Relaciones con Clientes del Sector Electrónico: Ventaja Estratégica",
    date: "Octubre 2, 2025",
    dateISO: "2025-10-02",
    excerpt:
      "En un entorno competitivo de gestión de residuos electrónicos, el éxito depende también de trazabilidad, comunicación y consistencia en los procesos.",
    href: "/noticias/sector-electronico-ventaja-estrategica",
    image: "/images/industrias/shaking-hands.jpg",
    alt: "Relaciones estratégicas con clientes del sector electrónico",
  },
] as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Formats date to Spanish locale
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
function extractExcerptFromContent(
  content?: PortableTextBlock[] | string,
  maxLength: number = 180
): string {
  // If content is already a string
  if (typeof content === "string") {
    const cleanText = content.replace(/\s+/g, " ").trim();
    if (!cleanText) return "Lee más sobre esta actualización.";
    
    if (cleanText.length <= maxLength) return cleanText;
    
    const truncated = cleanText.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");
    return lastSpace > 0 
      ? truncated.substring(0, lastSpace) + "..."
      : truncated + "...";
  }

  // If content is portable text blocks
  if (!content || !Array.isArray(content) || content.length === 0) {
    return "Lee más sobre esta actualización.";
  }

  // Extract all text from all blocks
  const allText = content
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
 * Priority: resumen → excerpt → contenido extraction → fallback
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
  // 3. Extract from contenido
  // 4. Fallback message
  let excerpt = "Lee más sobre esta actualización.";
  
  if (n?.resumen && n.resumen.trim()) {
    excerpt = n.resumen;
  } else if (n?.excerpt && n.excerpt.trim()) {
    excerpt = n.excerpt;
  } else if (n?.contenido) {
    excerpt = extractExcerptFromContent(n.contenido);
  }

  return {
    title: n?.titulo ?? "Noticia",
    date: formatDateSpanish(n?.fecha),
    dateISO: n?.fecha, // Keep original ISO date for datetime attribute
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
 * Individual news card component
 * Memoized to prevent unnecessary re-renders
 */
interface NewsCardComponentProps {
  readonly card: NewsCard;
}

const NewsCardComponent = memo(function NewsCardComponent({
  card,
}: NewsCardComponentProps) {
  // Use original ISO date if available, otherwise try to parse the formatted date
  const dateTimeValue = card.dateISO || undefined;

  return (
    <Link
      href={card.href}
      className="relative group bg-white border border-zinc-200 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
      aria-label={`Leer más sobre: ${card.title}`}
    >
      {/* Orange strip at the top */}
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
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" aria-hidden="true" />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-3 flex-1 flex flex-col">
        <time
          className="text-xs md:text-sm text-emerald-700 font-medium"
          dateTime={dateTimeValue}
        >
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
export default async function NoticiasPage() {
  // Fetch news from Sanity with safer helper function
  const noticias = await fetchSanity<SanityNoticia[]>(qNoticias, undefined, 60);

  // Handle error state - if fetch failed, use only fallback news
  if (!noticias) {
    console.error("Failed to fetch noticias from Sanity, using fallback news only");
    const NEWS_CARDS = FALLBACK_NEWS;

    return (
      <main>
        <Hero
          bg={HERO_CONFIG.bg}
          height={HERO_CONFIG.height}
          badgeText={HERO_CONFIG.badgeText}
          title={HERO_CONFIG.title}
          subtitle={HERO_CONFIG.subtitle}
        />
        <IntroText>{INTRO_TEXT}</IntroText>

        <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-zinc-50">
          <div className="section space-y-10">
            <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-3 text-left flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
                  Noticias y Actualizaciones
                </h2>
                <p className="text-zinc-600 max-w-2xl">
                  Publicaciones recientes sobre cumplimiento, procesos y resultados para apoyar a tu organización.
                </p>
              </div>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              {NEWS_CARDS.map((card) => (
                <NewsCardComponent
                  key={`${card.title}-${card.date}`}
                  card={card}
                />
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
    );
  }

  // Transform Sanity data (now with excerpt extraction from contenido)
  const fromSanity: NewsCard[] = noticias.map(transformSanityNoticia);

  // Combine Sanity news with fallback, limit to 6
  const NEWS_CARDS: readonly NewsCard[] = [...fromSanity, ...FALLBACK_NEWS].slice(0, 6);

  return (
    <main>
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

      {/* News Cards Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-zinc-50">
        <div className="section space-y-10">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-3 text-left flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
                Noticias y Actualizaciones
              </h2>
              <p className="text-zinc-600 max-w-2xl">
                Publicaciones recientes sobre cumplimiento, procesos y resultados para apoyar a tu organización.
              </p>
            </div>
          </header>

          {/* News Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {NEWS_CARDS.map((card) => (
              <NewsCardComponent
                key={`${card.title}-${card.date}`}
                card={card}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}