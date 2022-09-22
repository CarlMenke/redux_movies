import { connect } from "react-redux"
import { loadGenres } from "../store/actions/MovieActions"
import { Link } from "react-router-dom"

const mapStatetoProps = ({ movieState }) =>{
    return { movieState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchGenres: () => dispatch(loadGenres())
    }
}

const MovieCard = ({movie}) => {

    return (
        <div className = 'movie-card-main' onClick = {()=>{}}>
           <Link to = {`/movie/${movie.id}`}>{movie.title}</Link>
        </div>
    )
}

export default connect(mapStatetoProps,mapDispatchToProps)(MovieCard)