import React, { useState, createContext } from "react";

export const FollowerContext = createContext();

export const FollowerProvider = (props) => {
    const [followers, setFollowers] = useState([]);
    const [searchTerms, setSearchTerms] = useState([]);

    const getFollowers = () => {
        return fetch(`http://localhost:8088/followers?_expand=user`)
            .then(response => response.json())
            .then(response => {
                setFollowers(response)
                return response
            })
    }

    const addFollower = (fObj) => {
        return fetch(`http://localhost:8088/followers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fObj)
        })
            .then(getFollowers)
    }

    const deleteFollower = (fObj) => {
        return fetch(`http://localhost:8088/followers/${fObj}`, {
            method: "DELETE"
        })
    }

    const getUsers = () => {
        return fetch(`http://localhost:8088/users`)
            .then(response => response.json())
    }

    return (
        <FollowerContext.Provider value={{
            followers, getUsers, getFollowers, deleteFollower, addFollower, searchTerms, setSearchTerms
        }}>
            {props.children}
        </FollowerContext.Provider>
    )
};