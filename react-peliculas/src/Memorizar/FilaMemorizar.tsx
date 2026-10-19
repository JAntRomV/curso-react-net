import type Persona from "../persona.model";

export default function FilaMemorizar({persona,removerPersona}: FilaProps) {
  return (
    <tr>
      <td>{persona.id}</td>
      <td>{persona.nombre}</td>
      <td>{persona.departamento}</td>
      <td>
        <button onClick={() => removerPersona(persona)}>Eliminar</button>
      </td>
    </tr>
  );
}

interface FilaProps {
  persona: Persona;
  removerPersona: (persona: Persona) => void;
}