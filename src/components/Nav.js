import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const Nav = (props) => {

    const navigate = useNavigate()

    console.log(props)

    return (
        <div>
            <Link to = "/home">Home</Link>
        </div>
    )
}


export default Nav