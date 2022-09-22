import { connect } from "react-redux"
import { loadMoviesByGenre } from "../store/actions/MovieActions"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { resetPage } from "../store/actions/MovieActions"

const mapStatetoProps = ({ movieState }) =>{
    return { movieState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchMoviesByGenre: (genre_id,page) => dispatch(loadMoviesByGenre(genre_id,page)),
        resetPage: () => dispatch(resetPage())
    }
}

const Genre = (props) => {

    const { id } = useParams()

    console.log('props in Genre', props)


    useEffect(( )=>{
        props.resetPage()
        props.fetchMoviesByGenre(id,props.movieState.page)
    },[])

    return (
        <div className = 'genre-main' onClick = {()=>{}}>
        </div>
    )
}

export default connect(mapStatetoProps,mapDispatchToProps)(Genre)