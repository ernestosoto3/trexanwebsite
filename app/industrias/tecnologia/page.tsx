import { Metadata } from "next";
import Hero from "@/app/(componentes)/ui/Hero";
import IntroText from "@/app/(componentes)/ui/IntroText";
import ContactForm from "../../(componentes)/ui/ContactForm";
import FeatureGridSection from "@/app/(componentes)/ui/FeatureGridSection";
import SplitServiceSection from "@/app/(componentes)/ui/SplitServiceSection";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Tecnología | Seguridad y Circularidad | Recibásicos",
  description:
    "Retiro y reciclaje de hardware, servidores, red, UPS y baterías. Destrucción certificada de datos, desmontaje especializado y recuperación de valor para TI, telecom y data centers.",
  keywords: [
    "reciclaje TI",
    "reciclaje data center",
    "reciclaje servidores",
    "destrucción de datos",
    "UPS baterías reciclaje",
  ],
};

export default function TecnologiaPage() {
  return (
    <main className="min-h-dvh bg-white">
      <Hero
        bg={{
          type: "image",
          src: "/images/industrias/industriatech.jpg",
          alt: "Industria Tecnología",
        }}
        height="60vh"
        badgeText="Tecnología"
        title="Gestión Segura de Infraestructura TI y Datos Críticos"
        subtitle="Brindamos soluciones de retiro, desmontaje y reciclaje de hardware para Data Centers y empresas tecnológicas, garantizando la destrucción certificada de información bajo los estándares de seguridad más estrictos de la industria."
      />

      <IntroText>
        Blindamos la infraestructura crítica de empresas de TI y Data Centers mediante el retiro seguro de hardware y
        la destrucción certificada de información. Nuestro proceso de reciclaje de servidores, UPS y equipos de red
        garantiza que los datos sensibles sean eliminados irreversiblemente mientras se recupera el valor de los
        componentes tecnológicos.
      </IntroText>

      <FeatureGridSection
        kicker="Qué Ofrecemos"
        title="Soluciones Especializadas para Tecnología"
        items={[
          {
            title: "Destrucción Segura de Información",
            body: "Eliminación segura de información crítica con procesos certificados y controlados.",
          },
          {
            title: "Procesos Escalables",
            body: "Retiros masivos o por etapas para oficinas, sucursales, data centers y renovaciones.",
          },
          {
            title: "Recuperación de Valor",
            body: "Recuperación de metales valiosos para reducir costos de reposición y maximizar retorno.",
          },
        ]}
      />

      <SplitServiceSection
        kicker="Nuestros Servicios"
        title="Circularidad para infraestructura TI y telecomunicaciones"
        items={[
          {
            title: "Retiro y Transporte",
            body: "Coordinación para retiros por sitio con control de cadena de custodia cuando aplica.",
          },
          {
            title: "Desmontaje Especializado",
            body: "Manejo de servidores, red, UPS y baterías con procesos seguros y trazables.",
          },
          {
            title: "Soporte a Objetivos ESG",
            body: "Contribuye a metas ESG y reducción de huella ambiental con reportabilidad.",
          },
        ]}
        image={{
          src: "/images/industrias/tecnologia-content.jpg",
          alt: "Reciclaje de infraestructura tecnológica",
        }}
      />

      <ContactForm industry="Tecnología" />
    </main>
  );
}
