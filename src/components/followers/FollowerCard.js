import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FollowerContext } from "./FollowerProvider";
import "./Follower.css";
import { Button } from 'reactstrap';

export const FollowerCard = ({ followers }) => {

    const { deleteFollower, getFollowers } = useContext(FollowerContext)
    const history = useHistory()
    const handleDelete = (fObj) => {
        deleteFollower(fObj).then(getFollowers).then(e => {
            history.push("/games")
            history.push("/")
        })
    }
    return (
        <section className="followers">
            <div className="follower_name">{followers.user.username}</div>
            <Button color="blue" className="btn-primary"
                onClick={
                    () => {
                        handleDelete(followers.id)
                    }}>Delete Follower
                </Button>
        </section>
    )
};