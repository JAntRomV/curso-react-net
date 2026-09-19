import styles from './App.module.css'
import { useState } from 'react';
import Cabecera from './Cabecera.tsx';
import MostrarTexto from './MostrarTexto.tsx';

export default function EjemploEstado() { 
  
  console.log('Carga App');

  const subtitulo = "Este es otro subtitulo";
  const duplicar = (valor: number) => valor * 2;
  const imagenURL = '/vite.svg';

  const cuadradoRojo = {
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    marginLeft: '1rem',
  };

  const manejarClick = () => {
    alert('¡Hola! Has hecho clic en el botón.');
  }

  // const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   console.log((e.target as HTMLInputElement).value);
  // }

  //Se utiliza useState para manejar el estado del texto ingresado en el input. 
  // Esto permite que React vuelva a renderizar el componente cada vez que el valor del input cambie, 
  // mostrando el texto actualizado en la interfaz de usuario.
  const [texto, setTexto] = useState('');

  let texto2 = '';
  console.log('texto2', texto2);

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    texto2 = e.currentTarget.value;
    setTexto(e.currentTarget.value)
  };

  return(
    // <React.Fragment>
    //     <h1>Hola mundo</h1>
    //     <h3>Bienvenido a mi primer proyecto de React</h3>
    // </React.Fragment>
    <>
      <Cabecera />
      <h3 className={styles.color}>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 5 es: {duplicar(5)}</h4>
      <img src={imagenURL} alt="Logo de Vite" />
      <div style={cuadradoRojo}></div>

      <button onClick={manejarClick}>Click me</button>
      <div>
        <input onKeyUp={(e) => manejarKeyUp(e)} type="text" placeholder="Escribe algo..." />
      </div>

      <MostrarTexto texto={texto} />
      
    </>
  );   
}
