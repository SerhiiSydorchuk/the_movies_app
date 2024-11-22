import React, {FC} from 'react';
import urlBuilder from "@/helpers/url.helper";
import {IMovie} from "../../../types";
import './poster.css'

type MovieProps = { movie: IMovie };
const PosterPreview:FC<MovieProps> = ({movie}) => {
    return (
        <div>
            <img className={'poster'} src={`${urlBuilder.posterBaseUrl}300${movie.poster_path}`} alt={movie.title}/>
        </div>
    );
};

export default PosterPreview;