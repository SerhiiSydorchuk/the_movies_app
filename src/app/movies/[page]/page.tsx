import React from 'react';
import {getMovies} from "@/services/tmdb.service";
import MoviesList from "@/components/MoviesList/MoviesList";
import Pagination from "@/components/Pagination/Pagination";




type Param = Promise<{ page: string }>;

const MoviePage = async ({params}:{params:Param}) => {
    const {page} = await params;
    const allMovies = await getMovies.getAllMovies(Number(page))


    return (
        <div>
            <MoviesList allMovies={allMovies} />
            <Pagination currentPage={Number(page)} totalPages={allMovies.total_pages} />


        </div>
    );
};

export default MoviePage;