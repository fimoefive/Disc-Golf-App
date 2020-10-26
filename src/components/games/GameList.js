import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GameContext } from "./GameProvider";
import { GameCard } from "./GameCard";
import "./Game.css";

export const GamesList = () => {
    const { games, getGames, searchTerms } = useContext(GameContext)
    const [filteredGames, setFilteredGames] = useState([])

    useEffect(() => {
        getGames()
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
                    filteredGames.map(article => {
                        return <GameCard key={game.id} games={game} />
                    })
                }
            </div>
        </>
    )
};