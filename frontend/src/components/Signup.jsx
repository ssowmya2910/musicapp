import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './style/Signup.css'
const Signup = () => {
    const [email,setEmail]=useState("");
    const [password,setPass]=useState("");


  return (

    <div>
        <form>
       <div className="signupform">
        <h3 >Signup</h3>
        <form >
            <div className="FormInput">
                <label>Email:</label>
                <input type="email" id="Email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email"/>

                <label>Password:</label>
                <input type="password" id="Password" value={password} onChange={e=>setPass(e.target.value)} placeholder="Enter your Password"/>
                <button type="submit" class="btn">Login</button>
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