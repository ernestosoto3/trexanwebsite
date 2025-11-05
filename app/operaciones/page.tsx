import Seccion from "../(componentes)/Seccion";
export const revalidate = 60;

export default function OperationsPage() {
  return (
    <main>
      <Seccion titulo="Operations" subtitulo="Recibásicos (fríos) + EWR (calientes).">
        <p className="text-foreground/70">Aquí iremos con servicios, flujos y clientes atendidos.</p>
      </Seccion>
    </main>
  );
}