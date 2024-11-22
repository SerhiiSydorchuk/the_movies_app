interface IGenresModel{
	genres: IGenreModel[];
}



interface IMovieInfo {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

 interface IPageWithMovies {
	 page: number;
	 results: IMovie[];
     total_pages: number;
     total_results: number;
 }

export interface IMovie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection:any;
	budget: number;
	genres: IMovieGenres[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: IMovieProduction_companies[];
	production_countries: IMovieProduction_countries[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: IMovieSpoken_languages[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
export interface IMovieGenres {
	id: number;
	name: string;
}
export interface IMovieProduction_companies {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}
export interface IMovieProduction_countries {
	iso_3166_1: string;
	name: string;
}
export interface IMovieSpoken_languages {
	english_name: string;
	iso_639_1: string;
	name: string;
}