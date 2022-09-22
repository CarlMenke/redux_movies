import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import { loadGenres } from "../store/actions/MovieActions"
import { useEffect } from "react"
import GenreCard from "./GenreCard"

const mapStatetoProps = ({ movieState }) =>{
    return { movieState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchGenres: () => dispatch(loadGenres())
    }
}

const Genres = (props) => {

    useEffect(()=>{
        props.fetchGenres()
    },[])

    const navigate = useNavigate()
    console.log('props in genre',props)

    if(props.movieState.genres.genres)
    return (
        <div className = 'genre-main'>
            <h1>Genres</h1>
            {props.movieState.genres.genres.map((genre,index)=>{
                console.log(genre)
                return(
                    <GenreCard genre_id = {genre.id} name = {genre.name}/>
                )
            })}
        </div>
    )
}

export default connect(mapStatetoProps,mapDispatchToProps)(Genres)
