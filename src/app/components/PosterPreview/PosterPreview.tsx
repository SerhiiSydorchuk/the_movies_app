import React, {FC} from 'react';

import './poster.css'

import urlBuilder from "@/app/helpers/url.helper";


type MovieProps = { poster_path: string
title: string
};

const PosterPreview:FC<MovieProps> = ({poster_path,title}) => {
    return (
        <div>
            <img className={'poster'} src={`${urlBuilder.posterBaseUrl}300${poster_path}`} alt={title}/>
        </div>
    );
};

export default PosterPreview;