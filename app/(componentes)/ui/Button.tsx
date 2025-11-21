import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "orange";
  className?: string;
};

export default function Button({ 
  href, 
  children, 
  variant = "primary",
  className = "" 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-[--color-primary] text-white hover:bg-[#15803d] hover:scale-105",
    outline: "bg-white text-[--color-dark] ring-2 ring-white hover:bg-white/20 hover:text-white",
    orange: "bg-[--color-secondary] text-white hover:bg-[#c2410c] hover:scale-105"
  };

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}