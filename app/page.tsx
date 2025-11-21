import Button from "./(componentes)/ui/Button";
import BadgeRow from "./(componentes)/ui/BadgeRow";

export const revalidate = 60;

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* HERO WITH VIDEO */}
      <section className="relative overflow-hidden h-[70vh]">
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
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="section h-full flex items-center">
          <div className="max-w-3xl text-white relative z-10 space-y-6">
            <p
              className="text-sm uppercase tracking-wider"
              style={{ color: "#c7f9cc" }}
            >
              Recibásicos · Trexan Recycling Group
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Gestión Responsable de RAEE con Trazabilidad Total
            </h1>

            <p className="text-xl text-white/90">
              Acopio, recolección, desmantelamiento y valorización de residuos
              electrónicos bajo certificaciones R2v3, ISO 14001 e ISO 45001.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/contacto" variant="primary">
                Solicitar Cotización
              </Button>
              <Button
                href="/operaciones"
                variant="outline"
                className="border-white text-white"
              >
                Ver Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

            {/* QUIENES SOMOS */}
      <section className="py-20 bg-gray-50">
        <div className="section">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p
                className="text-sm uppercase tracking-wider mb-3"
                style={{ color: "#16a34a" }}
              >
                Sobre Nosotros
              </p>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: "#0a0a0a" }}
              >
                ¿Quiénes Somos?
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#52525b" }}
              >
                Somos una empresa mexicana ubicada en San Luis Potosí,
                socialmente sustentable enfocada al acopio, recolección,
                almacenamiento, transporte, reutilización, tratamiento, reciclaje
                y disposición final de los residuos de aparatos eléctricos y
                electrónicos (RAEE) en México.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#52525b" }}
              >
                Parte del <strong>Grupo Trexan</strong>, única empresa en América
                con una red de centros integrados de reciclaje electrónico que
                cubren toda la cadena de valor: desde la recolección hasta la
                refinación de metales.
              </p>
            </div>

            <div
              className="bg-white p-8 border-l-4 shadow-sm"
              style={{ borderColor: "#16a34a" }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#0a0a0a" }}
              >
                Nuestra Misión
              </h3>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#52525b" }}
              >
                Reciclar residuos electrónicos con eficiencia, transparencia y
                responsabilidad, formalizando el mercado y creando valor cerca de
                los generadores.
              </p>

              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#0a0a0a" }}
              >
                Nuestra Visión
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#52525b" }}
              >
                Replicar nuestro modelo de centros de reciclaje integrados,
                reduciendo el transporte innecesario y maximizando la
                recuperación de materiales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPERACIÓN EN IMÁGENES */}
      <section className="py-16 bg-[#f7f7f5]">
        <div className="section space-y-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider mb-3" style={{ color: '#166534' }}>
              Operación en Imágenes
            </p>
            <h2 className="text-4xl font-bold" style={{ color: '#0a0a0a' }}>
              Procesos y Alcance
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#52525b' }}>
              Una mirada a nuestras instalaciones y al flujo de trabajo que seguimos para dar
              trazabilidad a cada residuo electrónico.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <figure className="bg-white border shadow-sm h-full">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/home/DJI_0410.JPG"
                  alt="Vista aérea de las instalaciones"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <figcaption className="p-5 space-y-2" style={{ color: '#0a0a0a' }}>
                <p className="text-sm uppercase tracking-wide" style={{ color: '#166534' }}>
                  Centros Integrados
                </p>
                <p className="text-lg" style={{ color: '#1f2937' }}>
                  Infraestructura propia que nos permite controlar cada etapa de reciclaje.
                </p>
              </figcaption>
            </figure>

            <figure className="bg-white border shadow-sm h-full">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/home/main-img-2.jpeg"
                  alt="Línea de procesamiento"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <figcaption className="p-5 space-y-2" style={{ color: '#0a0a0a' }}>
                <p className="text-sm uppercase tracking-wide" style={{ color: '#166534' }}>
                  Procesos Seguros
                </p>
                <p className="text-lg" style={{ color: '#1f2937' }}>
                  Desmantelamiento y trituración con estándares internacionales.
                </p>
              </figcaption>
            </figure>

            <figure className="bg-white border shadow-sm h-full">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/home/GRUPO TREXAN-83.jpg"
                  alt="Patio de reciclaje"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <figcaption className="p-5 space-y-2" style={{ color: '#0a0a0a' }}>
                <p className="text-sm uppercase tracking-wide" style={{ color: '#166534' }}>
                  Manejo Responsable
                </p>
                <p className="text-lg" style={{ color: '#1f2937' }}>
                  Espacios organizados para resguardar y clasificar cada material.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 bg-white">
        <div className="section">
          <div className="text-center mb-12">
            <p
              className="text-sm uppercase tracking-wider mb-3"
              style={{ color: "#16a34a" }}
            >
              Nuestros Servicios
            </p>
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#0a0a0a" }}
            >
              Servicios Integrales
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#52525b" }}
            >
              Cubrimos toda la cadena de valor del reciclaje electrónico
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="border p-6 bg-white shadow-sm"
              style={{ borderColor: "#e5e7eb" }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#0a0a0a" }}
              >
                Recolección y Acopio
              </h3>
              <p style={{ color: "#52525b" }}>
                Recolección de equipos electrónicos obsoletos y tarjetas con
                manifiestos ambientales.
              </p>
            </div>

            <div
              className="border p-6 bg-white shadow-sm"
              style={{ borderColor: "#e5e7eb" }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#0a0a0a" }}
              >
                Desmantelamiento
              </h3>
              <p style={{ color: "#52525b" }}>
                Desmantelamiento y trituración de RAEE para producción de
                concentrados.
              </p>
            </div>

            <div
              className="border p-6 bg-white shadow-sm"
              style={{ borderColor: "#e5e7eb" }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#0a0a0a" }}
              >
                Transporte Ecológico
              </h3>
              <p style={{ color: "#52525b" }}>
                Transporte certificado de residuos con autorización SEGAM y
                SEMARNAT.
              </p>
            </div>

            <div
              className="border p-6 bg-white shadow-sm"
              style={{ borderColor: "#e5e7eb" }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#0a0a0a" }}
              >
                Certificación
              </h3>
              <p style={{ color: "#52525b" }}>
                Certificado de destrucción y constancia de contribución a la
                economía circular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="section">
          <div className="text-center mb-12">
            <p
              className="text-sm uppercase tracking-wider mb-3"
              style={{ color: "#34d399" }}
            >
              Sectores que Atendemos
            </p>
            <h2 className="text-4xl font-bold mb-4">Nuestros Clientes</h2>
            <p className="text-white/80">
              Englobamos el sector público y privado para una contribución
              integral
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div
              className="bg-gray-800 p-6 border shadow-sm"
              style={{ borderColor: "#374151" }}
            >
              <h3 className="text-xl font-bold mb-2">Empresas</h3>
              <p className="text-sm text-white/70">Manufactura y corporativos</p>
            </div>

            <div
              className="bg-gray-800 p-6 border shadow-sm"
              style={{ borderColor: "#374151" }}
            >
              <h3 className="text-xl font-bold mb-2">Instituciones Educativas</h3>
              <p className="text-sm text-white/70">Escuelas y universidades</p>
            </div>

            <div
              className="bg-gray-800 p-6 border shadow-sm"
              style={{ borderColor: "#374151" }}
            >
              <h3 className="text-xl font-bold mb-2">Instituciones Públicas</h3>
              <p className="text-sm text-white/70">
                Gobierno municipal y estatal
              </p>
            </div>

            <div
              className="bg-gray-800 p-6 border shadow-sm"
              style={{ borderColor: "#374151" }}
            >
              <h3 className="text-xl font-bold mb-2">Fundaciones</h3>
              <p className="text-sm text-white/70">Movimientos sociales</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 bg-white">
        <div className="section">
          <div className="text-center mb-12">
            <p
              className="text-sm uppercase tracking-wider mb-3"
              style={{ color: "#16a34a" }}
            >
              Por Qué Elegirnos
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ color: "#0a0a0a" }}
            >
              Beneficios de Trabajar con Nosotros
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: "#16a34a" }}
              >
                ✓
              </div>
              <div>
                <h3
                  className="font-bold mb-2"
                  style={{ color: "#0a0a0a" }}
                >
                  Contribuyes a la Economía Circular
                </h3>
                <p style={{ color: "#52525b" }}>
                  Ayuda al planeta reciclando y minimizando el cambio climático
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: "#16a34a" }}
              >
                ✓
              </div>
              <div>
                <h3
                  className="font-bold mb-2"
                  style={{ color: "#0a0a0a" }}
                >
                  Genera Empleos Formales
                </h3>
                <p style={{ color: "#52525b" }}>
                  Ayudas a la generación de empleos formales en México
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: "#16a34a" }}
              >
                ✓
              </div>
              <div>
                <h3
                  className="font-bold mb-2"
                  style={{ color: "#0a0a0a" }}
                >
                  Certificaciones Internacionales
                </h3>
                <p style={{ color: "#52525b" }}>
                  Estamos certificados con R2v3, ISO 14001 e ISO 45001
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: "#16a34a" }}
              >
                ✓
              </div>
              <div>
                <h3
                  className="font-bold mb-2"
                  style={{ color: "#0a0a0a" }}
                >
                  Cumplimiento Legal Total
                </h3>
                <p style={{ color: "#52525b" }}>
                  Permisos SEMARNAT, SEGAM e IMMEX
                </p>
              </div>
            </div>
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

      {/* CTA */}
      <section
        className="py-20 text-white"
        style={{ backgroundColor: "#16a34a" }}
      >
        <div className="section text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listos para Reciclar de Forma Responsable?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Llámanos al (444) 219 7673 o contáctanos para más información
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" variant="outline">
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
