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
            if (scoreId) {
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
                    round: score.round,
                    round2: score.round2,
                    round3: score.round3,
                    round4: score.round4,
                    round5: score.round5,
                    round6: score.round6,
                    round7: score.round7,
                    round8: score.round8,
                    round9: score.round9,
                    total: score.total,
                    startTime: score.startTime,
                    endTime: score.endTime,
                    date: score.date,
                    userId: parseInt(score.userId)
                })
                    .then(() => history.push("/scores"))
            } else {
                //POST - add
                addScore({
                    name: score.name,
                    round: score.round,
                    round2: score.round2,
                    round3: score.round3,
                    round4: score.round4,
                    round5: score.round5,
                    round6: score.round6,
                    round7: score.round7,
                    round8: score.round8,
                    round9: score.round9,
                    total: score.total,
                    startTime: score.startTime,
                    endTime: score.endTime,
                    date: score.date,
                    userId: parseInt(localStorage.getItem("disc-app_user"))
                })
                    .then(() => history.push("/scores"))
            }
        }
    }

    return (
        <form className="scoreForm">
            <h2 className="scoreForm__name">{scoreId ? "Edit Score" : "ScoreCard"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-name">Score Card Title</label>
                    <input type="text" id="scoreName" name="name" required autoFocus className="form-control"
                        placeholder="Score Card Title"
                        onChange={handleControlledInputChange}
                        defaultValue={score.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-round">Round One</label>
                    <input type="text" id="scoreRound" name="round" required autoFocus className="form-control"
                        placeholder="Round"
                        onChange={handleControlledInputChange}
                        defaultValue={score.round} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-round">Round Two</label>
                    <input type="text" id="scoreRound" name="round" required autoFocus className="form-control"
                        placeholder="Round"
                        onChange={handleControlledInputChange}
                        defaultValue={score.round2} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-round">Round Three</label>
                    <input type="text" id="scoreRound" name="round" required autoFocus className="form-control"
                        placeholder="Round"
                        onChange={handleControlledInputChange}
                        defaultValue={score.round3} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-round">Round Four</label>
                    <input type="text" id="scoreRound" name="round" required autoFocus className="form-control"
                        placeholder="Round"
                        onChange={handleControlledInputChange}
                        defaultValue={score.round4} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-round">Round Five</label>
                    <input type="text" id="scoreRound" name="round" required autoFocus className="form-control"
                        placeholder="Round"
                        onChange={handleControlledInputChange}
                        defaultValue={score.round5} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-round">Round Six</label>
                    <input type="text" id="scoreRound" name="round" required autoFocus className="form-control"
                        placeholder="Round"
                        onChange={handleControlledInputChange}
                        defaultValue={score.round6} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-round">Round Seven</label>
                    <input type="text" id="scoreRound" name="round" required autoFocus className="form-control"
                        placeholder="Round"
                        onChange={handleControlledInputChange}
                        defaultValue={score.round7} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-round">Round Eight</label>
                    <input type="text" id="scoreRound" name="round" required autoFocus className="form-control"
                        placeholder="Round"
                        onChange={handleControlledInputChange}
                        defaultValue={score.round8} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-round">Round Nine</label>
                    <input type="text" id="scoreRound" name="round" required autoFocus className="form-control"
                        placeholder="Round"
                        onChange={handleControlledInputChange}
                        defaultValue={score.round9} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score-total">Total Score</label>
                    <input type="text"
                        name="total" id="scoreTotal" className="form-control"
                        placeholder="Total"
                        onChange={handleControlledInputChange}
                        defaultValue={score.total} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="start-time">Start Time</label>
                    <input type="time"
                        name="time" id="startTime" className="form-control"
                        placeholder="Start Time"
                        onChange={handleControlledInputChange}
                        defaultValue={score.startTime} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="end-time">End Time</label>
                    <input type="time"
                        name="time" id="endTime" className="form-control"
                        placeholder="End Time"
                        onChange={handleControlledInputChange}
                        defaultValue={score.endTime} />
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