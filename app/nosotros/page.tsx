import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import Seccion from "../(componentes)/ui/Seccion";
import ComoOperamos from "../(componentes)/ui/ComoOperamos";

// Centralized image paths for better maintainability
const IMAGES = {
  hero: "/images/industrias/GRUPO TREXAN-74.jpg",
  operations: "/images/industrias/GRUPO TREXAN-68.jpg",
  mountains: "/images/industrias/GRUPO TREXAN-31.jpg",
} as const;

// Reusable content component for better code organization
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
    <div className="flex items-center p-6 md:p-8 lg:p-12">
      <div
        className={`max-w-lg mx-auto md:mx-0 text-center ${
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

export default function NosotrosPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-black text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={IMAGES.hero}
            alt="Operaciones de reciclaje electrónico de Recibásicos"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="section h-[60vh] flex items-center">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 bg-white/25 px-4 py-2 text-sm uppercase tracking-wider">
              <span className="h-2 w-2 bg-[--color-primary]" />
              Trexan Recycling Group
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Liderando la Transformación Circular de los Residuos Electrónicos
            </h1>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-10 md:py-16">
        <div className="section">
          <p className="text-center text-xl md:text-2xl leading-relaxed text-gray-600 max-w-6xl mx-auto">
            Recibásicos es el aliado especializado en el manejo responsable de
            residuos electrónicos en México, integrando experiencia técnica,
            trazabilidad total y certificaciones internacionales para transformar
            pasivos ambientales en valor recuperado.
          </p>
        </div>
      </section>

      {/* TWO-COLUMN CONTENT SECTIONS */}
      <section className="bg-zinc-50 py-7 md:py-8">
        <div className="mx-auto max-w-7xl px-0 md:px-4">
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

          {/* Row 2: Image Left, Text Right */}
          <div className="grid md:grid-cols-2 md:items-stretch">
            <ResponsiveImage
              src={IMAGES.hero}
              alt="Operaciones industriales de valorización de metales"
            />

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
        </div>
      </section>

      {/* ENHANCED CIRCULAR ECONOMY SECTION - MATCHING HOME PAGE STYLE */}
      <section className="bg-[#0d5745] py-16 md:py-24 text-white">
        <div className="section">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
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
            </div>

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
              {/* Feature 1 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 border-t-4 border-white hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Reducción de Recursos Vírgenes
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Disminuimos la necesidad de extracción minera mediante la 
                  recuperación y reintegración de metales valiosos en cadenas 
                  productivas.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 border-t-4 border-white hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Minimización de Emisiones
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Reducimos emisiones de CO₂ y contaminantes asociados al manejo 
                  inadecuado de RAEE mediante procesos controlados y certificados.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 border-t-4 border-white hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Evidencia Documental Robusta
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Generamos documentación completa para auditorías ambientales, 
                  cumplimiento regulatorio y reportes ESG con trazabilidad total.
                </p>
              </div>
            </div>

            {/* Impact Statement */}
            <div className="bg-white/5 border border-white/20 p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                Cada lote gestionado contribuye a una economía circular real en 
                México y Latinoamérica
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-base md:text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span className="text-white/90">
                    Trazabilidad completa desde el acopio hasta la valorización final
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span className="text-white/90">
                    Integración regulatoria con SEMARNAT, SEGAM y SAT
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span className="text-white/90">
                    Operación certificada bajo estándares R2v3 e ISO 14001
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED HOW WE OPERATE SECTION - MATCHING HOME PAGE STYLE */}
      <section className="bg-white py-16 md:py-24">
        <div className="section">
          <div className="max-w-7xl mx-auto">
            
            {/* Two Column Layout - Matching Home Page */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left Column - Como Trabajamos */}
              <div>
                <p className="text-sm uppercase tracking-wider text-[#0d5745] mb-2">
                  CÓMO TRABAJAMOS
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                  Nuestro equipo marca la diferencia
                </h2>
                
                <div className="space-y-4 text-base md:text-lg text-zinc-700 leading-relaxed mb-6">
                  <p>
                    Nuestro equipo combina disciplina industrial con conocimiento 
                    profundo en la gestión integral de residuos electrónicos. 
                    Trabajamos desde la recepción y clasificación hasta la 
                    refinación de metales, integrando procesos claros, trazables 
                    y auditables en cada etapa.
                  </p>
                  <p className="font-medium text-zinc-900">
                    Tratamos cada relación como una alianza estratégica:
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0d5745] font-bold text-lg mt-0.5">•</span>
                    <span className="text-base text-zinc-700">
                      Diseñamos rutas de retiro seguras y alineamos la operación 
                      con tus metas de cumplimiento y sostenibilidad.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0d5745] font-bold text-lg mt-0.5">•</span>
                    <span className="text-base text-zinc-700">
                      Operamos con transparencia, generando evidencia fotográfica 
                      y documental respaldada por certificaciones como R2v3, ISO 
                      14001 e ISO 45001.
                    </span>
                  </li>
                </ul>

                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 border-2 border-[#0d5745] text-[#0d5745] px-6 py-3 font-semibold hover:bg-[#0d5745] hover:text-white transition-all duration-300"
                >
                  Conoce cómo trabajamos
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right Column - Como Ayudamos */}
              <div>
                <p className="text-sm uppercase tracking-wider text-[#0d5745] mb-2">
                  CÓMO AYUDAMOS
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                  Convertimos residuos en valor trazable
                </h2>
                
                <div className="space-y-4 text-base md:text-lg text-zinc-700 leading-relaxed mb-8">
                  <p>
                    Reducimos el impacto ambiental con procesos documentados: 
                    recepción y clasificación detallada, desmantelamiento 
                    controlado y rutas con manifiestos certificados. Todo pensado 
                    para simplificar y blindar tus auditorías.
                  </p>
                  <p>
                    Ya sea que operes una planta industrial, un corporativo o una 
                    red de sucursales, adaptamos la logística para minimizar 
                    interrupciones y maximizar la recuperación de materiales 
                    valiosos. Nuestras cuadrillas especializadas mantienen siempre 
                    altos estándares de seguridad y control documental en cualquier 
                    sitio.
                  </p>
                </div>

                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 border-2 border-[#0d5745] text-[#0d5745] px-6 py-3 font-semibold hover:bg-[#0d5745] hover:text-white transition-all duration-300"
                >
                  Hablar con un asesor
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

            </div>

            {/* Process Steps - Below Two Columns */}
            <div className="mt-20 border-t border-zinc-200 pt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-zinc-900 mb-12">
                Nuestro Proceso de 5 Pasos
              </h3>
              
              <div className="grid md:grid-cols-5 gap-8">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0d5745] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-zinc-900">
                    Acopio y Clasificación
                  </h4>
                  <p className="text-sm text-zinc-600">
                    Recepción con control documental y clasificación por tipo y 
                    potencial de valorización
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0d5745] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-zinc-900">
                    Transporte Certificado
                  </h4>
                  <p className="text-sm text-zinc-600">
                    Traslado con unidades autorizadas bajo normativa SEMARNAT 
                    y monitoreo GPS
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0d5745] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-zinc-900">
                    Procesos Fríos
                  </h4>
                  <p className="text-sm text-zinc-600">
                    Desmantelamiento mecánico y separación de componentes sin 
                    procesos térmicos
                  </p>
                </div>

                {/* Step 4 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0d5745] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-zinc-900">
                    Concentrados Metálicos
                  </h4>
                  <p className="text-sm text-zinc-600">
                    Producción de concentrados listos para refinación con control 
                    de calidad
                  </p>
                </div>

                {/* Step 5 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0d5745] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    5
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-zinc-900">
                    Certificación
                  </h4>
                  <p className="text-sm text-zinc-600">
                    Emisión de manifiestos SEMARNAT y certificados para auditorías 
                    ESG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative">
        <div className="relative h-80 md:h-[360px] overflow-hidden">
          <Image
            src={IMAGES.mountains}
            alt="Paisaje que representa un futuro más limpio"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="max-w-2xl bg-white/95 px-6 py-8 md:px-10 md:py-10 text-center shadow-xl border border-zinc-200">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0d5745]">
                Da el siguiente paso
              </p>
              <h2 className="mt-3 text-xl md:text-2xl font-semibold text-zinc-900">
                ¿Listo para gestionar tus residuos electrónicos con economía
                circular real?
              </h2>
              <p className="mt-4 text-sm md:text-base text-zinc-600">
                Conversemos sobre cómo estructurar un esquema de recolección,
                trazabilidad y valorización alineado a tus procesos, auditorías y
                objetivos de sostenibilidad.
              </p>

              <Link
                href="/contacto"
                className="mt-6 inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-[#0d5745] text-white hover:bg-[#0a4434] transition-colors"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}