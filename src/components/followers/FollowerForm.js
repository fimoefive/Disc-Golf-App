import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { FollowerContext } from "./FollowerProvider";

export const FollowerForm = () => {
    const { getFollowers, addFollower, getUsers } = useContext(FollowerContext)

    const [followers, setFollowers] = useState([])
    const [follower, setFollower] = useState([])
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()

    const followerName = useRef()

    const handleControlledInputChange = (event) => {
        const newFollower = { ...follower }
        newFollower[event.target.name] = event.target.value
        setFollower(newFollower)
    }

    useEffect(() => {
        getFollowers().then(res => {
            const g = res.filter(user => user.activeUserId === parseInt(localStorage.getItem("disc-app_user")))
            setFollowers(g)
            setIsLoading(false)
        })
    }, []);

    useEffect(() => {
        getUsers().then(setUsers)
    }, []);

    const constructFollowerObject = () => {

        const foundFollower = users.find(user => user.username === followerName.current.value)

        if (!foundFollower) {
            window.alert("That user does not exist!")
        }
        else if (foundFollower.id === parseInt(localStorage.getItem("disc-app_user"))) {
            window.alert("You can not add yourself!")
        }
        else {
            setIsLoading(true)
            addFollower({
                userId: foundFollower.id,
                activeUserId: parseInt(localStorage.getItem("disc-app_user")),
            })
                .then(() => {
                    history.push("/")
                })
        }
    }

    return (
        <form className="followerForm">
            <h2 className="followerForm_title">Add Follower</h2>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="followerName">UserName</label>
                    <input type="text" ref={followerName} id="gameName" name="name" required autoFocus className="from-control"
                        placeholder="Followers Name"
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    constructFollowerObject()
                }}>Save Follower</button>
        </form>
    )
};