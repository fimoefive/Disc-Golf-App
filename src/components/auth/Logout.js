import React from "react"
import { useHistory } from 'react-router-dom';



export const Logout = () => {
    const history = useHistory()
    localStorage.removeItem("disc-app-user")
    history.push("/")


    return (
        <>
            <div>
                <h1>Logging out current Player</h1>
            </div>
        </>
    )
};