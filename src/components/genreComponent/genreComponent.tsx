import React, {FC} from 'react';
import Link from "next/link";
import {IMovieGenres} from "../../../types";

type GenreProps = {
    genre:IMovieGenres
   }

const GenreComponent:FC<GenreProps> = ({genre}) => {
    const currentPage = 1
    return (
        <div>
             <li><Link href={`/genre/${genre.id}/${currentPage}`}>{genre.name}</Link></li>
        </div>
    );
};

export default GenreComponent;