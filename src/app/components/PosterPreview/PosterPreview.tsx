import React, {FC} from 'react';
import urlBuilder from "@/app/helpers/url.helper";
import './poster.css'
import {IMovie} from "../../../../types";

type MovieProps = { movie: IMovie };
const PosterPreview:FC<MovieProps> = ({movie}) => {
    return (
        <div>
            <img className={'poster'} src={`${urlBuilder.posterBaseUrl}300${movie.poster_path}`} alt={movie.title}/>
        </div>
    );
};

export default PosterPreview;