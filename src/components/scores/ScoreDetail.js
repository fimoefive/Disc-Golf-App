import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { EventContext } from "./ScoreProvider";
import "./Score.css";


export const ScoreDetail = () => {
    const { getScoreById, deleteScore } = useContext(EventContext)

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
            <div className="score__description">{score?.description}</div>
            <div className="score__time">{score?.time}</div>
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