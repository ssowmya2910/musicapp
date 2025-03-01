import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './style/Login.css'
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPass]=useState("");
  return (
    <div className='loginbox'>
        <form>
       <div className="loginform">
        <h3 >Login</h3>
        <form >
            <div className="FormInput1">
                <label>Email:</label>
                <input type="email" id="Email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email"/>

                <label>Password:</label>
                <input type="password" id="Password" value={password} onChange={e=>setPass(e.target.value)} placeholder="Enter your Password"/>
                <button type="submit" class="loginbtn">Login</button>
            </div>
        </form>
        <div className='signup'>
            <p>Dont have an account?</p>
            <Link to="/signup" type="submit" class="signup">Signup</Link>
        </div>
    </div>
    </form>

    </div>
  )
}

export default Login