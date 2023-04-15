import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate()

    const [usernameLog, setUsernameLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    
    const login = () => {
        axios.post("http://localhost:3003/auth/login", {
            username: usernameLog, 
            password: passwordLog
        }).then((response) => {
            console.log("response", response);
            navigate("/")

        }) .catch(error => {
            console.log(error)
        })
    }

  return (
    <div className="login">
        <h1>Login</h1>
        
        <input type="text" placeholder="Username" onChange={(e) => {setUsernameLog(e.target.value)}}/>
        
        <input type="text" placeholder="Password..." onChange={(e) => {setPasswordLog(e.target.value)}}/>

        <button onClick={login}>Login</button>
      
    </div>
  )
}

export default Login
