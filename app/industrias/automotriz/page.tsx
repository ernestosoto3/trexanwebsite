import { Metadata } from "next";
import Hero from "@/app/(componentes)/ui/Hero";
import ContactForm from "../../(componentes)/ui/ContactForm";
import IntroText from "@/app/(componentes)/ui/IntroText";
import FeatureGridSection from "@/app/(componentes)/ui/FeatureGridSection";
import SplitServiceSection from "@/app/(componentes)/ui/SplitServiceSection";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Automotriz | Movilidad Sostenible | Recibásicos",
  description:
    "Gestión segura de módulos de control, cableado, sensores, baterías y componentes eléctricos. Reciclaje de alto rendimiento, trazabilidad completa y recuperación de valor.",
  keywords: [
    "reciclaje automotriz",
    "reciclaje baterías",
    "módulos de control",
    "OEM reciclaje",
    "economía circular automotriz",
  ],
};

export default function AutomotrizPage() {
  return (
    <main className="min-h-dvh bg-white">
      <Hero
        bg={{
          type: "image",
          src: "/images/industrias/industriaautomotriz.jpg",
          alt: "Industria Automotriz",
        }}
        height="60vh"
        badgeText="Automotriz"
        title="Valorización Avanzada de Componentes y Electrónica Automotriz"
        subtitle="Optimizamos la recuperación de materiales en módulos de control, sensores y baterías complejas, garantizando una trazabilidad impecable que fortalece la cadena de suministro y el cumplimiento ESG de fabricantes y OEMs."
      />

      <IntroText>
        Maximizamos la eficiencia en la gestión de scrap electrónico y componentes complejos para la cadena de
        suministro automotriz. Nuestro enfoque se centra en la recuperación de metales de alto valor y el manejo
        seguro de módulos de control y baterías, garantizando la trazabilidad necesaria para cumplir con los
        estándares de calidad y sostenibilidad de fabricantes y OEMs.
      </IntroText>

      <FeatureGridSection
        kicker="Qué Ofrecemos"
        title="Soluciones Especializadas para Automotriz"
        items={[
          {
            title: "Reciclaje de Alto Rendimiento",
            body: "Procesos diseñados para recuperar materiales y componentes con eficiencia industrial.",
          },
          {
            title: "Manejo Seguro de Baterías y Electrónica Compleja",
            body: "Gestión responsable de baterías, cableado y sistemas electrónicos con control y seguridad.",
          },
          {
            title: "Trazabilidad Completa",
            body: "Seguimiento claro del proceso para cumplimiento, auditorías internas y reportes ESG.",
          },
        ]}
      />

      <SplitServiceSection
        kicker="Nuestros Servicios"
        title="Recuperación de valor y cumplimiento ambiental en automotriz"
        items={[
          {
            title: "Cumplimiento y Manejo Responsable",
            body: "Gestión alineada a buenas prácticas ambientales para residuos electrónicos y baterías.",
          },
          {
            title: "Recuperación de Metales y Componentes",
            body: "Recuperación de metales y partes aprovechables para reducir costos y maximizar valor.",
          },
          {
            title: "Refuerzo ESG con Economía Circular",
            body: "Evidencia y soporte para iniciativas ESG mediante circularidad real y trazable.",
          },
        ]}
        image={{
          src: "/images/industrias/industriaauto2.jpg",
          alt: "Reciclaje y recuperación de valor para industria automotriz",
        }}
      />

      <ContactForm industry="Automotriz" />
    </main>
  );
}
