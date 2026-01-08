import Link from "next/link";
import type { ReactNode } from "react";
import { memo } from "react";

// ============================================================================
// TYPES
// ============================================================================
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "orange" | "link" | "emerald-inverted";
  className?: string;
  disabled?: boolean;
  external?: boolean; // For external links (opens in new tab)
  ariaLabel?: string;
};

// ============================================================================
// BUTTON COMPONENT - Memoized for performance
// ============================================================================
function ButtonComponent({
  href,
  children,
  variant = "primary",
  className = "",
  disabled = false,
  external = false,
  ariaLabel,
}: ButtonProps) {
  // Base classes for all buttons
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  // Variant-specific classes
  const variantClasses = {
    /** Emerald primary → white on hover */
    primary:
      "bg-[--color-primary] text-white border border-[--color-primary] hover:bg-emerald-800 hover:text-white hover:border-emerald-800 focus-visible:ring-[--color-primary] focus-visible:ring-offset-white",
    
    /** White outline → white fill */
    outline:
      "border border-white text-white hover:bg-white hover:text-black focus-visible:ring-white focus-visible:ring-offset-[--color-primary]",
    
    /** Orange → white on hover */
    orange:
      "bg-[--color-secondary] text-white border border-[--color-secondary] hover:bg-white hover:text-black hover:border-white focus-visible:ring-[--color-secondary] focus-visible:ring-offset-white",
    
    /** Text link style (no background/border) */
    link: 
      "text-emerald-700 hover:text-emerald-800 px-0 py-0 gap-2 focus-visible:ring-emerald-700",
    
    /** Emerald with transparent border → white fill with black text on hover */
    "emerald-inverted":
      "bg-emerald-700 text-white border border-emerald-300/70 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white focus-visible:ring-emerald-300 focus-visible:ring-offset-emerald-700",
  } as const;

  // Disabled state classes
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  // Combined classes
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`.trim();

  // External links (open in new tab with security)
  if (external) {
    return (
      <a
        href={href}
        className={finalClasses}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  // Internal links (Next.js Link)
  return (
    <Link
      href={href}
      className={finalClasses}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      {...(disabled && { tabIndex: -1 })}
    >
      {children}
    </Link>
  );
}

// ============================================================================
// MEMOIZED EXPORT - Prevents unnecessary re-renders
// ============================================================================
const Button = memo(ButtonComponent);
Button.displayName = "Button";

export default Button;