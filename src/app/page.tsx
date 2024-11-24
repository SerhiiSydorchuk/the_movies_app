
import React from 'react';
import {getMovies} from "@/app/services/tmdb.service";
import MoviesList from "@/app/components/MoviesList/MoviesList";

const Home = async ()  => {

    const popularMovies  = await getMovies.getPopularMovie();

    return (

        <div>
            <MoviesList allMovies={popularMovies}/>

        </div>
    );
};

export default Home;
