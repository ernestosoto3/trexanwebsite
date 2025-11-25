import Seccion from "../(componentes)/ui/Seccion";

export default function NosotrosPage() {
  return (
    <Seccion titulo="Quiénes Somos" subtitulo="Recibásicos · Trexan Recycling Group">
      <div className="prose prose-neutral max-w-3xl">
        <p>
                    Recibásicos es una empresa mexicana especializada en el acopio,
          recolección, almacenamiento, desmontaje y tratamiento de Residuos de
          Aparatos Eléctricos y Electrónicos (RAEE). Como parte de Trexan Recycling
          Group, operamos la etapa de procesos fríos dentro de la cadena de reciclaje
          electrónico, preparando y clasificando los materiales antes de su envío a la
          división de procesos calientes {" "}
          <a
          href="https://ewr.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1a73e8", textDecoration: "underline" }}
          >
           EWR
          </a>
          , donde se realiza la refinación final de metales.
        </p>
        <p>
           Contamos con un grupo de especialistas con más de 40 años de experiencia 
          acumulada en el reciclaje y la transformación de metales, 
          desde la operación de plantas en México hasta proyectos internacionales de 
          valorización contribuyendo activamente a la economía circular en México y Latinoamérica.
        </p>
      </div>
    </Seccion>
  );
}