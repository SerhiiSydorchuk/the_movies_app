import React, {FC} from 'react';
import './movieListCard.css';
import Link from "next/link";
import PosterPreview from "@/app/components/PosterPreview/PosterPreview";
import { IMovie} from "../../../../types";
import Stars from "@/app/components/StarsRating/StarsRating";


type MovieProps = {
    movie: IMovie
    };
const MoviesListCard:FC<MovieProps> = ({movie}) => {

    return (
        <div className={'wrap_movie_list'} key={`${movie.id}`}>
            <Link href={`/movie/${movie.id}`}>
                <PosterPreview poster_path={movie.poster_path} title={movie.title}/>
            </Link>
            <Stars vote_average={movie.vote_average}/>
            <h4 className={'movie_title'}>{movie.title}</h4>

        </div>
    );
};

export default MoviesListCard;