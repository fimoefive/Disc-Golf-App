import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChatContext } from "./MessageProvider";
import { MessageCard } from "./MessageCard";
import "./Message.css";


export const MessageList = () => {
    const { messages, getMessage, searchTerms } = useContext(ChatContext)
    const [filteredMessages, setFiltered] = useState([])
    const history = useHistory()

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getMessage()
    }, [])

    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
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
            <h1>Messages</h1>
            <button onClick={() => { history.push("/messages/create") }}>
                Add Message
            </button>
            <div className="chats">
                {
                    filteredMessages.map(chat => {
                        return <MessageCard key={chat.id} chat={chat} />
                    })
                }
            </div>
        </>
    )
};