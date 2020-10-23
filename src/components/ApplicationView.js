import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { ScoreForm } from "./Scores/ScoreForm";
import { ScoreProvider } from "./Scores/ScoreProvider";
import { ScoreSearch } from "./Scores/ScoreSearch";
import { ScoreList } from "./Scores/ScoreList";
import { ScoreDetail } from "./Scores/ScoreDetail";

import { MessageSearch } from "./Messages/MessageSearch";
import { MessageProvider } from "./Messages/MessageProvider"
import { MessageForm } from "./Messages/MessageForm"
import { MessageList } from "./Messages/MessageList"
import { MessageDetail } from "./Messages/MessageDetail"




export const ApplicationViews = () => {
    return (
        <>
            <ScoreProvider>
                <Route exact path="/scores">
                    <ScoreSearch />
                    <ScoreList />
                </Route>
            </ScoreProvider>

            <ScoreProvider>
                <Route exact path="/scores/detail/:scoreId(\d+)">
                    <ScoreDetail />
                </Route>
            </ScoreProvider>

            <ScoreProvider>
                <Route exact path="/scores/create">
                    <ScoreForm />
                </Route>
            </ScoreProvider>

            <ScoreProvider>
                <Route exact path="/scores/edit/:scoreId(\d+)">
                    <ScoreForm />
                </Route>
            </ScoreProvider>


            <MessageProvider>
                <Route exact path="/messages">
                    <MessageList />
                    <MessageSearch />
                </Route>
            </MessageProvider>

            <MessageProvider>
                <Route exact path="/messages/create">
                    <MessageForm />
                </Route>
            </MessageProvider>

            <MessageProvider>
                <Route exact path="/messages/edit/:chatId(\d+)">
                    <MessageForm />
                </Route>
            </MessageProvider>

            <MessageProvider>
                <Route exact path="/messages/detail/:chatId(\d+)">
                    <MessageDetail />
                </Route>
            </MessageProvider>

        </>
    )
};