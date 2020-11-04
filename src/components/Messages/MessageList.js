import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MessageContext } from "./MessageProvider";
import { MessageCard } from "./MessageCard";
import "./Message.css";

export const MessageList = () => {
    const { messages, getMessages, searchTerms } = useContext(MessageContext)
    const [filteredMessages, setFiltered] = useState([])
    const history = useHistory()

    useEffect(() => {
        getMessages()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = messages.filter(chat => chat.renderedMessage.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered(messages)
        }
    }, [searchTerms, messages])

    return (
        <>
            <h2>Messages</h2>
            <button onClick={() => { history.push("/messages/create") }}>
                Add Message
            </button>
            <div className="messages">
                {
                    filteredMessages.map(chat => {
                        return <MessageCard key={chat.id} chat={chat} />
                    })
                }
            </div>
        </>
    )
};