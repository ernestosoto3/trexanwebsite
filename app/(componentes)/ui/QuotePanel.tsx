export default function QuotePanel({quote}:{quote:string}) {
  return (
    <div className="card p-6 md:p-8 bg-[--color-secondary] text-white">
      <p className="text-lg md:text-xl font-medium leading-relaxed">{quote}</p>
    </div>
  );
}
