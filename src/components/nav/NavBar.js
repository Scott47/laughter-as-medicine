import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/funnytome">Ha Ha</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/notfunnytome">Groan</Link>
            </li>
        </ul>
    )
}
