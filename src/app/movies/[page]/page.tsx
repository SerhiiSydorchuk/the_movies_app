import React from 'react';
import {getMovies} from "@/app/services/tmdb.service";
import MoviesList from "@/app/components/MoviesList/MoviesList";
import MyPagination from "@/app/components/Pagination/MyPagination";
import PageTitle from "@/app/components/PageTitle/PageTitle";







type Param = Promise<{ page: string }>;

const MoviePage = async ({params}:{params:Param}) => {
    const {page} = await params;
    const currentPage = Number(page)
    const allMovies = await getMovies.getAllMovies(currentPage)


    return (
        <div>
            <PageTitle title={'All Movies'} name={''}/>
            <MoviesList allMovies={allMovies} />
           <MyPagination currentPage={currentPage} totalPages={allMovies.total_pages}/>
        </div>
    );
};

export default MoviePage;