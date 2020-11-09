import React from "react";
import "./Rank.css";
import { Table } from 'reactstrap';


export const RankCard = ({ games }) => (
    <section className="ranks">
        {/* <h3 className="game_title">{games.title}</h3>
        <div className="game__user">Posted by: {games.user.username}</div>
        <div className="game_score">Total Score: {games.score}</div>
        <div className="game_score">games.id: {games.id}</div>
        <div className="game__user">games.user.id: {games.user.id}</div> */}
        <Table striped border="4">
            <thead scope="row"><td>Player</td><td>Average Score</td></thead>
            <tr></tr>
            <thead scope="row"><td>{games.user.username}</td><td>{games.score}</td></thead>
        </Table>
    </section>
);