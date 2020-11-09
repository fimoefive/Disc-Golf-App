import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ScoreContext } from "./ScoreProvider";
import { ScoreCard } from "./ScoreCard";
import "./Score.css";
import { Button } from 'reactstrap';

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
            <Button color="blue"
                className="btn-primary"
                onClick={() => { history.push("/scores/create") }}>
                Create Score
            </Button>
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