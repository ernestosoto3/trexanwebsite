export default function SectionHeading({
  kicker,
  title,
  align = "center",
}: {
  kicker: string;
  title: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignCls} mb-12`}>
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-3">
        {kicker}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">{title}</h2>
    </div>
  );
}
