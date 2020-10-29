import React, { useState, createContext } from "react";

export const MessageContext = createContext()

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getMessages = () => {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(res => res.json())
            .then(setMessages)
    }

    const getMessageById = (id) => {
        return fetch(`http://localhost:8088/messages/${id}?_expand=user`)
            .then(res => res.json())
    }

    const addMessage = (chat) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chat)
        })
            .then(getMessages)
    }

    const deleteMessage = (chatId) => {
        return fetch(`http://localhost:8088/messages/${chatId}`, {
            method: "DELETE"
        })
            .then(getMessages)
    }

    const editMessage = chat => {
        return fetch(`http://localhost:8088/messages/${chat.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chat)
        })
            .then(getMessages)
    }

    return (
        <MessageContext.Provider value={{
            messages, getMessages, addMessage, getMessageById, deleteMessage, editMessage, searchTerms, setSearchTerms
        }}>
            {props.children}
        </MessageContext.Provider>
    )
};

