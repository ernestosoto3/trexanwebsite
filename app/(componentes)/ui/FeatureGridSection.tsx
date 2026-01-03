import { memo } from "react";
import SectionHeading from "./SectionHeading";

// ============================================================================
// TYPES
// ============================================================================
export type FeatureItem = {
  title: string;
  body: string;
};

type FeatureGridSectionProps = {
  kicker: string;
  title: string;
  items: FeatureItem[];
  sectionClassName?: string;
};

// ============================================================================
// FEATURE CARD COMPONENT - Individual card (memoized)
// ============================================================================
type FeatureCardProps = {
  item: FeatureItem;
};

const FeatureCard = memo(({ item }: FeatureCardProps) => (
  <article className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md">
    <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
    <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
      {item.title}
    </h3>
    <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
      {item.body}
    </p>
  </article>
));

FeatureCard.displayName = "FeatureCard";

// ============================================================================
// FEATURE GRID SECTION COMPONENT
// ============================================================================
function FeatureGridSectionComponent({
  kicker,
  title,
  items,
  sectionClassName = "py-16 md:py-20 bg-zinc-50",
}: FeatureGridSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="section">
        <SectionHeading kicker={kicker} title={title} align="center" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MEMOIZED EXPORT
// ============================================================================
const FeatureGridSection = memo(FeatureGridSectionComponent);
FeatureGridSection.displayName = "FeatureGridSection";

export default FeatureGridSection;