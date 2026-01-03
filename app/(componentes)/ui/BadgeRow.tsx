import { memo } from "react";
import Image from "next/image";

// ============================================================================
// TYPES
// ============================================================================
export interface Badge {
  id?: string; // Optional unique ID for better keys
  src: string;
  alt: string;
  width?: number; // Optional custom width
  height?: number; // Optional custom height
}

interface BadgeRowProps {
  items: Badge[];
  size?: "sm" | "md" | "lg"; // Size variants
  className?: string; // Override wrapper className
}

// ============================================================================
// BADGE IMAGE COMPONENT - Individual badge (memoized)
// ============================================================================
type BadgeImageProps = {
  badge: Badge;
  size: "sm" | "md" | "lg";
};

const BadgeImage = memo(({ badge, size }: BadgeImageProps) => {
  // Size configurations
  const sizeConfig = {
    sm: { width: 40, height: 40, className: "h-8 md:h-10 w-auto" },
    md: { width: 48, height: 48, className: "h-10 md:h-12 w-auto" },
    lg: { width: 64, height: 64, className: "h-12 md:h-16 w-auto" },
  };

  const config = sizeConfig[size];
  const width = badge.width ?? config.width;
  const height = badge.height ?? config.height;

  return (
    <Image
      src={badge.src}
      alt={badge.alt}
      width={width}
      height={height}
      className={`${config.className} object-contain`}
      loading="lazy"
      quality={90} // High quality for logos
    />
  );
});

BadgeImage.displayName = "BadgeImage";

// ============================================================================
// BADGE ROW COMPONENT
// ============================================================================
function BadgeRowComponent({
  items,
  size = "md",
  className = "flex flex-wrap items-center gap-6 justify-center",
}: BadgeRowProps) {
  return (
    <div className={className}>
      {items.map((badge, index) => (
        <BadgeImage
          key={badge.id ?? badge.src ?? `badge-${index}`}
          badge={badge}
          size={size}
        />
      ))}
    </div>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const BadgeRow = memo(BadgeRowComponent);
BadgeRow.displayName = "BadgeRow";

export default BadgeRow;