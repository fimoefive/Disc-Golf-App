import React, { useContext, useEffect } from "react";
import { ScoreContext } from "./ScoreProvider";
import "./Score.css";

export const ScoreSearch = () => {
    const { setSearchTerms } = useContext(ScoreContext)

    useEffect(() => {
        setSearchTerms("")
    }, [])

    return (
        <>
            ScoreCard Search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for scorecard... " />
        </>
    )
};