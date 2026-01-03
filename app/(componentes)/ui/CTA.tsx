import { memo } from "react";
import Image from "next/image";
import Button from "./Button";

// ============================================================================
// CONSTANTS
// ============================================================================
const HERO_IMAGE = "/images/industrias/GRUPO TREXAN-31.jpg";

// ============================================================================
// CTA COMPONENT - Call to Action Section
// ============================================================================
function CTAComponent() {
  return (
    <section className="relative">
      <div className="relative min-h-88 md:min-h-112 overflow-hidden">
        {/* Background Image */}
        <Image
          src={HERO_IMAGE}
          alt="Paisaje que representa un futuro más limpio"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
          priority={false}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="section">
            {/* White Card */}
            <div className="mx-auto bg-white text-center shadow-xl px-5 py-8 md:px-10 md:py-12 max-w-sm md:max-w-3xl">
              {/* Eyebrow */}
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700">
                Da el siguiente paso
              </p>

              {/* Headline */}
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-zinc-900">
                ¿Listos para trabajar con trazabilidad y seguridad?
              </h2>

              {/* Description - Hidden on mobile */}
              <p className="hidden md:block mt-4 text-base text-zinc-600 leading-relaxed">
                Gestión certificada, trazabilidad total y cumplimiento normativo
                en un solo lugar.
              </p>

              {/* CTA Button */}
              <div className="mt-6 md:mt-8">
                <Button
                  href="/contacto"
                  variant="primary"
                  className="bg-emerald-700 text-white hover:bg-emerald-800 border-emerald-700"
                >
                  Solicitar Cotización
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const CTA = memo(CTAComponent);
CTA.displayName = "CTA";

export default CTA;