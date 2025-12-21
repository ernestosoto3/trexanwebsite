import Button from "../(componentes)/ui/Button";
import Image from "next/image";
import Hero from "../(componentes)/ui/Hero"

export const revalidate = 60;


const paletteImage = "/images/industrias/GRUPO TREXAN-31.jpg";

const CORE_VERTICALS = [
  {
    title: "Acopio Integral",
    description:
      "Recolección especializada de residuos electrónicos con trazabilidad completa desde el origen.",
    bullets: [
      "Servicios de recolección en sitio",
      "Cadena de custodia documentada",
      "Instalaciones: Centros integrados en México",
    ],
  },
  {
    title: "Valorización Certificada",
    description:
      "Procesamiento con estándares internacionales para maximizar la recuperación de materiales.",
    bullets: [
      "Cumplimiento de normas R2v3 e ISO",
      "Separación y clasificación avanzada",
      "Certificados de destrucción y valorización",
    ],
  },
  {
    title: "Economía Circular",
    description:
      "Mantenemos los residuos electrónicos fuera de vertederos, creando valor a partir de materiales recuperados.",
    bullets: [
      "Evitamos disposición en rellenos sanitarios",
      "Generamos materias primas secundarias",
      "Reducción de huella de carbono",
    ],
  },
  {
    title: "Gestión Completa",
    description:
      "Soluciones integrales adaptadas a las necesidades específicas de cada cliente industrial.",
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
    image: "/images/naturaleza/river-rafting.jpg",
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

const SectionHeader = ({
  label,
  title,
  description,
}: {
  label?: string;
  title: string;
  description?: string;
}) => (
  <div className="text-center space-y-3">
    {label && (
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700">
        {label}
      </p>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">{title}</h2>
    {description && (
      <p className="text-base md:text-lg max-w-3xl mx-auto text-zinc-600">
        {description}
      </p>
    )}
  </div>
);

export default function NosotrosPage() {
  return (
    <main className="min-h-dvh bg-white">
      {/* HERO SECTION (New style, same content) */}
      <Hero
        bg={{ type: "image", src: "/images/industrias/GRUPO TREXAN-42.jpg", alt: "Nuestra Empresa" }}
        height="60vh"
        badgeText="Nuestra Empresa"
        title="Liderando el Futuro de la Valorización Electrónica"
        subtitle="En Recibásicos transformamos desafíos ambientales en oportunidades sostenibles, garantizando trazabilidad total y certificaciones internacionales en cada proceso."
      />

      {/* FOUR CORE VERTICALS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section">
          <div className="mb-12">
            <SectionHeader
              label="Modelo Recibásicos"
              title="Nuestros Cuatro Pilares Operativos"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VERTICALS.map((vertical) => (
              <article
                key={vertical.title}
                className="relative bg-white border-t-4 border-orange-600 shadow-md p-6 space-y-4 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-zinc-900">
                  {vertical.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {vertical.description}
                </p>
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

      {/* MAIN CONTENT CARDS - RESPONSIVE GRID */}
      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="section">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTENT_CARDS.map((card) => (
              <article
                key={card.title}
                className="bg-white shadow-md overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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

      {/* SUSTAINABILITY COMMITMENT SECTION */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[28rem] md:min-h-[32rem] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/industrias/GRUPO TREXAN-2.jpg"
              alt="Compromiso con sostenibilidad ambiental"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="section relative z-10">
            <div className="bg-emerald-700 backdrop-blur-sm p-8 md:p-12 w-full border border-white/10">
              <div className="text-center text-white space-y-6 max-w-4xl mx-auto">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-300">
                  Contribuimos a la Sostenibilidad
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Recibásicos Ayuda a Alcanzar Objetivos de Sostenibilidad
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-white/90">
                  Proporcionamos soluciones integrales de gestión de residuos que incluyen
                  reciclaje, recuperación y revalorización de subproductos industriales
                  electrónicos, con evidencias claras y certificaciones que respaldan cada
                  operación para proteger la cadena de suministro de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL (copy/paste EXACT as requested) */}
      <section className="relative">
        <div className="relative h-80 md:h-[360px] overflow-hidden">
          <Image
            src={paletteImage}
            alt="Paisaje que representa un futuro más limpio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="max-w-2xl bg-white/95 px-6 py-8 md:px-10 md:py-10 text-center shadow-xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700">
                Da el siguiente paso
              </p>
              <h2 className="mt-3 text-xl md:text-2xl font-semibold text-zinc-900">
                ¿Listos para trabajar con trazabilidad y seguridad?
              </h2>
              <p className="mt-4 text-sm md:text-base text-zinc-600">
                Conversemos sobre cómo estructurar un esquema de recolección,
                trazabilidad y valorización alineado a tus procesos, auditorías y
                objetivos de sostenibilidad.
              </p>
              <a
                href="/contacto"
                className="mt-8 inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
              >
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
