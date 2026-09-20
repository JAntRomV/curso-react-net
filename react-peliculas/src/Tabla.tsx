import { useState } from "react";
import type Persona from "./persona.model";

export default function Tabla(){
    const personasFuente: Persona[] = [
        {id: 1, nombre: 'Juan', departamento: 'Ventas'},
        {id: 2, nombre: 'Ana', departamento: 'Marketing'},
        {id: 3, nombre: 'Pedro', departamento: 'Finanzas'}
    ];

    const [personas, setPersonas] = useState(personasFuente);

    const removerPersona = (persona: Persona) => {
        setPersonas(personas.filter(p => p.id !== persona.id));
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Departamento</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {personas.map(persona => (
                    <tr key={persona.id}>
                        <td>{persona.id}</td>
                        <td>{persona.nombre}</td>
                        <td>{persona.departamento}</td>
                        <td>
                            <button onClick={() => removerPersona(persona)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}