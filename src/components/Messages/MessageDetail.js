import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MessageContext } from "./MessageProvider";
import "./Message.css"

export const MessageDetail = () => {
    const { getChatById, deleteChat } = useContext(MessageContext)
    const [chat, setChat] = useState({})
    const history = useHistory();
    const { chatId } = useParams();

    useEffect(() => {
        getChatById(chatId)
            .then((response) => {
                setChat(response)
            })
    }, [])

    return (
        <section className="chat">
            <h3 className="chat__message">{chat.message}</h3>
            <div className="chat__userId">UserId: {chat.userId}</div>
            <button onClick={
                () => {
                    deleteChat(chat.id)
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