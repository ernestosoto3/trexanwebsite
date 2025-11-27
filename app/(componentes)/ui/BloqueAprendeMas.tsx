import Seccion from "./Seccion";
import Link from "next/link";

const sectores = [
  {
    nombre: "Recolección y Acopio",
    descripcion:
      "Recolección de equipos obsoletos, acopio seguro para cualquier volumen.",
    img: "./images/industrias/GRUPO TREXAN-61.jpg",
    href: "/contacto",
  },
  {
    nombre: "Destruccion de Datos",
    descripcion:
      "",
    img: "./images/industrias/GRUPO TREXAN-74.jpg",
    href: "/contacto",
  },
  {
    nombre: "Transporte Ecológico",
    descripcion:
      "Transporte ecologicos certificados para una cadena logística transparente.",
    img: "./images/industrias/GRUPO TREXAN-68.jpg",
    href: "/contacto",
  },
  {
    nombre: "Certificación",
    descripcion:
      "Certificados de destrucción y documentacion para auditorías y cumplimiento.",
    img: "./images/industrias/GRUPO TREXAN-31.jpg",
    href: "/contacto",
  },
];

export default function BloquesAprendeMas() {
  return (
    <Seccion>
      <div className="grid md:grid-cols-4 gap-6">
        {sectores.map((s) => (
          <div
            key={s.nombre}
            className="bg-white shadow-sm border border-zinc-200 overflow-hidden flex flex-col"
          >
            <div className="h-60 w-full overflow-hidden">
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
