import './App.css';
//import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";





function App() {
  return (
    <div className="App">
      <Router>
        { <Navbar/> }
        <Routes>
          <Route path="/" exact element={ <Home/> }/>
          <Route path="/registration" exact element={ <Registration/> }/>
          <Route path="/login" exact element={ <Login/> }/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
