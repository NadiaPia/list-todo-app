import './App.css';
import { useState } from 'react';

//import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";


function App() {

  const [loginStatus, setLoginStatus] = useState("")

  return (
    <div className="App">
      <Router>
        { <Navbar loginStatus={loginStatus}/> }
        <Routes>
          <Route path="/" exact element={ <Home/> }/>
          <Route path="/registration" exact element={ <Registration/> }/>
          <Route path="/login" exact element={ <Login setLoginStatus={setLoginStatus} loginStatus={loginStatus}/> }/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
