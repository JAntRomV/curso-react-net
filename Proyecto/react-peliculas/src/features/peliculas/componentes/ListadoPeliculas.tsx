import type Pelicula from "../modelos/pelicula.model";
import PeliculaIndividual from "./PeliculaIndividual";
import styles from "./ListadoPeliculas.module.css";
import ListadoGenerico from "../../../componentes/ListadoGenerico";


export default function ListadoPeliculas(props: ListadoPeliculasProps){
    return(
        <ListadoGenerico<Pelicula> listado={props.peliculas} listadoVacioUI={<p>No hay películas disponibles para mostrar</p>}>
             <div className={styles.div}>
                {props.peliculas?.map(pelicula => <PeliculaIndividual pelicula={pelicula} key={pelicula.id} />)}
            </div>
        </ListadoGenerico>
    )
}

interface ListadoPeliculasProps {
    peliculas?: Pelicula[];
}