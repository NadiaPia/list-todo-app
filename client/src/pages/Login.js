import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {

    const navigate = useNavigate();

    const [usernameLog, setUsernameLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");    

    const login = () => {
        axios.post("http://localhost:3003/auth/login", {
            username: usernameLog,
            password: passwordLog
        }).then((response) => {
            console.log("response.data", response.data);
            console.log("response.data.message", response.data.message);
            if(response.data.message) {
                alert("User does not exist. Go to the registration page!")
            }

            //{id: 1, username: 'nadia'}
            //{message: 'User does not exist'}

            //set up the id of the usrer to the local storage:
            localStorage.setItem("accesss", response.data.id);
            
            props.setLoginStatus({username: response.data.username, id:response.data.id, status: true})
           
            navigate("/")
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>            

            <div className="loginContainer">
                <h1>Login</h1>

                <input type="text" placeholder="Username" onChange={(e) => { setUsernameLog(e.target.value) }} />

                <input type="text" placeholder="Password..." onChange={(e) => { setPasswordLog(e.target.value) }} />

                <button onClick={login}>Login</button>

            </div>
            
        </div>
    )
}

export default Login;
