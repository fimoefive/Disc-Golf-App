import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ScoreContext } from "./ScoreProvider";
import "./Score.css";


export const ScoreDetail = () => {
    const { getScoreById, deleteScore } = useContext(ScoreContext)

    const [score, setScore] = useState();

    const { scoreId } = useParams();

    const history = useHistory();

    const user = parseInt(localStorage.getItem("disc-app_user"))

    const [owned, setOwned] = useState(false)

    useEffect(() => {
        getScoreById(scoreId)
            .then((response) => {
                setScore(response)
                if (user === response.user.id) {
                    setOwned(true)
                }
            })
    }, [])

    return (
        <section className="score">
            <h3 className="score__name">{score?.name}</h3>
            <div className="score__round">Round One: {score?.round}</div>
            <div className="score__round2">Round Two: {score?.round2}</div>
            <div className="score__round3">Round Three {score?.round3}</div>
            <div className="score__round4">Round Four: {score?.round4}</div>
            <div className="score__round5">Round Five: {score?.round5}</div>
            <div className="score__round6">Round Six: {score?.round6}</div>
            <div className="score__round7">Round Seven: {score?.round7}</div>
            <div className="score__round8">Round Eight: {score?.round8}</div>
            <div className="score__round9">Round Nine: {score?.round9}</div>
            <div className="score__total">Total Score: {score?.total}</div>
            <div className="score__startTime">Start Time: {score?.startTime}</div>
            <div className="score__endTime">End Time: {score?.endTime}</div>
            <div className="score__date">Posted on: {score?.date}</div>
            <div className="score__user">Posted by: {score?.user.username}</div>

            <button hidden={!owned}
                onClick={() => {
                    deleteScore(score.id)
                        .then(() => {
                            history.push("/scores")
                        })
                }}>Delete Score
            </button>

            <button hidden={!owned}
                onClick={() => {
                    history.push(`/scores/edit/${score.id}`)
                }}>Edit</button>
        </section>
    )
};