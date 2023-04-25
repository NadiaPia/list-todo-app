import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { /* BrowserRouter as Router,*/ Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";

function App() {
  const [loginStatus, setLoginStatus] = useState({ username: "", id: null, status: false });
  const navigate = useNavigate();
  useEffect(() => {
    const accesss = localStorage.getItem("accesss");
    if (!accesss) {
      navigate("/registration");
      return;
    }

    axios.get("http://localhost:3003/auth/auth", { headers: { accesss: accesss } })
      .then((response) => {
        console.log(response.data);
        if (response.data.error) {
          setLoginStatus({ ...loginStatus, status: false });
        } else {
          setLoginStatus({ username: response.data.username, id: response.data.id, status: true });
        }
      });

  }, []);

  return (
    <div className="App">
      {/* <Router> */} {/*I wrapped up the whole App.js in the index.js to make our useNavigate work*/}
      {<Navbar
        loginStatus={loginStatus}
        setLoginStatus={setLoginStatus}
      />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/registration" exact element={
          <Registration setLoginStatus={setLoginStatus} />} />
        <Route path="/login" exact element={
          <Login
            setLoginStatus={setLoginStatus}
            loginStatus={loginStatus}
          />
        }
        />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
