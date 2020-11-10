import React, { useContext, useEffect } from "react";
import { GameContext } from "./GameProvider";
import "./Game.css";

export const GameSearch = () => {
    const { setSearchTerms } = useContext(GameContext)

    useEffect(() => {
        setSearchTerms("")

    }, [])

    return (
        <>
            Game Search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for a game... " />
        </>
    )
};