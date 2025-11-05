import Link from "next/link";
import Seccion from "./(componentes)/Seccion";

export const revalidate = 60;

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Transformamos e-waste en metales sostenibles
          </h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl">
            Economía circular aplicada: operaciones “frías” (acopio, logística) y “calientes”
            (recuperación y refinación) integradas de punta a punta.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/contacto" className="px-5 py-3 rounded-xl bg-foreground text-background">
              Contáctanos
            </Link>
            <Link href="/operaciones" className="px-5 py-3 rounded-xl ring-1 ring-foreground/20">
              Ver operaciones
            </Link>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <Seccion
        id="mision-vision"
        titulo="Nuestra misión y visión"
        subtitulo="Cierre de ciclo, trazabilidad y valor recuperado con impacto ambiental positivo."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <h3 className="text-xl font-medium">Misión</h3>
            <p className="mt-2 text-foreground/70">
              Revalorizar residuos electrónicos mediante procesos seguros, eficientes y medibles
              que devuelven materias primas a la industria.
            </p>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <h3 className="text-xl font-medium">Visión</h3>
            <p className="mt-2 text-foreground/70">
              Ser el estándar de circularidad y cumplimiento en Latinoamérica, integrando
              excelencia operacional y sostenibilidad.
            </p>
          </div>
        </div>
      </Seccion>

      <Seccion
        id="resumen-operaciones"
        titulo="Operaciones integradas"
        subtitulo="Dos frentes: Recibásicos (procesos fríos) y EWR (procesos calientes)."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <h3 className="text-lg font-medium">Recibásicos — procesos “fríos”</h3>
            <ul className="mt-2 list-disc pl-5 text-foreground/70 space-y-1">
              <li>Acopio y clasificación</li>
              <li>Recolección, <span className="whitespace-nowrap">almacenamiento</span> y transporte</li>
              <li>Gestión RAEE con trazabilidad</li>
              <li>Reutilización, tratamiento y disposición final</li>
            </ul>
            <div className="mt-4">
              <Link href="/operaciones" className="underline underline-offset-4">
                Ver detalles →
              </Link>
            </div>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <h3 className="text-lg font-medium">EWR — procesos “calientes”</h3>
            <ul className="mt-2 list-disc pl-5 text-foreground/70 space-y-1">
              <li>Recuperación y refinación de metales</li>
              <li>Aseguramiento de calidad y análisis de materiales</li>
              <li>Reporte de rendimiento y circularidad</li>
            </ul>
            <div className="mt-4">
              <Link href="/operaciones" className="underline underline-offset-4">
                Ver detalles →
              </Link>
            </div>
          </div>
        </div>
      </Seccion>

      {/* Sectores (extracto breve del deck, solo para Home) */}
      <Seccion
        id="sectores"
        titulo="Sectores que servimos"
        subtitulo="Integramos sector público y privado para una gestión responsable del RAEE."
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {["Empresas", "Instituciones públicas", "Instituciones educativas", "Fundaciones"].map((s) => (
            <div key={s} className="rounded-xl p-4 ring-1 ring-foreground/10 text-center text-sm">
              {s}
            </div>
          ))}
        </div>
      </Seccion>

      <Seccion
        id="por-que-trexan"
        titulo="¿Por qué Trexan?"
        subtitulo="Confianza, cumplimiento y colaboración sostenible."
      >
        <ul className="grid md:grid-cols-3 gap-4 text-foreground/70">
          <li className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <span className="font-medium text-foreground">Responsabilidad ambiental</span>
            <p className="mt-2">Acciones que reducen CO₂ y maximizan la valorización de materiales.</p>
          </li>
          <li className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <span className="font-medium text-foreground">Cumplimiento y trazabilidad</span>
            <p className="mt-2">Procesos medibles, manifiestos y reportes para auditorías.</p>
          </li>
          <li className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <span className="font-medium text-foreground">Colaboración transparente</span>
            <p className="mt-2">Relaciones de largo plazo con KPIs y metas claras.</p>
          </li>
        </ul>
      </Seccion>

      <Seccion
        id="impacto"
        titulo="Impacto medible"
        subtitulo="Conectaremos estas métricas a Sanity en la siguiente fase."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Kg de e-waste tratados", value: "—" },
            { label: "Metales recuperados (kg)", value: "—" },
            { label: "CO₂ evitado (t)", value: "—" },
            { label: "Clientes atendidos", value: "—" },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl p-6 ring-1 ring-foreground/10 text-center">
              <div className="text-3xl font-semibold tabular-nums">{c.value}</div>
              <div className="mt-1 text-sm text-foreground/70">{c.label}</div>
            </div>
          ))}
        </div>
      </Seccion>

      <Seccion id="cta">
        <div className="rounded-2xl p-8 md:p-10 bg-foreground text-background grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-medium">¿Listos para operar juntos?</h3>
            <p className="mt-2 text-background/80">
              Escríbenos y agenda una llamada para evaluar residuos, logística y valorización.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link href="/contacto" className="px-5 py-3 rounded-xl bg-background text-foreground">
              Ir a Contacto
            </Link>
          </div>
        </div>
      </Seccion>
    </main>
  );
}
