import React from 'react';
import {getMovies} from "@/services/tmdb.service";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import {IMovie} from "../../../../types";
import MovieInfo from "@/components/MovieInfo/MovieInfo";
import Stars from "@/components/StarsRating/StarsRating";



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