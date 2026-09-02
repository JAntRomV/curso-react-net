import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import funcionPrincipal, { funcionExportada as aliasDeLaFunc, configuracionesGlobales } from './ejemplos/modulo.js'
// import VariablesEjemplo from './ejemplos/variables.js'
import {EjemploThis} from './ejemplos/funciones-flecha.js'
import TemplateStringsEjemplo from './ejemplos/template-strings.js'
import OperadorTernarioEjemplo from './ejemplos/operadorTernario.js'
import LiteralObjetoMejoradoEjemplo from './ejemplos/literal-objeto-mejorado.js'
import DestructurarEjemplo from './ejemplos/destructurar.js'
import SpreadEjemplo from './ejemplos/spread.js'
import { Rectangulo, Cuadrado } from './ejemplos/clases.js'
import MapEjemplo from './ejemplos/arreglomap.js'
// import { Promesa, AsyncAwait } from './ejemplos/asincrona.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <div id="listado">
  </div>
`

setupCounter(document.querySelector('#counter'))

// aliasDeLaFunc();

// console.log("Configuraciones globales:", configuracionesGlobales.idioma);

// funcionPrincipal();

// VariablesEjemplo();
// TemplateStringsEjemplo();

// OperadorTernarioEjemplo();
// LiteralObjetoMejoradoEjemplo();
// DestructurarEjemplo();
// SpreadEjemplo();
// const rectangulo = new Rectangulo(10, 5);
// console.log("Rectángulo:", rectangulo);
// rectangulo.area();

// const rectangulo2 = new Rectangulo(7, 3);
// console.log("Rectángulo 2:", rectangulo2);
// rectangulo2.area();

// const cuadrado = new Cuadrado(4);
// console.log("Cuadrado:", cuadrado);
// cuadrado.area();

// const lista = MapEjemplo();
// document.querySelector('#listado').innerHTML = lista;

// Promesa();
// await AsyncAwait();
window.nombre = "Antonio";

EjemploThis();