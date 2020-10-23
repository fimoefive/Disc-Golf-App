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
        getMessageById(messageId)
            .then((response) => {
                setMessage(response)
            })
    }, [])

    return (
        <section className="chat">
            <h3 className="chat__message">{message.message}</h3>
            <div className="chat__userId">UserId: {message.userId}</div>
            <button onClick={
                () => {
                    deleteMessage(message.id)
                        .then(() => {
                            history.push("/messages")
                        })
                }

            }>Delete Message</button>

            <button onClick={() => {
                history.push(`/messages/edit/${message.id}`)
            }}>Edit Message</button>
        </section>
    )
};