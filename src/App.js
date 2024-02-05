import {Routes, Route} from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/user-details" element={<UserDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
