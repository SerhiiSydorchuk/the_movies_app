'use client'
import React, {FC, useEffect, useState} from 'react';
import StarRatings from 'react-star-ratings';



type Props = {
    vote_average:number
}

const Stars:FC<Props> = ({vote_average}) => {
    const [rating, setRating] = useState(vote_average / 2);

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
                starEmptyColor='slategray'

                changeRating={changeRating}
                numberOfStars={5}
                name='rating'
                starDimension="20px"
                starSpacing="10px"

            />

        </div>
    );
};

export default Stars;