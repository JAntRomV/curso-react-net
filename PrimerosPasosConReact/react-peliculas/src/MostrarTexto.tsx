export default function MostrarTexto(props: MostrarTextoProps) {
  return (
    <div>
        <p>Has escrito: {props.texto}</p>
    </div>
  )
}

interface MostrarTextoProps {
  texto: string;
}
