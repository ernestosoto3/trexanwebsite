import Image from "next/image";
import Seccion from "../(componentes)/ui/Seccion";

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

        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-300">
            Trexan Recycling Group
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Quiénes Somos
          </h1>
          <p className="mt-6 text-base md:text-lg text-zinc-100">
            Recibásicos es el aliado especializado en el manejo responsable de
            residuos electrónicos en México, integrando experiencia técnica,
            trazabilidad total y certificaciones internacionales para transformar
            pasivos ambientales en valor recuperado.
          </p>
        </div>
      </section>

      {/* BLOQUE QUIÉNES SOMOS */}
      <Seccion
        titulo="Nuestra Trayectoria"
        subtitulo="Más de cuatro décadas de experiencia acumulada en reciclaje de metales y valorización de residuos."
      >
        <div className="prose prose-neutral max-w-3xl">
          <p>
            Recibásicos es una empresa mexicana especializada en el acopio,
            recolección, almacenamiento, desmontaje y tratamiento de Residuos de
            Aparatos Eléctricos y Electrónicos (RAEE). Como parte de Trexan
            Recycling Group, operamos la etapa de procesos fríos dentro de la
            cadena de reciclaje electrónico, preparando y clasificando los
            materiales antes de su envío a la división de procesos calientes EWR,
            donde se realiza la refinación final de metales.
          </p>
          <p>
            Contamos con un grupo de especialistas con más de 40 años de
            experiencia acumulada en el reciclaje y la transformación de metales,
            desde la operación de plantas en México hasta proyectos
            internacionales de valorización. Nuestro enfoque combina ingeniería,
            cumplimiento regulatorio y economía circular para ofrecer soluciones
            confiables a industrias que buscan descarbonizar y desmaterializar
            su cadena de suministro.
          </p>
        </div>
      </Seccion>

      {/* BLOQUE ECONOMÍA CIRCULAR */}
      <Seccion
        titulo="Nuestro Lugar en la Economía Circular"
        subtitulo="Conectamos los residuos electrónicos de hoy con las materias primas que la industria necesitará mañana."
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
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

          <div className="relative h-72 md:h-96 overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={circularImage}
              alt="Clasificación y preparación de residuos electrónicos"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Seccion>

      {/* BLOQUE CÓMO OPERAMOS */}
      <Seccion
        titulo="Cómo Operamos"
        subtitulo="Preparamos residuos electrónicos para un reciclaje seguro, trazable y sostenible."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="rounded-2xl p-6 ring-1 ring-foreground/10 bg-white"
            >
              <h3 className="text-lg font-semibold">{s.titulo}</h3>
              <ul className="mt-3 list-disc ms-5 space-y-1 text-sm md:text-base">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Seccion>

      {/* VISIÓN Y MISIÓN */}
      <section className="bg-zinc-950 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-2">
          {/* Visión */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={heroImage}
              alt="Bosque y entorno natural"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative p-8 md:p-10 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Nuestra Visión
              </h3>
              <p className="text-sm md:text-base text-zinc-100">
                Ser el referente en México y Latinoamérica en soluciones de
                gestión de RAEE, integrando innovación tecnológica, seguridad
                operativa y transparencia documental para impulsar cadenas de
                suministro verdaderamente circulares.
              </p>
            </div>
          </div>

          {/* Misión */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={circularImage}
              alt="Operaciones de reciclaje electrónico"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative p-8 md:p-10 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Nuestra Misión
              </h3>
              <p className="text-sm md:text-base text-zinc-100">
                Transformar residuos electrónicos en valor económico y ambiental
                medible, ofreciendo a las industrias un manejo responsable,
                seguro y certificado que reduzca su huella ecológica y fortalezca
                sus compromisos ESG.
              </p>
            </div>
          </div>
        </div>
      </section>

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
