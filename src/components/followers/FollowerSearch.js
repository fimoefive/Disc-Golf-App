import React, { useContext, useEffect } from "react";
import { FollowerContext } from "./FollowerProvider";

export const FollowerSearch = () => {
    const { setSearchTerms } = useContext(FollowerContext)

    useEffect(() => {
        setSearchTerms("")
    }, [])

    return (
        <>
            Followers Search:
            <input type="text" className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for a follower..." />
        </>
    )
};