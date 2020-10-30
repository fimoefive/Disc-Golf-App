import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationView";
import { Login } from "./Auth/Login";
// import { Logout } from "./Auth/Logout";

import { Register } from "./Auth/Register";
import { NavBar } from "./NavBar/NavBar";
import "./DiscGolf.css";

export const DiscApp = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("disc-app_user")) {
                    return (
                        <>
                            <NavBar />
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
        {/* <Route exact path="/logout">
            <Logout />
        </Route> */}
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/register">
            <Register />
        </Route>
    </>
);