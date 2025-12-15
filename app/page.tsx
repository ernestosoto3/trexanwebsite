import Button from "./(componentes)/ui/Button";
import BloquesAprendeMas from "./(componentes)/ui/BloqueAprendeMas";
import ComoTrabajamosComoAyudamos from "./(componentes)/ui/ComoTrabajamosComoAyudamos";
import Image from "next/image";

const mountainsImage = "/images/industrias/GRUPO TREXAN-31.jpg";

export const revalidate = 60;

// Extracted constants for maintainability
const INDUSTRIES = [
  "Automotriz",
  "Manufactura",
  "Gobierno",
  "Electrónica",
  "Tecnología",
  "Salud",
  "Retail",
  "Educación",
] as const;

const FEATURES = [
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

const NEWS_CARDS = [
  {
    title: "Toma aérea de instalaciones",
    description: "Centros integrados que permiten controlar cada etapa del reciclaje.",
    image: "/images/home/aerial-facility.png",
    alt: "Vista aérea de las instalaciones de reciclaje Trexan con áreas de procesamiento organizadas",
  },
  {
    title: "Línea de procesamiento",
    description: "Trituración y separación con estándares internacionales.",
    image: "/images/home/processing-line.png",
    alt: "Línea de procesamiento industrial con maquinaria de trituración y separación de materiales",
  },
  {
    title: "Patio y logística",
    description: "Organización en patios para resguardar y clasificar materiales.",
    image: "/images/home/recycling-yard.png",
    alt: "Patio de logística con materiales clasificados y organizados para reciclaje",
  },
] as const;

// Reusable component for consistent styling
const SectionHeader = ({ 
  label, 
  title, 
  description 
}: { 
  label?: string; 
  title: string; 
  description?: string;
}) => (
  <div className="text-center space-y-3">
    {label && (
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700">
        {label}
      </p>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">{title}</h2>
    {description && (
      <p className="text-base md:text-lg max-w-3xl mx-auto text-zinc-600">
        {description}
      </p>
    )}
  </div>
);

// Shared button classes as constants
const PRIMARY_BUTTON_CLASSES = "border-green-800 text-white bg-green-800 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white rounded-none";
const SECONDARY_BUTTON_CLASSES = "border-emerald-300/70 text-white bg-green-800 backdrop-blur-sm hover:bg-white hover:text-black hover:border-black rounded-none";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* HERO WITH VIDEO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src="/videos/solution-video-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/60" />
        </div>

        <div className="section relative flex min-h-[70vh] items-center py-16 md:py-20">
          <div className="max-w-4xl text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-white/25 px-4 py-2 text-sm uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-[--color-primary]" />
              Trexan Recycling Group
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Soluciones Sustentables para Residuos Electrónicos
            </h1>

            <div className="flex flex-wrap gap-4">
              <Button
                href="/contacto"
                variant="primary"
                className={PRIMARY_BUTTON_CLASSES}
              >
                Solicitar Cotización
              </Button>
              <Button
                href="/nosotros"
                variant="primary"
                className={PRIMARY_BUTTON_CLASSES}
              >
                Conoce Nuestros Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TEXTO INTRODUCTORIO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section">
          <div className="text-center max-w-5xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Recibásicos es líder en acopio y valorización de residuos electrónicos,
              transformando pasivos ambientales en una economía circular segura.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600">
              Ofrecemos Trazabilidad total y certificaciones globales (R2v3, ISO) que permiten a su empresa
              proteger su cadena de suministro, asegurar el cumplimiento normativo y avanzar eficazmente hacia
              sus objetivos de sostenibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES BAND (BACKGROUND IMAGE) */}
      <section className="relative bg-white">
        <div
          className="h-[22rem] md:h-[28rem] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/industrias/GRUPO TREXAN-2.jpg')" }}
          role="img"
          aria-label="Instalaciones de procesamiento de Trexan"
        />
      </section>

      {/* BloquesAprendeMas (CONTROLLED OVERLAP) */}
      <section className="relative md:-mt-64">
        <div className="section">
          <BloquesAprendeMas />
        </div>
      </section>

      {/* VIDEO SECTION WITH TEXT OVERLAY */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[26rem] md:min-h-[32rem] flex items-center justify-center">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="/videos/enviormentvid.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* Text Content */}
          <div className="section relative z-10">
            <div className="bg-green-800 p-8 md:p-12 w-full border border-white/10">
              <div className="text-center text-white space-y-6 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Comprometidos con la Reducción del Impacto Ambiental
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-white/90">
                  Nuestro compromiso ambiental se materializa al mantener los residuos electrónicos fuera de
                  vertederos y mediante el diseño meticuloso de todos nuestros procesos. Desde la recolección
                  hasta la valorización final, aplicamos certificaciones internacionales R2v3 e ISO 14001 para
                  anticipar impactos, minimizar nuestra huella ecológica y garantizar una economía circular real
                  en México.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS / CÓMO AYUDAMOS */}
      <ComoTrabajamosComoAyudamos />

      {/* SECTORES */}
      <section className="py-8 bg-green-800 text-white">
        <div className="section">
          <div className="border-t border-emerald-300/70 pt-6">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-emerald-300">
              Industrias
            </p>

            <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Confiados en muchos sectores
              </h2>
              <Button
                href="/industrias"
                variant="primary"
                className={SECONDARY_BUTTON_CLASSES}
              >
                Industrias →
              </Button>
            </div>
          </div>

          <div className="mt-8 border-y border-white/10 divide-y divide-white/10">
            {INDUSTRIES.map((item) => (
              <button
                key={item}
                className="flex w-full items-center justify-between py-4 text-left group"
                aria-label={`Ver más sobre la industria ${item}`}
              >
                <span className="text-base md:text-lg opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition">
                  {item}
                </span>
                <span className="text-sm opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition" aria-hidden="true">
                  ↗
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section">
          <div className="mb-10">
            <SectionHeader
              title="¿Por qué las empresas trabajan con nosotros?"
              description="Cumplimos con normativas, cuidamos la seguridad y mantenemos evidencia clara de cada retiro."
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((item) => (
              <article
                key={item.title}
                className="relative bg-zinc-50 border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-orange-600" />
                <h3 className="mt-3 text-lg font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-3 text-sm md:text-base text-zinc-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS STYLE CARDS */}
      <section className="py-16 md:py-20 bg-[#f7f7f5]">
        <div className="section space-y-10">
          <SectionHeader
            title="Noticias que Respaldan Nuestro Servicio"
            description="Tres momentos de nuestra operación que muestran logística, seguridad y control en sitio."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {NEWS_CARDS.map((card) => (
              <article
                key={card.title}
                className="bg-white border border-zinc-200 shadow-sm h-full flex flex-col transition-shadow duration-200 hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold text-zinc-900">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="mt-auto pt-4">
                    <Button
                      href="/operaciones"
                      variant="outline"
                      className="text-black border-[--color-primary] hover:text-white"
                    >
                      Ver más
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative">
        <div className="relative min-h-[26rem] md:min-h-[32rem] overflow-hidden">
          <Image
            src={mountainsImage}
            alt="Paisaje que representa un futuro más limpio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="section">
              <div className="max-w-3xl mx-auto bg-white px-6 py-10 md:px-10 md:py-12 text-center shadow-xl">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700">
                  Da el siguiente paso
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-zinc-900">
                  ¿Listos para trabajar con trazabilidad y seguridad?
                </h2>
                <p className="mt-4 text-sm md:text-base text-zinc-600 leading-relaxed">
                  Conversemos sobre cómo estructurar un esquema de recolección, trazabilidad y valorización
                  alineado a tus procesos, auditorías y objetivos de sostenibilidad.
                </p>
                <a
                  href="/contacto"
                  className="mt-8 inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
                >
                  Solicitar Cotización
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}