import styles from './App.module.css'

export default function App() { 
  
  const subtitulo = "Este es otro subtitulo";
  const duplicar = (valor: number) => valor * 2;
  const imagenURL = '/vite.svg';

  const cuadradoRojo = {
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    marginLeft: '1rem',
  };

  return(
    // <React.Fragment>
    //     <h1>Hola mundo</h1>
    //     <h3>Bienvenido a mi primer proyecto de React</h3>
    // </React.Fragment>
    <>
      <h1 className="rojo">Hola mundo</h1>
      <h3 className={styles.color}>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 5 es: {duplicar(5)}</h4>
      <img src={imagenURL} alt="Logo de Vite" />
      <div style={cuadradoRojo}></div>
    </>
  );   
}
