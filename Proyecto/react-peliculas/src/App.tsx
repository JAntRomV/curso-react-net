import { useEffect, useState } from "react";
import ListadoPeliculas from "./features/peliculas/componentes/ListadoPeliculas"
import type Pelicula from "./features/peliculas/modelos/pelicula.model"
import Boton from "./componentes/Boton";

function App() {

  const [peliculas, setPeliculas] = useState<AppState>({})

  useEffect(() => {
    setTimeout(() => {

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
        poster: "https://preview.redd.it/terrifier-4-in-space-v0-i9weryh2gpyd1.jpeg?auto=webp&s=de521ba30a0951b5468c923341316e667bde1faf"
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

      // const proximosEstrenos : Pelicula[] = []

      setPeliculas({enCines, proximosEstrenos}) 

    },1000);
  },[])



  return (
    <>
      <div className="container">
        <Boton>Botón de ejemplo</Boton>
        <h3>En Cines</h3>
        <ListadoPeliculas peliculas={peliculas.enCines} />

        <h3>Próximos Estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
      </div>
    </>
  )
}

interface AppState{
  enCines?: Pelicula[];
  proximosEstrenos?: Pelicula[];
}

export default App
