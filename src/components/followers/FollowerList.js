import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FollowerContext } from "./FollowerProvider";
import { FollowerCard } from "./FollowerCard";
import "./Follower.css";

export const FollowerList = () => {
    const { getFollowers, followers } = useContext(FollowerContext)
    const [followerList, setFollowers] = useState([])
    const history = useHistory()

    useEffect(() => {
        getFollowers().then(res => {
            const x = res.filter(user => user.activeUserId === parseInt(localStorage.getItem("disc-app_user")))
            setFollowers(x)
        })
    }, [])

    return (
        <>
            <h2>Follower List</h2>
            <button className="add_friend" onClick={() => {
                history.push("/followers/create")
            }}>Add Follower</button>
            <div className="friends">
                {
                    followerList.map(friend => {
                        return <FollowerCard key={friend.id} friends={friend} />
                    })
                }
            </div>
        </>
    )
};