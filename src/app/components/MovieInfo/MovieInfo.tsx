import React, {FC} from 'react';

import Link from "next/link";
import {IMovie} from "../../../../types";
type MovieProps = {
    movie:IMovie
}
const MovieInfo:FC<MovieProps> = ({movie}) => {
    return (
        <div>
            <h3>{movie.title}</h3>
            <p>Tag: {movie.tagline}</p>
            <p>Status: {movie.status}</p>
            <p>Home page: <Link href={movie.homepage}>{movie.homepage}</Link></p>
            <p>Release date: {movie.release_date.slice(8, 10)}.{movie.release_date.slice(5,7)}.{movie.release_date.slice(0, 4)}</p>
            {movie.production_countries.map(country => <p key={country.iso_3166_1}>County of production: {country.name}</p>)}
            <ul>Genres: {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}</ul>
            <p>Overview: {movie.overview}</p>
        </div>
    );
};

export default MovieInfo;