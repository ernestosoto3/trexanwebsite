import { memo } from "react";
import Seccion from "./Seccion";

// ============================================================================
// TYPES
// ============================================================================
type Service = {
  id: string; // Unique identifier for React keys
  titulo: string;
  bullets: string[];
};

// ============================================================================
// DATA - Extracted outside component for better performance
// ============================================================================
const SERVICIOS: Service[] = [
  {
    id: "recoleccion-acopio",
    titulo: "Recolección y Acopio de RAEE",
    bullets: [
      "Gestión integral del acopio, clasificación y recolección.",
      "Recepción de equipos obsoletos bajo control documental.",
    ],
  },
  {
    id: "transporte-ecologico",
    titulo: "Transporte Ecológico",
    bullets: [
      "Traslado seguro con unidades autorizadas y rutas optimizadas.",
      "Vehículos certificados para reducir emisiones.",
      "Cumplimiento de normas para residuos no peligrosos.",
    ],
  },
  {
    id: "reciclaje-tratamiento",
    titulo: "Reciclaje y Tratamiento",
    bullets: [
      "Desmantelamiento, trituración y molienda de componentes.",
      "Producción de concentrados metálicos para fundición/refinación.",
      "Operación certificada R2v3, ISO 14001 e ISO 45001.",
    ],
  },
  {
    id: "certificacion-cumplimiento",
    titulo: "Certificación y Cumplimiento",
    bullets: [
      "Manifiestos oficiales de Recolección, Transporte y Disposición Final.",
      "Certificados de Destrucción y Constancias de Economía Circular.",
      "Cumplimiento integral ambiental y fiscal.",
    ],
  },
  {
    id: "asesoria-soporte",
    titulo: "Asesoría y Soporte",
    bullets: [
      "Diagnóstico personalizado de gestión de RAEE.",
      "Capacitación y acompañamiento en cumplimiento y auditorías.",
      "Soporte técnico en acopio, clasificación y valorización.",
    ],
  },
] as const;

// ============================================================================
// SERVICE CARD COMPONENT - Individual card (could be extracted)
// ============================================================================
type ServiceCardProps = {
  service: Service;
};

const ServiceCard = memo(({ service }: ServiceCardProps) => (
  <article className="bg-white shadow-sm border border-zinc-200 overflow-hidden flex flex-col">
    <div className="p-5 flex flex-col flex-1 bg-white">
      <h3 className="text-lg font-semibold text-zinc-900">
        {service.titulo}
      </h3>
      <ul className="mt-3 list-disc ml-5 space-y-1 text-sm md:text-base text-zinc-700">
        {service.bullets.map((bullet, index) => (
          <li key={`${service.id}-bullet-${index}`}>{bullet}</li>
        ))}
      </ul>
    </div>
  </article>
));

ServiceCard.displayName = "ServiceCard";

// ============================================================================
// MAIN COMPONENT - Como Operamos Section
// ============================================================================
function ComoOperamosComponent() {
  return (
    <Seccion>
      <div className="grid md:grid-cols-2 gap-2">
        {SERVICIOS.map((servicio) => (
          <ServiceCard key={servicio.id} service={servicio} />
        ))}
      </div>
    </Seccion>
  );
}

// ============================================================================
// MEMOIZED EXPORT - Prevents unnecessary re-renders
// ============================================================================
const ComoOperamos = memo(ComoOperamosComponent);
ComoOperamos.displayName = "ComoOperamos";

export default ComoOperamos;