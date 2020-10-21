import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { EventContext } from "./ScoreProvider";
import "./Score.css";


export const ScoreDetail = () => {
    const { getScoreById, deleteScore } = useContext(EventContext)

    const [event, setScore] = useState();

    const { scoreId } = useParams();

    const history = useHistory();

    const user = parseInt(localStorage.getItem("nutshell_customer"))

    const [owned, setOwned] = useState(false)

    useEffect(() => {
        getEventById(scoreId)
            .then((response) => {
                setEvent(response)
                if (user === response.user.id) {
                    setOwned(true)
                }
            })
    }, [])

    return (
        <section className="score">
            <h3 className="event__name">{score?.name}</h3>
            <div className="event__description">{score?.description}</div>
            <div className="event__time">{score?.time}</div>
            <div className="event__date">Posted on: {score?.date}</div>
            <div className="event__user">Posted by: {score?.user.username}</div>

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