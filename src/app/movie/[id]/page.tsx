import React from 'react';
import {getMovies} from "@/app/services/tmdb.service";

import {IMovie} from "../../../../types";
import MoviesListCard from "@/app/components/MoviesListCard/MoviesListCard";
import Stars from "@/app/components/StarsRating/StarsRating";
import MovieInfo from "@/app/components/MovieInfo/MovieInfo";




type Param = Promise<{ id:string}>
const MoviePage = async ({params}:{params:Param}) => {
 const {id}= await params
        const movieCard :IMovie  = await getMovies.getCurrentMovie(id)
    console.log(movieCard)



    return (
        <div>
               <MoviesListCard key={movieCard.id} movie={movieCard}/>
               <Stars movie={movieCard}/>
               <MovieInfo movie={movieCard}/>
        </div>
    );
};

export default MoviePage;