export default function TemplateStringsEjemplo() {
    const nombre = 'Juan';
    const pais = "México";
    const saludo = "Hola, " + nombre + " desde " + pais + "!"; // Concatenación tradicional
    const saludoTemplate = `Hola, ${nombre} desde ${pais}!`; // Template string

    const sumar = (a, b) => a + b;

    const mensaje = `Hola ${nombre},
    Esta es una carta

    La Suma de 5 y 3 es: ${sumar(5, 3)}
    Saludos,
    ${pais}`;

    console.log(saludo);
    console.log(saludoTemplate);
    console.log(mensaje);
}