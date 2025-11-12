export default function Seccion(
  { id, titulo, subtitulo, children }:{
    id?: string; titulo?: string; subtitulo?: string; children: React.ReactNode
  }
){
  return (
    <section id={id} className="section">
      {(titulo || subtitulo) && (
        <header className="mb-8">
          {titulo && <h2 className="text-3xl md:text-4xl font-bold text-[--color-secondary]">{titulo}</h2>}
          {subtitulo && <p className="mt-2 text-base/relaxed text-zinc-600">{subtitulo}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
