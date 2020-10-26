import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GameContext } from "../Games/GameProvider";


export const GameForm = () => {
    const { getGames, getGameById, editGame, addGame } = useContext(GameContext)

    const [game, setGame] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { gameId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newGame = { ...game }
        newGame[event.target.title] = event.target.value
        setGame(newGame)
    }

    useEffect(() => {
        getGames().then(() => {
            if (gameId) {
                getGameById(gameId)
                    .then(game => {
                        setGame(game)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const constructGameObject = () => {
        if (parseInt(game.title) === 0) {
            window.alert("Select a title")
        }
        else {
            setIsLoading(true)
            if (gameId) {
                editGame({
                    id: game.id,
                    title: game.title,
                    summary: game.summary,
                    URL: game.URL,
                    userId: parseInt(game.userId),
                    date: new Date()
                })
                    .then(() => history.push("/games"))
            }
            else {
                addGame({
                    title: game.title,
                    summary: game.summary,
                    URL: game.URL,
                    userId: parseInt(localStorage.getItem("disc-app_user")),
                    date: new Date()
                })
                    .then(() => history.push("/games"))
            }
        }
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm_title">{gameId ? "Edit Game" : "Create Game"}</h2>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="gameTitle">Game Title</label>
                    <input type="text" id="gameTitle" title="title" required autoFocus className="from-control"
                        placeholder="Title"
                        onChange={handleControlledInputChange}
                        defaultValue={game.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="gameSummary">Game Summary</label>
                    <input type="text" id="gameSummary" title="summary" required autoFocus className="from-control"
                        placeholder="Summary"
                        onChange={handleControlledInputChange}
                        defaultValue={game.summary} />
                </div>
            </fieldset>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="gameURL">Game Score</label>
                    <input type="text" id="gameURL" title="URL" required autoFocus className="from-control"
                        placeholder="URL"
                        onChange={handleControlledInputChange}
                        defaultValue={game.URL} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructGameObject()
                }}>
                {gameId ? "Save Game" : "Create Game"}</button>
        </form>
    )
};