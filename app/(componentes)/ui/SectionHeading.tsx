import { memo } from "react";

// ============================================================================
// TYPES
// ============================================================================
type SectionHeadingProps = {
  kicker: string;
  title: string;
  align?: "left" | "center" | "right";
  className?: string; // Override wrapper className
  kickerClassName?: string; // Override kicker className
  titleClassName?: string; // Override title className
  spacing?: "sm" | "md" | "lg"; // Spacing variants
};

// ============================================================================
// SECTION HEADING COMPONENT
// ============================================================================
function SectionHeadingComponent({
  kicker,
  title,
  align = "center",
  className,
  kickerClassName = "text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-3",
  titleClassName = "text-3xl md:text-4xl font-bold text-zinc-900",
  spacing = "md",
}: SectionHeadingProps) {
  // Alignment classes
  const alignClass =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  // Spacing classes
  const spacingClass =
    spacing === "sm" ? "mb-6" : spacing === "lg" ? "mb-16" : "mb-12";

  const finalClassName = className ?? `${alignClass} ${spacingClass}`;

  return (
    <div className={finalClassName}>
      <p className={kickerClassName}>{kicker}</p>
      <h2 className={titleClassName}>{title}</h2>
    </div>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const SectionHeading = memo(SectionHeadingComponent);
SectionHeading.displayName = "SectionHeading";

export default SectionHeading;