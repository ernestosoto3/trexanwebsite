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
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-[--color-primary] border border-[--color-primary] hover:bg-[#15803d] focus-visible:ring-[--color-primary] focus-visible:ring-offset-white",
    outline:
      "border border-white text-white hover:bg-white hover:text-[--color-primary] focus-visible:ring-white focus-visible:ring-offset-[--color-primary]",
    orange:
      "bg-[--color-secondary] text-white border border-[--color-secondary] hover:bg-[#c2410c] focus-visible:ring-[--color-secondary] focus-visible:ring-offset-white",
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
