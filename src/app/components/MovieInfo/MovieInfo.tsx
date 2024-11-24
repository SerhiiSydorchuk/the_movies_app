import React, {FC} from 'react';
import './MovieInfo.css'
import Link from "next/link";
import { IMovieInfo} from "../../../../types";
import StarsRating from "@/app/components/StarsRating/StarsRating";
import urlBuilder from "@/app/helpers/url.helper";
import GenreBadge from "@/app/components/GenreBadge/GenreBadge";

type MovieProps = {
    movie:IMovieInfo
}
const MovieInfo:FC<MovieProps> = ({movie}) => {
    return (
        <div className={'main_wrap'}>
            <div className={'wrap_movie_poster'}>
                <img className={'poster'} src={`${urlBuilder.posterBaseUrl}300${movie.poster_path}`} alt={movie.title}/>
                <StarsRating vote_average={movie.vote_average}/></div>

            <div className={'wrap_movie_info'}>
                <h3>{movie.title}</h3>
                <p>Tag: {movie.tagline}</p>
                <p>Status: {movie.status}</p>
                <p>Home page: <Link href={movie.homepage}>{movie.homepage}</Link></p>
                <p>Release
                    date: {movie.release_date.slice(8, 10)}.{movie.release_date.slice(5, 7)}.{movie.release_date.slice(0, 4)}</p>
                {movie.production_countries.map(country => <p key={country.iso_3166_1}>County of
                    production: {country.name}</p>)}
                  <GenreBadge key={movie.id} movie={movie}/>
                <p>Overview: {movie.overview}</p></div>
        </div>
    );
};

export default MovieInfo;