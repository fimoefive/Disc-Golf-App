import React, { useState, createContext } from 'react';

export const EventContext = createContext();

export const ScoreProvider = (props) => {
    const [scores, setScores] = useState([]);
    const [searchTerms, setSearchTerms] = useState([]);

    const getScores = () => {
        return fetch('http://localhost:8088/events?_expand=user&_sort=id&_order=DESC')
            .then(res => res.json())
            .then(setScores)
    };

    const addScore = (event) => {
        return fetch('http://localhost:8088/events', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getScores)
    };

    const getScoreById = (id) => {
        return fetch(`http://localhost:8088/events/${id}?_expand=user`)
            .then(response => response.json())
    };

    const deleteScore = eventId => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
    };

    const editScore = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getScores)
    };

    return (
        <EventContext.Provider value={{
            scores, getScores, addScore, deleteScore, editScore, getScoreById, setSearchTerms, searchTerms
        }}>
            {props.children}
        </EventContext.Provider>
    )
};