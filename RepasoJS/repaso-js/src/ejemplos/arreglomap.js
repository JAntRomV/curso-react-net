export default function MapEjemplo() {

    const numeros = [1, 2, 3, 4, 5];

    const cuadrados = numeros.map(numero => numero * numero);

    // console.log("Cuadrados:", cuadrados);

    const personas = [
        { id: 1, nombre: "Juan", edad: 30 },
        { id: 2, nombre: "María", edad: 25 },
        { id: 3, nombre: "Pedro", edad: 35 }
    ];

    const ids = personas.map(persona => persona.id);

    // console.log("Personas:", personas);
    // console.log("IDs:", ids);

    const nombresyedades = personas.map(persona => {
            return {
                nombre: persona.nombre,
                edad: persona.edad
            }
        } 
    );

    console.log("Nombres y edades:", nombresyedades);

    /**
     * Listado de valores a HTML
     * 
     * 1. Se crea un arreglo de elementos de lista a partir del arreglo de números.
     */
    const elementosDeLista = numeros.map(numero => `<li>${numero}</li>`);
    const lista = `<ul>${elementosDeLista.join('')}</ul>`;

    console.log("Elementos de lista:", elementosDeLista);
    console.log("Lista HTML:", lista);
    return lista;
}