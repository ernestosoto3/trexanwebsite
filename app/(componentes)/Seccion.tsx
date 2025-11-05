export default function Seccion({
  id,
  titulo,
  subtitulo,
  children,
}: {
  id?: string;
  titulo?: string;
  subtitulo?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {(titulo || subtitulo) && (
          <header className="mb-8">
            {titulo && <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{titulo}</h2>}
            {subtitulo && <p className="mt-2 text-base/relaxed text-foreground/70">{subtitulo}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
