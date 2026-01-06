import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import type { Metadata } from "next";
import Hero from "../(componentes)/ui/Hero";
import CTA from "../(componentes)/ui/CTA";
import IntroText from "../(componentes)/ui/IntroText";

// ============================================================================
// METADATA FOR SEO
// ============================================================================
export const metadata: Metadata = {
  title: "Industrias | Trexan Recycling Group",
  description: "Soluciones de gestión de residuos electrónicos a la medida para automotriz, manufactura, gobierno, salud, tecnología y más sectores. Cumplimiento normativo en todo México.",
  keywords: "reciclaje electrónico automotriz, gestión RAEE manufactura, reciclaje gobierno, destrucción datos salud, reciclaje IT empresas",
  openGraph: {
    title: "Soluciones por Industria | Trexan Recycling Group",
    description: "Gestión especializada de residuos electrónicos para cada sector industrial con cumplimiento normativo riguroso.",
    images: ["/images/industrias/GRUPO TREXAN-47-1.jpg"],
  },
};

// ============================================================================
// TYPES
// ============================================================================
interface Sector {
  readonly nombre: string;
  readonly descripcion: string;
  readonly img: string;
  readonly href: string;
}

interface Servicio {
  readonly nombre: string;
  readonly descripcion: string;
  readonly iconColor: string;
  readonly href: string;
}

interface Beneficio {
  readonly titulo: string;
  readonly descripcion: string;
}

// ============================================================================
// CONSTANTS
// ============================================================================
const SECTORES: readonly Sector[] = [
  {
    nombre: "Automotriz",
    descripcion:
      "Gestionamos el reciclaje responsable de componentes electrónicos y baterías para fabricantes, impulsando la movilidad sostenible.",
    img: "/images/industrias/industriaautomotriz.jpg",
    href: "/industrias/automotriz",
  },
  {
    nombre: "Manufactura",
    descripcion:
      "Transformamos los residuos electrónicos de plantas industriales en valor recuperado mediante procesos eficientes y circulares.",
    img: "/images/industrias/milling.jpg",
    href: "/industrias/manufactura",
  },
  {
    nombre: "Gobierno",
    descripcion:
      "Garantizamos el manejo seguro, trazable y normativo de equipos electrónicos retirados de instituciones públicas.",
    img: "/images/industrias/texasgobierno.jpg",
    href: "/industrias/gobierno",
  },
  {
    nombre: "Electrónica",
    descripcion:
      "Maximizamos la recuperación de metales y componentes valiosos de dispositivos y tarjetas electrónicas obsoletas.",
    img: "/images/industrias/GRUPO-TREXAN-14.jpg",
    href: "/industrias/electronica",
  },
  {
    nombre: "Tecnología",
    descripcion:
      "Ofrecemos retiro y reciclaje seguro de hardware con destrucción certificada de datos para empresas de TI y data centers.",
    img: "/images/industrias/industriatech.jpg",
    href: "/industrias/tecnologia",
  },
  {
    nombre: "Salud",
    descripcion:
      "Protegemos datos sensibles y reciclamos equipos médicos electrónicos con cumplimiento sanitario y ambiental.",
    img: "/images/industrias/GRUPO TREXAN-55-1.jpg",
    href: "/industrias/salud",
  },
  {
    nombre: "Retail",
    descripcion:
      "Convertimos devoluciones y equipos obsoletos del retail en recursos valiosos mediante reciclaje especializado.",
    img: "/images/industrias/heroindusretail2.jpg",
    href: "/industrias/retail",
  },
  {
    nombre: "Educación",
    descripcion:
      "Ayudamos a instituciones educativas a gestionar de forma sostenible sus equipos tecnológicos al final de su vida útil.",
    img: "/images/industrias/biblioteca.jpg",
    href: "/industrias/educacion",
  },
] as const;

const SERVICIOS: readonly Servicio[] = [
  {
    nombre: "Instituciones Públicas",
    descripcion:
      "Cumplimiento SEMARNAT y SEGAM, reducción de sanciones y manejo certificado de activos.",
    iconColor: "#3b82f6",
    href: "/contacto",
  },
  {
    nombre: "Empresas Privadas",
    descripcion:
      "Retiro seguro de scrap y equipo obsoleto con confidencialidad y destrucción certificada.",
    iconColor: "#10b981",
    href: "/contacto",
  },
  {
    nombre: "Instituciones Educativas",
    descripcion:
      "Acopio responsable de tecnología académica, donación, reciclaje y programas de educación ambiental.",
    iconColor: "#ef4444",
    href: "/contacto",
  },
  {
    nombre: "Fundaciones y Organizaciones Sociales",
    descripcion:
      "Campañas de recolección comunitaria, participación ciudadana y certificación ambiental para proyectos sociales.",
    iconColor: "#f97316",
    href: "/contacto",
  },
  {
    nombre: "Gobiernos Municipales y Estatales",
    descripcion:
      "Planes locales de manejo de RAEE, asesoría técnica y cumplimiento oficial de lineamientos ambientales.",
    iconColor: "#6366f1",
    href: "/contacto",
  },
  {
    nombre: "Movimientos Sociales y Ambientales",
    descripcion:
      "Iniciativas de reciclaje inclusivo y formalización de recolectores dentro de cadenas de valor.",
    iconColor: "#16a34a",
    href: "/contacto",
  },
] as const;

const BENEFICIOS: readonly Beneficio[] = [
  {
    titulo: "Economía circular",
    descripcion:
      "Reducimos transporte innecesario y maximizamos la recuperación de materiales.",
  },
  {
    titulo: "Evidencias y certificaciones",
    descripcion:
      "R2v3, ISO 14001 e ISO 45001 respaldan cada operación con informes claros.",
  },
  {
    titulo: "Equipo especializado",
    descripcion:
      "Cuadrillas capacitadas y equipadas para intervenir en sitios industriales y oficinas.",
  },
  {
    titulo: "Cobertura nacional",
    descripcion:
      "Red de centros integrados que agilizan la logística y bajan tiempos de respuesta.",
  },
] as const;

// ============================================================================
// SUB-COMPONENTS (All memoized for performance)
// ============================================================================

/**
 * Sector card component
 * Memoized to prevent unnecessary re-renders
 */
interface SectorCardProps {
  readonly sector: Sector;
}

const SectorCard = memo(function SectorCard({ sector }: SectorCardProps) {
  return (
    <article className="bg-white border border-zinc-200 shadow-sm h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={sector.img}
          alt={`Industria ${sector.nombre}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      </div>

      {/* Content area */}
      <div className="p-5 space-y-3 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-zinc-900">
          {sector.nombre}
        </h3>
        <p className="text-base text-zinc-600 leading-relaxed">
          {sector.descripcion}
        </p>

        {/* Button area */}
        <div className="mt-auto pt-4">
          <Link
            href={sector.href}
            className="inline-flex items-center gap-2 border-2 border-emerald-800 text-emerald-800 px-6 py-3 font-semibold hover:bg-emerald-800 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            aria-label={`Ver más sobre ${sector.nombre}`}
          >
            Ver Más
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
});

/**
 * Service card component
 * Memoized to prevent unnecessary re-renders
 */
interface ServicioCardProps {
  readonly servicio: Servicio;
}

const ServicioCard = memo(function ServicioCard({ servicio }: ServicioCardProps) {
  return (
    <article className="bg-white border border-zinc-200 shadow-sm h-full flex flex-col p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
      {/* Title */}
      <div className="flex items-start space-x-4 mb-4">
        <h3 className="text-xl font-semibold mt-1 text-zinc-900">
          {servicio.nombre}
        </h3>
      </div>

      {/* Description */}
      <div className="space-y-3 flex-1 flex flex-col">
        <p className="text-base text-zinc-600 leading-relaxed">
          {servicio.descripcion}
        </p>
      </div>
    </article>
  );
});

/**
 * Beneficio card component
 * Memoized to prevent unnecessary re-renders
 */
interface BeneficioCardProps {
  readonly beneficio: Beneficio;
}

const BeneficioCard = memo(function BeneficioCard({ beneficio }: BeneficioCardProps) {
  return (
    <div className="flex gap-4">
      <div
        className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: "#166534" }}
        aria-hidden="true"
      >
        ✓
      </div>
      <div>
        <h3 className="font-bold mb-2 text-zinc-900">
          {beneficio.titulo}
        </h3>
        <p className="text-zinc-600 leading-relaxed">
          {beneficio.descripcion}
        </p>
      </div>
    </div>
  );
});

/**
 * Section header component
 * Memoized as headers are static
 */
interface SectionHeaderProps {
  readonly badge: string;
  readonly title: string;
  readonly description: string;
}

const SectionHeader = memo(function SectionHeader({
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="text-center space-y-3">
      <p className="text-sm uppercase tracking-wider text-emerald-800">
        {badge}
      </p>
      <h2 className="text-4xl font-bold text-zinc-900">
        {title}
      </h2>
      <p className="text-lg max-w-3xl mx-auto text-zinc-600">
        {description}
      </p>
    </header>
  );
});

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function IndustriasPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        bg={{
          type: "image",
          src: "/images/industrias/GRUPO TREXAN-47-1.jpg",
          alt: "Soluciones de gestión de residuos electrónicos para diversas industrias",
        }}
        height="60vh"
        badgeText="Industrias"
        title="Soluciones de Gestión a la Medida de Cada Sector"
        subtitle="Adaptamos nuestros procesos de valorización y cumplimiento normativo a las necesidades específicas de la industria automotriz, tecnológica, de salud y más, garantizando eficiencia operativa en todo México."
      />

      <IntroText>
        Entendemos que cada sector opera bajo regulaciones y desafíos 
        técnicos distintos. Por ello, hemos diseñado un modelo de 
        gestión versátil que integra protocolos de seguridad, desmantelamiento 
        especializado y cumplimiento normativo riguroso, permitiendo que 
        organizaciones públicas y privadas deleguen la complejidad de sus 
        residuos electrónicos en manos expertas.
      </IntroText>

      {/* Sectores Section */}
      <section className="py-14 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Nuestros Sectores"
            title="Soluciones a la medida de tu industria"
            description="Ofrecemos servicios especializados en gestión de residuos electrónicos para diversos sectores."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORES.map((sector) => (
              <SectorCard key={sector.nombre} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Nuestros Servicios"
            title="Impacto y Alcance Social"
            description="Extendemos nuestros programas de reciclaje a diversas organizaciones que impulsan el desarrollo."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS.map((servicio) => (
              <ServicioCard key={servicio.nombre} servicio={servicio} />
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="relative py-16 bg-zinc-50 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-14 from-emerald-900 via-white to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="section relative">
          <SectionHeader
            badge="Beneficios"
            title="¿Por qué las empresas trabajan con nosotros?"
            description="Cumplimos con normativas, cuidamos la seguridad y mantenemos evidencia clara de cada retiro."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
            {BENEFICIOS.map((beneficio) => (
              <BeneficioCard key={beneficio.titulo} beneficio={beneficio} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}