import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GameContext } from "./GameProvider";
import { ScoreContext } from "../Scores/ScoreProvider";
import { GameCard } from "./GameCard";
import "./Game.css";

export const GamesList = () => {
    const { games, getGames, searchTerms } = useContext(GameContext)
    const { scores, getScores } = useContext(ScoreContext)
    const [filteredGames, setFilteredGames] = useState([])

    useEffect(() => {
        getGames()
    }, [])

    useEffect(() => {
        getScores()
    }, [])

    const history = useHistory()

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = games.filter(game => game.title.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            setFilteredGames(subset)
        } else {
            setFilteredGames(games)
        }
    }, [searchTerms, games])

    return (
        <>
            <h2>Games</h2>
            <button onClick={() => { history.push("/games/create") }}>
                Create Game
            </button>
            <div className="games">
                {
                    filteredGames.map(game => {
                        return <GameCard key={game.id} score={scores.total} games={game} />
                    })
                }
            </div>
        </>
    )
};