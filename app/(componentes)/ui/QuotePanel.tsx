import { memo } from "react";

// ============================================================================
// TYPES
// ============================================================================
type QuotePanelProps = {
  quote: string;
  author?: string; // Optional author attribution
  role?: string; // Optional author role/title
  variant?: "primary" | "secondary" | "dark"; // Color variants
  className?: string; // Override styles
  showQuoteIcon?: boolean; // Show decorative quote mark
};

// ============================================================================
// QUOTE ICON COMPONENT
// ============================================================================
const QuoteIcon = memo(() => (
  <svg
    className="absolute top-4 left-4 h-8 w-8 opacity-20"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
));

QuoteIcon.displayName = "QuoteIcon";

// ============================================================================
// QUOTE PANEL COMPONENT
// ============================================================================
function QuotePanelComponent({
  quote,
  author,
  role,
  variant = "secondary",
  className,
  showQuoteIcon = true,
}: QuotePanelProps) {
  // Variant styles
  const variantClasses = {
    primary: "bg-emerald-700 text-white",
    secondary: "bg-[--color-secondary] text-white",
    dark: "bg-zinc-900 text-white",
  };

  const baseClasses =
    "relative rounded p-6 md:p-8 shadow-sm overflow-hidden";
  const finalClasses = className ?? `${baseClasses} ${variantClasses[variant]}`;

  return (
    <div className={finalClasses}>
      {/* Decorative Quote Icon */}
      {showQuoteIcon && <QuoteIcon />}

      {/* Quote Text */}
      <blockquote className="relative">
        <p className="text-lg md:text-xl font-medium leading-relaxed">
          "{quote}"
        </p>

        {/* Author Attribution */}
        {author && (
          <footer className="mt-4 text-sm md:text-base opacity-90">
            <cite className="not-italic font-semibold">— {author}</cite>
            {role && <span className="block mt-1 opacity-75">{role}</span>}
          </footer>
        )}
      </blockquote>
    </div>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const QuotePanel = memo(QuotePanelComponent);
QuotePanel.displayName = "QuotePanel";

export default QuotePanel;