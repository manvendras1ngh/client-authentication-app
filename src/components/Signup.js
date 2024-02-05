import {useState} from "react";
import {Link} from "react-router-dom";

import profile from "../images/account_circle.svg";

export default function Signup(){
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        username:"",
        dateOfBirth:"",
        password:"",
    });

    function handleSubmit(event){
        event.preventDefault();
        const urlEncodedData = new URLSearchParams(formData).toString();

        const signup = async() =>{
            try{
                const res = await fetch("http://localhost:3000/signup",{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: urlEncodedData,
                });
                const data = await res.json();
                console.log(data);
            }catch(error){
                console.error("encountered error",error);
            };
        };

        setFormData({
            name:"",
            email:"",
            username:"",
            dateOfBirth:"",
            password:"",
        });
        signup();
    };

    function handleChange(event){
        const {name, value} = event.target;
        setFormData((prevData) =>({
            ...prevData,
            [name]: value,
        }));
    };

    return(
        <div className="card signup-dimension">
            <h1>SIGN UP</h1>
            <img src = {profile}/>
            <form className="card__form" onSubmit={handleSubmit}>
                <input
                    required
                    placeholder="Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange} 
                    name="name"
                />
                <input
                    required 
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                />
                <input
                    required 
                    placeholder="Username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    name="username"
                />
                <input 
                    placeholder="Date of Birth"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    name="dateOfBirth"
                />
                <input
                    required 
                    placeholder="Password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange} 
                    name="password"
                />
                <Link to="/">Already have an account! Login</Link>
                <button>SIGN UP</button>
            </form>
        </div>
    )
};