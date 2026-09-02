function duplicar(valor) {
    return valor * 2;
}

let funcionAnonima = (valor) => {
    return valor * 2;
};

let funcionAnonima2 = valor => valor * 2;

funcionAnonima(5); // 10
let sumar = (sumando1, sumando2) => sumando1 + sumando2;
sumar(1, 2); // 3
let imprimirAlgo = () => console.log("Hola mundo");
imprimirAlgo(); // Hola mundo

function funcionQueRecibeOtraFuncion(funcion){
    funcion();
}

funcionQueRecibeOtraFuncion(imprimirAlgo); // Hola mundo desde una función que recibe otra función  
funcionQueRecibeOtraFuncion(() => console.log("Hola mundo desde una función que recibe otra función")); // Hola mundo desde una función que recibe otra función

export function EjemploThis(){
    const persona = {
        nombre: "Juan",
        apellido: "Pérez",
        edad: 30,
        saludarNormal: function() {
            setTimeout(function() {
                console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
            }, 1000);
        },
        saludarFlecha: function() {
            setTimeout(() => {
                console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
            }, 1000);
        }
    }

    persona.saludarNormal(); // Hola, me llamo undefined undefined y tengo undefined años.
    persona.saludarFlecha(); // Hola, me llamo Juan Pérez y tengo 30 años.
}