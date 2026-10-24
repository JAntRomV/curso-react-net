import type Pelicula from "../modelos/pelicula.model";
import PeliculaIndividual from "./PeliculaIndividual";
import styles from "./ListadoPeliculas.module.css";


export default function ListadoPeliculas(props: ListadoPeliculasProps){
    
    if(!props.peliculas){
        return 'Cargando';
    }
    else if(props.peliculas.length === 0){
        return 'No hay películas para mostrar';
    }
    else{    
        return(
            <div className={styles.div}>
                {props.peliculas.map(pelicula => <PeliculaIndividual pelicula={pelicula} key={pelicula.id} />)}
            </div>
        )
    }
}

interface ListadoPeliculasProps {
    peliculas?: Pelicula[];
}