import Seccion from "../(componentes)/ui/Seccion";

export default function NosotrosPage() {
  return (
    <Seccion titulo="Quiénes Somos" subtitulo="Recibásicos · Trexan Recycling Group">
      <div className="prose prose-neutral max-w-3xl">
        <p>
          Trexan Recycling Group es una empresa mexicana especializada en el acopio, recolección,
          almacenamiento, transporte, reutilización, tratamiento, reciclaje y disposición final de
          Residuos de Aparatos Eléctricos y Electrónicos (RAEE). A través de nuestras divisiones
          Recibásicos (procesos fríos) y EWR (procesos calientes), gestionamos toda la cadena de
          valor del reciclaje electrónico —desde la recepción de equipos obsoletos hasta la
          refinación de metales— bajo estrictos estándares de seguridad, trazabilidad y
          sustentabilidad.
        </p>
        <p>
          Contamos con certificaciones R2v3, ISO 14001, ISO 45001 e IMMEX, garantizando operaciones
          responsables, cumplimiento normativo y el máximo aprovechamiento de los materiales
          recuperados, contribuyendo activamente a la economía circular en México y Latinoamérica.
        </p>
      </div>
    </Seccion>
  );
}