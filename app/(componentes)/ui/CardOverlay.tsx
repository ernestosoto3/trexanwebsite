import Image from "next/image";
import { memo } from "react";

// ============================================================================
// TYPES
// ============================================================================
type Props = {
  title: string;
  imageSrc?: string;
  className?: string;
  priority?: boolean; // For above-fold images (LCP optimization)
  sizes?: string; // Responsive image sizes
};

// ============================================================================
// CARD OVERLAY COMPONENT
// ============================================================================
/**
 * Displays an image card with a title overlay at the bottom.
 * Optimized for performance with proper Next.js Image handling.
 */
function CardOverlayComponent({
  title,
  imageSrc,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: Props) {
  const baseClasses = `group relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-sm ${className}`;

  return (
    <article className={baseClasses}>
      {/* Background image or placeholder */}
      <div className="relative h-56 w-full">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            priority={priority}
            quality={85}
          />
        ) : (
          <div className="h-full w-full bg-neutral-200 dark:bg-neutral-700" />
        )}
      </div>

      {/* Bottom overlay title */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
        <div className="rounded-xl bg-black/50 px-4 py-2 backdrop-blur-sm">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </article>
  );
}

// ============================================================================
// MEMOIZED EXPORT - Prevents unnecessary re-renders
// ============================================================================
const CardOverlay = memo(CardOverlayComponent);
CardOverlay.displayName = "CardOverlay";

export default CardOverlay;