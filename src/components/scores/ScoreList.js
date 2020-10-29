import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ScoreContext } from "./ScoreProvider";
import { ScoreCard } from "./ScoreCard";
import "./Score.css";

export const ScoreList = () => {

    const { scores, getScores, searchTerms } = useContext(ScoreContext)
    const [filteredScores, setFilteredScores] = useState([])

    useEffect(() => {
        getScores()
    }, [])

    const history = useHistory();

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = scores.filter(score => score.name.includes(searchTerms.trim()))
            setFilteredScores(subset)
        } else {
            setFilteredScores(scores)
        }
    }, [searchTerms, scores])

    return (
        <>
            <h2>ScoreCard</h2>
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