import SectionHeading from "./SectionHeading";

type FeatureItem = {
  title: string;
  body: string;
};

export default function FeatureGridSection({
  kicker,
  title,
  items,
  sectionClassName = "py-16 md:py-20 bg-zinc-50",
}: {
  kicker: string;
  title: string;
  items: FeatureItem[];
  sectionClassName?: string;
}) {
  return (
    <section className={sectionClassName}>
      <div className="section">
        <SectionHeading kicker={kicker} title={title} align="center" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <article
              key={idx}
              className="relative bg-white border border-zinc-200 shadow-sm p-6 overflow-hidden transition-shadow duration-200 hover:shadow-md"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
