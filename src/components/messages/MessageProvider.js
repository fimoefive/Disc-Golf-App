import React, { useState, createContext } from "react";

export const ChatContext = createContext()

const getMessageById = (id) => {
    return fetch(`http://localhost:8088/messages/${id}?_expand=user`)
        .then(res => res.json())
}

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getMessage = () => {
        return fetch("http://localhost:8088/messages")
            .then(res => res.json())
            .then(setMessages)
    }

    const addMessage = (chat) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chat)
        })
            .then(getMessage)
    }

    const deleteMessage = (chatId) => {
        return fetch(`http://localhost:8088/messages/${chatId}`, {
            method: "DELETE"
        })
            .then(getMessage)
    }

    const editMessage = chat => {
        return fetch(`http://localhost:8088/messages/${chat.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chat)
        })
            .then(getMessage)
    }

    return (
        <ChatContext.Provider value={{
            messages, getMessage, addMessage, getMessageById, deleteMessage, editMessage, searchTerms, setSearchTerms
        }}>
            {props.children}
        </ChatContext.Provider>
    )
};