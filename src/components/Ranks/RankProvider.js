import React, { useState, createContext } from "react";

export const RankContext = createContext();

export const RankProvider = (props) => {
    const [games, setGames] = useState([]);
    const [averageScore, setAverageScore] = useState([]);
    const [searchTerms, setSearchTerms] = useState();

    const getGames = () => {
        return fetch(`http://localhost:8088/games?_expand=user&_expand=course&_sort=id&_order=DESC?_expand=course`)
            .then(response => response.json())
            .then(setGames)
    }
    const getAverageScore = () => {
        return games
    }
    console.log(games)

    var users = []
    for (i = 0; i < games.length; i++) {
        if (users.indexOf(games[i].userId) === -1) {
            users.push(games[i].userId)
        }
    }
    console.log("users: " + users)
    var objectToDisplay = [];
    var i;
    var scores = [];
    var average = 0
    var x
    for (x = 0; x < users.length; x++) {
        var totalScore = 0

        for (i = 0; i < games.length; i++) {
            if (games[i].userId == users[x]) {
                scores.push(games[i].score)
                totalScore += parseInt(games[i].score)
                if (i == games.length - 1) {
                    average = totalScore / games.length
                }
            }
        }
        if (x == users.length - 1) {
            objectToDisplay.push(users[x])
            objectToDisplay.push(average)
        }
        console.log("scores: " + scores)
        console.log("totalScore: " + totalScore)
        console.log("average: " + average)
        console.log("JSON.stringify(objectToDisplay): " + JSON.stringify(objectToDisplay))

    }


    /*const addGame = (x) => {
        return fetch(`http://localhost:8088/games`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
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
    }*/

    return (
        <RankContext.Provider value={{
            games, getGames, setSearchTerms, searchTerms, average
            // , editGame, deleteGame, addGame, getGameById, 
        }}>
            {props.children}
        </RankContext.Provider>
    )
};