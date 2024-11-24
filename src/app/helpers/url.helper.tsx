const base: string = 'https://api.themoviedb.org/3';
const apiKey: string = 'acac13335e543051bf3452a3174f39d7';
const poster: string = 'https://image.tmdb.org/t/p/w';
const genre : string = "https://api.themoviedb.org/3/genre/movie/list"

const urlBuilder = {
    movieBaseUrl: `${base}/discover/movie?api_key=${apiKey}`,
    searchBaseUrl: `${base}/search/movie?api_key=${apiKey}`,
    posterBaseUrl:`${poster}`,
    currentMovieBaseUrl: `${base}/movie`,
    genreListBaseUrl:  `${genre}?api_key=${apiKey}`,
    popularMoviesUrl : `${base}/movie/popular?api_key=${apiKey}`,


    popularMovies: ()=> `${urlBuilder.popularMoviesUrl}`,
    allMovies: (page: number) => `${urlBuilder.movieBaseUrl}&page=${page}`,
    moviesByGenre: (genre: number, page: number) =>
        `${urlBuilder.movieBaseUrl}&with_genres=${genre}&page=${page}`,
    searchMovies: (query: string, page: number) =>
        `${urlBuilder.searchBaseUrl}&query=${query}&page=${page}`,
    movieDetails: (movieId:string) => `${urlBuilder.currentMovieBaseUrl}/${movieId}?api_key=${apiKey}`,
    genreList: ()=>`${urlBuilder.genreListBaseUrl}`
};

export default urlBuilder;