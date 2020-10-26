import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { FollowerContext } from "./FollowerProvider";

export const FollowerForm = () => {
    const { getFollowers, addFollower, getUsers } = useContext(FollowerContext)

    const [follower, setFollowers] = useState([])
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
            const x = res.filter(user => user.activeUserId === parseInt(localStorage.getItem("disc-app_user")))
            setFollowers(x)
            setIsLoading(false)
        })
    }, []);

    useEffect(() => {
        getUsers().then(setUsers)
    }, []);

    const constructFollowerObject = () => {

        const foundFriend = users.find(user => user.username === followerName.current.value)

        if (!foundFriend) {
            window.alert("That user does not exist!")
        }
        else if (foundFriend.id === parseInt(localStorage.getItem("nutshell_customer"))) {
            window.alert("You can not add yourself!")
        }
        else {
            setIsLoading(true)
            addFollower({
                userId: foundFriend.id,
                activeUserId: parseInt(localStorage.getItem("disc-app_user")),
            })
                .then(() => {
                    history.push("/")
                })
        }
    }

    return (
        <form className="friendForm">
            <h2 className="friendForm_title">Add Follower</h2>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="friendName">UserName</label>
                    <input type="text" ref={friendName} id="articleName" name="name" required autoFocus className="from-control"
                        placeholder="Followers Name"
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructFollowerObject()
                }}>Save Follower</button>
        </form>
    )
};