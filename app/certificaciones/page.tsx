import Image from "next/image";
import Link from "next/link";

const IMAGES = {
  hero: "/images/industrias/GRUPO TREXAN-74.jpg",
  mountains: "/images/industrias/GRUPO TREXAN-31.jpg",
} as const;

const PARTNER_LOGOS = [
  { name: "Recibásicos", src: "/images/partners/recibasicos.png", sub: "Procesos fríos" },
  { name: "Trexan", src: "/images/partners/trexan.png", sub: "Integración" },
  { name: "EWR", src: "/images/partners/ewr.png", sub: "Refinación" },
];

const certificationLogos = [
  { name: "SEMARNAT", src: "/images/certificaciones/semarnat.png" },
  { name: "ISO 45001", src: "/images/certificaciones/iso-45001.png" },
  { name: "SE IMMEX", src: "/images/certificaciones/se-immex.png" },
  { name: "ISO 14001:2015", src: "/images/certificaciones/iso-14001.png" },
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
  { label: "Manufactura AEE", cls: "bg-orange-600" },
  { label: "Uso AEE", cls: "bg-red-700" },
  { label: "Acopio RAEE", cls: "bg-sky-600" },
  { label: "Transporte", cls: "bg-cyan-600" },
  { label: "Almacenamiento", cls: "bg-blue-600" },
  { label: "Tratamiento", cls: "bg-teal-600" },
  { label: "Reciclaje", cls: "bg-green-600" },
  { label: "Disposición Final", cls: "bg-green-900" },
];


function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-sm md:text-base text-zinc-700">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-zinc-400 flex-shrink-0" />
          <span className="leading-relaxed">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function ArrowProcessBar({ steps }: { steps: Array<{ label: string; cls: string }> }) {
  return (
    <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-4">
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
                <span className="relative -translate-x-[6px]">
                  {s.label}
                </span>
              </div>


              {!isLast && (
                <div className="absolute top-0 right-0 h-full w-[2px] bg-white/70" />
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
      <section className="relative isolate overflow-hidden bg-black text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={IMAGES.hero}
            alt="Certificaciones y cumplimiento de Recibásicos"
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
              Certificaciones, Permisos y Cumplimiento
            </h1>

            <p className="text-base md:text-lg text-white/90 max-w-3xl">
              Operación trazable y documentada para la gestión responsable de RAEE,
              con evidencia lista para auditorías y reportes ESG.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16">
        <div className="section">
          <p className="text-center text-xl md:text-2xl leading-relaxed text-gray-600 max-w-6xl mx-auto">
            En Recibásicos, el cumplimiento no es opcional. Integramos certificaciones
            internacionales, permisos regulatorios y control documental para
            garantizar seguridad, trazabilidad y confianza en cada operación.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500">
              RECIBÁSICOS • TREXAN RECYCLING GROUP
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-zinc-900">
              Certificaciones y Evidencia Documental
            </h2>
            <p className="mt-4 text-base md:text-lg text-zinc-600 max-w-3xl mx-auto">
              Un modelo operativo diseñado para cumplir, documentar y respaldar cada etapa
              del manejo de residuos electrónicos.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-[280px_1fr_280px] gap-6 items-stretch">
            {/* LEFT BIG BUBBLE: SECTORES */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-sm font-semibold tracking-wider text-zinc-700 uppercase">
                Sectores
              </h3>
              <BulletList items={sectors} />
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              {/* Partner logos */}
              <div className="grid md:grid-cols-3 gap-6 items-center text-center">
                {PARTNER_LOGOS.map((l) => (
                  <div key={l.name} className="flex flex-col items-center">
                    <div className="h-16 md:h-20 w-full flex items-center justify-center">
                      <Image
                        src={l.src}
                        alt={`${l.name} logo`}
                        width={180}
                        height={80}
                        className="object-contain max-h-20"
                      />
                    </div>
                    <p className="mt-2 font-semibold text-zinc-900">{l.name}</p>
                    <p className="text-xs text-zinc-500">{l.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
                    Servicios Recibásicos
                  </h4>
                  <BulletList items={serviciosRecibasicos} />
                </div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
                    Servicios EWR
                  </h4>
                  <BulletList items={serviciosEWR} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-sm font-semibold tracking-wider text-zinc-700 uppercase">
                Ofrecemos
              </h3>
              <BulletList items={offerings} />
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-700 mb-6">
              Certificaciones y Permisos
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
              {certificationLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center p-4 border border-zinc-200 rounded-xl bg-zinc-50"
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
                trazabilidad y valorización alineado a tus procesos y auditorías.
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
