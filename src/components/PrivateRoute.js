import {Outlet, Navigate} from "react-router-dom";

export default function PrivateRoute({auth}){
    console.log("auth is: ", auth);
    return(
        auth ? <Outlet/> : <Navigate to="/"/>
    )
};