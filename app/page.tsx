import Link from "next/link";
import Section from "./(componentes)/Section";

export const revalidate = 60;

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Transformamos e-waste en metales sostenibles
          </h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl">
            Economía circular aplicada: operaciones “frías” (acopio, logística)
            y “calientes” (recuperación y refinación) integradas de punta a punta.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-foreground text-background">
              Contáctanos
            </Link>
            <Link href="/operations" className="px-5 py-3 rounded-xl ring-1 ring-foreground/20">
              Ver operaciones
            </Link>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <Section
        id="mission-vision"
        title="Nuestra misión y visión"
        subtitle="Cierre de ciclo, trazabilidad y valor recuperado con impacto ambiental positivo."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <h3 className="text-xl font-medium">Misión</h3>
            <p className="mt-2 text-foreground/70">
              Revalorizar residuos electrónicos mediante procesos seguros,
              eficientes y medibles que devuelven materias primas a la industria.
            </p>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <h3 className="text-xl font-medium">Visión</h3>
            <p className="mt-2 text-foreground/70">
              Ser el estándar de circularidad y cumplimiento en Latinoamérica,
              integrando excelencia operacional y sostenibilidad.
            </p>
          </div>
        </div>
      </Section>

      {/* Operations overview */}
      <Section
        id="operations-overview"
        title="Operations overview"
        subtitle="Dos frentes integrados: Recibásicos (procesos fríos) y EWR (procesos calientes)."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <h3 className="text-lg font-medium">Recibásicos — procesos “fríos”</h3>
            <ul className="mt-2 list-disc pl-5 text-foreground/70 space-y-1">
              <li>Acopio y clasificación</li>
              <li>Recolección y transporte</li>
              <li>Gestión RAEE con trazabilidad</li>
            </ul>
            <div className="mt-4">
              <Link href="/operations" className="underline underline-offset-4">
                Ver detalles →
              </Link>
            </div>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <h3 className="text-lg font-medium">EWR — procesos “calientes”</h3>
            <ul className="mt-2 list-disc pl-5 text-foreground/70 space-y-1">
              <li>Recuperación de metales</li>
              <li>Refinación y aseguramiento de calidad</li>
              <li>Reporte de rendimiento y circularidad</li>
            </ul>
            <div className="mt-4">
              <Link href="/operations" className="underline underline-offset-4">
                Ver detalles →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Sustainability counters (placeholder) */}
      <Section
        id="sustainability-counters"
        title="Impacto medible"
        subtitle="Métricas de circularidad (placeholders) — en Fase 3 las conectamos a Sanity."
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
      </Section>

      {/* Certs logo cloud (placeholder) */}
      <Section
        id="certifications"
        title="Certifications"
        subtitle="ISO / R2 / e-Stewards (logos de ejemplo; en Fase 2 los traemos desde Sanity)."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
          {[1,2,3,4].map((i) => (
            <div key={i} className="aspect-3/1 rounded-xl ring-1 ring-foreground/10 grid place-items-center">
              <span className="text-sm text-foreground/50">Logo {i}</span>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/certifications" className="underline underline-offset-4">
            Ver todas →
          </Link>
        </div>
      </Section>

      {/* CTA final */}
      <Section id="cta">
        <div className="rounded-2xl p-8 md:p-10 bg-foreground text-background grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-medium">¿Listos para operar juntos?</h3>
            <p className="mt-2 text-background/80">
              Escríbenos y agenda una llamada para evaluar residuos, logística y valorización.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-background text-foreground">
              Ir a Contact
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
