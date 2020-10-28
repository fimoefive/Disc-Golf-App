import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MessageContext } from "./MessageProvider";
import "./Message.css"

export const MessageDetail = () => {
    const { getMessageById, deleteMessage } = useContext(MessageContext)
    const [chat, setMessage] = useState({})
    const history = useHistory();
    const { chatId } = useParams();

    useEffect(() => {
        getMessageById(chatId)
            .then((response) => {
                setMessage(response)
            })
    }, [])

    return (
        <section className="chat">
            <h3 className="chat__message">{chat.message}</h3>
            <div className="chat__username">UserId: {chat.userId}</div>
            <button onClick={
                () => {
                    deleteMessage(chat.id)
                        .then(() => {
                            history.push("/chats")
                        })
                }
            }>Delete Message</button>

            <button onClick={() => {
                history.push(`/chats/edit/${chat.id}`)
            }}>Edit Message</button>

        </section>
    )
};