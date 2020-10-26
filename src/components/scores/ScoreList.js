import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { EventContext } from "./ScoreProvider";
import { ScoreCard } from "./ScoreCard";
import "./Score.css";

export const ScoreList = () => {
    // This state changes when `getEvent()` is invoked below
    const { scores, getScores, searchTerms } = useContext(EventContext)
    const [filteredScores, setFilteredScores] = useState([])

    //useEffect - reach out to the world for something
    useEffect(() => {
        getScores()
    }, [])

    const history = useHistory();

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = scores.filter(score => score.name.includes(searchTerms.trim()))
            console.log(scores)
            setFilteredScores(subset)
        } else {
            setFilteredScores(scores)
        }
    }, [searchTerms, scores])

    return (
        <>
            <h2>Score</h2>
            <button onClick={() => { history.push("/scores/create") }}>
                Create Score
            </button>
            <div className="score">
                {
                    filteredScores.map(score => {
                        return <ScoreCard key={score.id} scores={score} />
                    })
                }
            </div>
        </>
    )
};