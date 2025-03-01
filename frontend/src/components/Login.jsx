import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Login.css';
import { Link } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "sow@gmail.com" && password === "sow") {
      setIsAuthenticated(true);
      navigate('/'); 
    } else {
      alert("Invalid credentials!");
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
