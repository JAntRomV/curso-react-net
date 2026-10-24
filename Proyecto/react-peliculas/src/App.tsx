import ListadoPeliculas from "./features/peliculas/componentes/ListadoPeliculas"
import PeliculaIndividual from "./features/peliculas/componentes/PeliculaIndividual"
import type Pelicula from "./features/peliculas/modelos/pelicula.model"

function App() {

  // const pelicula:Pelicula = {
  //   id: 1,
  //   titulo: "Matrix",
  //   poster: "https://m.media-amazon.com/images/I/51oBxmV-dML._AC_.jpg"
  // }

  const enCines : Pelicula[] = [{
    id: 1,
    titulo: "Matrix",
    poster: "https://m.media-amazon.com/images/I/51oBxmV-dML._AC_.jpg"
  },
  {
      id: 2,
      titulo: "Terminator",
      poster: "https://m.media-amazon.com/images/M/MV5BMjAyMTk3ODA2MF5BMl5BanBnXkFtZTcwMTkzNDQyNA@@._V1_.jpg"
  },
  {
      id: 3,
      titulo: "Rocky",
      poster: "https://i.redd.it/6uyom40zv7fc1.jpeg"
  }]

  const proximosEstrenos : Pelicula[] = [{
    id: 4,
    titulo: "Terrifier IV: Mas Terrifier que nunca",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/ac15f8539bc900c1da2bab48af2b147613a03e78011b284666d103ef098c2b65.jpg"
  },
  {
      id: 5,
      titulo: "Terror en el desierto: El origen",
      poster: "https://cafeanimelair.com/wp-content/uploads/2017/03/tremors-1.jpg"
  },
  {
      id: 6,
      titulo: "Event Horizon vs Hellraiser: El regreso de los cenobitas",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ieHZkOisli5MU47HYFe6UvuRm1rrLI6zksdz1RrA3KJ0gUWTiYWv5hNo&s=10"
  }]

  return (
    <>
      <h3>En Cines</h3>
      <ListadoPeliculas peliculas={enCines} />

      <h3>Próximos Estrenos</h3>
      <ListadoPeliculas peliculas={proximosEstrenos} />
    </>
  )
}

export default App
