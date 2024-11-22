import urlBuilder from "@/helpers/url.helper";
import {IGenresModel, IMovie, IPageWithMovies} from "../../types";

export const getMovies = {
    getAllMovies: async (page: number ): Promise<IPageWithMovies> => {
        const movies:IPageWithMovies = await fetch(urlBuilder.allMovies(page))
            .then(value => value.json())
        return movies
    },

      searchMovies:  async (query: string, page: number):Promise<IPageWithMovies> => {
        const movies = await fetch(urlBuilder.searchMovies(query,page)).then(value => value.json())
          return movies
      },
      getCurrentMovie: async (movieId:string):Promise<IMovie> => {
        const movie = await fetch(urlBuilder.movieDetails(movieId)).then(value => value.json())
          return movie
      }
}

export const getGenre = {
    getGenreList : async ():Promise<IGenresModel> => {
      const genreList =  await  fetch(urlBuilder.genreList()).then(value => value.json())
        return  genreList
    },
    getAllMoviesByGenre: async (genre: number, page: number):Promise<IPageWithMovies>=>{
        const movies =await  fetch(urlBuilder.moviesByGenre(genre, page)).then(value => value.json())
        return movies
    },
}