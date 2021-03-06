import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { Logout } from "./Auth/Logout";


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

import { RankForm } from "./Ranks/RankForm";
import { RankList } from "./Ranks/RankList";
import { RankDetail } from "./Ranks/RankDetail";
import { RankProvider } from "./Ranks/RankProvider";
import { RankSearch } from "./Ranks/RankSearch";

import { CourseProvider } from "./Courses/CourseProvider";

import { MessageProvider } from "./Messages/MessageProvider";
import { MessageForm } from "./Messages/MessageForm";
import { MessageList } from "./Messages/MessageList";
import { MessageDetail } from "./Messages/MessageDetail";

import { FollowerList } from "./Followers/FollowerList";
import { FollowerProvider } from "./Followers/FollowerProvider";
import { FollowerForm } from "./Followers/FollowerForm";

export const ApplicationViews = (props) => {
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
                <ScoreProvider>
                    <Route exact path="/games">
                        <GameSearch />
                        <GamesList />
                    </Route>
                </ScoreProvider>
            </GameProvider>

            <GameProvider>
                <ScoreProvider>
                    <Route exact path="/games/detail/:gameId(\d+)">
                        <GameDetail />
                    </Route>
                </ScoreProvider>
            </GameProvider>

            <GameProvider>
                <ScoreProvider>
                    <CourseProvider>
                        <Route exact path="/games/create"
                            render={(props) => <GameForm {...props} />}>
                        </Route>
                    </CourseProvider>
                </ScoreProvider>
            </GameProvider>

            <GameProvider>
                <ScoreProvider>
                    <CourseProvider>
                        <Route exact path="/games/edit/:gameId(\d+)"
                            render={(props) => <GameForm {...props} />}>
                        </Route>
                    </CourseProvider>
                </ScoreProvider>
            </GameProvider>

            <RankProvider>
                <GameProvider>
                    <Route exact path="/ranks">
                        <RankSearch />
                        <RankList />
                    </Route>
                </GameProvider>
            </RankProvider>

            <RankProvider>
                <GameProvider>
                    <Route exact path="/ranks/create"
                        render={(props) => <RankForm {...props} />}>
                    </Route>
                </GameProvider>
            </RankProvider>

            <RankProvider>
                <GameProvider>
                    <Route exact path="/ranks/detail/:gameId(\d+)">
                        <RankDetail />
                        <GameDetail />
                    </Route>
                </GameProvider>
            </RankProvider>

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
                <Route exact path="/messages">
                    <MessageList />
                </Route>
            </MessageProvider>

            <MessageProvider>
                <Route exact path="/messages/detail/:chatId(\d+)">
                    <MessageDetail />
                </Route>
            </MessageProvider>

            <Route exact path="/logout">
                <Logout />
                <discBasket />
            </Route>
        </>
    )
};