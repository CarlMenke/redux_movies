import { useNavigate } from "react-router-dom"

const Home = (props) => {

    const navigate = useNavigate()

    console.log(props)

    return (
        <div>
            <h1>Home page</h1>
            <div>
                <button onClick = {() =>{
                    navigate(`/movies`)
                }}>go to movies</button>
            </div>
        </div>
    )
}

export default Home
