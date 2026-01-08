import { memo } from "react";
import type { ReactNode } from "react";

// ============================================================================
// TYPES
// ============================================================================
type IntroTextProps = {
  children: ReactNode;
  heading?: string; // Optional heading above the text
  className?: string; // Override section className
  textClassName?: string; // Override text className
  maxWidth?: "4xl" | "5xl" | "6xl"; // Content width variants
};

// ============================================================================
// INTRO TEXT COMPONENT
// ============================================================================
function IntroTextComponent({
  children,
  heading,
  className = "bg-zinc-50 py-6 md:py-12",
  textClassName = "text-center text-xl md:text-2xl leading-relaxed text-zinc-600",
  maxWidth = "6xl",
}: IntroTextProps) {
  const maxWidthClass =
    maxWidth === "4xl"
      ? "max-w-4xl"
      : maxWidth === "5xl"
      ? "max-w-5xl"
      : "max-w-6xl";

  return (
    <section className={className}>
      <div className="section">
        <div className={`${maxWidthClass} mx-auto space-y-4`}>
          {heading && (
            <h2 className="text-center text-3xl md:text-4xl font-bold text-zinc-900">
              {heading}
            </h2>
          )}
          <p className={`${textClassName} ${maxWidthClass} mx-auto`}>
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const IntroText = memo(IntroTextComponent);
IntroText.displayName = "IntroText";

export default IntroText;