import Seccion from "../(componentes)/Seccion";

export const revalidate = 3600;

export default function AboutPage() {
  return (
    <main>
      <Seccion titulo="Nosotros" subtitulo="Historia, visión y diferenciadores.">
        <p className="text-foreground/70">Contenido de presentación de la empresa.</p>
      </Seccion>
    </main>
  );
}