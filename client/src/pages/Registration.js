import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Registration(props) {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const navigate = useNavigate();


    const register = () => {
        axios.post("http://localhost:3003/auth", {
            username: usernameReg,
            password: passwordReg
        }).then((response) => {
            console.log("responseresponseresponseresponse", response.data.id)
            localStorage.setItem("accesss", response.data.id);
            props.setLoginStatus({username: response.data.username, id:response.data.id, status: true})
           
            navigate("/")
        }) .catch(error => {
            console.log(error)
        })
    }

  return (
    <div className="registration">
        <h1>Registration</h1>
        <label >Username</label>
        <input type="text" onChange={(e) => {setUsernameReg(e.target.value)}} />

        <label >Password</label>
        <input type="text" onChange={(e) => {setPasswordReg(e.target.value)}}/>

        <button onClick={register}>Register</button>
      
    </div>
  )
}

export default Registration
