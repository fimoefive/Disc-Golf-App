import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RankContext } from "./RankProvider";
import { GameContext } from "../Games/GameProvider";
import { RankCard } from "./RankCard";
import "./Rank.css";

export const RankList = () => {
    // const { games, getGames, searchTerms } = useContext(RankContext)
    const { games, getGames, searchTerms } = useContext(GameContext)
    // const [game, setGames] = useState([])
    const [filteredGames, setFilteredGames] = useState([])

    useEffect(() => {
        getGames()
    }, [games])

    const history = useHistory()

    useEffect(() => {
        setFilteredGames(games)
    }, [searchTerms, games])


    return (
        <>
            <h2>Players Rank</h2>
            <div className="ranks">
                {
                    filteredGames.map(game => {
                        return <RankCard key={game.id} games={game} />
                    })
                }
            </div>
        </>
    )
};