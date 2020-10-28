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
                    score: game.score,
                    course: game.course,
                    userId: parseInt(game.userId),
                    date: new Date()
                })
                    .then(() => history.push("/games"))
            }
            else {
                addGame({
                    title: game.title,
                    score: game.score,
                    course: game.course,
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
                    <label htmlFor="gameScore">Score Total</label>
                    <input type="text" id="gameScore" title="score" required autoFocus className="from-control"
                        placeholder="Score"
                        onChange={handleControlledInputChange}
                        defaultValue={game.score} />
                </div>
            </fieldset>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="gameCourse">Course</label>
                    <input type="text" id="gameCourse" title="course" required autoFocus className="from-control"
                        placeholder="Course"
                        onChange={handleControlledInputChange}
                        defaultValue={game.course} />
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