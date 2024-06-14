import "./Login.css";
import { Link } from 'react-router-dom';
const SignUp = () => {
    return ( 
        <>
        <div className=" flex-col flex justify-center w-full h-full items-center">
               <div className="wrapper bg-black  active">
               <div className="form-wrapper sign-up">
               <form action="#">
                    <h2>Sign Up</h2>
                    <div className="input-group">
                         <input type="text" className="w-auto" required/>
                         <label>Username</label>
                    </div>
                    <div className="input-group">
                         <input type="email" required/>
                         <label>Email</label>
                    </div>
                    <div className="input-group">
                         <input type="password" required/>
                         <label>Password</label>
                    </div>
                    <div className="remember">
                         <label><input type="checkbox"/> I agree to the terms & conditions</label>
                    </div>
                    <button type="submit">Sign Up</button>
                    <div className="signUp-link">
                         <p>Already have an account? <Link className="signInBtn-link" to="/login">Sign In</Link></p>
                    </div>
               </form>
          </div>
               </div>
               </div>
        </>
     );
}
 
export default SignUp;