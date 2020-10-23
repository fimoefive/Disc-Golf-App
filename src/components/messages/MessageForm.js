import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { ChatContext } from "./MessageProvider";
import "./Message.css";

export const MessageForm = () => {
    const { getMessage, getMessageById, editMessage, addMessage } = useContext(ChatContext)

    const [message, setMessage] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { chatId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMessage = { ...chat }

        newMessage[event.target.name] = event.target.value
        setMessage(newMessage)
    }

    useEffect(() => {
        getMessage().then(() => {
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
        <form className="chatForm" id="chatForm">
            <h2 className="chatForm_title">{chatId ? "Edit Message" : "Add Message"}</h2>
            <fieldset>
                <div className="form-group">
                    <input type="text" id="message" name="messageInput" title="title" required autoFocus className="form-control"
                        placeholder="What's on your mind?"
                        onChange={handleControlledInputChange}
                        defaultValue={chat.messageInput} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructMessageObject()
                }}>Submit Message</button>
        </form>
    )
};