import { memo } from "react";
import type { Metadata } from "next";
import Hero from "../(componentes)/ui/Hero";

// ============================================================================
// METADATA FOR SEO
// ============================================================================
export const metadata: Metadata = {
  title: "Aviso de Privacidad | Recibásicos - Trexan Recycling Group",
  description: "Aviso de Privacidad de Recibásicos S.A. de C.V. Conoce cómo protegemos y manejamos tus datos personales conforme a la legislación mexicana.",
  keywords: "aviso de privacidad, protección de datos, ARCO, datos personales, privacidad México",
  openGraph: {
    title: "Aviso de Privacidad - Recibásicos",
    description: "Transparencia total en el manejo de tus datos personales. Conoce tus derechos ARCO.",
    images: ["/images/industrias/GRUPO TREXAN-74.jpg"],
  },
};

// ============================================================================
// TYPES
// ============================================================================
interface TableOfContentsItem {
  readonly id: string;
  readonly title: string;
}

interface DataCollected {
  readonly label: string;
  readonly required: boolean;
}

interface Right {
  readonly name: string;
  readonly description: string;
}

// ============================================================================
// CONSTANTS
// ============================================================================
const IMAGES = {
  hero: "/images/industrias/lagomexico.jpg",
} as const;

const LAST_UPDATE = "10 de enero de 2026";

const CONTACT_INFO = {
  company: "Recibásicos S.A. de C.V.",
  address: "Eje 132 No.120, Zona Industrial del Potosí C.P. 78395, San Luis Potosí, S.L.P., México",
  email: "contacto@recibasicos.com",
  phone: "+52 (444) 829 2422",
  whatsapp: "+52 (444) 219 7673",
} as const;

const KEY_POINTS: readonly string[] = [
  "Recopilamos solo datos necesarios para contacto y cotización",
  "No recopilamos datos sensibles",
  "No realizamos pagos en el sitio",
  "No vendemos datos personales",
  "Puedes ejercer tus derechos ARCO en cualquier momento",
] as const;

const TABLE_OF_CONTENTS: readonly TableOfContentsItem[] = [
  { id: "informacion-recopilada", title: "Qué información recopilamos" },
  { id: "uso-informacion", title: "Cómo usamos tu información" },
  { id: "finalidades", title: "Finalidades del tratamiento" },
  { id: "transferencia", title: "Transferencia de datos" },
  { id: "cookies", title: "Cookies y tecnologías" },
  { id: "conservacion", title: "Conservación de la información" },
  { id: "seguridad", title: "Seguridad de la información" },
  { id: "menores", title: "Datos de menores" },
  { id: "derechos-arco", title: "Derechos de los titulares" },
  { id: "derechos-usa", title: "Derechos en Estados Unidos" },
  { id: "actualizaciones", title: "Actualizaciones del aviso" },
  { id: "contacto", title: "Contacto" },
  { id: "ejercicio-derechos", title: "Ejercicio de derechos" },
] as const;

const DATA_COLLECTED: readonly DataCollected[] = [
  { label: "Nombre completo", required: true },
  { label: "Correo electrónico", required: true },
  { label: "Teléfono", required: false },
  { label: "Empresa / Institución", required: false },
  { label: "Industria", required: false },
  { label: "Volumen aproximado de RAEE", required: false },
  { label: "Mensaje o consulta", required: true },
] as const;

const ARCO_RIGHTS: readonly Right[] = [
  { 
    name: "Acceso", 
    description: "Conocer qué datos personales tenemos sobre ti" 
  },
  { 
    name: "Rectificación", 
    description: "Solicitar la corrección de tus datos si son inexactos o incompletos" 
  },
  { 
    name: "Cancelación", 
    description: "Solicitar que eliminemos tus datos de nuestros registros" 
  },
  { 
    name: "Oposición", 
    description: "Oponerte al tratamiento de tus datos para fines específicos" 
  },
] as const;

const USA_RIGHTS: readonly string[] = [
  "Conocer los datos recopilados sobre ti",
  "Solicitar la eliminación de tus datos personales",
  "No sufrir discriminación por ejercer tus derechos de privacidad",
] as const;

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

const ContactBlock = memo(function ContactBlock() {
  return (
    <div className="bg-zinc-50 p-6 space-y-3">
      <h3 className="font-bold text-zinc-900 text-lg">
        {CONTACT_INFO.company}
      </h3>
      <address className="not-italic text-zinc-700 text-[15px] leading-relaxed space-y-2">
        <p>{CONTACT_INFO.address}</p>
        <div className="flex flex-col gap-1.5 pt-1">
          <p>
            <span className="text-zinc-600">Email:</span>{" "}
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors hover:underline">
              {CONTACT_INFO.email}
            </a>
          </p>
          <p>
            <span className="text-zinc-600">Teléfono:</span>{" "}
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors hover:underline">
              {CONTACT_INFO.phone}
            </a>
          </p>
          <p>
            <span className="text-zinc-600">WhatsApp:</span>{" "}
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[\s+()-]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors hover:underline">
              {CONTACT_INFO.whatsapp}
            </a>
          </p>
        </div>
      </address>
    </div>
  );
});

const KeyPointsGrid = memo(function KeyPointsGrid() {
  return (
    <ul className="space-y-2 mt-4">
      {KEY_POINTS.map((point, index) => (
        <li key={index} className="flex items-start gap-2 text-zinc-700">
          <span className="text-zinc-400 font-medium shrink-0 leading-[1.6]">•</span>
          <span className="leading-relaxed text-[15px]">{point}</span>
        </li>
      ))}
    </ul>
  );
});

const TableOfContentsNav = memo(function TableOfContentsNav() {
  return (
    <nav className="bg-zinc-50 p-6" aria-labelledby="toc-heading">
      <h2 id="toc-heading" className="text-lg font-bold text-zinc-900 mb-4">
        Tabla de Contenidos
      </h2>
      <ol className="space-y-2">
        {TABLE_OF_CONTENTS.map((item, index) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="group flex items-start gap-2 text-zinc-700 hover:text-emerald-700 transition-colors text-[15px]">
              <span className="font-semibold text-zinc-400 group-hover:text-emerald-700 transition-colors min-w-7">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <span className="leading-relaxed">{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
});

interface SectionProps {
  readonly id: string;
  readonly title: string;
  readonly children: React.ReactNode;
}

const Section = memo(function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">
        {title}
      </h2>
      <div className="text-zinc-700 text-[15px] leading-relaxed">
        {children}
      </div>
    </section>
  );
});

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function AvisoPrivacidadPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        bg={{ 
          type: "image", 
          src: IMAGES.hero, 
          alt: "Protección de datos - Recibásicos" 
        }}
        height="60vh"
        badgeText="Aviso de Privacidad"
        title="Transparencia en el Manejo de tus Datos"
        subtitle="Conoce cómo protegemos tu información personal y los derechos que tienes sobre tus datos conforme a la legislación mexicana y estándares internacionales."
      />

      {/* Main Content */}
      <div className="bg-zinc-50 py-8 md:py-12">
        <div className="mx-auto max-w-5xl px-4">
          
          {/* Last Update */}
          <div className="text-center mb-6">
            <p className="text-sm text-zinc-600">
              Última actualización: <time dateTime={LAST_UPDATE}>{LAST_UPDATE}</time>
            </p>
          </div>

          {/* Company Contact Info */}
          <div className="mb-8">
            <ContactBlock />
          </div>

          {/* Key Points Summary */}
          <div className="mb-8">
            <div className="bg-zinc-50 p-6">
              <h2 className="text-lg font-bold text-zinc-900 mb-3">
                Resumen de Puntos Clave
              </h2>
              <KeyPointsGrid />
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-8">
            <TableOfContentsNav />
          </div>

          {/* Privacy Policy Sections */}
          <div className="space-y-8">
            
            <Section id="informacion-recopilada" title="1. Qué información recopilamos">
              <h3 className="text-base font-bold text-zinc-900 mb-3">
                Información proporcionada por el titular
              </h3>
              <ul className="space-y-2">
                {DATA_COLLECTED.map((item) => (
                  <li key={item.label} className="flex items-start gap-2">
                    <span className="text-zinc-400 leading-[1.6]">•</span>
                    <span className="text-zinc-700">
                      {item.label}
                      {!item.required && (
                        <span className="text-zinc-500 text-sm ml-2">(opcional)</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="uso-informacion" title="2. Cómo usamos tu información">
              <p className="mb-3">Utilizamos los datos personales para:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Atender solicitudes de contacto o cotización</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Proporcionar información sobre nuestros servicios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Dar seguimiento comercial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Cumplir obligaciones legales</span>
                </li>
              </ul>
            </Section>

            <Section id="finalidades" title="3. Finalidades del tratamiento">
              <div className="space-y-5">
                <div>
                  <h3 className="text-base font-bold text-zinc-900 mb-2">Finalidades primarias</h3>
                  <p className="text-sm text-zinc-600 mb-2 italic">Obligatorias, no se pueden rechazar si se usa el formulario</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-zinc-400 leading-[1.6]">•</span>
                      <span>Contactar al usuario</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-zinc-400 leading-[1.6]">•</span>
                      <span>Elaborar cotizaciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-zinc-400 leading-[1.6]">•</span>
                      <span>Responder solicitudes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 mb-2">Finalidades secundarias</h3>
                  <p className="text-sm text-zinc-600 mb-2 italic">Opcionales</p>
                  <ul className="space-y-2 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-zinc-400 leading-[1.6]">•</span>
                      <span>Enviar información comercial relacionada con nuestros servicios</span>
                    </li>
                  </ul>
                  <p>
                    El titular puede oponerse a las finalidades secundarias enviando un correo a{" "}
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                </div>
              </div>
            </Section>

            <Section id="transferencia" title="4. Transferencia de datos">
              <p className="mb-3 font-semibold">Recibásicos no vende ni comercializa datos personales.</p>
              <p className="mb-2">Los datos solo podrán compartirse cuando:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Sea requerido por una autoridad competente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Sea necesario dentro de empresas del Trexan Recycling Group, bajo confidencialidad</span>
                </li>
              </ul>
            </Section>

            <Section id="cookies" title="5. Cookies y tecnologías de rastreo">
              <p className="mb-2">Actualmente <strong>no utilizamos cookies ni herramientas de seguimiento</strong>.</p>
              <p className="text-sm text-zinc-600 italic">Esta sección puede actualizarse sin rehacer todo el aviso.</p>
            </Section>

            <Section id="conservacion" title="6. Conservación de la información">
              <p className="mb-2">Los datos personales se conservarán:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Mientras sea necesario para atender la solicitud</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Hasta por 5 años para fines administrativos o legales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>O hasta que el titular solicite su eliminación</span>
                </li>
              </ul>
            </Section>

            <Section id="seguridad" title="7. Seguridad de la información">
              <p>
                Implementamos medidas administrativas, técnicas y organizativas razonables 
                para proteger los datos personales contra pérdida, uso indebido, acceso no 
                autorizado, divulgación, alteración o destrucción.
              </p>
            </Section>

            <Section id="menores" title="8. Datos de menores de edad">
              <p>
                Nuestros servicios no están dirigidos a menores de edad. No recopilamos 
                intencionalmente información de personas menores de 18 años.
              </p>
            </Section>

            <Section id="derechos-arco" title="9. Derechos ARCO (México)">
              <p className="mb-3">El titular puede ejercer los siguientes derechos:</p>
              <div className="space-y-3">
                {ARCO_RIGHTS.map((right) => (
                  <div key={right.name} className="bg-zinc-50 p-4">
                    <h4 className="font-bold text-zinc-900 mb-1">{right.name}</h4>
                    <p className="text-sm">{right.description}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="derechos-usa" title="10. Derechos de residentes de Estados Unidos">
              <p className="mb-3">Los residentes de EE. UU. pueden solicitar:</p>
              <ul className="space-y-2 mb-4">
                {USA_RIGHTS.map((right, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-zinc-400 leading-[1.6]">•</span>
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold">Recibásicos no vende datos personales.</p>
            </Section>

            <Section id="actualizaciones" title="11. Actualizaciones del aviso">
              <p>
                Este Aviso puede actualizarse para cumplir cambios legales o operativos. 
                La versión vigente estará siempre disponible en este sitio. La fecha de 
                última actualización se muestra al inicio de este documento.
              </p>
            </Section>

            <Section id="contacto" title="12. Contacto">
              <p className="mb-3">
                Para cualquier duda o aclaración sobre este Aviso de Privacidad, puedes contactarnos:
              </p>
              <div className="bg-zinc-50 p-4 space-y-1.5">
                <p>
                  <span className="text-zinc-600">Email:</span>{" "}
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p>
                  <span className="text-zinc-600">Ubicación:</span>{" "}
                  <span>San Luis Potosí, México</span>
                </p>
              </div>
            </Section>

            <Section id="ejercicio-derechos" title="13. Ejercicio de derechos">
              <p className="mb-3">
                Para ejercer tus derechos ARCO o cualquier otro derecho relacionado con 
                tus datos personales, envía un correo a:
              </p>
              <div className="bg-zinc-50 p-5 mb-4">
                <p className="text-zinc-600 text-sm mb-1">Email:</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-bold text-emerald-700 hover:text-emerald-800 transition-colors hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <p className="mb-2">En tu solicitud, incluye:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Nombre completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Medio de contacto preferido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Derecho que deseas ejercer</span>
                </li>
              </ul>
            </Section>

          </div>

        </div>
      </div>
    </>
  );
}