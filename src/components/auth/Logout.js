import React from 'react';
import { Button } from 'reactstrap';

export const Logout = () => {

    const logout = () => {
        localStorage.clear()
        sessionStorage.clear()
        window.location.reload(true)

    }

    return (
        <>
            <h2 className="logoutTitle">Current Player Logout</h2>
            <Button color="blue" className="btn-primary" onClick={logout}>Logout</Button>
            <br></br>
        </>
    )
};