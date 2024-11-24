import React, {FC} from "react";

import './MoviesList.css'
import {IPageWithMovies} from "../../../../types";
import {getGenre} from "@/app/services/tmdb.service";
import MoviesListCard from "@/app/components/MovieListCard/MoviesListCard";


type MovieProps = {
    allMovies:IPageWithMovies
}

const MoviesList:FC<MovieProps> = async ({allMovies}) => {
console.log(allMovies.results)
const genreName = await getGenre.getGenreList()
    console.log(genreName)

    return (
        <div className={'moviesList'}>
            {allMovies.results.map(movie => <div key={movie.id}>
                <MoviesListCard movie={movie}/>
            </div>)}
        </div>
    );
};

export default MoviesList;