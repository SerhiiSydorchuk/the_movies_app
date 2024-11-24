'use client'
import React, {FC, useEffect, useState} from 'react';
import StarRatings from 'react-star-ratings';
import {IMovie} from "../../../../types";


type Props = {
    movie:IMovie
}

const Stars:FC<Props> = ({movie}) => {
    const [rating, setRating] = useState(movie.vote_average / 2);

    const changeRating = (newRating: number) => {
        setRating(newRating);
        console.log("New rating:", newRating);
    };
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div>
            <StarRatings
                rating={rating}
                starRatedColor="gold"
                changeRating={changeRating}
                numberOfStars={5}
                name='rating'
                starDimension="30px"
                starSpacing="10px"
            />

        </div>
    );
};

export default Stars;