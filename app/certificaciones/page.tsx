import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import type { Metadata } from "next";
import CTA from "../(componentes)/ui/CTA";
import IntroText from "../(componentes)/ui/IntroText";
import Hero from "../(componentes)/ui/Hero";

// ============================================================================
// METADATA FOR SEO
// ============================================================================
export const metadata: Metadata = {
  title: "Certificaciones | Trexan Recycling Group",
  description: "Operamos bajo estándares globales R2v3, ISO 14001, ISO 45001, ISO 9001, con permisos SEMARNAT e IMMEX. Garantía de cumplimiento y certeza jurídica para su empresa.",
  keywords: "certificaciones ambientales, R2v3, ISO 14001, ISO 45001, SEMARNAT, IMMEX, reciclaje electrónico certificado",
  openGraph: {
    title: "Certificaciones - Garantía de Cumplimiento | Trexan",
    description: "Certificaciones internacionales y permisos específicos que eliminan riesgos en su cadena de suministro.",
    images: ["/images/industrias/GRUPO TREXAN-74.jpg"],
  },
};

// ============================================================================
// TYPES
// ============================================================================
interface Logo {
  readonly name: string;
  readonly src: string;
}

interface PartnerLogo extends Logo {
  readonly sub: string;
}

interface ProcessStep {
  readonly label: string;
  readonly cls: string;
}

interface BenefitCard {
  readonly id: string;
  readonly number: string;
  readonly category: string;
  readonly colorClass: string;
  readonly content: React.ReactNode;
}

// ============================================================================
// CONSTANTS
// ============================================================================
const IMAGES = {
  mountains: "/images/industrias/GRUPO TREXAN-31.jpg",
  hero: "/images/industrias/GRUPO TREXAN-74.jpg",
} as const;

const PARTNER_LOGOS: readonly PartnerLogo[] = [
  { name: "Recibásicos", src: "/images/partners/recibasicos.png", sub: "Procesos fríos" },
  { name: "Trexan", src: "/images/partners/trexan.png", sub: "Integración" },
  { name: "EWR", src: "/images/partners/ewr.png", sub: "Refinación" },
] as const;

const CERTIFICATION_LOGOS: readonly Logo[] = [
  { name: "ISO 14001", src: "/images/certificaciones/iso-14001.jpeg" },
  { name: "ISO 45001", src: "/images/certificaciones/ISO-45001.png.webp" },
  { name: "ISO 9001:2015", src: "/images/certificaciones/iso-9001.png" },
  { name: "SEMARNAT", src: "/images/certificaciones/semarnat.png" },
  { name: "SE IMMEX", src: "/images/certificaciones/se-immex.png" },
  { name: "R2v3 Certified", src: "/images/certificaciones/r2v3.png" },
] as const;

const PROCESS_STEPS: readonly ProcessStep[] = [
  { label: "Manufactura AEE", cls: "bg-emerald-700" },
  { label: "Uso AEE", cls: "bg-emerald-700" },
  { label: "Acopio RAEE", cls: "bg-emerald-700" },
  { label: "Transporte", cls: "bg-emerald-700" },
  { label: "Almacenamiento", cls: "bg-emerald-700" },
  { label: "Tratamiento", cls: "bg-emerald-700" },
  { label: "Reciclaje", cls: "bg-emerald-700" },
  { label: "Disposición Final", cls: "bg-emerald-700" },
] as const;

const NAVIGATION_ITEMS = [
  { n: "01", t: "Área de\nComercio\nExterior", id: "beneficio-01" },
  { n: "02", t: "Área de\nCompras /\nVentas", id: "beneficio-02" },
  { n: "03", t: "Área\nLegal\n(Compliance)", id: "beneficio-03" },
  { n: "04", t: "Área de\nCalidad", id: "beneficio-04" },
  { n: "05", t: "Área de\nOperaciones /\nProducción", id: "beneficio-05" },
  { n: "06", t: "Área de\nMedio\nAmbiente", id: "beneficio-06" },
  { n: "07", t: "Área de\nIT / OT", id: "beneficio-07" },
  { n: "08", t: "Área de\nFinanzas /\nTesorería /\nContabilidad", id: "beneficio-08" },
] as const;

// Benefit cards content (moved to constants for better maintainability)
const BENEFIT_CARDS: readonly BenefitCard[] = [
  {
    id: "beneficio-01",
    number: "01",
    category: "Cumplimiento & Comercio Exterior",
    colorClass: "bg-emerald-700",
    content: (
      <>
        <p className="text-lg text-zinc-700 leading-relaxed">
          <span className="font-bold text-orange-600">AUMENTAR</span> la flexibilidad y{" "}
          <span className="font-bold text-orange-600">GARANTIZAR</span> la Certeza Jurídica
          de mis operaciones de Comercio Exterior al trabajar con un Reciclador con Prima IMMEX.
        </p>
        <p className="text-lg text-zinc-700 leading-relaxed mt-4">
          <span className="font-bold text-red-600">DISMINUIR</span> el Riesgo de Multas del SAT
          y Secretaría de Economía (SE) por incumplimiento, errores, omisiones en mis Operaciones
          de Comercio Exterior.
        </p>
      </>
    ),
  },
  {
    id: "beneficio-02",
    number: "02",
    category: "Valor & Recuperación",
    colorClass: "bg-orange-500",
    content: (
      <>
        <p className="text-lg text-zinc-700 leading-relaxed">
          <span className="font-bold text-orange-600">MAXIMIZAR</span> la Recuperación de VALOR de:
        </p>
        <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
          - Mi Desperdicio (Scrap) Electrónico / Materiales Base Cobre (Cu).<br />
          - Mis Equipos Electrónicos de IT Obsoletos.<br />
          - Mis Equipos Electrónicos Industriales Obsoletos.
        </p>
      </>
    ),
  },
  {
    id: "beneficio-03",
    number: "03",
    category: "Certeza Jurídica",
    colorClass: "bg-emerald-700",
    content: (
      <p className="text-lg text-zinc-700 leading-relaxed">
        <span className="font-bold text-orange-600">INCREMENTAR</span> la Seguridad y Certeza Jurídica de todas mis operaciones.
      </p>
    ),
  },
  {
    id: "beneficio-04",
    number: "04",
    category: "Procesos & ISO",
    colorClass: "bg-zinc-700",
    content: (
      <p className="text-lg text-zinc-700 leading-relaxed">
        <span className="font-bold text-orange-600">AUMENTAR</span> el Cumplimiento de mis procesos de calidad al trabajar con un Reciclador Certificado en ISO.
      </p>
    ),
  },
  {
    id: "beneficio-05",
    number: "05",
    category: "Eficiencia Operativa",
    colorClass: "bg-emerald-700",
    content: (
      <p className="text-lg text-zinc-700 leading-relaxed">
        <span className="font-bold text-orange-600">MAXIMIZAR</span> la Disponibilidad de m2 de Planta Productiva para mis Operaciones de Producción, Manufactura y Almacén al{" "}
        <span className="font-bold text-red-600">REDUCIR</span> el Espacio Ocupado por Scrap y Productos Obsoletos.
      </p>
    ),
  },
  {
    id: "beneficio-06",
    number: "06",
    category: "SEMARNAT & R2v3",
    colorClass: "bg-red-500",
    content: (
      <p className="text-lg text-zinc-700 leading-relaxed">
        <span className="font-bold text-red-600">DISMINUIR</span> el Riesgo de Multas por parte de SEMARNAT por incumplimiento, errores, omisiones en mis Obligaciones Ambientales al trabajar con un Reciclador Internacionalmente Certificado en R2v3 con Permisos de Transporte Ambiental, Permiso Ecológico, Emisión de Manifiestos y Destino Final.
      </p>
    ),
  },
  {
    id: "beneficio-07",
    number: "07",
    category: "Seguridad de Datos",
    colorClass: "bg-orange-500",
    content: (
      <p className="text-lg text-zinc-700 leading-relaxed">
        <span className="font-bold text-red-600">DISMINUIR</span> el Riesgo de Confidencialidad de mis Datos Digitales al trabajar con un Reciclador que me{" "}
        <span className="font-bold text-orange-600">GARANTIZA</span> la Destrucción Física de los elementos de almacenamiento digital, tales como Discos Duros, Memorias, etc.
      </p>
    ),
  },
  {
    id: "beneficio-08",
    number: "08",
    category: "Fiscal & Contable",
    colorClass: "bg-emerald-700",
    content: (
      <>
        <p className="text-lg text-zinc-700 leading-relaxed">
          <span className="font-bold text-orange-600">MAXIMIZAR</span> la Disponibilidad de FLUJO al trabajar con un Reciclador Certificado en IVA / IEPS.
        </p>
        <p className="text-lg text-zinc-700 leading-relaxed mt-4">
          <span className="font-bold text-orange-600">GARANTIZAR</span> la adecuada Baja de Activos de mis Registros Contables.
        </p>
      </>
    ),
  },
] as const;

// ============================================================================
// SUB-COMPONENTS (All memoized for performance)
// ============================================================================

/**
 * Navigation sidebar for benefit areas
 * Memoized to prevent unnecessary re-renders
 */
const BenefitNavigation = memo(function BenefitNavigation() {
  return (
    <aside className="lg:sticky lg:top-4 h-fit">
      <div className="bg-white border border-white/20 shadow-sm">
        <div className="px-5 py-4 border-b border-zinc-200 flex items-center gap-3">
          <span className="h-2 w-2 bg-emerald-700" aria-hidden="true" />
          <p className="text-sm font-semibold tracking-wider uppercase text-zinc-800">
            ÁREAS
          </p>
        </div>

        <nav className="p-3 space-y-2" aria-label="Áreas de beneficio">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-start gap-3 p-3 border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
              aria-label={`Ir a ${item.t.replace(/\n/g, ' ')}`}
            >
              <div className="h-9 w-9 bg-emerald-700 text-white font-bold text-xs flex items-center justify-center shadow-sm shrink-0">
                {item.n}
              </div>

              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-zinc-800 leading-snug whitespace-pre-line">
                  {item.t}
                </p>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
});

/**
 * Individual benefit card component
 * Memoized to prevent re-renders when siblings update
 */
interface BenefitCardProps {
  readonly card: BenefitCard;
}

const BenefitCardComponent = memo(function BenefitCardComponent({ card }: BenefitCardProps) {
  return (
    <article
      id={card.id}
      className="relative bg-white border border-white/20 shadow-sm scroll-mt-4"
    >
      {/* Indicator dot */}
      <div className="absolute -left-8 top-6 h-4 w-4 bg-white shadow-sm" aria-hidden="true" />

      {/* Header */}
      <header className="flex items-center gap-3 px-6 py-4 border-b border-zinc-200">
        <span className="text-xs font-bold text-zinc-500">{card.number}</span>
        <div className="h-px flex-1 bg-zinc-200" aria-hidden="true" />
        <span className="text-xs font-semibold bg-zinc-50 text-zinc-800 px-3 py-1 border border-zinc-200">
          {card.category}
        </span>
      </header>

      {/* Color accent bar */}
      <div className={`h-1 w-full ${card.colorClass}`} aria-hidden="true" />

      {/* Content */}
      <div className="p-6 md:p-7">
        {card.content}
      </div>
    </article>
  );
});

/**
 * Certification logos grid
 * White background with no borders or zinc edges
 */
const CertificationLogos = memo(function CertificationLogos() {
  return (
    <div className="mt-12 md:mt-14 max-w-6xl mx-auto bg-white">
      <header className="px-6 py-5 flex items-center gap-3">
        <span className="h-2 w-2 bg-emerald-700" aria-hidden="true" />
        <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-700">
          Certificaciones y Permisos
        </h3>
      </header>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-8 items-center">
          {CERTIFICATION_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-8 bg-white min-h-[200px]"
            >
              <Image
                src={logo.src}
                alt={`Certificación ${logo.name}`}
                width={320}
                height={160}
                className="object-contain h-[140px] w-auto max-w-full"
                loading="lazy"
                sizes="50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

/**
 * Arrow process bar visualization
 * Memoized as steps are static
 */
interface ArrowProcessBarProps {
  readonly steps: readonly ProcessStep[];
}

const ArrowProcessBar = memo(function ArrowProcessBar({ steps }: ArrowProcessBarProps) {
  return (
    <div className="mt-12 bg-white">
      {/* Header */}
      <header className="px-6 py-5 flex items-center gap-3">
        <span className="h-2 w-2 bg-emerald-700" aria-hidden="true" />
        <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-700">
          Ciclo de Vida de los Electrónicos
        </h3>
      </header>

      {/* Process Bar */}
      <div className="p-4">
        {/* Desktop view with arrow design */}
        <div className="hidden md:flex w-full" role="list" aria-label="Proceso de reciclaje">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;

            const clipPath = isLast
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%)";

            return (
              <div
                key={step.label}
                className={`relative ${step.cls} text-white font-semibold text-sm flex-1`}
                style={{
                  clipPath,
                  WebkitClipPath: clipPath,
                }}
                role="listitem"
              >
                <div className="px-4 py-4 flex items-center justify-center text-center leading-tight">
                  <span className="relative -translate-x-1.5">
                    {step.label}
                  </span>
                </div>

                {!isLast && (
                  <div className="absolute top-0 right-0 h-full w-0.5 bg-white/70" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile view with grid */}
        <div className="md:hidden grid grid-cols-2 gap-2" role="list" aria-label="Proceso de reciclaje">
          {steps.map((step) => (
            <div
              key={step.label}
              className={`${step.cls} text-white font-semibold text-xs rounded-lg px-3 py-3 text-center`}
              role="listitem"
            >
              {step.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function CertificacionesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        bg={{ 
          type: "image", 
          src: IMAGES.hero, 
          alt: "Instalaciones certificadas de Trexan Recycling Group" 
        }}
        height="60vh"
        badgeText="Certificaciones"
        title="Garantía de Cumplimiento y Certeza Jurídica"
        subtitle="Operamos bajo los estándares globales más exigentes, proporcionando evidencia documental robusta para auditorías, reportes ESG y cumplimiento total ante autoridades ambientales y fiscales."
      />

      {/* Intro Text */}
      <IntroText>
        Aseguramos la continuidad y legalidad de su operación 
        mediante un ecosistema de cumplimiento que va más allá 
        de lo reglamentario. Al integrar certificaciones 
        internacionales y permisos específicos ante el SAT y 
        SEMARNAT, eliminamos las brechas de riesgo en su cadena de 
        suministro, proporcionando la certeza jurídica necesaria para 
        auditorías de alta complejidad.
      </IntroText>

      {/* Benefits Section */}
      <section className="relative bg-emerald-700 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <header className="text-center">
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Beneficios para Mi Empresa
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/85 max-w-3xl mx-auto">
              al trabajar con Trexan Recycling Group
            </p>
          </header>

          {/* Two-column layout: Navigation + Cards */}
          <div className="mt-12 md:mt-16 max-w-6xl mx-auto grid gap-8 lg:grid-cols-[320px_1fr]">
            {/* Left: Navigation */}
            <BenefitNavigation />

            {/* Right: Benefit Cards */}
            <div className="relative">
              {/* Vertical timeline rail */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-white/35" aria-hidden="true" />

              <div className="space-y-6 pl-6">
                {BENEFIT_CARDS.map((card) => (
                  <BenefitCardComponent key={card.id} card={card} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications & Process - White Background Section */}
      <section className="relative bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <CertificationLogos />
          <ArrowProcessBar steps={PROCESS_STEPS} />
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </>
  );
}