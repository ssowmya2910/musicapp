import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin =async (e) => {
    e.preventDefault();
    try{
      const response=await axios.post("https://isaiwreathe.onrender.com",{email,password});
      setIsAuthenticated(true);
      navigate("/");

    }
    catch{
      alert("Invalid credentials");
    }
    
    
  };

  return (
    <div className='loginbox'>
      <form onSubmit={handleLogin}>
        <div className="loginform">
          <h3>Login</h3>
          <div className="FormInput1">
            <label>Email:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your Email" />

            <label>Password:</label>
            <input type="password" value={password} onChange={e => setPass(e.target.value)} placeholder="Enter your Password" />
            
            <button type="submit" className="loginbtn">Login</button>
          </div>
         
        </div>
        <div className='signup'>
            <p>Dont have an account?</p>
            <Link to="/signup" type="submit" class="signup">Signup</Link>
        </div>
      </form>
     
    </div>
  );
};

export default Login;
