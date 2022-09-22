import {MOVIES_LOADING_TYPE,GET_POPULAR_MOVIES,CHANGE_PAGE,GET_GENRES,GET_MOVIES_BY_GENRE, RESET_PAGE } from "../types";

const initialState = {
    currentMovies:[],
    popularMovies: [],
    moviesByGenre: [],
    genres:[],
    searchedMovieId: null,
    page: 1
}

const MovieReducer = (state = initialState, action) => {
    switch (action.type){
        case MOVIES_LOADING_TYPE:
            return { ...state, moviesLoading: action.payload }
        case GET_POPULAR_MOVIES:
            return { ...state, popularMovies: action.payload } 
        case CHANGE_PAGE:
            console.log('state', state)
            let newPage = state.page
            action.payload?newPage++:newPage--
            return { ...state, page : newPage}
        case GET_GENRES:
            return { ...state, genres: action.payload } 
        case GET_MOVIES_BY_GENRE:
            return { ...state, moviesByGenre: action.payload } 
        case RESET_PAGE:
            return {...state , page: 1}
        default: 
        return { ...state }
    }
}

export default MovieReducer