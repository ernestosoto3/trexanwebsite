import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import { qNoticias } from "@/lib/queries";
import Hero from "../(componentes)/ui/Hero";
import IntroText from "../(componentes)/ui/IntroText";
import CTA from "../(componentes)/ui/CTA";


const mountainsImage = "/images/industrias/GRUPO TREXAN-31.jpg";

// Fallback cards (si Sanity no trae 6 todavía)
const FALLBACK_NEWS = [
  {
    title: "Trexan Reconocida con Premio de Sustentabilidad Nacional",
    date: "Diciembre 15, 2025",
    excerpt:
      "Trexan ha sido seleccionada para recibir el Premio Nacional de Sustentabilidad, un reconocimiento anual otorgado a empresas que demuestran excelencia en sostenibilidad.",
    href: "/noticias/trexan-premio-sustentabilidad",
    image: "/images/industrias/GRUPO TREXAN-53.jpg",
    alt: "Premio de sostenibilidad",
  },
  {
    title: "Transformando Residuos Industriales en Activos Estratégicos: Economía Circular",
    date: "Noviembre 19, 2025",
    excerpt:
      "Los residuos industriales representan más que un desafío de disposición. Son una oportunidad para recuperar valor, fortalecer cumplimiento y elevar desempeño ambiental.",
    href: "/noticias/economia-circular-activos-estrategicos",
    image: "/images/industrias/GRUPO TREXAN-22.jpg",
    alt: "Economía circular",
  },
  {
    title: "Fortaleciendo Relaciones con Clientes del Sector Electrónico: Ventaja Estratégica",
    date: "Octubre 2, 2025",
    excerpt:
      "En un entorno competitivo de gestión de residuos electrónicos, el éxito depende también de trazabilidad, comunicación y consistencia en los procesos.",
    href: "/noticias/sector-electronico-ventaja-estrategica",
    image: "/images/industrias/shaking-hands.jpg",
    alt: "Relaciones con clientes",
  }
];

function formatDateSpanish(input?: string) {
  if (!input) return "";
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;

  return d.toLocaleDateString("es-PR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NoticiasPage() {
  const noticias = await sanityClient.fetch(qNoticias);

  const fromSanity = (Array.isArray(noticias) ? noticias : []).map((n: any) => {
    const href = n?.slug?.current ? `/noticias/${n.slug.current}` : `/noticias/${n._id}`;
    const image =
      n?.imagen?.asset?.url ||
      n?.image?.asset?.url ||
      n?.imageUrl ||
      "/images/noticias/placeholder-1.jpg";

    return {
      title: n?.titulo ?? "Noticia",
      date: formatDateSpanish(n?.fecha),
      excerpt: n?.resumen ?? n?.excerpt ?? "Lee más sobre esta actualización.",
      href,
      image,
      alt: n?.titulo ?? "Noticia",
    };
  });

  // Queremos siempre 6 tarjetas:
  const NEWS_CARDS = [...fromSanity, ...FALLBACK_NEWS].slice(0, 6);

  return (
    <main>

      {/* HERO */}
      <Hero
        bg={{ type: "image", src: "/images/industrias/main-img-2-1.jpeg", alt: "Noticias" }}
        height="60vh"
        badgeText="Noticias"
        title="Perspectivas sobre Economía Circular y Gestión de RAEE"
        subtitle="Mantente al tanto de las últimas innovaciones, guías prácticas de cumplimiento y logros que están definiendo el futuro del reciclaje electrónico en México."
      />

      <IntroText>
        Explora las tendencias y avances que están redefiniendo 
        la sostenibilidad industrial. Desde logros corporativos 
        hasta análisis profundos sobre procesos de reciclaje 
        certificado, te mantenemos al frente de la vanguardia en 
        economía circular y gestión responsable de electrónicos.
      </IntroText>

      {/* NEWS STYLE CARDS - 6 CLICKABLE */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-[#f7f7f5]">
        <div className="section space-y-10">
          {/* Header with Button on Right */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-3 text-left flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
                Noticias y Actualizaciones
              </h2>
              <p className="text-zinc-600 max-w-2xl">
                Publicaciones recientes sobre cumplimiento, procesos y resultados para apoyar a tu organización.
              </p>
            </div>
          </div>

          {/* News Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {NEWS_CARDS.map((card) => (
              <Link
                key={`${card.title}-${card.date}`}
                href={card.href}
                className="relative group bg-white border border-zinc-200 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                {/* Orange strip at the top */}
                <div className="absolute top-0 left-0 w-full h-2 bg-orange-600 z-10" />

                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  {/* Puedes cambiar a <Image /> si todas las URLs son compatibles con next/image */}
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <time className="text-xs md:text-sm text-emerald-700 font-medium">
                    {card.date}
                  </time>

                  <h3 className="text-lg md:text-xl font-semibold text-zinc-900 leading-snug group-hover:text-emerald-700 transition-colors duration-200">
                    {card.title}
                  </h3>

                  <p className="text-sm md:text-base text-zinc-600 leading-relaxed line-clamp-3 flex-1">
                    {card.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTA/>
    </main>
  );
}
