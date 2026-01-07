import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import type { Metadata } from "next";
import CTA from "../../(componentes)/ui/CTA";

// ============================================================================
// METADATA FOR SEO
// ============================================================================
export const metadata: Metadata = {
  title: "Trexan Reconocida con Premio de Sustentabilidad Nacional | Recibásicos",
  description:
    "Trexan ha sido seleccionada para recibir el Premio Nacional de Sustentabilidad, un reconocimiento anual otorgado a empresas que demuestran excelencia en sostenibilidad.",
  keywords: [
    "premio sustentabilidad",
    "Trexan Recycling Group",
    "economía circular",
    "reconocimiento ambiental",
    "excelencia sustentabilidad",
  ],
  openGraph: {
    title: "Trexan Reconocida con Premio de Sustentabilidad Nacional",
    description: "Reconocimiento a la excelencia operativa y ambiental en gestión de residuos electrónicos.",
    images: ["/images/industrias/GRUPO TREXAN-53.jpg"],
    type: "article",
    publishedTime: "2025-12-15T00:00:00Z",
  },
};

// ============================================================================
// TYPES
// ============================================================================
interface ArticleSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
}

interface QuoteSection {
  readonly quote: string;
}

interface ListSection {
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
}

// ============================================================================
// CONSTANTS
// ============================================================================
const ARTICLE_DATA = {
  title: "Trexan Reconocida con Premio de Sustentabilidad Nacional",
  date: "2025-12-15",
  dateFormatted: "Diciembre 15, 2025",
  excerpt:
    "Trexan ha sido seleccionada para recibir el Premio Nacional de Sustentabilidad, un reconocimiento anual otorgado a empresas que demuestran excelencia en sostenibilidad.",
  image: {
    src: "/images/industrias/GRUPO TREXAN-53.jpg",
    alt: "Reconocimiento de sustentabilidad de Trexan",
  },
} as const;

const SECTIONS: readonly ArticleSection[] = [
  {
    title: "Un reconocimiento a la excelencia operativa y ambiental",
    paragraphs: [
      "Este premio destaca iniciativas medibles y consistentes que fortalecen la economía circular, elevan los estándares de cumplimiento y promueven una cultura interna enfocada en la mejora continua.",
      "Para Trexan, este logro refleja el trabajo coordinado de sus equipos operacionales, técnicos y de calidad para convertir retos ambientales en oportunidades de valor.",
    ],
  },
  {
    title: "Sustentabilidad como principio de trabajo",
    paragraphs: [
      "En el manejo responsable de residuos electrónicos, la sustentabilidad no es una meta aislada: es una práctica diaria integrada a la trazabilidad, la documentación, la seguridad operacional y la valorización de materiales.",
      "Nuestra prioridad es asegurar procesos claros, verificables y alineados a las necesidades de auditoría de clientes en múltiples industrias.",
    ],
  },
] as const;

const QUOTE: QuoteSection = {
  quote:
    "Este reconocimiento refleja la disciplina y el compromiso de nuestro equipo con procesos confiables, trazables y enfocados en resultados. La sustentabilidad se construye con consistencia, todos los días.",
} as const;

const EVALUATION_CRITERIA: ListSection = {
  title: "¿Qué evaluó el comité del premio?",
  description:
    "Aunque el reconocimiento es anual, la evaluación considera evidencia acumulada a lo largo del tiempo. Entre los criterios se incluyen prácticas como:",
  items: [
    "Esquemas de recolección y manejo alineados a protocolos internos",
    "Trazabilidad y control documental (cadena de custodia y reportes)",
    "Valorización de materiales y reducción de disposición final",
    "Mejoras continuas basadas en métricas y auditorías",
    "Capacitación del personal y cumplimiento de estándares operacionales",
  ],
} as const;

const CLOSING_SECTIONS: readonly ArticleSection[] = [
  {
    title: "Impacto para clientes y aliados",
    paragraphs: [
      "Para nuestros clientes, este reconocimiento refuerza un punto clave: la sustentabilidad se demuestra con procesos. Un servicio confiable debe facilitar auditorías, reducir riesgos, proteger reputación y aportar datos útiles para reportes internos y objetivos ESG.",
    ],
  },
  {
    title: "Mirando hacia el futuro",
    paragraphs: [
      "Trexan continuará fortaleciendo sus capacidades de trazabilidad, seguridad y valorización, incorporando mejoras operacionales y herramientas de documentación que permitan un cumplimiento más simple, más transparente y más robusto para cada organización que confía en nuestros servicios.",
    ],
  },
] as const;

// ============================================================================
// SUB-COMPONENTS (Memoized for performance)
// ============================================================================

/**
 * Article section component with title and paragraphs
 * Memoized to prevent unnecessary re-renders
 */
interface ArticleSectionProps {
  readonly section: ArticleSection;
}

const ArticleSectionComponent = memo(function ArticleSectionComponent({
  section,
}: ArticleSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
        {section.title}
      </h2>
      {section.paragraphs.map((paragraph, idx) => (
        <p key={idx} className="text-base md:text-lg leading-relaxed text-zinc-700">
          {paragraph}
        </p>
      ))}
    </section>
  );
});

/**
 * Quote section component
 * Memoized for performance
 */
interface QuoteSectionProps {
  readonly quote: QuoteSection;
}

const QuoteSectionComponent = memo(function QuoteSectionComponent({
  quote,
}: QuoteSectionProps) {
  return (
    <section className="border-l-4 border-emerald-700 pl-6">
      <blockquote className="text-lg md:text-xl italic text-zinc-800 leading-relaxed">
        "{quote.quote}"
      </blockquote>
    </section>
  );
});

/**
 * List section component
 * Memoized for performance
 */
interface ListSectionProps {
  readonly section: ListSection;
}

const ListSectionComponent = memo(function ListSectionComponent({
  section,
}: ListSectionProps) {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
        {section.title}
      </h2>
      <p className="text-base md:text-lg leading-relaxed text-zinc-700">
        {section.description}
      </p>

      <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-zinc-700">
        {section.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
});

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function NoticiaTrexanPremioPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb / Back Navigation */}
      <section className="pt-10">
        <div className="section">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            aria-label="Volver a la página de noticias"
          >
            <span aria-hidden="true">←</span>
            Volver a Noticias
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="pt-8 pb-6">
        <div className="section">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-0">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-zinc-900">
              {ARTICLE_DATA.title}
            </h1>

            <time
              className="mt-4 block text-sm md:text-base text-emerald-700 font-medium"
              dateTime={ARTICLE_DATA.date}
            >
              {ARTICLE_DATA.dateFormatted}
            </time>

            <p className="mt-4 text-zinc-600 leading-relaxed">
              {ARTICLE_DATA.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-10">
        <div className="section">
          <div className="relative w-full overflow-hidden border-zinc-200">
            <div className="relative h-64 md:h-112 w-full">
              <Image
                src={ARTICLE_DATA.image.src}
                alt={ARTICLE_DATA.image.alt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-20">
        <div className="section">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-0">
            <article className="space-y-12 text-zinc-800">
              {/* Main Sections */}
              {SECTIONS.map((section) => (
                <ArticleSectionComponent key={section.title} section={section} />
              ))}

              {/* Quote Section */}
              <QuoteSectionComponent quote={QUOTE} />

              {/* Evaluation Criteria List */}
              <ListSectionComponent section={EVALUATION_CRITERIA} />

              {/* Closing Sections */}
              {CLOSING_SECTIONS.map((section) => (
                <ArticleSectionComponent key={section.title} section={section} />
              ))}
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </main>
  );
}