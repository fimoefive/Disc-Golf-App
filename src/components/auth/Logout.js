import { useHistory } from 'react-router-dom';
import React from 'react'

export const Logout = () => {

    const logout = () => {
        localStorage.clear()
        sessionStorage.clear()
        window.location.reload(true)

    }

    return (
        <>
            <div className="logoutTitle">Player Logout</div>
            <button className="logoutBtn" onClick={logout}>Logout</button>
        </>
    )
};

// export const Logout = () => {

//     const [loggedOut, setLoggedOut] = useState(false)

//     const Logout = () => {
//         const history = useHistory()
//         localStorage.removeItem("disc-app-user")
//         setLoggedOut(true)
//         history.push("/")

//     };
//     if (loggedOut) {
//         return <Redirect to="/login" push={true} />
//     }


//     return (
//         <>
//             <div>
//                 <h1>Logging out current Player</h1>
//             </div>
//         </>
//     )
// };

// export const LogoutButton = () => {

//     const [loggedOut, setLoggedOut] = useState(false)

//     const logout = () => {
//         localStorage.removeItem("whpf_user")
//         setLoggedOut(true)

//     };

//     if (loggedOut) {
//         return <Redirect to="/login" push={true} />
//     }

//     return <Button onClick={logout}>LogOut</Button>;
// };