import React from "react";
import { Link } from "react-router-dom";
import "./Score.css";


export const ScoreCard = ({ scores }) => (
    <section className="scores">
        <h3 className="event__name">{scores.name}</h3>
        <Link to={`/scores/detail/${scores.id}`}>
            {scores.name}
        </Link>
        <div className="event__time">{scores.time}</div>
        <div className="event__date">{scores.date}</div>
        <div className="event__description">{scores.description}</div>
        <div className="event__user">Score by: {scores.user.username}</div>
    </section>
);