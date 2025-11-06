import Seccion from "../(componentes)/Seccion";

const kpis = [
  "RAEE gestionado (kg o toneladas por mes).",
  "Tasa de recuperación de materiales (> 90% objetivo).",
  "Emisiones de CO₂ evitadas frente a materiales nuevos.",
  "Volumen de metales recuperados (cobre, aluminio, metales preciosos).",
  "Empleos formales generados en procesos certificados.",
  "Cumplimiento ambiental del 100% con manifiestos y permisos."
];

export default function SostenibilidadPage() {
  return (
    <Seccion titulo="Sostenibilidad" subtitulo="Economía circular con indicadores verificables">
      <div className="prose prose-neutral max-w-3xl">
        <p>
          Trexan Recycling Group impulsa un modelo de economía circular que transforma los residuos
          electrónicos en recursos de valor, reduciendo el impacto ambiental y fomentando el
          desarrollo sostenible en México y Latinoamérica…
        </p>
      </div>

      <div className="mt-6 rounded-2xl p-6 ring-1 ring-foreground/10">
        <h3 className="text-lg font-semibold">Indicadores (GHG Protocol, ISO 14064, GRI)</h3>
        <ul className="mt-3 list-disc ms-5 space-y-1">
          {kpis.map((k, i) => <li key={i}>{k}</li>)}
        </ul>
      </div>
    </Seccion>
  );
}
