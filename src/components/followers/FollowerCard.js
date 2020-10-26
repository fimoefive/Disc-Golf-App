import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FollowerContext } from "./FollowerProvider";
import { FollowerList } from "./FollowerList.js";
import "./Follower.css";

export const FriendCard = ({ followers }) => {

    const { deleteFollower, getFollowers } = useContext(FollowerContext)
    const history = useHistory()
    const handleDelete = (x) => {
        deleteFollower(x).then(getFollowers).then(e => {
            history.push("/games")
            history.push("/")
        })
    }
    return (
        <section className="followers">
            <div className="follower_name">{followers.user.username}</div>
            <button onClick={
                () => {
                    handleDelete(followers.id)
                }}>Delete Follower
                    </button>
        </section>
    )
};