import React, {FC} from 'react';
import './movieListCard.css';
import {IMovie} from "../../../types";
import PosterPreview from "@/components/ PosterPreview/PosterPreview";
import Link from "next/link";

type MovieProps = {
    movie:IMovie
}
const MoviesListCard:FC<MovieProps> = ({movie}) => {
    console.log(movie)
    return (
        <div  key={`${movie.id}`}>

            <Link href={`/movie/${movie.id}`}>
                <PosterPreview movie={movie}/>
                <h3>{movie.title}</h3>
            </Link>
        </div>
    );
};

export default MoviesListCard;