import { MOVIES_LOADING_TYPE,GET_POPULAR_MOVIES,CHANGE_POPULAR_MOVIES_PAGE } from "../types";

const initialState = {
    popularMovies: [],
    searchedMovieId: null,
    popularMoviesPage: 1
}

const MovieReducer = (state = initialState, action) => {
    switch (action.type){
        case MOVIES_LOADING_TYPE:
            return { ...state, moviesLoading: action.payload }
        case GET_POPULAR_MOVIES:
            return { ...state, popularMovies: action.payload } 
        case CHANGE_POPULAR_MOVIES_PAGE:
            let newPopularMoviesPage = state.popularMoviesPage
            action.payload?newPopularMoviesPage++:newPopularMoviesPage--
            return { ...state, popularMoviesPage : newPopularMoviesPage}
        default: 
        return { ...state }
    }
}

export default MovieReducer