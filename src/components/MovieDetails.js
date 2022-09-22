import { connect } from "react-redux"
import { loadMovieById  } from "../store/actions/MovieActions"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"

const mapStatetoProps = ({ movieState }) =>{
    return { movieState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchMovie: (movie_id) => dispatch(loadMovieById(movie_id))
    }
}

const MovieDetails = (props) => {

    const { id } = useParams()

    useEffect(()=>{
        props.fetchMovie(id)
    },[])

    useEffect(()=>{
        console.log(props)
    },[props])

    if(props.movieState.selectedMovie){
        return (
            <div className = 'movie-main' >
                {props.movieState.selectedMovie.title}
            </div>
        )
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(MovieDetails)