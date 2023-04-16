import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="Links">
        <Link to="registration">Registration</Link>
        <Link to="login">Login</Link>
        <Link to="/">Home Page</Link>

      </div>
    </div>
  )
}

export default Navbar
