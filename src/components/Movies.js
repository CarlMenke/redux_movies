import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadPopularMovies, changePage } from "../store/actions/MovieActions";
import { useParams } from "react-router-dom";

const mapStatetoProps = ({ movieState }) => {
    return { movieState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchPopularMovies: (page) => dispatch(loadPopularMovies(page)),
        changePage: (flag) => dispatch(changePage(flag))
    }
}

const Movies = (props) => {

    useEffect(()=>{
        props.fetchPopularMovies(props.movieState.page)
    },[props.movieState.page])

    if(props.movieState.popularMovies.results){
        return (
            <div>
                <h1>Popular Movies:</h1>
                {props.movieState.popularMovies.results.map(( movie, index )=>{
                    return (
                        <div key = {index}>{movie.title}</div>
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

export default connect(mapStatetoProps,mapDispatchToProps)(Movies)