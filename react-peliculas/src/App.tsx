import ProyectarContenido from "./ProyectarContenido";
import ProyectarContenido2 from "./ProyectarContenido2";
import Cabecera from "./Cabecera";

export default function App(){
  return (
    <>

      <h1>Ejemplo 1</h1>

      <ProyectarContenido>
        <h2>Contenido principal</h2>
        <button onClick={() => alert('¡Hola! Has hecho clic en el botón.')}>
          Click me
        </button>
        <h4>Contenido secundario</h4>
      </ProyectarContenido>

      <h1>Ejemplo 2</h1>

      <ProyectarContenido2
        parteSuperior={<button>Boton Superior</button>}
        parteIntermedia={<Cabecera />}
        parteInferior={<h2>Parte Inferior</h2>}
      />
    </>
  );
}