import Seccion from "../(componentes)/Seccion";

const sectores = [
  {
    nombre: "Instituciones Públicas",
    bullets: [
      "Cumplimiento SEMARNAT y SEGAM; reducción de riesgo de sanciones.",
      "Baja certificada de activos y manifiestos oficiales de destrucción."
    ]
  },
  {
    nombre: "Empresas Privadas",
    bullets: [
      "Retiro seguro y documentado de equipos obsoletos y scrap.",
      "Confidencialidad y cumplimiento fiscal con destrucción certificada."
    ]
  },
  {
    nombre: "Instituciones Educativas",
    bullets: [
      "Programas de acopio y donación tecnológica con educación ambiental.",
      "Disposición responsable de equipos académicos/informáticos."
    ]
  },
  {
    nombre: "Fundaciones y Organizaciones Sociales",
    bullets: [
      "Campañas de recolección comunitaria y participación ciudadana.",
      "Certificados de contribución ambiental para su gestión social."
    ]
  },
  {
    nombre: "Gobiernos Municipales y Estatales",
    bullets: [
      "Planes locales de manejo de RAEE conforme a lineamientos oficiales.",
      "Asesoría técnica para puntos de acopio, transporte y destino final."
    ]
  },
  {
    nombre: "Movimientos Sociales y Ambientales",
    bullets: [
      "Iniciativas de sensibilización y reciclaje inclusivo.",
      "Formalización e integración de recolectores en cadenas de valor."
    ]
  }
];

export default function IndustriasPage() {
  return (
    <Seccion titulo="Sectores que Atendemos" subtitulo="Soluciones adaptadas por vertical">
      <div className="grid md:grid-cols-2 gap-6">
        {sectores.map((s) => (
          <div key={s.nombre} className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <h3 className="text-lg font-semibold">{s.nombre}</h3>
            <ul className="mt-3 list-disc ms-5 space-y-1">
              {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Seccion>
  );
}
