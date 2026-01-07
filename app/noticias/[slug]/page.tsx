import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { sanityClient } from "@/lib/sanity";
import CTA from "../../(componentes)/ui/CTA";

// ============================================================================
// TYPES
// ============================================================================
interface NoticiaDetalle {
  readonly _id: string;
  readonly titulo: string;
  readonly slug: { readonly current: string };
  readonly fecha: string;
  readonly contenido: string | any[]; // Can be string or Sanity block array
  readonly resumen?: string;
  readonly imagen?: {
    readonly asset?: {
      readonly url?: string;
    };
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ============================================================================
// SANITY QUERY
// ============================================================================
const NOTICIA_QUERY = `*[_type == "noticia" && slug.current == $slug][0]{
  _id,
  titulo,
  slug,
  fecha,
  contenido,
  resumen,
  imagen{
    asset->{
      url
    }
  }
}`;

// ============================================================================
// METADATA (Dynamic per article)
// ============================================================================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const noticia: NoticiaDetalle = await sanityClient.fetch(NOTICIA_QUERY, { slug });
    
    if (!noticia) {
      return {
        title: "Noticia no encontrada | Recibásicos",
      };
    }

    // Handle contenido safely - it might be a string or array
    const contenidoText = typeof noticia.contenido === 'string' 
      ? noticia.contenido 
      : Array.isArray(noticia.contenido)
      ? noticia.contenido.join(' ')
      : '';

    const description = noticia.resumen || contenidoText.substring(0, 160);

    return {
      title: `${noticia.titulo} | Recibásicos`,
      description,
      openGraph: {
        title: noticia.titulo,
        description,
        images: noticia.imagen?.asset?.url ? [noticia.imagen.asset.url] : [],
        type: "article",
        publishedTime: noticia.fecha,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Noticia | Recibásicos",
    };
  }
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================
function formatDateSpanish(input?: string): string {
  if (!input) return "";
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;

  return d.toLocaleDateString("es-PR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default async function NoticiaPage({ params }: PageProps) {
  const { slug } = await params;

  // Fetch the article from Sanity
  let noticia: NoticiaDetalle;
  try {
    noticia = await sanityClient.fetch(NOTICIA_QUERY, { slug });
  } catch (error) {
    console.error("Error fetching noticia:", error);
    notFound();
  }

  // If no article found, show 404
  if (!noticia) {
    notFound();
  }

  const imageUrl =
    noticia.imagen?.asset?.url || "/images/noticias/placeholder-1.jpg";

  return (
    <main className="bg-white">
      {/* Breadcrumb / Back Navigation */}
      <section className="pt-10">
        <div className="section">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            aria-label="Volver a la página de noticias"
          >
            <span aria-hidden="true">←</span>
            Volver a Noticias
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="pt-8 pb-6">
        <div className="section">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-0">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-zinc-900">
              {noticia.titulo}
            </h1>

            <time
              className="mt-4 block text-sm md:text-base text-emerald-700 font-medium"
              dateTime={noticia.fecha}
            >
              {formatDateSpanish(noticia.fecha)}
            </time>

            {noticia.resumen && (
              <p className="mt-4 text-zinc-600 leading-relaxed">
                {noticia.resumen}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {imageUrl && (
        <section className="pb-10">
          <div className="section">
            <div className="relative w-full overflow-hidden border-zinc-200">
              <div className="relative h-64 md:h-112 w-full">
                <Image
                  src={imageUrl}
                  alt={noticia.titulo}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Body */}
      <section className="pb-20">
        <div className="section">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-0">
            <article className="prose prose-lg max-w-none">
              {typeof noticia.contenido === 'string' ? (
                <div
                  className="text-base md:text-lg leading-relaxed text-zinc-700 whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: noticia.contenido }}
                />
              ) : (
                <div className="text-base md:text-lg leading-relaxed text-zinc-700 whitespace-pre-wrap">
                  {Array.isArray(noticia.contenido) 
                    ? noticia.contenido.map((block: any, idx: number) => (
                        <p key={idx} className="mb-4">
                          {block.children?.map((child: any) => child.text).join('') || ''}
                        </p>
                      ))
                    : null}
                </div>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </main>
  );
}