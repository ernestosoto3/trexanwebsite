import Image from "next/image";
import Link from "next/link";

export default function NoticiaTrexanPremioPage() {
  return (
    <main className="bg-white">
      {/* Top crumb / back */}
      <section className="pt-10">
        <div className="section">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
          >
            <span aria-hidden="true">←</span>
            Volver a Noticias
          </Link>
        </div>
      </section>

      {/* Title + Date */}
      <section className="pt-8 pb-6">
        <div className="section">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-0">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-zinc-900">
              Trexan Reconocida con Premio de Sustentabilidad Nacional
            </h1>

            {/* Date under title */}
            <p className="mt-4 text-sm md:text-base text-emerald-700 font-medium">
              Diciembre 15, 2025
            </p>

            <p className="mt-4 text-zinc-600 leading-relaxed">
              Trexan ha sido seleccionada para recibir el Premio Nacional de Sustentabilidad, un
              reconocimiento anual otorgado a empresas que demuestran excelencia en sostenibilidad.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="section">
          <div className="relative w-full overflow-hidden border-zinc-200">
            <div className="relative h-64 md:h-112 w-full">
              <Image
                src="/images/industrias/GRUPO TREXAN-53.jpg"
                alt="Reconocimiento de sustentabilidad de Trexan"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Story body */}
      <section className="pb-20">
        <div className="section">
            <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-0">
            <article className="space-y-12 text-zinc-800">
            {/* Section */}
            <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
                Un reconocimiento a la excelencia operativa y ambiental
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-zinc-700">
                Este premio destaca iniciativas medibles y consistentes que fortalecen la economía circular,
                elevan los estándares de cumplimiento y promueven una cultura interna enfocada en la mejora
                continua.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-zinc-700">
                Para Trexan, este logro refleja el trabajo coordinado de sus equipos operacionales, técnicos y
                de calidad para convertir retos ambientales en oportunidades de valor.
                </p>
            </section>

            {/* Section */}
            <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
                Sustentabilidad como principio de trabajo
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-zinc-700">
                En el manejo responsable de residuos electrónicos, la sustentabilidad no es una meta aislada:
                es una práctica diaria integrada a la trazabilidad, la documentación, la seguridad operacional
                y la valorización de materiales.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-zinc-700">
                Nuestra prioridad es asegurar procesos claros, verificables y alineados a las necesidades de
                auditoría de clientes en múltiples industrias.
                </p>
            </section>

            {/* Quote */}
            <section className="border-l-4 border-emerald-700 pl-6">
                <blockquote className="text-lg md:text-xl italic text-zinc-800 leading-relaxed">
                “Este reconocimiento refleja la disciplina y el compromiso de nuestro equipo con procesos
                confiables, trazables y enfocados en resultados. La sustentabilidad se construye con
                consistencia, todos los días.”
                </blockquote>
            </section>

            {/* Section */}
            <section className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
                ¿Qué evaluó el comité del premio?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-zinc-700">
                Aunque el reconocimiento es anual, la evaluación considera evidencia acumulada a lo largo del
                tiempo. Entre los criterios se incluyen prácticas como:
                </p>

                <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-zinc-700">
                <li>Esquemas de recolección y manejo alineados a protocolos internos</li>
                <li>Trazabilidad y control documental (cadena de custodia y reportes)</li>
                <li>Valorización de materiales y reducción de disposición final</li>
                <li>Mejoras continuas basadas en métricas y auditorías</li>
                <li>Capacitación del personal y cumplimiento de estándares operacionales</li>
                </ul>
            </section>

            {/* Section */}
            <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
                Impacto para clientes y aliados
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-zinc-700">
                Para nuestros clientes, este reconocimiento refuerza un punto clave: la sustentabilidad se
                demuestra con procesos. Un servicio confiable debe facilitar auditorías, reducir riesgos,
                proteger reputación y aportar datos útiles para reportes internos y objetivos ESG.
                </p>
            </section>

            {/* Section */}
            <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
                Mirando hacia el futuro
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-zinc-700">
                Trexan continuará fortaleciendo sus capacidades de trazabilidad, seguridad y valorización,
                incorporando mejoras operacionales y herramientas de documentación que permitan un
                cumplimiento más simple, más transparente y más robusto para cada organización que confía en
                nuestros servicios.
                </p>
            </section>

            {/* Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
                >
                Hablar con un asesor
                </a>

                <a
                href="/noticias"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-zinc-300 text-zinc-900 hover:bg-zinc-50 transition-colors"
                >
                Ver más noticias
                </a>
            </div>
        </article>
        </div>
        </div>
      </section>
    </main>
  );
}
