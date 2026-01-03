import { memo } from "react";
import type { ReactNode } from "react";

// ============================================================================
// TYPES
// ============================================================================
type SeccionProps = {
  id?: string;
  titulo?: string;
  subtitulo?: string;
  children: ReactNode;
  className?: string; // Override section className
  headerClassName?: string; // Override header className
  tituloClassName?: string; // Override title className
  subtituloClassName?: string; // Override subtitle className
  as?: "section" | "div"; // Allow changing wrapper element
};

// ============================================================================
// SECCION COMPONENT
// ============================================================================
function SeccionComponent({
  id,
  titulo,
  subtitulo,
  children,
  className = "section",
  headerClassName = "mb-8",
  tituloClassName = "text-3xl md:text-4xl font-bold text-[--color-secondary]",
  subtituloClassName = "mt-2 text-base/relaxed text-zinc-600",
  as = "section",
}: SeccionProps) {
  const Wrapper = as;

  return (
    <Wrapper id={id} className={className}>
      {(titulo || subtitulo) && (
        <header className={headerClassName}>
          {titulo && <h2 className={tituloClassName}>{titulo}</h2>}
          {subtitulo && <p className={subtituloClassName}>{subtitulo}</p>}
        </header>
      )}
      {children}
    </Wrapper>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const Seccion = memo(SeccionComponent);
Seccion.displayName = "Seccion";

export default Seccion;