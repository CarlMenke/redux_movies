import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadPopularMovies, changePage,resetPage } from "../store/actions/MovieActions";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const mapStatetoProps = ({ movieState }) => {
    return { movieState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchPopularMovies: (page) => dispatch(loadPopularMovies(page)),
        resetPage: () => dispatch(resetPage()),
        changePage: (flag) => dispatch(changePage(flag))
    }
}

const PopularMovies = (props) => {

    console.log('props in movies', props)

    useEffect(()=>{
        props.fetchPopularMovies(props.movieState.page)
    },[props.movieState.page])

    useEffect(()=>{
        props.resetPage()
    },[])

    if(props.movieState.popularMovies.results){
        return (
            <div>
                <h1>Popular Movies:</h1>
                {props.movieState.popularMovies.results.map(( movie, index )=>{
                    return (
                        <div key = {index} >
                            <MovieCard movie = {movie}/>
                        </div>
                    )
                })}
                <button onClick = {()=>{
                    if(props.movieState.page > 1){
                        props.changePage( false )
                    }
                    }}>Previous</button>
                <div style = {{display:"inline"}}>{props.movieState.page}</div>
                <button onClick = {()=>{
                    props.changePage( true )
                    }}>Next</button>
            </div>
        )
    }else{return(<div>Loading</div>)}
}

export default connect(mapStatetoProps,mapDispatchToProps)(PopularMovies)