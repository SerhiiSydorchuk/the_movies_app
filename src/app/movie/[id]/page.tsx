import React from 'react';
import {getMovies} from "@/app/services/tmdb.service";

import {IMovieInfo} from "../../../../types";
import MovieInfo from "@/app/components/MovieInfo/MovieInfo";
import PosterPreview from "@/app/components/PosterPreview/PosterPreview";
import StarsRating from "@/app/components/StarsRating/StarsRating";




type Param = Promise<{ id:string}>
const MoviePage = async ({params}:{params:Param}) => {
 const {id}= await params
        const movieCard :IMovieInfo  = await getMovies.getCurrentMovie(id)
    console.log(movieCard)



    return (
        <div>
                           <MovieInfo movie={movieCard}/>
        </div>
    );
};

export default MoviePage;