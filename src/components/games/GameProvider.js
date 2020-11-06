import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
    const [games, setGames] = useState([]);
    const [scores, setScores] = useState([]);
    const [searchTerms, setSearchTerms] = useState();

    const getGames = () => {
        return fetch(`http://localhost:8088/games?_expand=user&_expand=course&_sort=id&_order=DESC?_expand=course`)
            .then(response => response.json())
            .then(setGames)
    };

    const getScores = () => {
        return fetch('http://localhost:8088/scores?_expand=user&_sort=id&_order=DESC')
            .then(res => res.json())
            .then(setScores)
    };

    const getScoreById = (id) => {
        return fetch(`http://localhost:8088/scores/${id}?_expand=user`)
            .then(response => response.json())
    };

    const addGame = (gameObj) => {
        return fetch(`http://localhost:8088/games`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(gameObj)
        })
            .then(getGames)
    }
    const getGameById = (id) => {
        return fetch(`http://localhost:8088/games/${id}?_expand=user&_expand=course`)
            .then(response => response.json())
    }

    const deleteGame = gameId => {
        return fetch(`http://localhost:8088/games/${gameId}`, {
            method: "DELETE"
        })
    }

    const editGame = game => {
        return fetch(`http://localhost:8088/games/${game.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(game)
        })
            .then(getGames)
    }

    return (
        <GameContext.Provider value={{
            games, getGames, editGame, deleteGame, addGame, getGameById, setSearchTerms, searchTerms, scores, getScores, getScoreById
        }}>
            {props.children}
        </GameContext.Provider>
    )
};