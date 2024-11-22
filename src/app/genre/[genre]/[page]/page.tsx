import React from "react";
import {getGenre} from "@/services/tmdb.service";
import '@/components/MoviesList/MoviesList.css'
import MoviesList from "@/components/MoviesList/MoviesList";
import Pagination from "@/components/Pagination/Pagination";
type genreParam = Promise<   {
    genre: string;
    page: string
}>

const GenrePage = async ({ params }: { params:  genreParam }) => {

    const {page, genre} = await params;

    const genreMovies =await getGenre.getAllMoviesByGenre( Number(genre),Number(page))

    return (
        <div>
            <h1>Genre: {genre} </h1>
            <div>
                <h2>Movies in this genre:</h2>
                <MoviesList allMovies={genreMovies}/>
                <Pagination currentPage={Number(page)} totalPages={genreMovies.total_pages}/>
             </div>
        </div>
    );
};

export default GenrePage;