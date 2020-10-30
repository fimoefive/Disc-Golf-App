import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RankContext } from "./RankProvider";
import { RankCard } from "./RankCard";
import "./Rank.css";

export const RankList = () => {
    const { games, getGames, searchTerms } = useContext(RankContext)
    const [filteredGames, setFilteredGames] = useState([])

    useEffect(() => {
        getGames()
    }, [])

    const history = useHistory()

    useEffect(() => {
        setFilteredGames(games)
    }, [searchTerms, games])



    return (
        <>
            <h2>Player Ranks</h2>
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