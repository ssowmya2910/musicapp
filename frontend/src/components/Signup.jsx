import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style/Signup.css';
import { ClipLoader } from 'react-spinners';

const Signup = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://isaiwreathe.onrender.com/signup", {
        email,
        password,
      });
      setIsAuthenticated(true); // make sure to pass this prop when using <Signup />
      navigate("/home");
    } catch {
      alert("Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='signupbox'>
      <form onSubmit={handleSignup}>
        {loading ? (
          <div className="spinner-container">
            <ClipLoader color="#b254b4" size={40} />
            <p>Please wait...</p>
          </div>
        ) : (
          <div className="signupform">
            <h3>Signup</h3>
            <div className="FormInput">
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

              <button type="submit" className="btn">Signup</button>
            </div>

            <div className='login'>
              <p>Already have an account?</p>
              <Link to="/login" className="login-link">Login</Link>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
