import React, {FC} from 'react';
import Link from "next/link";
import {IGenresModel, IMovieGenres} from "../../../../types";


type GenreProps = {
    genre:IGenresModel
   }

const GenreComponent:FC<GenreProps> = ({genre}) => {
    const currentPage = 1
    return (
        <div>
            {genre.genres.map((genre: IMovieGenres) =>
             <li key={genre.id} ><Link className={'listGenresItem'} href={`/genre/${genre.id}/${currentPage}`}>{genre.name}</Link></li>)}
        </div>
    );
};

export default GenreComponent;