import React from "react";
import { Link } from "react-router-dom";
import "./Score.css";


export const ScoreCard = ({ scores }) => (
    <section className="scores">
        <h3 className="score__name">{scores.name}</h3>
        <Link to={`/scores/detail/${scores.id}`}>
            {scores.name}
        </Link>
        <div className="score__round">{scores.round}</div>
        <div className="score__round2">{scores.round2}</div>
        <div className="score__round3">{scores.round3}</div>
        <div className="score__round4">{scores.round4}</div>
        <div className="score__round5">{scores.round5}</div>
        <div className="score__round6">{scores.round6}</div>
        <div className="score__round7">{scores.round7}</div>
        <div className="score__round8">{scores.round8}</div>
        <div className="score__round9">{scores.round9}</div>
        <div className="score__total">{scores.total}</div>
        <div className="score__startTime">{scores.startTime}</div>
        <div className="score__endTime">{scores.endTime}</div>
        <div className="score__date">{scores.date}</div>
        <div className="score__user">ScoreCard By: {scores.user.username}</div>
    </section>
);