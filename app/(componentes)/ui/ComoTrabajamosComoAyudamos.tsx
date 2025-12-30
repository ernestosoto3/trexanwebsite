// components/home/HowWeWorkHelpSection.tsx
import Button from "./Button"; // cambia la ruta si la tienes distinta

function ComoTrabajamosColumn() {
  return (
    <article className="flex flex-col gap-6">
      {/* Encabezado */}
      <div className="border-t border-emerald-300/70 pt-4">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
          Cómo trabajamos
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
          Nuestro equipo marca la diferencia
        </h2>
      </div>

      {/* Texto */}
      <p className="text-sm md:text-base text-white/80">
        Nuestro equipo combina disciplina industrial con conocimiento profundo en
         la gestión integral de residuos electrónicos. Trabajamos desde la recepción 
         y clasificación hasta la refinación de metales, integrando procesos claros, 
         trazables y auditables en cada etapa.
      </p>
      <p className="text-sm md:text-base text-white/80">
        Tratamos cada relación como una alianza estratégica:
      </p>
      <ul className="text-sm md:text-base text-white/80">
        <li>• Diseñamos rutas de retiro seguras y alineamos la operación con tus metas de cumplimiento y sostenibilidad.</li>
        <li>• Operamos con transparencia, generando evidencia fotográfica y documental respaldada por certificaciones como R2v3, ISO 14001 e ISO 45001.</li>
      </ul>

      {/* Imagen */}
      <div className="relative overflow-hidden border border-white/15">
        <img
          src="/images/industrias/GRUPO TREXAN-36-1.jpg"
          alt="Línea de procesamiento"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" aria-hidden />
      </div>

      {/* Texto adicional */}
      <p className="text-sm md:text-base text-white/80">
        Operamos con transparencia, evidencia fotográfica y certificaciones como
        R2v3, ISO 14001 e ISO 45001, para que cada carga de RAEE quede respaldada
        ante auditorías internas o externas.
      </p>

      {/* Botón full width */}
      <div className="mt-auto pt-2">
        <Button
          href="/nosotros"
          variant="primary"
          className="w-full border-emerald-300/70 text-white bg-emerald-700 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white rounded-none"
        >
          Conoce cómo trabajamos →
        </Button>
      </div>
    </article>
  );
}

function ComoAyudamosColumn() {
  return (
    <article className="flex flex-col gap-6">
      {/* Encabezado */}
      <div className="border-t border-emerald-300/70 pt-4">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
          Cómo ayudamos
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
          Convertimos residuos en valor trazable
        </h2>
      </div>

      {/* Texto */}
      <p className="text-sm md:text-base text-white/80">
        Reducimos el impacto ambiental con procesos documentados: recepción y 
        clasificación detallada, desmantelamiento controlado y rutas con manifiestos 
        certificados. Todo pensado para simplificar y blindar tus auditorías.
      </p>
      <p className="text-sm md:text-base text-white/80">
        Ya sea que operes una planta industrial, un corporativo o una red de sucursales, 
        adaptamos la logística para minimizar interrupciones y maximizar la recuperación 
        de materiales valiosos. Nuestras cuadrillas especializadas mantienen siempre 
        altos estándares de seguridad y control documental en cualquier sitio.
      </p>

      {/* Imagen */}
      <div className="relative overflow-hidden border border-white/15">
        <img
          src="/images/industrias/GRUPO TREXAN-73.jpg"
          alt="Patio de reciclaje"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" aria-hidden />
      </div>

      {/* Texto adicional */}
      <p className="text-sm md:text-base text-white/80">
        Nuestras cuadrillas especializadas pueden intervenir en sitios
        industriales, oficinas y centros educativos, manteniendo siempre
        estándares de seguridad y control documental.
      </p>

      {/* Botón full width */}
      <div className="mt-auto pt-2">
        <Button
          href="/contacto"
          variant="primary"
          className="w-full border-emerald-300/70 text-white bg-emerald-700 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white rounded-none"
        >
          Hablar con un asesor →
        </Button>
      </div>
    </article>
  );
}

export default function HowWeWorkHelpSection() {
  return (
    <section className="py-8 bg-emerald-700 text-white">
      <div className="section">
        <div className="grid lg:grid-cols-2 gap-12">
          <ComoTrabajamosColumn />
          <ComoAyudamosColumn />
        </div>
      </div>
    </section>
  );
}
