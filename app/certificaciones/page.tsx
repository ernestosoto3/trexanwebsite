import Seccion from "../(componentes)/ui/Seccion"; 

const certs = [
  { nombre: "R2v3 (Responsible Recycling)", emisor: "SERI", detalle: "Gestión, reciclaje y destrucción segura de RAEE." },
  { nombre: "ISO 14001:2015", emisor: "Organismos acreditados", detalle: "Sistema de gestión ambiental eficaz." },
  { nombre: "ISO 45001:2018", emisor: "Organismos acreditados", detalle: "Seguridad y salud ocupacional." },
  { nombre: "IMMEX", emisor: "Secretaría de Economía (México)", detalle: "Importación temporal y beneficios fiscales." },
  { nombre: "SEMARNAT / SEGAM", emisor: "México / SLP", detalle: "Autorizaciones para recolección, transporte, tratamiento y disposición final." },
  { nombre: "Licencia de Uso de Suelo y Funcionamiento", emisor: "Municipio de San Luis Potosí", detalle: "Cumplimiento urbano e industrial." },
  { nombre: "Oficio Certificación IVA e IEPS (SAT)", emisor: "SAT", detalle: "Reconocimiento como reciclador certificado." }
];

export default function CertificacionesPage() {
  return (
    <Seccion titulo="Certificaciones y Permisos" subtitulo="Transparencia, seguridad y cumplimiento">
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((c) => (
          <div key={c.nombre} className="rounded-2xl p-6 ring-1 ring-foreground/10">
            <h3 className="text-lg font-semibold">{c.nombre}</h3>
            <div className="text-sm text-zinc-600">{c.emisor}</div>
            <p className="mt-2">{c.detalle}</p>
          </div>
        ))}
      </div>
    </Seccion>
  );
}
