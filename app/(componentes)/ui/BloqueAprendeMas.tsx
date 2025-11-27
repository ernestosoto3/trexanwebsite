import Seccion from "./Seccion";
import Link from "next/link";

const sectores = [
  {
    nombre: "Recolección y Acopio",
    descripcion:
      "Recolección de equipos obsoletos, acopio seguro para cualquier volumen.",
    href: "/contacto",
    icon: "./images/iconos/dumpstericon.jpg.webp" // Path to your icon image
  },
  {
    nombre: "Destruccion de Datos",
    descripcion:
      "Destrucción segura de datos con certificación para protección de información.",
    href: "/contacto",
    icon: "./images/iconos/furnaceicon.jpg" // Path to your icon image
  },
  {
    nombre: "Transporte Ecológico",
    descripcion:
      "Transporte ecologicos certificados para una cadena logística transparente.",
    href: "/contacto",
    icon: "./images/iconos/truckicon-3.jpg" // Path to your icon image
  },
  {
    nombre: "Certificación",
    descripcion:
      "Certificados de destrucción y documentacion para auditorías y cumplimiento.",
    href: "/contacto",
    icon: "./images/iconos/certifcateicon.png.jpeg" // Path to your icon image
  },
];

export default function BloquesAprendeMas() {
  return (
    <div className="relative z-50"> {/* Wrapper with high z-index */}
      <Seccion>
        <div className="grid md:grid-cols-4 gap-6">
          {sectores.map((s) => (
            <div
              key={s.nombre}
              className="bg-white shadow-sm border border-zinc-200 overflow-hidden flex flex-col"
            >
              <div className="h-32 w-full bg-white relative p-5">
                <div className="absolute top-4 left-4">
                  <img 
                    src={s.icon} 
                    alt={`${s.nombre} icon`}
                    className="w-16 h-16 object-contain" 
                  />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 bg-white">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {s.nombre}
                </h3>

                <p className="text-zinc-600 mt-1 flex-1">{s.descripcion}</p>

                <div className="mt-3">
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
    </div>
  );
}