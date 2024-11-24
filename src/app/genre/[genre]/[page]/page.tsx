import React from "react";
import {getGenre} from "@/app/services/tmdb.service";
import '@/components/MoviesList/MoviesList.css'
import MoviesList from "@/app/components/MoviesList/MoviesList";
import MyPagination from "@/app/components/Pagination/MyPagination";

type genreParam = Promise<   {
    genre: string;
    page: string
}>

const GenrePage = async ({ params }: { params:  genreParam }) => {
    const {page, genre} = await params;
    const genreMovies =await getGenre.getAllMoviesByGenre( Number(genre),Number(page))

    return (
        <div>
             <div>
                <MoviesList allMovies={genreMovies}/>
                <MyPagination currentPage={Number(page)} totalPages={genreMovies.total_pages}/>
            </div>
        </div>
    );
};

export default GenrePage;