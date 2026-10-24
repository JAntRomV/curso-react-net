import { useEffect, useState } from "react";

export default function EjemploUseEffect() {

    const [clicks, setClicks] = useState(0);
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(()=>{
    console.log('Componente ha cargado');

    return () => console.log('Componente se va a desmontar');
  },[])

  useEffect(()=>{
    console.log('Hook del click');
    document.title = `Clicks: ${clicks}`;
  },[clicks]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setHora(new Date().toLocaleTimeString());
    },1000);

    return () => clearInterval(interval);
  },[]);

  return (
    <div className="container">
      <h1>Ejemplo de useEffect</h1>

      <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      <div>La hora actual es {hora}</div>
    </div>
  );
}