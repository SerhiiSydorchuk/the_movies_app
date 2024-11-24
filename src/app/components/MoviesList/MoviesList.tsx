import Link from "next/link";
import React, {FC} from "react";

import './MoviesList.css'
import {IPageWithMovies} from "../../../../types";
import PosterPreview from "@/app/components/PosterPreview/PosterPreview";

type MovieProps = {
    allMovies:IPageWithMovies
}

const MoviesList:FC<MovieProps> = async ({allMovies}) => {



    return (
        <div className={'moviesList'}>
            {allMovies.results.map(movie => <div key={movie.id} className={'movieCard'}><Link href={`/movie/${movie.id}`}><PosterPreview movie={movie}/></Link>
                <h3>{movie.title}</h3>
            </div>)}
        </div>
    );
};

export default MoviesList;