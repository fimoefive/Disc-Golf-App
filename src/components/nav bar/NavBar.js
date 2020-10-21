import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Disc-Golf-App</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/games">Games</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/messages">Messages</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/scores">Scores</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/ranks">Players Rank</Link>
            </li>
        </ul>
    )
};