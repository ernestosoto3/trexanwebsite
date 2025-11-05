import Seccion from "../(componentes)/Seccion";
export default function IndustriesPage() {
  return (
    <main>
      <Seccion titulo="Industries We Serve" subtitulo="Grid icónico por verticales.">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {["Electrónica", "Automotriz", "Salud", "Telecom", "Banca", "Sector público"].map((v) => (
            <div key={v} className="rounded-2xl p-6 ring-1 ring-foreground/10">
              <div className="text-lg font-medium">{v}</div>
              <div className="mt-1 text-sm text-foreground/70">Descripción breve.</div>
            </div>
          ))}
        </div>
      </Seccion>
    </main>
  );
}