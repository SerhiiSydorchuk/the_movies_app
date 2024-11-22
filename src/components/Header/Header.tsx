import './header.css'
import GenreComponent from "@/components/genreComponent/genreComponent";
import Link from "next/link";
import {getGenre} from "@/services/tmdb.service";
import {IMovieGenres} from "../../../types";
import UserInfo from "@/components/UserInfo/UserInfo";

const Header = async () => {
    const listGenres = await getGenre.getGenreList();

    return (
        <header className={'menu'}>
            <div className={'btn_genre'}>
                <button className={'btn'}>GENRE</button>
                <ul className={'listGenres'}>
                    {listGenres.genres.map((genre: IMovieGenres) => <GenreComponent key={genre.id} genre={genre}/>)}
                </ul>
            </div>
            <Link href={'/movies/1'}>
                <button className={'btn'}>All MOVIE</button>
            </Link>

            <div>
                <form action="/search" method="get">
                    <input
                        type="text"
                        name="query"
                        placeholder="Search for a movie..."
                        required
                    />
                    <button className={'btn'} type="submit">Search</button>
                </form>
            </div>
            <UserInfo/>

        </header>

    );
};

export default Header;