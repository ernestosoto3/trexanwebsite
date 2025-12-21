import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/(componentes)/ui/Hero";
import ContactForm from "../../(componentes)/ui/ContactForm";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Retail | Devoluciones y Obsolescencia | Recibásicos",
  description:
    "Gestión de devoluciones, equipos de piso, pantallas, POS, baterías y accesorios. Recolección, clasificación, reciclaje y recuperación de valor con logística especializada.",
  keywords: [
    "reciclaje retail",
    "reciclaje POS",
    "devoluciones electrónica",
    "inventario obsoleto",
    "recuperación de valor retail",
  ],
};

export default function RetailPage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* HERO SECTION */}
      <Hero
        bg={{ type: "image", src: "/images/industrias/industriaretail.jpg", alt: "Industria Retail" }}
        height="60vh"
        badgeText="Retail"
        title="Optimización de Logística Inversa y Gestión de Excedentes"
        subtitle="Aceleramos la liberación de espacio en sus almacenes mediante el retiro y clasificación eficiente de equipos de punto de venta, pantallas y devoluciones, transformando la obsolescencia en valor recuperado para su cadena comercial."
      />

      {/* INTRO TEXT */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section">
          <div className="text-center max-w-5xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Gestión eficiente para equipos de piso, POS, pantallas y devoluciones
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600">
              Para cadenas comerciales, tiendas departamentales y retailers, Recibásicos gestiona devoluciones, equipos
              electrónicos de piso, pantallas, POS, baterías, accesorios y dispositivos dañados. Realizamos recolección,
              clasificación, reciclaje, recuperación de metales y disposición segura, optimizando espacio y reduciendo
              desechos.
            </p>
          </div>
        </div>
      </section>

      {/* QUÉ OFRECEMOS - Grid layout */}
      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="section">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-3">
              Qué Ofrecemos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
              Soluciones Especializadas para Retail
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Reducción de Costos por Inventario Obsoleto
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Disminuye costos asociados a almacenamiento y manejo de inventarios que ya no rotan.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Recuperación de Valor No Revendible
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Recupera valor en productos dañados o no comercializables mediante reciclaje y recuperación de metales.
              </p>
            </article>

            <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                Logística Especializada y Rápida
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Procesos ágiles con recolección y clasificación para alta rotación y múltiples ubicaciones.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICIOS DETALLADOS - Green background with orange lines */}
      <section className="py-16 md:py-20 bg-green-800">
        <div className="section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-300 mb-3">
                  Nuestros Servicios
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Operación eficiente para devoluciones, equipos de piso y obsolescencia
                </h2>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Recolección y Clasificación</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Retiro y clasificación para optimizar espacio y controlar flujos de devoluciones y baja.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Reciclaje y Recuperación de Metales</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Transformación del residuo en valor recuperado con procesos trazables y eficientes.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">Mejora de Imagen Sostenible</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Fortalece prácticas sostenibles ante clientes y aliados con economía circular real.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] bg-zinc-100 flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/images/industrias/retail-content.jpg"
                alt="Gestión de devoluciones y reciclaje para retail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactForm
        industry="Retail"
        title="Cuéntanos sobre tus necesidades de reciclaje"
        subtitle="Completa el formulario y nuestro equipo especializado en retail se pondrá en contacto contigo"
      />
    </main>
  );
}
