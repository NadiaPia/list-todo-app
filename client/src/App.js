import './App.css';
//import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={ <Home/> }/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
