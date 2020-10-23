import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ChatContext } from "./MessageProvider";
import "./Message.css";


export const MessageDetail = () => {
    const { getMessageById, deleteMessage } = useContext(ChatContext)
    const [message, setMessage] = useState({})
    const history = useHistory();
    const { messageId } = useParams();

    useEffect(() => {
        getMessageById(chatId)
            .then((response) => {
                setMessage(response)
            })
    }, [])

    return (
        <section className="chat">
            <h3 className="chat__message">{chat.message}</h3>
            <div className="chat__userId">UserId: {chat.userId}</div>
            <button onClick={
                () => {
                    deleteMessage(chat.id)
                        .then(() => {
                            history.push("/messages")
                        })
                }

            }>Delete Message</button>

            <button onClick={() => {
                history.push(`/messages/edit/${chat.id}`)
            }}>Edit Message</button>
        </section>
    )
};