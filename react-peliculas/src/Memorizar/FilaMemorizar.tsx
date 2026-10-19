import { memo } from "react";
import type Persona from "../persona.model";

const FilaMemorizar = memo(function FilaMemorizar({persona,removerPersona}: FilaProps) {
  
  console.log(`Renderizando Fila ${persona.nombre}`);
  
  return (
    <tr>
      <td>{persona.id}</td>
      <td>{persona.nombre}</td>
      <td>{persona.departamento}</td>
      <td>
        <button onClick={() => removerPersona(persona)}>Eliminar</button>
      </td>
    </tr>
  )
});

interface FilaProps {
  persona: Persona;
  removerPersona: (persona: Persona) => void;
}

export default FilaMemorizar;