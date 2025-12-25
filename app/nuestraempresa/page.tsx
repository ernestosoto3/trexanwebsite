import Button from "../(componentes)/ui/Button";
import Image from "next/image";
import Hero from "../(componentes)/ui/Hero";
import CTA from "../(componentes)/ui/CTA";

export const revalidate = 60;

const CORE_VERTICALS = [
  {
    title: "Acopio Integral",
    bullets: [
      "Servicios de recolección en sitio",
      "Cadena de custodia documentada",
      "Instalaciones: Centros integrados en México",
    ],
  },
  {
    title: "Valorización Certificada",
    bullets: [
      "Cumplimiento de normas R2v3 e ISO",
      "Separación y clasificación avanzada",
      "Certificados de destrucción y valorización",
    ],
  },
  {
    title: "Economía Circular",
    bullets: [
      "Evitamos disposición en rellenos sanitarios",
      "Generamos materias primas secundarias",
      "Reducción de huella de carbono",
    ],
  },
  {
    title: "Gestión Completa",
    bullets: [
      "Consultoría en manejo de residuos",
      "Reportes de cumplimiento normativo",
      "Programas de recolección programada",
    ],
  },
] as const;

const CONTENT_CARDS = [
  {
    title: "Sobre Nosotros",
    description: "Más de una década liderando el reciclaje de electrónicos en México",
    image: "/images/industrias/DJI_0410-1.JPG",
    alt: "Instalaciones de Recibásicos mostrando infraestructura de reciclaje",
    href: "/nosotros",
  },
  {
    title: "Sostenibilidad",
    description: "Compromiso ambiental certificado en cada etapa del proceso",
    image: "/images/naturaleza/herosostenibilidad2.jpg",
    alt: "Prácticas sostenibles en procesamiento de residuos electrónicos",
    href: "/sostenibilidad",
  },
  {
    title: "Certificaciones",
    description: "R2v3, ISO 14001 e ISO 45001 garantizan calidad y seguridad operacional",
    image: "/images/industrias/GRUPO TREXAN-74.jpg",
    alt: "Certificaciones internacionales de calidad y medio ambiente",
    href: "/certificaciones",
  },
  {
    title: "Noticias",
    description: "Mantente informado sobre innovaciones y logros en reciclaje electrónico",
    image: "/images/industrias/main-img-2-1.jpeg",
    alt: "Últimas noticias y actualizaciones de Recibásicos",
    href: "/noticias",
  },
] as const;

export default function NosotrosPage() {
  return (
    <main className="min-h-dvh bg-zinc-50">
      {/* HERO SECTION */}
      <Hero
        bg={{
          type: "image",
          src: "/images/industrias/GRUPO TREXAN-42.jpg",
          alt: "Nuestra Empresa",
        }}
        height="60vh"
        badgeText="Nuestra Empresa"
        title="Liderando el Futuro de la Valorización Electrónica"
        subtitle="En Recibásicos transformamos desafíos ambientales en oportunidades sostenibles, garantizando trazabilidad total y certificaciones internacionales en cada proceso."
      />

      {/* 1) FOUR CORE VERTICALS (NOW RIGHT AFTER HERO) */}
      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="section">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-left">
              Nuestros Cuatro Pilares Operativos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VERTICALS.map((vertical) => (
              <article
                key={vertical.title}
                className="relative bg-white border-t-4 border-orange-600 shadow-xl p-6 space-y-4 transition-all duration-200 hover:shadow-3xl hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-zinc-900">{vertical.title}</h3>

                <ul className="space-y-2 text-sm text-zinc-700">
                  {vertical.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="text-emerald-700 mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2) INTRO TEXT WITH GREEN RECTANGLE (CENTERED + ALIGNED TO TEXT) */}
      <section className=" bg-zinc-50">
          <div className=" bg-emerald-700 text-white py-8 md:py-14 px-8 md:px-12 text-center text-xl md:text-2xl leading-relaxed max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Comprometidos con la Reducción del Impacto Ambiental
            </h3>

            <p className="mt-6 text-base md:text-xl leading-relaxed text-white/90 max-w-5xl mx-auto">
              Integramos ingeniería avanzada y rigor normativo para resolver la complejidad de los
              residuos electrónicos. A través de nuestro modelo operativo, transformamos el desecho
              industrial en materias primas secundarias, asegurando que cada etapa del proceso sea
              trazable, segura y certificada internacionalmente.
            </p>
          </div>
      </section>

      {/* 3) MAIN CONTENT CARDS */}
      <section className="py-10 md:py-14 bg-zinc-50">
        <div className="section">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTENT_CARDS.map((card) => (
              <article
                key={card.title}
                className="bg-white shadow-xl overflow-hidden transition-all duration-200 hover:shadow-3xl hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 leading-relaxed flex-1">
                    {card.description}
                  </p>

                  <div className="pt-4">
                    <Button
                      href={card.href}
                      variant="primary"
                      className="w-full bg-emerald-700 text-white hover:bg-emerald-800 rounded-none border-none"
                    >
                      Conocer Más
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTA />
    </main>
  );
}
