import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners'; // Make sure to install this package

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://isaiwreathe.onrender.com/login", {
        email,
        password,
      });
      setIsAuthenticated(true);
      navigate("/home");
    } catch {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='loginbox'>
      <form onSubmit={handleLogin}>
        {loading ? (
          <div className="spinner-container">
            <ClipLoader color="#b254b4" size={40} />
            <p>please wait..</p>
          </div>
        ) : (
          <div className="loginform">
            <h3>Login</h3>
            <div className="FormInput1">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
              />

              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={e => setPass(e.target.value)}
                placeholder="Enter your Password"
                required
              />

              <button type="submit" className="loginbtn">Login</button>
            </div>

            <div className='signup'>
              <p>Don't have an account?</p>
              <Link to="/signup" className="signup-link">Signup</Link>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
