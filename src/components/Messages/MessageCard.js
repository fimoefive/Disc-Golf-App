import React from "react";
import { Link } from "react-router-dom";
import "./Message.css";

export const MessageCard = ({ chat }) => (
    <section className="messageLog">
        <h3 name="renderedMessage" className="chat_message">{chat.message}</h3>
        <p className="messageCardUser">Posted by: {chat.user.username}</p>
        <Link to={`/chats/detail/${chat.id}`}> Message Options  </Link>
    </section>
);