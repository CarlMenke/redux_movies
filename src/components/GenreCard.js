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

const GenreCard = ({genre_id, name}) => {

    return (
        <div className = 'genre-main' onClick = {()=>{}}>
           <Link to = {`/genre/${genre_id}`}>{name}</Link>
        </div>
    )
}

export default connect(mapStatetoProps,mapDispatchToProps)(GenreCard)
