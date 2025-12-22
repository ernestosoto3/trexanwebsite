import { Metadata } from "next";
import Hero from "@/app/(componentes)/ui/Hero";
import IntroText from "@/app/(componentes)/ui/IntroText";
import ContactForm from "../../(componentes)/ui/ContactForm";
import FeatureGridSection from "@/app/(componentes)/ui/FeatureGridSection";
import SplitServiceSection from "@/app/(componentes)/ui/SplitServiceSection";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Manufactura | Eficiencia Industrial | Recibásicos",
  description:
    "Gestión integral de e-waste industrial: equipos obsoletos, tableros, cableado y materiales metálicos. Logística, preprocesamiento y recuperación de metales con trazabilidad.",
  keywords: [
    "reciclaje manufactura",
    "e-waste industrial",
    "reciclaje tableros",
    "recuperación de metales",
    "logística industrial",
  ],
};

export default function ManufacturaPage() {
  return (
    <main className="min-h-dvh bg-white">
      <Hero
        bg={{
          type: "image",
          src: "/images/industrias/milling.jpg",
          alt: "Industria Manufactura",
        }}
        height="60vh"
        badgeText="Manufactura"
        title="Optimización de Planta mediante Gestión de Scrap Electrónico"
        subtitle="Liberamos espacio operativo y maximizamos la recuperación de valor en tableros, maquinaria y cableado, mediante una logística especializada diseñada para no interrumpir el ritmo de su producción."
      />

      <IntroText>
        Optimizamos el flujo operativo de plantas industriales mediante la gestión ordenada de excedentes
        electrónicos, tableros y maquinaria obsoleta. Liberamos espacio productivo y transformamos sus residuos en
        activos recuperados, respaldando sus auditorías ambientales con documentación técnica y cumplimiento
        normativo riguroso.
      </IntroText>

      <FeatureGridSection
        kicker="Qué Ofrecemos"
        title="Soluciones Especializadas para Manufactura"
        items={[
          {
            title: "Gestión Ordenada de E-Waste",
            body: "Procesos que reducen desorden y mejoran el control operativo y de inventarios.",
          },
          {
            title: "Recuperación de Valor",
            body: "Separación y recuperación de metales para transformar desechos en ingresos.",
          },
          {
            title: "Capacidad para Volúmenes Altos",
            body: "Manejo de materiales complejos y grandes volúmenes con logística especializada.",
          },
        ]}
      />

      <SplitServiceSection
        kicker="Nuestros Servicios"
        title="Gestión integral para optimizar espacio, costos y cumplimiento"
        items={[
          {
            title: "Recolección y Logística",
            body: "Retiro planificado para no afectar la operación y mantener control de materiales.",
          },
          {
            title: "Separación y Preprocesamiento",
            body: "Clasificación y desmontaje para recuperación eficiente de metales y componentes.",
          },
          {
            title: "Cumplimiento Normativo",
            body: "Procesos consistentes para auditorías y control ambiental dentro de planta.",
          },
        ]}
        image={{
          src: "/images/industrias/industriamanu2.jpg",
          alt: "Gestión de residuos electrónicos en manufactura",
        }}
      />

      <ContactForm industry="Manufactura" />
    </main>
  );
}
