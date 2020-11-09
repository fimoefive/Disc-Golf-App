import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MessageContext } from "./MessageProvider";
import { MessageCard } from "./MessageCard";
import "./Message.css";
import { Button } from 'reactstrap';

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
            <Button color="blue" className="btn-primary"
                onClick={() => { history.push("/messages/create") }}>
                Add Message
            </Button>
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