import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';




function Navbar(props) {

  const navigate = useNavigate();

  const logout = () => {
    console.log('logout')
    localStorage.removeItem("accesss");
    props.setLoginStatus({username: "", id: null, status: false}) //if id: 0, I have "0" symbol on the username place after logout
    navigate("/login")
  }
  return (
    <div className="navbar">
      <div className="Links">
        {!props.loginStatus.id && (
        <>
          <Link to="registration">Registration</Link>
          <Link to="login">Login</Link> 
        </>
        ) 
      }  

      </div>
      <div className="loggedInContainer">
      {props.loginStatus.id && <button onClick={logout}>logout</button>}
      <div className="userContainer">
        {props.loginStatus.id && <FontAwesomeIcon icon={faUser} />}
        <p>{props.loginStatus.username}</p>
      </div>
      </div>
    </div>
  )
}

export default Navbar
