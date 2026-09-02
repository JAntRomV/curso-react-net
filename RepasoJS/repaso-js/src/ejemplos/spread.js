export default function SpreadEjemplo() {
    const sumar = (a, b) => a + b;

    const numeros = [1, 2];

    const resultado = sumar(numeros[0], numeros[1]);

    const resultadoConSpread = sumar(...numeros);

    // console.log("Resultado:", resultado);
    // console.log("Resultado con spread:", resultadoConSpread);

    const Numeros = [1,...numeros];
    const Numeros2 = [1,numeros];

    // console.log("Numeros:", Numeros);
    // console.log("Numeros2:", Numeros2);

    const OtrosNumeros = [3, 4, 5];

    const muchosNumeros = [...numeros, ...OtrosNumeros];

    const [primero, ...resto] = muchosNumeros;

    // console.log("Muchos números:", muchosNumeros);
    // console.log("Primero:", primero);
    // console.log("Resto:", resto);

    // const muchosNumeros2 = muchosNumeros;
    // muchosNumeros2.push(6);

    // console.log("Muchos números 2:", muchosNumeros2);
    // console.log("Muchos números original:", muchosNumeros);

    const muchosNumerosClonados = [...muchosNumeros];
    muchosNumerosClonados.push(6);

    // console.log("Muchos números clonados:", muchosNumerosClonados);
    // console.log("Muchos números original:", muchosNumeros);

    const persona = {
        nombre: "Juan",
        apellido: "Romero",
    }

    const persona2 = {
        ...persona,
        edad: 31,
        direccion: {
            ciudad: "Ciudad de México",
            pais: "México"
        }
    }

    const persona3 = {...persona2,}
    persona3.nombre = "Pedro";

    //Se extrae las primeras variables seleccionadas y se almacenan en unas variables, 
    //el resto de las propiedades se almacenan en un objeto nuevo llamado persona4
    const {edad, direccion, ...persona4} = persona2;

    // console.log("Persona 1:", persona);
    // console.log("Persona 2:", persona2);
    // console.log("Persona 3:", persona3);
    console.log(edad);
    console.log("Dirección:", direccion);
    console.log("Persona 4:", persona4);
}