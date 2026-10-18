import { useState } from "react";
import EjemploUseEffect from "./EjemploUseEffect";

export default function App(){
  const [mostrar, setMostrar] = useState(true);

  return (
    <>
      <input type="checkbox" checked={mostrar} onChange={(e) => setMostrar(e.target.checked)} />
      Mostrar Componente
      
      {mostrar ? <EjemploUseEffect /> : null} 
    </>
  );
}