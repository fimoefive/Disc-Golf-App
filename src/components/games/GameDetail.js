import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { GameContext } from "./GameProvider";
import "./Game.css";


export const GameDetail = () => {
    const { deleteGame, getGameById } = useContext(GameContext)

    const [game, setGame] = useState()

    const { gameId } = useParams();
    const history = useHistory();

    const user = parseInt(localStorage.getItem("disc-app_user"))

    const [owned, setOwned] = useState(false)


    useEffect(() => {
        getGameById(gameId)
            .then((response) => {
                setGame(response)
                if (user === response.user.id) {
                    setOwned(true)
                }
            })
    }, [])

    return (
        <section className="game">
            <h3 className="game__name">{game?.title}</h3>
            <div className="game__summary">{game?.summary}</div>
            <div className="game__URL">{game?.URL}</div>
            <div className="game__user">Posted by: {game?.user.username}</div>
            <div className="game__date">Posted on: {game?.date.split("T")[0]}</div>
            <button
                hidden={!owned}
                onClick={
                    () => {
                        deleteGame(game.id)
                            .then(() => {
                                history.push("/games")
                            })
                    }}>Delete Game
			</button>
            <button
                hidden={!owned}
                onClick={() => {
                    history.push(`/games/edit/${game.id}`)
                }}>Edit</button>
        </section>
    )
};