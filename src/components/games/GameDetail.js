import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { GameContext } from "./GameProvider";
import "./Articles.css";


export const GameDetail = () => {
    const { deleteGame, getGameById } = useContext(GameContext)

    const [game, setGame] = useState()

    const { gameId } = useParams();
    const history = useHistory();

    const user = parseInt(localStorage.getItem("disc-app_user"))

    const [owned, setOwned] = useState(false)


    useEffect(() => {
        getGameById(articleId)
            .then((response) => {
                setGame(response)
                if (user === response.user.id) {
                    setOwned(true)
                }
            })
    }, [])

    return (
        <section className="article">
            <h3 className="article__name">{article?.title}</h3>
            <div className="article__summary">{article?.summary}</div>
            <div className="article__URL">{article?.URL}</div>
            <div className="article__user">Posted by: {article?.user.username}</div>
            <div className="article__date">Posted on: {article?.date.split("T")[0]}</div>
            <button
                hidden={!owned}
                onClick={
                    () => {
                        deleteGame(article.id)
                            .then(() => {
                                history.push("/articles")
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
}