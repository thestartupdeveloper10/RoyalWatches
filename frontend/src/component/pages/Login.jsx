import "./Login.css";
import { Link } from 'react-router-dom';
const Login = () => {
    return ( 
        <div className=" flex-col flex justify-center w-full h-full items-center">
               <div className="wrapper bg-black">
          <div className="form-wrapper sign-in">
               <form action="#">
                    <h2>Sign In</h2>
                    <div className="input-group">
                         <input type="text" required/>
                         <label>Username</label>
                    </div>
                    <div className="input-group">
                         <input type="password" required/>
                         <label>Password</label>
                    </div>
                    <div className="remember">
                         <label><input type="checkbox"/> Remember me</label>
                    </div>
                    <button className="sign-btn" type="submit">Sign In</button>
                    <div className="signUp-link">
                         <p>Don&apost have an account? <Link className="signUpBtn-link" to="/signup">Sign Up</Link></p>
                    </div>
                    <div className="social-platform">
                         <p>Or sign in with</p>
                         <div className="social-icona">
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
}
 
export default Login;