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
  { name: "ISO 14001", src: "/images/certificaciones/iso-14001.jpeg" },
  { name: "ISO 45001", src: "/images/certificaciones/ISO-45001.png.webp" },
  { name: "ISO 9001:2015", src: "/images/certificaciones/iso-9001.png"},
  { name: "SEMARNAT", src: "/images/certificaciones/semarnat.png" },
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

<section className="relative bg-emerald-700 py-12 md:py-16">
  <div className="mx-auto max-w-7xl px-4">
    {/* Header */}
    <div className="text-center">
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
        Beneficios para Mi Empresa
      </h2>
      <p className="mt-4 text-base md:text-lg text-white/85 max-w-3xl mx-auto">
        al trabajar con Trexan Recycling Group
      </p>
    </div>

    {/* Two-column functional layout */}
    <div className="mt-12 md:mt-16 max-w-6xl mx-auto grid gap-8 lg:grid-cols-[320px_1fr]">
      {/* LEFT: sticky navigator w/ anchors */}
      <aside className="lg:sticky lg:top-4 h-fit">
        <div className="bg-white border border-white/20 shadow-sm">
          <div className="px-5 py-4 border-b border-zinc-200 flex items-center gap-3">
            <span className="h-2 w-2 bg-emerald-700" />
            <p className="text-sm font-semibold tracking-wider uppercase text-zinc-800">
              ÁREAS
            </p>
          </div>

          {/* tighter padding + tighter spacing */}
          <nav className="p-3 space-y-2">
            {[
              { n: "01", t: "Área de\nComercio\nExterior", id: "beneficio-01" },
              { n: "02", t: "Área de\nCompras /\nVentas", id: "beneficio-02" },
              { n: "03", t: "Área\nLegal\n(Compliance)", id: "beneficio-03" },
              { n: "04", t: "Área de\nCalidad", id: "beneficio-04" },
              { n: "05", t: "Área de\nOperaciones /\nProducción", id: "beneficio-05" },
              { n: "06", t: "Área de\nMedio\nAmbiente", id: "beneficio-06" },
              { n: "07", t: "Área de\nIT / OT", id: "beneficio-07" },
              { n: "08", t: "Área de\nFinanzas /\nTesorería /\nContabilidad", id: "beneficio-08" },
            ].map((x) => (
              <Link
                key={x.n}
                href={`#${x.id}`}
                className="group flex items-start gap-3 p-3 border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors"
              >
                <div className="h-9 w-9 bg-emerald-700 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  {x.n}
                </div>

                {/* more compact text */}
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-zinc-800 leading-snug whitespace-pre-line">
                    {x.t}
                  </p>
                </div>
              </Link>
            ))}
          </nav>

          {/* REMOVED non-clickable footer block */}
        </div>
      </aside>

      {/* RIGHT: cards with solid-color rail */}
      <div className="relative">
        {/* vertical rail */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-white/35" />

        <div className="space-y-6 pl-6">
          {/* CARD 1 */}
          <div
            id="beneficio-01"
            className="relative bg-white border border-white/20 shadow-sm scroll-mt-4"
          >
            <div className="absolute -left-[32px] top-6 h-4 w-4 bg-white shadow-sm" />

            <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-200">
              <span className="text-xs font-bold text-zinc-500">01</span>
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="text-xs font-semibold bg-zinc-50 text-zinc-800 px-3 py-1 border border-zinc-200">
                Cumplimiento &amp; Comercio Exterior
              </span>
            </div>
            <div className="h-1 w-full bg-emerald-700" />
            <div className="p-6 md:p-7">
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
            </div>
          </div>

          {/* CARD 2 */}
          <div
            id="beneficio-02"
            className="relative bg-white border border-white/20 shadow-sm scroll-mt-4"
          >
            <div className="absolute -left-[32px] top-6 h-4 w-4 bg-white shadow-sm" />
            <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-200">
              <span className="text-xs font-bold text-zinc-500">02</span>
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="text-xs font-semibold bg-zinc-50 text-zinc-800 px-3 py-1 border border-zinc-200">
                Valor &amp; Recuperación
              </span>
            </div>
            <div className="h-1 w-full bg-orange-500" />
            <div className="p-6 md:p-7">
              <p className="text-lg text-zinc-700 leading-relaxed">
                <span className="font-bold text-orange-600">MAXIMIZAR</span> la Recuperación de VALOR de:
              </p>
              <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
                - Mi Desperdicio (Scrap) Electrónico / Materiales Base Cobre (Cu).<br />
                - Mis Equipos Electrónicos de IT Obsoletos.<br />
                - Mis Equipos Electrónicos Industriales Obsoletos.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            id="beneficio-03"
            className="relative bg-white border border-white/20 shadow-sm scroll-mt-4"
          >
            <div className="absolute -left-[32px] top-6 h-4 w-4 bg-white shadow-sm" />
            <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-200">
              <span className="text-xs font-bold text-zinc-500">03</span>
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="text-xs font-semibold bg-zinc-50 text-zinc-800 px-3 py-1 border border-zinc-200">
                Certeza Jurídica
              </span>
            </div>
            <div className="h-1 w-full bg-emerald-700" />
            <div className="p-6 md:p-7">
              <p className="text-lg text-zinc-700 leading-relaxed">
                <span className="font-bold text-orange-600">INCREMENTAR</span> la Seguridad y Certeza Jurídica de todas mis operaciones.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            id="beneficio-04"
            className="relative bg-white border border-white/20 shadow-sm scroll-mt-4"
          >
            <div className="absolute -left-[32px] top-6 h-4 w-4 bg-white shadow-sm" />
            <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-200">
              <span className="text-xs font-bold text-zinc-500">04</span>
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="text-xs font-semibold bg-zinc-50 text-zinc-800 px-3 py-1 border border-zinc-200">
                Procesos &amp; ISO
              </span>
            </div>
            <div className="h-1 w-full bg-zinc-700" />
            <div className="p-6 md:p-7">
              <p className="text-lg text-zinc-700 leading-relaxed">
                <span className="font-bold text-orange-600">AUMENTAR</span> el Cumplimiento de mis procesos de calidad al trabajar con un Reciclador Certificado en ISO.
              </p>
            </div>
          </div>

          {/* CARD 5 */}
          <div
            id="beneficio-05"
            className="relative bg-white border border-white/20 shadow-sm scroll-mt-4"
          >
            <div className="absolute -left-[32px] top-6 h-4 w-4 bg-white shadow-sm" />
            <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-200">
              <span className="text-xs font-bold text-zinc-500">05</span>
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="text-xs font-semibold bg-zinc-50 text-zinc-800 px-3 py-1 border border-zinc-200">
                Eficiencia Operativa
              </span>
            </div>
            <div className="h-1 w-full bg-emerald-700" />
            <div className="p-6 md:p-7">
              <p className="text-lg text-zinc-700 leading-relaxed">
                <span className="font-bold text-orange-600">MAXIMIZAR</span> la Disponibilidad de m2 de Planta Productiva para mis Operaciones de Producción, Manufactura y Almacén al{" "}
                <span className="font-bold text-red-600">REDUCIR</span> el Espacio Ocupado por Scrap y Productos Obsoletos.
              </p>
            </div>
          </div>

          {/* CARD 6 */}
          <div
            id="beneficio-06"
            className="relative bg-white border border-white/20 shadow-sm scroll-mt-4"
          >
            <div className="absolute -left-[32px] top-6 h-4 w-4 bg-white shadow-sm" />
            <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-200">
              <span className="text-xs font-bold text-zinc-500">06</span>
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="text-xs font-semibold bg-zinc-50 text-zinc-800 px-3 py-1 border border-zinc-200">
                SEMARNAT &amp; R2v3
              </span>
            </div>
            <div className="h-1 w-full bg-red-500" />
            <div className="p-6 md:p-7">
              <p className="text-lg text-zinc-700 leading-relaxed">
                <span className="font-bold text-red-600">DISMINUIR</span> el Riesgo de Multas por parte de SEMARNAT por incumplimiento, errores, omisiones en mis Obligaciones Ambientales al trabajar con un Reciclador Internacionalmente Certificado en R2v3 con Permisos de Transporte Ambiental, Permiso Ecológico, Emisión de Manifiestos y Destino Final.
              </p>
            </div>
          </div>

          {/* CARD 7 */}
          <div
            id="beneficio-07"
            className="relative bg-white border border-white/20 shadow-sm scroll-mt-4"
          >
            <div className="absolute -left-[32px] top-6 h-4 w-4 bg-white shadow-sm" />
            <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-200">
              <span className="text-xs font-bold text-zinc-500">07</span>
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="text-xs font-semibold bg-zinc-50 text-zinc-800 px-3 py-1 border border-zinc-200">
                Seguridad de Datos
              </span>
            </div>
            <div className="h-1 w-full bg-orange-500" />
            <div className="p-6 md:p-7">
              <p className="text-lg text-zinc-700 leading-relaxed">
                <span className="font-bold text-red-600">DISMINUIR</span> el Riesgo de Confidencialidad de mis Datos Digitales al trabajar con un Reciclador que me{" "}
                <span className="font-bold text-orange-600">GARANTIZA</span> la Destrucción Física de los elementos de almacenamiento digital, tales como Discos Duros, Memorias, etc.
              </p>
            </div>
          </div>

          {/* CARD 8 */}
          <div
            id="beneficio-08"
            className="relative bg-white border border-white/20 shadow-sm scroll-mt-4"
          >
            <div className="absolute -left-[32px] top-6 h-4 w-4 bg-white shadow-sm" />
            <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-200">
              <span className="text-xs font-bold text-zinc-500">08</span>
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="text-xs font-semibold bg-zinc-50 text-zinc-800 px-3 py-1 border border-zinc-200">
                Fiscal &amp; Contable
              </span>
            </div>
            <div className="h-1 w-full bg-emerald-700" />
            <div className="p-6 md:p-7">
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
    </div>

    {/* Logos + process bar (same) */}
    <div className="mt-12 md:mt-14 max-w-6xl mx-auto bg-white border border-white/20 shadow-sm">
      <div className="px-6 py-5 border-b border-zinc-200 flex items-center gap-3">
        <span className="h-2 w-2 bg-emerald-700" />
        <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-700">
          Certificaciones y Permisos
        </h3>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
          {certificationLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-4 bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors duration-200"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={80}
                className="object-contain max-h-20 w-auto"
              />
            </div>
          ))}
        </div>
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