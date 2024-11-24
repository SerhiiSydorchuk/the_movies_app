import './header.css'
import GenreComponent from "@/app/components/genreComponent/genreComponent";
import Link from "next/link";
import {getGenre} from "@/app/services/tmdb.service";
import UserInfo from "@/app/components/UserInfo/UserInfo";
import {IMovieGenres} from "../../../../types";

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
                    <input className={'searchInput'}
                        type="text"
                        name="query"
                        placeholder="Search..."
                        required
                    />
                </form>
            </div>
            <UserInfo/>
        </header>

    );
};

export default Header;