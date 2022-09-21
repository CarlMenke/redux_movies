import { GetMovie, getPopularMovies, GetSimilarMovies } from "../../services/MovieServices";
import { GET_POPULAR_MOVIES ,CHANGE_PAGE, MOVIES_LOADING_TYPE } from "../types";

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