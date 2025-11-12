// import Link from "next/link";
// import Script from "next/script";
import Seccion from "./(componentes)/ui/Seccion";
import Button from "./(componentes)/ui/Button";
import CardOverlay from "./(componentes)/ui/CardOverlay";
import QuotePanel from "./(componentes)/ui/QuotePanel";
import BadgeRow from "./(componentes)/ui/BadgeRow";

export const revalidate = 60;

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-[--color-bg] text-[--color-fg]">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/hero-recibasicos.jpg" alt="" className="h-[70vh] w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="section grid md:grid-cols-2 items-center text-white">
          <div className="max-w-xl">
            <div className="kicker">Recibásicos · Procesos Fríos</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Gestión Responsable de RAEE con Trazabilidad Total
            </h1>
            <p className="mt-4 text-white/90">
              Acopio, recolección, desmantelamiento y valorización de residuos electrónicos bajo R2v3, ISO 14001 e ISO 45001.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contacto">Solicitar Cotización</Button>
              <Button href="/operaciones" variant="outline">Ver Servicios</Button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + QUOTE */}
      <Seccion>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[--color-secondary]">Quiénes somos</h2>
            <p className="mt-3 text-neutral-900 dark:text-neutral-100">
              Recibásicos S.A. de C.V., parte de Trexan Recycling Group, gestiona el ciclo completo de RAEE:
              acopio, clasificación, transporte y tratamiento para producir concentrados metálicos de alto valor,
              cumpliendo SEMARNAT/SEGAM y estándares internacionales.
            </p>
          </div>
          <QuotePanel quote="Transformamos desafíos ambientales en oportunidades sustentables mediante soluciones de reciclaje electrónico certificadas." />
        </div>
      </Seccion>

      {/* INDUSTRIAS – cards con overlay */}
      <Seccion titulo="Industrias que atendemos" subtitulo="Soluciones para sector público y privado">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CardOverlay title="Telecomunicaciones" />
          <CardOverlay title="Data Centers" />
          <CardOverlay title="Gobierno y Educación"/>
          <CardOverlay title="Manufactura"/>
          <CardOverlay title="TI Corporativo"/>
        </div>
      </Seccion>

      {/* EXPERTISE / SERVICIOS */}
      <Seccion titulo="Nuestro Expertise">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {t:"Recolección y Acopio",d:"Manifiestos SEMARNAT/SEGAM, trazabilidad y control documental."},
            {t:"Desmantelamiento y Tratamiento",d:"Trituración, molienda y separación para valorización."},
            {t:"Concentrados Metálicos",d:"Material base cobre y metales preciosos para refinación."},
            {t:"Manifiestos y Certificados",d:"Destrucción, disposición final y constancias de economía circular."},
          ].map((x,i)=>(
            <div key={i} className="card p-6">
              <h3 className="text-xl font-semibold">{x.t}</h3>
              <p className="mt-2 text-zinc-600">{x.d}</p>
            </div>
          ))}
        </div>
      </Seccion>

      {/* CERTIFICACIONES */}
      <Seccion titulo="Certificaciones y Permisos">
        <BadgeRow items={[
          {src:"/badges/r2v3.png", alt:"R2v3"},
          {src:"/badges/iso14001.png", alt:"ISO 14001"},
          {src:"/badges/iso45001.png", alt:"ISO 45001"},
          {src:"/badges/immex.png", alt:"IMMEX"}
        ]}/>
      </Seccion>

      {/* CTA FINAL */}
      <Seccion>
        <div className="card p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-[--color-secondary]">¿Listos para una gestión responsable de RAEE?</h3>
          <p className="mt-3 text-zinc-600">Contáctanos para una evaluación y propuesta en 24–48h hábiles.</p>
          <div className="mt-6 flex justify-center">
            <Button href="/contacto">Contáctanos</Button>
          </div>
        </div>
      </Seccion>

      {/* FOOTER SIMPLE (placeholder) */}
      <footer className="bg-[--color-secondary] text-white">
        <div className="section grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold">Recibásicos · Trexan Recycling Group</div>
            <div className="mt-2 text-white/80">Eje 132 No. 120, Zona Industrial del Potosí, SLP, México</div>
          </div>
          <div>
            <div className="font-semibold">Contacto</div>
            <div className="mt-2 text-white/80">+52 (444) 219 7673 · info@trexan.co</div>
          </div>
          <div>
            <div className="font-semibold">Enlaces</div>
            <div className="mt-2 flex gap-4 text-white/80">
              <a href="/operaciones">Servicios</a>
              <a href="/industrias">Industrias</a>
              <a href="/sostenibilidad">Sostenibilidad</a>
              <a href="/certificaciones">Certificaciones</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
