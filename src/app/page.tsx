
import React from 'react';
import {getMovies} from "@/app/services/tmdb.service";
import MoviesList from "@/app/components/MoviesList/MoviesList";
import PageTitle from "@/app/components/PageTitle/PageTitle";


const Home = async ()  => {

    const popularMovies  = await getMovies.getPopularMovie();

    return (

        <div>
            <PageTitle title={'Most popular Movies:'} name={''}/>
            <MoviesList allMovies={popularMovies}/>


        </div>
    );
};

export default Home;
