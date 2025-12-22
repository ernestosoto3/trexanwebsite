import { Metadata } from "next";
import Hero from "@/app/(componentes)/ui/Hero";
import IntroText from "@/app/(componentes)/ui/IntroText";
import ContactForm from "../../(componentes)/ui/ContactForm";
import FeatureGridSection from "@/app/(componentes)/ui/FeatureGridSection";
import SplitServiceSection from "@/app/(componentes)/ui/SplitServiceSection";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Electrónica | Recuperación de Valor | Recibásicos",
  description:
    "Gestión de dispositivos, tarjetas electrónicas, baterías y metales con logística eficiente, desmontaje, reciclaje avanzado, refinamiento metálico y destrucción certificada de datos.",
  keywords: [
    "reciclaje electrónica",
    "tarjetas electrónicas",
    "recuperación de metales preciosos",
    "destrucción de datos certificada",
    "reciclaje dispositivos",
  ],
};

export default function ElectronicaPage() {
  return (
    <main className="min-h-dvh bg-white">
      <Hero
        bg={{
          type: "image",
          src: "/images/industrias/GRUPO-TREXAN-14.jpg",
          alt: "Industria Electrónica",
        }}
        height="60vh"
        badgeText="Electrónica"
        title="Valorización Avanzada de Componentes y Metales Preciosos"
        subtitle="Optimizamos la recuperación en tarjetas electrónicas, periféricos y dispositivos obsoletos mediante procesos de refinamiento metálico de alto rendimiento, transformando sus excedentes en recursos estratégicos para la economía circular."
      />

      <IntroText>
        Especialistas en la valorización de tarjetas electrónicas, periféricos y componentes no conformes. Aplicamos
        procesos de desmantelamiento y refinación de alto rendimiento para recuperar metales preciosos, asegurando
        que la propiedad intelectual y los materiales sensibles sean gestionados bajo estrictos protocolos de
        seguridad y economía circular.
      </IntroText>

      <FeatureGridSection
        kicker="Qué Ofrecemos"
        title="Soluciones Especializadas para Electrónica"
        items={[
          {
            title: "Recuperación de Metales y Partes",
            body: "Recuperación de metales preciosos y partes aprovechables con procesos de alto rendimiento.",
          },
          {
            title: "Reducción de Inventarios Obsoletos",
            body: "Liberación de espacio físico mediante retiro, clasificación y reciclaje eficiente.",
          },
          {
            title: "Destrucción Certificada de Datos",
            body: "Protección de información sensible mediante destrucción certificada y procesos controlados.",
          },
        ]}
      />

      <SplitServiceSection
        kicker="Nuestros Servicios"
        title="Logística, desmontaje y refinamiento para maximizar recuperación"
        items={[
          {
            title: "Logística Eficiente",
            body: "Recolección y transporte para flujos continuos o retiros programados de inventario.",
          },
          {
            title: "Desmontaje y Reciclaje Avanzado",
            body: "Procesos especializados para tarjetas electrónicas, periféricos, baterías, cables y metales.",
          },
          {
            title: "Imagen Responsable y Circular",
            body: "Fortalece tu reputación con evidencias de circularidad y manejo responsable del e-waste.",
          },
        ]}
        image={{
          src: "/images/industrias/electronica-content.jpg",
          alt: "Desmontaje y reciclaje avanzado de electrónica",
        }}
      />

      <ContactForm industry="Electrónica" />
    </main>
  );
}
