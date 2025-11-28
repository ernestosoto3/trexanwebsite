import Button from "./(componentes)/ui/Button";
import BadgeRow from "./(componentes)/ui/BadgeRow";
import CountUpDispositivos from "./(componentes)/ui/CountUpDispositivos";
import BloquesAprendeMas from "./(componentes)/ui/BloqueAprendeMas";


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

        <div className="section h-[60vh] flex items-center relative">
          <div className="max-w-4xl text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-white/25 px-4 py-2 text-sm uppercase tracking-wider ">
              <span className="h-2 w-2 rounded-full bg-[--color-primary]" />
              Trexan Recycling Group
            </span>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Soluciones Sustentables para Residuos Electrónicos
            </h1>

            <div className="flex flex-wrap gap-4">
              <Button
                href="/contacto"
                variant="primary"
                className="border-green-700/90 text-white bg-green-700/90 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white rounded-none"
              >
                Solicitar Cotización
              </Button>
              <Button
                href="/operaciones"
                variant="primary"
                className="border-green-700/90 text-white bg-green-700/90 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white rounded-none"
              >
                Conoce Nuestros Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*TEXTO INTRODUCTORIO*/}
      <section className="py-16 bg-white">
        <div className="section">
          <div className="text-center max-w-6xl mx-auto">
            <h2
              className="text-4xl font-bold"
              style={{ color: "#0a0a0a" }}
            >
               Recibásicos es líder en acopio de residuos electrónicos, transformando pasivos 
               ambientales en economía circular segura.
            </h2>
             <p
                className="text-2xl leading-relaxed"
                style={{ color: "#4b5563" }}
              >
                Ofrecemos trazabilidad total y certificaciones globales que permiten a las empresas proteger
                 su cadena de suministro mientras avanzan hacia sus objetivos de economía circular.
              </p>
          </div>
        </div>
      </section>

      {/* SERVICES BAND */}
      <section className="py-45 bg-white relative">
        {/* Background image behind the text */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: "url('./images/industrias/GRUPO TREXAN-2.jpg')",
          }}
        />
        
      </section>
      {/* BloquesAprendeMas with proper spacing */}
      <div className="relative z-20 -mt-20">
        <BloquesAprendeMas />
      </div>

      {/* VIDEO SECTION WITH TEXT OVERLAY */}
     <section className="relative h-[65vh] overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/enviormentvid.mp4" type="video/mp4" />
          </video>  
        </div>
        
        {/* Text Content Centered */}
        <div className="bg-green-800 p-8 md:p-12 mx-auto max-w-7xl w-full border border-white/10 relative z-10">
          <div className="text-center text-white space-y-6">
            <h2 className="text-4xl md:text-3xl font-bold leading-tight">
              Comprometidos con la Reducción del Impacto Ambiental
            </h2>
            <p className="text-xl md:text-xl leading-relaxed">
              Nuestro compromiso ambiental se materializa al mantener los residuos 
              electrónicos fuera de vertederos y mediante el diseño meticuloso de 
              todos nuestros procesos. Desde la recolección hasta la valorización 
              final, aplicamos certificaciones internacionales R2v3 e ISO 14001 para 
              anticipar impactos, minimizar nuestra huella ecológica y garantizar una 
              economía circular real en México.
            </p>
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
                Sectores que servimos
              </p>
              <h2 className="text-4xl font-bold">
                Resolvemos retos en múltiples industrias
              </h2>
              <p className="text-white/80">
                Atendemos desde plantas industriales hasta instituciones
                educativas, ajustando procesos y permisos a las normas de cada
                cliente.
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

      {/* QUIENES SOMOS */}
      <section className="relative overflow-hidden bg-[#eef4ec]">
        <div className="absolute inset-0 opacity-85" aria-hidden>
          <img
            src="public/home/DJI_0410.JPG"
            alt="Línea de procesamiento"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#eef4ec] via-white/90 to-white" />
        </div>

        <div
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f4f2ec] via-[#eef4ec] to-transparent pointer-events-none"
          aria-hidden
        />

        <div className="section relative py-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
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
                  Ser el estándar nacional en recolección, clasificación y pre-procesamiento 
                  de e-waste. Construyendo la infraestructura que hace posible un reciclaje
                  responsable desde la fuente hasta el metal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESOS DESTACADOS */}
      <section className="py-18 bg-[#0b1a12] text-white">
        <div className="section">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <p
              className="text-sm uppercase tracking-wider"
              style={{ color: "#86efac" }}
            >
              Nuestro Método
            </p>
            <h2 className="text-4l font-bold">
              Reduciendo el impacto ambiental con procesos claros
            </h2>
            
            {/* COUNT-UP DE DISPOSITIVOS RECICLADOS */}
            <CountUpDispositivos />

          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
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
                src="/images/home/recycling-yard.png"
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

      {/* BENEFICIOS */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#1a3d2b] via-white to-transparent pointer-events-none"
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
      <section className="py-16 bg-gray-50">
        <div className="section">
          <div className="text-center mb-10">
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
      <section className="py-14 bg-[#f7f7f5]">
        <div className="section space-y-7">
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
                image: "/images/home/aerial-facility.png",
              },
              {
                title: "Línea de procesamiento",
                description:
                  "Trituración y separación con estándares internacionales.",
                image: "/images/home/processing-line.png",
              },
              {
                title: "Patio y logística",
                description:
                  "Organización en patios para resguardar y clasificar materiales.",
                image: "/images/home/recycling-yard.png",
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

        <div className="section relative py-16 text-white text-center space-y-4">
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
              href="mailto:contacto@recibasicos.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg border-2 transition-all"
              style={{ borderColor: "white", color: "white" }}
            >
              contacto@recibasicos.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
