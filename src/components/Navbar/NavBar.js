import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Disc-Golf-App</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Messages">Messages</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Games">Games</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Scores">Scores</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/ranks">Players Rank</Link>
            </li>
        </ul>
    )
};