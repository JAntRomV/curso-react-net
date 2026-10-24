import { memo, useCallback, useState } from "react";
import type Persona from "../persona.model";
import FilaMemorizar from "./FilaMemorizar";
import { ErrorBoundary } from "react-error-boundary";

const TablaMemoizar = memo(function TablaMemorizar(){

    console.log("Renderizando TablaMemorizar");

    const personasFuente: Persona[] = [
        {id: 1, nombre: 'Juan', departamento: 'Ventas'},
        {id: 2, nombre: 'Ana', departamento: 'Marketing'},
        {id: 3, nombre: 'Pedro', departamento: 'Finanzas'}
    ];

    const [personas, setPersonas] = useState(personasFuente);

    const removerPersona = useCallback((persona: Persona) => {
        setPersonas(estadoActual => estadoActual.filter(p => p.id !== persona.id));
    }, []);

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
                {personas.map(persona => 
                <ErrorBoundary key={persona.id} fallback={<>
                    <tr>
                        <td colSpan={3} style={{color: "red"}}>Error al renderizar la fila de {persona.nombre}</td>
                    </tr>
                </>
                }>
                    <FilaMemorizar key={persona.id} persona={persona} removerPersona={removerPersona} />
                </ErrorBoundary>
                )}
            </tbody>
        </table>
    );
});

export default TablaMemoizar;