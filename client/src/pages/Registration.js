import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function Registration(props) {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const navigate = useNavigate();

    const register = () => {        
        axios.post("http://localhost:3003/auth", {
            username: usernameReg,
            password: passwordReg
        }).then((response) => {
            //console.log("response.data.id", response.data.id);
            localStorage.setItem("accesss", response.data.id);
            props.setLoginStatus({ username: response.data.username, id: response.data.id, status: true });
            navigate("/");
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="registration">
            <h1>Registration</h1>
            <input type="text" placeholder="Username" onChange={(e) => { setUsernameReg(e.target.value); }} />
            <input type="text" placeholder="Password" onChange={(e) => { setPasswordReg(e.target.value); }} />
            {(usernameReg &&  passwordReg)? <button onClick={register}>Register</button> : <button disabled  onClick={register}>Register</button>}
        </div>
    );
}

Registration.propTypes = {
    setLoginStatus: PropTypes.func,
};

export default Registration;
