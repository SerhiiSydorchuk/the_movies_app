import './header.css'
import GenreComponent from "@/app/components/genreComponent/genreComponent";
import Link from "next/link";
import {getGenre} from "@/app/services/tmdb.service";
import UserInfo from "@/app/components/UserInfo/UserInfo";


const Header = async () => {
    const listGenres = await getGenre.getGenreList();


    return (
        <header className={'menu'}>
            <div className={'logo'}>
                <Link href={'/'}>
                    <img src="/favicon.ico" alt="logo"/>
                      <h1>MV</h1>
                </Link>
            </div>
            <div className={'btn_genre'}>
                <button className={'btn_menu'}>GENRE</button>
                <ul className={'listGenres'}>
                    <GenreComponent  genre={listGenres}/>
                </ul>
            </div>
            <Link href={'/movies/1'}>
                <button className={'btn_menu'}>All MOVIE</button>
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