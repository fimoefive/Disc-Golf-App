import React from "react"
import { Link } from "react-router-dom"
import "./Chat.css"

export const ChatCard = ({ chat }) => (
    <section className="chatLog">
        <h3 name="renderedMessage" className="chat_message">{chat.message}</h3>
        <p className="chatCardUser">Posted by: {chat.userId}</p>
        <Link to={`/chats/detail/${chat.id}`}> Message Options  </Link>
    </section>
)