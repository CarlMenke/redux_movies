import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import  PopularMovies from "./PopularMovies"
import Genres from './Genres'

const mapStatetoProps = ({ movieState }) =>{
    return { movieState }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        dispatch
    }
}

const Home = (props) => {
    const navigate = useNavigate()
    console.log('props in home',props)

    return (
        <div className = 'home-main'>
            <h1>Home page</h1>
            <div className = 'home-bottom'>
                <div className = 'home-left'>
                    <PopularMovies />
                </div>
                <div className = 'home-left'>
                    <Genres />
                </div>
                <div className = 'home-left'>
                    WatchList
                </div>
            </div>
        </div>
    )
}

export default connect(mapStatetoProps,mapDispatchToProps)(Home)
