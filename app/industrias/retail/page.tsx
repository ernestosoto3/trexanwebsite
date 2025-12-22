import { Metadata } from "next";
import Hero from "@/app/(componentes)/ui/Hero";
import IntroText from "@/app/(componentes)/ui/IntroText";
import ContactForm from "../../(componentes)/ui/ContactForm";
import FeatureGridSection from "@/app/(componentes)/ui/FeatureGridSection";
import SplitServiceSection from "@/app/(componentes)/ui/SplitServiceSection";

export const metadata: Metadata = {
  title: "Reciclaje Electrónico para Retail | Devoluciones y Obsolescencia | Recibásicos",
  description:
    "Gestión de devoluciones, equipos de piso, pantallas, POS, baterías y accesorios. Recolección, clasificación, reciclaje y recuperación de valor con logística especializada.",
  keywords: [
    "reciclaje retail",
    "reciclaje POS",
    "devoluciones electrónica",
    "inventario obsoleto",
    "recuperación de valor retail",
  ],
};

export default function RetailPage() {
  return (
    <main className="min-h-dvh bg-white">
      <Hero
        bg={{
          type: "image",
          src: "/images/industrias/industriaretail.jpg",
          alt: "Industria Retail",
        }}
        height="60vh"
        badgeText="Retail"
        title="Optimización de Logística Inversa y Gestión de Excedentes"
        subtitle="Aceleramos la liberación de espacio en sus almacenes mediante el retiro y clasificación eficiente de equipos de punto de venta, pantallas y devoluciones, transformando la obsolescencia en valor recuperado para su cadena comercial."
      />

      <IntroText>
        Simplificamos la logística inversa de cadenas comerciales mediante la gestión eficiente de devoluciones,
        equipos de punto de venta y dispositivos dañados. Transformamos la obsolescencia en inventarios recuperados,
        ayudando al sector retail a mantener almacenes limpios y a fortalecer su reputación como empresas responsables
        y circulares.
      </IntroText>

      <FeatureGridSection
        kicker="Qué Ofrecemos"
        title="Soluciones Especializadas para Retail"
        items={[
          {
            title: "Reducción de Costos por Inventario Obsoleto",
            body: "Disminuye costos asociados a almacenamiento y manejo de inventarios que ya no rotan.",
          },
          {
            title: "Recuperación de Valor No Revendible",
            body: "Recupera valor en productos dañados o no comercializables mediante reciclaje y recuperación de metales.",
          },
          {
            title: "Logística Especializada y Rápida",
            body: "Procesos ágiles con recolección y clasificación para alta rotación y múltiples ubicaciones.",
          },
        ]}
      />

      <SplitServiceSection
        kicker="Nuestros Servicios"
        title="Operación eficiente para devoluciones, equipos de piso y obsolescencia"
        items={[
          {
            title: "Recolección y Clasificación",
            body: "Retiro y clasificación para optimizar espacio y controlar flujos de devoluciones y baja.",
          },
          {
            title: "Reciclaje y Recuperación de Metales",
            body: "Transformación del residuo en valor recuperado con procesos trazables y eficientes.",
          },
          {
            title: "Mejora de Imagen Sostenible",
            body: "Fortalece prácticas sostenibles ante clientes y aliados con economía circular real.",
          },
        ]}
        image={{
          src: "/images/industrias/industriaret2.jpg",
          alt: "Gestión de devoluciones y reciclaje para retail",
        }}
      />

      <ContactForm industry="Retail" />
    </main>
  );
}
