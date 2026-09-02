export default function VariablesEjemplo() {
    // Declaración de variables con var, let y const
    let variableLet = "Soy una variable declarada con let";
    let edad = 30;
    let fecha = new Date();
    let persona = {
        nombre: "Juan",
        apellido: "Pérez",
        edad: 30,
        fechaActual: new Date(),
        estaFirmado: true
    }

    let miFuncion = function duplicarValor(valor) {
        return valor * 2;
    }

    var pais = "México";

    for(let i = 0; i <= 10; i++) {
        // console.log("Iteración:", i);
    }

    // console.log("Valor de i después del bucle:", i); // i es accesible aquí debido a la declaración con var
    const variableConst = "Soy una constante declarada con const"; 
    // variableConst = "Intento de reasignación"; // Esto generará un error, ya que las constantes no pueden ser reasignadas

    const ingredientes = ['queso', 'tomate', 'albahaca'];
    ingredientes.push('aceite de oliva'); // Esto es válido, ya que estamos modificando el contenido del array, no reasignando la constante
    console.log("Ingredientes:", ingredientes);
}