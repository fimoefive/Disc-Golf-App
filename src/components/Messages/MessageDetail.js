import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MessageContext } from "./MessageProvider";
import "./Message.css"

export const MessageDetail = () => {
    const { getMessageById, deleteMessage } = useContext(MessageContext)
    const [chat, setMessage] = useState([]);
    const history = useHistory();
    const { chatId } = useParams();

    const user = parseInt(localStorage.getItem("disc-app_user"))

    const [owned, setOwned] = useState(false)

    useEffect(() => {
        getMessageById(chatId)
            .then((response) => {
                setMessage(response)
                if (user === response.user.id) {
                    setOwned(true)
                }
            })
    }, [])

    useEffect(() => {
        getMessageById(chatId)
            .then((response) => {
                setMessage(response)
            })
    }, [])

    return (
        <section className="chat">
            <h3 className="chat__message">{chat.message}</h3>
            <div className="chat__username">Posted By: {chat?.user?.username}</div>
            <button
                hidden={!owned}
                onClick={
                    () => {
                        deleteMessage(chat.id)
                            .then(() => {
                                history.push("/messages")
                            })
                    }
                }>Delete Message</button>

            <button hidden={!owned}
                onClick={() => {
                    history.push(`/messages/edit/${chat.id}`)
                }}>Edit Message</button>

        </section>
    )
};