import { memo } from "react";
import type { Metadata } from "next";
import Hero from "../(componentes)/ui/Hero";

// ============================================================================
// METADATA FOR SEO
// ============================================================================
export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso | Recibásicos - Trexan Recycling Group",
  description: "Términos y Condiciones de Uso del sitio web de Recibásicos S.A. de C.V. Conoce las reglas y condiciones para el uso de nuestro sitio.",
  keywords: "términos de uso, condiciones de uso, términos legales, sitio web, Recibásicos",
  openGraph: {
    title: "Términos y Condiciones de Uso - Recibásicos",
    description: "Condiciones legales para el uso del sitio web de Recibásicos.",
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

interface SectionProps {
  readonly id: string;
  readonly title: string;
  readonly children: React.ReactNode;
}

// ============================================================================
// CONSTANTS
// ============================================================================
const IMAGES = {
  hero: "/images/industrias/microchip.jpg",
} as const;

const LAST_UPDATE = "10 de enero de 2026";

const CONTACT_INFO = {
  company: "Recibásicos S.A. de C.V.",
  address: "Eje 132 No.120, Zona Industrial del Potosí C.P. 78395, San Luis Potosí, S.L.P., México",
  email: "contacto@recibasicos.com",
} as const;

const TABLE_OF_CONTENTS: readonly TableOfContentsItem[] = [
  { id: "aceptacion", title: "Aceptación de los términos" },
  { id: "propiedad-intelectual", title: "Propiedad intelectual" },
  { id: "declaraciones", title: "Declaraciones del usuario" },
  { id: "actividades-prohibidas", title: "Actividades prohibidas" },
  { id: "contenido-usuario", title: "Contenido enviado por el usuario" },
  { id: "gestion", title: "Gestión del sitio" },
  { id: "vigencia", title: "Vigencia y terminación" },
  { id: "modificaciones", title: "Modificaciones e interrupciones" },
  { id: "legislacion", title: "Legislación aplicable y jurisdicción" },
  { id: "correcciones", title: "Correcciones" },
  { id: "garantias", title: "Exención de garantías" },
  { id: "responsabilidad", title: "Limitación de responsabilidad" },
  { id: "indemnizacion", title: "Indemnización" },
  { id: "datos-usuario", title: "Datos del usuario" },
  { id: "comunicaciones", title: "Comunicaciones electrónicas" },
  { id: "miscelaneos", title: "Misceláneos" },
  { id: "contacto", title: "Contacto" },
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
        <div className="pt-1">
          <p>
            <span className="text-zinc-600">Email:</span>{" "}
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors hover:underline">
              {CONTACT_INFO.email}
            </a>
          </p>
        </div>
      </address>
    </div>
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
export default function TerminosPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        bg={{ 
          type: "image", 
          src: IMAGES.hero, 
          alt: "Términos y Condiciones - Recibásicos" 
        }}
        height="60vh"
        badgeText="Términos y Condiciones"
        title="Términos y Condiciones de Uso"
        subtitle="Condiciones legales que rigen el acceso y uso del sitio web de Recibásicos. Por favor, lee estos términos cuidadosamente antes de utilizar nuestros servicios."
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

          {/* Intro Text */}
          <div className="bg-white p-6 mb-8">
            <p className="text-[15px] text-zinc-700 leading-relaxed">
              Estos Términos y Condiciones de Uso ("Términos") constituyen un acuerdo legalmente vinculante entre usted ("Usuario") y Recibásicos S.A. de C.V. ("Recibásicos", "la Empresa", "nosotros"), respecto al acceso y uso del sitio web de Recibásicos (el "Sitio").
            </p>
            <p className="text-[15px] text-zinc-700 leading-relaxed mt-3">
              Al acceder o utilizar el Sitio, usted reconoce que ha leído, entendido y aceptado quedar obligado por estos Términos. Si no está de acuerdo con ellos, debe abstenerse de utilizar el Sitio.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-8">
            <TableOfContentsNav />
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            
            <Section id="aceptacion" title="1. Aceptación de los términos">
              <p className="mb-3">
                El uso del Sitio implica la aceptación plena de estos Términos y de cualquier política adicional publicada en el Sitio, incluyendo el Aviso de Privacidad.
              </p>
              <p>
                Nos reservamos el derecho de modificar estos Términos en cualquier momento. La versión vigente será la publicada en el Sitio, indicada por la fecha de actualización.
              </p>
            </Section>

            <Section id="propiedad-intelectual" title="2. Propiedad intelectual">
              <p className="mb-3">
                El Sitio y todo su contenido, incluyendo textos, diseños, logotipos, imágenes, gráficos, videos, software y demás materiales (el "Contenido"), son propiedad de Recibásicos o cuentan con licencia para su uso, y están protegidos por las leyes de propiedad intelectual de México y tratados internacionales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>El Contenido se proporciona únicamente para fines informativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Queda prohibida su reproducción, distribución, modificación o explotación comercial sin autorización previa y por escrito de Recibásicos</span>
                </li>
              </ul>
            </Section>

            <Section id="declaraciones" title="3. Declaraciones del usuario">
              <p className="mb-2">Al utilizar el Sitio, usted declara que:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Tiene capacidad legal para aceptar estos Términos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Utilizará el Sitio conforme a la ley aplicable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>No utilizará medios automatizados para acceder al Sitio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>No empleará el Sitio con fines ilícitos o no autorizados</span>
                </li>
              </ul>
            </Section>

            <Section id="actividades-prohibidas" title="4. Actividades prohibidas">
              <p className="mb-2">El Usuario se compromete a no:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Utilizar el Sitio para fines distintos a los informativos o de contacto comercial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Interferir con la seguridad o funcionamiento del Sitio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Introducir virus, malware o cualquier código dañino</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Copiar o explotar el Contenido con fines comerciales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Realizar ingeniería inversa del Sitio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Usar el Sitio para competir directa o indirectamente con Recibásicos</span>
                </li>
              </ul>
            </Section>

            <Section id="contenido-usuario" title="5. Contenido enviado por el usuario">
              <p className="mb-3">
                El Sitio permite únicamente el envío de información a través de formularios de contacto o cotización.
              </p>
              <p className="mb-2">Al enviar información, el Usuario declara que:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>La información es veraz y lícita</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Cuenta con derecho para compartirla</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>No infringe derechos de terceros</span>
                </li>
              </ul>
              <p className="mt-3">
                Recibásicos no asume responsabilidad por la información enviada por el Usuario.
              </p>
            </Section>

            <Section id="gestion" title="6. Gestión del sitio">
              <p className="mb-2">Recibásicos se reserva el derecho de:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Supervisar el uso del Sitio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Restringir el acceso en caso de uso indebido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 leading-[1.6]">•</span>
                  <span>Tomar acciones legales ante incumplimientos</span>
                </li>
              </ul>
            </Section>

            <Section id="vigencia" title="7. Vigencia y terminación">
              <p className="mb-3">
                Estos Términos permanecerán vigentes mientras el Usuario utilice el Sitio.
              </p>
              <p>
                Recibásicos podrá suspender o terminar el acceso al Sitio en cualquier momento y sin previo aviso en caso de incumplimiento de estos Términos o de la ley.
              </p>
            </Section>

            <Section id="modificaciones" title="8. Modificaciones e interrupciones">
              <p className="mb-3">
                Recibásicos podrá modificar, suspender o interrumpir el Sitio total o parcialmente sin previo aviso.
              </p>
              <p>
                No garantizamos disponibilidad continua del Sitio y no asumimos responsabilidad por interrupciones técnicas.
              </p>
            </Section>

            <Section id="legislacion" title="9. Legislación aplicable y jurisdicción">
              <p className="mb-3">
                Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos.
              </p>
              <p>
                Cualquier controversia será sometida a los tribunales competentes de San Luis Potosí, México, renunciando a cualquier otro fuero que pudiera corresponder.
              </p>
            </Section>

            <Section id="correcciones" title="10. Correcciones">
              <p>
                El Sitio puede contener errores tipográficos o imprecisiones. Nos reservamos el derecho de corregirlos en cualquier momento sin previo aviso.
              </p>
            </Section>

            <Section id="garantias" title="11. Exención de garantías">
              <p className="mb-3">
                El Sitio se proporciona "tal cual" y "según disponibilidad".
              </p>
              <p>
                Recibásicos no garantiza que el contenido sea exacto, completo o actualizado, ni que el Sitio esté libre de errores o interrupciones.
              </p>
            </Section>

            <Section id="responsabilidad" title="12. Limitación de responsabilidad">
              <p>
                En ningún caso Recibásicos será responsable por daños directos, indirectos, incidentales o consecuenciales derivados del uso o imposibilidad de uso del Sitio.
              </p>
            </Section>

            <Section id="indemnizacion" title="13. Indemnización">
              <p>
                El Usuario acepta indemnizar y mantener indemne a Recibásicos frente a cualquier reclamación derivada del uso indebido del Sitio o del incumplimiento de estos Términos.
              </p>
            </Section>

            <Section id="datos-usuario" title="14. Datos del usuario">
              <p>
                Los datos enviados a través del Sitio serán tratados conforme a nuestro{" "}
                <a href="/aviso-privacidad" className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors hover:underline">
                  Aviso de Privacidad
                </a>.
              </p>
            </Section>

            <Section id="comunicaciones" title="15. Comunicaciones electrónicas">
              <p>
                El uso del Sitio y el envío de formularios constituye comunicación electrónica válida. El Usuario acepta recibir comunicaciones por medios electrónicos.
              </p>
            </Section>

            <Section id="miscelaneos" title="16. Misceláneos">
              <p className="mb-3">
                Estos Términos constituyen el acuerdo completo entre el Usuario y Recibásicos respecto al uso del Sitio.
              </p>
              <p>
                Si alguna disposición es declarada inválida, las demás permanecerán vigentes.
              </p>
            </Section>

            <Section id="contacto" title="17. Contacto">
              <p className="mb-3">
                Para cualquier duda relacionada con estos Términos, puede contactarnos en:
              </p>
              <ContactBlock />
            </Section>

          </div>

        </div>
      </div>
    </>
  );
}