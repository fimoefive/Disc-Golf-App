import React, { useContext, useEffect } from "react";
import { RankContext } from "./RankProvider";
// import "./Game.css";

export const RankSearch = () => {
    const { setSearchTerms } = useContext(RankContext)

    useEffect(() => {
        setSearchTerms("")

    }, [])

    return (
        <>

        </>
    )
};