import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


function Login(props) {

    const navigate = useNavigate();
    const [usernameLog, setUsernameLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");

    const login = () => {
        axios.post("http://localhost:3003/auth/login", {
            username: usernameLog,
            password: passwordLog
        }).then((response) => {
            //console.log("response.data.message", response.data.message);
            if (response.data.message) {
                alert(response.data.message);
                navigate("/login");
            }

            //{id: 1, username: 'nadia'}
            //{message: 'User does not exist'}

            //set up the id of the user to the local storage:
            localStorage.setItem("accesss", response.data.id);
            props.setLoginStatus({ username: response.data.username, id: response.data.id, status: true });
            navigate("/");
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <div className="loginContainer">
                <h1>Login</h1>
                <input type="text" placeholder="Username" onChange={(e) => { setUsernameLog(e.target.value);}} />
                <input type="text" placeholder="Password" onChange={(e) => { setPasswordLog(e.target.value);}} />
                {(usernameLog &&  passwordLog)? (<button onClick={login}>Login</button>) : (<button disabled onClick={login}>Login</button>)}
            </div>
        </div>
    );
}

Login.propTypes = {
    setLoginStatus: PropTypes.func,
};

export default Login;
