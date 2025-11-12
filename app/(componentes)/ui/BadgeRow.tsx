export default function BadgeRow({items}:{items:{src:string; alt:string}[]}) {
  return (
    <div className="flex flex-wrap items-center gap-6 justify-center">
      {items.map((b,i)=>(
        <img key={i} src={b.src} alt={b.alt} className="h-10 md:h-12 object-contain" />
      ))}
    </div>
  );
}
