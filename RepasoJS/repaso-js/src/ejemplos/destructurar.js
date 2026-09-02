export default function DestructurarEjemplo() {
    let persona = {
        nombre: "Juan",
        apellido: "Romero",
        edad: 30,
        pais: "México"
    }

    // const nombre = persona.nombre;
    // const apellido = persona.apellido;
    // const edad = persona.edad;
    // const pais = persona.pais;

    // console.log("Nombre:", nombre);
    // console.log("Apellido:", apellido);
    // console.log("Edad:", edad);
    // console.log("País:", pais);

    const { nombre, apellido, edad, pais } = persona;

    // console.log(nombre, apellido, edad, pais);

    const ObtenerDireccion = () => {
        return {
            calle: "Av. Principal",
            ciudad: "Ciudad de México",
            pais: "México"
        }
    }

    const { calle, ciudad, pais: paisDireccion } = ObtenerDireccion();

    // console.log("Calle:", calle);
    // console.log("Ciudad:", ciudad);
    // console.log("País:", paisDireccion);

    const imprimirNombre = (persona) => {
        console.log(persona.nombre);

        const nombreEnMayusculas = persona.nombre.toUpperCase();
        console.log("Nombre en mayúsculas:", nombreEnMayusculas);
    }

    const imprimirNombre2 = ({ nombre }) => {
        console.log(nombre);

        const nombreEnMayusculas = nombre.toUpperCase();
        console.log("Nombre en mayúsculas:", nombreEnMayusculas);
    }

    // imprimirNombre(persona);
    // imprimirNombre2(persona);

    const numeros = [1, 2, 3, 4, 5];

    const [primero, segundo, tercero, cuarto, quinto] = numeros;

    // console.log("Primero:", primero);
    // console.log("Segundo:", segundo);
    // console.log("Tercero:", tercero);
    // console.log("Cuarto:", cuarto);
    // console.log("Quinto:", quinto);

    const retornarArreglo = () => {
        return ["Hola", "Mundo"];
    }

    const [saludo, nombreSaludo] = retornarArreglo();

    console.log(saludo, nombreSaludo);
}