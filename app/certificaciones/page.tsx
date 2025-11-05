import Seccion from "../(componentes)/Seccion";
export default function CertificationsPage() {
  return (
    <main>
      <Seccion titulo="Certifications" subtitulo="Lista y logos oficiales.">
        <ul className="list-disc pl-5 text-foreground/70 space-y-2">
          <li>ISO 9001 (placeholder)</li>
          <li>ISO 14001 (placeholder)</li>
          <li>R2 / e-Stewards (placeholder)</li>
        </ul>
      </Seccion>
    </main>
  );
}
