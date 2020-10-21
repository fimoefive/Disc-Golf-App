import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { EventContext } from "./ScoreProvider";
import "./Score.css";


export const ScoreForm = () => {
    const { addScore, getScores, getScoreById, editScore } = useContext(EventContext)

    //for edit, hold on to state of event in this view
    const [score, setScore] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);
    const { scoreId } = useParams();
    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    const handleControlledInputChange = (e) => {

        const newEvent = { ...score }
        //set the property to the new value
        newEvent[e.target.name] = e.target.value
        //updates state
        setScore(newEvent)
    }

    useEffect(() => {
        getScores().then(() => {
            if (eventId) {
                getScoreById(scoreId)
                    .then(event => {
                        setScore(event)
                        // console.log(score);
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const constructEventObject = () => {
        if (parseInt(score.name) === 0) {
            window.alert("Please select an event")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (scoreId) {
                //PUT - update
                editScore({
                    id: score.id,
                    name: score.name,
                    time: score.time,
                    date: score.date,
                    description: score.description,
                    userId: parseInt(score.userId)
                })
                    .then(() => history.push("/scores"))
            } else {
                //POST - add
                addScore({
                    name: score.name,
                    time: score.time,
                    date: score.date,
                    description: score.description,
                    userId: parseInt(localStorage.getItem("nutshell_customer"))
                })
                    .then(() => history.push("/scores"))
            }
        }
    }

    return (
        <form className="scoreForm">
            <h2 className="scoreForm__name">{scoreId ? "Edit Score" : "Create Score"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-name">Event Name</label>
                    <input type="text" id="scoreName" name="name" required autoFocus className="form-control"
                        placeholder="ScoreName"
                        onChange={handleControlledInputChange}
                        defaultValue={score.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-time">Score Time</label>
                    <input type="time"
                        name="time" id="scoreTime" className="form-control"
                        placeholder="Time"
                        onChange={handleControlledInputChange}
                        defaultValue={score.time} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="e-date">Score Date</label>
                    <input type="date"
                        name="date" id="scoreDate" className="form-control"
                        placeholder="Date"
                        onChange={handleControlledInputChange}
                        defaultValue={score.date} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-description">Score Description</label>
                    <input type="text"
                        name="description" id="scoreDescription" className="form-control"
                        placeholder="Description"
                        onChange={handleControlledInputChange}
                        defaultValue={score.description} />
                </div>
            </fieldset>
            <button type="submit"
                className="btn btn-primary"
                disabled={isLoading}
                onClick={e => {
                    e.preventDefault() // Prevent browser from submitting the form
                    constructEventObject()
                }}>
                {scoreId ? "Save Score" : "Create Score"}</button>
        </form>
    )
};