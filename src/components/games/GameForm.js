import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ArticleContext } from "../Articles/ArticlesProvider";


export const GameForm = () => {
    const { getGames, getGameById, editGame, addGame } = useContext(GameContext)

    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { gameId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newGame = { ...game }
        newArticle[event.target.title] = event.target.value
        setGame(newGame)
    }

    useEffect(() => {
        getGames().then(() => {
            if (gameId) {
                getArticleById(gameId)
                    .then(article => {
                        setGame(article)
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
                    id: article.id,
                    title: article.title,
                    summary: article.summary,
                    URL: article.URL,
                    userId: parseInt(article.userId),
                    date: new Date()
                })
                    .then(() => history.push("/games"))
            }
            else {
                addArticle({
                    title: article.title,
                    summary: article.summary,
                    URL: article.URL,
                    userId: parseInt(localStorage.getItem("disc-app_user")),
                    date: new Date()
                })
                    .then(() => history.push("/games"))
            }
        }
    }

    return (
        <form className="articleForm">
            <h2 className="articleForm_title">{gameId ? "Edit Article" : "Create News Article"}</h2>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="articleTitle">Game Title</label>
                    <input type="text" id="articleTitle" title="title" required autoFocus className="from-control"
                        placeholder="Title"
                        onChange={handleControlledInputChange}
                        defaultValue={article.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="articleSummary">Article Summary</label>
                    <input type="text" id="articleSummary" title="summary" required autoFocus className="from-control"
                        placeholder="Summary"
                        onChange={handleControlledInputChange}
                        defaultValue={article.summary} />
                </div>
            </fieldset>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="articleURL">Article URL</label>
                    <input type="text" id="articleURL" title="URL" required autoFocus className="from-control"
                        placeholder="URL"
                        onChange={handleControlledInputChange}
                        defaultValue={article.URL} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructArticleObject()
                }}>
                {gameId ? "Save Game" : "Create Game"}</button>
        </form>
    )
}