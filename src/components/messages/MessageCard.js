import React from "react";
import { Link } from "react-router-dom";
import "./Message.css";


export const MessageCard = ({ chat }) => (
    <section className="chatLog">
        <h3 name="renderedMessage" className="chat_message">{chat.message}</h3>
        <p className="chatCardUser">Posted by User {chat.userId}</p>
        <Link to={`/messages/detail/${chat.id}`}> Message Options  </Link>
    </section>
);