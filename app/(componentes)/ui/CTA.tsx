import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative">
      <div className="relative min-h-[22rem] md:min-h-[28rem] overflow-hidden">
        <Image
          src="/images/industrias/GRUPO TREXAN-31.jpg"
          alt="Paisaje que representa un futuro más limpio"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="section">
            <div className="max-w-3xl mx-auto bg-white px-6 py-10 md:px-10 md:py-12 text-center shadow-xl">

              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700">
                DA EL SIGUIENTE PASO
              </p>

              {/* Headline */}
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-zinc-900">
                ¿Listos para trabajar con trazabilidad y seguridad?
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm md:text-base text-zinc-600 leading-relaxed">
                Gestión certificada, trazabilidad total y cumplimiento normativo
                en un solo lugar.
              </p>

              {/* CTA Button */}
              <Link
                href="/contacto"
                className="mt-8 inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
