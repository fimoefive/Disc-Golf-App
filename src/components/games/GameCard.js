import React from "react";
import { Link } from "react-router-dom";
import "./Game.css";


export const GameCard = ({ games }) => (
    <section className="games">
        <h3 className="game_title">{games.title}</h3>
        <Link to={`/games/detail/${games.id}`}>
            {games.title}
        </Link>
        <div className="game_score">Total Score: {games.score}</div>
        <div className="game_course">Course: {games.course}</div>
        <div className="game__user">Posted by: {games.user.username}</div>
        <div className="game__date">Date: {games.date?.split("T")[0]}</div>
    </section>
);