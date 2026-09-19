export default function ContenidoDinamicoIf(props: ContenidoDinamicoIfProps) {
    if (props.calificacion > 90) {
        return (
            <h3 style={{ color: 'blue' }}>Excelente</h3>
        );
    }
    else if (props.calificacion >= 80 && props.calificacion <= 90) {
        return (
            <h3 style={{ color: 'green' }}>Muy bien</h3>
        );
    }
    else {
        return (
            <h3 style={{ color: 'red' }}>
                Puedes volver a intentarlo:
                <button>Reintentar</button>
            </h3>
        );
    }
}

interface ContenidoDinamicoIfProps {
  calificacion: number;
}