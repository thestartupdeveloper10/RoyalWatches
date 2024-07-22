import { useDispatch } from 'react-redux';
import { register } from '../../redux/apiCalls';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();
    if (username && email && password) {
      try {
        await register(dispatch, { username, email, password }); // Assuming register returns a promise
        navigate('/login'); // Navigate to login page upon successful registration
      } catch (error) {
        console.error('Registration failed:', error);
        // Optionally, handle registration failure
      }
    }
  };

  return (
    <div className="flex-col flex justify-center w-full h-[90dvh] items-center">
      <div className="wrapper bg-black active">
        <div className="form-wrapper sign-up">
          <form>
            <h2>Sign Up</h2>
            <div className="input-group">
              <input
                type="text"
                className="w-auto"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>
            <button type="submit" onClick={handleRegister} className='sign-btn'>Sign Up</button>
            <div className="signUp-link">
              <p>
                Already have an account? <Link className="signInBtn-link" to="/login">Sign In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
