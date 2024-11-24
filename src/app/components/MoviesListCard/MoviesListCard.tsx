import React, {FC} from 'react';
import './movieListCard.css';
import Link from "next/link";
import PosterPreview from "@/app/components/PosterPreview/PosterPreview";
import {IMovie} from "../../../../types";

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