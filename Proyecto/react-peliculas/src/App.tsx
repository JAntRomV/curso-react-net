import PeliculaIndividual from "./features/peliculas/componentes/PeliculaIndividual"
import type Pelicula from "./features/peliculas/modelos/pelicula.model"

function App() {

  const pelicula:Pelicula = {
    id: 1,
    titulo: "Matrix",
    poster: "https://m.media-amazon.com/images/I/51oBxmV-dML._AC_.jpg"
  }

  return (
    <>
      <PeliculaIndividual pelicula={pelicula} /> 
    </>
  )
}

export default App
