// import ProyectarContenido from "./ProyectarContenido";
// import ProyectarContenido2 from "./ProyectarContenido2";
// import Cabecera from "./Cabecera";

import { useState } from "react";
// import ContenidoDinamico from "./ContenidoDinamico";
import ContenidoDinamicoIf from "./ContenidoDinamicoIf";
// import ContenidoDinamico from "./ContenidoDinamico";

export default function App(){

  // const [mostrar, setMostrar] = useState(false);

  const [calificacion, setCalificacion] = useState<number | null>(null);

  return (
    <>
      <label>Ingresa una calificación:</label>
      <input type="number" onChange={(e) => setCalificacion(Number(e.target.value))} />

      {calificacion ? <ContenidoDinamicoIf calificacion={calificacion} /> : undefined}
    </>
    // <>
    //   <input type="checkbox" onChange={(e) => setMostrar(e.target.checked)} />
    //   <label>Mostrar el mensaje oculto</label>

    //   <ContenidoDinamico mostrarContenido={mostrar} />
    // </>

    // <>

    //   <h1>Ejemplo 1</h1>

    //   <ProyectarContenido>
    //     <h2>Contenido principal</h2>
    //     <button onClick={() => alert('¡Hola! Has hecho clic en el botón.')}>
    //       Click me
    //     </button>
    //     <h4>Contenido secundario</h4>
    //   </ProyectarContenido>

    //   <h1>Ejemplo 2</h1>

    //   <ProyectarContenido2
    //     parteSuperior={<button>Boton Superior</button>}
    //     parteIntermedia={<Cabecera />}
    //     parteInferior={<h2>Parte Inferior</h2>}
    //   />
    // </>
  );
}