import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./Login.css";
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (username && password) {
      login(dispatch, { username, password });
    }
  };

  return (
    <div className="flex-col flex justify-center w-full h-[90dvh] items-center">
      <div className="wrapper bg-black">
        <div className="form-wrapper sign-in">
          <form onSubmit={handleClick}>
            <h2>Sign In</h2>
            <div className="input-group">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Username</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button
              type="submit"
              className={`sign-btn ${isFetching ? "not-allowed" : ""}`}
              disabled={isFetching}
            >
              Sign In
            </button>
            {error && <div className="text-red-700 mt-3">Something went wrong...</div>}
            <div className="signUp-link">
              <p>
                Don&apos;t have an account? <Link className="signUpBtn-link" to="/signup">Sign Up</Link>
              </p>
            </div>
            <div className="social-platform">
              <p>Or sign in with</p>
              <div className="social-icons">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-google"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
