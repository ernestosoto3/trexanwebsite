import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Hero from "../(componentes)/ui/Hero"
import CTA from "../(componentes)/ui/CTA";
import IntroText from "../(componentes)/ui/IntroText";

// Centralized image paths for better maintainability
const IMAGES = {
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
    <div className="flex items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16">
      <div className={`max-w-lg text-center ${align === "right" ? "md:text-right" : "md:text-left"}`}>
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
    <div className="relative w-full h-64 md:h-full md:min-h-[360px] overflow-hidden">
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
      <Hero
        bg={{ type: "image", src: "/images/industrias/DJI_0410-1.JPG", alt: "Sobre Nosotros" }}
        height="60vh"
        badgeText="Sobre Nosotros"
        title="Conectando los Residuos de Hoy con los Recursos del Mañana"
        subtitle="Como parte de Trexan Recycling Group, combinamos ingeniería avanzada y cumplimiento normativo para transformar pasivos ambientales en recursos estratégicos para la industria global."
      />

      {/* INTRODUCTION */}
      <IntroText>
        Con el respaldo de más de cuatro décadas de experiencia en la 
        industria metalúrgica, nos hemos consolidado como el brazo 
        especializado en procesos fríos y gestión de RAEE dentro de 
        Trexan Recycling Group. Nuestra operación en México combina 
        ingeniería de precisión y cumplimiento regulatorio para convertir 
        la complejidad de los residuos electrónicos en una cadena de valor 
        trazable y de alto rendimiento.
      </IntroText>      

{/* TWO-COLUMN CONTENT SECTIONS - EDGE TO EDGE */}
<section className="bg-zinc-50 py-0">
  <div className="w-full">
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

    {/* Row 2: Image Left (desktop), Text Right (desktop) — Text first on mobile */}
    <div className="grid md:grid-cols-2 md:items-stretch">
      {/* Text first on mobile, second on desktop */}
      <div className="order-1 md:order-2">
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

      {/* Image second on mobile, first on desktop */}
      <div className="order-2 md:order-1">
        <ResponsiveImage
          src="/images/industrias/DJI_0410-1.JPG"
          alt="Operaciones industriales de valorización de metales"
        />
      </div>
    </div>
  </div>
</section>




      {/* ENHANCED CIRCULAR ECONOMY SECTION - MATCHING HOME PAGE STYLE */}
      <section className="bg-emerald-700 py-16 md:py-24 text-white">
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

      {/* ENHANCED HOW WE OPERATE SECTION - NEW TREXAN/RECIBASICOS/EWR SECTION */}
      <section className="bg-white py-16 md:py-24">
        <div className="section">
          <div className="max-w-7xl mx-auto">
            
            {/* TREXAN RECYCLING GROUP - INTRODUCTION PARAGRAPH */}
            <div className="mb-16 text-center">
              <div className="mb-8">
                {/* Trexan Logo - HERO SIZE */}
                <div className="w-48 sm:w-56 md:w-72 mx-auto max-w-40">
                  <Image
                    src="/images/partners/trexan.png"
                    alt="Trexan Recycling Group Logo"
                    width={800}
                    height={320}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 mt-8">
                  Trexan Recycling Group
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-4 text-base md:text-lg text-zinc-700 leading-relaxed mb-8">
                <p>
                  Trexan Recycling Group es un conglomerado líder en la gestión integral 
                  de residuos electrónicos en México y Latinoamérica. Con más de 40 años 
                  de experiencia acumulada en la industria del reciclaje y valorización de 
                  metales, operamos bajo los más altos estándares internacionales.
                </p>
                <p>
                  Nuestra misión es transformar los pasivos ambientales en recursos valiosos, 
                  integrando tecnología, cumplimiento normativo y economía circular para 
                  ofrecer soluciones completas desde el acopio hasta la refinación final de 
                  metales preciosos.
                </p>
              </div>

              <a
                href="https://trexan.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 font-semibold hover:bg-white hover:text-black border hover:border-emerald-800 transition-colors"
              >

                Visitar sitio web de Trexan
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>


            {/* Two Column Layout - Recibásicos & EWR */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left Column - Recibásicos */}
              <div>
                {/* Recibásicos Logo - LARGER */}
                <div className="w-48 sm:w-56 md:w-72 mx-auto max-w-40">
                  <Image
                    src="/images/partners/recibasicos.png"
                    alt="Recibásicos Logo"
                    width={600}
                    height={220}
                    className="w-full h-auto"
                  />
                </div>
                <br></br>
                <p className="text-sm uppercase tracking-wider text-[#0d5745] mb-2 text-center">
                  ACOPIO Y PROCESOS FRÍOS
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 text-center">
                  Recibásicos
                </h2>
                
                <div className="space-y-4 text-base md:text-lg text-zinc-700 leading-relaxed mb-6">
                  <p>
                    Recibásicos es la división especializada en el acopio, recolección, 
                    almacenamiento, clasificación y desmantelamiento de Residuos de 
                    Aparatos Eléctricos y Electrónicos (RAEE).
                  </p>
                  <p className="font-medium text-zinc-900">
                    Nuestra especialidad:
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0d5745] font-bold text-lg mt-0.5">•</span>
                    <span className="text-base text-zinc-700">
                      Operamos los procesos fríos de desmantelamiento mecánico, 
                      separación y clasificación de componentes electrónicos sin 
                      procesos térmicos.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0d5745] font-bold text-lg mt-0.5">•</span>
                    <span className="text-base text-zinc-700">
                      Generamos evidencia documental completa respaldada por 
                      certificaciones R2v3, ISO 14001 e ISO 45001 para garantizar 
                      trazabilidad y cumplimiento normativo.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0d5745] font-bold text-lg mt-0.5">•</span>
                    <span className="text-base text-zinc-700">
                      Preparamos concentrados metálicos clasificados y listos para 
                      envío a la siguiente etapa de refinación en EWR.
                    </span>
                  </li>
                </ul>

                <div className="flex justify-center md:justify-start">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 font-semibold hover:bg-white hover:text-black border hover:border-emerald-800 transition-colors"
                  >
                    Conoce más sobre Recibásicos
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

              </div>

              {/* Right Column - EWR */}
              <div>
                {/* EWR Logo - LARGER */}
                <div className="w-48 sm:w-56 md:w-72 mx-auto max-w-40">
                  <Image
                    src="/images/partners/ewr.png"
                    alt="EWR Logo"
                    width={600}
                    height={220}
                    className="w-full h-auto"
                  />
                </div>
                <br></br>
                <p className="text-sm uppercase tracking-wider text-[#0d5745] mb-2 text-center">
                  REFINACIÓN Y VALORIZACIÓN FINAL
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 text-center">
                  EWR - Electronic Waste Recycling
                </h2>
                
                <div className="space-y-4 text-base md:text-lg text-zinc-700 leading-relaxed mb-8">
                  <p>
                    EWR es la división especializada en la refinación de metales 
                    preciosos y la valorización final de materiales electrónicos. 
                    Completamos el ciclo de economía circular mediante procesos 
                    metalúrgicos de última generación.
                  </p>
                  <p>
                    Recibimos los concentrados metálicos preparados por Recibásicos 
                    y los transformamos en metales refinados de alta pureza listos 
                    para su reintroducción en cadenas productivas globales. Operamos 
                    con tecnología de punta y control de calidad riguroso para 
                    maximizar la recuperación de oro, plata, cobre, paladio y otros 
                    metales valiosos.
                  </p>
                </div>

                <div className="flex justify-center md:justify-start">
                  <a
                    href="https://ewr.com.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 font-semibold hover:bg-white hover:text-black border hover:border-emerald-800 transition-colors"
                  >
                    Visitar sitio web de EWR
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Process Steps - Below Two Columns */}
            <div className="mt-20 pt-16">
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
      <CTA/>
    </>
  );
}