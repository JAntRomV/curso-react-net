export function funcionExportada() {
    console.log("Esta es una función exportada desde el módulo.");
}

function funcionPrivada() {
    console.log("Esta es una función privada que no se exporta.");
}

export let configuracionesGlobales = {
    idioma: "ESP",
    logueado: false
}

export default function funcionPrincipal() {
    console.log("Esta es la función principal del módulo.");
}

// export { funcionExportada, configuracionesGlobales };