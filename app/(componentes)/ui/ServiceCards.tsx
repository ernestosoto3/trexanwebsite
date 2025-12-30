import Image from "next/image";
import Link from "next/link";
import Seccion from "./Seccion";

interface Service {
  nombre: string;
  descripcion: string;
  href: string;
  icon: string;
}

const SERVICES: readonly Service[] = [
  {
    nombre: "Recolección y Acopio",
    descripcion:
      "Gestionamos recolección nacional y acopio seguro de residuos electrónicos para cualquier volumen, con trazabilidad documental desde el primer contacto y protocolos certificados.",
    href: "/contacto",
    icon: "/images/iconos/dumpstericon.webp",
  },
  {
    nombre: "Destruccion de Datos",
    descripcion:
      "Implementamos destrucción segura de datos con métodos certificados que garantizan eliminación irreversible y generan evidencia documental para auditorías y cumplimiento normativo.",
    href: "/contacto",
    icon: "/images/iconos/furnaceicon.jpg",
  },
  {
    nombre: "Transporte Ecológico",
    descripcion:
      "Operamos transporte ecológico certificado con rutas optimizadas, permisos SEMARNAT y rastreo satelital para una cadena logística transparente y segura de residuos electrónicos.",
    href: "/contacto",
    icon: "/images/iconos/truckicon-3.jpg",
  },
  {
    nombre: "Certificación",
    descripcion:
      "Emitimos certificados de destrucción y documentación completa respaldada por normas R2v3 e ISO para cumplimiento ante autoridades y demostrar manejo responsable de RAEE.",
    href: "/certificaciones",
    icon: "/images/iconos/certificateicon.jpeg",
  },
] as const;

export default function BloqueAprendeMas() {
  return (
    <div className="relative z-50 py-15">
      <Seccion>
        <div className="grid md:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.nombre}
              className="relative bg-white shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-orange-600 z-10" />
              
              <div className="h-32 w-full bg-white relative p-5">
                <div className="absolute top-4 left-4">
                  <Image
                    src={service.icon}
                    alt={`${service.nombre} icon`}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 bg-white">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {service.nombre}
                </h3>
                <p className="text-zinc-600 mt-1 flex-1">{service.descripcion}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-emerald-600 font-semibold hover:underline mt-3"
                >
                  Conocer más →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Seccion>
    </div>
  );
}