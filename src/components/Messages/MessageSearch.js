import React, { useContext } from "react";
import { MessageContext } from "./MessageProvider";
import "./Message.css";

export const MessageSearch = () => {
    const { setSearchTerms } = useContext(MessageContext)

    return (
        <>
            Messages Search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Enter your search terms ... " />
        </>
    )
};