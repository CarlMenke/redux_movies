import { GetMovie, getPopularMovies, GetSimilarMovies, getGenres, getMoviesByGenre } from "../../services/MovieServices";
import { RESET_PAGE, GET_POPULAR_MOVIES ,CHANGE_PAGE, MOVIES_LOADING_TYPE,GET_GENRES,GET_MOVIES_BY_GENRE } from "../types";

export const loadPopularMovies = (page) =>{
    return async (dispatch) =>{
        try{
            const popularMovies = await getPopularMovies(page)

            dispatch({
                type:GET_POPULAR_MOVIES,
                payload:popularMovies
            })
        }catch (error){
            throw error
        }
    }
} 

export const changePage = (flag) =>{
    return (dispatch) =>{
        try{
            dispatch({
                type:CHANGE_PAGE,
                payload:flag
            })
        }catch (error){
            throw error
        }
    }
} 

export const resetPage = () => {
    return (dispatch) =>{
        try{
            dispatch({
                type:RESET_PAGE
            })
        }catch (error){
            throw error
        }
    }
}

export const loadGenres = () => {
    return async (dispatch) =>{
        try{
            const genres = await getGenres()
            dispatch({
                type:GET_GENRES,
                payload:genres
            })
        }catch (error){
            throw error
        }
    }
}

export const loadMoviesByGenre = (genre_id,page) => {
    return async (dispatch) =>{
        try{
            const movies = await getMoviesByGenre(genre_id,page)
            dispatch({
                type:GET_MOVIES_BY_GENRE,
                payload:movies
            })
        }catch (error){
            throw error
        }
    }
}