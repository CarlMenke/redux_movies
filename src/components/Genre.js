import { connect } from "react-redux"
import { loadMoviesByGenre } from "../store/actions/MovieActions"
import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import { resetPage, changePage } from "../store/actions/MovieActions"
import MovieCard from "./MovieCard"

const mapStatetoProps = ({ movieState }) =>{
    return { movieState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchMoviesByGenre: (genre_id,page) => dispatch(loadMoviesByGenre(genre_id,page)),
        resetPage: () => dispatch(resetPage()),
        changePage: (flag) => dispatch(changePage(flag))
    }
}

const Genre = (props) => {

    const { id } = useParams()

    console.log('props in Genre', props)
    
    useEffect(()=>{
        props.fetchMoviesByGenre(id,props.movieState.page)
    },[props.movieState.page])

    useEffect(( )=>{
        props.resetPage()
        props.fetchMoviesByGenre(id,props.movieState.page)
    },[])

    if(props.movieState.moviesByGenre.results){
        return (
            <div className = 'genre-main' onClick = {()=>{}}>
                {props.movieState.moviesByGenre.results.map((movie,index)=>{
                    return (
                           <MovieCard key = {index} movie = {movie} />
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
        }
}

export default connect(mapStatetoProps,mapDispatchToProps)(Genre)