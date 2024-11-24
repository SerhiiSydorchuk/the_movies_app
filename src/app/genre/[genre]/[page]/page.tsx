import React from "react";
import {getGenre} from "@/app/services/tmdb.service";
import MoviesList from "@/app/components/MoviesList/MoviesList";
import MyPagination from "@/app/components/Pagination/MyPagination";
import PageTitle from "@/app/components/PageTitle/PageTitle";

type genreParam = Promise<   {
    genre: string;
    page: string

}>

const GenrePage = async ({ params }: { params:  genreParam }) => {
    const {page, genre} = await params;
    const genreMovies =await getGenre.getAllMoviesByGenre( Number(genre),Number(page))
    const genresList = await getGenre.getGenreList()
    const currentGenre = genresList.genres.find(g => g.id === Number(genre))?.name;
    return (
        <div>
             <div>
                 <PageTitle title={'Movies in the genre'} name={currentGenre}/>
                 <MoviesList allMovies={genreMovies}/>
                <MyPagination currentPage={Number(page)} totalPages={genreMovies.total_pages}/>
            </div>
        </div>
    );
};

export default GenrePage;