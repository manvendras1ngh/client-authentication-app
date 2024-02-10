import {Routes, Route, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";

import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDetails from "./components/UserDetails";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if(authenticated){
      navigate("/user-details");
    }
  },[navigate,authenticated]);

  return (
    <div className="main">
      <Routes>
      <Route path="/" element={<Login change = {setAuthenticated}/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route element={<PrivateRoute auth = {authenticated}/>}>
          <Route path="/user-details" element={<UserDetails/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
