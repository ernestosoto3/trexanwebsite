import Link from "next/link";
import Image from "next/image";
import Hero from "../(componentes)/ui/Hero";

const mountainsImage = "/images/industrias/GRUPO TREXAN-31.jpg";

interface IconProps {
  name: string; // or a more specific type like 'facebook' | 'twitter' if known
  color: string;
}

const sectores = [
  {
    nombre: "Automotriz",
    descripcion:
      "Gestionamos el reciclaje responsable de componentes electrónicos y baterías para fabricantes, impulsando la movilidad sostenible.",
    img: "/images/industrias/publico.jpg",
    href: "/industrias/automotriz",
  },
  {
    nombre: "Manufactura",
    descripcion:
      "Transformamos los residuos electrónicos de plantas industriales en valor recuperado mediante procesos eficientes y circulares.",
    img: "/images/industrias/privadas.jpg",
    href: "/industrias/manufactura",
  },
  {
    nombre: "Gobierno",
    descripcion:
      "Garantizamos el manejo seguro, trazable y normativo de equipos electrónicos retirados de instituciones públicas.",
    img: "/images/industrias/educativas.jpg",
    href: "/industrias/gobierno",
  },
  {
    nombre: "Electrónica",
    descripcion:
      "Maximizamos la recuperación de metales y componentes valiosos de dispositivos y tarjetas electrónicas obsoletas.",
    img: "/images/industrias/sociales.jpg",
    href: "/industrias/electronica",
  },
  {
    nombre: "Tecnología",
    descripcion:
      "Ofrecemos retiro y reciclaje seguro de hardware con destrucción certificada de datos para empresas de TI y data centers.",
    img: "/images/industrias/gobierno.jpg",
    href: "/industrias/tecnologia",
  },
  {
    nombre: "Salud",
    descripcion:
      "Protegemos datos sensibles y reciclamos equipos médicos electrónicos con cumplimiento sanitario y ambiental.",
    img: "/images/industrias/ambientales.jpg",
    href: "/industrias/salud",
  },
  {
    nombre: "Retail",
    descripcion:
      "Convertimos devoluciones y equipos obsoletos del retail en recursos valiosos mediante reciclaje especializado.",
    img: "/images/industrias/ambientales.jpg",
    href: "/industrias/retail",
  },
  {
    nombre: "Educación",
    descripcion:
      "Ayudamos a instituciones educativas a gestionar de forma sostenible sus equipos tecnológicos al final de su vida útil.",
    img: "/images/industrias/ambientales.jpg",
    href: "/industrias/educacion",
  },
];


const servicios = [
  {
    nombre: "Instituciones Públicas",
    descripcion:
      "Cumplimiento SEMARNAT y SEGAM, reducción de sanciones y manejo certificado de activos.",
    iconColor: "#3b82f6", // Blue for public
    href: "/contacto",
  },
  {
    nombre: "Empresas Privadas",
    descripcion:
      "Retiro seguro de scrap y equipo obsoleto con confidencialidad y destrucción certificada.",
    iconColor: "#10b981", // Emerald for private
    href: "/contacto",
  },
  {
    nombre: "Instituciones Educativas",
    descripcion:
      "Acopio responsable de tecnología académica, donación, reciclaje y programas de educación ambiental.",
    iconColor: "#ef4444", // Red for education
    href: "/contacto",
  },
  {
    nombre: "Fundaciones y Organizaciones Sociales",
    descripcion:
      "Campañas de recolección comunitaria, participación ciudadana y certificación ambiental para proyectos sociales.",
    iconColor: "#f97316", // Orange for social
    href: "/contacto",
  },
  {
    nombre: "Gobiernos Municipales y Estatales",
    descripcion:
      "Planes locales de manejo de RAEE, asesoría técnica y cumplimiento oficial de lineamientos ambientales.",
    iconColor: "#6366f1", // Indigo for government
    href: "/contacto",
  },
  {
    nombre: "Movimientos Sociales y Ambientales",
    descripcion:
      "Iniciativas de reciclaje inclusivo y formalización de recolectores dentro de cadenas de valor.",
    iconColor: "#16a34a", // Green for movements
    href: "/contacto",
  },
];


export default function IndustriasPage() {
  return (
    <>
      {/* HERO NOSOTROS */}
      <Hero
        bg={{ type: "image", src: "/images/industrias/GRUPO TREXAN-47-1.jpg", alt: "Industrias" }}
        height="60vh"
        badgeText="Industrias"
        title="Soluciones de Gestión a la Medida de Cada Sector"
        subtitle="Adaptamos nuestros procesos de valorización y cumplimiento normativo a las necesidades específicas de la industria automotriz, tecnológica, de salud y más, garantizando eficiencia operativa en todo México."
      />

      {/* 1. SECTORES (Industry Cards with Image Top) */}
      <section className="py-14 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header Block for SECTORES */}
          <div className="text-center space-y-3">
            <p
              className="text-sm uppercase tracking-wider"
              style={{ color: "#166534" }}
            >
              Nuestros Sectores
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ color: "#0a0a0a" }}
            >
              Soluciones a la medida de tu industria
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#4b5563" }}
            >
              Ofrecemos servicios especializados en gestión de residuos electrónicos para diversos sectores.
            </p>
          </div>

          {/* Grid for SECTORES */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectores.map((s) => (
              <article
                key={s.nombre}
                className="bg-white border border-[#e5e7eb] shadow-sm h-full flex flex-col"
              >
                {/* Image container: relative height-48 overflow-hidden */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.nombre}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                {/* Content area: p-5 space-y-3 flex-1 flex flex-col */}
                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "#0a0a0a" }}
                  >
                    {s.nombre}
                  </h3>
                  <p
                    className="text-base"
                    style={{ color: "#4b5563" }}
                  >
                    {s.descripcion}
                  </p>
                  {/* Button area: mt-auto pt-4 */}
                  <div className="mt-auto pt-4">
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 border-2 border-[#0d5745] text-[#0d5745] px-6 py-3 font-semibold hover:bg-[#0d5745] hover:text-white transition-all duration-300"
                    >
                      Ver Más
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
            ))}
          </div>
        </div>
      </section>

      {/* 2. NUESTROS SERVICIOS (Services Cards with Icon Top-Left) */}
      <section className="py-14 bg-white"> {/* Using a different background color for separation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header Block for SERVICIOS */}
          <div className="text-center space-y-3">
            <p
              className="text-sm uppercase tracking-wider"
              style={{ color: "#166534" }}
            >
              Nuestros Servicios
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ color: "#0a0a0a" }}
            >
              Impacto y Alcance Social
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#4b5563" }}
            >
              Extendemos nuestros programas de reciclaje a diversas organizaciones que impulsan el desarrollo.
            </p>
          </div>

          {/* Grid for SERVICIOS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Using 3 columns for 6 items */}
            {servicios.map((s) => (
              <article
                key={s.nombre}
                className="bg-zinc-50 border border-[#e5e7eb] shadow-sm h-full flex flex-col p-6 rounded-lg" // Modified card style for icon placement
              >
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-4">
                    <h3
                        className="text-xl font-semibold mt-1"
                        style={{ color: "#0a0a0a" }}
                    >
                        {s.nombre}
                    </h3>
                </div>
                
                {/* Description */}
                <div className="space-y-3 flex-1 flex flex-col">
                  <p
                    className="text-base"
                    style={{ color: "#4b5563" }}
                  >
                    {s.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* BENEFICIOS */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-14 from-[#1a3d2b] via-white to-transparent pointer-events-none"
          aria-hidden
        />
        <div className="section relative">
          <div className="text-center mb-10 space-y-3">
            <p
              className="text-sm uppercase tracking-wider"
              style={{ color: "#166534" }}
            >
              Beneficios
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ color: "#0a0a0a" }}
            >
              ¿Por qué las empresas trabajan con nosotros?
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#4b5563" }}
            >
              Cumplimos con normativas, cuidamos la seguridad y mantenemos
              evidencia clara de cada retiro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Economía circular",
              "Evidencias y certificaciones",
              "Equipo especializado",
              "Cobertura nacional",
            ].map((item, idx) => (
              <div key={item} className="flex gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: "#166534" }}
                >
                  ✓
                </div>
                <div>
                  <h3
                    className="font-bold mb-2"
                    style={{ color: "#0a0a0a" }}
                  >
                    {item}
                  </h3>
                  <p style={{ color: "#4b5563" }}>
                    {idx === 0 &&
                      "Reducimos transporte innecesario y maximizamos la recuperación de materiales."}
                    {idx === 1 &&
                      "R2v3, ISO 14001 e ISO 45001 respaldan cada operación con informes claros."}
                    {idx === 2 &&
                      "Cuadrillas capacitadas y equipadas para intervenir en sitios industriales y oficinas."}
                    {idx === 3 &&
                      "Red de centros integrados que agilizan la logística y bajan tiempos de respuesta."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA FINAL */}
      <section className="relative">
        <div className="relative h-80 md:h-[360px] overflow-hidden">
          <Image
            src={mountainsImage}
            alt="Paisaje que representa un futuro más limpio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="max-w-2xl bg-white/95 px-6 py-8 md:px-10 md:py-10 text-center shadow-xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700">
                Da el siguiente paso
              </p>
              <h2 className="mt-3 text-xl md:text-2xl font-semibold text-zinc-900">
                ¿Listos para trabajar con trazabilidad y seguridad?
              </h2>
              <p className="mt-4 text-sm md:text-base text-zinc-600">
                Conversemos sobre cómo estructurar un esquema de recolección, 
                trazabilidad y valorización alineado a tus procesos, auditorías y 
                objetivos de sostenibilidad.
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
      </section>
    </>
  );
}