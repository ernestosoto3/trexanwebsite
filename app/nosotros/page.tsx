import Seccion from "../(componentes)/ui/Seccion";

const servicios = [
  {
    titulo: "Recolección y Acopio de RAEE",
    bullets: [
      "Gestión integral del acopio, clasificación y recolección de residuos electrónicos.",
      "Recepción de equipos obsoletos y scrap bajo control documental.",
    ],
  },
  {
    titulo: "Transporte Ecológico",
    bullets: [
      "Traslado seguro y regulado con unidades autorizadas.",
      "Cumplimiento de normas para residuos industriales no peligrosos.",
      "Rutas optimizadas y vehículos certificados para reducir emisiones.",
    ],
  },
  {
    titulo: "Reciclaje y Tratamiento de RAEE",
    bullets: [
      "Desmantelamiento, trituración y molienda de componentes.",
      "Producción de concentrados metálicos para fundición/refinación.",
      "Operación certificada R2v3, ISO 14001 e ISO 45001.",
    ],
  },
  {
    titulo: "Manifiestos y Certificación Ambiental",
    bullets: [
      "Manifiestos de Recolección, Transporte, Destrucción y Disposición Final (SEMARNAT).",
      "Certificados de Destrucción y Constancias de Economía Circular.",
      "Cumplimiento ambiental y fiscal (SAT, SEMARNAT, SEGAM).",
    ],
  },
  {
    titulo: "Asesoría y Soporte Técnico",
    bullets: [
      "Diagnóstico personalizado de gestión responsable de RAEE.",
      "Capacitación y acompañamiento en cumplimiento y auditorías.",
      "Soporte en acopio, clasificación y valorización de materiales.",
    ],
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* BLOQUE QUIÉNES SOMOS */}
      <Seccion
        titulo="Quiénes Somos"
        subtitulo="Expertos en e-waste con décadas de conocimiento técnico y operativo."
      >
        <div className="prose prose-neutral max-w-3xl">
          <p>
            Recibásicos es una empresa mexicana especializada en el acopio,
            recolección, almacenamiento, desmontaje y tratamiento de Residuos
            de Aparatos Eléctricos y Electrónicos (RAEE). Como parte de Trexan
            Recycling Group, operamos la etapa de procesos fríos dentro de la
            cadena de reciclaje electrónico, preparando y clasificando los
            materiales antes de su envío a la división de procesos calientes EWR,
             donde se realiza la refinación final de metales.
          </p>
          <p>
            Contamos con un grupo de especialistas con más de 40 años de
            experiencia acumulada en el reciclaje y la transformación de
            metales, desde la operación de plantas en México hasta proyectos
            internacionales de valorización, contribuyendo activamente a la
            economía circular en México y Latinoamérica.
          </p>
        </div>
      </Seccion>

      {/* BLOQUE CÓMO OPERAMOS (ANTES /OPERACIONES) */}
      <Seccion
        titulo="Cómo Operamos"
        subtitulo="Preparamos residuos electrónicos para un reciclaje seguro, trazable y sostenible."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="rounded-2xl p-6 ring-1 ring-foreground/10"
            >
              <h3 className="text-lg font-semibold">{s.titulo}</h3>
              <ul className="mt-3 list-disc ms-5 space-y-1">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Seccion>
    </>
  );
}
