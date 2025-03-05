import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './style/Signup.css'
const Signup = () => {
    const [email,setEmail]=useState("");
    const [password,setPass]=useState("");
    const navigate=useNavigate();
    const handleSignup=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post("https://isaiwreathe.onrender.com",{email,password});
            alert(response.data.message);
            navigate("/login");
        }
        catch(error){
            alert("Signup failed");
        }

    };
   
    
  return (

    <div className='signupbox'>
        <form onSubmit={handleSignup}>
       <div className="signupform">
        <h3 >Signup</h3>
        <form >
            <div className="FormInput">
                <label>Email:</label>
                <input type="email" id="Email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email"/>

                <label>Password:</label>
                <input type="password" id="Password" value={password} onChange={e=>setPass(e.target.value)} placeholder="Enter your Password"/>
                <button type="submit" class="btn">Signup
                </button>
            </div>
        </form>
       


        <div className='login'>
            <p>Already have an account?</p>
            <Link to="/login" type="submit" class="login">Login</Link>
        </div>
    </div>
    </form>

    </div>
  )
}

export default Signup