import Seccion from "./Seccion";

const servicios = [
  {
    titulo: "Recolección y Acopio de RAEE",
    bullets: [
      "Gestión integral del acopio, clasificación y recolección.",
      "Recepción de equipos obsoletos bajo control documental.",
    ],
  },
  {
    titulo: "Transporte Ecológico",
    bullets: [
      "Traslado seguro con unidades autorizadas y rutas optimizadas.",
      "Vehículos certificados para reducir emisiones.",
      "Cumplimiento de normas para residuos no peligrosos.",
    ],
  },
  {
    titulo: "Reciclaje y Tratamiento",
    bullets: [
      "Desmantelamiento, trituración y molienda de componentes.",
      "Producción de concentrados metálicos para fundición/refinación.",
      "Operación certificada R2v3, ISO 14001 e ISO 45001.",
    ],
  },
  {
    titulo: "Certificación y Cumplimiento",
    bullets: [
      "Manifiestos oficiales de Recolección, Transporte y Disposición Final.",
      "Certificados de Destrucción y Constancias de Economía Circular.",
      "Cumplimiento integral ambiental y fiscal.",
    ],
  },
  {
    titulo: "Asesoría y Soporte",
    bullets: [
      "Diagnóstico personalizado de gestión de RAEE.",
      "Capacitación y acompañamiento en cumplimiento y auditorías.",
      "Soporte técnico en acopio, clasificación y valorización.",
    ],
  },
];

export default function BloquesAprendeMas() {
  return (
    <div className="justify-items-center z-50"> {/* Wrapper with high z-index */}
      <Seccion>
        <div className="grid md:grid-cols-2 gap-2 ">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="bg-white shadow-sm border border-zinc-200 overflow-hidden flex flex-col"
            >
              <div className="p-5 flex flex-col flex-1 bg-white">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {s.titulo}
                </h3>

                <ul className="mt-3 list-disc ms-5 space-y-1 text-sm md:text-base">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>


              </div>
            </div>
          ))}
        </div>
      </Seccion>
    </div>
  );
}