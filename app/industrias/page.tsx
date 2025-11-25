import Seccion from "../(componentes)/ui/Seccion";
import Link from "next/link";

const sectores = [
  {
    nombre: "Instituciones Públicas",
    descripcion:
      "Cumplimiento SEMARNAT y SEGAM, reducción de sanciones y manejo certificado de activos.",
    img: "/images/industrias/publico.jpg",
    href: "/contacto",
  },
  {
    nombre: "Empresas Privadas",
    descripcion:
      "Retiro seguro de scrap y equipo obsoleto con confidencialidad y destrucción certificada.",
    img: "/images/industrias/privadas.jpg",
    href: "/contacto",
  },
  {
    nombre: "Instituciones Educativas",
    descripcion:
      "Acopio responsable de tecnología académica, donación, reciclaje y programas de educación ambiental.",
    img: "/images/industrias/educativas.jpg",
    href: "/contacto",
  },
  {
    nombre: "Fundaciones y Organizaciones Sociales",
    descripcion:
      "Campañas de recolección comunitaria, participación ciudadana y certificación ambiental para proyectos sociales.",
    img: "/images/industrias/sociales.jpg",
    href: "/contacto",
  },
  {
    nombre: "Gobiernos Municipales y Estatales",
    descripcion:
      "Planes locales de manejo de RAEE, asesoría técnica y cumplimiento oficial de lineamientos ambientales.",
    img: "/images/industrias/gobierno.jpg",
    href: "/contacto",
  },
  {
    nombre: "Movimientos Sociales y Ambientales",
    descripcion:
      "Iniciativas de reciclaje inclusivo y formalización de recolectores dentro de cadenas de valor.",
    img: "/images/industrias/ambientales.jpg",
    href: "/contacto",
  },
];

export default function IndustriasPage() {
  return (
    <Seccion
      titulo="Sectores que Atendemos"
      subtitulo="Soluciones de reciclaje adaptadas según tu industria"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {sectores.map((s) => (
          <div
            key={s.nombre}
            className="bg-white shadow-sm border border-zinc-200 rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={s.img}
                alt={s.nombre}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-zinc-900">
                {s.nombre}
              </h3>

              <p className="text-zinc-600 mt-2 flex-1">{s.descripcion}</p>

              <div className="mt-4">
                <Link
                  href={s.href}
                  className="inline-flex items-center text-emerald-600 font-semibold hover:underline"
                >
                  Conocer más →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Seccion>
  );
}
