// components/home/HowWeWorkHelpSection.tsx
import { memo } from "react";
import Image from "next/image";
import Button from "./Button";

// ============================================================================
// CONSTANTS - Extracted for better maintainability
// ============================================================================
const IMAGES = {
  processing: "/images/industrias/GRUPO TREXAN-36-1.jpg",
  recyclingYard: "/images/industrias/GRUPO TREXAN-73.jpg",
} as const;

const BUTTON_CLASSES =
  "w-full border-emerald-300/70 text-white bg-emerald-700 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white rounded-none";

// ============================================================================
// SECTION HEADER COMPONENT
// ============================================================================
type SectionHeaderProps = {
  label: string;
  title: string;
};

const SectionHeader = memo(({ label, title }: SectionHeaderProps) => (
  <div className="border-t border-emerald-300/70 pt-4">
    <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
      {label}
    </p>
    <h2 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h2>
  </div>
));

SectionHeader.displayName = "SectionHeader";

// ============================================================================
// IMAGE CONTAINER COMPONENT - Optimized with Next.js Image
// ============================================================================
type ImageContainerProps = {
  src: string;
  alt: string;
};

const ImageContainer = memo(({ src, alt }: ImageContainerProps) => (
  <div className="relative overflow-hidden border border-white/15 h-64 md:h-80">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 50vw"
      quality={85}
    />
    <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
  </div>
));

ImageContainer.displayName = "ImageContainer";

// ============================================================================
// COMO TRABAJAMOS COLUMN
// ============================================================================
function ComoTrabajamosColumnComponent() {
  return (
    <article className="flex flex-col gap-6">
      {/* Header */}
      <SectionHeader
        label="Cómo trabajamos"
        title="Nuestro equipo marca la diferencia"
      />

      {/* Content */}
      <p className="text-sm md:text-base text-white/80">
        Nuestro equipo combina disciplina industrial con conocimiento profundo
        en la gestión integral de residuos electrónicos. Trabajamos desde la
        recepción y clasificación hasta la refinación de metales, integrando
        procesos claros, trazables y auditables en cada etapa.
      </p>

      <p className="text-sm md:text-base text-white/80">
        Tratamos cada relación como una alianza estratégica:
      </p>

      <ul className="text-sm md:text-base text-white/80 space-y-2">
        <li>
          • Diseñamos rutas de retiro seguras y alineamos la operación con tus
          metas de cumplimiento y sostenibilidad.
        </li>
        <li>
          • Operamos con transparencia, generando evidencia fotográfica y
          documental respaldada por certificaciones como R2v3, ISO 14001 e ISO
          45001.
        </li>
      </ul>

      {/* Image */}
      <ImageContainer
        src={IMAGES.processing}
        alt="Línea de procesamiento de residuos electrónicos"
      />

      {/* Additional Text */}
      <p className="text-sm md:text-base text-white/80">
        Operamos con transparencia, evidencia fotográfica y certificaciones
        como R2v3, ISO 14001 e ISO 45001, para que cada carga de RAEE quede
        respaldada ante auditorías internas o externas.
      </p>

      {/* Button */}
      <div className="mt-auto pt-2">
        <Button href="/nosotros" variant="primary" className={BUTTON_CLASSES}>
          Conoce cómo trabajamos →
        </Button>
      </div>
    </article>
  );
}

const ComoTrabajamosColumn = memo(ComoTrabajamosColumnComponent);
ComoTrabajamosColumn.displayName = "ComoTrabajamosColumn";

// ============================================================================
// COMO AYUDAMOS COLUMN
// ============================================================================
function ComoAyudamosColumnComponent() {
  return (
    <article className="flex flex-col gap-6">
      {/* Header */}
      <SectionHeader
        label="Cómo ayudamos"
        title="Convertimos residuos en valor trazable"
      />

      {/* Content */}
      <p className="text-sm md:text-base text-white/80">
        Reducimos el impacto ambiental con procesos documentados: recepción y
        clasificación detallada, desmantelamiento controlado y rutas con
        manifiestos certificados. Todo pensado para simplificar y blindar tus
        auditorías.
      </p>

      <p className="text-sm md:text-base text-white/80">
        Ya sea que operes una planta industrial, un corporativo o una red de
        sucursales, adaptamos la logística para minimizar interrupciones y
        maximizar la recuperación de materiales valiosos. Nuestras cuadrillas
        especializadas mantienen siempre altos estándares de seguridad y
        control documental en cualquier sitio.
      </p>

      {/* Image */}
      <ImageContainer
        src={IMAGES.recyclingYard}
        alt="Patio de reciclaje con materiales clasificados"
      />

      {/* Additional Text */}
      <p className="text-sm md:text-base text-white/80">
        Nuestras cuadrillas especializadas pueden intervenir en sitios
        industriales, oficinas y centros educativos, manteniendo siempre
        estándares de seguridad y control documental.
      </p>

      {/* Button */}
      <div className="mt-auto pt-2">
        <Button href="/contacto" variant="primary" className={BUTTON_CLASSES}>
          Hablar con un asesor →
        </Button>
      </div>
    </article>
  );
}

const ComoAyudamosColumn = memo(ComoAyudamosColumnComponent);
ComoAyudamosColumn.displayName = "ComoAyudamosColumn";

// ============================================================================
// MAIN COMPONENT - How We Work & Help Section
// ============================================================================
function HowWeWorkHelpSectionComponent() {
  return (
    <section className="py-8 bg-emerald-700 text-white">
      <div className="section">
        <div className="grid lg:grid-cols-2 gap-12">
          <ComoTrabajamosColumn />
          <ComoAyudamosColumn />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const HowWeWorkHelpSection = memo(HowWeWorkHelpSectionComponent);
HowWeWorkHelpSection.displayName = "HowWeWorkHelpSection";

export default HowWeWorkHelpSection;