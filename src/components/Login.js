import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import profile from "../images/account_circle.svg";

export default function Login({change}){
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(false);
    const [formData, setFormData] = useState({
        username:"",
        password:"",
    });

    function handleSubmit(event){
        event.preventDefault();
        const urlEncodedData = new URLSearchParams(formData).toString();

        const login = async() => {
            try{
                const res = await fetch("http://localhost:3000/login", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: urlEncodedData,
                });
                const data = await res.json();
                if(data.message === "Login Successfull"){
                    localStorage.setItem("userData", JSON.stringify(data));
                    setErrorMessage(false);
                    change(true);
                    navigate("/user-details");
                }else{
                    setErrorMessage(true);
                    change(false);
                    navigate("/");
                }
            }catch(error){
                console.error("Encountered error", error);
            };
        };

        setFormData({
            username:"",
            password:"",
        });
        login();
    };

    function handleChange(event){
        const {name, value} = event.target;
        setFormData((prevData) =>({
            ...prevData,
            [name]: value,
        }));
    };
    return(
        <div className="card login-dimension">
            <h1>SIGN IN</h1>
            <img alt = "profile annotation" src = {profile}/>
            <form className="card__form" onSubmit={handleSubmit}>
                <input
                    required
                    placeholder="Username" 
                    type="text" 
                    value={formData.username} 
                    onChange={handleChange} 
                    name="username"
                />
                <input
                    required
                    placeholder="Password" 
                    type="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    name="password"
                />
                <span>{errorMessage ? "Invalid Credentials!" : null}</span>
                <Link to="/signup">No account! Signup</Link>
                <button>LOGIN</button>
            </form>
        </div>
    )
};