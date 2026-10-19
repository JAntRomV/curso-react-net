import Abuelo from "./Abuelo";
import ValorContext from "./ValorContext";

export default function EjemploUseContext() {
    const texto = "El texto a pasar entre componentes";
    return (
        <ValorContext.Provider value={texto}>
            <Abuelo />
        </ValorContext.Provider>
    )
}