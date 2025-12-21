import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "orange";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantClasses = {
    /** Emerald primary → white on hover */
    primary:
      "bg-[--color-primary] text-white border border-[--color-primary] " +
      "hover:bg-white hover:text-black hover:border-white " +
      "focus-visible:ring-[--color-primary] focus-visible:ring-offset-white",

    /** White outline → white fill */
    outline:
      "border border-white text-white " +
      "hover:bg-white hover:text-black " +
      "focus-visible:ring-white focus-visible:ring-offset-[--color-primary]",

    /** Orange → white on hover */
    orange:
      "bg-[--color-secondary] text-white border border-[--color-secondary] " +
      "hover:bg-white hover:text-black hover:border-white " +
      "focus-visible:ring-[--color-secondary] focus-visible:ring-offset-white",
  } as const;

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
