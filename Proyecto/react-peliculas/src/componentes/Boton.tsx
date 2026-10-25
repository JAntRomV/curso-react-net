export default function Boton(props: BotonProps){
    return (
        <button className="btn btn-primary">
            {props.children}
        </button>
    )
}

interface BotonProps {
    children: React.ReactNode;
}