import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";

import { ScoreForm } from "./Scores/ScoreForm";
import { ScoreList } from "./Scores/ScoreList";
import { ScoreDetail } from "./Scores/ScoreDetail";
import { ScoreProvider } from "./Scores/ScoreProvider";
import { ScoreSearch } from "./Scores/ScoreSearch";

import { GameForm } from "./Games/GameForm";
import { GamesList } from "./Games/GameList";
import { GameDetail } from "./Games/GameDetail";
import { GameProvider } from "./Games/GameProvider";
import { GameSearch } from "./Games/GameSearch";

import { ChatProvider } from "./Chat/ChatProvider"
import { ChatForm } from "./Chat/ChatForm"
import { ChatList } from "./Chat/ChatList"
import { ChatDetail } from "./Chat/ChatDetail"


import { FollowerList } from "./Followers/FollowerList";
import { FollowerProvider } from "./Followers/FollowerProvider";
import { FollowerForm } from "./Followers/FollowerForm";

export const ApplicationViews = () => {
    return (
        <>
            <FollowerProvider>
                <Route exact path="/">
                    <Home />
                    <FollowerList />
                </Route>
            </FollowerProvider>

            <FollowerProvider>
                <Route exact path="/followers/create">
                    <FollowerForm />
                </Route>
            </FollowerProvider>

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

            <GameProvider>
                <Route exact path="/games">
                    <GameSearch />
                    <GamesList />
                </Route>
            </GameProvider>

            <GameProvider>
                <Route exact path="/games/detail/:gameId(\d+)">
                    <GameDetail />
                </Route>
            </GameProvider>

            <GameProvider>
                <Route exact path="/games/create">
                    <GameForm />
                </Route>
            </GameProvider>

            <GameProvider>
                <Route exact path="/games/edit/:gameId(\d+)">
                    <GameForm />
                </Route>
            </GameProvider>

            <ChatProvider>
                <Route exact path="/chats/create">
                    <ChatForm />
                </Route>
            </ChatProvider>

            <ChatProvider>
                <Route exact path="/chats/edit/:chatId(\d+)">
                    <ChatForm />
                </Route>
            </ChatProvider>

            <ChatProvider>
                <Route exact path="/chats">
                    <ChatList />
                </Route>
            </ChatProvider>

            <ChatProvider>
                <Route exact path="/chats/detail/:chatId(\d+)">
                    <ChatDetail />
                </Route>
            </ChatProvider>
        </>
    )
};