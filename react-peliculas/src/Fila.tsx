import type Persona from "./persona.model";

// export default function Fila(props: FilaProps) {
//   return (
//     <tr>
//       <td>{props.persona.id}</td>
//       <td>{props.persona.nombre}</td>
//       <td>{props.persona.departamento}</td>
//       <td>
//         <button onClick={() => props.removerPersona(props.persona)}>Eliminar</button>
//       </td>
//     </tr>
//   );
// }

//Destructuring props
export default function Fila({persona,removerPersona}: FilaProps) {
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