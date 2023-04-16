import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="Links">
        <Link to="registration">Registration</Link>
        <Link to="login">Login</Link>
        <Link to="/">Home Page</Link>
        

      </div>
      <div>
      <h1>{props.loginStatus.username}</h1>
      </div>
    </div>
  )
}

export default Navbar
