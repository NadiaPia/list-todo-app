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
            console.log("response.data.length", response.data);
            //{id: 1, username: 'nadia', password: 'password', createdAt: '2023-04-14T23:16:07.000Z', updatedAt: '2023-04-14T23:16:07.000Z'}
            //{message: 'User does not exist'}     
            response.data.message ? props.setLoginStatus(response.data.message) : props.setLoginStatus(response.data) //I need the whole response.dataobject instead of just response.data.username            
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
