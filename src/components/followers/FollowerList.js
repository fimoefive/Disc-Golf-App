import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FollowerContext } from "./FollowerProvider";
import { FollowerCard } from "./FollowerCard";
import "./Follower.css";
import { Button } from 'reactstrap';

export const FollowerList = () => {
    const { getFollowers, followers } = useContext(FollowerContext)
    const [followerList, setFollowers] = useState([])
    const history = useHistory()

    useEffect(() => {
        getFollowers().then(res => {
            const fObj = res.filter(user => user.activeUserId === parseInt(localStorage.getItem("disc-app_user")))
            setFollowers(fObj)
        })
    }, [])

    return (
        <>
            <h2>Followers List</h2>
            <Button color="blue" className="btn-primary" onClick={() => {
                history.push("/followers/create")
            }}>Add Follower</Button>
            <div className="followers">
                {
                    followerList.map(follower => {
                        return <FollowerCard key={follower.id} followers={follower} />
                    })
                }
            </div>
        </>
    )
};