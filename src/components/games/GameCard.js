import React from "react";
import { Link } from "react-router-dom";
import "./Game.css";


export const GameCard = ({ games }) => (
    <section className="articles">
        <h3 className="article_title">{articles.title}</h3>
        <Link to={`/articles/detail/${articles.id}`}>
            {articles.title}
        </Link>
        <div className="article_summary">{articles.summary}</div>
        <div className="article_url">{articles.URL}</div>
        <div className="article__user">Posted by: {articles.user.username}</div>

        <div className="article__date">At: {articles.date?.split("T")[0]}</div>
    </section>
)