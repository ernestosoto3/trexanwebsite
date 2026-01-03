import { memo } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

// ============================================================================
// TYPES
// ============================================================================
export type ServiceItem = {
  id?: string; // Optional unique ID for better keys
  title: string;
  body: string;
};

type SplitServiceSectionProps = {
  kicker: string;
  title: string;
  items: ServiceItem[];
  image: {
    src: string;
    alt: string;
    priority?: boolean; // For above-fold images
  };
  sectionClassName?: string;
  imagePosition?: "left" | "right"; // Flip layout
  accentColor?: string; // Border color for items
};

// ============================================================================
// SERVICE ITEM COMPONENT - Individual item (memoized)
// ============================================================================
type ServiceItemCardProps = {
  item: ServiceItem;
  accentColor: string;
};

const ServiceItemCard = memo(({ item, accentColor }: ServiceItemCardProps) => (
  <div className={`border-l-4 ${accentColor} pl-4`}>
    <h3 className="font-semibold mb-2">{item.title}</h3>
    <p className="text-sm md:text-base text-white/90">{item.body}</p>
  </div>
));

ServiceItemCard.displayName = "ServiceItemCard";

// ============================================================================
// SPLIT SERVICE SECTION COMPONENT
// ============================================================================
function SplitServiceSectionComponent({
  kicker,
  title,
  items,
  image,
  sectionClassName = "py-16 md:py-20 bg-emerald-700",
  imagePosition = "right",
  accentColor = "border-orange-600",
}: SplitServiceSectionProps) {
  const contentOrder = imagePosition === "left" ? "lg:order-2" : "";
  const imageOrder = imagePosition === "left" ? "lg:order-1" : "";

  return (
    <section className={sectionClassName}>
      <div className="section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className={`space-y-6 text-white ${contentOrder}`}>
            {/* Using SectionHeading component for consistency */}
            <SectionHeading
              kicker={kicker}
              title={title}
              align="left"
              kickerClassName="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-300 mb-3"
              titleClassName="text-3xl md:text-4xl font-bold text-white"
              spacing="sm"
            />

            {/* Service Items */}
            <div className="space-y-4">
              {items.map((item, index) => (
                <ServiceItemCard
                  key={item.id ?? `${item.title}-${index}`}
                  item={item}
                  accentColor={accentColor}
                />
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`relative h-100 lg:h-125 bg-zinc-100 flex items-center justify-center overflow-hidden ${imageOrder}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
              priority={image.priority ?? false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const SplitServiceSection = memo(SplitServiceSectionComponent);
SplitServiceSection.displayName = "SplitServiceSection";

export default SplitServiceSection;