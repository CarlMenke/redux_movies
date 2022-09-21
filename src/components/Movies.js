import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadPopularMovies, changePopularMoviesPage } from "../store/actions/MovieActions";
import { useParams } from "react-router-dom";

const mapStatetoProps = ({ movieState }) => {
    return { movieState }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchPopularMovies: (page) => dispatch(loadPopularMovies(page)),
        changePopularMoviesPage: (flag) => dispatch(changePopularMoviesPage(flag))
    }
}

const Movies = (props) => {

    useEffect(()=>{
        props.fetchPopularMovies(props.movieState.popularMoviesPage)
    },[])

    if(props.movieState.popularMovies.results){
        return (
            <div>
                <h1>Popular Movies:</h1>
                {props.movieState.popularMovies.results.map((movie,index)=>{
                    return (
                        <div key = {index}>{movie.title}</div>
                    )
                })}
                <button onClick = {()=>{

                }}>Previous</button>

                <div style = {{display:"inline"}}>{props.movieState.popularMoviesPage}</div>

                <button onClick = {()=>{

                }}>Next</button>
            </div>
        )
    }else{return(<div>Loading</div>)}

}

export default connect(mapStatetoProps,mapDispatchToProps)(Movies)