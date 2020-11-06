import React from 'react'

export const Logout = () => {

    const logout = () => {
        localStorage.clear()
        sessionStorage.clear()
        window.location.reload(true)

    }

    return (
        <>
            <h2 className="logoutTitle">Current Player Logout</h2>
            <button className="logoutBtn" onClick={logout}>Logout</button>
        </>
    )
};