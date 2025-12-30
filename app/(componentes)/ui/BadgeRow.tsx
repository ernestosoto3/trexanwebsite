import Image from "next/image";

interface Badge {
  src: string;
  alt: string;
}

interface BadgeRowProps {
  items: Badge[];
}

export default function BadgeRow({ items }: BadgeRowProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 justify-center">
      {items.map((badge, index) => (
        <Image
          key={`${badge.alt}-${index}`}
          src={badge.src}
          alt={badge.alt}
          width={48}
          height={48}
          className="h-10 md:h-12 w-auto object-contain"
          loading="lazy"
        />
      ))}
    </div>
  );
}