import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const Nav = (props) => {

    const navigate = useNavigate()

    console.log(props)

    return (
        <div className = 'row-nowrap-sb'>
            <Link to = "/">Home</Link>
            <Link to = "/explore">Explore</Link>
        </div>
    )
}


export default Nav