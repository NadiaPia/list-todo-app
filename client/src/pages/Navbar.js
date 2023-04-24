import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {

  const logout = () => {
    localStorage.removeItem("accesss");
    props.setLoginStatus({username: "", id: null, status: false}) //if id: 0, I have "0" symbol on the username place after logout
  }
  return (
    <div className="navbar">
      <div className="Links">
        {!props.loginStatus.id? (
        <>
          <Link to="registration">Registration</Link>
          <Link to="login">Login</Link> 
        </>
        ) : (
        <Link to="/">Home Page</Link>
        )  
      }  

      </div>
      <div>
      <h1>{props.loginStatus.username}</h1>
      {props.loginStatus.id && <button onClick={logout}>logout</button>}
      </div>
    </div>
  )
}

export default Navbar
