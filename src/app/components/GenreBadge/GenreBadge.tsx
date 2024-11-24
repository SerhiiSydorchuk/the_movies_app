import React, {FC} from 'react';
import { IMovieInfo} from "../../../../types";
import Link from "next/link";
type BadgeProps = {
    movie:IMovieInfo
}
const GenreBadge:FC<BadgeProps> = ({movie}) => {
    return (
        <div>
            <ul>Genres:
            {movie.genres.map(genre => <Link key={genre.id} href={`/genre/${genre.id}/1`}>
                <h6>
                    <li className={'badge text-bg-secondary '}>{genre.name}</li>
                </h6>
            </Link>)}</ul>
        </div>
    );
};

export default GenreBadge;