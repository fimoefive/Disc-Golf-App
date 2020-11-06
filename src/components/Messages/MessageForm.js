import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { MessageContext } from "./MessageProvider";
import "./Message.css";

export const MessageForm = () => {
    const { getMessages, getMessageById, editMessage, addMessage } = useContext(MessageContext)

    const [chat, setMessage] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { chatId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMessage = { ...chat }

        newMessage[event.target.name] = event.target.value
        setMessage(newMessage)
    }

    useEffect(() => {
        getMessages().then(() => {
            if (chatId) {
                getMessageById(chatId)
                    .then(chat => {
                        setMessage(chat)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const constructMessageObject = () => {
        setIsLoading(true)
        if (chatId) {
            editMessage({
                id: chat.id,
                userId: parseInt(localStorage.getItem("disc-app_user")),
                message: chat.messageInput
            })
                .then(() => history.push("/messages"))
        }
        else {
            addMessage({
                userId: parseInt(localStorage.getItem("disc-app_user")),
                message: chat.messageInput
            })
                .then(() => history.push("/messages"))
        }
    }

    return (
        <form className="messageForm" id="chatForm">
            <h2 className="messageForm_title">{chatId ? "Edit Message" : "Add Message"}</h2>
            <fieldset>
                <div className="form-group">
                    <input type="text" id="message" name="messageInput" title="title" required autoFocus className="form-control"
                        placeholder="Message a player"
                        onChange={handleControlledInputChange}
                        defaultValue={chat.messageInput} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    constructMessageObject()
                }}>Submit Message</button>
        </form>
    )
};