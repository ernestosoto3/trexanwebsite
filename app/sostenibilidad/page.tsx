import Image from "next/image";
import type { ReactNode } from "react";
import CountUpDispositivos from "../(componentes)/ui/CountUpDispositivos";
import Hero from "../(componentes)/ui/Hero";
import CTA from "../(componentes)/ui/CTA";

// KPIs data
const kpis = [
  "RAEE gestionado 700T al mes.",
  "Tasa de recuperación de materiales (> 90% objetivo).",
  "Emisiones de CO₂ evitadas frente a materiales nuevos.",
  "Volumen de metales recuperados (cobre, aluminio, metales preciosos).",
  "Empleos formales generados en procesos certificados.",
  "Cumplimiento ambiental del 100% con manifiestos y permisos."
];

function ContentBlock({
  title,
  children,
  align = "left",
}: {
  title: string;
  children: ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div className="flex items-center justify-center p-6 md:p-8 lg:p-12">
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
}

// Reusable image container with optimized props
function ResponsiveImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative w-full h-64 md:h-auto md:min-h-[400px] overflow-hidden">
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
}

// Four key sustainability areas
const SUSTAINABILITY_AREAS = [
  {
    icon: (
      <svg className="w-12 h-12 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Soluciones Proactivas",
    description: "Aplicamos nuestra experiencia para crear enfoques nuevos y sustentables ante los desafíos de residuos. Nuestros procesos recuperan y catalizan de manera más eficiente que los métodos tradicionales, tratando materiales sólidos con cero incineración y transformando residuos en recursos valiosos a través de programas innovadores."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Entorno Próspero",
    description: "Estamos comprometidos con la gestión ambiental responsable en todas nuestras operaciones. Al ayudar a nuestros clientes a excluir residuos peligrosos, expandimos opciones de disposición segura, reducimos significativamente los riesgos ambientales y minimizamos las emisiones asociadas con el transporte de residuos."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Lugar de Trabajo Seguro",
    description: "La seguridad es uno de nuestros valores fundamentales. Mantenemos una política de cero incidentes que protege a nuestros empleados, partes interesadas y el medio ambiente en todo lo que hacemos."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Personas Inspiradoras",
    description: "Nuestro equipo impulsa nuestra visión de sostenibilidad hacia adelante. Fomentamos una cultura que fomenta el desarrollo de nuevos enfoques y celebra el impacto ambiental positivo de nuestro trabajo."
  }
] as const;

export default function SostenibilidadPage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* HERO SECTION */}
      <Hero
        bg={{ type: "image", src: "/images/naturaleza/river-rafting.jpg", alt: "Sostenibilidad" }}
        height="60vh"
        badgeText="Sostenibilidad"
        title="Impulsando la Economía Circular con Resultados Medibles"
        subtitle="En Recibásicos, transformamos el ingenio en soluciones sostenibles, gestionando más de 700 toneladas de residuos mensuales para acelerar la transición hacia un futuro con cero emisiones."
      />

      {/*Introduction Statement */}


      <section className="bg-white py-10 md:py-16">
        <div className="section">
          <p className="text-center text-xl md:text-2xl leading-relaxed text-zinc-600 max-w-5xl mx-auto">
            Desde el inicio, nuestro compromiso se fundamenta en el ingenio como valor central, 
            impulsándonos a desarrollar soluciones innovadoras y sostenibles para enfrentar los 
            desafíos de gestión de residuos de nuestros clientes, siempre con una visión responsable 
            hacia el planeta.
          </p>
        </div>
      </section>

      {/* SUSTAINABILITY AT TREXAN SECTION */}
      <section className="bg-zinc-50 py-0">
        <div className="w-full">
          {/* Row 1: Text Left, Image Right */}
          <div className="grid md:grid-cols-2">
            <div className="flex items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16">
              <div className="max-w-lg text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
                  Sostenibilidad en Trexan
                </h2>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-zinc-700">
                  <p>
                    En Recibásicos - Trexan Recycling Group, la sostenibilidad no es solo
                    parte de lo que hacemos, es fundamental para quiénes somos. Como
                    líderes en soluciones de residuos sustentables, estamos en una
                    posición única para avanzar en los objetivos ambientales de nuestros
                    clientes a través de la gestión sostenible de residuos especiales y
                    subproductos industriales.
                  </p>
                </div>
              </div>
            </div>

            <ResponsiveImage
              src="/images/naturaleza/cactus.jpg"
              alt="Operaciones de Trexan"
            />
          </div>

          {/* Row 2: Image Left, Text Right */}
          <div className="grid md:grid-cols-2">
            <ResponsiveImage
              src="/images/naturaleza/river-mexico.jpg"
              alt="Compromiso con la sostenibilidad"
            />

            <div className="flex items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16">
              <div className="max-w-lg text-center md:text-right">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
                  Nuestro Compromiso con la Sostenibilidad
                </h2>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-zinc-700">
                  <p>
                    Estamos acelerando la transición hacia una economía circular mediante
                    el desarrollo de enfoques ingeniosos para la gestión de residuos.
                    Cuando los materiales que normalmente estarían destinados a la
                    disposición final se convierten en recursos valiosos, todos se
                    benefician: nuestros clientes, las comunidades y el medio ambiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR KEY AREAS SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
              Nuestros esfuerzos de sostenibilidad se centran en cuatro áreas clave:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {SUSTAINABILITY_AREAS.map((area) => (
              <div
                key={area.title}
                className="bg-white border border-zinc-200 p-8 space-y-4 hover:shadow-2xl transition-shadow duration-200"
              >
                {/* Icon */}
                <div className="mb-4">{area.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-emerald-700">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-base text-zinc-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-emerald-700">
        <div className="section">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Indicadores de Desempeño Ambiental
              </h2>

              {/* CountUp */}
              <div className="flex flex-col items-center gap-3">
                <CountUpDispositivos />
                <p className="text-white/90 text-base md:text-lg font-medium">
                  Dispositivos reciclados desde el comienzo del 2025
                </p>
              </div>

              <p className="mt-8 text-lg text-white">
                Cumplimos con normativas internacionales (GHG Protocol, ISO 14064, GRI) y mantenemos 
                evidencia clara de cada operación.
              </p>
            </div>

            {/* KPIs */}
            <div className="grid md:grid-cols-2 gap-6">
              {kpis.map((kpi, index) => (
                <div
                  key={index}
                  className="bg-white border border-emerald-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-700 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-zinc-700 leading-relaxed pt-1">
                      {kpi}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SUSTAINABILITY REPORT SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="section">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
              Reporte de Sostenibilidad 2024
            </h2>
            <p className="text-sm md:text-base text-zinc-600 mb-8">
              Nuestro informe anual con métricas ambientales, indicadores de circularidad y documentación de impacto.
            </p>
            
            {/* PDF Preview Container */}
            <div className="border border-zinc-300 overflow-hidden shadow-lg bg-zinc-50">
              {/* Placeholder for PDF */}
              <div className="aspect-video bg-linear-to-br from-emerald-200 to-green-50 flex flex-col items-center justify-center p-6">
                <div className="max-w-md text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg 
                      className="w-10 h-10 text-emerald-700" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Reporte de Sostenibilidad 2024
                  </h3>
                  
                  <p className="text-sm text-zinc-600">
                    Próximamente disponible. Solicita una copia anticipada del reporte.
                  </p>
                  
                  <div className="pt-2">
                    <a
                      href="/contacto"
                      className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
                    >
                      Solicitar Reporte
                    </a>
                  </div>
                </div>
              </div>

              {/* PDF Controls Bar */}
              <div className="bg-zinc-100 border-t border-zinc-300 px-4 py-2 flex items-center justify-between text-xs text-zinc-600">
                <span>1/30</span>
                <div className="flex items-center gap-2">
                  <button className="hover:text-zinc-900 transition-colors p-1" aria-label="Vista de cuadrícula">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button className="hover:text-zinc-900 transition-colors p-1" aria-label="Acercar">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </button>
                  <button className="hover:text-zinc-900 transition-colors p-1" aria-label="Alejar">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                    </svg>
                  </button>
                  <button className="hover:text-zinc-900 transition-colors p-1" aria-label="Pantalla completa">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <CTA/>
    </main>
  );
}