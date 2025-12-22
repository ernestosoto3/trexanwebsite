import Image from "next/image";
import SectionHeading from "./SectionHeading";

type ServiceItem = {
  title: string;
  body: string;
};

export default function SplitServiceSection({
  kicker,
  title,
  items,
  image,
  sectionClassName = "py-16 md:py-20 bg-emerald-700",
}: {
  kicker: string;
  title: string;
  items: ServiceItem[];
  image: { src: string; alt: string };
  sectionClassName?: string;
}) {
  return (
    <section className={sectionClassName}>
      <div className="section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-300 mb-3">
                {kicker}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            </div>

            <div className="space-y-4">
              {items.map((it, idx) => (
                <div key={idx} className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold mb-2">{it.title}</h3>
                  <p className="text-sm md:text-base text-white/90">
                    {it.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-100 lg:h-125 bg-zinc-100 flex items-center justify-center overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
