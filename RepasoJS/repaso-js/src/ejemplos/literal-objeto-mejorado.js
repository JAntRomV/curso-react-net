export default function LiteralObjetoMejoradoEjemplo() {
   
    let apellido = "Romero";
   
    const paisProp = "pais";
    const paisValor = "México";

    let persona = {
        nombre: "Juan",
        apellido, // Uso de la sintaxis de propiedad abreviada
        edad: 30,
        fechaActual: new Date(),
        funcionNormal() {},
        functionFlecha: () => {},
        [paisProp]: paisValor // Uso de la sintaxis de propiedad computada
    }

   const RetornarPersona = (prop) => persona[prop]; 

   console.log("Nombre:", RetornarPersona("apellido"));

    console.log(persona);
}