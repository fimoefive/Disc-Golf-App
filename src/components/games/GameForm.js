import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GameContext } from "../Games/GameProvider";
import { CourseContext } from "../Courses/CourseProvider";
import { ScoreContext } from "../Scores/ScoreProvider";
import { Button } from 'reactstrap';

export const GameForm = (props) => {
    const { getGames, getGameById, editGame, addGame } = useContext(GameContext)
    const { scores, getScores } = useContext(ScoreContext)
    const { courses, getCourses } = useContext(CourseContext);
    const [game, setGame] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { gameId } = useParams()
    const { scoreId } = useParams();
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newGame = { ...game }
        newGame[event.target.title] = event.target.value
        setGame(newGame)
    }
    const editMode = props.match.params.hasOwnProperty("gameId");

    useEffect(() => {
        getGames().then(() => {
            if (editMode) {
                getGameById(gameId)
                    .then(game => {
                        setGame(game)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, []);

    // useEffect(() => {
    //     getScores().then(() => {
    //         if (editMode) {
    //             getGameById(gameId).then(game => {
    //                 setGame(game);
    //                 setIsLoading(false);
    //             });
    //         } else {
    //             setIsLoading(false);
    //         }
    //     })
    // }, []);


    useEffect(() => {
        getCourses().then(() => {
            if (editMode) {
                getGameById(gameId).then(game => {
                    setGame(game);
                    setIsLoading(false);
                });
            } else {
                setIsLoading(false);
            }
        })
    }, []);

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
                    scoreId: parseInt(game.scoreId),
                    courseId: parseInt(game.courseId),
                    userId: parseInt(game.userId),
                    date: new Date()
                })
                    .then(() => history.push("/games"))
            }
            else {
                addGame({
                    title: game.title,
                    scoreId: parseInt(game.scoreId),
                    courseId: parseInt(game.courseId),
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
                    <label htmlFor="gameTitle">Game Title: </label>
                    <input type="text" id="gameTitle" title="title" required autoFocus className="from-control"
                        placeholder="Title"
                        onChange={handleControlledInputChange}
                        defaultValue={game.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="gameScore">Score Total: </label>
                    <label value={game.scoreId} id="gameScore" title="scoreId" required autoFocus className="from-control"
                        placeholder="Score"
                        onChange={handleControlledInputChange}
                        defaultValue={game.scoreId}>
                    </label>
                    {/* element label change */}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="course">Choose Course: </label>
                    <select
                        value={game.courseId}
                        title="courseId"
                        id="gameCourse"
                        className="form-control"
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">Select a course</option>
                        {courses.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <Button color="blue" className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    constructGameObject()
                }}>
                {gameId ? "Save Game" : "Create Game"}</Button>
        </form>
    )
};