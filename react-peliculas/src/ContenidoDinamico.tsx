export default function ContenidoDinamico(props: ContenidoDinamicoProps) {
    return (
        <div>
            {props.mostrarContenido ? <p>Mostrando contenido dinámico</p> : undefined}
            {/* {props.mostrarContenido ? <p>Mostrando contenido dinámico</p> : <p>Ocultando contenido</p>} */}
        </div>
    )
}

interface ContenidoDinamicoProps {
  mostrarContenido: React.ReactNode;
}