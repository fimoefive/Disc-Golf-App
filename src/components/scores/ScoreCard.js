import React from "react";
import { Link } from "react-router-dom";
import "./Score.css";


export const ScoreCard = ({ scores }) => (
    <section className="scores">
        <h3 className="score__name">{scores.name}</h3>
        <Link to={`/scores/detail/${scores.id}`}>
            {scores.name}
        </Link>
        <div className="score__round">Round One: {scores.round}</div>
        <div className="score__round2">Round Two: {scores.round2}</div>
        <div className="score__round3">Round Three: {scores.roundThree}</div>
        <div className="score__round4">Round Four: {scores.round}</div>
        <div className="score__round5">Round Five: {scores.round}</div>
        <div className="score__round6">Round Six: {scores.round}</div>
        <div className="score__round7">Round Seven: {scores.round}</div>
        <div className="score__round8">Round Eight: {scores.round}</div>
        <div className="score__round9">Round Nine: {scores.round}</div>
        <div className="score__total">Total Score: {scores.total}</div>
        <div className="score__startTime">Start Time: {scores.time}</div>
        <div className="score__endTime">End Time: {scores.time}</div>
        <div className="score__date">Date: {scores.date}</div>
        <div className="score__user">ScoreCard By: {scores.user.username}</div>
    </section>
);