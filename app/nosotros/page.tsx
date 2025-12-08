import Image from "next/image";
import Seccion from "../(componentes)/ui/Seccion";
import ComoOperamos from "../(componentes)/ui/ComoOperamos";

const heroImage = "/images/industrias/GRUPO TREXAN-74.jpg";
const circularImage = "/images/industrias/GRUPO TREXAN-68.jpg";
const mountainsImage = "/images/industrias/GRUPO TREXAN-31.jpg";

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
      {/* HERO NOSOTROS */}
      <section className="relative isolate overflow-hidden bg-black text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt="Operaciones de reciclaje electrónico de Recibásicos"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

          <div className="section h-[60vh] flex items-center relative">
            <div className="max-w-4xl text-white space-y-6">
              <span className="inline-flex items-center gap-2 bg-white/25 px-4 py-2 text-sm uppercase tracking-wider ">
                <span className="h-2 w-2 rounded-full bg-[--color-primary]" />
                    Trexan Recycling Group
                </span>
                <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                    Liderando la Transformación Circular de los Residuos Electrónicos
                </h1>
            </div>
          </div>        
      </section>

      {/* PEQUEÑA SECCIÓN DE TEXTO (ALIADO ESPECIALIZADO) */}
      <section className="bg-white py-10 md:py-6">
        <div className="section">
          <div className="text-center max-w-6xl mx-auto">
             <p
                className="text-2xl leading-relaxed"
                style={{ color: "#4b5563" }}
              >
                Recibásicos es el aliado especializado en el manejo responsable de
                residuos electrónicos en México, integrando experiencia técnica,
                trazabilidad total y certificaciones internacionales para transformar
                pasivos ambientales en valor recuperado.
              </p>
          </div>
        </div>
      </section>



      {/* SECCIÓN 2x2: NUESTRA TRAYECTORIA + IMÁGENES */}
      <section className="bg-zinc-50 py-7 md:py-8">
        <div className="mx-auto max-w-7xl px-0 md:px-4"> 
          
          {/* FILA 1: TEXTO IZQUIERDA, IMAGEN DERECHA */}
          <div className="grid md:grid-cols-2 md:items-stretch">
            <div className="flex items-center p-6 md:p-8 lg:p-12"> 
              <div className="max-w-lg mx-auto md:mx-0 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
                  Nuestra Trayectoria
                </h2>
                <p className="text-base md:text-lg text-zinc-700">
                  Somos una empresa mexicana especializada en el acopio, recolección, 
                  almacenamiento, desmontaje y tratamiento de Residuos de Aparatos 
                  Eléctricos y Electrónicos (RAEE). 
                </p>
                <p className="mt-4 md:mt-6 text-base md:text-lg text-zinc-700">
                  Como parte de Trexan Recycling Group, operamos la etapa de procesos 
                  fríos, preparando y clasificando los materiales para su envío a la 
                  división EWR, donde se completa la refinación final de metales.
                </p>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-auto md:min-h-[400px] overflow-hidden">
              <Image
                src={circularImage}
                alt="Planta de reciclaje electrónico de Recibásicos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* FILA 2: IMAGEN IZQUIERDA, TEXTO DERECHA */}
          <div className="grid md:grid-cols-2 md:items-stretch">
            <div className="relative w-full h-64 md:h-auto md:min-h-[400px] overflow-hidden order-1 md:order-none">
              <Image
                src={heroImage}
                alt="Operaciones industriales de valorización de metales"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="flex items-center p-6 md:p-8 lg:p-12 order-2 md:order-none">
              <div className="max-w-lg mx-auto md:mx-0 text-center md:text-right">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
                  Experiencia que Respalda
                </h2>
                <p className="text-base md:text-lg text-zinc-700">
                  Contamos con especialistas con más de 40 años de experiencia acumulada 
                  en reciclaje y transformación de metales, desde plantas en México hasta 
                  proyectos internacionales.
                </p>
                <p className="mt-4 md:mt-6 text-base md:text-lg text-zinc-700">
                  Combinamos ingeniería, cumplimiento regulatorio y economía circular 
                  para ofrecer soluciones confiables a industrias que buscan descarbonizar 
                  y desmaterializar su cadena de suministro.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BLOQUE ECONOMÍA CIRCULAR */}
      <Seccion
        titulo="Nuestro Lugar en la Economía Circular"
        subtitulo="Conectamos los residuos electrónicos de hoy con las materias primas que la industria necesitará mañana."
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* <div className="space-y-4">
            <p>
              En Recibásicos intervenimos en el punto crítico donde los residuos
              electrónicos dejan de ser un pasivo y se convierten en oportunidades
              de recuperación de valor. A través de procesos estandarizados,
              seguros y trazables, separamos y preparamos los materiales para su
              reintroducción en cadenas productivas globales.
            </p>
            <p>
              Nuestro modelo reduce la extracción de recursos vírgenes,
              minimiza emisiones asociadas al manejo inadecuado de RAEE y genera
              evidencia documental robusta para auditorías ambientales, de
              cumplimiento y ESG. Cada lote gestionado contribuye a una economía
              circular real en México y Latinoamérica.
            </p>
            <ul className="mt-4 space-y-2 text-sm md:text-base">
              <li>• Trazabilidad desde el acopio hasta la valorización final.</li>
              <li>• Integración con regulaciones SEMARNAT, SEGAM y SAT.</li>
              <li>• Operación alineada a estándares R2v3 e ISO 14001.</li>
            </ul>
          </div>

          <div className="relative h-72 md:h-96 overflow-hidden">
            <Image
              src={circularImage}
              alt="Clasificación y preparación de residuos electrónicos"
              fill
              className="object-cover"
            />
          </div> */}
        </div>
      </Seccion>
      
      <section className="py-8 bg-white">
        <div className="section">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-center text-4xl font-bold"
              style={{ color: "#0a0a0a" }}
            >
               Intervenimos en el punto crítico donde los residuos electrónicos 
               dejan de ser un pasivo y se convierten en oportunidades de recuperación 
               de valor. Mediante procesos estandarizados, seguros y trazables, separamos 
               y preparamos los materiales para su reintroducción en cadenas productivas 
               globales.
            </h2>
             <p
                className="text-2xl leading-relaxed"
                style={{ color: "#4b5563" }}
              >
                Nuestro modelo:
              </p>

              <ul className="text-2xl leading-relaxed mt-4 space-y-2 md:text-base">
              <li>• Reduce la extracción de recursos vírgenes.</li>
              <li>• Minimiza emisiones asociadas al manejo inadecuado de RAEE.</li>
              <li>• Genera evidencia documental robusta para auditorías ambientales, de cumplimiento y ESG.</li>
            </ul>
            <p
                className="text-2xl leading-relaxed"
                style={{ color: "#4b5563" }}
              >
               Cada lote gestionado contribuye a una economía circular real en México y Latinoamérica.
              </p>

              <ul className="text-2xl leading-relaxed mt-4 space-y-2 md:text-base">
              <li>• Trazabilidad completa desde el acopio hasta la valorización final.</li>
              <li>• Integración regulatoria con SEMARNAT, SEGAM y SAT.</li>
              <li>• Operación certificada bajo estándares R2v3 e ISO 14001.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BLOQUE CÓMO OPERAMOS */}
      <div className="mt-20">
        <ComoOperamos />
      </div>

      {/* CTA FINAL */}
      <section className="relative">
        <div className="relative h-[320px] md:h-[360px] overflow-hidden">
          <Image
            src={mountainsImage}
            alt="Paisaje que representa un futuro más limpio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="max-w-2xl rounded-3xl bg-white/95 px-6 py-8 md:px-10 md:py-10 text-center shadow-xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700">
                Da el siguiente paso
              </p>
              <h2 className="mt-3 text-xl md:text-2xl font-semibold text-zinc-900">
                ¿Listo para gestionar tus residuos electrónicos con economía 
                circular real?
              </h2>
              <p className="mt-4 text-sm md:text-base text-zinc-600">
                Conversemos sobre cómo estructurar un esquema de recolección, 
                trazabilidad y valorización alineado a tus procesos, auditorías y 
                objetivos de sostenibilidad.
              </p>
              <a
                href="/contacto"
                className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
              >
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
