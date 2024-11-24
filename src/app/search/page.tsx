import {getMovies} from "@/app/services/tmdb.service";
import MoviesList from "@/app/components/MoviesList/MoviesList";
import React from "react";
import SearchPagination from "@/app/components/Pagination/SearchPagination";
import PageTitle from "@/app/components/PageTitle/PageTitle";


type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const SearchPage = async (props: { searchParams: SearchParams }) => {
    const searchParams = await props.searchParams;
    const query = searchParams.query as string | undefined || "";
    const currentPage = Number(searchParams.page) || 1;

    if (!query) {
        return <div>No search query provided</div>;
    }

       const allMovies = await getMovies.searchMovies(query, currentPage);

    if (!allMovies || allMovies.results.length === 0) {
        return <div>No allMovies found for query: {query}</div>;
    }

    return (
        <div>
            <PageTitle title={'Search Results for'} name={query}/>
            <MoviesList allMovies={allMovies} />
            <SearchPagination currentPage={currentPage} totalPages={allMovies.total_pages} query={{query}}/>
        </div>
    );
};

export default SearchPage;





// const SearchPage = async ({searchParams}: {searchParams: { query?: string; page?: string };
// }) => {
//     const query = searchParams.query || "";
//     const currentPage = parseInt(searchParams.page || "1", 10);
//
//     // Виконуємо запит до API
//     const allMovies = await getMovies.searchMovies(query, currentPage);
//
//
//     return (
//         <div>
//             <h1>Search Results for: {query}</h1>
//             {allMovies.results.length > 0 ? (
//                 <ul>
//                     {allMovies.results.map((movie) => (
//                         <li key={movie.id}>{movie.title}</li>
//                     ))}
//                 </ul>
//             ) : (<p>No allMovies found.</p>)}
//
//             {/* Пагінація */}
//             <div>
//                 {currentPage > 1 && (
//                     <Link
//                         href={{
//                             pathname: "/search",
//                             query: { query, page: currentPage - 1 },
//                         }}>
//                         <button>Previous Page</button>
//                     </Link>
//                 )}
//                 {currentPage < allMovies.total_pages && (
//                     <Link
//                         href={{
//                             pathname: "/search",
//                             query: { query, page: currentPage + 1 },
//                         }}>
//                         <button>Next Page</button>
//                     </Link>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default SearchPage;