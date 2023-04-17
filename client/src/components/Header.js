import React from "react"
import { Link} from "react-router-dom"
import logo from "./../assets/logo.svg"

const Header = () => (
    <>
    <nav>
        <div className="logo">
            <Link to="/"><img src={logo} alt="Logo"/></Link>
        </div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/browse">Want To Donate?</Link>
            </li>
            <li>
                <Link to="/create">Raise Funds!</Link>
            </li>
            <li>
                <Link to="/track">Track Your History</Link>
            </li>
        </ul>
    </nav>
    </>
)

export default Header