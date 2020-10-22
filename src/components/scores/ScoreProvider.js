import React, { useState, createContext } from 'react';

export const EventContext = createContext();

export const ScoreProvider = (props) => {
    const [scores, setScores] = useState([]);
    const [searchTerms, setSearchTerms] = useState([]);

    const getScores = () => {
        return fetch('http://localhost:8088/scores?_expand=user&_sort=id&_order=DESC')
            .then(res => res.json())
            .then(setScores)
    };

    const addScore = (event) => {
        return fetch('http://localhost:8088/scores', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getScores)
    };

    const getScoreById = (id) => {
        return fetch(`http://localhost:8088/scores/${id}?_expand=user`)
            .then(response => response.json())
    };

    const deleteScore = scoreId => {
        return fetch(`http://localhost:8088/scores/${scoreId}`, {
            method: "DELETE"
        })
    };

    const editScore = score => {
        return fetch(`http://localhost:8088/scores/${score.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(score)
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