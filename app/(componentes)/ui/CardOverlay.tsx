import Image from 'next/image'

type Props = {
  title: string
  imageSrc?: string
  className?: string
}

/**
 * Displays an image card with a title overlay (bottom only).
 * Removed all top-left labels; only the bottom overlay title remains.
 */
export default function CardOverlay({ title, imageSrc, className = '' }: Props) {
  const baseClasses =
    'group relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-sm ' +
    className

  return (
    <article className={baseClasses}>
      {/* Background image or placeholder */}
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          width={1200}
          height={800}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="h-56 w-full bg-neutral-200 dark:bg-neutral-700" />
      )}

      {/* Only bottom overlay title */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
        <div className="rounded-xl bg-black/50 px-4 py-2 backdrop-blur-sm">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </article>
  )
}
