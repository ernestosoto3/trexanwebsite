import Image from "next/image";
import Link from "next/link";
import CTA from "../(componentes)/ui/CTA";
import IntroText from "../(componentes)/ui/IntroText";
import Hero from "../(componentes)/ui/Hero"

const IMAGES = {
  mountains: "/images/industrias/GRUPO TREXAN-31.jpg",
} as const;

const PARTNER_LOGOS = [
  { name: "Recibásicos", src: "/images/partners/recibasicos.png", sub: "Procesos fríos" },
  { name: "Trexan", src: "/images/partners/trexan.png", sub: "Integración" },
  { name: "EWR", src: "/images/partners/ewr.png", sub: "Refinación" },
];

const certificationLogos = [
  { name: "SEMARNAT", src: "/images/certificaciones/semarnat.png" },
  { name: "ISO 14001", src: "/images/certificaciones/iso-14001.jpeg" },
  { name: "ISO 45001", src: "/images/certificaciones/ISO-45001.png.webp" },
  { name: "ISO 9001:2015", src: "/images/certificaciones/iso-9001.png"},
  { name: "SE IMMEX", src: "/images/certificaciones/se-immex.png" },
  
  { name: "R2v3 Certified", src: "/images/certificaciones/r2v3.png" },
];

const sectors = [
  "Empresas",
  "Instituciones Educativas",
  "Instituciones Públicas",
  "Fundaciones",
];

const offerings = [
  "Manifiesto Ambiental",
  "Certificado de Destrucción",
  "Constancia de Economía Circular",
  "Plan de Donación",
];

const serviciosRecibasicos = [
  "Recolección y acopio de RAEE",
  "Desmantelamiento y trituración",
  "Producción de concentrados",
  "Evidencia documental",
];

const serviciosEWR = [
  "Refinación de metales",
  "Recuperación de cobre y PM",
  "Análisis de laboratorio",
  "Contratos de fundición",
];

const processSteps: Array<{ label: string; cls: string }> = [
  { label: "Manufactura AEE", cls: "bg-emerald-700" },
  { label: "Uso AEE", cls: "bg-emerald-700" },
  { label: "Acopio RAEE", cls: "bg-emerald-700" },
  { label: "Transporte", cls: "bg-emerald-700" },
  { label: "Almacenamiento", cls: "bg-emerald-700" },
  { label: "Tratamiento", cls: "bg-emerald-700" },
  { label: "Reciclaje", cls: "bg-emerald-700" },
  { label: "Disposición Final", cls: "bg-emerald-700" },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-sm md:text-base text-zinc-700">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-zinc-400 shrink-0" />
          <span className="leading-relaxed">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function ArrowProcessBar({ steps }: { steps: Array<{ label: string; cls: string }> }) {
  return (
    <div className="mt-8 bg-white p-4">
      <div className="hidden md:flex w-full">
        {steps.map((s, idx) => {
          const isLast = idx === steps.length - 1;

          const clipPath = isLast
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%)";

          return (
            <div
              key={s.label}
              className={`relative ${s.cls} text-white font-semibold text-sm flex-1`}
              style={{
                clipPath,
                WebkitClipPath: clipPath,
              }}
            >
              <div className="px-4 py-4 flex items-center justify-center text-center leading-tight">
                <span className="relative -translate-x-1.5" >
                  {s.label}
                </span>
              </div>

              {!isLast && (
                <div className="absolute top-0 right-0 h-full w-0.5 bg-white/70" />
              )}
            </div>
          );
        })}
      </div>

      <div className="md:hidden grid grid-cols-2 gap-2">
        {steps.map((s) => (
          <div
            key={s.label}
            className={`${s.cls} text-white font-semibold text-xs rounded-lg px-3 py-3 text-center`}
          >
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CertificacionesPage() {
  return (
    <>
      <Hero
        bg={{ type: "image", src: "/images/industrias/GRUPO TREXAN-74.jpg", alt: "Certificaciones" }}
        height="60vh"
        badgeText="Certificaciones"
        title="Garantía de Cumplimiento y Certeza Jurídica"
        subtitle="Operamos bajo los estándares globales más exigentes, proporcionando evidencia documental robusta para auditorías, reportes ESG y cumplimiento total ante autoridades ambientales y fiscales."
      />


      <IntroText>
        Aseguramos la continuidad y legalidad de su operación 
        mediante un ecosistema de cumplimiento que va más allá 
        de lo reglamentario. Al integrar certificaciones 
        internacionales y permisos específicos ante el SAT y 
        SEMARNAT, eliminamos las brechas de riesgo en su cadena de 
        suministro, proporcionando la certeza jurídica necesaria para 
        auditorías de alta complejidad.
      </IntroText>

      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center">
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-zinc-900">
              Beneficios para Mi Empresa
            </h2>
            <p className="mt-4 text-base md:text-lg text-zinc-600 max-w-3xl mx-auto">
              al trabajar con Trexan Recycling Group
            </p>
          </div>

          {/* VERTICAL SECTIONS WITH ARROWS */}
          <div className="mt-16 max-w-5xl mx-auto">
            {/* CENTER - VERTICAL SECTIONS */}
            <div className="space-y-0">

              {/* Section 1: Comercio Exterior */}
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 rounded-full bg-emerald-700 flex items-center justify-center shadow-lg">
                  <p className="text-white font-bold text-lg text-center leading-tight px-4">Área de<br/>Comercio<br/>Exterior</p>
                </div>
                <div className="mt-8 bg-white rounded-xl p-8 w-full text-center">
                  <p className="text-lg text-zinc-700 leading-relaxed">
                    <span className="font-bold text-orange-600">AUMENTAR</span> la flexibilidad y <span className="font-bold text-orange-600">GARANTIZAR</span> la Certeza Jurídica de mis operaciones de Comercio Exterior al trabajar con un Reciclador con Prima IMMEX.
                  </p>
                  <p className="text-lg text-zinc-700 leading-relaxed mt-4">
                    <span className="font-bold text-red-600">DISMINUIR</span> el Riesgo de Multas del SAT y Secretaría de Economía (SE) por incumplimiento, errores, omisiones en mis Operaciones de Comercio Exterior.
                  </p>
                </div>
                <div className="my-8">
                  <svg className="w-10 h-14 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)"/>
                  </svg>
                </div>
              </div>

              {/* Section 2: Compras/Ventas */}
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 rounded-full bg-emerald-700 flex items-center justify-center shadow-lg">
                  <p className="text-white font-bold text-lg text-center leading-tight px-4">Área de<br/>Compras /<br/>Ventas</p>
                </div>
                <div className="mt-8 bg-white rounded-xl p-8 w-full text-center">
                  <p className="text-lg text-zinc-700 leading-relaxed">
                    <span className="font-bold text-orange-600">MAXIMIZAR</span> la Recuperación de VALOR de:
                  </p>
                  <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
                    - mi Desperdicio (Scrap) Electrónico / Materiales Base Cobre (Cu).<br/>
                    - mis Equipos Electrónicos de IT Obsoletos.<br/>
                    - mis Equipos Electrónicos Industriales Obsoletos.
                  </p>
                </div>
                <div className="my-8">
                  <svg className="w-10 h-14 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)"/>
                  </svg>
                </div>
              </div>

              {/* Section 3: Legal/Compliance */}
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 rounded-full bg-emerald-700 flex items-center justify-center shadow-lg">
                  <p className="text-white font-bold text-lg text-center leading-tight px-4">Área<br/>Legal<br/>(Compliance)</p>
                </div>
                <div className="mt-8 bg-white rounded-xl p-8 w-full text-center">
                  <p className="text-lg text-zinc-700 leading-relaxed">
                    <span className="font-bold text-orange-600">INCREMENTAR</span> la Seguridad y Certeza Jurídica de todas mis operaciones.
                  </p>
                </div>
                <div className="my-8">
                  <svg className="w-10 h-14 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)"/>
                  </svg>
                </div>
              </div>

              {/* Section 4: Calidad */}
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 rounded-full bg-emerald-700 flex items-center justify-center shadow-lg">
                  <p className="text-white font-bold text-lg text-center leading-tight px-4">Área de<br/>Calidad</p>
                </div>
                <div className="mt-8 bg-white rounded-xl p-8 w-full text-center">
                  <p className="text-lg text-zinc-700 leading-relaxed">
                    <span className="font-bold text-orange-600">AUMENTAR</span> el Cumplimiento de mis procesos de calidad al trabajar con un Reciclador Certificado en ISO.
                  </p>
                </div>
                <div className="my-8">
                  <svg className="w-10 h-14 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)"/>
                  </svg>
                </div>
              </div>

              {/* Section 5: Operaciones/Producción */}
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 rounded-full bg-emerald-700 flex items-center justify-center shadow-lg">
                  <p className="text-white font-bold text-lg text-center leading-tight px-4">Área de<br/>Operaciones /<br/>Producción</p>
                </div>
                <div className="mt-8 bg-white rounded-xl p-8 w-full text-center">
                  <p className="text-lg text-zinc-700 leading-relaxed">
                    <span className="font-bold text-orange-600">MAXIMIZAR</span> la Disponibilidad de m2 de Planta Productiva para mis Operaciones de Producción, Manufactura y Almacén al <span className="font-bold text-red-600">REDUCIR</span> el Espacio Ocupado por Scrap y Productos Obsoletos.
                  </p>
                </div>
                <div className="my-8">
                  <svg className="w-10 h-14 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)"/>
                  </svg>
                </div>
              </div>

              {/* Section 6: Medio Ambiente */}
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 rounded-full bg-emerald-700 flex items-center justify-center shadow-lg">
                  <p className="text-white font-bold text-lg text-center leading-tight px-4">Área de<br/>Medio<br/>Ambiente</p>
                </div>
                <div className="mt-8 bg-white rounded-xl p-8 w-full text-center">
                  <p className="text-lg text-zinc-700 leading-relaxed">
                    <span className="font-bold text-red-600">DISMINUIR</span> el Riesgo de Multas por parte de SEMARNAT por incumplimiento, errores, omisiones en mis Obligaciones Ambientales al trabajar con un Reciclador Internacionalmente Certificado en R2v3 con Permisos de Transporte Ambiental, Permiso Ecológico, Emisión de Manifiestos y Destino Final.
                  </p>
                </div>
                <div className="my-8">
                  <svg className="w-10 h-14 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)"/>
                  </svg>
                </div>
              </div>

              {/* Section 7: IT/OT */}
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 rounded-full bg-emerald-700 flex items-center justify-center shadow-lg">
                  <p className="text-white font-bold text-lg text-center leading-tight px-4">Área de<br/>IT / OT</p>
                </div>
                <div className="mt-8 bg-white rounded-xl p-8 w-full text-center">
                  <p className="text-lg text-zinc-700 leading-relaxed">
                    <span className="font-bold text-red-600">DISMINUIR</span> el Riesgo de Confidencialidad de mis Datos Digitales al trabajar con un Reciclador que me <span className="font-bold text-orange-600">GARANTIZA</span> la Destrucción Física de los elementos de almacenamiento digital, tales como Discos Duros, Memorias, etc.
                  </p>
                </div>
                <div className="my-8">
                  <svg className="w-10 h-14 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)"/>
                  </svg>
                </div>
              </div>

              {/* Section 8: Finanzas */}
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 rounded-full bg-emerald-700 flex items-center justify-center shadow-lg">
                  <p className="text-white font-bold text-lg text-center leading-tight px-4">Área de<br/>Finanzas /<br/>Tesorería /<br/>Contabilidad</p>
                </div>
                <div className="mt-8 bg-white rounded-xl p-8 w-full text-center">
                  <p className="text-lg text-zinc-700 leading-relaxed">
                    <span className="font-bold text-orange-600">MAXIMIZAR</span> la Disponibilidad de FLUJO al trabajar con un Reciclador Certificado en IVA / IEPS.
                  </p>
                  <p className="text-lg text-zinc-700 leading-relaxed mt-4">
                    <span className="font-bold text-orange-600">GARANTIZAR</span> la adecuada Baja de Activos de mis Registros Contables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-white p-6">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-700 mb-6">
              Certificaciones y Permisos
            </h3>

            <div className="flex flex-wrap gap-0 items-center justify-center">
              {certificationLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center p-4 rounded-xl bg-zinc-50"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={80}
                    className="object-contain max-h-20"
                  />
                </div>
              ))}
            </div>
          </div>

          <ArrowProcessBar steps={processSteps} />
        </div>
      </section>

      {/* CTA */}
      <CTA/>
    </>
  );
}