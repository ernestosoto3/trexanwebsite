import Button from "./(componentes)/ui/Button";
import BadgeRow from "./(componentes)/ui/BadgeRow";

export const revalidate = 60;

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* HERO WITH VIDEO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/solution-video-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/60" />
        </div>

        <div className="section h-[70vh] flex items-center relative">
          <div className="max-w-4xl text-white space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-[--color-primary]" />
              Trexan Recycling Group
            </span>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Soluciones Sustentables para Residuos Electrónicos
            </h1>

            <p className="text-xl text-white/90 max-w-3xl">
              Recolección, desmantelamiento y valorización con trazabilidad
              completa y certificaciones internacionales para proteger tu cadena
              de suministro.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                href="/contacto"
                variant="primary"
                className="shadow-[0_10px_30px_rgba(22,163,74,0.25)]"
              >
                Solicitar Cotización
              </Button>
              <Button
                href="/operaciones"
                variant="outline"
                className="border-white text-white hover:border-[--color-primary] hover:text-[--color-primary]"
              >
                Conoce Nuestros Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVER IMAGE BAND */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src="/images/home/aerial-facility.png"
            alt="Operaciones Trexan"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/92" />
        </div>

        <div className="section py-16 relative space-y-10">
          <div className="text-center space-y-3">
            <p
              className="text-sm uppercase tracking-wider"
              style={{ color: "#166534" }}
            >
              Soluciones Integrales
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ color: "#0a0a0a" }}
            >
              Industria, gobierno y reciclaje bajo control
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#4b5563" }}
            >
              Gestionamos residuos electrónicos con rutas seguras, permisos
              completos y procesos internos auditables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Recolección y Acopio",
              "Desmantelamiento",
              "Transporte Ecológico",
              "Certificación",
            ].map((title, index) => (
              <div
                key={title}
                className="bg-white border shadow-sm p-6 h-full flex flex-col gap-3 hover:shadow-md transition-shadow"
                style={{ borderColor: "#e5e7eb" }}
              >
                <span
                  className="inline-flex w-fit rounded-full bg-[#ecfdf3] px-3 py-1 text-xs font-semibold"
                  style={{ color: "#166534" }}
                >
                  {index === 0 && "Inicio"}
                  {index === 1 && "Procesos"}
                  {index === 2 && "Logística"}
                  {index === 3 && "Cierre"}
                </span>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "#0a0a0a" }}
                >
                  {title}
                </h3>
                {index === 0 && (
                  <p style={{ color: "#4b5563" }}>
                    Recolección de equipos obsoletos, acopio seguro y manifiestos
                    ambientales que respaldan cada movimiento.
                  </p>
                )}
                {index === 1 && (
                  <p style={{ color: "#4b5563" }}>
                    Desmantelamiento y trituración para producir concentrados
                    listos para refinación.
                  </p>
                )}
                {index === 2 && (
                  <p style={{ color: "#4b5563" }}>
                    Transporte certificado con permisos SEGAM y SEMARNAT para
                    una cadena logística transparente.
                  </p>
                )}
                {index === 3 && (
                  <p style={{ color: "#4b5563" }}>
                    Certificados de destrucción y evidencia fotográfica para tu
                    auditoría y cumplimiento.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section className="relative overflow-hidden bg-[#f3f5f0]">
        <div className="absolute inset-0 opacity-80" aria-hidden>
          <img
            src="/images/home/processing-line.png"
            alt="Línea de procesamiento"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#f3f5f0] via-white/90 to-white" />
        </div>

        <div className="section relative py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <p
                className="text-sm uppercase tracking-wider"
                style={{ color: "#166534" }}
              >
                Sobre Nosotros
              </p>
              <h2
                className="text-4xl font-bold"
                style={{ color: "#0a0a0a" }}
              >
                Reciclaje con disciplina industrial
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#4b5563" }}
              >
                Somos una empresa mexicana con base en San Luis Potosí, parte
                del Grupo Trexan, que articula centros integrados de reciclaje
                electrónico para cubrir toda la cadena de valor, desde la
                recolección hasta la refinación de metales.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#4b5563" }}
              >
                Nuestro compromiso es operar con transparencia, trazabilidad y
                cercanía al generador, certificando cada paso y minimizando la
                huella ambiental.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Button href="/contacto" variant="primary">
                  Hablar con un asesor
                </Button>
                <Button
                  href="/quienes-somos"
                  variant="outline"
                  className="text-[--color-primary] border-[--color-primary] hover:text-white"
                >
                  Conoce nuestra historia
                </Button>
              </div>
            </div>

            <div className="bg-white shadow-md border border-[#e5e7eb] p-8 space-y-6">
              <div className="space-y-2">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "#0a0a0a" }}
                >
                  Nuestra Misión
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#4b5563" }}
                >
                  Reciclar residuos electrónicos con eficiencia y
                  responsabilidad, formalizando el mercado mexicano mientras
                  creamos valor y seguridad para nuestros clientes.
                </p>
              </div>
              <div className="h-px bg-[#e5e7eb]" />
              <div className="space-y-2">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "#0a0a0a" }}
                >
                  Nuestra Visión
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#4b5563" }}
                >
                  Replicar el modelo de centros integrados para reducir
                  transportes, elevar la recuperación de materiales y asegurar
                  cumplimiento normativo en cada región.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESOS DESTACADOS */}
      <section className="py-20 bg-[#0b1a12] text-white">
        <div className="section">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <p
              className="text-sm uppercase tracking-wider"
              style={{ color: "#86efac" }}
            >
              Nuestro Método
            </p>
            <h2 className="text-4xl font-bold">
              Reduciendo el impacto ambiental con procesos claros
            </h2>
            <p className="text-lg text-white/80">
              Coordinar personas, permisos y logística es clave. Operamos con
              equipos capacitados, monitoreo constante y evidencias para que
              cada auditoría resulte sencilla.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {[
                "Recepción y clasificación detallada",
                "Desmantelamiento controlado",
                "Rutas y manifiestos certificados",
                "Evidencias para tus auditorías",
              ].map((item, idx) => (
                <div key={item} className="flex gap-4 items-start">
                  <span className="mt-1 h-6 w-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-semibold">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item}</h3>
                    <p className="text-white/80">
                      {idx === 0 &&
                        "Inventariamos y clasificamos cada equipo para asegurar trazabilidad desde el primer movimiento."}
                      {idx === 1 &&
                        "Procesamos los RAEE con seguridad industrial para recuperar materiales aprovechables."}
                      {idx === 2 &&
                        "Transportamos con permisos vigentes y control documental en cada punto."}
                      {idx === 3 &&
                        "Entregamos reportes, fotografías y certificados para cerrar el ciclo con total respaldo."}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative h-full">
              <img
                src="/home/GRUPO TREXAN-83.jpg"
                alt="Patio de reciclaje"
                className="w-full rounded-lg shadow-xl border border-white/10"
              />
              <div
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-[--color-primary] opacity-20 rounded-full"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="py-20 bg-[#1a3d2b] text-white">
        <div className="section">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p
                className="text-sm uppercase tracking-wider"
                style={{ color: "#86efac" }}
              >
                Sectores que confían en Trexan
              </p>
              <h2 className="text-4xl font-bold">
                Resolvemos retos en múltiples industrias
              </h2>
              <p className="text-white/80">
                Atendemos desde plantas industriales hasta instituciones
                educativas, ajustando procesos y permisos a las normas de cada
                sector.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Automotriz",
                "Manufactura",
                "Gobierno",
                "Electrónica",
                "Tecnología",
                "Salud",
                "Retail",
                "Educación",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-white/15 rounded-lg px-4 py-3 bg-white/5"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 bg-white">
        <div className="section">
          <div className="text-center mb-12 space-y-3">
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Economía circular",
              "Evidencias y certificaciones",
              "Equipo especializado",
              "Cobertura nacional",
            ].map((item, idx) => (
              <div key={item} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
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

      {/* CERTIFICACIONES */}
      <section className="py-20 bg-gray-50">
        <div className="section">
          <div className="text-center mb-12">
            <p
              className="text-sm uppercase tracking-wider mb-3"
              style={{ color: "#16a34a" }}
            >
              Cumplimiento Total
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ color: "#0a0a0a" }}
            >
              Certificaciones y Permisos
            </h2>
          </div>
          <BadgeRow
            items={[
              { src: "/badges/r2v3.png", alt: "R2v3" },
              { src: "/badges/iso14001.png", alt: "ISO 14001" },
              { src: "/badges/iso45001.png", alt: "ISO 45001" },
              { src: "/badges/immex.png", alt: "IMMEX" },
            ]}
          />
        </div>
      </section>

      {/* NEWS STYLE CARDS */}
      <section className="py-16 bg-[#f7f7f5]">
        <div className="section space-y-8">
          <div className="text-center space-y-3">
            <p
              className="text-sm uppercase tracking-wider"
              style={{ color: "#166534" }}
            >
              Operación en imágenes
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ color: "#0a0a0a" }}
            >
              Historias que respaldan nuestro servicio
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#4b5563" }}
            >
              Tres momentos de nuestra operación que muestran logística,
              seguridad y control en sitio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Toma aérea de instalaciones",
                description:
                  "Centros integrados que permiten controlar cada etapa del reciclaje.",
                image: "/home/DJI_0410.JPG",
              },
              {
                title: "Línea de procesamiento",
                description:
                  "Trituración y separación con estándares internacionales.",
                image: "/home/main-img-2.jpeg",
              },
              {
                title: "Patio y logística",
                description:
                  "Organización en patios para resguardar y clasificar materiales.",
                image: "/home/GRUPO TREXAN-83.jpg",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="bg-white border border-[#e5e7eb] shadow-sm h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "#0a0a0a" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-base"
                    style={{ color: "#4b5563" }}
                  >
                    {card.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <Button
                      href="/operaciones"
                      variant="outline"
                      className="text-[--color-primary] border-[--color-primary] hover:text-white"
                    >
                      Ver más
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden">
        <img
          src="/images/home/processing-line.png"
          alt="Camino sustentable"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/70" />

        <div className="section relative py-20 text-white text-center space-y-4">
          <p
            className="text-sm uppercase tracking-wider"
            style={{ color: "#bbf7d0" }}
          >
            Hablemos
          </p>
          <h2 className="text-4xl font-bold">
            ¿Listos para trabajar con trazabilidad y seguridad?
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white/85">
            Nuestro equipo está listo para programar tu próximo retiro de RAEE
            con permisos completos y reportes detallados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" variant="primary">
              Solicitar Cotización
            </Button>
            <a
              href="mailto:gpizzutoa@trexan.co"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg border-2 transition-all"
              style={{ borderColor: "white", color: "white" }}
            >
              gpizzutoa@trexan.co
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
