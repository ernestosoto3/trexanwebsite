import Seccion from "../(componentes)/ui/Seccion";

const kpis = [
  "RAEE gestionado 700T al mes.",
  "Tasa de recuperación de materiales (> 90% objetivo).",
  "Emisiones de CO₂ evitadas frente a materiales nuevos.",
  "Volumen de metales recuperados (cobre, aluminio, metales preciosos).",
  "Empleos formales generados en procesos certificados.",
  "Cumplimiento ambiental del 100% con manifiestos y permisos."
];

export default function SostenibilidadPage() {
  return (
    <Seccion titulo="Sostenibilidad" subtitulo="Economía circular con indicadores verificables">
      
      {/* --- BLOQUE DE TEXTO PRINCIPAL --- */}
      <div className="prose prose-neutral max-w-3xl">
        <p>
          Trexan Recycling Group impulsa un modelo de economía circular que transforma los residuos
          electrónicos en recursos de valor, reduciendo el impacto ambiental y fomentando el
          desarrollo sostenible en México y Latinoamérica…
        </p>
      </div>

      {/* --- BLOQUE DE INDICADORES (GHG, ISO, GRI) --- */}
      <div className="mt-10 rounded-2xl p-6 ring-1 ring-foreground/10">
        <h3 className="text-lg font-semibold">Indicadores (GHG Protocol, ISO 14064, GRI)</h3>
        <ul className="mt-3 list-disc ms-5 space-y-1">
          {kpis.map((k, i) => <li key={i}>{k}</li>)}
        </ul>
      </div>

      {/* --- BLOQUE CENTRADO DE REPORTES DE SOSTENIBILIDAD --- */}
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-2xl p-6 rounded-2xl border border-zinc-300 bg-zinc-50 text-center">
          
          <h3 className="text-xl font-semibold text-zinc-900">
            Reportes de Sostenibilidad
          </h3>

          <p className="mt-2 text-zinc-600">
            Próximamente habilitaremos un repositorio con nuestros reportes anuales,
            métricas ambientales, indicadores de circularidad y demás documentos
            relacionados con nuestro impacto ambiental.
          </p>

          <div className="mt-4 p-6 rounded-xl bg-white border border-dashed border-zinc-400">
            <p className="font-medium">Área reservada para documentos</p>
            <p className="text-sm mt-1 text-zinc-500">
              (Aquí aparecerán los PDFs oficiales próximamente)
            </p>
          </div>

        </div>
      </div>

    </Seccion>
  );
}
